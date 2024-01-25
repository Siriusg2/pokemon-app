import { useRouter } from "next/router";
import Link from "next/link";
const Navbar: React.FC = () => {
  const router = useRouter();
  const currentPage = router.pathname;

  return (
    <nav className="h-[8rem] bg-black">
      <div className="flex flex-col items-center justify-between">
        <img src="/logo.png" alt="pokemomlogo" className="mt-5" />
        <div className="mt-5 flex flex-row space-x-10">
          <Link href="/">
            <button
              className={`font-inter text-center text-lg font-medium leading-6 text-white ${
                currentPage === "/"
                  ? "border-b-2 border-white"
                  : "text-opacity-80"
              }`}
            >
              Home
            </button>
          </Link>
          <Link href="/pokedex">
            <button
              className={`font-inter text-center text-lg font-medium leading-6 text-white ${
                currentPage === "/pokedex"
                  ? "border-b-2 border-white"
                  : "text-opacity-80"
              }`}
            >
              Pokedex
            </button>{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
