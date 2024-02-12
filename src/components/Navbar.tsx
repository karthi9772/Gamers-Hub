import { HStack ,Image} from "@chakra-ui/react"
import logo from "../assets/logo/Gamers-Hub-logo.png"
import { ColorModeSwitch } from "./ColorModeSwitch"
export const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"}>
        <Image ml={"20px"} src={logo} boxSize={"90px"}></Image>
        <ColorModeSwitch />
    </HStack>
    )
}
