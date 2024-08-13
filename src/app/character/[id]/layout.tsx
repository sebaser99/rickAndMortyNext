

export default function CharacterLayout ({children}:{children: React.ReactNode}){
    return (
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {
          children
        }
      </div>
    )
  }
  