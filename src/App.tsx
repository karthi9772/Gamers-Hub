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
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
            <GenreList></GenreList>
          </GridItem>
        </Show>
      </Grid>
    </div>
  );
};
