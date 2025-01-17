require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/index.js');
const todoRoutes = require('./routes/todo.routes.js');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
connectDB();

// Routes
app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const connectDB = require('./db/index.js');
// const router = express.Router();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// connectDB();

// // Todo Schema and Model
// const todoSchema = new mongoose.Schema({
//   title: String,
//   completed: Boolean,
// });

// const Todo = mongoose.model('Todo', todoSchema);

// // Routes
// app.get('/api/todos', async (req, res) => {
//   const todos = await Todo.find();
//   res.json(todos);
// });

// app.post('/api/todos', async (req, res) => {
//   const newTodo = new Todo({
//     title: req.body.title,
//     completed: false,
//   });
//   const savedTodo = await newTodo.save();
//   res.json(savedTodo);
// });

// app.put('/api/todos/:id', async (req, res) => {
//   const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(updatedTodo);
// });

// app.delete('/api/todos/:id', async (req, res) => {
//   await Todo.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Todo deleted' });
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });
