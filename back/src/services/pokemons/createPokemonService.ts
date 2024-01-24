import { createPokemon } from '../../types/types'
import { PrismaClient } from '@prisma/client'
export default async function createPokemonService(
  prisma: PrismaClient,
  poemonData: createPokemon,
): Promise<any> {
  try {
    const pokemon = await prisma.pokemon.create({
      data: {
        name: poemonData.name,
        height: poemonData.height,
        weight: poemonData.weight,
        abilities: poemonData.abilities,
        description: poemonData.description,
        image: poemonData.frontImage,
        types: poemonData.types,
        eggGroups: poemonData.eggGroups,
        evolutions: JSON.stringify(poemonData.evolution),
        genderRatio: poemonData.genderRatio,
      },
    })
    return pokemon
  } catch (error) {
    console.log(error)
    return error
  }
}
