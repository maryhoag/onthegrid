var React = require('react');
var Route = require('react-router');

import { Button, Card, Row, Col } from 'react-materialize';


var AddPage = React.createClass({


	render: function() {

		return (

			<div className="row">
			    <form className="col s12">
			      <div className="row">
			        <div className="input-field col s12">
			          <textarea id="postBody" className="materialize-textarea"></textarea>
			          <label for="textarea1">What are you going to do today?</label>
			        </div>
			      </div>
			    </form>

			    <button className="btn waves-effect waves-light right" type="submit" name="action" onClick={this.props.addHandler}>Save
				    <i className="material-icons right">send</i>
				</button>
			</div>



		)
	}


});


module.exports = AddPage;