import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"

export const ColorModeSwitch = () => {
    const {toggleColorMode,colorMode}=useColorMode();
  return (
    <HStack mr={"20px"}>
      <Switch isChecked={colorMode=="dark"} onChange={toggleColorMode} colorScheme="green"></Switch>
        <Text>DarkMode</Text>
    </HStack>    
  )
}
