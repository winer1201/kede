$(function(){
	/*验证用户名*/
		var flag=false;
		var flag1=false;
		var flag2=false;
		var flag3=false;
		var flag4=false;
		var word_val;
		$('#register_user').blur(function(){
			var reg_userval=$('#register_user').val();
			//console.log(reg_userval);
			var reg_em_ck=/^\w+@\w+(\.\w+)+$/;
			var	reg_mob=/^[1]\d{10}$/;
			var reg_num=/^[^1][a-zA-Z0-9]{3,19}$/;
			var reg_lt=/^[^1][a-zA-Z0-9]+$/;
			var letter=reg_lt.test(reg_userval);
			//alert(letter);
			var num=reg_num.test(reg_userval);
			//alert(num);
			var reg_length=/[a-zA-Z0-9]{4,20}$/
			var len=reg_length.test(reg_userval);
			//alert(len);
			var em_ck=reg_em_ck.test(reg_userval);
			var mob=reg_mob.test(reg_userval);
			//alert(mob);
			//alert(em_ck);
			if(reg_userval=="")
			{
				//alert(1);
				$('.p2 span').html('请输入用户名');
				flag=false;
				return false;
			}else if(em_ck||mob||num)
			{	//alert(1);
				$('.p2 span').html('');
				flag=true;
				return true;	
			}else if(!letter){
				$('.p2 span').html('账号名只能为邮箱/手机号/第一位非数字1的字母数字组合');
				flag=false;
				return false;
			}
			else if(!len){
				$('.p2 span').html('账号的长度在4至20个字符之间');
				flag=false;
				return false;
			}
		})
		/*验证密码*/
		$('#word').blur(function(){
			var word_ck=/^[a-zA-Z0-9]{6,12}$/;
			word_val=$('#word').val();
			//alert(word_val);
			var word_check=word_ck.test(word_val);
			if(word_val=='')
			{
				$('.pass_reg span').html('请输入密码');	
				flag1=false;
				return false;
			}
			else if(!word_check)
			{
				$('.pass_reg span').html('密码由英文字母、数字组成，长度6-12位.');	
				flag1=false;
				return false;
			}else
			{
				$('.pass_reg span').html('');
				flag1=true;
				return true;
			}
		})
		/*确认密码*/
		$('.pass2_reg input').blur(function(){
			var pass2_val=$('.pass2_reg input').val();
			//alert(pass2_val);alert(word_val);
			//alert(pass2_val==word_val);
			if(pass2_val!=word_val)
			{	
				$('.pass2_reg span').html('两次输入的密码不一致');	
				flag2=false;
				return false;
			}else{
				$('.pass2_reg span').html('');
				flag2=true;
				return true;
			}
		})
		/*验证码生成*/
		var arr=['images/code1.png','images/code2.png','images/code3.png','images/code4.png',
		'images/code5.png','images/code6.png'];
		var arr1=['viec','nfgx','slms','fnjx','vwwl','aoba'];
		function ram(){
			return parseInt(Math.random()*5);
		}
		var k=ram();
		//alert(k);
		$('.yancode').css('background','url('+arr[k]+')'+' '+'no-repeat') ;
		$('.yancode').click(function(){
			k=ram();
			//alert(k);
			$('.yancode').css('background','url('+arr[k]+')'+' '+'no-repeat') ;
		})
		/*输入验证码判断*/
		$('.ide_code input').blur(function(){
			var ide_code_pt=$('.ide_code input').val();
			//alert(ide_code_pt);
				ide_code_pt=ide_code_pt.toLowerCase();
				//alert(ide_code_pt)
			if(ide_code_pt=='')
			{
				$('.ide_code span').html('请输入验证码');
				flag3=false;
				return false;
			}else if(ide_code_pt!=arr1[k]){
				$('.ide_code span').html('验证码错误');
				flag3=false;
				return false;
			}else{
				$('.ide_code span').html('');
				flag3=true;
				return true;
			}
		})
		/*拖拽验证*/
		$('#slider').bind('mousedown',down);
		function down(evt){
			//console.log($('#slider'));
			var disx=evt.offsetX;
			var disy = evt.offsetY;
			console.log(disx+' '+111);
			$(document).bind({mousemove:a,mouseup:b});
			function a(evt){
				
				//console.log($('.slide').get(0).offsetLeft);
				
				var lt = evt.clientX-$('.slide').get(0).offsetLeft-disx;
				
				$('#slider').css('top',-1);
				
				//console.log(evt.clientX+' '+222);
				/*限制拖拽范围*/
				lt = lt<0? 0 : lt;
				
				/*lt=lt>$('.slide').width()-$('#slider').width()+1?
				$('.slide').width()-$('#slider').width()+1:lt;*/
				
				if(lt>=$('.slide').width()-$('#slider').width()+1){
					
					lt=$('.slide').width()-$('#slider').width()+1;
					
					$('#slider').unbind();
					
					$(document).unbind();
					
					$('#sliderdiv').html('验证通过');
					flag4=true;
					$('.sub').css('background','#f60');
					$('.sub').hover(function(){
						$('.sub').css('background','#f80');
					},function(){
						$('.sub').css('background','#f60');
						
					})
					/*给提交按钮添加事件*/
					$('.sub').click(function(){
						var userID=$('#register_user').val();
						var	password=$('#word').val();
						//alert(flag);
						//alert(flag1);
						//alert(flag2);
						//alert(flag3);
						//alert(flag4);
						//alert(flag&&flag1&&flag2&&flag3&&flag4);
						if(flag&&flag1&&flag2&&flag3&&flag4)
						{
							$.ajax({
								url:'http://datainfo.duapp.com/shopdata/userinfo.php',
								type:'post',
								data:{
									status:"register",
									userID:userID,
									password:password
								},
								success:function(res){
									switch(res){
										case '0':alert('用户名重名');break;	//重名
										case '1':window.location.href='login.html';break;	//成功
										case '2':alert('我们的系统出现一些问题');break;	//系统出问题
									}
								}
							})
							
						}
					})
															
				}else{flag4=false;}
				
				$('#slider').css('left',lt);
				
				$('#sliderdiv').css('width',lt);
				

				//console.log($('#slider').offset().top);
				//console.log(evt.offsetX-disx);
				//console.log(1);
				
				return false;
				
			}
			function b(evt){
				
				$(document).unbind();
				
			}
		
		}
		
		
})
