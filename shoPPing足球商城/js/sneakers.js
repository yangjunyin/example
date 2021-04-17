$(function(){
	
	// 图片
	
	
	
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
	// 图片
	$('.cir li').click(function(){
		var res = $(this).index();
		$('.img li').eq(res).show(1000).siblings().css("display","none");
	})
	
	$(window).scroll(function(){
		if($(document).scrollTop() >= 800){
			$('.pice').animate({top:'0'},1000)
			$('.rose').show(2000);
			$('.tupian').show(2000);
		}
		
		if($(document).scrollTop() >= 600){
			$('.last').css('display','block');
		}else{
			$('.last').css('display','none');
		}
		if($(document).scrollTop() <= 0){
			clearInterval(time);
		}
	})
	var time
	$('.last').click(function(){
		time = setInterval(function(){
			window.scrollBy(0,-20)
		},5)
	})
	
	
})