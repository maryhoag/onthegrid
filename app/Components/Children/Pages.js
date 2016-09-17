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
	      return (

	      	<div key={post._id} className="post col s6">
	          <h3> {post.title} </h3>
	          <p> {post.text} </p>
	          
	          <p className="right"> {post.date} </p>
	        </div>
	        
	      )});
		console.log('pages nodes are ',pagesNodes)
		return (

			<div className="pagesContainer">

			<div className="row">

			    <div className="post col s12">
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