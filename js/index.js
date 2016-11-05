$(function(){
	//alert(1);
	/*显示用户名*/
	var user_name=$.cookie('username')
	//alert(user_name);
	if(user_name){
		$('.hello').html('zj9307    您好，欢迎来可得！<a href="#"class="tuichu">[退出]</a>');
		$('.tuichu').click(function(){
			$('.hello').html('您好，欢迎光临可得眼镜网！  <a href="login.html">登录 </a> <a href="register.html">[免费注册]</a>');
		})
	}
	/*购物车显示数量*/
	if($.cookie('goods')){
		$('.che_num').html()
	}
	$('.banner_nav li').click(function(){
		window.location.href='list.html'
	})
	$('.sp_1').on({
		mouseover:function(){
			$('.sp_1 .sub_list').css('display','block')
		},
		mouseout:function(){
			$('.sp_1 .sub_list').css('display','none')
		}
	})
	$('.help').on({
		mouseover:function(){
			$('.help .sub_list').css('display','block')
		},
		mouseout:function(){
			$('.help .sub_list').css('display','none')
		}
	})
	$('.phone').on({
		mouseover:function(){
			$('.code').css('display','block')
		},
		mouseout:function(){
			$('.code').css('display','none')
		}
	})
	/*轮播图设置定时器*/
	timer=setInterval(move,2000);
	var index=0;
	function move(){
		 if(index==$('#banner li').length-1){
		 	index=0;
		 }else{
		 	index++;
		 }
		 $('#banner li').eq(index).fadeIn().siblings().fadeOut();
		 $('.banner_num b').css('background','#333');
		 $('.banner_num b').eq(index).css('background','#8FCB5A');
	}
	/*轮播图完成，开始设置下方按钮*/
	$('.banner_num b').hover(f3,f4)
	function f3(){
		clearInterval(timer);
		index=$(this).index();
		$('.banner_num b').css('background','#333');
		$('.banner_num b').eq(index).css('background','#8FCB5A');
		$('#banner li').eq(index).fadeIn().siblings().fadeOut();
	}
	function f4(){
		timer=setInterval(move,2000);
	}
	/*轮播图左边列表*/
	$('.banner_nav li').mouseover(function(){
		$(this).children().eq(1).css('display','block');
		$(this).children().eq(0).css('z-index','3');
		$(this).css('z-index','4');
	})
	$('.banner_nav li').mouseout(function(){
		$(this).children().eq(1).css('display','none');	
		$(this).children().eq(0).css('z-index','1');
		$(this).css('z-index','1');
	})
	/*banner右边小的轮播图*/
	time=setInterval(f5,2000);
	var index1=0;
	function f5(){
		if(index1==1){
			index1=0;
			$('.lun1 ul').animate({
			'left':'0px'
		})
			
		}else{
			index1++;
			$('.lun1 ul').animate({
			'left':'-218px'
			})
		}
		$('.lun1 span').css('background','#666');
		$('.lun1 span').eq(index1).css('background','#90C221');
	}
	/*小的轮播图下面的按钮*/
	$('.lun1 span').hover(f6,f7);
	function f6(){
		clearInterval(time);
		index1=$(this).index();
		$('.lun1 span').css('background','#666');
		$('.lun1 span').eq(index1).css('background','#90C221');
		if(index1==1){
			index1=0;
			$('.lun1 ul').css('left',-218);
		}else{
			index1++;
			$('.lun1 ul').css('left','0');
		}
	}
	function f7(){
		time=setInterval(f5,2000);
	}
	/*goods右方选项卡*/
	$('.right_sg a').mouseover(function(){
		$('.right_sg a').removeClass('active');
		$(this).addClass('active');
		var rt_sg=$(this).index();
		//alert(rt_sg);
		console.log($('.right_sg ul').length);
		$('.right_sg ul').css('display','none');
		$('.right_sg ul').eq(rt_sg).css('display','block');
	});
	/*今日秒杀选项卡*/
	$('.sale_a a').eq(0).mouseover(function(){
		$('.sale_a').css('background-position','0 0')
		$('.sale ul').eq(1).css('display','none');
		$('.sale ul').eq(0).css('display','block');
	});
	$('.sale_a a').eq(1).mouseover(function(){
		$('.sale_a').css('background-position','0 -182px')
		$('.sale ul').eq(0).css('display','none');
		$('.sale ul').eq(1).css('display','block');
	});
	/*1f 轮播*/
	times=setInterval(f8,2000);
	var index2=0;
	function f8(){
		if(index2==1){
			index2=0;
			$('.lun2_ul').animate({
			'left':'0px'
		})
			
		}else{
			index2++;
			$('.lun2_ul').animate({
			'left':'-218px'
			})
		}
		$('.lun2_sg span').css('background','#666');
		$('.lun2_sg span').eq(index2).css('background','#90C221');
	}
	/*小的轮播图下面的按钮*/
	$('.lun2_sg span').hover(f9,f10);
	function f9(){
		clearInterval(times);
		index2=$(this).index();
		$('.lun2_sg span').css('background','#666');
		$('.lun2_sg span').eq(index2).css('background','#90C221');
		if(index2==1){
			index2=0;
			$('.lun2_ul').css('left',-218);
		}else{
			index2++;
			$('.lun2_ul').css('left','0');
		}
	}
	function f10(){
		times=setInterval(f8,2000);
	}
	/*1f右边 轮播*/
	timers=setInterval(f11,2000);
	var index3=0;
	function f11(){
		if(index3==1){
			index3=0;
			$('.list_ul').animate({
			'left':'0px'
		})
			
		}else{
			index3++;
			$('.list_ul').animate({
			'left':'-490px'
			})
		}
		$('.list_sp span').css('background','#666');
		$('.list_sp span').eq(index3).css('background','#90C221');
	}
	/*小的轮播图下面的按钮*/
	$('.list_sp span').hover(f12,f13);
	function f12(){
		clearInterval(timers);
		index3=$(this).index();
		if(index3==1){
			index3=0;
			$('.list_ul').css('left','-490');
		}else{
			index3++;
			$('.list_ul').css('left','0');
		}
		$('.list_sp span').css('background','#666');
		$('.list_sp span').eq(index3).css('background','#90C221');
	}
	function f13(){
		timers=setInterval(f11,2000);
	}
	/*动态加载商品列表*/
	$.ajax({
		url:'list.json',
		type:'get',
		success:function(res){
			//alert(res);
			var html='';
			for(var i=0;i<res.length;i++){
				if(i==6)
				{
					html=html+'<div class="list_lun"><ul class="clear list_ul">'
					+'<li><a href="#"><img src="images/1f_ban2.jpg"/></a></li>'+
					'<li><a href="#"><img src="images/1f_ban1.jpg"/></a></li></ul><div class="clear list_lun_sp list_sp"><span></span><span></span></div></div>'
				}else{
					html+='<dl style="padding-bottom:0;">'
							+'<dt><a href="xiang.html?id='+res[i].id+'"><img src="'+res[i].src+'"/></a></dt>'
							+'<dd><i>'+res[i].价格+'</i>+<br/><a>'+res[i].类型+'</a><br />'+res[i].优惠+'</dd></dl>';
				}
				$('.list_rt1').html(html);
			}
		}
	})
	/*二楼特效轮播图左边*/
	tim=setInterval(f14,2000);
	var index4=0;
	function f14(){
		if(index4==1){
			index4=0;
			$('.2flt_ul').animate({
			'left':'0px'
		})
			
		}else{
			index4++;
			$('.2flt_ul').animate({
			'left':'-218px'
			})
		}
		$('.2flt_sp span').css('background','#666');
		$('.2flt_sp span').eq(index4).css('background','#90C221');
	}
	/*小的轮播图下面的按钮*/
	$('.2flt_sp span').hover(f15,f16);
	function f15(){
		clearInterval(tim);
		index4=$(this).index();
		$('.2flt_sp span').css('background','#666');
		$('.2flt_sp span').eq(index4).css('background','#90C221');
		if(index4==1){
			index4=0;
			$('.2flt_ul').css('left',-218);
		}else{
			index2++;
			$('.2flt_ul').css('left','0');
		}
	}
	function f16(){
		tim=setInterval(f14,2000);
	}
	/*2楼右边轮播*/
	ti=setInterval(f17,2000);
	var index5=0;
	function f17(){
		if(index5==1){
			index5=0;
			$('.2frt_ul').animate({
			'left':'0px'
		})
			
		}else{
			index5++;
			$('.2frt_ul').animate({
			'left':'-490px'
			})
		}
		$('.2frt_sp span').css('background','#666');
		$('.2frt_sp span').eq(index5).css('background','#90C221');
	}
	/*小的轮播图下面的按钮*/
	$('.2frt_sp span').hover(f18,f19);
	function f18(){
		clearInterval(ti);
		index5=$(this).index();
		$('.2frt_sp span').css('background','#666');
		$('.2frt_sp span').eq(index5).css('background','#90C221');
		if(index5==1){
			index5=0;
			$('.2frt_ul').css('left',-218);
		}else{
			index5++;
			$('.2frt_ul').css('left','0');
		}
	}
	function f19(){
		ti=setInterval(f17,2000);
	}
	/*2楼动态加载*/
	$.ajax({
		url:'list2.json',
		type:'get',
		success:function(res){
			//alert(res);
			var html1='';
			for(var i=0;i<res.length;i++){
				//alert(res.length);
				if(i==6)
				{
					html1=html1+'<div class="list_lun"><ul class="clear 2frt_ul">'
							+'<li><a href="#"><img src="images/1f_ban2.jpg"/></a></li>'
							+'<li><a href="#"><img src="images/1f_ban1.jpg"/></a></li></ul>'
							+'<div class="clear list_lun_sp 2frt_sp"><span></span><span></span></div></div>';
				}else{
					html1+='<dl style="padding-bottom:0;">'
							+'<dt><a href="#"><img src="'+res[i].src+'"/></a></dt>'
							+'<dd><i>'+res[i].价格+'</i>+<br/><a>'+res[i].类型+'</a><br />'+res[i].优惠+'</dd></dl>';
				}
				$('.list_rt2').html(html1);
			}
		}
	})
	/*4楼轮播图*/
	t=setInterval(f20,2000);
	var index6=0;
	function f20(){
		if(index6==1){
			index6=0;
			$('.f4lt_ul').animate({
			'left':'0px'
		})	
		}else{
			index6++;
			$('.f4lt_ul').animate({
			'left':'-710px'
			})
		}
		$('.f4lt_sp span').css('background','#666');
		$('.f4lt_sp span').eq(index6).css('background','#90C221');
	}
	/*小的轮播图下面的按钮*/
	$('.f4lt_sp span').hover(f21,f22);
	function f21(){
		clearInterval(t);
		index6=$(this).index();
		$('.f4lt_sp span').css('background','#666');
		$('.f4rt_sp span').eq(index6).css('background','#90C221');
		if(index6==1){
			index6=0;
			$('.f4lt_ul').css('left',-710);
		}else{
			index6++;
			$('.f4lt_ul').css('left','0');
		}
	}
	function f22(){
		t=setInterval(f20,2000);
	}
	/*4楼商品列表*/
	$.ajax({
		url:'list4.json',
		type:'get',
		success:function(res){
			//alert(res);
			var html='';
			for(var i=0;i<res.length;i++){
				//alert(res.length);
					html+='<dl><dt><a href="#"><img src="'+res[i].src+'"/></a></dt>'
						+'<dd><i>'+res[i].优惠+'</i><a href="">'+res[i].type+'</a><br/><span>'+res[i].price+'</span></dd></dl>';
			}
			$('.f4_list').html(html);
		},
		error:function(xhr){
			alert(xhr);
		}
	})
	/*5楼轮播图*/
	var index7=0;
	tms=setInterval(f23,2000);
	function f23(){
		//alert(lft);
		if(index7==2){
			index7=0;
		}else{
			index7++;
		}
		var lft=-parseInt($('.f5lt_ul').children().eq(0).css('width'))*index7;
		//alert(lft);
		$('.f5lt_sp span').css('background','#666');
		$('.f5lt_sp span').eq(index7).css('background','#90C221');
		$('.f5lt_ul').animate({
			'left':lft
		})
	}
	/*5楼轮播小按钮*/
	$('.f5lt_sp span').hover(f24,f25);
	function f24(){
		//alert(1)
		clearInterval(tms);
		$('.f5lt_sp span').css('background','#666');
		$(this).css('background','#90C221');
		index7=$(this).index();
		$('.f5lt_ul').css('left',-parseInt($('.f5lt_ul').children().eq(0).css('width'))*index7);
	}
	function f25(){
		//alert(2);
		tms=setInterval(f23,2000);
	}
	/*5楼商品列表*/
	$.ajax({
		url:'list5.json',
		type:'get',
		success:function(res){
			//alert(res);
			var html='';
			for(var i=0;i<res.length;i++){
				//alert(res.length);
					html+='<dl><dt><a href="#"><img src="'+res[i].src+'"/></a></dt>'
					+'<dd><span>'+res[i].price+'</span><br/><a href="#">'+res[i].type+'</a><br />'+res[i].优惠+'</dd></dl>'
			}
			$('.f5_list').html(html);
		},
		error:function(xhr){
			alert(xhr);
		}
	})
	/*尾部左边选项卡*/
	$('.wei_lt_top a').mouseover(function(){
		$('.wei_lt_top a').removeClass('active');
		$(this).addClass('active');
		var p=$(this).index();
		//alert(p);
		$('.wei_lt ul').css('display','none');
		$('.wei_lt ul').eq(p).css('display','block');
	})
	/*6楼轮播*/
	timer_1=setInterval(f26,1000);
	var index_1=7;
	var f6_li=$($('.f6_hua ul').children().eq(7)).clone(true);
		$(f6_li).insertBefore($('.f6_hua ul').children().eq(0));
	function f26(){
		if(index_1==0){
			index_1=7;
			$('.f6_hua ul').css('top',-(parseInt($('.f6_hua ul').children().eq(0).css('height'))+17)*index_1);
		}else{
			index_1--;
		}
		var f6_top=-(parseInt($('.f6_hua ul').children().eq(0).css('height'))+17)*index_1;
		//console.log($('.f6_hua ul').children().eq(0).css('height'))
		//alert(f6_top);
		$('.f6_hua ul').animate({
			'top':f6_top
		})
		
	}
	/*尾部右部选项卡*/
	$('.weibu_rta a').mouseover(function(){
		var rta_index= $(this).index();
		//alert(rta_index);
		$('.weibu_rt ul').children().css('display','none');
		$('.weibu_rt ul').children().eq(rta_index).css('display','block');
		if(rta_index==0){
			$('.weibu_rta').css('background-position','0 0');
		}else{
			$('.weibu_rta').css('background-position','0 -50px');
		}
	})

})
