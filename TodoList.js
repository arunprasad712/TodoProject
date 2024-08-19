// function TodoList(props) {
//     const { todoList } = props;
  
//     // Ensure todoList is an array
//     if (!Array.isArray(todoList)) {
//       console.error('Expected todoList to be an array, but received:', todoList);
//       return <div>Error: todoList is not an array.</div>;
//     }
  
//     return (
//       <div>
//         <h1>TodoList</h1>
//         {
//           todoList.length > 0 ? (
//             todoList.map((todo, index) => <h1 key={index}>{todo}</h1>)
//           ) : (
//             <p>No tasks to show</p>
//           )
//         }
//       </div>
//     );
//   }
  
//   export default TodoList;
import React from 'react';

function TodoList(props) {
  const { todoList } = props;

  // Ensure todoList is an array
  if (!Array.isArray(todoList)) {
    console.error('Expected todoList to be an array, but received:', todoList);
    return <div className="alert alert-danger">Error: todoList is not an array.</div>;
  }

  return (
    <div className="todo-list-container mt-4">
      <h1 className="text-secondary">Todo List</h1>
      <div className="list-group">
        {todoList.length > 0 ? (
          todoList.map((todo, index) => (
            <h1 key={index} className="list-group-item list-group-item-action text-primary">
              {todo}
            </h1>
          ))
        ) : (
          <p className="alert alert-info">No tasks to show</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
