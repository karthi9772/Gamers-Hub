import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { GameGrid } from "./components/GameGrid";
import { GenreList } from "./components/GenreList";

export const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX={5} area={"aside"}>
            <GenreList></GenreList>
          </GridItem>
        </Show>
      </Grid>
    </div>
  );
};
