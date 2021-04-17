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
	
	$('.puls ul li').click(function(){
		var res = $(this).index()
		console.log(res)
		$('.left').eq(res).animate({top: '0px',left:'-203px'},500)
		$('.right').eq(res).animate({top: '0px',right:'-203px'},500)
	})
	$('.puls ul li').mouseleave(function(){
		var res = $(this).index()
		console.log(res)
		$('.left').animate({top: '0px',left:'0px'},500)
		$('.right').animate({top: '0px',right:'0px'},500)
	})
	
})