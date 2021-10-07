window.onload = function () {
	// 모달창 닫기
	const modal = $('.modal');
	const modalBox = $('.modal-box');
	const modalClose = $('.modal__close');

	modalClose.click(function () {
		modal.stop().fadeOut();
	});

	modal.click(function () {
		$(this).stop().fadeOut();
	});

	modalBox.click(function (event) {
		event.stopPropagation();
	});

	// gnb 보이기/숨기기
	const dep01List = $('.dep01>li');
	const dep02s = [$('.mainmenu01+.dep02'), $('.mainmenu02+.dep02'), $('.mainmenu03+.dep02')];

	$.each(dep01List, function (index) {
		dep01List.eq(index).hover(function () {
			dep02s[index].show();
		}, function () {
			dep02s[index].hide();
		});
	});

	// visual 슬라이드
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