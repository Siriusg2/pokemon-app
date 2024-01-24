import axios, { AxiosResponse } from 'axios'

export default async function getPokemonImages() {
  let pokeApirul: string =
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000'

  const response: AxiosResponse<any> = await axios.get(`${pokeApirul}`)

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
          mainAbilitieDescription: await axios
            .get(response.data.species.url)
            .then((res) => {
              return res.data.flavor_text_entries.find((text: any) => {
                if (text.language.name === 'en') {
                  return text.flavor_text
                }
              })
            }),
          frontImage: response.data.sprites.front_default,
          types: response.data.types.map((type: any) => {
            return type.type.name
          }),
          eggGroups: await axios.get(response.data.species.url).then((res) => {
            return res.data.egg_groups.map((group: any) => {
              return group.name
            })
          }),
          evolution: await axios.get(response.data.species.url).then((res) => {
            return axios.get(res.data.evolution_chain.url).then(async (res) => {
              let trigger =
                res.data.chain.evolves_to[0].evolution_details[0].trigger.name
              let name = res.data.chain.evolves_to.at(-1).species.name
              let evoImage = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`,
              )
              let resultImage = evoImage.data.sprites.front_default
              return {
                name,
                trigger:
                  trigger === 'level-up'
                    ? `${response.data.name} evolves into ${name} when levels up`
                    : `${response.data.name} evolves into ${name} using a stone`,
                image: resultImage,
              }
            })
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
