import {Grid,GridItem,Show} from "@chakra-ui/react"

export const App = () => {
  return (
    <div>
  <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }} >
    <GridItem area={"nav"} bg={"green"}>Nav</GridItem>
    <GridItem area={"main"} bg={"teal"}>Main</GridItem>
    <Show above="lg">
      <GridItem area={"aside"} bg="indigo">Aside</GridItem>
    </Show>
  </Grid>
    </div>
  )
}
