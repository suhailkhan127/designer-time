if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});
$(function(){
	if($("#thumbs").length)$.include('js/jquery.galleriffic.js')
	if($("a[data-gal^='prettyPhoto']").length)$.include('js/jquery.prettyPhoto.js')
$('.lightbox-image1').prepend('').hover(function(){$(this).find('>img.magnify').stop().animate({width:45,height:60,marginLeft:-23,marginTop:-30})},function(){$(this).find('>img.magnify').stop().animate({width:0,height:0,marginLeft:0,marginTop:0})})
	$('.lightbox-image').prepend('<img class="magnify" src="images/magnify.png" alt="">').hover(function(){$(this).find('>img.magnify').stop().animate({width:45,height:60,marginLeft:-23,marginTop:-30})},function(){$(this).find('>img.magnify').stop().animate({width:0,height:0,marginLeft:0,marginTop:0})})
})			
function onAfter(curr, next, opts, fwd){var $ht=$(this).height();$(this).parent().animate({height:$ht})}

$(document).ready(function() { 
	$('ul.menu').superfish({ 
		delay:       1000,                            // one second delay on mouseout 
		animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
		speed:       'slow',                          // faster animation speed 
		autoArrows:  true,                           // disable generation of arrow mark-up 
		dropShadows: true                            // disable drop shadows 
	}); 
	
	
	$('.thumbs li')
		.live('mouseenter',function(){
			$(this).stop()
			.animate({top:-10},300)
			$(this).css({opacity:1.0})
			th=$(this).find('img');
			th.stop()
			.animate({ width:118, height:87 },300);
		})
		.live('mouseleave',function(){
			$(this).stop()
			.animate({top:0},300)
			$(this).css({opacity:0.8})
			th=$(this).find('img');
			th.stop()
			.animate({ width:98, height:67 },300);
		});
		
	$('.thumbs li.selected')
		.live('mouseenter',function(){
			$(this).stop()
			.animate({top:-10},300)
			$(this).css({opacity:1.0})
			th=$(this).find('img');
			th.stop()
			.animate({ width:118, height:87 },300);
		})
		.live('mouseleave',function(){
			$(this).stop()
			.animate({top:0},300)
			$(this).css({opacity:1.0})
			th=$(this).find('img');
			th.stop()
			.animate({ width:98, height:67 },300);
		});

}); 

/************************Underline hover **********************************/
$(document).ready(function(){ 
  
  $('.footerlinks ul.menu li ').append("<em></em>");  
    $('.footerlinks ul.menu li ').not('.active')
  .hover(function(){
   $(this).find('em')
   .stop().animate({width:'100%', left:'0'}, {duration:200})
  }, function(){
   $(this).find('em')
   .stop().animate({width:'0', left:'50%'}, {duration:200})
  });
  
  
  $('.list a ').append("<em></em>");  
    $('.list a ').not('.active')
  .hover(function(){
   $(this).find('em')
   .stop().animate({width:'0', left:'50%'}, {duration:200})
  }, function(){
   $(this).find('em')
   .stop().animate({width:'100%', left:'0'}, {duration:200})
  });
  
  })
  