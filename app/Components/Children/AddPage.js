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

			      <div className="row">
			      	<div className="input-field col m6 s12">
			      		<textarea id="imageURL" className="materialize-textarea"></textarea>
			      		<label for="image">image URL </label>
			      	</div>
			      	<div className="input-field col m6 s12">
			      		{/* dropdown button */}
			      		<a class='dropdown-button btn' href='#' data-activates='dropdown1'>border</a>
						  {/* Dropdown Structure */}
						  <ul id='dropdown1' class='dropdown-content'>
						    <li><a href="#!">blue</a></li>
						    <li><a href="#!">green</a></li>
						    <li class="divider"></li>
						    <li><a href="#!">red</a></li>
						  </ul>
			      		}
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