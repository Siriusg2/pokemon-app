import { Pokemon } from "~/types/types";
import formatHectogramsToPounds from "../utils/fromHectogramsToLbs";
import formatGenderChance from "../utils/formatGenderRatio";
import formatDecimetersToFeetAndInches from "../utils/fromDecimetersToInches";
const CardDetails: React.FC<Pokemon> = ({
  id,
  name,
  types,
  image,
  height,
  weight,
  description,
  genderRatio,
  abilities,
  eggGroups,
  evolutions,
}): JSX.Element => {
  return (
    <div className="flex h-[60%] w-[35%] flex-col justify-center space-y-5 rounded-lg bg-gray-800 p-10">
      <div className=" flex flex-row justify-between">
        <h3 className="text-xs font-bold capitalize text-white">{name}</h3>
        <span className="text-xs font-bold capitalize text-white">N° {id}</span>
      </div>

      {types?.map((type) => (
        <span className="text-xs capitalize text-orange-400" key={type}>
          {type}{" "}
        </span>
      ))}
      <p className="text-xs text-white">{description}</p>
      <div className="  flex flex-row justify-between px-10">
        <div className="mt-3 flex flex-col">
          <h4 className="text-xs font-bold capitalize text-white">Height</h4>
          <h4 className="text-xs capitalize text-white">
            {formatDecimetersToFeetAndInches(height)}
          </h4>
        </div>
        <div className="mt-3 flex flex-col">
          <h4 className="text-xs font-bold capitalize text-white">Weight</h4>
          <h4 className="text-xs capitalize text-white">
            {formatHectogramsToPounds(weight)}
          </h4>
        </div>
        <div className="mt-3 flex flex-col">
          <h4 className="text-xs font-bold capitalize text-white">
            Gender Ratio
          </h4>
          <h4 className="text-xs capitalize text-white">
            {formatGenderChance(genderRatio)}
          </h4>
        </div>
      </div>
      <div className=" flex flex-row">
        <div className="mt-3 flex flex-row space-x-16">
          <div className="mb-1 flex flex-col space-y-1">
            <span className="text-xs font-bold capitalize text-white">
              Abilities
            </span>
            {abilities?.map((ability) => (
              <span
                className="mx-2 text-xs capitalize text-white"
                key={ability}
              >
                {ability}
              </span>
            ))}
          </div>
          <div className="mb-1 flex flex-col space-y-1">
            <span className="text-xs font-bold capitalize text-white">
              Egg Groups
            </span>
            {eggGroups?.map((eggGroup) => (
              <span
                className="mx-2 text-xs capitalize text-white"
                key={eggGroup}
              >
                {eggGroup}
              </span>
            ))}
          </div>
        </div>
      </div>
      <span className="text-sm capitalize text-white">Evolutions</span>

      <span className="text-sm  text-white">
        {evolutions.trigger === "level-up"
          ? `${name} evolves into ${evolutions.name} when ${evolutions.trigger}`
          : `${name} evolves into ${evolutions.name} using a stone`}
      </span>
      <div className="flex flex-row items-center justify-evenly">
        <img src={image} alt={name} className="h-[7rem ] w-[7rem]" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path d="M35 20L22 7V14H6V26H22V33L35 20Z" fill="white" />
        </svg>
        {/* <img
          src={evolutions.image || "No image available"}
          alt={evolutions.name}
        /> */}
      </div>
    </div>
  );
};
export default CardDetails;
