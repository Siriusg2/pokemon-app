import { PrismaClient } from '@prisma/client'
import { createTeam } from '../../types/types'

export default async function updateTeamService(
  prisma: PrismaClient,
  id: number,
  teamData: createTeam,
) {
  if (teamData.pokemons.length < 6) {
    return {
      message: 'Team must have at least 6 pokemons',
    }
  }
  try {
    const team = await prisma.team.update({
      where: {
        id,
      },
      data: {
        name: teamData.name,
        pokemons: teamData.pokemons,
      },
    })
    return team
  } catch (error) {
    console.log(error)
    return error
  }
}
