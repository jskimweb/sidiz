window.onload = function () {
	// gnb open
	const menuList = $('.menu-list');
	const gnbMenus = [$('.gnb__menu01'), $('.gnb__menu02'), $('.gnb__menu03')];
	const menuLists = [$('.menu-list01'), $('.menu-list02'), $('.menu-list03')];

	function hideMenuList() {
		menuList.hide();
	}

	$.each(gnbMenus, function (index) {
		gnbMenus[index].hover(function () {
			$(this).css('color', '#002bd2');
			menuLists[index].show();
			clearTimeout(gnbTimer);
		}, function () {
			$(this).removeAttr('style');
			gnbTimer = setTimeout(hideMenuList, 10);
		});

		menuLists[index].hover(function () {
			gnbMenus[index].css('color', '#002bd2');
			clearTimeout(gnbTimer);
		}, function () {
			gnbMenus[index].removeAttr('style');
			gnbTimer = setTimeout(hideMenuList, 10);
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