import Link from "next/link";
import ModeToggle from "./Toggle"

export default function Nav() {
    return (
        <nav className="flex h-14 w-full items-center px-4 md:px-6 shadow">
        <nav className=" md:flex items-center space-x-4 flex-1 ml-4">
          <Link className="font-medium text-sm leading-none" href="/">
            Home
          </Link>
          <Link className="font-medium text-sm leading-none" href="/convert">
            Conversor
          </Link>
        
          <ModeToggle />
        </nav>
      </nav>
    )

}