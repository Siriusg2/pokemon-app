import { Response } from 'express'
import { updatePokemonService } from '../../services/index'
export default async function patchPokemonController(
  _req: any,
  _res: Response,
) {
  try {
    const pokemon = await updatePokemonService(
      _req.prisma,
      _req.params.id,
      _req.body,
    )
    _res.status(200).json(pokemon)
  } catch (error) {
    console.log(error)
    _res.status(500).json(error)
  }
}
