$(function() {
				var my = 0; //页面滚动参数
				var flag = true; //设置执行完成
				$(document).mousewheel(function(e) {
					// deltaY监听鼠标的上滑或者下滑   上滑 1   下滑-1 578
					// console.log(e.deltaY)
					// console.log(event.deltaX, event.deltaY, event.deltaFactor);
					if (flag) {
						
						flag = false; //滑动开始
						if (e.deltaY > 0) { //鼠轮向上滑
						// console.log(parseInt($('.box').css('top')) == 0)
							if (parseInt($('.box').css('top')) == 0) { //第一不能上滑
								flag = true; //上滑结束
							} else {
								
								my += 100; //每次滚动578px
								// console.log(my)
								/* 滚动动画 */
								$('.box').animate({
									top: my + '%'
								},500 ,function() {
									flag = true; //上滑结束
								})
							}
						}
						
						if (e.deltaY < 0) { //鼠轮下滑
							/* 最后不能下滑 */
							// console.log(parseInt($('.box').css('top')) > -1734)
							if (parseInt($('.box').css('top')) > -2312) {
								if(parseInt($('.box').css('top')) == 0 ){
									$('.all li').fadeIn(2000)
								}
								if(parseInt($('.box').css('top')) < 0 ){
									$('.commodity ul .one').animate({bottom: '6px',left:'0px'},500)
									$('.commodity ul .three').animate({top: '82px',right:'0px'},500)
									$('.commodity ul .four').animate({bottom: '6px',right:'0px'},500)
								}
								if(parseInt($('.box').css('top')) < -500 ){
									$('.tagfore-text').animate({top:'100px',left:'50px'},4000);
									$('.rose').show(5000);
									$('.tupian').show(4000);
									
								}
								
								if(parseInt($('.box').css('top')) >= -1734 ){
									$('.pice').animate({top:'82px'},1000)
								}
								// if(parseInt($('.box').css('top')) == -1156 ){
								// 	console.log(111)
								// 	$('num_item').css('transition','all 10s ease-in-out');
								// }
								my -= 100; //每次移动-px
								// console.log(my)
								/* 滚动动画 */
								$('.box').animate({
									top: my + '%'
								}, 500, function() {
									flag = true; //下滑结束
								})
							} else {
								flag = true; //下滑结束
							}
							
							
							var numzs = 0;//数字起始值
							var zuosnum;
							zuosnum = setInterval(function(){	
								if(parseInt($('.box').css('top'))<=-1156){//判断位置
									numzs++;
									$('.zuos>p').html(numzs);//输出数字
								if(numzs>=40){//判断数字大小
									clearInterval(zuosnum)//清除定时器
									$('.zuos>p').html(40+'+');//最后在页面显示的值
								}
								}
							},30)
							var numys=0;
							var yousnum;
							yousnum = setInterval(function(){	
								if(parseInt($('.box').css('top'))<=-1156){
									numys+=10;
									$('.yous>p').html(numys);
								if(numys>=400){
									$('.yous>p').html(400+'+');
									clearInterval(yousnum);
									
								}
								}
							},30)
							var numzx=0;
							var zuoxnum;
							zuoxnum = setInterval(function(){	
								if(parseInt($('.box').css('top'))<=-1156){
									numzx+=10;
									$('.zuox>p').html(numzx);
								if(numzx>=400){
									$('.zuox>p').html(300+'+');
									clearInterval(zuoxnum);
								}
								}
							},30)
							var numyx=0;
							var youxnum;
							youxnum = setInterval(function(){	
								if(parseInt($('.box').css('top'))<=-1156){
									numyx+=10;
									$('.youx>p').html(numyx);
								if(numyx>=400){
									$('.youx>p').html(100+'+');
									clearInterval(youxnum);
								}
								}
							},30)
							
							
							
						}
					}
				})
				// 购物车
				$('#shop').click(function(){
					$('.shop').fadeToggle(500);
				})
				// 我的
				// $('#mine').click(function(){
				// 	$('.mine').show(1000);
				// })
				// $('#mine').click(function(){
				// 	$('.mine').hide(1000);
				// })
				// 搜索框
				$('.banner-a input').click(function(){
					// $('.xiala').slideToggle(1000);
				})
				
				
				// 让轮播图动起来
				var num =0;
				time = setInterval(run,2500)
				function run(){
					num++;
					if(num>=5){
						num = 0;
					}
					$('.cirs li').eq(num-1).css('background','rgba(0,0,0,.5)').siblings().css('background','rgba(255,255,255,.5)');
					 $('.imgs li').eq(num-1).css("display","block").siblings().css("display","none");
				}
				// 设置box鼠标移入事件
				$('.nav').mouseover(function(){
					 clearInterval(time);
				})
				// 设置box鼠标移出事件
				$('.nav').mouseout(function(){
					time = setInterval(run,2500)
				})
				// 设置小圆点事件
				$('.cirs li').click(function(){
					 clearInterval(time);
					var res =$('.cirs li').index(this);
					console.log(res);
					$('.imgs li').eq(res).css("display","block").siblings().css("display","none");
					$(this).css('background','rgba(0,0,0,.5)').siblings().css('background','rgba(255,255,255,.5)');
				})
				
				// 精选
				$('.mizuno').mouseover(function(){
					$('.up').slideDown(500);
					$('.down').slideDown(500);
				})
				$('.mizuno').mouseleave(function(){
					$('.up').slideUp(500);
					$('.down').slideUp(500);
				})
				$('.clothes').mouseover(function(){
					$('.upa').slideDown(500);
					$('.downa').slideDown(500);
				})
				$('.clothes').mouseleave(function(){
					$('.upa').slideUp(500);
					$('.downa').slideUp(500);
				})
				$('.footboll').mouseover(function(){
					$('.upb').slideDown(500);
					$('.downb').slideDown(500);
				})
				$('.footboll').mouseleave(function(){
					$('.upb').slideUp(500);
					$('.downb').slideUp(500);
				})
				$('.shoes').mouseover(function(){
					$('.upc').slideDown(500);
					$('.downc').slideDown(500);
				})
				$('.shoes').mouseleave(function(){
					$('.upc').slideUp(500);
					$('.downc').slideUp(500);
				})
			})