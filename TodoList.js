import React from 'react';

function TodoList(props) {
  const { todoList, onComplete,onDeleteList} = props;

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
            <div key={index} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <h1 className="text-primary">{todo}</h1>
              <div>
              <button onClick={() => onDeleteList(index)} className="btn btn-danger btn-sm">
                Delete
              </button>
              <button onClick={() => onComplete(index)} className="btn btn-danger btn-sm">
                Completed
              </button>
              </div>
            </div>
          ))
        ) : (
          <p className="alert alert-info">No tasks to show</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
