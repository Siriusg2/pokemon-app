import { Response } from 'express'
import { createPokemonService } from '../../services/index'
export default async function createPokemonController(
  _req: any,
  _res: Response,
) {
  try {
    const pokemon = await createPokemonService(_req.prisma, _req.body)
    _res.status(201).json(pokemon)
  } catch (error) {
    console.log(error)
    _res.status(500).json(error)
  }
}
