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

export const releasePokemon = (id) => {
    return {
        type: RELEASE_POKEMON,
        payload: id,
    };
};

export const addFavorite = (id) => {
    return {
        type: ADD_FAVORITE,
        payload: id,
    };
};

export const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id,
    };
};
