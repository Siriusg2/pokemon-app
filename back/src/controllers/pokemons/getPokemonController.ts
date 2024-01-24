import { getPokemonImages } from '../../services/index'
import { Request, Response } from 'express'
import getAndFormatPokemonData from '../../utils/getAndFormatPokemonData'

export async function getAllPokemonController(_req: Request, res: Response) {
  try {
    const pokemon = await getAndFormatPokemonData()
    res.status(200).json(pokemon)
  } catch (error) {
    console.log(error)

    res.status(500).json(error)
  }
}

export async function getPokemonImagesController(
  _req: Request,
  _res: Response,
) {
  try {
    const pokemonImages = await getPokemonImages()
    _res.status(200).json(pokemonImages)
  } catch (error) {
    console.log(error)

    _res.status(500).json(error)
  }
}
