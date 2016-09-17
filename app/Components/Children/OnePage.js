var React = require('react');

var OnePage = React.createClass ({

	render() {

		return (
	

			<div className="post">
				<h4> {this.props.title}</h4>
				<p> {this.props.body} </p>
				{ /* <img src={{this.props.image}} height="300" width="350" > </img> */ }
			</div>

		)
	}

});

module.exports = OnePage;