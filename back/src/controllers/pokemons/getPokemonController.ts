import getAllPokemons from '../../services/pokemons/getAllPokemonsService'
import { Request, Response } from 'express'
export async function getAllPokemonController(req: Request, res: Response) {
  const { page } = req.params
  try {
    const pokemon = await getAllPokemons(parseInt(page))
    res.status(200).json(pokemon)
  } catch (error) {
    console.log(error)

    res.status(500).json(error)
  }
}
