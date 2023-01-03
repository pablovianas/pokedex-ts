import { Link } from "react-router-dom";
import { Pokemon } from "../../interfaces/config";
import { PokemonTypeColors } from "../../style/pokemonTypeColor";
import * as Styled from "./style";


type PokemonCardProps = {
    pokemons: Pokemon[];
    searchValue: string;
    selectedOption: string;
}

export const PokemonCard = ({selectedOption, pokemons, searchValue}: PokemonCardProps) => {
    const filterPokemons = (pokemons: Pokemon[]) => {
        if (selectedOption === "all") {
            return pokemons;
        }
        return pokemons.filter(
            (pokemon) => pokemon.types[0].type.name === selectedOption
        );
    };

    const filteredPokemon = filterPokemons(pokemons);

    return (
        <Styled.PokemonList>
            {filteredPokemon.length > 0 ? (
                filterPokemons(pokemons)
                    ?.filter((pokemon: Pokemon) => {
                        const pokemonNameNormalized =
                            pokemon.name.toLowerCase();
                        const searchValueNormalized = searchValue.toLowerCase();
                        return pokemonNameNormalized.includes(
                            searchValueNormalized
                        );
                    })
                    .map((pokemon: Pokemon) => {
                        const pokemonType = pokemon.types[0].type.name;
                        const pokemonTypeBackgroundColor =
                            PokemonTypeColors[pokemonType];
                        return (
                            <li key={pokemon.id}>
                                <Styled.PokemonDetails>
                                    <Styled.PokemonImageBackground
                                        backgroundColor={
                                            pokemonTypeBackgroundColor
                                        }
                                        src={
                                            pokemon.sprites.other.home
                                                .front_shiny
                                        }
                                    />
                                    <Styled.PokemonInformations>
                                        <span className="pokemon-name">
                                            {pokemon.name}
                                        </span>
                                        <Styled.PokemonType
                                            backgroundColor={
                                                pokemonTypeBackgroundColor
                                            }
                                        >
                                            {pokemon.types[0].type.name}
                                        </Styled.PokemonType>
                                        <Link to={`/pokemon/${pokemon.name}`}>
                                            Details
                                        </Link>
                                    </Styled.PokemonInformations>
                                </Styled.PokemonDetails>
                            </li>
                        );
                    })
            ) : (
                <h2>Esse tipo de pokemon não foi carregado ainda :3</h2>
            )}
        </Styled.PokemonList>
    );
};
