import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Store } from "~/types/store";

export const useStore = create<Store>()(
  devtools((set) => ({
    pokemon: [],
    ability: [],
    type: [],
    eggGroup: [],
    team: [],
    setPokemon: (pokemon: Store["pokemon"]) => {
      set((state) => ({
        ...state,
        pokemon,
      }));
    },
    setAbility: (ability: Store["ability"]) => {
      set((state) => ({
        ...state,
        ability,
      }));
    },
    setTeam: (team: Store["team"]) => {
      set((state) => ({
        ...state,
        team,
      }));
    },
    setType: (type: Store["type"]) => {
      set((state) => ({
        ...state,
        type,
      }));
    },
    setEggGroup: (eggGroup: Store["eggGroup"]) => {
      set((state) => ({
        ...state,
        eggGroup,
      }));
    },
  })),
);
