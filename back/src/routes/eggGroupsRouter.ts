import { Router } from 'express'
import getAllEggGroupsController from '../controllers/getAllEggGroupsController'

const eggGroupsRouter = Router()

eggGroupsRouter.get('/all', getAllEggGroupsController)

export default eggGroupsRouter
