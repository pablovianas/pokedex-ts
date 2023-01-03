import { createContext, useState, ReactNode } from "react";

interface ColorModeContextInterface {
    mode: string;
    setMode: (mode: string) => void;
    toggleMode: () => void;
}

export const ColorModeContext = createContext({} as ColorModeContextInterface);

interface ColorModeProviderProps {
    initialMode: string;
    children: ReactNode;
}

export const ColorModeProvider = ({initialMode, children}: ColorModeProviderProps) => {
    const [mode, setMode] = useState(initialMode);
   
    function toggleMode() {
        if (mode === "dark") setMode("light");
        if (mode === "light") setMode("dark");
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {children}
        </ColorModeContext.Provider>
    );
};
