export interface PokemonData {
  id: number
  name: string
  height: string
  weight: string
  abilities: string[]
  mainAbilitieDescription: string
  frontImage: string
  types: string[]
  eggGroups: string[]
  evolution: Evolution
  genderRatio: string
}
export interface createPokemon {
  name: string
  height: number
  weight: number
  abilities: string[]
  description: string
  frontImage: string
  types: string[]
  eggGroups: string[]
  evolution: Evolution
  genderRatio: number
}

export interface Evolution {
  name: string
  trigger: string
  image: string
}
export interface PokemonDataToDb {
  id: number
  name: string
  description: string
  height: number
  weight: number
  abilities: string[]
  description: string
  frontImage: string
  types: string[]
  eggGroups: string[]
  evolutions: {
    create: {
      name: string
      trigger: string
      image: string
    }
  }
  genderRatio: number
  image: string
}
export interface createTeam {
  name: string
  pokemons: number[]
}
