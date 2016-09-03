//include react
var React = require('react');
var Route = require('react-router');

//include children
var Login = require('./Login');
var Dropdown = require('./Dropdowns');
var Pages = require('./Pages');

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
			<div id="page-wrap">
				<header className="page-header">
					<div className="row">
						<div className="col s9">
							<h1 className="brand-logo center"> On The Grid </h1>
						</div>
						<div className="col s3">
							<a className="waves-effect waves-light btn">log out</a>
						</div>
					</div>
				</header>

				<main className="container">

					<Login />

					<div className="row">
						<div className="col s6">
							<a className="waves-effect waves-light btn">Add A Page</a>

						</div>

					</div>

					<Dropdown />


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