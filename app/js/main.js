$(function(){

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.top-header').addClass("sticky");
}
else{
$('.top-header').removeClass("sticky");
}
});
  // ------start scroll menu---
$("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
 // ------end scroll menu---
$('.menu__btn').click(function(){
	$('.menu ul').addClass('active');
	$('.menu ul li').addClass('animated');
	$('.menu ul li').addClass('fadeInRight');


	 
})

$('.button').click(function(){
	$('.popup').fadeIn();
	 
})

$('.popup svg').click(function(){
	$('.popup').fadeOut();
	 
})

$('.close-menu').click(function(){
	$('.menu ul').removeClass('active');
	$('.menu ul li').removeClass('animated');
	$('.menu ul li').removeClass('fadeInRight');
})

$('.menu ul li').click(function(){
	$('.menu ul').removeClass('active');
})

 $('[data-fancybox="gallery1"]').fancybox({
  transitionEffect: "fade",
  transitionDuration: 0,

});

});

$(function(){
$(elements).lazyLoadXT();



});

$.lazyLoadXT.onload.addClass = "animated fadeIn";