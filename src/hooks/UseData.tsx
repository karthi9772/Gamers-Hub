import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

interface FetchRes<T> {
  count: number;
  results: T[];
}

export const useData = <T,>(endpoint: string) => {
  const Controller = new AbortController();

  const [isLoading, SetIsLoading] = useState(true);

  const [data, SetData] = useState<T[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchRes<T>>(endpoint)
      .then((res) => {
        SetData(res.data.results);
        SetIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        SetIsLoading(false);
      });
    return () => Controller.abort();
  }, []);
  return { data, error, isLoading };
};
