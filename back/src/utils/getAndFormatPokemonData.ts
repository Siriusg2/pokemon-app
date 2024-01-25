import axios, { AxiosResponse } from 'axios'

import { PokemonData } from '../types/types'
export default async function getAndFormatPokemonData(): Promise<
  PokemonData[] | any
> {
  const response: AxiosResponse<any> =
    await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=
  0
&limit=10000`)

  const pokemonsUrls = response.data.results.map((pokemon: any) => {
    return pokemon.url
  })
  let pokemonDataArray
  try {
    pokemonDataArray = await Promise.all(
      pokemonsUrls.map(async (url: string) => {
        const response = await axios.get(url)
        let evolutionName = await axios
          .get(response.data.species.url)
          .then(async (res) => {
            let evolutionChain: any = res.data.evolution_chain
            let evolutionData: any = await axios
              .get(evolutionChain.url)
              .then((res) => {
                return res.data.chain.evolves_to.length
                  ? {
                      name: res.data.chain.evolves_to[0].species.name,
                      trigger: res.data.chain.evolves_to[0].evolution_details
                        .length
                        ? res.data.chain.evolves_to[0].evolution_details[0]
                            .trigger.name
                        : null,
                    }
                  : null
              })
            return evolutionData
          })
        let evoImage = ''

        if (evolutionName && evolutionName.name) {
          evoImage = await axios
            .get(`https://pokeapi.co/api/v2/pokemon/${evolutionName.name}`)
            .then((res) => {
              return res.data.sprites.front_default
            })
            .catch(() => {
              return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png'
            })
          evolutionName.image = evoImage
        }
        return {
          id: response.data.id,
          name: response.data.name,
          height: response.data.height,
          weight: response.data.weight,
          abilities: response.data.abilities.map((ability: any) => {
            return ability.ability.name
          }),
          types: response.data.types.map((type: any) => {
            return type.type.name
          }),
          eggGroups: await axios.get(response.data.species.url).then((res) => {
            return res.data.egg_groups.map((group: any) => {
              return group.name
            })
          }),
          description: await axios
            .get(response.data.species.url)
            .then((res) => {
              return (
                res.data.flavor_text_entries.map((text: any) => {
                  if (text.language.name === 'en') {
                    return text.flavor_text
                  }
                })[0] ?? 'No description available'
              )
            }),
          image: response.data.sprites.front_default ?? 'No image available',

          evolutions: evolutionName,

          genderRatio: await axios
            .get(response.data.species.url)
            .then((res) => {
              let genderRate = res.data.gender_rate
              return genderRate
            }),
        }
      }),
    )
  } catch (error) {
    console.error('Error al obtener datos de los Pokémon', error)
  }

  return pokemonDataArray
}
