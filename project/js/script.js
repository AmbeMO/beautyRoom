$(document).ready(function() {
	$('.header-menu__burger').click(function(event){
		$('.header-menu__burger,.header-menu__menu').toggleClass('active');
		$('body').toggleClass('lock');
	}); 
	
	$('.header-menu__list li a').on('click' ,function(e){
		e.preventDefault();
		if ($(window).width() < 767) {
			$('.header-menu__burger,.header-menu__menu').removeClass('active');
			$('body').removeClass("lock");
			$('html').animate({ 
	    	    scrollTop: $("." + $(this).attr("data-block")).offset().top  - 50
	        }, 500);
		}  else {
			$('html').animate({ 
	    	    scrollTop: $("." + $(this).attr("data-block")).offset().top  - 80
	        }, 500);
		}
	});
});