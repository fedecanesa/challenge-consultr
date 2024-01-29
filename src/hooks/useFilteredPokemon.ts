import { useEffect, useMemo } from 'react';
import { usePokemon } from '.';
import { extractPokemonInfo } from '../utils';

const useFilteredPokemon = (
    id: number | string,
    selectedElement: string,
    fetchNextPage: () => void,
) => {
    const { data, isLoading, isError } = usePokemon(id);
    const pokemon = useMemo(
        () => (data ? extractPokemonInfo(data) : null),
        [data],
    );

    const shouldRender = useMemo(() => {
        if (selectedElement === 'all') {
            return true;
        }

        return pokemon?.types.includes(selectedElement) || false;
    }, [selectedElement, pokemon]);

    useEffect(() => {
        if (!shouldRender && !isLoading && !isError) {
            fetchNextPage();
        }
    }, [shouldRender, isLoading, isError, fetchNextPage]);

    return {
        pokemon,
        isLoading,
        isError,
        shouldRender,
    };
};

export default useFilteredPokemon;
