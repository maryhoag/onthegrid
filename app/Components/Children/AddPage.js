var React = require('react');


import { Button, Card, Row, Col } from 'react-materialize';

var AddPage = React.createClass({

	render: function() {

		if(this.props.addPageVisible) {

			console.log('firing');
		}

			return (
				
				<div className="row adding">

				    <form>
				    	{/* input for post title */}
				  		<div className="row">
							<div className="input-field col s12 m6">
								<input id="postTitle" className="materialize-textarea validate"type="text"></input>
								<label htmlFor="postTitle">Title</label>
							</div>
					
							<div className="input-field col s3 push-s3">
							<nav>
						      	<ul>
						      		<li><a href="#">Border Color</a>
						      			<ul id="borderColor">
						      				<li><a href='#' value="blue" onClick={this.props._onBorderSelect} > blue </a></li>
						      				<li><a href="#" value="red" onClick={this.props._onBorderSelect} >red</a></li>
						      				<li><a href="#" value="green" onClick={this.props._onBorderSelect} >green</a></li>
						      			</ul>
						      		</li>
						      		<li><a href="#">Font</a>
						      			<ul>
						      				<li><a href="#">sharpie</a></li>
						      				<li><a href="#">script</a></li>
						      				<li><a href="#">prompt</a></li>
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
				          <label htmlFor="textarea1">What are you going to do today?</label>
				        </div>
				      </div>
				  		{/* input for an image */}
				      <div className="row">
				      	<div className="input-field col m6 s12">
				      		<input id="imageURL" className="materialize-textarea validate" type="text"></input>
				      		<label htmlFor="image">image URL </label>
				      	</div>
				      </div>
				      	
				    </form>

				    <button id="submit" className="btn waves-effect waves-light right" type="submit" name="action" onClick={this.props.addHandler}>Save
					    <i className="material-icons right">send</i>
					</button>
				</div>
			)
		}

});


module.exports = AddPage;