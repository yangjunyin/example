$(function(){
	
	// 购物车
	$('#shop').click(function(){
		$('.shop').fadeToggle(500);
	})
	// 搜索框
	$('.banner-a input').click(function(){
		$('.xiala').slideToggle(1000);
	})
	
	$(window).scroll(function(){
		if($(document).scrollTop() >= 1600){
			$('.pice').animate({top:'0px'},1000)
			$('.rose').show(2000);
			$('.tupian').show(2000);
		}
		
		if($(document).scrollTop() >= 1400){
			$('.last').css('display','block');
		}else{
			$('.last').css('display','none');
		}
		if($(document).scrollTop() <= 0){
			clearInterval(time);
		}
	})
	$('.last').click(function(){
		time = setInterval(function(){
			window.scrollBy(0,-20)
		},5)
	})
	
})