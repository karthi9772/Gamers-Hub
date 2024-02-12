import { HStack ,Image,Text} from "@chakra-ui/react"
import logo from "../assets/logo/Gamers-Hub-logo.png"
export const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={"90px"}></Image>
        <Text>NavBar</Text>
    </HStack>
    )
}
