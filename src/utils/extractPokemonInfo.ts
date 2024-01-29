import { PkmnStats, IPokemon } from '../models';

export const extractPokemonInfo = (data: IPokemon): PkmnStats => {
    const {
        base_experience,
        id,
        name,
        sprites: { front_default },
        types,
    } = data;

    return {
        spriteUrl: front_default,
        name,
        id,
        types: [
            types[0].type.name,
            types.length > 1 ? data.types[1].type.name : undefined,
        ],
        experience: base_experience,
    };
};
