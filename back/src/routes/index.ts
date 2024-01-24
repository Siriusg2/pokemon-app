import { Router } from 'express'
import prokemonRouter from './prokemonRoutes'
import teamsRouter from './teamsRoutes'
import typesRouter from './typesRouter'
import abilitiesRouter from './abilitiesRouter'
import eggGroupsRouter from './eggGroupsRouter'

const router = Router()
router.use('/pokemon', prokemonRouter)
router.use('/team', teamsRouter)
router.use('/abilities', abilitiesRouter)
router.use('/types', typesRouter)
router.use('/eggs_groups', eggGroupsRouter)
export default router
