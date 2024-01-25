export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  description: string;
  height: number;
  weight: number;
  genderRatio: number;
  abilities: string[];
  eggGroups: string[];
  evolutions: Evolutions;
  image: string;
  teamId: number | null;
}

export interface Evolutions {
  name: string;
  image: string;
  trigger: string;
}

export interface Type {
  id: number;
  name: string;
}
export interface EggGroup {
  id: number;
  name: string;
}
export interface Ability {
  id: number;
  name: string;
}
export interface Team {
  id: number;
  name: string;
  pokemonId: number[];
}
