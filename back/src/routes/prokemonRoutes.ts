import { Router } from 'express'
import { getAllPokemonController } from '../controllers/index'

const pokemonRouter = Router()

pokemonRouter.get('/all', getAllPokemonController)

export default pokemonRouter
