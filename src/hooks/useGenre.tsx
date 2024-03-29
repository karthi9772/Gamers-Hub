import { useData } from "./UseData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenre = () => useData<Genre>("/genres");
