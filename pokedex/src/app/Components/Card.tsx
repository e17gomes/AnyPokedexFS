'use client'
import axios from "axios";

import Image from "next/image";
import { useState, useEffect, ChangeEvent} from "react";

function GetPokes() {
  const [count, setCount] = useState(1);
  const [poke, setPoke] = useState('')
  const [namePoke, setnamePoke] = useState(''); //desconsidera
  const [imgPoke, setImgPoke] = useState(''); //desconsidera
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    //call the function get
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
      setTimeout(() => {
        setIsLoading(false)
      }, 700);
      setPoke('')

    }
  };

  return (

    <>
      {isLoading ? (
        <p className="select-none">GIF de carregamento</p>
      ) : (
        <>
          <form onSubmit={handleSearch}>
            <input className="bg-red-300" type="search" onChange={handleGetVal} />
          </form>
          <button onClick={getPoke}>fetch</button>
          <div className="flex space-x-5 select-none">
            <p onClick={handleCountPrev}>Prev {'<'}</p>
            <p>{namePoke}</p>

            <Image
              src={imgPoke||"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/100.png"}
              alt={namePoke}
              width={50}
              height={50}
              priority={true}
            />
            <p onClick={handleCountNext}>Next {'>'}</p>
          </div>
        </>
      )}
    </>
  );
}

export default GetPokes