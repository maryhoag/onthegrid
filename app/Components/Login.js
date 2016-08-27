var React = require('react');

var Login = React.createClass({

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
		    <button className="btn-flat waves-effect waves-light" type="submit" name="action">Submit
    			<i className="material-icons right">send</i>//this won't work without jquery?
 	 		</button>

		</div>


		)
	}

});

module.exports = Login;


