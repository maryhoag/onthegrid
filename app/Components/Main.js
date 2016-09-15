//include react
var React = require('react');


//import materialize styling via react-materialze
import { Button, Card, Row, Col } from 'react-materialize';


//include children
var Login = require('./Children/Login');

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
			//options for border color
			options: [

				'red', 'blue', 'green' 
			],

			defaultBorderOption: 'blue',
			//options for font
			fontOptions: [
				'EB Garramond', 'Permanent Marker', 'Bad Script'


			],

			fauntDefault: 'serif'

		}

	},

	//adds data to the db
	addHandler: function() {
		//for js
		var content = document.getElementById('postBody');
		//this is the input value
		//console.log('main ' + content.value);
		//this is undefined
		this.text = content.value;
		//console.log(this.text);


		//this.setState({text: content.value})
		//console.log(this.state);

		helpers.addContent(this.text);

		console.log('hi');
		var myObject = { text: this.text };
		axios.post('/user', myObject)
		  .then(function (response) {
		    console.log('response');
		  })
		  .catch(function (error) {
		    console.log(error);
		});
	},

	_onBorderSelect: function(borderColor) {
		//this.setState({borderColor: this.borderColor});

	},

	_onFontSelect: function(font) {
		//this.setState({font: this.font});

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

						<p>hello</p>
						<AddPage addHandler={this.addHandler} options={this.state.options} defaultOption={this.state.defaultOption} _onFontSelect={this.state._onFontSelect} _onBorderSelect={this.state._onBorderSelect} font={this.state.font} borderColor={this.state.borderColor} fontDefault={this.state.defaultFontOption} defaultBorderOption={this.state.defaultBorderOption} />
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