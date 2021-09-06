window.onload = function() {
	$('.gnb__menu-1').mouseenter(function() {
		$('.menu-list-1').show();
	});
	$('.gnb__menu-1').mouseleave(function() {
		$('.menu-list-1').hide();
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
	});
	$('.gnb__menu-2').mouseleave(function() {
		$('.menu-list-2').hide();
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
	});
	$('.gnb__menu-3').mouseleave(function() {
		$('.menu-list-3').hide();
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
}