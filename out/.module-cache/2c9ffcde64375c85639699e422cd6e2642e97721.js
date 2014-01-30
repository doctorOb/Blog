/** @jsx React.DOM */

var Blog = React.createClass({displayName: 'Blog',

	render: function() {
		return (React.DOM.div(null, 
			React.DOM.div( {className:"title-wrapper"}, 
				React.DOM.h2( {className:"title"}, this.props.title)
			),
			React.DOM.div( {className:"journal week"}, 
				this.props.body
			)
		));
	}
});

var SideBar = React.createClass({displayName: 'SideBar',
	getInitialState: function() {
		return {
			visible: false
		};
	},

	render: function() {
		var visible = this.state.visible;
		var classes = 'side-menu ' + this.state.visible ? 'active' : ''
		return (
			React.DOM.div( {className:"side-menu"}, 
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