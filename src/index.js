import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom'

// import App from './components/Razmik/Formik/Formik_2/App';

import App from "./components/Davit/ReactForm/Responsive/App"


// import App from "./components/Edgar/Reaccrt-router-6/App"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Router>
		<App />
	</Router>
);
