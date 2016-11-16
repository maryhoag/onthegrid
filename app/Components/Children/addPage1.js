var React = require('react');

import { Button, Card, Row, Col } from 'react-materialize';
var AddPage2 = require('./addPage2');

var AddPage1 = React.createClass({
    
    render: function() {
    
        if(this.props.addPageVisible) {

			console.log('firing');
		}
        
        return (
            <div className="row adding">

                <form id="bg-color">

                    <AddPage2 />

                </form>

                <button id="submit" className="btn waves-effect waves-light right" type="submit" name="action" onClick={this.props.addHandler}>Save
                    <i className="material-icons right">send</i>
                </button>
            </div>
        );
		
    }
});

module.exports = AddPage1;