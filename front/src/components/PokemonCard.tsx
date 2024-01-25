import Link from "next/link";
type PokemonCardProps = {
  name: string;
  type: string | undefined;
  image: string;
  id: number;
};
const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  type,
  image,
}): JSX.Element => {
  return (
    <Link href={`/details/${id}`}>
      <div className="flex h-[10.625rem] w-[12.8rem] flex-col items-center justify-center space-y-1 rounded-lg bg-gray-800 p-10">
        <img src={image} alt={name} />
        <span className="text-xs font-bold capitalize text-white">N° {id}</span>
        <span className="text-xs capitalize text-white">{name}</span>
        <span className="text-xs capitalize text-orange-400">{type}</span>
      </div>
    </Link>
  );
};
export default PokemonCard;
