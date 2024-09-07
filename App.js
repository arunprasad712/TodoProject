import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; 
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import TodoList from './components/TodoList';
import CompleteList from './components/CompleteList';
function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [todoList, setTodoList] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const navigate = useNavigate();

  const onFormSubmit = (todoobj) => {
    setTodoList([...todoList, todoobj.task]);
    document.getElementById("task").value = "";
    alert("Task Added Successfully");
  };

  const onComplete = (index) => {
    setCompleteTasks([...completeTasks, todoList[index]]);
    const newTodo = todoList.filter((_, i) => i !== index);
    setTodoList(newTodo);
  };
  const onDeleteList=(index)=>
  {
    const newTasks = todoList.filter((_, i) => i !== index);
    setTodoList(newTasks);
    alert("Task Deleted Successfully");
  }
  const onDelete = (index) => {
    const newCompleteTasks = completeTasks.filter((_, i) => i !== index);
    setCompleteTasks(newCompleteTasks);
    alert("Task Deleted Successfully");
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
              <button type="button" onClick={handleShowTasksClick} className="btn btn-info me-2">Show Tasks</button>
              <NavLink className="completetasks btn btn-secondary" to='complete'>Show Completed Tasks</NavLink>
            </div>
          </form>
        </div>

        <Routes>
          <Route path="/" element={<div className="text-center mt-5">Home</div>} />
          <Route path="Show" element={<TodoList todoList={todoList} onComplete={onComplete} onDeleteList={onDeleteList} />} />
          <Route path="complete" element={<CompleteList completeTasks={completeTasks} onDelete={onDelete} />} />
          <Route path="*" element={<div className="text-center mt-5">Page Not Found</div>} />
        </Routes>
      </div>
    
  );
}

export default App;
