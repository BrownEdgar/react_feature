import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom"

import App from './components/Razmik/json-server/App';



 import App from "./components/Razmik/Hooks/useMemo/App"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<Router>
    <App />
</Router>);
