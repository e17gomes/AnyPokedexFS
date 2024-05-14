import Link from "next/link";
import ModeToggle from "./Toggle"

export default function Nav() {
  return (
    <nav className="flex h-14 w-full items-center justify-between px-4  md:px-6 shadow dark:shadow-slate-700 ">
      <nav className="space-x-7">
        <Link className="text-4xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-neutral-200 py-8 " href="/">
          AnyDex
        </Link>
        <Link className="font-medium text-sm leading-none animate-pulse" href="/convert">
          API
        </Link>
      </nav>

    <div className="space-x-5">
      <Link href={'/'}>
      About the project
      </Link>
      <ModeToggle />
    </div>
    </nav>

  )

}