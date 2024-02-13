import { useState,useEffect } from "react";
import apiClient from "../Services/api-client";
// import{}

interface Game{
    id: number,
    name: string,
  }
  interface FetchGamesRes{
    count: number,
    results: Game[]
  }

export const useGame = () => {
  const Controller=new AbortController()


    const[games,SetGames]=useState<Game[]>([])
        const [error,setError]=useState("");
        useEffect(()=>{
            apiClient.get<FetchGamesRes>('/games').then(res=>SetGames(res.data.results))
            .catch(err=>setError(err.message))
           return () => Controller.abort()
        },[])
        return{games,error}
}
