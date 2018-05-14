
$(document).ready(function () {
	$('.sidebar__link').on('click', function (e) {
		e.preventDefault();

		var $this = $(this);

		var item = $this.closest('.sidebar__item');
		var content = item.find('.sidebar__sub-list');
		var duration = 200;

		if (!$this.hasClass('active')) {
			$this.addClass('active');
			content.stop(true, true).slideDown(duration);
			return;
		}

		content.stop(true, true).slideUp(duration);
		$this.removeClass('active');

	});

	var scrollTopBtn = $('.scroll-top-btn');
	$(window).on('scroll', function() {
		if($('html, body').scrollTop() > 120) {
			scrollTopBtn.fadeIn(200);
		} else {
			scrollTopBtn.fadeOut(200)
		}
	});

	$('.scroll-top-btn').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 200);
	}) 
});
