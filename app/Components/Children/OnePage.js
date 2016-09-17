var React = require('react');

// var OnePage = React.createClass ({

// 	render() {

// 		constructor

// 		return (
	

// 			<div className="post">
// 				<h4> {this.props.title}</h4>
// 				<p> {this.props.body} </p>
// 				{ /* <img src={{this.props.image}} height="300" width="350" > </img> */ }
// 			</div>

// 		)
// 	}

// });

class OnePage extends React.Component {

	connstructor () {
        this.state = {
            numChildren: 0
     };

    render () {
        const children = [];

        for (var i = 0; i < this.props.posts; i += 1) {
            children.push(<ChildComponent number={i} />);

        return (
            <ParentComponent addChild={this.onAddChild.bind(this)}>
                {children}
            </ParentComponent>
        );

        onAddChild () {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    };
    }
}

module.exports = OnePage;