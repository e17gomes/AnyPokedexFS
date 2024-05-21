import React from "react";
import Nav from "./Components/NavBar";
import { HeroHighlight } from "./Components/hero-highlight";
import Footer from "./Components/Footer";



export default function Home() {
  return (
    <main >
      <Nav/>
      <HeroHighlight/>   
      <Footer/>
   
    </main>
  );
}
