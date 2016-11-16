var React = require('react');

var Tabs = React.createClass({
    render: function() {
        return(
            <li><a href="#">Border Color</a>
                <ul id="borderColor">
                    <li><a href='#' className="colorChoice" value="blue" onClick={this.props._onBorderSelect} > blue </a></li>
                    <li><a href="#" value="red" onClick={this.props._onBorderSelect} >red</a></li>
                    <li><a href="#" value="green" onClick={this.props._onBorderSelect} >green</a></li>
                </ul>
            </li>
        
        )
    }
});

module.exports = Tabs;