import React from "react";
import ReactDOM from "react-dom/client";


import "./index.css";


import { BrowserRouter as Router } from 'react-router-dom'
import "./index.css";



import App from './components/Garnik/React/CustomHook/App';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<Router>
    <App />
</Router>);

