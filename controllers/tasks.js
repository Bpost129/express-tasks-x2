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

export {
  index,
}