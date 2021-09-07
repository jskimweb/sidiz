window.onload = function() {

	// gnb open
	$('.gnb__menu-1').mouseenter(function() {
		$('.menu-list-1').show();
		$(this).css({
			"color": "#002bd2"
		})
	});
	$('.gnb__menu-1').mouseleave(function() {
		$('.menu-list-1').hide();
		$(this).css({
			"color": "#000"
		})
	});
	$('.menu-list-1').mouseenter(function() {
		$(this).show();
		$('.gnb__menu-1').css({
			"color": "#002bd2"
		})
	});
	$('.menu-list-1').mouseleave(function() {
		$(this).hide();
		$('.gnb__menu-1').css({
			"color": "#000"
		})
	});

	$('.gnb__menu-2').mouseenter(function() {
		$('.menu-list-2').show();
		$(this).css({
			"color": "#002bd2"
		})
	});
	$('.gnb__menu-2').mouseleave(function() {
		$('.menu-list-2').hide();
		$(this).css({
			"color": "#000"
		})
	});
	$('.menu-list-2').mouseenter(function() {
		$(this).show();
		$('.gnb__menu-2').css({
			"color": "#002bd2"
		})
	});
	$('.menu-list-2').mouseleave(function() {
		$(this).hide();
		$('.gnb__menu-2').css({
			"color": "#000"
		})
	});
	
	$('.gnb__menu-3').mouseenter(function() {
		$('.menu-list-3').show();
		$(this).css({
			"color": "#002bd2"
		})
	});
	$('.gnb__menu-3').mouseleave(function() {
		$('.menu-list-3').hide();
		$(this).css({
			"color": "#000"
		})
	});
	$('.menu-list-3').mouseenter(function() {
		$(this).show();
		$('.gnb__menu-3').css({
			"color": "#002bd2"
		})
	});
	$('.menu-list-3').mouseleave(function() {
		$(this).hide();
		$('.gnb__menu-3').css({
			"color": "#000"
		})
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