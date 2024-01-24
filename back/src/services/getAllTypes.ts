import { PrismaClient } from '@prisma/client'
export default async function getAllTypes(prisma: PrismaClient) {
  try {
    const types = await prisma.types.findMany()
    return types
  } catch (error) {
    console.log(error)
    return error
  }
}
