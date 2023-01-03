import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/themes";
import { Main } from "./routes/routes";
import { ColorModeContext, ColorModeProvider } from "./contexts/colormode";
import { GlobalStyle } from './style/GlobalStyle'


interface AppProps {
    children: JSX.Element;
}

function ProviderWrapper({children}: AppProps){
    return <ColorModeProvider initialMode={"light"}>{children}</ColorModeProvider>;
}

function MyApp() {
    const appCtx = useContext(ColorModeContext);
    return (
        <ThemeProvider theme={theme[appCtx?.mode]}>
            <GlobalStyle />
            <Main />
        </ThemeProvider>
    );
}

function App() {
    return (
        <ProviderWrapper>
            <MyApp />
        </ProviderWrapper>
    );
}

export default App;
