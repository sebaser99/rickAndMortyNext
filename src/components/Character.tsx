import Image from "next/image"
import Link from "next/link"

interface Props {
    character : Character
}

interface Character {
    id: string
    name: string,
    status:  string,
    species: string,
    type: string,
    gender: string,
    origin: { name: string, url: string },
    location: {
      name: string,
      url: string
    },
    image: string,
    episode: [ string ],
    url: string,
    created: string
}

export const Character = ({character}: Props) => {
    const {id, name, image, status, species, gender, origin, location} = character;
  return (
    <div style={{minWidth: "380px"}} key={id} className="flex flex-col items-center gap-6 p-2 py-6 bg-gray-800 text-white rounded-lg shadow-lg mb-12">
          <Image
            src={image}
            alt={name}
            className="rounded-lg w-36 h-36 object-cover"
            width={300}
            height={300}
          />
          <div>
            <Link href={`/character/${id}`}><h2 className="text-2xl font-bold mb-2">{name}</h2></Link>
            <p className="mb-1"><strong>Status:</strong> {status}</p>
            <p className="mb-1"><strong>Species:</strong> {species}</p>
            <p className="mb-1"><strong>Gender:</strong> {gender}</p>
            <p className="mb-1"><strong>Origin:</strong> {origin.name}</p>
            <p className="mb-1"><strong>Location:</strong> {location.name}</p>
          </div>
      </div>
  )
}
