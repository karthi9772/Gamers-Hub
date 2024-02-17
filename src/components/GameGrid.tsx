import { SimpleGrid } from "@chakra-ui/react"
import { useGame } from "../hooks/useGame"
import { GameCard } from "./GameCard"
import { GameCardSkeleton } from "./GameCardSkeleton"

export const GameGrid = () => {
    const{games,error,isLoading}=useGame()
    const skel=[1,2,3,4,5,6,];
  return (
   <div>
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4,}} spacing={10} padding={10}>
      {isLoading&&skel.map((sk)=><GameCardSkeleton key={sk}/>)}
      {games.map((game)=><GameCard key={game.id} game={game}/>
      )}
    </SimpleGrid>
    {error&&<h1>{error}</h1>}
   </div>
  )
}
