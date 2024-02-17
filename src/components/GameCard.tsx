import { Card, CardBody, Heading, Image,HStack } from "@chakra-ui/react"
import { Game } from "../hooks/useGame"
import { Platform_Icons } from "./Platform_Icons"
import { GameScore } from "./GameScore"
import { GetCroppedImageUrl } from "../Services/Image_Url"

interface props{
    game: Game
}
export const GameCard = ({game}: props) => {
  return (
    <Card width={"300px"} overflow="hidden">
      <Image  src={GetCroppedImageUrl(game.background_image)}></Image>
        <CardBody borderRadius={10}>
          
            <Heading>
                {game.name}
            </Heading>
            <HStack justifyContent={"space-between"}>
           <Platform_Icons platforms={game.parent_platforms.map(p=>p.platform)}></Platform_Icons>
            <GameScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}
