import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPokemonDetails} from "../../redux/actions/pokemonActions";

export function PokemonDetails(props) {
    const dispatch = useDispatch();
    const { pokemonDetails, loading, error } = useSelector((state) => state.pokemon);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchPokemonDetails(id));
        }
    }, [dispatch, id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>{pokemonDetails && pokemonDetails.name}</h1>
            <img src={pokemonDetails && pokemonDetails.sprites.front_default} alt={pokemonDetails && pokemonDetails.name} />
            <p>Height: {pokemonDetails && pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails && pokemonDetails.weight}</p>
        </div>
    );
}
