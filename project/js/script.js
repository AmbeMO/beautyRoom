$(document).ready(function() {
	$('.header-menu__burger').click(function(event){
		$('.header-menu__burger,.header-menu__menu').toggleClass('active');
		$('body').toggleClass('lock');// блокірує прокрутку коли ми в медія меню
	}); 
});