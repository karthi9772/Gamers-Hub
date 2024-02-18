import { useData } from "./UseData";


export interface Genre {
  id: number;
  name: string;
}


export const useGenre = () => useData<Genre>("/genres")
