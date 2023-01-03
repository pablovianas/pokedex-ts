import { useState, useEffect } from "react";
import { getPokemons } from "../../services/api";
import { Pokemon } from "../../interfaces/config";
import { PokemonCard } from "../PokemonCard";
import { Button } from "../Button";
import { Search } from "../Search";
import { Select } from "../Select";
import * as Styled from "./style";


export const PokemonList = () => {
    const [offset, setOffSet] = useState(0);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<string>("all");
   
    useEffect(() => {
        async function getPokemonData() {
            const pokemonsData: Pokemon[] = await getPokemons(offset);
            setPokemons([...pokemons, ...pokemonsData]);
        }
        getPokemonData();
    }, [offset]);

    return (
            <Styled.Main>
                <Styled.Container>
                    <Styled.SearchBar>
                        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                        <Button />
                        <Select selectedOption={selectedOption} setSelectedOption={setSelectedOption}></Select>
                    </Styled.SearchBar>
                    <PokemonCard pokemons={pokemons} selectedOption={selectedOption} searchValue={searchValue}/>   
                    <button onClick={() => setOffSet(offset+10)}>Load more</button>   
                </Styled.Container>
            </Styled.Main>
    );
};
