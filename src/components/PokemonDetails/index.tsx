import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPokemonDetail, getPokemonAbilitiesDescription } from "../../services/api";
import { Pokemon, PokemonAbilityDescription } from "../../interfaces/config";
import { Header } from "../Header";
import { Button } from "../Button";
import * as Style from './style'

 
export const PokemonDetails = () => {
    const { pokemonName } = useParams() as { pokemonName: string };
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [pokemonAbilities, setPokemonAbilities] = useState<PokemonAbilityDescription[]>([]);

    async function getPokemon() {
        const pokemonData = await getPokemonDetail(pokemonName);
        const pokemonAbilities = await getPokemonAbilitiesDescription(pokemonName);
        setPokemonAbilities(pokemonAbilities);
        setPokemon(pokemonData);
    }

    useEffect(() => {
        getPokemon();
    }, []);
 
    return (
        <>
            <Header>
                <h1>Pokémon Info</h1>
                <Button />
                <Link to={'/'}>Back to list</Link>
            </Header>
            <Style.Container>
                <Style.PokemonName>
                    <h2>{pokemonName}</h2>
                    <img src={pokemon?.sprites.other.home.front_shiny} alt="pokemon sprite" />
                </Style.PokemonName>
                <Style.PokemonAbilities>
                    <h3>Pokemon Moves</h3>
                    <ul>
                        {pokemon?.moves.slice(0, 4).map((poke) => {
                            return <li key={poke.move.name}>{poke.move.name}</li>;
                        })}
                    </ul>
                    <h3>Pokemon Abilities</h3>
                    <ul>
                        {pokemonAbilities.map((ability) => {

                            const abilityEnglishDescription = ability.effect_entries.filter((effect)=>{
                                return effect.language.name === "en"
                            })
                        
                            return (
                                <li key={ability.name}>{ability.name} - {abilityEnglishDescription[0].short_effect}</li>
                            );
                        })}

                    </ul>
                </Style.PokemonAbilities>
            </Style.Container>
        </>
    );
};
