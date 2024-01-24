import { Response } from 'express'
import { createTeamService } from '../../services/index'
export default async function postTeamController(_req: any, _res: Response) {
  try {
    const team = await createTeamService(_req.prisma, _req.body)
    _res.status(201).json(team)
  } catch (error) {
    console.log(error)
    _res.status(500).json(error)
  }
}
