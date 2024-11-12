import React from 'react';

function CreateTodoButton({ onClick }) {
  return (
    <button className="CreateTodoButton" onClick={onClick}>
      Create New Task
    </button>
  );
}

export default CreateTodoButton;
