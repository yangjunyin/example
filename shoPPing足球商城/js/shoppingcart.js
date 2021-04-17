$(function(){
	// 购物车
	$('#shop').click(function(){
		$('.shop').fadeToggle(500);
	})
	// 搜索框
	$('.banner-a input').click(function(){
		$('.xiala').slideToggle(1000);
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
	
	var time = window.localStorage.getItem(shu,shu.value)
	$('#shu').val(time);
	$('.car').click(function(){
		var num = $('#shu').val();
		$('.jiesuan').val(num*999 + '元');
	})
	
	$('.close').click(function(){
		location.assign("sneakers.html");
	})
	
})