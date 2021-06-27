import {Router} from 'express'
import {getAllTask, deleteTask, getCountTask, updateTask, getTaskById, createTask} from '../controllers/task'

const router = Router()

router.get('/task', getAllTask)
router.get('/task/count', getCountTask)
router.get('/task/:id', getTaskById)
router.post('/task', createTask)
router.delete('/task/:id', deleteTask)
router.put('/task/:id', updateTask)

export default router