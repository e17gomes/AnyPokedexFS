import React from "react";
import Card from "./Components/Card";
import Nav from "./Components/NavBar";


export default function Home() {
  return (
    <main className="min-h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col items-center">

    <Nav />
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div>
      <Card/>
    </main> 
  );
}
