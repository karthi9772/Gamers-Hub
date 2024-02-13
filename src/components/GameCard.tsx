import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"

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
        </CardBody>
    </Card>
  )
}
