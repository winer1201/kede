$(function(){
	//alert(1);
	/*全部分类的下拉菜单*/
	$('.page_bm_span').mouseover(function(){
		$('.banner_nav').css('display','block');
	})
	$('.page_bm_span').mouseout(function(){
		$('.banner_nav').css('display','none');
	})
	$('.banner_nav').mouseover(function(){
		$('.banner_nav').css('display','block');	
	})
	$('.banner_nav').mouseout(function(){
		$('.banner_nav').css('display','none');	
	})
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
	/*已选条件的按钮*/
	$('.more').click(function(){
		$('.yin').toggleClass('active_yin');
	})
	/*product列表商品加载*/
	var z=0;
	var page;
	function jiazai(res,i){
				var html='';
				html='<li><div><div class="product_list_top"><a class="huoquId" href="xiang.html?id='+res[i].id+'"><img src="'+res[i].src+'"/></a><span>'+res[i].price+'</span><br />'
					+'<a href="#" style="margin-left:4px;">'+res[i].sale+'</a>'
					+'<p>'+res[i].ad+'</p></div><div class="product_list_cer">'
				+'<i></i>有<a>'+res[i].num+'</a>条评论</div><em>包邮</em></div><div class="product_list_bm"><span class="addToChe">加入购物车<i class="product_list_bmi1"></i></span><span>收藏<i class="product_list_bmi2"></i></span></div></li>'
				$('.product_list ul').append($(html));
			}
	$.ajax({
		url:'product.json',
		type:'get',
		success:function(res){
			//alert(res);
			
			 page=Math.ceil(res.length/28);
			//alert(page);
			for(var i=(28*z);i<28*(z+1);i++){
				jiazai(res,i);
			}
			
			/*页数加载*/
			for(var j=1;j<=page;j++){
				var page_n=$('<span>'+j+'</span>');
				$('.yeshu').append(page_n);
			}
			$('.yeshu').children().eq(0).addClass('active');
			/*给上一页添加事件*/
				$('.page_num_a1').click(function(){
					if(z==0){
						z=0;
					}else{
						z--;
						//alert(z);
						$('.product_list ul').children().remove();
						for(var i=(28*z);i<28*(z+1);i++){
							jiazai(res,i);
						}
						$('.yeshu').children().removeClass('active');
						$('.yeshu').children().eq(z).addClass('active');
					}
				})
				/*给下一页添加事件*/
				//alert(z);
				$('.page_num_a2').click(function(){
					if(z==page-1){
						z=page-1;
						//console.log(z,'...');
					}else{
						z++;
						//alert(z);
						$('.product_list ul').children().remove();
						for(var i=28*z;i<28*(z+1);i++){
							//alert(i);
							jiazai(res,i);
						}
						//console.log(z,'......')
						$('.yeshu').children().removeClass('active');
						$('.yeshu').children().eq(z).addClass('active');
					}
				})
				/*页面跳转输入页数*/
				$('.sub_i').click(function(){
					var page_num_intval=$('.page_num_int').val();
					//alert(page_num_intval);
					if(page_num_intval>0&&page_num_intval<4){
						z=page_num_intval-1;
						$('.product_list ul').children().remove();
						for(var i=28*z;i<28*(z+1);i++){
							//alert(i);
							jiazai(res,i);
						}
						$('.yeshu').children().removeClass('active');
						$('.yeshu').children().eq(z).addClass('active');
					}
				})
			/*商品特效加载*/
			$('.product_list ul').children().hover(pro1,pro2)
			function pro1(){
				$(this).children().eq(1).css({
					'display':'block',
					'border':'2px solid #ccc'
				})
				$(this).children().eq(0).addClass('zdex');
			}
			function pro2(){
				$(this).children().eq(1).css({
					'border':'0',
					'display':'none'
					});
				$(this).children().eq(0).removeClass('zdex');
			}
			
			
			/*购物车加载*/
			var zong_num=0;/*商品总的数量临时变量*/
			var zong_num1=0;/*商品总数*/
			//$('.product_list_bm>span').eq(0).click(function(){
			$('.product_list').on('click','.product_list_bm .addToChe',function(){
				/*点击加入购物车添加id*/
				//alert(1);
				var hrefId = $(this).parent().prev().find('.huoquId').attr('href');
				//console.log(hrefId)
				var id = hrefId.substring(hrefId.indexOf('=')+1);
				//alert(id);
				var first=$.cookie('goods')==null?true:false;//判断是否有cookie进行添加
				//是否是第一次添加
				if(first){
					//是第一次就建立json结构
					$.cookie('goods','[{id:'+id+',num:1}]');
					//console.log($.cookie('goods'))
				}else{
					var str_id=$.cookie('goods');
					 var arr_id=eval(str_id);
					 zongji();
					 function zongji(){
						//遍历所有对象。如果id相同就让他的数量增加
						var ispush = true;
						for(var key in arr_id){
							if(arr_id[key].id==id){
								arr_id[key].num=arr_id[key].num+1;
								//console.log(arr_id[key].num);
								var cookieStr=JSON.stringify(arr_id);
								$.cookie('goods',cookieStr);
								ispush = false;
							}
							
						}
						if(ispush){
		
								arr_id.push({'id':id,'num':1});
								var cookieStr=JSON.stringify(arr_id);
								$.cookie('goods',cookieStr);
								//console.log($.cookie('goods'));
			
						}
					}
				}
						/*计算总的商品值*/
						var str_id1=$.cookie('goods');
						var arr_id1=eval(str_id1);
						for(var attr in arr_id1){
							//console.log(arr_id);
							zong_num+=arr_id1[attr].num;
						}
							zong_num1=zong_num;
							$('.shop').children('span').text(zong_num1);
							//console.log($.cookie('zong_num1'));
							$.cookie('zong_num1',zong_num1);
							zong_num=0;/*回复原始值*/
							//console.log(zong_num1);
			})
		}
	})
	/*人气推介按钮功能*/
	$('.tj_i1').click(function(){
		if($('.rt_yd').css('left')=='0px'){
			//alert(1);
			$('.rt_yd').css('left','0');
			//console.log(width);
		}else{
			//alert($('.rt_yd').css('left'));
			var width=$('.rt_yd').children().eq(0).width()+12;
			var tleft=parseInt($('.rt_yd').css('left'))+width;
			//console.log(tleft);
			$('.rt_yd').animate({
				'left':tleft
			})
		}
	})
	$('.tj_i2').click(function(){
		if($('.rt_yd').css('left')<='-1659px'){
			//alert(1);
			$('.rt_yd').css('left','-1659px');
			//console.log(width);
		}else{
			//alert($('.rt_yd').css('left'));
			var width=$('.rt_yd').children().eq(0).width()+12;
			var tleft=parseInt($('.rt_yd').css('left'))-width;
			//console.log(tleft);
			$('.rt_yd').animate({
				'left':tleft
			})
		}
	})
	/*隐藏人气推介按钮*/
	$('.content_rt_top').mouseover(function(){
		$('.content_rt_top i').css('display','block')
	})
	$('.content_rt_top').mouseout(function(){
		$('.content_rt_top i').css('display','none')
	})
})
