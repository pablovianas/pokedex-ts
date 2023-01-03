import React, {ReactNode} from 'react';
import { HeaderStyled } from "./style";

type HeaderProps = {
    children: ReactNode;
}

export const Header = ({children}: HeaderProps) => {
    return(
        <HeaderStyled>
            {children}
        </HeaderStyled>
    )
}