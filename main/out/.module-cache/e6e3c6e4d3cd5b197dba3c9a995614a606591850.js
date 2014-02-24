/** @jsx React.DOM */

var Blog = React.createClass({displayName: 'Blog',

	render: function() {
		return (React.DOM.div(null, 
			React.DOM.div( {id:"this.props.name", className:"title-wrapper"}, 
				React.DOM.h2( {className:"title"}, this.props.title)
			),
			React.DOM.div( {className:"journal week"}, 
				this.props.body
			)
		));
	}
});

var Quote = React.createClass({displayName: 'Quote',

	render: function(){
		return (
			React.DOM.div( {className:"quote left-border"}, 
				React.DOM.p(null, this.props.text)
			)
		);
	}
});

var SideBar = React.createClass({displayName: 'SideBar',
	getInitialState: function() {
		return {
			visible: false
		};
	},

	handleToggle: function () {
		var body = $('#container');
		if (body.hasClass('pushed')){
			body.removeClass('pushed');
		} else {
			body.addClass('pushed');
		}
		this.setState({visible: !this.state.visible});

	},

	componentDidMount: function() {
		$('#nav-toggle').on('click',this.handleToggle);
	},

	componentWillUnmount: function() {
		$('#nav-toggle').off('click');
	},

	render: function() {
		var classes = 'side-menu ' + (this.state.visible ? 'active' : '');
		return (
			React.DOM.div( {className:classes}, 
				React.DOM.div( {className:"folder"}, 
					React.DOM.div( {className:"header"}, "Journal"),
					React.DOM.div( {className:"item"}, 
						React.DOM.a( {href:"#week3"}, "Week 3")
					),			
					React.DOM.div( {className:"item"}, 
						React.DOM.a( {href:"#week2"}, "Week 2")
					),
					React.DOM.div( {className:"item"}, 
						React.DOM.a( {href:"#week1"}, "Week 1")
					)
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