$(function(){
	// 购物车
	$('#shop').click(function(){
		$('.shop').fadeToggle(500);
	})
	// 搜索框
	$('.banner-a input').click(function(){
		$('.xiala').slideToggle(1000);
	})
	// 当鼠标移入到小图的盒子时，放大镜盒子和大图盒子显示出来
	$('.smalla').mouseover(function(){
		//放大镜盒子和大图盒子显示
		$('.box').show();
		$('.big').show();
		//获取小图的图片的宽度，高度为400px
		var width = $('.smalla img').width();
		//获取大图的大小
		var Bwidth = $('.big img').width();
		var Bheight = $('.big img').height();
		//设置放置小图盒子的宽度
		$('.smalla').css('width',width+'px');
		//设置放大镜滑块的大小
		var Hwidth = ($('.big').width())/Bwidth*($('.smalla').width());
		var Hheight = ($('.big').height())/Bheight*($('.smalla').height());
		//设置放大镜盒子的大小
		$('.box').css({'width':Hwidth + 'px','height':Hheight + 'px'});
		
		//
		//设置放大镜盒子移动事件
		$('.smalla').mousemove(function(e){
			//获取鼠标的位置
			var x = e.clientX;
			var y = e.clientY;
			// console.log(x,y)
			//设置鼠标在放大镜盒子的中心上
			var xx = x - $('.box').width()/2;
			var yy = y -$('.box').height()/2;
			//设置使放大镜盒子不可以出边框
			//最大边界
			var maxX = $('.smalla').width()-$('.box').width();
			var maxY = $('.smalla').height()-$('.box').height();
			// console.log(maxX)
			if (xx<0) {
				xx = 0;
			}
			if (xx>maxX) {
				xx = maxX;
			}
			if (yy<0){
				yy = 0;
			}
			if (yy>maxY){
				yy = maxY;
			}
			$('.box').css({'left':xx + 'px','top':yy + 'px'});
			//
			//设置大图跟着放大镜盒子移动
			//查看放大的倍数，及大图的移动距离
			//放大的图片的移动距离为放大镜盒子移动的距离*放大的倍数
			var img_x = xx * ($('.big img').width()/$('.smalla img').width());
			var img_y = yy * ($('.big img').height()/$('.smalla img').height());
			//放大的图片的移动
			$('.big img').css({'left':-img_x + 'px','top':-img_y + 'px'});
		})
	
	})
	//
	//实现图片的切换
	$('.nav li').click(function(){
		var Src = $(this).find('img').attr('src');
		//设置小图和大图框子中的图片
		$('.smalla img').attr('src',Src);
		$('.big img').attr('src',Src);
	})
	//鼠标离开放大镜盒子于大图盒子进行隐藏
	$('.smalla').mouseout(function(){
		$('.box').hide();
		$('.big').hide();
	})
	
	$('.jia').click(function(){
		var num = $('#shu').val();
		num++;
		$('#shu').val(num);
	})
	$('.jian').click(function(){
		var num = $('#shu').val();
		num--;
		if(num>=0){
			$('#shu').val(num);
		}else{
			$('#shu').val(0);
		}
	})
	$('.car').click(function(){
		var num = $('#shu').val();
		console.log(num*999);
		window.localStorage.setItem(shu,shu.value);
		location.assign("shoppingcart.html");
	})
})