import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePokemon } from '../../hooks';
import './pokemonDetails.scss';

const PokemonDetails: React.FC = () => {
    const { id = 0 } = useParams<{ id: string }>();
    const { data: pokemon, isLoading, isError } = usePokemon(id);
    const navigate = useNavigate();
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error loading Pokémon details.</p>;
    }

    return (
        <div className='pokemon-details-container'>
            <button onClick={() => navigate('/')}>Go back</button>
            {pokemon && (
                <section className='pokemon-details'>
                    <div className='pokemon-details-header'>
                        <h2>{pokemon.name}</h2>
                    </div>

                    <div className='pokemon-details-image'>
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                    </div>
                    <div className='pokemon-details-info'>
                        <div className='about-section'>
                            <h3>About</h3>
                            <p>Weight: {pokemon.weight}</p>
                            <p>Height: {pokemon.height}</p>
                        </div>
                        <div className='divider'></div>
                        <div className='types-moves-section'>
                            <div className='types-section'>
                                <h3>Types</h3>
                                <ul>
                                    {pokemon.types.map(type => (
                                        <li key={type.type.name}>
                                            {type.type.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='moves-section'>
                                <h3>Moves</h3>
                                <ul>
                                    {pokemon.moves.map(
                                        (move, i) =>
                                            i < 5 && (
                                                <li key={move.move.name}>
                                                    {move.move.name}
                                                </li>
                                            ),
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default PokemonDetails;
