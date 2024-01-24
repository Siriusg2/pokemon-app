import { PrismaClient } from '@prisma/client'

export default async function getAllPokemonsService(
  prisma: PrismaClient,
): Promise<any> {
  try {
    const pokemons = await prisma.pokemon.findMany()
    return pokemons
  } catch (error) {
    console.log(error)
    return error
  }
}
