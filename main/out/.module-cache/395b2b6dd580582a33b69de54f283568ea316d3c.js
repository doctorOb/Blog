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
		React.renderComponent(Blog( {body:articles['week3'].html, title:articles['week3'].title}), $('#3'));
		
		
		$('.week').waypoint(function(direction){
			loadiFrames($(this));
		},{offset: "25%"});

	});

})(jQuery);