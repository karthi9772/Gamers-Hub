import { platform } from "../hooks/useGame"
import {Text} from "@chakra-ui/react"
interface props{
   platforms: platform[]
}

export const Platform_Icons = ({platforms}: props) => {
  return (
    <>
     <Text>{platforms.map((platform)=><Text key={platform.id}>{platform.name}</Text>)}</Text>
    </>
    
  )
}
