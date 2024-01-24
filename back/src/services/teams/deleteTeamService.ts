import { PrismaClient } from '@prisma/client'

export default async function deleteTeamService(
  prisma: PrismaClient,
  id: number,
): Promise<any> {
  try {
    const team = await prisma.team.delete({
      where: {
        id,
      },
    })
    return team
  } catch (error) {
    console.log(error)
    return error
  }
}
