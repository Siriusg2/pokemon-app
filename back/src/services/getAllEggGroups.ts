import { PrismaClient } from '@prisma/client'
export default async function getAllEggGroupsService(prisma: PrismaClient) {
  try {
    const eggGroups = await prisma.egg_groups.findMany()
    return eggGroups
  } catch (error) {
    console.log(error)
    return error
  }
}
