import { PokemonAbilityUrl, pokemonUrl } from "../interfaces/config";

export async function getPokemon(url: string) {
    const response = await fetch(url);
    return await response.json();
}

export async function getPokemons(offset: number) {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
    );
    const data = await response.json();
    const pokemons = data.results.map(
        async (data: pokemonUrl) => await getPokemon(data.url)
    );
    return await Promise.all(pokemons);
}

export async function getPokemonDetail(pokemonName: string) {
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return await response.json();
}

export async function getPokemonAbilitiesDescription(pokemonName: string) {
    const response = await getPokemonDetail(pokemonName);
    const { abilities } = response;
    const pokemonAbilities = abilities.map(async (data: PokemonAbilityUrl) => {
        const ability = await fetch(data.ability.url);
        return ability.json();
    });
    return await Promise.all(pokemonAbilities);
}
