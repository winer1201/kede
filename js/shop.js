$(function(){
	//alert(1);
	
	/*加载商品*/
	$.ajax({
		url:'product.json',
		type:'get',
		success:function(res){
			var goods_zifu=eval($.cookie('goods'));
			//console.log(goods_zifu.length);
			var html='';
			if(goods_zifu){
				for(var k=0;k<goods_zifu.length;k++){
					
					for(var h=0;h<res.length/3;h++){
						if(goods_zifu[k].id==res[h].id){
							var html='';
							var cook_num=goods_zifu[k].num;
							var xiaoji=res[h].price.substring(1)*cook_num;
							//console.log(xiaoji);
							html='<li class="clear"id='+res[h].id+'><div class="che_img"><img src="'+res[h].src+'"/></div><p>'+res[h].sale+'</p><div class="gou_rt"><div class="addnum">'
							+'<span class="jian_lt">-</span><input type="text"value="'+cook_num+'"class="shop_input"/><span class="jian_rt">+</span></div>'
							+'<div class="che_pri"><span>'+res[h].price+'</span><i>促销优惠<em></em></i><b>100积分抵扣1元，最高抵扣10元<em></em></b></div><div class="xiaoji">¥'+xiaoji+'</div><div class="caozuo"><a>加入收藏夹</a><br/><a class="delet_btn">删除</a></div></div></li>'
							$('.delet_ul').append(html);
						}
					}
					
				}
			}	
			/*下面显示的总的数量*/
			var gong1=0
			for(var t=0;t<$('.delet_ul').children().length;t++){
					//console.log($('.delet_ul').children().length);
					gong1+=parseInt($('.delet_ul').children().eq(t).find('input').val());
					//console.log($('.delet_ul').children().eq(t))
				}
				$('.quan_num span').html(gong1);
			/*商品总价*/
			var zongpri=0
			for(var t=0;t<$('.delet_ul').children().length;t++){
					//console.log($('.delet_ul').children().length);
					zongpri+=parseInt($('.delet_ul').children().eq(t).find('.xiaoji').text().substring(1));
					//console.log($('.delet_ul').children().eq(t))
				}
			$('.quan_xiang li').eq(0).children('p').html('¥'+zongpri+'.00');
			$('.zongji').html('¥'+zongpri+'.00');
			/*c促销优惠隐藏功能*/
		$('.delet_ul').on('mouseover','.che_pri i',function(){
			$(this).next().css('display','block');
		})
		$('.delet_ul').on('mouseout','.che_pri i',function(){
			$(this).next().css('display','none');
		})
		$('.delet_ul').on('mouseover','.che_pri b',function(){
			$(this).css('display','block');
		})
		$('.delet_ul').on('mouseout','.che_pri b',function(){
			$(this).css('display','none');
		})
		/*数量按钮*/
		/*左按钮*/
		$('.delet_ul').on('click','.jian_lt',function(){
			//alert(1);
			var gong=0;
			var addnum_int=$(this).siblings('input').val();
			//alert(addnum_int);
			if(addnum_int==1){
				//alert(1)
				$('.delet').css('display','block');
				$(this).val('1');
			}else{
				addnum_int--;
				$(this).siblings('input').val(addnum_int);
				var xiaoji=addnum_int*$(this).parent().siblings('.che_pri').children('span').text().substring(1);
				//console.log(xiaoji);
				$(this).parent().siblings('.xiaoji').html('¥'+xiaoji);
				for(var t=0;t<$('.delet_ul').children().length;t++){
					//console.log($('.delet_ul').children().length);
					gong+=parseInt($('.delet_ul').children().eq(t).find('input').val());
					//console.log($('.delet_ul').children().eq(t))
				}
				$('.quan_num span').html(gong);
				$.cookie('zong_num1',gong);
				if(goods_zifu){
					for(var p=0;p<goods_zifu.length;p++){
						if(goods_zifu[p].id==$(this).parent().parent().parent().attr('id') ){
							goods_zifu[p].num=$(this).next().val();
							var cookieStr=JSON.stringify(goods_zifu);
							$.cookie('goods',cookieStr);
							
						}
					}
				}	
				$('.shop span').html($.cookie('zong_num1'));
				/*商品总价*/
				var zongpri=0
				for(var t=0;t<$('.delet_ul').children().length;t++){
						//console.log($('.delet_ul').children().length);
						zongpri+=parseInt($('.delet_ul').children().eq(t).find('.xiaoji').text().substring(1));
						//console.log($('.delet_ul').children().eq(t))
					}
				$('.quan_xiang li').eq(0).children('p').html('¥'+zongpri+'.00');
				$('.zongji').html('¥'+zongpri+'.00');
				}
		})
		/*右按钮*/
		$('.delet_ul').on('click','.jian_rt',function(){
			//alert(1);
			var gong=0;
			var addnum_int=$(this).siblings('input').val();
			//alert(addnum_int);
				addnum_int++;
				$(this).siblings('input').val(addnum_int);
				var xiaoji=addnum_int*$(this).parent().siblings('.che_pri').children('span').text().substring(1);
				$(this).parent().siblings('.xiaoji').html('¥'+xiaoji);
				for(var t=0;t<$('.delet_ul').children().length;t++){
					//console.log($('.delet_ul').children().length);
					gong+=parseInt($('.delet_ul').children().eq(t).find('input').val());
					//console.log($('.delet_ul').children().eq(t))
				}
				$('.quan_num span').html(gong);
				$.cookie('zong_num1',gong);
				$('.shop span').html($.cookie('zong_num1'));
				/*变换商品数量里面的cooki值*/
				if(goods_zifu){
					for(var p=0;p<goods_zifu.length;p++){
						if(goods_zifu[p].id==$(this).parent().parent().parent().attr('id') ){
							goods_zifu[p].num=$(this).prev().val();
							var cookieStr=JSON.stringify(goods_zifu);
							$.cookie('goods',cookieStr);
							
						}
					}
				}	
				/*商品总价*/
				var zongpri=0
				for(var t=0;t<$('.delet_ul').children().length;t++){
						//console.log($('.delet_ul').children().length);
						zongpri+=parseInt($('.delet_ul').children().eq(t).find('.xiaoji').text().substring(1));
						//console.log($('.delet_ul').children().eq(t))
					}
				$('.quan_xiang li').eq(0).children('p').html('¥'+zongpri+'.00');
				$('.zongji').html('¥'+zongpri+'.00');
		})
		/*删除按钮*/
		$('.delet_ul').on('click','.delet_btn',function(){
			//alert(1);
			$(this).parent().parent().parent().remove();
			$('.delet').css('display','none');
			var gong=0;
			for(var t=0;t<$('.delet_ul').children().length;t++){
				//console.log($('.delet_ul').children().length);
				gong+=parseInt($('.delet_ul').children().eq(t).find('input').val());
				//console.log($('.delet_ul').children().eq(t))
			}
			$('.quan_num span').html(gong);
			$.cookie('zong_num1',gong);
			$('.shop span').html($.cookie('zong_num1'));
			/*商品总价*/
				var zongpri=0
				for(var t=0;t<$('.delet_ul').children().length;t++){
						//console.log($('.delet_ul').children().length);
						zongpri+=parseInt($('.delet_ul').children().eq(t).find('.xiaoji').text().substring(1));
						//console.log($('.delet_ul').children().eq(t))
					}
				$('.quan_xiang li').eq(0).children('p').html('¥'+zongpri+'.00');
				$('.zongji').html('¥'+zongpri+'.00');
			/*变换商品值*/
			if(goods_zifu){
				for(var p=0;p<goods_zifu.length;p++){
					if(goods_zifu[p].id==$(this).parent().parent().parent().attr('id') ){
						goods_zifu.splice(p,1);
						var cookieStr=JSON.stringify(goods_zifu);
						$.cookie('goods',cookieStr);
						
					}
				}
			}	
		})
		$('.delet').on('click','.delet_btn1',function(){
			//alert(1);
			$('.delet_ul').children().remove();
			$('.delet').css('display','none');
			$.cookie('goods',null);
			$.cookie('zong_num1',null);
			$('.quan_num span').html('0');
			$('.shop span').html('0');
			$('.quan_xiang li').eq(0).children('p').html('0');
			//console.log($.cookie('goods'));
		})
		/*X按钮*/
		$('.bushan').click(function(){
			$('.delet').css('display','none');
			$('.zongji').html('0');
		})	
		}
	})
	
})
