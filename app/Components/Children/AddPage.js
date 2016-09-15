var React = require('react');

import { Button, Card, Row, Col } from 'react-materialize';

var AddPage = React.createClass({


	render: function() {

		return (

			<div className="row">
			    <form className="col s12">
			    	{/* input for post title */}
			    	<div className="row">
						<div className="input-field col m6 s12">
							<textarea id="postTitle" className="materialize-textarea"></textarea>
							<label for="postTitle">Title</label>
				
							<div className="input-field col s6">
						    	<nav>
							      	<ul>
							      		<li><a href="#">Border Color</a>
							      			<ul>
							      				<li><a href="#">blue</a></li>
							      				<li><a href="#">red</a></li>
							      				<li><a href="#">green</a></li>
							      			</ul>
							      		</li>
							      	</ul>
							    </nav>
							</div>
					</div>
						      

					    
				{/* input for post body */}
			      <div className="row">
			        <div className="input-field col s12">
			          <textarea id="postBody" className="materialize-textarea"></textarea>
			          <label for="textarea1">What are you going to do today?</label>
			        </div>
			      </div>
			  		{/* input for an image */}
			      <div className="row">
			      	<div className="input-field col m6 s12">
			      		<textarea id="imageURL" className="materialize-textarea"></textarea>
			      		<label for="image">image URL </label>
			      	</div>
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