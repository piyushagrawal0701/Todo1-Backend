require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./db/index.js');
const router = express.Router();
const serverless = require("serverless-http")


const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// Todo Schema and Model
const todoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

// Routes
router.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.post('/api/todos', async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    completed: false,
  });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

router.put('/api/todos/:id', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});

router.delete('/api/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

app.use('/.netlify/functions/server', router);  // Route for serverless functions

module.exports.handler = serverless(app);  // Export the serverless handler