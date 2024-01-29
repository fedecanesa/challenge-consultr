import React from 'react';
import { useFilteredPokemon } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import './pokemonCard.scss';

interface PokemonCardProps {
    id: number | string;
    selectedElement: string;
    fetchNextPage: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
    id,
    selectedElement,
    fetchNextPage,
}) => {
    const { pokemon, shouldRender } = useFilteredPokemon(
        id,
        selectedElement,
        fetchNextPage,
    );
    const navigate = useNavigate();

    if (!shouldRender) return null;

    return (
        <div
            className='dashboard__pokemons--card'
            key={id}
            onClick={() => navigate(`/pokemon/${id}`)}>
            <section className='card'>
                <img src={pokemon?.spriteUrl} alt={pokemon?.name} />
                <div className='card__info'>
                    <p className='card__info-name'>{pokemon?.name}</p>
                    <p className='card__inof-experience'>
                        HP{pokemon?.experience}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PokemonCard;
