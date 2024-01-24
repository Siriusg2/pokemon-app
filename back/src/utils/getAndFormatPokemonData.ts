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

          evolutions: await axios
            .get(response.data.species.url)
            .then(async (res) => {
              const evolvesTo = res.data.chain?.evolves_to
              if (evolvesTo && evolvesTo.length > 0) {
                const evolutionDetails = evolvesTo[0]?.evolution_details
                if (evolutionDetails && evolutionDetails.length > 0) {
                  const trigger = evolutionDetails[0].trigger?.name
                  const name = evolvesTo.at(-1)?.species?.name
                  if (name) {
                    const evoImage = await axios.get(
                      `https://pokeapi.co/api/v2/pokemon/${name}`,
                    )
                    const resultImage = evoImage.data.sprites?.front_default
                    return {
                      name,
                      trigger:
                        trigger === 'level-up'
                          ? `${response.data.name} evolves into ${name} when levels up`
                          : `${response.data.name} evolves into ${name} using a stone`,
                      image: resultImage,
                    }
                  }
                }
              }
              return { name: 'none', trigger: 'none', image: 'none' }
            }),
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
