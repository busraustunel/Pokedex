import { useDispatch } from "react-redux";
import {catchPokemon, releasePokemon} from "../../redux/actions/caughtActions";

export function PokemonList(props) {
    const dispatch = useDispatch();

    const handleCatch = (pokemon) => {
        dispatch(catchPokemon(pokemon));
    };

    const handleRelease = (id) => {
        dispatch(releasePokemon(id));
    };

    return (
        <div>
            {props.pokemons.map((pokemon) => (
                <div key={pokemon.id}>
                    <h2>{pokemon.name}</h2>
                    <button onClick={() => handleCatch(pokemon)}>Catch Pokemon</button>
                    <button onClick={() => handleRelease(pokemon.id)}>Release Pokemon</button>
                </div>
            ))}
        </div>
    );
}
