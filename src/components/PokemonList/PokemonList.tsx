import { PokemonListGeneral, PokemonSearchResult } from '..';

interface PokemonListProps {
    search: string;
    pokemons: { url: string; name: string }[] | undefined;
    isSuccess: boolean;
    isError: boolean;
    selectedElement: string;
    fetchNextPage: () => void;
}

const PokemonList = ({
    search,
    pokemons,
    isSuccess,
    isError,
    selectedElement,
    fetchNextPage,
}: PokemonListProps) => {
    return (
        <>
            {search ? (
                <PokemonSearchResult search={search} />
            ) : (
                <PokemonListGeneral
                    pokemons={pokemons}
                    isSuccess={isSuccess}
                    isError={isError}
                    selectedElement={selectedElement}
                    fetchNextPage={fetchNextPage}
                />
            )}
        </>
    );
};

export default PokemonList;
