import { Response } from 'express'
import { deleteTeamService } from '../../services/index'
export default async function deleteTeamController(_req: any, _res: Response) {
  try {
    const team = await deleteTeamService(_req.prisma, _req.params.id)
    _res.status(200).json(team)
  } catch (error) {
    console.log(error)
    _res.status(500).json(error)
  }
}
