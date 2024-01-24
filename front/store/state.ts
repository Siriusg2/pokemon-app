import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Pokemon, Ability, EggGroup, Type, Team } from "~/types/types";

interface AppState {
  pokemons?: Pokemon[];
  abilities?: Ability[];
  types?: Type[];
  eggGroups?: EggGroup[];
  teams?: Team[];
  setPokemons: (pokemons: Pokemon[]) => void;
  setAbilities: (abilities: Ability[]) => void;
  setTypes: (types: Type[]) => void;
  setEggGroups: (eggGroups: EggGroup[]) => void;
  setTeams: (teams: Team[]) => void;
}

export const useStore = create<AppState>((set) => ({
  teams: [],
  pokemons: [],
  abilities: [],
  types: [],
  eggGroups: [],
  setPokemons: (pokemons) => set({ pokemons }),
  setAbilities: (abilities) => set({ abilities }),
  setTypes: (types) => set({ types }),
  setEggGroups: (eggGroups) => set({ eggGroups }),
  setTeams: (teams) => set({ teams }),
}));
