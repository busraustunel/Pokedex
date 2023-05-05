import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {Navbar} from "../../components/Navbar/Navbar";


export function HomeScreen () {
    return (
        <div>
            <Navbar />
            <PokemonCard />
        </div>
    );
}
