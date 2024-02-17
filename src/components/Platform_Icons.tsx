import {FaWindows,FaXbox,FaPlaystation,FaLinux,FaAndroid,FaApple} from "react-icons/fa"
import {SiNintendo} from "react-icons/si"
import {MdPhoneIphone} from "react-icons/md"
import { BsGlobe } from "react-icons/bs"
import { platform } from "../hooks/useGame"
import {HStack, Icon} from "@chakra-ui/react"
import { IconType } from "react-icons"
interface props{
   platforms: platform[]
}

export const Platform_Icons = ({platforms}: props) => {
    const iconObj: {[key: string]: IconType}= {
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        linux:FaLinux,
        android:FaAndroid,
        nintendo:SiNintendo,
        ios:MdPhoneIphone,
        web:BsGlobe,
        mac:FaApple
    }
  return (
    <HStack marginY={3}>
     {platforms.map((platform)=>
     <Icon color='blue.500' as={iconObj[platform.slug]}></Icon>
     )}
    </HStack>
    
  )
}
