var React = require('react');
var Route = require('react-router');

var Pages = React.createClass({

	getInitialState: function() {

		return(

			highlightColor: '',
			fontChoice: ''
		)

	},

	//call for pages info
		//mongoose get returns

	//render pages info

		// for(var = i; i < list.length; i++) {

		// 	<div>


		// 	</div>
		// }

	render: function() {

		return (

			<div class="row">
		        <div class="col s12 m6">
		          <div class="card blue-grey darken-1">
		            <div class="card-content white-text">
		              <span class="card-title">Card Title</span>
		              <p>I am a very simple card. I am good at containing small bits of information.
		              I am convenient because I require little markup to use effectively.</p>
		            </div>
		            <div class="card-action">
		              <a href="#">This is a link</a>
		              <a href="#">This is a link</a>
		            </div>
		          </div>
		        </div>
		    </div>


	)}

});

module.exports = Pages;