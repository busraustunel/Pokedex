import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import caughtReducer from "./caughtReducer";

const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    caught: caughtReducer,
});

export default rootReducer;
