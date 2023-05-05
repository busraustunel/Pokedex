import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
