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

		React.renderComponent(Blog( {body:articles['week2'].html, title:articles['week2'].title}),document.getElementById('2'));
		React.renderComponent(Blog( {body:articles['week1'].html, title:"Week 1 - An Introduction to Production &amp; a Bit About Me "}), document.getElementById('1'));
		$('.week').waypoint(function(direction){

			loadiFrames($(this));
			var week = parseInt($(this).attr('id'),10),
				offset = direction === 'up' ? week - 1 : week,
				next;
			$('.active').removeClass('active');
			next = $('#week-' + offset);
			if (next) {
				next.addClass('active');
			}
		},{offset: "25%"});

		$('.persistent-nav .item').on('click',function(e){
			e.preventDefault();
			var week = $(this).attr('id').match(/\d+/)[0];
			$('body').stop(true,true);
			$('body').animate({
				scrollTop: $('#' + week)[0].offsetTop
			},500);
		});
	});

})(jQuery);