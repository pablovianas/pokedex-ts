export interface Pokemon {

    [key: string]: Object;
    id: number;
    sprites: {
        other:{
            home:{
                front_shiny: string;
            }
        }
    };
    name: string;
    types: {
        [key: number]:{
            type: {
                name: string;
            };
        };
    };
    moves: {
        move: {
            name: string;
        };
    }[]
    
}

export interface PokemonAbilityDescription extends Pokemon {
    name: string;
    effect_entries: {
        short_effect: string;
        language: {
            name: string;
        };
    }[];
}

export type pokemonUrl = {
    url: string;
}

export type PokemonAbilityUrl = {
    ability: {
        url: string;
    };
}
