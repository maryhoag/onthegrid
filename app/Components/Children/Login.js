var React = require('react');
var Router = require('react-router')

//Google auth code
//TODO move the scritp to the helpers file?
//var auth = require('../../public/assets/scripts/auth.js')

var Login = React.createClass({


	render: function() {
		return(

		
		<div className="jumbotron">

			<h3>Login</h3> 
			<div className="row">
				<form id="login">

				<div className="row">
			        <div className="input-field col s6">
				        <h3> Login </h3>
			        	<div>
				          <input id="username" type="text" className="validate" > </input>
				          <label for="username">username</label>
				        </div>

				        <div>
				        	<input id="password" type="text" className="validate" > </input>
				        	<label for="password"> password </label>
				        </div>
				    </div>

				    <div className="input-field col s6">
				    	<h3> Create User </h3>
				    	<div>
				    		<input id="username" type="text" className="validate" > </input>
				          	<label for="username">username</label>
				        </div>

				        <div>
				        	<input id="password" type="text" className="validate" > </input>
				        	<label for="password"> password </label>
				        </div>
				        <div>
				        	<input id="cpassword" type="text" className="validate" > </input>
				        	<label for="password"> confirm password </label>
				        </div>

				    </div>
				</div>
			    <button className="btn btn-flat waves-effect waves-light" type="submit" name="action">Submit
	    			<i className="material-icons right"> send </i> 
	    		</button>

	    		</form>
		</div>

	</div>
		)
	}

});

module.exports = Login;


