import { Response } from 'express'
import { getAllTypesService } from '../services/index'
export default async function getAllTypesController(_req: any, _res: Response) {
  try {
    const types = await getAllTypesService(_req.prisma)
    _res.status(200).json(types)
  } catch (error) {
    console.log(error)
    _res.status(500).json(error)
  }
}
