import { Task } from '../models/task.js'

function index(req, res) {
  Task.find({})
  .then(tasks => {
    res.render('tasks/index', {
      tasks: tasks
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newTask(req, res) {
  res.render('tasks/new')
}

function create(req, res) {
  // console.log(req.body)
  req.body.done = false
  Task.create(req.body)
  .then(task => {
    res.redirect('/tasks')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tasks')
  })
}

function show(req, res) {
  Task.findById(req.params.taskId)
  .then(task => {
    res.render('todos/show', {
      task: task
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tasks')
  })
}

export {
  index,
  newTask as new,
  create,
  show,

}