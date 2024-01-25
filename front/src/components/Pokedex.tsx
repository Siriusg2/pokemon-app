import Image from "next/image";
import PokedexData from "./PokedexData";
import PokedexImage from "./PokedexImage";
import { useStore } from "../../store/state";
import formatDecimetersToFeetAndInches from "~/utils/fromDecimetersToInches";
import formatHectogramsToPounds from "~/utils/fromHectogramsToLbs";
type PokedexProps = {
  image?: React.ReactNode;
  data?: React.ReactNode;
};

const Pokedex: React.FC<PokedexProps> = (): JSX.Element => {
  const { pokemon } = useStore();
  const randomNumber = Math.floor(Math.random() * 1000) + 1;
  const randomPokemon = pokemon[randomNumber];
  return (
    <div className="relative">
      <Image
        src={"/pokedex.png"}
        width={670}
        height={670}
        alt="pokedex"
        className="h-[34.625rem] w-[48.125rem] "
      ></Image>
      <div className="absolute left-[3.6rem] top-[10.40rem]">
        <PokedexData
          id={randomPokemon?.id}
          name={randomPokemon?.name}
          types={randomPokemon?.types}
          description={randomPokemon?.description}
          height={formatDecimetersToFeetAndInches(randomPokemon?.height ?? 0)}
          weight={formatHectogramsToPounds(randomPokemon?.weight ?? 0)}
        />
      </div>
      <div className="absolute left-[29rem] top-[11.2rem]">
        <PokedexImage
          pokemonImageUrl={randomPokemon?.image}
          alt={randomPokemon?.name}
        />
      </div>
      <div className="absolute left-[8rem] top-[30rem]">
        <button className="font-bold">Search</button>
      </div>
      <div className="absolute left-[29.7rem] top-[30.3rem]">
        <button className="font-bold">View More</button>
      </div>
    </div>
  );
};
export default Pokedex;
