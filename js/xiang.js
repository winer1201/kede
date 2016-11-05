$(function(){
	//alert(1);
	/*微信二维码隐藏*/
	$('.weixin').mouseover(function(){
		$('.wei_p').css('display','block');
	})
	$('.weixin').mouseout(function(){
		$('.wei_p').css('display','none');
	})
		var windlocal=window.location.toString();
		//console.log(windlocal);
		var num_zi=windlocal.indexOf('=');
		//alert(num_zi);
		var id=windlocal.substring(num_zi+1);
		//console.log(id);
		var zong_num=0;/*商品总的数量临时变量*/
		var zong_num1=0;/*商品总数*/
		$('.btn_a2').click(function(){
			/*点击加入购物车添加id*/
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
						$.cookie('zong_num1',zong_num1);
						zong_num=0;/*回复原始值*/
						//console.log(zong_num1);
		})
		$.ajax({
			url:'list.json',
			type:'get',
			success:function(res){
				//alert(res.length);
			creat_lis(res,id);
			fdj();
			var zong_num_xian = $.cookie('zong_num1')?$.cookie('zong_num1'):0;
			//console.log(zong_num_xian)
			$('.shop').children('span').text(zong_num_xian);
			
			}
		})
		$.ajax({
			url:'product.json',
			type:'get',
			success:function(res){
				//alert(res.length);
			creat_lis(res,id);
			fdj();
			}
		})
	
	/*下面的选项卡*/
	$('.pingjia_rt_top a').click(function(){
		$('.pingjia_rt_top a').toggleClass('active');
		$('.pingjia_rt_top i').css('display','none');
		$(this).children().css('display','block');
		$('.waibao').children().css('display','none');
		var waiindex=$(this).index();
		$('.waibao').children().eq(waiindex).css('display','block');
	})
	/*上面的商品数量按钮*/
	$('.sele_num i').eq(0).click(function(){
		var sele_input=$('.sele_input').val();
		if(sele_input==1){
			$('.sele_input').val('1');
		}else{
			sele_input--;
			$('.sele_input').val(sele_input);
		}
	})
	$('.sele_num i').eq(1).click(function(){
		var sele_input=$('.sele_input').val();
			sele_input++;
			$('.sele_input').val(sele_input);
	})
	function creat_lis(res){
	
		for(var i=0;i<res.length;i++){
			if(id==res[i].id){
				var res_dui=res[i];
				//console.log(res_dui);
				if(res[i].price){
					var html2=''
					html2+='<h4>'+res[i].sale+'</h4><span>会员专享价，仅'+res[i].price+'元/套</span>'
					$('.details_rt_top').html(html2);
					$('.kd_90').html(res[i].price+'.00');
				}
				var html='';
				html+='<li><img src="'+res[i].src1+'"></li>'
					+'<li><img src="'+res[i].src2+'"></li>'
					+'<li><img src="'+res[i].src3+'"></li>'
					+'<li><img src="'+res[i].src4+'"></li>'
					+'<li><img src="'+res[i].src5+'"></li>'
				$('.mask_ul').append(html);
				$('.mask_ul').children().eq(0).addClass('active');
				$('.suotu_ul').append(html);
				$('.fdjd_ul').append(html);
				$('.fdjd_ul').children().eq(0).addClass('active');
				break;
			}
		}
	}	
	function fdj(){
			/*放大镜变换图片功能*/
		$('.suotu li').mouseover(function(){
			//alert(1);
			var deta_index=$(this).index();
			$('.details_img li').removeClass('active');
			$('.details_img li').eq(deta_index).addClass('active');
			$('.fdjd li').removeClass('active');
			$('.fdjd li').eq(deta_index).addClass('active');
		})
		
		/*放大镜放大*/
		$('.box_mask').mousemove(function(evt){
			var img_lt=evt.offsetX-$('.fdjyd').width()/2;
			//console.log($('.fdjyd').width()/2);
			var img_rt=evt.offsetY-$('.fdjyd').height()/2;
			//console.log(img_rt);
			/*边界最大值*/
			var maximg_lt=$('.details_img').width()-$('.fdjyd').width();
			//console.log(maximg_lt);
			var maximg_rt=$('.details_img').height()-$('.fdjyd').height();
			img_lt=img_lt<0? 0:img_lt;
			img_rt=img_rt<0? 0:img_rt;
			img_lt=img_lt>maximg_lt ? maximg_lt:img_lt;
			img_rt=img_rt> maximg_rt ? maximg_rt:img_rt;
			/*让小灰块运动起来*/
			$('.fdjyd').css('left',img_lt);
			$('.fdjyd').css('top',img_rt);
			/*右面放大功能*/
			var propLeft=img_lt/maximg_lt;
			var propTop=img_rt/maximg_rt;
			//console.log(propLeft+" "+propTop);
			var right_maxLeft=$('.fdjd_yd').width()-$('.fdjd').width();
			var right_maxTop=$('.fdjd_yd').height()-$('.fdjd').height();
			$('.fdjd_yd').css('left',-propLeft*right_maxLeft);
			$('.fdjd_yd').css('top',-propTop*right_maxTop);
			/*实现放大镜移入显示移出隐藏*/
			$('.details_img').mouseover(function(){
				$('.fdjyd').css('display','block');
				$('.fdjd').css('display','block');
			})
			$('.details_img').mouseout(function(){
				$('.fdjyd').css('display','none');
				$('.fdjd').css('display','none');
			})
		})
	}
	/*成功加入购物车*/
	$('.delet').on('click','.bushan',function(){
		$('.delet').css('display','none');
	})
	$('.btn_a2').click(function(){
		$('.delet').css('display','block');
	})
})




