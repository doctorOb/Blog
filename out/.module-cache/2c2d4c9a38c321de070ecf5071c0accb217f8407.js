/** @jsx React.DOM */

var Blog = React.createClass({displayName: 'Blog',
	render: function() {
		return (
			React.DOM.div( {className:"journal week"}, 
				this.props.body
			)
		);
	}
});


var SubHeader = React.createClass({displayName: 'SubHeader',

	render: function(){
		return (
			React.DOM.h2( {className:"ui header"}, React.DOM.i( {className:"coffee icon"}),
				this.props.text
			)
		);
	}
});