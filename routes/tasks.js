import { Router } from 'express'

import { tasks } from '../data/task-data.js'

const router = Router()

// GET localhost:3000/tasks
router.get('/', function(req, res) {
  res.render('tasks/index', {
    tasks: tasks
  })
})

export { router }
