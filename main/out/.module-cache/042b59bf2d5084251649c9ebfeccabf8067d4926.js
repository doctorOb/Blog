/** @jsx React.DOM */

function loadiFrames(week) {
	week.find('.embed.unloaded').each(function(){
		var $this = $(this);
		var iFrame = $this.data('iframe');
		$this.html(iFrame);
		$this.removeClass('unloaded');
	});
}

(function($){
	$(document).ready(function(){

		React.renderComponent(SideBar(null),document.getElementById('sidenav'));
		React.renderComponent(Blog( {body:articles['week2'].html, title:articles['week2'].title}),document.getElementById('2'));
		React.renderComponent(Blog( {body:articles['week1'].html, title:articles['week1'].title}), document.getElementById('1'));

		var $container = $('.articles.container');
		for (var article in articles) {
			var $outer = $('<div/>');
			$container.append($outer);
			React.renderComponent(Blog( {body:article.html, title:article.title}), $outer[0]);
		}
		
		$('.week').waypoint(function(direction){
			loadiFrames($(this));
		},{offset: "25%"});

	});

})(jQuery);