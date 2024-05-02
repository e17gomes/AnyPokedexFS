import Image from "next/image";
import ModeToggle from "./Components/Toggle";
import Card from "./Components/Card";


export default function Home() {
  return (
    <main className="grid grid-cols-1">
      <ModeToggle />
      <Card/>
    </main> 
  );
}
