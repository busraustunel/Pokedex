import axios from "axios";

export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

export const FETCH_POKEMON_DETAILS_REQUEST = "FETCH_POKEMON_DETAILS_REQUEST";
export const FETCH_POKEMON_DETAILS_SUCCESS = "FETCH_POKEMON_DETAILS_SUCCESS";
export const FETCH_POKEMON_DETAILS_FAILURE = "FETCH_POKEMON_DETAILS_FAILURE";

export const fetchPokemon = () => {
    return async (dispatch) => {
        dispatch(fetchPokemonRequest());
        try {
            const response = await axios.get("pokemon?limit=151");
            const pokemonList = response.data.results;
            const pokemonListWithImages = await Promise.all(pokemonList.map(fetchPokemonWithImage));
            dispatch(fetchPokemonSuccess(pokemonListWithImages));
        } catch (error) {
            dispatch(fetchPokemonFailure(error.message));
        }
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

const fetchPokemonWithImage = async (pokemon) => {
    const response = await axios.get(`pokemon/${pokemon.name}`);
    const pokemonWithImage = {
        ...pokemon,
        sprites: response.data.sprites
    };
    return pokemonWithImage;
}

export const fetchPokemonDetailsRequest = () => {
    return {
        type: FETCH_POKEMON_DETAILS_REQUEST
    };
};

export const fetchPokemonDetailsSuccess = (pokemonDetails) => {
    return {
        type: FETCH_POKEMON_DETAILS_SUCCESS,
        payload: pokemonDetails
    };
};

export const fetchPokemonDetailsFailure = (error) => {
    return {
        type: FETCH_POKEMON_DETAILS_FAILURE,
        payload: error
    };
};


export const fetchPokemonDetails = (id) => {
    return async (dispatch) => {
        dispatch(fetchPokemonDetailsRequest());
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemonDetails = response.data;
            dispatch(fetchPokemonDetailsSuccess(pokemonDetails));
        } catch (error) {
            console.log("Network error. Retrying in 5 seconds...");
            await new Promise(resolve => setTimeout(resolve, 5000)); // 5 saniye bekle
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const pokemonDetails = response.data;
                dispatch(fetchPokemonDetailsSuccess(pokemonDetails));
            } catch (error) {
                dispatch(fetchPokemonDetailsFailure(error.message));
                console.log(error);
            }
        }
    };
};




