import React from 'react';

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTask(task.id)}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
