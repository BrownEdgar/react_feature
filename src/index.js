import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
<<<<<<< HEAD
import { BrowserRouter as Router} from "react-router-dom"
=======
import {BrowserRouter as Router} from "react-router-dom"

import App from './components/Davit/jsonServer/App';
>>>>>>> e97bfa27353fdfd8258c147ed6317e220025716d

import App from './components/Sisak/jsonServer/App';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<Router><App />
</Router>)

