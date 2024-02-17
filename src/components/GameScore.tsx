import { Badge } from "@chakra-ui/react"

interface props{
    score:number,
}

export const GameScore = ({score}: props) => {
  let color= score>75 ? "green" : score>60 ? 'yellow' : "red"
    return (
    <Badge colorScheme={color} fontSize={'14px'} paddingX={2} borderRadius={"4px"}>{score}</Badge>
  )
}
