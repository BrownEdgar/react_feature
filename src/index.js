import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom"
import "./index.css";



import App from './components/Ruben/Hooks/CustomHook/App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<Router><App />
</Router>)

