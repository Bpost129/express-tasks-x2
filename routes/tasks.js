import { Router } from 'express'

import * as tasksCtrl from '../controllers/tasks.js'

const router = Router()

// GET localhost:3000/tasks
router.get('/', tasksCtrl.index)
router.get('/new', tasksCtrl.new)
router.get('/:taskId', tasksCtrl.show)
router.post('/', tasksCtrl.create)

export { router }
