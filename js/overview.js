$(document).ready(function() {

	var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap');
			$menuButton = $('.menu')

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open'); //refereert aan .button-open in CSS
		$menuWrap.toggleClass('menu-show'); //refereert aan .menu-show in CSS
		$menuButton.toggleClass('menu-open'); //refereert aan .menu-open in CSS
	});
});

$(document).ready(function(){
  var submitIcon = $('.searchbox-icon');
  var inputBox = $('.searchbox-input');
  var searchBox = $('.searchbox');
  var isOpen = false;
  submitIcon.click(function(){
   if(isOpen == false){
    searchBox.addClass('searchbox-open');
    inputBox.focus();
    isOpen = true;
   } else {
    searchBox.removeClass('searchbox-open');
    inputBox.focusout();
    isOpen = false;
   }
  });
 });

 //onderstaande zorgt ervoor dat zoekveld weer verdwijnt als gebruiker buiten het veld klikt
  submitIcon.mouseup(function(){
     return false;
    });
    searchBox.mouseup(function(){
     return false;
    });
   $(document).mouseup(function(){
    if(isOpen == true){
     $('.searchbox-icon').css('display','block');
     submitIcon.click();
   }
 });

  //onderstaande is om te checken of er tekst in zoekveld aanwezig is
  //whitespace = any section of a document that is unused or space around an object.
    function buttonUp(){ //buttonUp wordt toegepast wanneer zoekveld gevuld is
       var inputVal = $('.searchbox-input').val(); //om ingetypte tekst op te slaan in var inputVal
       inputVal = $.trim(inputVal).length; // om whitespace voor en na tekst te verwijderen
       if( inputVal !== 0){ //checkt of zoekveld tekst heeft
        $('.searchbox-icon').css('display','none');
       } else { //als zoekveld tekst  heeft
        $('.searchbox-input').val(''); //bedoeld om te voorkomen dat whitespace te verwijderen
        $('.searchbox-icon').css('display','block');
      };

		  };
