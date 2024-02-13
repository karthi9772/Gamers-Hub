import { useGame } from "../hooks/useGame"

export const GameGrid = () => {
    const{games,error}=useGame()
    
  return (
   <div>
    <ul>
      {games.map((game)=><li key={game.id}>{game.name}</li>
      )}
    </ul>
    {error&&<h1>{error}</h1>}
   </div>
  )
}
