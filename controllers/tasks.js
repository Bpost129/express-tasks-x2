import { tasks } from '../data/task-data.js'

function index(req, res) {
  res.render('tasks/index', {
    tasks: tasks
  })
}

export {
  index,
}