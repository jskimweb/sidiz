window.onload = function () {
	// gnb open
	const dep01List = $('.dep01>li');
	const dep02s = [$('.mainmenu01+.dep02'), $('.mainmenu02+.dep02'), $('.mainmenu03+.dep02')];

	$.each(dep01List, function (index) {
		dep01List.eq(index).hover(function () {
			dep02s[index].show();
		}, function () {
			dep02s[index].hide();
		});
	});

	// visual swiper
	new Swiper('.sw-visual', {
		loop: true,
		speed: 1500,
		allowTouchMove: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.sw-visual__prev',
			nextEl: '.sw-visual__next',
		},
	});
}