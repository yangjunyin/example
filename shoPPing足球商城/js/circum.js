$(function(){
	// 购物车
	$('#shops').click(function(){
		$('.shopss').fadeToggle(500);
	})
	// 我的
	$('#mine').click(function(){
		$('.mine').toggle(1000);
	})
	// 搜索框
	$('.banner-a input').click(function(){
		$('.xiala').slideToggle(1000);
	})
	
	// 侧边栏
	$("#btnb").click(function(){
		$("#btnb").animate({left:'-200px'});
		$("#left").delay(500).animate({left:'0'});
		$(".a").delay(500).animate({left:'0'});
		$(".b").delay(500).animate({left:'0'});
		$(".c").delay(500).animate({left:'0'});
	});
	$("#btn").click(function(){
		$("#left").animate({left:'-200px'});
		$("#btnb").delay(500).animate({left:'0'});
		$(".a").animate({left:'-200px'});
		$(".b").animate({left:'-200px'});
		$(".c").animate({left:'-200px'});
	});
	
	//找到所有的span，并且点击span以后，控制一下元素div的显示和隐藏
	$("span").click(function (){
		$(this).next().toggle("slow");
		  }); 
		  //初始化时隐藏状态
		  $(".menu").each(function (index,domEle){
			  $(domEle).toggle("1000");
			    });
	 
		$('.menu ul li').eq(0).click(function(){
			$('.shop').show("1000");
			$('.shop-a').hide('1000');
			$('.shop-b').hide('1000');
		})
		$('.menu ul li').eq(1).click(function(){
			$('.shop-a').show("1000");
			$('.shop').hide('1000');
			$('.shop-b').hide('1000');
		})
		$('.menu ul li').eq(2).click(function(){
			$('.shop-b').show("1000");
			$('.shop').hide('1000');
			$('.shop-a').hide('1000');
		})
		
		// 图片
		$('.cir li').click(function(){
			var res = $(this).index();
			$('.img li').eq(res).show(1000).siblings().css("display","none");
		})
})