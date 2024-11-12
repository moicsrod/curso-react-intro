import React from 'react';
import CheckIcon from './icons svg/CheckIcon.svg';


function TodoItem({ text, completed, onToggle, onDelete, deleteMode }) {
  const handleClick = () => {
    if (deleteMode) {
      onDelete();
    } else {
      onToggle();
    }
  };

  return (
    <div className={`TodoItem ${completed ? 'completed' : ''}`} onClick={handleClick}>
      <span className="icon-container">
        {completed ? <img src={CheckIcon} className="icon" alt="check icon" /> : ''}
      </span>
      <span>{text}</span>
    </div>
  );
}

export default TodoItem;





