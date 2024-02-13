import { SimpleGrid } from "@chakra-ui/react"
import { useGame } from "../hooks/useGame"
import { GameCard } from "./GameCard"

export const GameGrid = () => {
    const{games,error}=useGame()
    
  return (
   <div>
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4,}} spacing={10} padding={10}>

      {games.map((game)=><GameCard key={game.id} game={game}/>
      )}
    </SimpleGrid>
    {error&&<h1>{error}</h1>}
   </div>
  )
}
