Cufon.replace('.findbtn,h1,.newsletter_btn,', {fontFamily:'cafeta', hover:true});



/* For Read Button */

$(function(){

$('.list li a').hover(function(){$(this).stop().animate({paddingLeft:'5px', color:'#a4a4a4'},'fast')},function(){$(this).stop().animate({paddingLeft:0, color:'#00b9c8'},'fast')})

$('.footerlinks ul.menu li').hover(function(){$(this).stop().animate({paddingLeft:'5px', color:'#a4a4a4'},'fast')},function(){$(this).stop().animate({paddingLeft:0, color:'#00b9c8'},'fast')})

});