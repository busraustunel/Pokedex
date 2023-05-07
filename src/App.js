import {Provider} from "react-redux";
import store from "./redux/store";
import {Navigation} from "./navigation/Navigation";
import {Navbar} from "./components/Navbar/Navbar";
import * as React from "react";

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}
