var Dunners = (function($) {

	var init = function() {

		// Set up background images

		setBackground('.background-image');
		

 		// "stellar" parallax
 
        $(document).ready(function() {
            react_to_window();
        });
        
		// only activate stellar for window widths above or equal to 1024
        var stellarActivated = false;
        
        $(window).resize(function() {
            react_to_window();
        });
        
        function react_to_window() {
            if ($(window).width() <= 1024) {
                if (stellarActivated == true) {
                    $(window).data('plugin_stellar').destroy();
                    stellarActivated = false;
                }
            } else {
                if (stellarActivated == false) {
 
                    $.stellar({
						horizontalScrolling: false,
						hideDistantElements: false,
                   });
                    
                    $(window).data('plugin_stellar').init();
                    stellarActivated = true;
                }
            }
        }

		// templates slider
		if(typeof Services !== 'undefined') 
			Services.init();

        //Toggle Buttons

		$('.menu').on("click", function() { 

			$('#menu-main-navigation').toggleClass('open');

		});

		$('.menu-close').on("click", function() { 

			$('.mobile-nav').toggleClass('open');

		});

		$('.menu-mobile').on("click", function() { 

			$('.mobile-nav').toggleClass('open');

		});

		$('.internal-menu').on("click", function() { 

			$('.mobile-nav').toggleClass('open');

		});	


		// Waypoints

		if ($('section').is('.hero')){

			var sticky = new Waypoint.Sticky({
			  element: $('.nav-wrapper')[0]
			})

		}

		$('.lawncare').waypoint(function(direction) {
			if(direction == 'up') {
				$('#menu-main-navigation').removeClass('open');
			} else {

			}
		}, { offset: 0 });

		$('.title-banner').waypoint(function(direction) {
			if(direction == 'down') {
				$('.nav-internal').toggleClass('stuck');
			} else {
				$('.nav-internal').toggleClass('stuck');
			}
		}, { offset: -200 });

		// chapter three snap
		$('.services').waypoint(function(direction) {
			if(direction == 'down') {
				$('.navigation nav ul li a').removeClass('active');
				$('.navigation nav ul li a').eq(2).addClass('active');
			} else {
				$('.navigation nav ul li a').removeClass('active');
				$('.navigation nav ul li a').eq(1).addClass('active');
			}
		}, { offset: 0 });

		// chapter three snap
		$('.blog').waypoint(function(direction) {
			if(direction == 'down') {
				$('.navigation nav ul li a').removeClass('active');
				$('.navigation nav ul li a').eq(3).addClass('active');
			} else {
				$('.navigation nav ul li a').removeClass('active');
				$('.navigation nav ul li a').eq(2).addClass('active');
			}
		}, { offset: 0 });

		// chapter three snap
		$('.team').waypoint(function(direction) {
			if(direction == 'up') {
				$('.navigation nav ul li a').removeClass('active');
				$('.navigation nav ul li a').eq(4).addClass('active');
			} else {
				$('.navigation nav ul li a').removeClass('active');
				$('.navigation nav ul li a').eq(3).addClass('active');
			}
		}, { offset: 0 });

		$('.work').waypoint(function(direction) {
			if(direction == 'up') {
				$('.navigation nav ul li a').removeClass('active');
				$('.navigation nav ul li a').eq(5).addClass('active');
			} else {
				$('.navigation nav ul li a').removeClass('active');
				$('.navigation nav ul li a').eq(4).addClass('active');
			}
		}, { offset: 800 });

		$('.contact-form').waypoint(function(direction) {
			if(direction == 'up') {
				$('.navigation nav ul li a').removeClass('active');
				$('.navigation nav ul li a').eq(6).addClass('active');
			} else {
				$('.navigation nav ul li a').removeClass('active');
				$('.navigation nav ul li a').eq(5).addClass('active');
			}
		}, { offset: 800 });

		// set up sliders
		setUpSliders();

	};

	var setBackground = function(className) {

		$(className).each(function(index) {

			$(this).css('background-image', 'url(' + $(this).data('src') + ')');

		});

	};

	var toggleOpen = function(selector, newClass) {

		$(selector).toggleClass(newClass);

	};

	var scrollTo = function(id) {
		
		// Stop any currently active scroll
		$('html, body').dequeue();
		// Scroll to #id offset by 90 pixels
		$('html, body').animate({ scrollTop: $(id).offset().top }, 1000, 'easeOutExpo');
	
	};
	
	var setUpSliders = function() {

		testimonialSlider = $('#testimonial-slider').royalSlider({

			navigateByClick: false,
			sliderTouch: true,
			sliderDrag: true,
			transitionSpeed: 500,
    		fadeEffect: false,
			controlsInside: true,
			arrowsNav: true,
			transitionType:'move',

		}).data('royalSlider');

		$('.testimonials .next').on('click', function() { 
			$('.rsArrowRight').trigger('click'); 
		});

		$('.testimonials .prev').on('click', function() { 
			$('.rsArrowLeft').trigger('click'); 
		});

	};
	
	return {
		init: init,
		scrollTo: scrollTo,

	};

}(jQuery));

$(function() {
	Dunners.init();
});