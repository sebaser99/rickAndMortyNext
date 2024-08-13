import { Character } from "@/components/Character";

export const metadata = {
  title: "Rick and Morty",
  description: "20 personajes de rick and morty",
  keywords: ["morty", "rick", "parquesfot"]
}

export default async function Home() {
  const {results} = await getData()
  return (
    <main className="flex min-h-screen items-center flex-wrap justify-between p-8">
      {results.map((character: any) => (
        <Character key={character.id} character={character} />
      ))}
    </main>
  );
}



async function getData(){
  try{
    const res = await fetch("https://rickandmortyapi.com/api/character")
    if(!res.ok){
      throw new Error("Hubo un error en la red")
    }
    const posts = await res.json();
    return posts;

  } catch(error){
    console.log(error)
  }
}
