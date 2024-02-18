import { useGenre } from "../hooks/useGenre";

export const GenreList = () => {
  const { data } = useGenre();
  return (
    <ul>
      {data.map((gen) => (
        <li key={gen.id}>{gen.name}</li>
      ))}
    </ul>
  );
};
