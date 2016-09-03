//include react
var React = require('react');

//include react router
var Router = require('react-router');
var Route = Router.Route;

//define default route
var IndexRoute = Router.IndexRoute;

var Main = require('../Components/Main');
var Login = require('../Components/Login');

module.exports = (

	<Route path='/' component={Main}>

		<Route path='Login' component={Login} />


		{/* default path */}
		<IndexRoute component={Login} />

	</Route>


)