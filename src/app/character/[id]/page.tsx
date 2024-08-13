
import { Character } from "@/components/Character"
import { notFound } from "next/navigation"

export async function generateStaticParams(){
    const {results} = await fetch("https://rickandmortyapi.com/api/character").then(res => res.json())

    return results.map((character: any) => (
        {id: String(character.id)}
    ))  
}

export default async function CharacterPage({params}:any){
    const character = await getData(params.id)

    if(!character){
        notFound()
    }
    return (
        <main className="flex min-h-screen items-center flex-wrap justify-between p-8">
            <Character character={character} />
        </main>
        
  )
}

async function getData(id: string){
    try{
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      if(!res.ok){
        throw new Error("Hubo un error en la red")
      }
      const post = await res.json();
      return post;
  
    } catch(error){
      console.log(error)
      return null
    }
  }
