import { PrismaClient } from '@prisma/client'
export default async function getAllAbilitiesService(prisma: PrismaClient) {
  try {
    const abilities = await prisma.abilities.findMany()
    return abilities
  } catch (error) {
    console.log(error)
    return error
  }
}
