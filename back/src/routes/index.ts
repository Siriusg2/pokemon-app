import { Router } from 'express'
import prokemonRouter from './prokemonRoutes'
import teamsRouter from './teamsRoutes'
const router = Router()
router.use('/pokemon', prokemonRouter)
router.use('/team', teamsRouter)
export default router
