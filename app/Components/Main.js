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
				<header className="page-header">
					<div className="row">
						<div className="col s9">
							<h1 className="brand-logo center"> Log In With Google </h1>
						</div>
						<div className="col s3">
							<a className="waves-effect waves-light btn">log out</a>
						</div>
					</div>
				</header>

				<main className="container">

					<Login />


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