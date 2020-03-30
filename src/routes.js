import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login}/>
				<Route path="/criar-conta" exact component={Register}/>
				<Route path="/perfil" exact component={Profile}/>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
