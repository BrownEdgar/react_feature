import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/Arusik/jsonServer/App.jsx';


const root = ReactDOM.createRoot(document.getElementById("root"));
	
root.render(

		<Router>
			<App />
		</Router>
);

// root.render(

// 		<App />
// );

