import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPokemonsList } from '../services';

const usePokemonsList = () => {
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        isLoading,
        isError,
        isSuccess,
    } = useInfiniteQuery({
        queryKey: ['pokemons'],
        queryFn: ({ pageParam }) => fetchPokemonsList(pageParam),
        initialPageParam: 1,
        getNextPageParam: (_lastPage, _allPages, lastPageParam) => {
            return lastPageParam + 1;
        },
    });

    return {
        data: data?.pages.flatMap(poke => poke.results),
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        isLoading,
        isError,
        isSuccess,
    };
};

export default usePokemonsList;
