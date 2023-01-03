import styled from "styled-components";

export const PokemonList = styled("ul")`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    max-width: 800px;
    overflow-y: scroll;
    max-height: 400px;
    li {
        -webkit-transition: all 1s ease-in-out;
        -moz-transition: all 1s ease-in-out;
        -o-transition: all 1s ease-in-out;
        transition: all 1s ease-in-out;
    }
    a {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.3em 0.7em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
        margin-bottom: 10px;

        &:hover {
            border-color: #646cff;
        }
        &:focus,
        &:focus-visible {
            outline: 4px auto -webkit-focus-ring-color;
        }
    }

    &:has(h2){
        text-align:center;
        overflow-y: hidden;
    }

    @media(max-width:768px){
        max-width: 600px;
        max-height: 400px;
    }
    @media(max-width:425px){
        max-width: 350px;
        max-height: 250px;
    }
`;

export const PokemonDetails = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PokemonInformations = styled("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    gap: 10px;

    border: 1px solid ${({ theme }) => theme.borderBase};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .pokemon-name {
        font-weight: bolder;
    }
`;

type PokemonTypeColorBackgroundProps = {
    backgroundColor?: string;
};
export const PokemonType = styled.span(
    ({ backgroundColor }: PokemonTypeColorBackgroundProps) => `
    background-color: ${backgroundColor};
    border-radius: 10px;
    padding: 5px;
    width: 70%;
    text-align: center;
`
);

export const PokemonImageBackground = styled.img(
    ({ backgroundColor }: PokemonTypeColorBackgroundProps) => `
    background-color: ${backgroundColor};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 120px;  
`
);
