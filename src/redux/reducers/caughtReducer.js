import {ADD_FAVORITE, CATCH_POKEMON, RELEASE_POKEMON, REMOVE_FAVORITE} from "../actions/caughtActions";

const initialState = {
    caughtList: [],
    favoriteList: [],
};

const caughtReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATCH_POKEMON:
            return {
                ...state,
                caughtList: [...state.caughtList, action.payload],
            };


        case RELEASE_POKEMON:
            return {
                ...state,
                caughtList: state.caughtList.filter(
                    (pokemon) => pokemon.name !== action.payload.name
                ),
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favoriteList: [...state.favoriteList, action.payload],

            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favoriteList: state.favoriteList.filter(
                    (pokemon) => pokemon.name !== action.payload.name
                ),
            };
        default:
            return state;
    }
};

export default caughtReducer;
