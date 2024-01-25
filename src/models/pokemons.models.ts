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

export type pokemonElementType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";
