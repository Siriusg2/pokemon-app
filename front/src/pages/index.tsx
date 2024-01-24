import Head from "next/head";
import { useStore } from "../../store/state";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [text, setText] = useState("");
  const pokemons = useStore((state) => state.pokemons);
  const setPokemons = useStore((state) => state.setPokemons);
  const fetchAllData = async () => {
    try {
      const response = await axios.get(
        "https://api_pokemon.gibsongil.store/pokemon/all",
      );
      setPokemons(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <>
      <Head>
        <title>PokemonLand</title>
        <meta name="description" content="Condorsoft technical test" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/wallpaper.png')]">
        <Image
          src={"/pokedex.png"}
          width={600}
          height={600}
          alt="pokedex"
        ></Image>
      </main>
    </>
  );
}
