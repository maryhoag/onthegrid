//include react
var React = require('react');

//indlude Child
//
import { Button, Card, Row, Col } from 'react-materialize';

var Pages = React.createClass({

	render: function() {
		console.log('posts in component are', this.props.posts)

		if(this.props.loggedIn == true) {
			console.log(this);
			
		} else {
			console.log(false);
		}

		var pagesNodes = this.props.posts.map(function(post) {
			console.log(post)
	      return (


	      	<div key={post._id} className="post col s12">
	      	<p className="left icons"><i className="material-icons right">label_outline</i></p>
	          <h3 className="title"> {post.title} </h3>

	          <p className="text"> {post.text} </p>
	          <img src={post.image} height="300" width="350" />
	          
	        </div>
	        
	      )});
		console.log('pages nodes are ',pagesNodes)
		return (

			<div className="pagesContainer">

			<div className="row">

			    <div className="#postGroup col s12">
		        <h3>Pages</h3>
		        	<div>
		        		{pagesNodes}
		        	</div>
		        	
		      	</div>
		     </div>

		    </div>    
		)
	}

});

module.exports = Pages;