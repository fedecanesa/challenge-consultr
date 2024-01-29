import { useQuery } from '@tanstack/react-query';
import { fetchPokemon } from '../services';

const usePokemonSearch = (searchTerm: string | number) => {
    const { data, error, isLoading, isError, isSuccess } = useQuery({
        queryKey: ['pokemon', searchTerm],
        queryFn: () => fetchPokemon(searchTerm),
        enabled: !!searchTerm,
    });

    return {
        data,
        error,
        isLoading,
        isError,
        isSuccess,
    };
};

export default usePokemonSearch;
