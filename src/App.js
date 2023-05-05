import {Provider} from "react-redux";
import store from "./redux/store";
import {HomeScreen} from "./screens/HomeScreen/HomeScreen";

export default function App() {
    return (
        <Provider store={store}>
            <HomeScreen />
        </Provider>
    );
}
