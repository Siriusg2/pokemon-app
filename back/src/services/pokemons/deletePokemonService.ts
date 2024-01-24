import { PrismaClient } from '@prisma/client'

export default async function deletePokemonService(
  prisma: PrismaClient,
  id: number,
) {
  try {
    const pokemon = await prisma.pokemon.delete({
      where: {
        id,
      },
    })
    return pokemon
  } catch (error) {
    console.log(error)
    return error
  }
}
