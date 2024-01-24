import { Response } from 'express'
import { getAllTeamsService } from '../../services/index'
export default async function getTeamsController(_req: any, _res: Response) {
  try {
    const teams = await getAllTeamsService(_req.prisma)
    _res.status(200).json(teams)
  } catch (error) {
    console.log(error)
    _res.status(500).json(error)
  }
}
