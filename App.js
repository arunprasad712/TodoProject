import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; // Import custom CSS
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TodoList from './components/TodoList';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [todoList, setTodoList] = useState([]);
  
  const navigate = useNavigate(); // useNavigate hook for navigation

  const onFormSubmit = (todoobj) => {
    setTodoList([...todoList, todoobj.task]);
   
    document.getElementById("task").value=" ";
  };

  
  const handleShowTasksClick = () => {
    navigate('/Show');
  };
  
  return (
    <div className="App">
      <div className="container text-center mt-5">
        <h1 className="text-secondary mb-4">Todo List Application</h1>
        <form onSubmit={handleSubmit(onFormSubmit)} className="mb-3">
          <div className="mb-3">
            <label htmlFor="task" className="form-label text-primary">Enter task</label>
            <input
              type='text'
              id="task"
              className="form-control"
              placeholder='Enter Task...'
              {...register("task", { required: true })}
            />
            {errors.task?.type === 'required' && <p className='text-danger'>*Field is required</p>}
          </div>
          <div>
            <button type="submit" className='btn btn-danger me-2'>Add</button>
            <button type="button" onClick={handleShowTasksClick} className="btn btn-info">Show Tasks</button>
          </div>
        </form>
      </div>

      <Routes>
        <Route path="/" element={<div className="text-center mt-5">Home</div>} />
        <Route path="Show" element={<TodoList todoList={todoList} />} />
        {/* Redirect to Home if the route is not found */}
        <Route path="*" element={<div className="text-center mt-5">Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
