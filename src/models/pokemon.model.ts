export interface IPokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource<PokemonForm>[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    past_types: PokemonTypePast[];
    sprites: PokemonSprites;
    species: NamedAPIResource<PokemonSpecies>;
    stats: PokemonStat[];
    types: PokemonType[];
}
// Tipos para Ability
interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource<Ability>;
}
interface Ability {
    name: string;
    url: string;
}
interface PokemonForm {
    name: string;
    url: string;
}
// Tipos para PokemonSprites
interface PokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female?: string;
    front_shiny_female?: string;
    back_default: string;
    back_shiny: string;
    back_female?: string;
    back_shiny_female?: string;
}

// Tipos para PokemonType
interface PokemonType {
    slot: number;
    type: NamedAPIResource<Type>;
}

// Tipos para PokemonHeldItem
interface PokemonHeldItem {
    item: NamedAPIResource<Item>;
    version_details: PokemonHeldItemVersion[];
}

// Tipos para PokemonHeldItemVersion
interface PokemonHeldItemVersion {
    version: NamedAPIResource<Version>;
    rarity: number;
}
interface Version {
    name: string;
    url: string;
}

// Tipos para PokemonMove
interface PokemonMove {
    move: NamedAPIResource<Move>;
    version_group_details: PokemonMoveVersion[];
}

// Tipos para PokemonMoveVersion
interface PokemonMoveVersion {
    move_learn_method: NamedAPIResource<MoveLearnMethod>;
    version_group: NamedAPIResource<VersionGroup>;
    level_learned_at: number;
}

// Tipos para PokemonTypePast
interface PokemonTypePast {
    generation: NamedAPIResource<Generation>;
    types: PokemonType[];
}

// Tipos para PokemonStat
interface PokemonStat {
    stat: NamedAPIResource<Stat>;
    effort: number;
    base_stat: number;
}

// Tipos para NamedAPIResource
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface NamedAPIResource<T> {
    name: string;
    url: string;
}

// Tipos para VersionGameIndex
interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource<PokemonVersion>;
}
interface PokemonVersion {
    name: string;
    url: string;
}

// Tipos para PokemonSpecies
interface PokemonSpecies {
    // Definir tipos según tus necesidades
}

// Tipos para PokemonMoveVersion
interface PokemonMoveVersion {
    move_learn_method: NamedAPIResource<MoveLearnMethod>;
    version_group: NamedAPIResource<VersionGroup>;
}

// Tipos para VersionGroup
interface VersionGroup {
    // Definir tipos según tus necesidades
}

// Tipos para MoveLearnMethod
interface MoveLearnMethod {
    // Definir tipos según tus necesidades
}

// Tipos para Move
interface Move {
    // Definir tipos según tus necesidades
}

// Tipos para Type
interface Type {
    // Definir tipos según tus necesidades
}

// Tipos para Stat
interface Stat {
    // Definir tipos según tus necesidades
}

// Tipos para Item
interface Item {
    // Definir tipos según tus necesidades
}

// Tipos para VersionGameIndex
interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource<Version>;
}

// Tipos para Version
interface Version {
    // Definir tipos según tus necesidades
}

// Tipos para Generation
interface Generation {
    // Definir tipos según tus necesidades
}

// Tipos para VersionGroup
interface VersionGroup {
    // Definir tipos según tus necesidades
}
