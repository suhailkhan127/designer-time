/*
 * Sans Javascript File
 *
 * This file will contain all of the parent theme's custom javascript functions. This file is
 * registered and enqueued using the handle 'wap8_sans-js'.
 *
 * If you would like to modify this file, we highly recommend doing so in your child theme only.
 *
 * @package WordPress
 * @subpackage Sans
 * @since Sans 1.0
 * @author We Are Pixel8 http://www.wearepixel8.com
 *
 */

// iPhone scaling bug fix by @mathias, @cheeaun and @jdalton
(function(doc) {

	var addEvent = 'addEventListener',
		type = 'gesturestart',
		qsa = 'querySelectorAll',
		scales = [1, 1],
		meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];
		
	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}
	
	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

}(document));

(function($) {
	
	// Add has-js class to html tag, if javascript is enabled
	$('html').addClass('has-js');
	
	// No spam, please
	$('a.emailaddy').each(function(i) {
		var text = $(this).text();
		var address = text.replace(' at ', '@');
		$(this).attr('href', 'mailto:' + address);
			$(this).text(address);
	});

	// Add navigation controllers for small screens
	$('.sans-masthead').prepend('<div class="menu-trigger"><a class="sans-button trigger-button" href="#" title="Toggle Menu"><i class="icon-list"></i> Menu</a></div>');
	$('.filter-controls').prepend('<div class="filter-trigger"><a class="sans-button trigger-button" href="#" title="Toggle Filter"><i class="icon-list"></i> Filter</a></div>');
	
	// Add an icon to footer nav current menu item
	$('.sans-footer li.current-menu-item a').append('<i class="icon-arrow-left"></i>');

	// Toggle main menu on small screens
	$('.menu-trigger a').click(function() {
		$('.sans-main-menu').slideToggle({
			speed:	300,
		});
		$(this).toggleClass('show-menu');
		return false;
	});
	
	// Toggle portfolio filter nav on small screens
	$('.filter-trigger a').click(function() {
		$('.filter_nav').slideToggle({
			speed:	300,
		});
		$(this).toggleClass('show-filters');
		return false;
	});
	
	// Hide the filter navigation once an element is clicked on small screens
	$('.filter_nav a').click(function() {
		$('.filter_nav').slideToggle({
			speed:	300,
		});
		$('.filter-trigger a').removeClass('show-filters');
		return false;
	});
	
	// Add focus to hovered portfolio thumbnail
	$('.portfolio-grid').delegate('.portfolio-grid li', 'mouseover mouseout', function(e) {
		if (e.type == 'mouseover') {
			jQuery('.portfolio-grid li').not(this).dequeue().animate({opacity: '0.5'}, 300);
    	} else {
			jQuery('.portfolio-grid li').not(this).dequeue().animate({opacity: '1'}, 300);
   		}
	});
	
	// Anchor scrolling
	$('.scroll-it').click(function(event) {
		
		// Prevent the default action for the click event
		event.preventDefault();

		// Get the full url - like mysitecom/index.htm#home
		var full_url = this.href;

		// Split the url by # and get the anchor target name - home in mysitecom/index.htm#home
		var parts = full_url.split('#');
		var trgt = parts[1];

		// Get the top offset of the target anchor
		var target_offset = $('#'+trgt).offset();
		var target_top = target_offset.top;

		// Go to that anchor by setting the body scroll top to anchor top
		$('html, body').animate({scrollTop:target_top}, 500);
	});
	
	// Filter portfolio
	$('#filter-portfolio').filterable();
	
	// Responsive videos
	$('.sans-portfolio-video').fitVids();
	$('.sans-post-video').fitVids();
	$('.sans-entry').fitVids();
	$('.sans-hero-video').fitVids();
	$('.sans-case-study').fitVids();
	
	// Responsive floating images on blog posts
	$(window).load(function() {
	
		var blogWidth = 780; // width of desktop blog post container
		
		$('.sans-blog-img img.alignleft').each(function() { // blog post images floating left
			var ratio = $(this).width()/blogWidth;
			$(this).wrap('<div style="width: '+(ratio*100)+'%; float: left; margin-right: 3.34%;"></div>');
		});
		
		$('.sans-blog-img img.alignright').each(function() { // blog post images floating right
			var ratio = $(this).width()/blogWidth;
			$(this).wrap('<div style="width: '+(ratio*100)+'%; float: right; margin-left: 3.34%;"></div>');
		});
	
	});
	
	// Responsive floating images on portfolio items
	$(window).load(function() {
	
		var portfolioWidth = 788; // width of desktop portfolio container
		
		$('.sans-portfolio-img img.alignleft').each(function() { // blog post images floating left
			var ratio = $(this).width()/portfolioWidth;
			$(this).wrap('<div style="width: '+(ratio*100)+'%; float: left; margin-right: 3.3%;"></div>');
		});
		
		$('.sans-portfolio-img img.alignright').each(function() { // blog post images floating right
			var ratio = $(this).width()/portfolioWidth;
			$(this).wrap('<div style="width: '+(ratio*100)+'%; float: right; margin-left: 3.3%;"></div>');
		});
	
	});
	
	// Responsive floating images on pages
	$(window).load(function() {
	
		var pageWidth = 1050; // width of desktop portfolio container
		
		$('.sans-img-resize img.alignleft').each(function() { // blog post images floating left
			var ratio = $(this).width()/pageWidth;
			$(this).wrap('<div style="width: '+(ratio*100)+'%; float: left; margin-right: 2.4762%;"></div>');
		});
		
		$('.sans-img-resize img.alignright').each(function() { // blog post images floating right
			var ratio = $(this).width()/pageWidth;
			$(this).wrap('<div style="width: '+(ratio*100)+'%; float: right; margin-left: 2.4762%;"></div>');
		});
	
	});
	
	// Initiate Fancybox on gallery items
	$('.gallery-icon a').fancybox();
	
	// Clear fix hack for columns
	$('<div class="clear"></div>').insertAfter('.sans-half-column-last');
	$('<div class="clear"></div>').insertAfter('.sans-third-column-last');

})(jQuery);
