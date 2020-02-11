$(function() {
	outdatedBrowserRework({
		language: 'ru'
	});

	$('.slider-min').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		swipe: false,
        accessibility: 'boolean',
		fade: true,
		arrows: false,
		dots: true,
		dotsClass: 'slider-min__dots',
		pauseOnDotsHover: true
	});
})