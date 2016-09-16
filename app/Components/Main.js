//include react
var React = require('react');


//import materialize styling via react-materialze
import { Button, Card, Row, Col } from 'react-materialize';


//include children
var Login = require('./Children/Login');

var Pages = require('./Children/Pages');
var AddPage = require('./Children/AddPage');
var Story = require('./Children/Story');

var axios = require('axios');
var helpers = require('../utils/helpers.js');


//main component
var Main = React.createClass({

	getInitialState: function() {

		return {

			loggedIn: false,
			childVisible: false,
			addPageVisible: false,
			text: String,
			font: String,
			border: String,
			borderColor: String,
			date: String,
			title: String,
			image: String,
			//options for border color
			options: [

				'red', 'blue', 'green' 
			],

			defaultBorderOption: 'blue',
			//options for font
			fontOptions: [
				'EB Garramond', 'Permanent Marker', 'Bad Script'


			],

			fauntDefault: 'serif',
			contentObj: Object

		}

	},

	//adds data to the db
	addHandler: function() {
		console.log('fire')
		//for js
		var content = document.getElementById('postBody');
		var titleContent = document.getElementById('postTitle');
		var imgContent = document.getElementById('imageURL');
		
		var mytitle = titleContent.value;
		this.title = titleContent.value;
		console.log(this.title);

		var mytext = content.value;
		this.text = content.value;
		console.log(this.text);
		var myimg = imgContent.value;
		this.imageURL = imgContent.value;
		console.log(this.imageURL);
		
		// this.setState({text: content.value})
		// console.log(this.text);
		// this.setState({title: titleContent.value})
		// this.setState({imageURL: imgContent.value})
		// console.log(this.state);

		// this.contentObj =
		// 	{
		// 	text: this.text,
		// 	title: this.title,
		// 	image: this.imageURL
		// 	}
		var contentObj = {text: mytext, title: mytitle, image: myimg};
		//var contentObj = {text: this.text, title: this.title, image: this.imageURL})

		helpers.addContent(contentObj);
	},

	_onBorderSelect: function() {
		// this.setState({borderColor: this.borderColor});
		// console.log('state set to ' + this.borderColor);
		var colors = document.getElementById
		console.log(containerent.value);
		this.setState({borderColor: this.value})
		console.log("btn works");

	},

	blueButton: function() {
		document.getElementById('blue');
		this.borderColor = content.value;
		console.log(content.value + 'blueButton')
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
					<p className="left">hello</p> {/* add user name here */}
				</header>

				<main className="container">

					<Story />
					{ this.state.childVisible
						//hides component
						? <Login authHandler={this.authHandler} body={this.body} />

						:null

					}


					<div className="row">

						<AddPage addHandler={this.addHandler} options={this.state.options} defaultOption={this.state.defaultOption} _onFontSelect={this.state._onFontSelect} _onBorderSelect={this.state._onBorderSelect} font={this.state.font} borderColor={this.state.borderColor} fontDefault={this.state.defaultFontOption} defaultBorderOption={this.state.defaultBorderOption} blueButton={this.state.blueButton}  contentObj={this.state.contentObj} />
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