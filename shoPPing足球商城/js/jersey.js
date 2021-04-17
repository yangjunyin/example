$(function(){
	
	// 购物车
	$('#shop').click(function(){
		$('.shop').fadeToggle(500);
	})
	// 我的
	$('#mine').click(function(){
		$('.mine').toggle(1000);
	})
	// 搜索框
	$('.banner-a input').click(function(){
		$('.xiala').slideToggle(1000);
	})
	// 导航栏
	$('.bgm').click(function(){
		$('.bgm div').slideToggle(1000);
	})
	$('.bgma').click(function(){
		$('.bgma div').slideToggle(1000);
	})
	$('.bgmb').click(function(){
		$('.bgmb div').slideToggle(1000);
	})
	$('.bgmc').click(function(){
		$('.bgmc div').slideToggle(1000);
	})
	$('.bgmd').click(function(){
		$('.bgmd div').slideToggle(1000);
	})
	$('.bgme').click(function(){
		$('.bgme div').slideToggle(1000);
	})
	
	
	$(window).scroll(function(){
		if($(document).scrollTop() >= 1600){
			$('.pice').animate({top:'82px'},1000)
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
