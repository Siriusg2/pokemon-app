import { Response } from 'express'

import { getAllPokemonsService } from '../../services/index'
export default async function getAllPokemonController(
  _req: any,
  res: Response,
) {
  try {
    const pokemon = await getAllPokemonsService(_req.prisma)
    res.status(200).json(pokemon)
  } catch (error) {
    console.log(error)

    res.status(500).json(error)
  }
}
