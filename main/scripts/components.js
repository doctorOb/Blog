/** @jsx React.DOM */

var Blog = React.createClass({

	render: function() {
		return (<div>
			<div className="title-wrapper">
				<h2 className="title">{this.props.title}</h2>
			</div>
			<div className="journal week">
				{this.props.body}
			</div>
		</div>);
	}
});

var SideBar = React.createClass({
	getInitialState: function() {
		return {
			visible: false
		};
	},

	handleToggle: function () {
		var body = $('body');
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
			<div className={classes}>
				<div className="folder">
					<div className="header">Journal</div>
				
					<div className="item">
						<a href="#2">Week 2</a>
					</div>
					<div className="item">
						<a href="#1">Week 1</a>
					</div>
				</div>
			</div>
		)
	}
})


var SubHeader = React.createClass({

	render: function(){
		return (
			<h2 className="ui header"><i className="coffee icon"></i>
				{this.props.text}
			</h2>
		);
	}
});