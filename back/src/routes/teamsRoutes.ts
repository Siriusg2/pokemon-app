import { Router } from 'express'
import {
  getAllTeamsController,
  postTeamController,
  deleteTeamController,
  patchTeamController,
} from '../controllers/index'
const teamsRouter = Router()

teamsRouter.get('/all', getAllTeamsController)
teamsRouter.delete('/delete/:id', deleteTeamController)
teamsRouter.post('/create', postTeamController)
teamsRouter.patch('/update/:id', patchTeamController)
export default teamsRouter
