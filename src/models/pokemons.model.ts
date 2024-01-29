interface IPokemon {
    name: string;
    url: string;
}
export interface PokemonApiResponse {
    results: IPokemon[];
    next: string | null;
    conunt: number;
    previous: string | null;
}

export interface PkmnStats {
    spriteUrl: string;
    name: string;
    id: number;
    types: [string, string | undefined];
    experience: number;
}

export type pokemonElementType =
    | 'bug'
    | 'dark'
    | 'dragon'
    | 'electric'
    | 'fairy'
    | 'fighting'
    | 'fire'
    | 'flying'
    | 'ghost'
    | 'grass'
    | 'ground'
    | 'ice'
    | 'normal'
    | 'poison'
    | 'psychic'
    | 'rock'
    | 'steel'
    | 'water';
