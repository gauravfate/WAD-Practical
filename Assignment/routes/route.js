import express from 'express'
import { getDataRoute, getRoute, createData, deleteRoute, updateRoute } from '../controllers/controller.js'

const router = express.Router()

router.get('/', getRoute)
router.post('/createUser', createData)
router.get('/getAllData', getDataRoute)
router.delete('/:name', deleteRoute)
router.patch('/updateUser', updateRoute)

export default router