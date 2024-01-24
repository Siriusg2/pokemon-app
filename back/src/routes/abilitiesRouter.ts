import { Router } from 'express'
import getAllAbilitiesController from '../controllers/getAllAbilitiesController'

const abilitiesRouter = Router()

abilitiesRouter.get('/all', getAllAbilitiesController)

export default abilitiesRouter
