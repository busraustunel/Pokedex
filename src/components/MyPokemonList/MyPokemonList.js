import { useSelector, useDispatch } from 'react-redux';
import {releasePokemon} from "../../redux/actions/actions";

export const MyPokemonList = () => {
    const dispatch = useDispatch();
    const { myPokemons } = useSelector(state => state.myPokemons);

    const handleRelease = pokemon => {
        const isReleased = window.confirm(`Are you sure you want to release ${pokemon}?`);
        if (isReleased) {
            dispatch(releasePokemon(pokemon));
            alert(`${pokemon} has been released!`);
        }
    };

    return (
        <div>
            <h2>My Pokemon List</h2>
            <ul>
                {myPokemons.map(pokemon => (
                    <li key={pokemon}>
                        <span>{pokemon}</span>
                        <button onClick={() => handleRelease(pokemon)}>Release</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

