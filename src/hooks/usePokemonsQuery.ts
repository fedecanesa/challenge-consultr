import { useQuery } from "@tanstack/react-query"
import { getPokemons } from "../services/getPokemons"

const usePokemonsQuery = () => {
  const {data , isLoading , isSuccess , isError} = useQuery({
       queryKey: ["getPokemons"],
        queryFn: () => getPokemons(),
       
    })
    return {
        pokemnos: data?.results,
        isLoading,
        isSuccess,
        isError
    } 
  
}

export default usePokemonsQuery;

"https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"