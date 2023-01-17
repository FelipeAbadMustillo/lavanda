//Functions
/* --- Read --- */
const getAllTasks = (req, res) => {
    res.status(200).send('Get all tasks')
}

const getTask = (req, res) => {
    res.status(200).json({
        id: req.params.id,
        msg: 'Get single task'
    })
}


/* --- C/U/D --- */
const createTask = (req, res) => {
    //res.status(200).send('Create task')
    res.status(200).json(req.body)
}

const updateTask = (req, res) => {
    res.status(200).send('Update task')
}

const deleteTask = (req, res) => {
    res.status(200).send('Delete task')
}

//Exports
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}