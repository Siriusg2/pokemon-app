import { PrismaClient } from '@prisma/client'
import axios, { AxiosResponse } from 'axios'
import getAndFormatPokemonData from './getAndFormatPokemonData'
import { PokemonDataToDb } from '../types/types'
export default async function dbSeeder(prisma: PrismaClient): Promise<string> {
  let typesUrl: string = 'https://pokeapi.co/api/v2/type/'
  let eggsUrl: string = 'https://pokeapi.co/api/v2/egg-group/'
  let abilitiesUrl: string =
    'https://pokeapi.co/api/v2/ability/?offset=0&limit=1000'

  try {
    let typesData: [AxiosResponse<any>] = (await axios.get(typesUrl)).data
      .results
    let eggsData: [AxiosResponse<any>] = (await axios.get(eggsUrl)).data.results
    let abilitiesData: [AxiosResponse<any>] = (await axios.get(abilitiesUrl))
      .data.results
    let pokemonData: PokemonDataToDb[] = await getAndFormatPokemonData()

    await prisma.abilities.createMany({
      data: abilitiesData.map((ability: any) => {
        return {
          name: ability.name,
        }
      }),
    })
    await prisma.types.createMany({
      data: typesData.map((type: any) => {
        return {
          name: type.name,
        }
      }),
    })
    await prisma.egg_groups.createMany({
      data: eggsData.map((egg: any) => {
        return {
          name: egg.name,
        }
      }),
    })
    await Promise.all(
      pokemonData.map(async (pokemon) => {
        let createdPokemon = await prisma.pokemon.findUnique({
          where: { id: pokemon.id },
        })
        !createdPokemon
          ? await prisma.pokemon.create({
              data: {
                id: pokemon.id,
                name: pokemon.name,
                description: pokemon.description,
                height: pokemon.height,
                weight: pokemon.weight,
                genderRatio: pokemon.genderRatio,
                evolutions: pokemon.evolutions,
                image: pokemon.image,
                abilities: pokemon.abilities,
                types: pokemon.types,
                eggGroups: pokemon.eggGroups,
              },
            })
          : null

        // Si deseas también asociar el Pokémon a un equipo
        // if (pokemon.teamId) {
        //   await prisma.team.update({
        //     where: { id: pokemon.teamId },
        //     data: {
        //       pokemons: {
        //         connect: { id: createdPokemon.id },
        //       },
        //     },
        //   })
        // }
      }),
    )
    return 'DB Seeded'
  } catch (error) {
    console.log(error)

    return "Couldn't seed DB"
  }
}
