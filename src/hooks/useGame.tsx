import { useState,useEffect } from "react";
import apiClient from "../Services/api-client";
// import{}

export interface platform{
  id: number,
  name:string,
  slug:string,
}
export interface Game{
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: platform}[],
    metacritic: number,
  }

  interface FetchGamesRes{
    count: number,
    results: Game[],
  }

export const useGame = () => {
  const Controller=new AbortController()

  const [isLoading,SetIsLoading]=useState(true);

    const[games,SetGames]=useState<Game[]>([])
        const [error,setError]=useState("");

        useEffect(()=>{
            apiClient.get<FetchGamesRes>('/games').then(res=>{
              SetGames(res.data.results)
              SetIsLoading(false)
            })
            .catch(err=>{
              setError(err.message)
              SetIsLoading(false)
            })
           return () => Controller.abort()
        },[])
        return{games,error,isLoading}
}
