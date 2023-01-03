import styled from "styled-components";

export const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;

    @media(max-width: 768px){
        flex-direction: column;
    }
`

export const PokemonName = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        max-width: 400px;
    }

    @media (max-width: 768px) {
        img {
            max-width: 300px;
        }
    }
`;

export const PokemonAbilities = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;
    ul {
        width: 300px;
        text-align: center;
    }
    li, h3 {
        transition: all 1s ease-in-out;
    }

`;