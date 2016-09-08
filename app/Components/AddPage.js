var React = require('react');
var Route = require('react-router');

var AddPage = React.createClass({


	clickHandler: function() {

		return console.log('i work');

		//create object

		//send to db


	},

	render: function() {

		return (

			<div className="row">
			    <form className="col s12">
			      <div className="row">
			        <div className="input-field col s12">
			          <textarea id="textarea1" className="materialize-textarea"></textarea>
			          <label for="textarea1">What are you going to do today?</label>
			        </div>
			      </div>
			    </form>

			    <button className="btn waves-effect waves-light" type="submit" name="action">Save
				    <i className="material-icons right">send</i>
				</button>
			</div>



		)
	}


});


module.exports = AddPage;