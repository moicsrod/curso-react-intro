import React from 'react';


function DeleteTodoButton({ onClick }) {
  return (
    <button className="DeleteTodoButton" onClick={onClick} >
      Delete task
    </button>
  );
}

export default DeleteTodoButton;
