import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon/:pokemonName" element={<Details />} />
        </Routes>
    );
};
