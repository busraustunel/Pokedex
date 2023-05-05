import {PokemonCard} from "../../components/PokemonCard/PokemonCard";
import {Navbar} from "../../components/Navbar/Navbar";
import {SearchBox} from "../../components/SearchBox/SearchBox";


export function HomeScreen () {
    return (
        <div>
            <Navbar />
            <SearchBox />
            <PokemonCard />
        </div>
    );
}
