'use client'
import axios from "axios";
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect, ChangeEvent } from "react";
import { CircleArrowLeft, CircleArrowRight, Search } from "lucide-react";
import { colorsType } from "./colorType";


function GetPokes() {
  const [count, setCount] = useState(1);
  const [poke, setPoke] = useState('')
  const [namePoke, setnamePoke] = useState(''); //
  const [imgPoke, setImgPoke] = useState(''); //
  const [Types, setTypes] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonStats, setPokemonStats] = useState<any[]>([]);

  {
    Types.map((stypes: { type: { name: string } }, index: number) => {
      // Acesse a cor correspondente ao tipo atual de Pokémon diretamente do colorsType
      const backgroundColor = colorsType[stypes.type.name.toLowerCase()] || 'bg-gray-400';
    })
  }
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
      setTypes(response.data.types)
      console.log(response.data.stats)

    } catch (error) {
      console.error("Erro ao obter Pokémon:", error);
    } finally {
      setTimeout(() => {
        //testando aqui
        setIsLoading(false)
      }, 700);
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
            <button onClick={getPoke}><Search className="w-5 text-gray-700" /></button>
          </form>

          <div className="flex items-center justify-center space-x-3">
            <Button variant="outline" onClick={handleCountPrev}>
              <CircleArrowLeft />
            </Button>

            <Card className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg ">
              <div className="relative bg-gray-50">
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
                <div className={`absolute top-4 left-4  text-white px-3 py-1 rounded-full text-xs font-medium`}>
                  {Types.map((stypes: any, index: number) => {
                    const backgroundColor = colorsType[stypes.type.name.toLowerCase()] || 'bg-gray-400';
                    return (<div className={`${backgroundColor} text-gray-50 px-3 py-1 rounded-full text-xs font-medium m-1 shadow shadow-black text-center`} key={index}>{primeiraLetraMaiuscula(stypes.type.name)}</div>)
                  })}
                </div>
              </div>

              <div className="p-4">
                <h3 className={`text-2xl font-bold mb-2 shadow-black shadow-inner dark:shadow-slate-300 rounded-full text-center ${Types[0] ? colorsType[Types[0].type.name.toLowerCase()] : 'bg-gray-400'}`}>
                  {primeiraLetraMaiuscula(namePoke)}
                </h3>
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
              <CircleArrowRight />
            </Button>
          </div>
        </section>
      )}


    </>
  );

}

export default GetPokes