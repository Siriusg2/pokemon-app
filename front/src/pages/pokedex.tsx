import PokemonGrid from "~/components/PokemonGrid";

const Pokedex: React.FC = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center justify-center self-center ">
      <PokemonGrid />
    </section>
  );
};
export default Pokedex;
