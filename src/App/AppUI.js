import React from 'react';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton';
import DeleteTodoButton from '../components/DeleteTodoButton';
import NewTaskPopup from '../components/NewTaskPopup';

function AppUi({
  todos,
  setSearchValue,
  searchedTodos,
  toggleTodo,
  deleteTodo,
  deleteMode,
  setIsPopupVisible,
  handleDeleteButtonClick,
  isPopupVisible,
  addNewTodo
}) {
  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoCounter total={todos.length} completed={todos.filter(todo => todo.completed).length} />
      <TodoSearch setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => toggleTodo(index)}
            onDelete={() => deleteTodo(index)}
            deleteMode={deleteMode}
          />
        ))}
      </TodoList>
      <CreateTodoButton onClick={() => setIsPopupVisible(true)} />
      <DeleteTodoButton onClick={handleDeleteButtonClick} />
      {isPopupVisible && <NewTaskPopup onClose={() => setIsPopupVisible(false)} onSave={addNewTodo} />}
    </div>
  );
}

export default AppUi;
