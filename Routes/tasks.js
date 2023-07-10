const express = require('express');
const { getAllTasks, createTasks, updateTasks, deleteTasks, getTasks } = require('../Controllers/tasks');


const task=express.Router()

task.route('/').get(getAllTasks).post(createTasks);
task.route('/:id').patch(updateTasks).delete(deleteTasks).get(getTasks);

module.exports=task;
