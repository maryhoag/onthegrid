var React = require('react');

var Fonts = React.createClass({
    
    render: function() {
        return(
        
            <li><a href="#">Font</a>
                <ul>
                    <li><a href="#">sharpie</a></li>
                    <li><a href="#">script</a></li>
                    <li><a href="#">prompt</a></li>
                </ul>
            </li>
        
        )
    }
});

module.exports = Fonts;