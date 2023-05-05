import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {catchPokemon, getPokemons} from "../../redux/actions/actions";

export const PokemonList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    const { isLoading, pokemons, error } = useSelector(state => state.pokemons);

    const handleCatch = pokemon => {
        const isCaught = window.confirm(`Are you sure you want to catch ${pokemon}?`);
        if (isCaught) {
            dispatch(catchPokemon(pokemon));
            alert(`${pokemon} has been caught!`);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Pokemon List</h2>
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.name}>
                        <span>{pokemon.name}</span>
                        <button onClick={() => handleCatch(pokemon.name)}>Catch</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

