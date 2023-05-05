import axios from "axios";

export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

export const fetchPokemon = () => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest());
        axios
            .get("pokemon?limit=151")
            .then((response) => {
                const pokemonList = response.data.results;
                dispatch(fetchPokemonSuccess(pokemonList));
            })
            .catch((error) => {
                dispatch(fetchPokemonFailure(error.message));
            });
    };
};

export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST,
    };
};

export const fetchPokemonSuccess = (pokemonList) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemonList,
    };
};

export const fetchPokemonFailure = (error) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error,
    };
};
