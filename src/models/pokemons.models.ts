export default interface PokemonApiResponse {
    results:Pokemons[];
    next: string | null;
    conunt: number;
    previous: string | null
}

interface Pokemons {
    name: string;
    url: string
}