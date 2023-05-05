import {Provider} from "react-redux";
import store from "./redux/store";
import {Home} from "./components/Home/Home";
import PokemonCard from "./components/PokemonCard/PokemonCard";

export default function App() {
    return (
        <Provider store={store}>
            <PokemonCard />
        </Provider>
    );
}
