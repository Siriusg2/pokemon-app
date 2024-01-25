import PokemonCard from "./PokemonCard";
import { useStore } from "../../store/state";
import { useState, useEffect } from "react";
import { Pokemon } from "~/types/types";

const PokemonGrid: React.FC = () => {
  const { pokemon } = useStore();
  const [pokemonState, setPokemonState] = useState<Pokemon[] | []>([]);
  const [orderFlag, setOrderFlag] = useState<boolean>(false);

  const searchPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pokemonName = e.target.value;

    if (pokemonName) {
      setPokemonState(
        pokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()),
        ),
      );
    }
  };
  const orderByType = (
    flag: boolean,
    setFlag: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setPokemonState(
      pokemon.sort((a, b) => {
        const typeA = (a.types?.[0] || "").toLowerCase();
        const typeB = (b.types?.[0] || "").toLowerCase();
        if (flag) {
          if (typeA < typeB) {
            return -1;
          }
          if (typeA > typeB) {
            return 1;
          }
          return 0;
        } else {
          if (typeA < typeB) {
            return 1;
          }
          if (typeA > typeB) {
            return -1;
          }
          return 0;
        }
      }),
    );
    setFlag(!flag);
  };
  useEffect(() => {
    setPokemonState(pokemon);
  }, []);
  return (
    <section className="mt-20 flex w-[75%] flex-col items-center justify-center bg-black">
      <h1 className="mr-[75%] mt-10 text-2xl font-bold capitalize text-white">
        Pokedex
      </h1>
      <div className="mt-10 flex flex-row gap-x-5">
        <input
          type="text"
          placeholder="Search pokemon"
          className="h-[3.2rem] w-[30rem] rounded-lg bg-gray-800 p-3 text-start text-xs text-white"
          onChange={searchPokemon}
        />
        <button
          className="flex h-[3.2rem] w-[6rem] flex-row items-center justify-center gap-x-1 rounded-lg bg-gray-800 p-3 text-center text-xs text-white"
          onClick={() => orderByType(orderFlag, setOrderFlag)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.5 13.125C7.5 12.9592 7.56585 12.8003 7.68306 12.6831C7.80027 12.5658 7.95924 12.5 8.125 12.5H11.875C12.0408 12.5 12.1997 12.5658 12.3169 12.6831C12.4342 12.8003 12.5 12.9592 12.5 13.125C12.5 13.2908 12.4342 13.4497 12.3169 13.5669C12.1997 13.6842 12.0408 13.75 11.875 13.75H8.125C7.95924 13.75 7.80027 13.6842 7.68306 13.5669C7.56585 13.4497 7.5 13.2908 7.5 13.125ZM5 9.375C5 9.20924 5.06585 9.05027 5.18306 8.93306C5.30027 8.81585 5.45924 8.75 5.625 8.75H14.375C14.5408 8.75 14.6997 8.81585 14.8169 8.93306C14.9342 9.05027 15 9.20924 15 9.375C15 9.54076 14.9342 9.69973 14.8169 9.81694C14.6997 9.93415 14.5408 10 14.375 10H5.625C5.45924 10 5.30027 9.93415 5.18306 9.81694C5.06585 9.69973 5 9.54076 5 9.375ZM2.5 5.625C2.5 5.45924 2.56585 5.30027 2.68306 5.18306C2.80027 5.06585 2.95924 5 3.125 5H16.875C17.0408 5 17.1997 5.06585 17.3169 5.18306C17.4342 5.30027 17.5 5.45924 17.5 5.625C17.5 5.79076 17.4342 5.94973 17.3169 6.06694C17.1997 6.18415 17.0408 6.25 16.875 6.25H3.125C2.95924 6.25 2.80027 6.18415 2.68306 6.06694C2.56585 5.94973 2.5 5.79076 2.5 5.625Z"
              fill="white"
            />
          </svg>
          Type
        </button>
        <button className="flex h-[3.2rem] w-[8rem] flex-row items-center justify-center gap-x-1 rounded-lg bg-gray-800 p-3 text-center text-xs text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11 17H13V13H17V11H13V7H11V11H7V13H11V17ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6873 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31233 8.1 2.787C9.31667 2.26233 10.6167 2 12 2C13.3833 2 14.6833 2.26233 15.9 2.787C17.1167 3.31233 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6873 15.9 21.212C14.6833 21.7373 13.3833 22 12 22Z"
              fill="white"
            />
          </svg>
          Create new
        </button>
      </div>
      <div className="mt-10   grid  grid-cols-4 gap-x-5  gap-y-5 ">
        {pokemonState.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.types[0]}
            image={pokemon.image}
            id={pokemon.id}
          />
        ))}
      </div>
    </section>
  );
};

export default PokemonGrid;
