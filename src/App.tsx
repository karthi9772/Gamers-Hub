import {Grid,GridItem,Show} from "@chakra-ui/react"
import { Navbar } from "./components/Navbar"

export const App = () => {
  return (
    <div>
  <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }} >
    <GridItem area={"nav"} ><Navbar/></GridItem>
    <GridItem area={"main"} >Main</GridItem>
    <Show above="lg">
      <GridItem area={"aside"} >Aside</GridItem>
    </Show>
  </Grid>
    </div>
  )
}
