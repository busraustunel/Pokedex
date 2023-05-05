import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../redux/store";
import { useEffect } from "react";
import { fetchPokemon } from "../../redux/actions/pokemonActions";

export function Home() {
    const dispatch = useDispatch();
    const pokemonList = useSelector((state) => state.pokemon.pokemonList);
    const loading = useSelector((state) => state.pokemon.loading);
    const error = useSelector((state) => state.pokemon.error);

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    return (
        <div>
            <h1>Pokemon List</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ul>
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.id}>
                        {pokemon.name} ({pokemon.id})
                    </li>
                ))}
            </ul>
        </div>
    );
}

// App.js
export default function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}
