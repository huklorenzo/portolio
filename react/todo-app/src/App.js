import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { getList, addItem, updateItem, deleteItem } from './services/service';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getList().then(data => {
      setTasks(data);
    }).catch(error => {
      console.error(error);
    })
  }, []);

  // Add a new task
  const addTask = (text) => {
    const newTask = {
      id: tasks.length + 1,
      title: text,
      completed: false
    };

    addItem(newTask).then(data => {
      setTasks([...tasks, data]);
    }).catch(error => {
      console.error(error);
    });
  };

  // Toggle task completion
  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    const taskToUpdate = updatedTasks.find(task => task.id === id);

    updateItem(taskToUpdate).then(data => {
      setTasks(tasks.map(task => task.id === id ? data : task));
    }).catch(error => {
      console.error(error);
    });
  };

  // Delete a task
  const deleteTask = (id) => {
    deleteItem(id).then(data => {
      setTasks(tasks.filter(task => task.id !== id));
    }).catch(error => {
      console.error(error);
    });
    
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
