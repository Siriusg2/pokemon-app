import { Response } from 'express'
import { getAllAbilitiesService } from '../services/index'
export default async function getAllAbilitiesController(
  _req: any,
  _res: Response,
) {
  try {
    const abilities = await getAllAbilitiesService(_req.prisma)
    _res.status(200).json(abilities)
  } catch (error) {
    console.log(error)
    _res.status(500).json(error)
  }
}
