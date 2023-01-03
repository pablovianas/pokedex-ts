import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif;
        background-color: ${({ theme }) => theme.backgroundBase};
        color: ${({ theme }) => theme.textColorBase};
    }
 
    html {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    ul{
        list-style: none;
    }
    
    button,
    a {
        text-decoration: none;
        opacity: 1;
        transition: .3s;
        &:hover,
        &:focus {
        opacity: .5;
        }
    }
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
   
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
   
    ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 10px ;
    }
   
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
    }
    a:hover {
        color: #535bf2;
    }

    h1 {
        font-size: 2em;
        line-height: 1.1;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
    }
    button:hover {
        border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`;
