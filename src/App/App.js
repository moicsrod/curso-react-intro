import React, { useState, useEffect } from 'react';
import AppUi from './AppUI'; 
import '../CSS/App.css'; 

const defaultTodos = [
  { text: 'Get a chamba', completed: true },
  { text: 'Keep the chamba', completed: false },
  { text: 'Become a better chambero', completed: false },
  { text: 'Get a better chamba', completed: false },
];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  
  
  const [todos, setTodos] = useState(localStorageTodos ? JSON.parse(localStorageTodos) : defaultTodos);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);      

  /*useEffect(() => {
   setTimeout(() => {
      setError('Oops something went wrong!');
      setLoading(false); 
    }, 2000); 
  }, []); */
  

  useEffect(() => {
    setTimeout(() => {
      try {
        if (localStorageTodos) {
          setTodos(JSON.parse(localStorageTodos));
        } else {
          throw new Error('Failed to load todos');
        }
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    }, 2000); 
  }, []);


  useEffect(() => {
    localStorage.setItem('TODOS_V1', JSON.stringify(todos));
  }, [todos]);

 
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const addNewTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    setDeleteMode(false);
  };

  const handleDeleteButtonClick = () => {
    setDeleteMode(true);
  };

  const searchedTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      {loading ? (
   
   <div className="spinner-container">
        <div className="spinner"></div>
    </div>
      ) : error ? (
        
        <div className="error-popup">
          <p>{error}</p>
          <button onClick={() => setError(null)}>Close</button>
        </div>
      ) : (
        
        <AppUi
          todos={todos}
          setSearchValue={setSearchValue}
          searchedTodos={searchedTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          deleteMode={deleteMode}
          setIsPopupVisible={setIsPopupVisible}
          handleDeleteButtonClick={handleDeleteButtonClick}
          isPopupVisible={isPopupVisible}
          addNewTodo={addNewTodo}
        />
      )}
    </div>
  );
}

export default App;
