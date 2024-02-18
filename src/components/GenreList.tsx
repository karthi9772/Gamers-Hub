import { useGenre } from "../hooks/useGenre";
import { Text, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import { GetCroppedImageUrl } from "../Services/Image_Url";

export const GenreList = () => {
  const { data, isLoading, error } = useGenre();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((gen) => (
        <ListItem paddingY={2} key={gen.id}>
          <HStack>
            <Image
              borderRadius={2}
              boxSize={"32px"}
              src={GetCroppedImageUrl(gen.image_background)}
            />
            <Text fontSize={"lg"}>{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
