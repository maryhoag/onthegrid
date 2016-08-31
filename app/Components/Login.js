var React = require('react');
var Router = require('react-router')

//Google auth code
//TODO move the scritp to the helpers file?
var auth = require('./assets/scripts/auth.js')

var Login = React.createClass({

	handleClick: function(item, event) {
		console.log('clicked');
		console.log(item);

		auth.login();



	}

	render: function() {
		return(

		
		<div className="jumbotron">

			<h3>Login With Google</h3> 
			<div className="row">
		        <div className="input-field col s12">
		          <input id="email" type="email" className="validate" />
		          <label for="email">Enter Your Gmail</label>
		        </div>
		    </div>
		    <button className="btn btn-flat waves-effect waves-light" type="submit" name="action">Submit
    			<i className="material-icons right"> send </i>  //this won't work without jquery?
 	 		</button>

		</div>


		)
	}

});

module.exports = Login;


