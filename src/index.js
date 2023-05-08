import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./HomewrokJS/App";
import store from "./HomewrokJS/Info/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
