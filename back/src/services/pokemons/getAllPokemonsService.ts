import axios, { AxiosResponse } from 'axios'
import formatDecimetersToFeetAndInches from '../../utils/fromDecimetersToInches'
import formatHectogramsToPounds from '../../utils/fromHectogramsToLbs'
import formatGenderRatio from '../../utils/formatGenderRatio'
export default async function getAllPokemons(page: number = 1) {
  let pokeApirul: string = ''
  if (page === 1) {
    pokeApirul = 'https://pokeapi.co/api/v2/pokemon'
  } else {
    pokeApirul = `https://pokeapi.co/api/v2/pokemon?offset=${
      page * 10
    }&limit=20`
  }
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
          height: formatDecimetersToFeetAndInches(response.data.height),
          weight: formatHectogramsToPounds(response.data.weight),
          abilities: response.data.abilities.map((ability: any) => {
            return ability.ability.name
          }),
          mainAbilitieDescription: await axios
            .get(response.data.species.url)
            .then((res) => {
              return res.data.flavor_text_entries[0].flavor_text
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
              return formatGenderRatio(genderRate)
            }),
        }
      }),
    )
  } catch (error) {
    console.error('Error al obtener datos de los Pokémon', error)
  }

  return pokemonDataArray
}
