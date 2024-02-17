import { useGenre } from "../hooks/useGenre";

export const GenreList = () => {
  const { genres } = useGenre();
  return (
    <ul>
      {genres.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
};
