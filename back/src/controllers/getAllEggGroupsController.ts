import { Response } from 'express'
import { getAllEggGroupsService } from '../services/index'
export default async function getAllEggGroupsController(
  _req: any,
  _res: Response,
) {
  try {
    const eggGroups = await getAllEggGroupsService(_req.prisma)
    _res.status(200).json(eggGroups)
  } catch (error) {
    console.log(error)
    _res.status(500).json(error)
  }
}
