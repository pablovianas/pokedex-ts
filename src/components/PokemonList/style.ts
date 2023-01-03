import styled from 'styled-components'

export const Main = styled('main')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
export const Container = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const SearchBar = styled("div")`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 15px;
    input {
        border: none;
        border-radius: 8px;
        width: 35%;
        padding-left: 10px;
    }

    input::-webkit-input-placeholder {
        padding-left: 10px;
    }
    @media (max-width: 425px) {
        flex-wrap: wrap;
        gap: 20px;
    }
`;
