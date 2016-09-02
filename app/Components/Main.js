//include react
var React = require('react');

//include children
var Login = require('./Login');

//main component
var Main = React.createClass({

	getInitialState: function() {

		return {

			loggedIn: false
		}

	},
	//render the function
	render: function() {

		return (
			<div id="wrapper">
				<div className="page-header">
					<div className="row">
						<div className="col s9">
							<h1 className="brand-logo center"> Log In With Google </h1>
						</div>
						<div className="col s3">
							<a className="waves-effect waves-light btn">log out</a>
						</div>
					</div>
				</div>

				<div className="containter">

					<Login />


				</div>
			</div>


		)
	}

});

//exports the module
module.exports = Main;