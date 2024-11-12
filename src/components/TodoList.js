import React from 'react';


function TodoList({ children }) {
  return (
    <div className="TodoList">
      {children}
    </div>
  );
}

export default TodoList;



/*import React from 'react'

function TodoList(props) {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export { TodoList }*/


