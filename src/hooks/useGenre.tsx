import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

interface Genre {
  id: number;
  name: string;
}
interface FetchGenreRes {
  count: number;
  results: Genre[];
}

export const useGenre = () => {
  const Controller = new AbortController();

  const [isLoading, SetIsLoading] = useState(true);

  const [genres, SetGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGenreRes>("/genres")
      .then((res) => {
        SetGenres(res.data.results);
        SetIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        SetIsLoading(false);
      });
    return () => Controller.abort();
  }, []);
  return { genres, error, isLoading };
};
