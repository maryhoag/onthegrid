//include react
var React = require('react');
//var Route = require('react-router');

//import materialize styling via react-materialze
import { Button, Card, Row, Col } from 'react-materialize';


//include children
var Login = require('./Children/Login');
var Dropdown = require('./Children/Dropdowns');
var Pages = require('./Children/Pages');
var AddPage = require('./Children/AddPage');

var axios = require('axios');
var helpers = require('../utils/helpers.js');


//main component
var Main = React.createClass({

	getInitialState: function() {

		return {

			loggedIn: false,
			childVisible: false,
			text: String,
			font: String,
			border: String,
			borderColor: String,
		}

	},

	authHandler: function() {
		//this gets changed when logged in
		var email = document.getElementById('email').value;
		//auth stuff

		//set to logged in
		this.setState({ loggedIn: true });

	},

	//adds data to the db
	addHandler: function() {
		//for js
		// var content = document.getElementById('body').value;
		// console.log(content);

		// this.setState({text: content})
		// console.log(this.state);

		helpers.addContent();

		//console.log('hi');
		// axios.post('/user', {
		//     text: content
		//   })
		//   .then(function (response) {
		//     console.log(response);
		//   })
		//   .catch(function (error) {
		//     console.log(error);
		// });
	},

	logoutHandler: function() {

		this.setState( {loggedIn: false} );
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
						//hides component
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