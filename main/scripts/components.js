/** @jsx React.DOM */

var Blog = React.createClass({

	render: function() {
		return (<div>
			<div id={this.props.name} className="title-wrapper">
				<h2 className="title">{this.props.title}</h2>
			</div>
			<div className="journal week">
				{this.props.body}
			</div>
		</div>);
	}
});

var Quote = React.createClass({

	render: function(){
		return (
			<div className="quote left-border">
				<p>{this.props.text}</p>
			</div>
		);
	}
});

/* a sidebar, which manages href -> title mappings. TODO: refactor this to take 
   an array of (href,title) combos, then generate items on render
*/
var SideBar = React.createClass({
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
			<div className={classes}>
				<div className="folder">
					<div className="header">Journal</div>
					<div className="item">
						<a href="#week5">Week 5</a>
					</div>
					<div className="item">
						<a href="#week4">Week 4</a>
					</div>
					<div className="item">
						<a href="#week3">Week 3</a>
					</div>			
					<div className="item">
						<a href="#week2">Week 2</a>
					</div>
					<div className="item">
						<a href="#week1">Week 1</a>
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