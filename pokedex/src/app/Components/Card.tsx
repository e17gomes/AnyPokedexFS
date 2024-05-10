'use client'
import axios from "axios";
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { useState, useEffect, ChangeEvent } from "react";

function GetPokes() {
  const [count, setCount] = useState(1);
  const [poke, setPoke] = useState('')
  const [namePoke, setnamePoke] = useState(''); //desconsidera
  const [imgPoke, setImgPoke] = useState(''); //desconsidera
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    //call the function getPoke 
    () => {
      getPoke()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]
  )
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    getPoke();
  };


  const handleGetVal = (e: ChangeEvent<HTMLInputElement>) => { setPoke(e.target.value) }
  const handleCountPrev = () => setCount(prevCount => prevCount > 1 ? prevCount - 1 : prevCount);
  const handleCountNext = () => setCount(prevCount => prevCount + 1);

  const getPoke = async () => {
    setIsLoading(true)

    const url = `https://pokeapi.co/api/v2/pokemon/${poke ? poke.toLowerCase() : count}`
    try {

      const response = await axios.get(url);
      parseInt(response.data.id)
      console.log(typeof response.data.id)
      setCount(response.data.id)
      // console.log('count '+ count)
      setImgPoke(response.data.sprites.front_default);
      setnamePoke(response.data.name);
      // console.log(response.data.id + " ID")


    } catch (error) {
      console.error("Erro ao obter Pokémon:", error);
    } finally {
      // setTimeout(() => {
      //   //testando aqui
      // }, 700);
      setIsLoading(false)
      setPoke('')

    }
  };

  return (

    <>



      {isLoading ? (


<section className="space-y-10 m-auto">
<form onSubmit={handleSearch} className="bg-gray-300 rounded p-2 text-center w-fit m-auto">
  <input className="bg-inherit outline-none dark:text-gray-700" placeholder="insert here a pokemon " type="search" onChange={handleGetVal} />
  <button onClick={getPoke}>🍳</button>
</form>
<div className="flex items-center justify-center space-x-3">
  <Button variant="outline" onClick={handleCountPrev}>
    <p className=" h-4 w-4 flex items-center"> {'<-'} </p>
    
  </Button>
  <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
    <div className="relative">
      
    <div className="flex items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
        </div>
      <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
        Fire
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{namePoke.toUpperCase()}</h3>
      <div className="flex items-center space-x-2 mb-4">
        <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Fire</div>
        <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Flying</div>
      </div>
      <p className="text-gray-500 text-sm">
        Charizard is a Fire/Flying type Pokémon. It is the final evolution of Charmander.
      </p>
    </div>
  </Card>
  <Button variant="outline" onClick={handleCountNext}>
    <p className=" h-4 w-4 flex items-center"> {"->"} </p>
  </Button>
</div>
</section>

      )
       :


        (
          <section className="space-y-10 m-auto">
            <form onSubmit={handleSearch} className="bg-gray-300 rounded p-2 text-center w-fit m-auto">
              <input className="bg-inherit outline-none dark:text-gray-700" placeholder="insert here a pokemon " type="search" onChange={handleGetVal} />
              <button onClick={getPoke}>🍳</button>
            </form>
            <div className="flex items-center justify-center space-x-3">
              <Button variant="outline" onClick={handleCountPrev}>
                <p className=" h-4 w-4 flex items-center"> {'<-'} </p>
                
              </Button>
              <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    alt="Pokemon"
                    className="m-auto pt-10 w-48 h-48 object-cover "
                    height={80}
                    src={imgPoke || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"}
                    style={{
                      aspectRatio: "500/300",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                  <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Fire
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{namePoke.toUpperCase()}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Fire</div>
                    <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Flying</div>
                  </div>
                  <p className="text-gray-500 text-sm">
                    Charizard is a Fire/Flying type Pokémon. It is the final evolution of Charmander.
                  </p>
                </div>
              </Card>
              <Button variant="outline" onClick={handleCountNext}>
                <p className=" h-4 w-4 flex items-center"> {"->"} </p>
              </Button>
            </div>
          </section>
        )}




    </>
  );
}

export default GetPokes