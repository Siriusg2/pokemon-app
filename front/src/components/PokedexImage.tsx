import Image from "next/image";
type PokedexImageProps = {
  pokemonImageUrl: string | undefined;
  alt: string | undefined;
};

const PokedexImage: React.FC<PokedexImageProps> = ({
  pokemonImageUrl,
  alt,
}) => {
  return (
    <div className="flex h-[16.625rem] w-[15.25rem] items-center  justify-center rounded-lg bg-white p-5">
      <img
        src={pokemonImageUrl}
        className="h-[15.625rem] w-[14.125rem]"
        alt={alt}
      ></img>
    </div>
  );
};
export default PokedexImage;
