import {PokemonCard} from "../../components/PokemonCard/PokemonCard";
import {SearchBox} from "../../components/SearchBox/SearchBox";


export function HomeScreen () {
    return (
        <div>
            <SearchBox />
            <PokemonCard />
        </div>
    );
}
