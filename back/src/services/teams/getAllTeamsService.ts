import { PrismaClient } from '@prisma/client'
export default async function getAllTeamsService(prisma: PrismaClient) {
  try {
    const teams = await prisma.team.findMany()
    return teams
  } catch (error) {
    console.log(error)
    return error
  }
}
