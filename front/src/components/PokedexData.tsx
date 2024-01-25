export default function PokedexData(props: {
  id: number | undefined;
  name: string | undefined;
  types: string[] | [] | undefined;
  description: string | undefined;
  height: string;
  weight: string;
}): JSX.Element {
  const { id, name, types, description, height, weight } = props;
  return (
    <div className="flex h-[10.625rem] w-[16.8rem] flex-col space-y-1 rounded-lg bg-transparent p-5">
      <div className="flex flex-row space-x-28">
        <h3 className="text-xs font-bold capitalize text-black">{name}</h3>
        <h3 className="text-xs capitalize text-black">N° {id}</h3>
      </div>
      <div className="flex flex-row space-x-4 text-black">
        {types?.map((type) => (
          <span className="text-sm text-black" key={type}>
            {type}
          </span>
        ))}
      </div>
      <p className="text-left text-xs text-black">{description}</p>
      <div className="flex flex-row space-x-24">
        <div className="flex flex-col">
          <h3 className="text-sm font-bold capitalize text-black">Height</h3>
          <h3 className="text-sm capitalize text-black">{height}</h3>
        </div>
        <div className=" flex flex-col ">
          <h3 className=" text-sm font-bold capitalize text-black">Weight</h3>
          <h3 className="text-sm capitalize text-black">{weight}</h3>
        </div>
      </div>
    </div>
  );
}
