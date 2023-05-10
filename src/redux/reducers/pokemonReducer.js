import {
    FETCH_POKEMON_REQUEST,
    FETCH_POKEMON_SUCCESS,
    FETCH_POKEMON_FAILURE,
    FETCH_POKEMON_DETAILS_REQUEST,
    FETCH_POKEMON_DETAILS_SUCCESS,
    FETCH_POKEMON_DETAILS_FAILURE,
} from "../actions/pokemonActions";

const initialState = {
    loading: false,
    pokemonList: [],
    error: "",
    pokemonDetails: null,
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemonList: action.payload,
                error: "",
            };
        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                loading: false,
                pokemonList: [],
                error: action.payload,
            };
        case FETCH_POKEMON_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                pokemonDetails: null,
            };
        case FETCH_POKEMON_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                pokemonDetails: action.payload,
                error: "",
            };
        case FETCH_POKEMON_DETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                pokemonDetails: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default pokemonReducer;
