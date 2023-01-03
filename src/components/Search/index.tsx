
interface SearchProps {
    searchValue: string;
    setSearchValue: (event: string) => void;
}

export const Search = ({ searchValue, setSearchValue }: SearchProps) => {

    return (
        <input
            placeholder="Type a pokemon name"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
        ></input>
    );
};