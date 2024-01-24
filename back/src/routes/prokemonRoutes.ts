import { Router } from 'express'
import {
  getAllPokemonController,
  postPokemonController,
  deletePokemonController,
  patchPokemonController,
} from '../controllers/index'

const pokemonRouter = Router()

pokemonRouter.get('/all', getAllPokemonController)
pokemonRouter.post('/create', postPokemonController)
pokemonRouter.delete('/delete/:id', deletePokemonController)
pokemonRouter.patch('/update/:id', patchPokemonController)
export default pokemonRouter
