//Imports
const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()

//Functions
const {getAllTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/tasks')

//Routes
router.route('/').get(getAllTasks)
router.route('/:id').get(getTask)
router.route('/').post(createTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)

//Exports
module.exports = router