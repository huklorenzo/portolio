const express = require('express');
const bodyParser = require('body-parser');

const { Task } = require('./models');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(bodyParser.json());

// Get all tasks
app.get('/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// Create a task
app.post('/tasks', async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.update(req.body);
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.destroy();
    res.json({ message: 'Task deleted' });
  } else {
    res.status(404).send('Task not found');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
