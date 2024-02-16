import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
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
            <Text>{game.parent_platforms.map(({platform})=><Text>{platform.name}</Text>)}</Text>
        </CardBody>
    </Card>
  )
}
