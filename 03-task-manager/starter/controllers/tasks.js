const Task = require('../models/Task');

const getAll = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({task});
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
};

const getTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
};

const updateTask = async (req, res) => {
  try {
    res.send('update');
  } catch (error) {}
};

const deleteTask = async (req, res) => {
  res.send('delete');
};

module.exports = {getAll, createTasks, getTask, updateTask, deleteTask};