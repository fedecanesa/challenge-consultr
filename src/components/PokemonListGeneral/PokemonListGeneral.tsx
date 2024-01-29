import { PokemonCard } from '..';
import { extractNumberFromUrl } from '../../utils';

interface PokemonListGeneralProps {
    pokemons: { url: string; name: string }[] | undefined;
    isSuccess: boolean;
    isError: boolean;
    selectedElement: string;
    fetchNextPage: () => void;
}

const PokemonListGeneral: React.FC<PokemonListGeneralProps> = ({
    pokemons,
    isSuccess,
    isError,
    selectedElement,
    fetchNextPage,
}) => {
    return (
        <>
            {isSuccess &&
                !isError &&
                pokemons?.map((pokemon: { url: string; name: string }) => {
                    const { url } = pokemon;
                    const id = extractNumberFromUrl(url);
                    return (
                        <PokemonCard
                            key={id}
                            id={id}
                            selectedElement={selectedElement}
                            fetchNextPage={fetchNextPage}
                        />
                    );
                })}
        </>
    );
};

export default PokemonListGeneral;
