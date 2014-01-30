/** @jsx React.DOM */

var Blog = React.createClass({displayName: 'Blog',
	render: function() {
		return (React.DOM.div(null, 
			React.DOM.div( {className:"title-wrapper"}  , 
				React.DOM.h2( {className:"title"}, this.props.title)
			),
			React.DOM.div( {className:"journal week"}, 
				this.props.body
			)
		));
	}
});

var SideBar = React.createClass({displayName: 'SideBar',
	render: function() {
		return (
			React.DOM.div( {className:"ui sidebar"}, 
				React.DOM.div( {className:"folder"}

				)
			)
		)
	}
})


var SubHeader = React.createClass({displayName: 'SubHeader',

	render: function(){
		return (
			React.DOM.h2( {className:"ui header"}, React.DOM.i( {className:"coffee icon"}),
				this.props.text
			)
		);
	}
});