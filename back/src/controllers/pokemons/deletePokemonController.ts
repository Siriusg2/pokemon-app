import { Response } from 'express'
import { deletePokemonService } from '../../services/index'
export default async function deletePokemonController(
  _req: any,
  _res: Response,
) {
  try {
    const pokemon = await deletePokemonService(_req.prisma, _req.params.id)
    _res.status(200).json(pokemon)
  } catch (error) {
    console.log(error)
    _res.status(500).json(error)
  }
}
