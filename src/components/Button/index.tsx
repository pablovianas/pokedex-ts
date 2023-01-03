import { useContext } from "react"
import { ColorModeContext } from "../../contexts/colormode"
import { ButtonStyled } from "./style"
import pokeball from '../../assets/pokeball.png'

export const Button = () =>{
    const context = useContext(ColorModeContext);
    return(
        <ButtonStyled onClick={()=>context?.toggleMode()}>
            <img src={pokeball} alt="pokeball image" />
        </ButtonStyled>
    )
}