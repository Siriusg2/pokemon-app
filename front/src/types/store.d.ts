import { Pokemon } from "../types/types";
import { Ability, EggGroup, Type, Team } from "./types";
export interface Store {
  pokemon: Pokemon[] | [];
  ability: Ability[] | [];
  type: Type[] | [];
  eggGroup: EggGroup[] | [];
  team: Team[] | [];
  setPokemon: (pokemons: Pokemon[] | []) => void;
  setAbility: (abilities: Ability[] | []) => void;
  setType: (types: Type[] | []) => void;
  setEggGroup: (eggGroups: EggGroup[] | []) => void;
  setTeam: (teams: Team[] | []) => void;
}
