$(document).ready(function() {

	var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
    //uitzoeken hoe ik background-color van menu aanpassen zodra menu actief is
    //$(".menu").css("background-color","#008800");

	});

});
