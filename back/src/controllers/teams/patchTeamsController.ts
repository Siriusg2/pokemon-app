import { Response } from 'express'
import { updateTeamService } from '../../services/index'
export default async function patchTeamController(_req: any, _res: Response) {
  try {
    const team = await updateTeamService(_req.prisma, _req.params.id, _req.body)
    _res.status(200).json(team)
  } catch (error) {
    console.log(error)
    _res.status(500).json(error)
  }
}
