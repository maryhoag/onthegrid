var React = require('react');
var Route = require('react-router');

var Pages = React.createClass({

	getInitialState: function() {

		return{

			highlightColor: '',
			fontChoice: ''
		}

	},

	render: function() {

		return (

			<div className="row">
		        <div className="col s12 m6 post">
		          <h4 className="title">Friday September 24, 2016</h4>
		          <p>Lexie's birthday! We had cake and ice cream and went to Disney to watch the fireworks.</p>
		          <img src="http://www.zillycakes.com/wp-content/uploads/2016/04/10-Fun-And-Creative-Ways-to-Bake-Your-Own-Birthday-Cake.jpg" height="300" width="350"></img>
		        </div>

		        <div className="col s12 m6 post">
        			<h4 className="title">To Do List</h4>
        			<p>Rewatch Wonder Woman trailer for the thousandth time</p>
        			<p>Take puppy to the vet for booster shots</p>
        			<p>groceries</p>
        			<p>return shorts that Jeff doesn't like</p>
        			<p>research new phones to replace mine and Jackie's</p>
		        
		        </div>

		    </div>
	)}

});

module.exports = Pages;