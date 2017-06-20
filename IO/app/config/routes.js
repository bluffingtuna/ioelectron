import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Saved from "../components/Saved";
import Search from "../components/Search";

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
		<Route path="/saved" component={Saved}/>
		<IndexRoute component={Search} />
		</Route>
	</Router>
);

export default routes;