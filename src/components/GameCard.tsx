import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import { Platform_Icons } from "./Platform_Icons"

interface props{
    game: Game
}
export const GameCard = ({game}: props) => {
  return (
    <Card overflow="hidden">
        <Image  src={game.background_image}></Image>
        <CardBody borderRadius={10}>
            <Heading>
                {game.name}
            </Heading>
           <Platform_Icons platforms={game.parent_platforms.map(p=>p.platform)}></Platform_Icons>
        </CardBody>
    </Card>
  )
}
