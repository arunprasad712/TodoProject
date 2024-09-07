import React from 'react';

function CompleteList(props) {
  const { completeTasks, onDelete } = props;

  if (!Array.isArray(completeTasks)) {
    console.error('Expected completeTasks to be an array, but received:', completeTasks);
    return <div className="alert alert-danger">Error: completeTasks is not an array.</div>;
  }

  return (
    <div className="todo-list-container mt-4">
      <h1 className="text-secondary">Completed Tasks</h1>
      <div className="list-group">
        {completeTasks.length > 0 ? (
          completeTasks.map((complete, index) => (
            <div key={index} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <h1 className="text-primary">{complete}</h1>
              <button onClick={() => onDelete(index)} className="btn btn-danger btn-sm">
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="alert alert-info">No tasks completed</p>
        )}
      </div>
    </div>
  );
}

export default CompleteList;
