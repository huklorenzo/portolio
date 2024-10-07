import React from 'react';

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li>
      <span
        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
