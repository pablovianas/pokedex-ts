import styled from "styled-components";


export const HeaderStyled = styled("header")`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

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
    h1 {
        font-size: 1.2em;
        transition: all 1s ease-in-out;
    }
`;