$(function(){
	$('.login_sub').click(function(){
		var userID=$('.login_p1 input').val();
		var password=$('.login_p2 input').val();
		$.ajax({
			url:'http://datainfo.duapp.com/shopdata/userinfo.php',
			type:'post',
			data:{
					status:"login",
					userID:userID,
					password:password
				},
			success:function(res){
				switch(res){
							case '0':$('.login_p1 span').html('用户名不存在或者密码错误');break;	//用户名不存在
							case '2':$('.login_p1 span').html('用户名不存在或者密码错误');break;	//用户名密码不对
							default:$.cookie('username',userID);
									window.location.href='index.html';break;	//成功
				}
			}	
		})
	})	
	/*//alert($.cookie('name'));
	$('.login_sub').click(function(){
		//alert($('.login_p1 input').val());
		//alert($('.login_p2 input').val());
		var login_cook=$.cookie('name');
			login_cook1=$.cookie('name1');
			//alert(login_cook);
			//alert(login_cook1);
		if((login_cook==$('.login_p1 input').val())&&(login_cook1==$('.login_p2 input').val()))
		{
			window.location.href='index.html';
		}else{
			$('.login_p1 span').html('用户名不存在或者密码错误')
		}
		
	})*/
	
})
