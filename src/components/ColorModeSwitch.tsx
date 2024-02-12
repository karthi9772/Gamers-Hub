import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

export const ColorModeSwitch = () => {
    const {toggleColorMode,colorMode}=useColorMode();
  return (
    <HStack mr={"20px"}>
        <Switch colorScheme="green" checked={colorMode==="dark"} onChange={toggleColorMode}></Switch>
        <Text>DarkMode</Text>
    </HStack>    
  )
}
