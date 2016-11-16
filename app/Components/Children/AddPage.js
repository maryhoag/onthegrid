var React = require('react');

var Fonts = require('./Fonts');
var Tabs = require('./Tabs');
import { Button, Card, Row, Col } from 'react-materialize';

var AddPage = React.createClass({

	render: function() {

		if(this.props.addPageVisible) {

			console.log('firing');
		}

			return (
				
				<div className="row adding">

				    <form id="bg-color">
				    	{/* input for post title */}
				  		<div className="row">
							<div className="input-field col s12 m6">
								<input id="postTitle" className="materialize-textarea validate"type="text"></input>
								<label htmlFor="postTitle">Title</label>
							</div>
					
							<div className="input-field col s3 push-s3">
							<nav>
						      	<ul>
						      		<Tabs _onBorderSelect={this.props._onBorderSelect} borderColor={this.props.borderColor} defaultBorderOption={this.props.defaultBorderOption} blueButton={this.props.blueButton} />
                
						      		<Fonts _onFontSelect={this.props._onFontSelect} font={this.props.font} fontDefault={this.props.defaultFontOption} />
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