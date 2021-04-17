$(function(){
	
	$('.txtb input').on('focus',function(){
		$(this).addClass('focus');
	})
	$('.txtb input').on('blur',function(){
		if($(this).val() == ''){
		$(this).removeClass('focus')};
	})
	$('.txtb input').eq(0).click(function(){
		$('#tishi').show(1000);
	})
	$('.txtb input').eq(0).mouseleave(function(){
		$('#tishi').hide(1000);;
	})
	
	
	$('.txtb input').eq(1).click(function(){
		$('#tishia').show(1000);
	})
	$('.txtb input').eq(1).mouseleave(function(){
		$('#tishia').hide(1000);;
	})
	
	$('.txtb input').eq(2).click(function(){
		$('#tishib').show(1000);
	})
	$('.txtb input').eq(2).mouseleave(function(){
		$('#tishib').hide(1000);;
	})
	
	// 注册
	$('.logbtna').click(function(){
		$('.box').hide(1000);
		$('.boxa').show(1000);
	})
	$('.logbtnb').click(function(){
		$('.boxa').hide(1000);
		$('.box').show(1000);
	})
	
	$('.logbtn').click(function(){
		var three = $('.yonghuming').val();
		var one = $('.queren').val();
		var two = $('.zaiciquren').val();
		console.log(one)
		console.log(two)
		if(three == ''){
			$('#tishi').show(1000);
		}
		if(one == ''){
			$('#tishia').show(1000);
		}
		if(two == ''){
			$('#tishib').show(1000);
		}
		
		if(one != '' && one == two && three != ''){
			location.assign("index.html");
		}else{
			alert('输入错误')
		}
		
	})
	
	
})