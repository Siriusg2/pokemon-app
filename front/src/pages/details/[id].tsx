import { FC } from "react";
import { useRouter, NextRouter } from "next/router";
import { useState, useEffect } from "react";
import { useStore } from "../../../store/state";
import { Pokemon } from "~/types/types";
import CardDetails from "~/components/CardDetails";

type PokemonDetailsProps = {
  router: NextRouter;
};

const PokemonDetails: FC<PokemonDetailsProps> = () => {
  const { pokemon } = useStore();
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | undefined>(
    undefined,
  );
  const router = useRouter();
  const { id } = router.query;

  const parsedId = parseInt(id as string);

  useEffect(() => {
    setPokemonDetails(pokemon.find((p) => p.id == parsedId));

    return () => {
      setPokemonDetails(undefined);
    };
  }, []);

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <div className=" flex flex-row space-x-3">
        <button className="h-[2.125rem] w-[5.125rem] rounded-lg bg-gray-800 text-white">
          Edit
        </button>
        <button className="h-[2.125rem] w-[5.125rem] rounded-lg bg-gray-800 text-white">
          Delete
        </button>
      </div>
      <CardDetails
        abilities={pokemonDetails?.abilities || []}
        image={pokemonDetails?.image || ""}
        name={pokemonDetails?.name || ""}
        types={pokemonDetails?.types || []}
        weight={pokemonDetails?.weight || 0}
        height={pokemonDetails?.height || 0}
        description={pokemonDetails?.description || ""}
        genderRatio={pokemonDetails?.genderRatio || 0}
        evolutions={
          pokemonDetails?.evolutions || {
            name: "",
            image: "",
            trigger: "",
          }
        }
        eggGroups={pokemonDetails?.eggGroups || []}
        id={pokemonDetails?.id || 0}
        teamId={pokemonDetails?.teamId || null}
      ></CardDetails>
    </div>
  );
};

export default PokemonDetails;
