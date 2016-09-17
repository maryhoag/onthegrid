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

			loggedIn: true,
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
			contentObj: Object,
			pagesList: Array
		}

	},

	//adds form data to the db
	addHandler: function() {
		console.log('fire')
		
		var content = document.getElementById('postBody');
		var titleContent = document.getElementById('postTitle');
		var imgContent = document.getElementById('imageURL');

		const now = new Date();
		var mydate = now.toTimeString();
		this.date =  mydate;
		
		var mytitle = titleContent.value;
		var mytext = content.value;
		var myimg = imgContent.value;
		
		//stores all the input in an object
		var contentObj = {text: mytext, title: mytitle, image: myimg, date: mydate};
		//and sends it to helpers to be stored in db
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

	_logoutHandler: function() {

		this.setState( {loggedIn: false} );
	},

	getDefaultProps: function() {
	    return {
	      loggedIn: false
	    };
	},

	_addPageModal: function() {
		console.log('i work');
		console.log(this.state.addPageVisible);

		this.setState({
			addPageVisible: !this.state.addPageVisible
		})
		console.log(this.state.addPageVisible);
	},

	getPages: function() {

		const pagesList = [
			{ title: hello }
		];

		return pagesList.map((page) => {

			return(

				<Page 

					title={page.title} date={page.date} body={page.text} image={page.image} key={page._id} />
			);
		});

	},

	// searching: function() {

	// 	if (this.props.loggedIn == true) {
	// 		helpers.findContent();

	// 		console.log('searching');
	// 		this.setState(pageList = pageList)
	// 		console.log(pagesList);
	// 	}

	// },

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
							<a className="waves-effect waves-light btn-flat" onClick={this._logoutHandler} >log out</a>
						</div>
					</div>
					<p className="left">hello</p> {/* add user name here */}
				</header>

				<main className="container">
					<div id="buttonCentered">
						<a className="waves-light waves-effect btn-flat" id="addPageButton" name="action" onClick={this._addPageModal} > add a page </a>
					</div>
					{ this.state.childVisible
						//hides component
						? <Login authHandler={this.authHandler} body={this.body} />

						:null

					}

						<div className="row">
						{ this.state.addPageVisible

							? <AddPage addHandler={this.addHandler} options={this.state.options} defaultOption={this.state.defaultOption} _onFontSelect={this.state._onFontSelect} _onBorderSelect={this.state._onBorderSelect} font={this.state.font} borderColor={this.state.borderColor} fontDefault={this.state.defaultFontOption} defaultBorderOption={this.state.defaultBorderOption} blueButton={this.state.blueButton}  contentObj={this.state.contentObj} addPageModal={this.state.addPageModal} addPageVisible={this.state.addPageVisible} getPages={this.state.getPages} />

							:null
						}

	  					</div>

					<div className="row">

					{this.state.loggedIn

							? <Pages loggedIn={this.state.loggedIn} pagesList={this.state.pagesList} searching={this.state.searaching} />

							:null

					}
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