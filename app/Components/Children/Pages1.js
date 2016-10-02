var React = require('react');

import { Button, Card, Row, Col } from 'react-materialize';
var Pages2 = require('./Pages2');

var Pages1 = React.createClass({
    
    render: function() {
        
        return (
            <div className="pagesContainer">
                <div className="row">
			     <div className="#postGroup col s12">
		              <h3>Pages</h3>
		        	     <div>
		        		    <Pages2 addHandler={this.addHandler} options={this.props.options} defaultOption={this.props.defaultOption} _onFontSelect={this.props._onFontSelect} _onBorderSelect={this.props._onBorderSelect} font={this.props.font} borderColor={this.props.borderColor} fontDefault={this.props.defaultFontOption} defaultBorderOption={this.props.defaultBorderOption} blueButton={this.props.blueButton}  contentObj={this.props.contentObj} addPageModal={this.props.addPageModal} addPageVisible={this.props.addPageVisible} getPages={this.props.getPages} posts={this.props.posts} loggedIn={this.props.loggedIn} pagesList={this.props.pagesList} searching={this.props.searaching}/>
		        	     </div>
		      	       </div>
		          </div>
		      </div>     
        );
    }    
});

module.exports = Pages1;