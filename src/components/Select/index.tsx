import { SelectStyled } from "./style";

interface SelectProps {
    selectedOption: string;
    setSelectedOption: (event: string) => void;
}

export const Select = ({ selectedOption, setSelectedOption }: SelectProps) => {
    return (
        <SelectStyled
            onChange={(event) => setSelectedOption(event.target.value)}
            value={selectedOption}
        >
            <option value="all">All</option>
            <option value="fire">fire</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="water">water</option>
            <option value="ground">ground</option>
            <option value="rock">rock </option>
            <option value="fairy">fairy</option>
            <option value="poison">poison</option>
            <option value="bug">bug</option>
            <option value="dragon">dragon</option>
            <option value="psychic">psychic </option>
            <option value="flying">flying </option>
            <option value="fighting">fighting</option>
            <option value="normal">normal </option>
            <option value="ice">ice</option>
            <option value="ghost">ghost</option>
            <option value="dark">dark </option>
            <option value="steel">steel</option>
        </SelectStyled>
    );
};
