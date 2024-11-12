import React from 'react';
import SearchIcon from './icons svg/search-md.svg';

function TodoSearch({ setSearchValue }) {
  return (
    <div className="search-container">
      <img src={SearchIcon} className="search-icon" alt="search icon" />
      <input
        className="TodoSearch"
        type="text"
        placeholder="Search tasks"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export default TodoSearch;
