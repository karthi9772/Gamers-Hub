import {useState,useEffect} from "react"
import  apiClient  from "../Services/api-client"

interface Game{
  id: number,
  name: string,
}
interface FetchGamesRes{
  count: number,
  results: Game[]
}

export const GameGrid = () => {
    const[games,SetGames]=useState<Game[]>([])
    const [error,setError]=useState("");
    useEffect(()=>{
        apiClient.get<FetchGamesRes>('/games').then(res=>SetGames(res.data.results))
        .catch(err=>setError(err.message))
    })
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
