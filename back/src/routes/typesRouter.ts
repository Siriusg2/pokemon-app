import { Router } from 'express'
import getAllTypesController from '../controllers/getAllTypesController'

const typesController = Router()

typesController.get('/all', getAllTypesController)

export default typesController
