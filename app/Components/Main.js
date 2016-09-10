//include react
var React = require('react');
var Router = require('react-router');

import { Button, Card, Row, Col } from 'react-materialize';


//include children
var Login = require('./Login');
var Dropdown = require('./Dropdowns');
var Pages = require('./Pages');
var AddPage = require('./AddPage');
var helpers = require('../utils/helpers.js');



//main component
var Main = React.createClass({

	getInitialState: function() {

		return {

			loggedIn: false,
			childVisible: false,
			body: String
		}

	},

	authHandler: function() {
		//this gets changed when logged in
		var email = document.getElementById('email').value;
		//auth stuff

		//set to logged in
		this.setState({ loggedIn: true });

	},

	addHandler: function() {
		//for js
		var content = document.getElementById('body').value;
		console.log(content);

		//setState of the value on a change
		//this.setState({this.body: event.target.value});
		this.setState({body: event.target.body})
		console.log(body);
		//this.setState({body: this.value});
		//console.log(this.body);

		helpers.addContent(body);


		//console.log('hi');
	},
	//render the function
	render: function() {

		return (
			<div id="page-wrap">
				<header className="page-header">
					<div className="row">
						<div className="col s10">
							<h1 className="brand-logo center"> On The Grid </h1>
						</div>
						<div className="col s2">
							<a className="waves-effect waves-light btn-flat">log out</a>
						</div>
					</div>
				</header>

				<main className="container">
					{ this.state.childVisible

						? <Login authHandler={this.authHandler} body={this.body} />

						:null

					}

					<div className="row">

						<Dropdown />
					</div>

					<div className="row">

						<p>hello</p>
						<AddPage addHandler={this.addHandler} />
  					</div>

					<div className="row">

							<Pages />
					</div>



				</main>

				<footer className="page-footer">
		            <div id="footer">
		                <div id="copyright">
		                    <p> © 2016 Copyright
		                    <a href="https://www.linkedin.com/in/maryhoag" target="_blank">   Mary Hoag </a>
		                    </p>
		                </div>
		            </div>
		        </footer>

			</div>


		)
	}

});

//exports the module
module.exports = Main;