export const CATCH_POKEMON = "CATCH_POKEMON";
export const RELEASE_POKEMON = "RELEASE_POKEMON";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const catchPokemon = (pokemon) => {
    return {
        type: CATCH_POKEMON,
        payload: pokemon,
    };
};

export const releasePokemon = (pokemon) => {
    return {
        type: RELEASE_POKEMON,
        payload: pokemon,
    };
};

export const addFavorite = (pokemon) => {
    return {
        type: ADD_FAVORITE,
        payload: pokemon,
    };
};

export const removeFavorite = (pokemon) => {
    return {
        type: REMOVE_FAVORITE,
        payload: pokemon,
    };
};
