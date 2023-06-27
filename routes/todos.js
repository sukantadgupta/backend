const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, description } = req.body;

  try {
    const newTodo = await Todo.create({ name, description });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create todo.' });
  }
});

module.exports = router;