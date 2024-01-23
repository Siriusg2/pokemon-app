import { Router } from 'express'
import { getAllPokemonController } from '../controllers/index'
const pokemonRouter = Router()

pokemonRouter.get('/all/:page', getAllPokemonController)

export default pokemonRouter
