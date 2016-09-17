//include react
var React = require('react');

//indlude Child
var OnePage= require('./OnePage');
//include helpers
var helpers = require('../../utils/helpers.js');
var axios = require('axios');

import { Button, Card, Row, Col } from 'react-materialize';

var Pages = React.createClass({

	getInitialState: function() {
		return {
			posts: []
		}
	},

	searching: function() {

		if (this.props.loggedIn == true) {
			//helpers.findContent();

			console.log('searching');
			// 	this.setState( {pagesList: List} );
			// console.log(pagesList);
		}

	},

	findContent: function() {
		//instead of name should search by user id? deleted params for username
		// return axios.get('/findPosts')
		// .then(function(res) {
		// 	console.log('finding');
		// 	console.log('helping' + res);

		// 	var posts = res.dataTypes;
		// 	return posts

		// 	console.log('helpers' + List);
		// })
	},

	componentDidMount: function() {
	    this.serverRequest = $.get(this.props.source, function (result) {
	    	console.log('running');

	    	//this.props.searching();
	    	return axios.get('/findPosts')
			.then(function(res) {
				//console.log('finding');
				console.log('helping' + res);

				var posts = res.dataTypes;
				return posts

				//console.log('helpers' + List);
			})
		    	//console.log(this)
		    })     
	 },

	 componentWillUnmount: function() {
    	this.serverRequest.abort();
  	},

	render: function() {

		if(this.props.loggedIn == true) {
			console.log(this);
			//this.state.searching();
			//this.state.findContent();
		} else {
			console.log(false);
		}

		return (

			<div className="pagesContainer">

				
		        <div className="col s12 m6 post">
		          <h4 className="title">Friday September 24, 2016</h4>
		          <p>Lexie's birthday! We had cake and ice cream and went to Disney to watch the fireworks.</p>
		          <img src="http://www.zillycakes.com/wp-content/uploads/2016/04/10-Fun-And-Creative-Ways-to-Bake-Your-Own-Birthday-Cake.jpg" height="300" width="350"></img>
		        </div>

		        <div className="col s12 m6 post">
        			<h4 className="title">To Do List </h4>
        			<p>Rewatch Wonder Woman trailer for the thousandth time</p>
        			<p>Take puppy to the vet for booster shots</p>
        			<p>groceries</p>
        			<p>return shorts that Jeff doesnt like</p>
        			<p>research new phones to replace mine and Jackie</p>
		        
		        </div>
		    

		        <div className="col s12 m6 post">
		        	<h4 className="title"> Movies I want to Watch </h4>
		        	<p> Wonder Woman </p>
		        	<p> Star Wars </p>
		        	<p> stuff </p>
		        </div>

			    <div className="post col s12 m6">
		        <h1>Jobs!</h1>
		        {this.state.posts.map(function(post) {
		          return (
		            <div key={post.id} className="post">
		              <h3> {post.title} </h3>
		              <p> {post.text} </p>
		              <img> {post.imgage} height="300" width="350"> </img>
		              <p class="right"> {post.date} </p>
		            </div>
		          );
		        })}
		      </div>

		    </div>    
	)}

});

module.exports = Pages;