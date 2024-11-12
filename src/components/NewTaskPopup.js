import React, { useState } from 'react';

function NewTaskPopup({ onClose, onSave }) {
  const [newTask, setNewTask] = useState('');

  const handleSave = () => {
    if (newTask.trim() !== '') {
      onSave(newTask);
      onClose();
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Create New Task</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default NewTaskPopup;
