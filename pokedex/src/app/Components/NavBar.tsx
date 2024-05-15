import Link from "next/link";
import ModeToggle from "./Toggle"

export default function Nav() {
  return (
    <nav className="flex h-14 w-full items-center justify-between px-4  md:px-6 shadow dark:shadow-slate-700 ">
      <nav className="space-x-10 flex items-center">
        <Link className="text-4xl font-bold flex relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-neutral-200 py-8 items-center " href="/">
          AnyDex
          <img className="absolute z-50 left-[6.9rem] mt-2" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="AnyDex" />
        </Link>
        <Link className="font-medium text-sm leading-none animate-pulse" href="/convert">
          API
        </Link>
      </nav>

    <div className="space-x-5">
      <Link href={'/'}>
        About 
      </Link>
      <ModeToggle />
    </div>
    </nav>

  )

}