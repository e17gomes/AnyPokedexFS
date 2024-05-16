'use client'
import axios from "axios";
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect, ChangeEvent } from "react";
import { CircleArrowLeft, CircleArrowRight, Search } from "lucide-react";

function GetPokes() {
  const [count, setCount] = useState(1);
  const [poke, setPoke] = useState('')
  const [namePoke, setnamePoke] = useState(''); //
  const [imgPoke, setImgPoke] = useState(''); //
  const [typeP, setTypeP] = useState(''); //
  const [SecondaryTypes, setSecondaryTypes] = useState<{ type: { name: string } }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonStats, setPokemonStats] = useState<any[]>([]);


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
  const primeiraLetraMaiuscula = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getPoke = async () => {
    setIsLoading(true)

    const url = `https://pokeapi.co/api/v2/pokemon/${poke ? poke.toLowerCase() : count}`
    try {

      const response = await axios.get(url);
      parseInt(response.data.id)

      setCount(response.data.id)
      setPokemonStats(response.data.stats);
      setImgPoke(response.data.sprites.front_default);
      setnamePoke(response.data.name);
      setTypeP(response.data.types[0].type.name)
      setSecondaryTypes(response.data.types)

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
        // On Load
        <div className="relative">
          <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="" className="animate-spin w-24 " />
            </div>
          </div>
        </div>
      ) : (
        // Load Complete
        <section className="space-y-5 m-auto mt-0">
          <h1 className="text-6xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-t from-red-600 to-neutral-200 py-5">Welcome to AnyDex</h1>
  
          <form onSubmit={handleSearch} className="bg-gray-200 rounded p-2 text-center w-fit m-auto flex items-center">
            <input className="bg-inherit outline-none dark:text-gray-700" placeholder="insert here a pokemon" type="search" onChange={handleGetVal} />
            <button onClick={getPoke}><Search className="w-5" /></button>
          </form>
  
          <div className="flex items-center justify-center space-x-3">
            <Button variant="outline" onClick={handleCountPrev}>
             <CircleArrowLeft/>
            </Button>
  
            <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg ">
              <div className="relative bg-slate-300">
                <img
                  alt="Pokemon"
                  className="m-auto pt-10 w-48 h-48 object-cover"
                  height={80}
                  src={imgPoke || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"}
                  style={{
                    aspectRatio: "500/300",
                    objectFit: "cover",
                  }}
                  width={300}
                
                />
                <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {primeiraLetraMaiuscula(typeP)}
                </div>
              </div>
  
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{primeiraLetraMaiuscula(namePoke)}</h3>
                <div className="flex items-center space-x-2 mb-4">
                  {SecondaryTypes.map((stypes:any,index:number)=>{
                    return (<div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium" key={index}>{primeiraLetraMaiuscula(stypes.type.name)}</div>)
                  })}
                  {/* <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Fire</div>
                  <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Flying</div> */}
                </div>
                <ul className="grid grid-cols-2">
        {pokemonStats.map((stat, index) => (
          <li key={index}>
            {primeiraLetraMaiuscula(stat.stat.name)}: {stat.base_stat}
          </li>
        ))}
      </ul>
              </div>
            </Card>
  
            <Button variant="outline" onClick={handleCountNext}>
              <CircleArrowRight/>
            </Button>
          </div>
        </section> 
      )}
    </>
  );
  
}

export default GetPokes