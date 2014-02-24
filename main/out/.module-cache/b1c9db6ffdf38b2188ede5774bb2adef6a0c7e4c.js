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
		var $container = $('.articles.container');

		for (var entry in articles) {
			var article = articles[entry]
			var $outer = $('<div/>');
			$container.append($outer);
			React.renderComponent(Blog( {body:article.html, title:article.title}), $outer[0]);
		}
		
		$('.week').waypoint(function(direction){
			loadiFrames($(this));
		},{offset: "25%"});

	});

})(jQuery);