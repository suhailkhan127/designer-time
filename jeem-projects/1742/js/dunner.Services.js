var Services = (function($) {

	var Slider;

	var init = function() {

		// create new slider properties
		Slider = new SliderProps('', 0, 0, 0);

	};

	var show = function(id, item) {

		$('body').addClass('body-services-open');
		$(id).addClass('services-open');

		// set slider element
		Slider.element = $(id);

		// set slide total
		Slider.total = Slider.element.find('.services-item').length - 1;

		Slider.current = item;
		Slider.next = item;

		// set default slide states
		Slider.element.find('.services-item').each(function(index) {

			if(index != item) { 
				$(this).fadeOut(0);
			} else {
				$(this).fadeIn(0);
			}

		});

	};

	var close = function(id) {

		$('body').removeClass('body-services-open');
		$(id).removeClass('services-open');

	};

	var previous = function() {

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = Slider.next == 0 ? Slider.total : Slider.next - 1;

		// animate to new item
		animate();

	};

	var next = function() {

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = Slider.next == Slider.total ? 0 : Slider.next + 1;
		
		// animate to new item
		animate();

	};

	var animate = function() {

		// fade slides
		Slider.element.find('.services-item:eq(' + Slider.current + ')').fadeOut(200, function() {
			Slider.element.find('.services-item:eq(' + Slider.next + ')').fadeIn(200);
		});
		

	};

	return {
		init: init,
		show: show,
		close: close,
		next: next,
		previous: previous
	};

}(jQuery));

function SliderProps(element, total, next, current) {

	this.element = element;
	this.total = total;
	this.next = next;
	this.current = current;

}