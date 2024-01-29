import { PokemonCard } from '..';
import { usePokemonSearch } from '../../hooks';

interface PokemonSearchResultProps {
    search: string | number;
}

const PokemonSearchResult: React.FC<PokemonSearchResultProps> = ({
    search,
}) => {
    const {
        data: searchResult,
        isLoading: isSearching,
        isError: isSearchError,
        isSuccess: isSearchSuccess,
    } = usePokemonSearch(search);

    return (
        <div className='dashboard__pokemons--card'>
            {isSearching && <p>Loading...</p>}
            {isSearchError && <p>Error searching Pokemon.</p>}
            {isSearchSuccess && searchResult && (
                <PokemonCard key={searchResult.id} id={searchResult.id} />
            )}
            {!isSearching &&
                !isSearchError &&
                isSearchSuccess &&
                !searchResult && <p>No results found.</p>}
        </div>
    );
};

export default PokemonSearchResult;
