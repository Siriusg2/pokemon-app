import Head from "next/head";
import { useStore } from "../../store/state";
import Image from "next/image";
import { useEffect } from "react";
import axios from "../../axiosConfig.js";
import { Ability, Pokemon, Type, EggGroup, Team } from "~/types/types";
import PokedexData from "~/components/PokedexData";
import PokedexImage from "~/components/PokedexImage";
import Pokedex from "~/components/Pokedex";
export default function Home(): JSX.Element {
  const { setPokemon, setAbility, setType, setEggGroup, setTeam, pokemon } =
    useStore();
  const fetchAllData = async (): Promise<void> => {
    try {
      const responsePokemons = await axios.get<Pokemon[]>("/pokemon/all");
      const responseAbilities = await axios.get<Ability[]>("/abilities/all");
      const responseTypes = await axios.get<Type[]>("/types/all");
      const responseEggGroups = await axios.get<EggGroup[]>("/eggs_groups/all");
      const responseTeams = await axios.get<Team[]>("/team/all");

      setPokemon(responsePokemons.data);
      setAbility(responseAbilities.data);
      setType(responseTypes.data);
      setEggGroup(responseEggGroups.data);
      setTeam(responseTeams.data);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllData();
    console.log(pokemon);
  }, []);

  return (
    <>
      <Head>
        <title>PokemonLand</title>
        <meta name="description" content="Condorsoft technical test" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/wallpaper.png')]">
        <Pokedex />
      </main>
    </>
  );
}
