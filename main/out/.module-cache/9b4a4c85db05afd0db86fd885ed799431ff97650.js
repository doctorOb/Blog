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
		React.renderComponent(Blog( {body:articles['week5'].html, title:articles['week5'].title, name:articles['week4'].name}), $('#4')[0]);
		React.renderComponent(Blog( {body:articles['week4'].html, title:articles['week4'].title, name:articles['week4'].name}), $('#4')[0]);
		React.renderComponent(Blog( {body:articles['week3'].html, title:articles['week3'].title, name:articles['week3'].name}), $('#3')[0]);
		React.renderComponent(Blog( {body:articles['week2'].html, title:articles['week2'].title, name:articles['week2'].name}), $('#2')[0]);
		React.renderComponent(Blog( {body:articles['week1'].html, title:articles['week1'].title, name:articles['week1'].name}), $('#1')[0]);

		
		
		$('.week').waypoint(function(direction){
			loadiFrames($(this));
		},{offset: "25%"});

	});

})(jQuery);