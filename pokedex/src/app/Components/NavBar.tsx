import Link from "next/link";
import ModeToggle from "./Toggle";

export default function Nav() {
  return (
    <nav className="flex h-14 w-full items-center justify-between px-4 md:px-6 shadow dark:shadow-slate-700 sticky top-0 bg-white dark:bg-black  z-50">
      <nav className="space-x-10 flex items-center ">
        <Link className="text-4xl font-bold flex relative z-20 bg-clip-text text-transparent bg-gradient-to-t from-red-500 to-neutral-200 py-8 items-center decoration-red-200  underline decoration-wavy decoration-from-font " href="/">
          AnyDex
          <img className="absolute left-[6.9rem] mt-2" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="AnyDex" />
        </Link>
        <Link className=" animate-pulse" href="https://pokeapi.co/" target="_blank">
          API
        </Link>
      </nav>

      <div className="space-x-5">
    
        <ModeToggle />
      </div>
    </nav>
  );
}
