import { useQuery } from '@tanstack/react-query';
import { fetchPokemon } from '../services/fetchPokemon';

const usePokemon = (id: number | string) => {
    return useQuery({
        queryKey: ['pokemon', id],
        queryFn: () => fetchPokemon(id),
    });
};

export default usePokemon;
