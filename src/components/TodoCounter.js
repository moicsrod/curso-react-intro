import React from 'react';


function TodoCounter({ total, completed }) {

  const allTodosCompleted = total > 0 && completed === total;
  
  return (
    <h2 className="TodoCounter">
       {allTodosCompleted 
        ? 'Congratulations! You have completed all of your tasks.' 
        : `You have completed ${completed} of ${total} tasks`}
    </h2>
  );
}

export default TodoCounter;


/*import './TodoCounter.css'


function TodoCounter({ total, completed }) {
    return (
        <div>
        <h1>
          Todo app  
            </h1> 
        <h2>
            You have completed {completed} of {total} tasks
        </h2>
        </div>
    )
}

export { TodoCounter } */


