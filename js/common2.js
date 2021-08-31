//update by fei76 141113
function _(id) {
	return document.getElementById(id);
}
function showNav(num1){
		_("nav"+num1).style.display='block';
		_("li"+num1).className="act_menunew";
}
function closeNav(num1){
		_("nav"+num1).style.display='none';
		_("li"+num1).className="";
}
function showMenu(num1){
		_("nav"+num1).style.display='block';
}
function closeMenu(num1){
		_("nav"+num1).style.display='none';
}
//头部QQ图标变色效果
function qqIcoChange(){
	$('#qq_number').hover(function(){
		$(this).css('background','url(/images/qq_ico_dj.jpg) 20px 32px no-repeat')
	},
	 function(){
	 	$(this).css('background','url(/images/qq_ico_03.jpg) 20px 32px no-repeat')
	 }
	);

}
//头部tel图标变色效果
function phoneIcoChange(){
	  $('#phone_number').hover(function(){
		  $(this).css('background','url(/images/ph_tb_hover.gif) 0px 32px no-repeat')
	  },
	   function(){
		  $(this).css('background','url(/images/ph_tb.jpg) 0px 32px no-repeat')
	   }
	  );
	//头部箭头选旋转效果
	    $('.message li').hover(function(){
		   
	         $(this).find('.arrows').css('background','url(/images/arrows.png) 3px 5px  no-repeat #fff'); 
		   
		 },
	    function(){
	    
			 $(this).find('.arrows').css('background','url(/images/arrows_03_y.png) 3px 5px  no-repeat #F2F2F2'); 
		 }
	   );
	//微信区域显示效果
	  $('#idcs_phone_tianhu,#idcs_bbs_tianhu').hover(function(){
		  $(this).find('.phone_bg').css('border','1px solid #ccc').css('background','#fff');
	      $(this).find('.phone_bg .message_bg').css('display','block');
		  $(this).find('.photo_img img').stop(true).animate({left:'0px',top:'-25px'},200);
	   },
	   	  function(){
		   $(this).find('.phone_bg').css('border','1px solid #F2F2F2').css('background','#F2F2F2');
	       $(this).find('.phone_bg .message_bg').css('display','none');
		   $(this).find('.photo_img img').stop(true).animate({left:'0px',top:'0px'},200);
	   }
	   );
	   //活动专区域显示效果
	  $('#idcs_bbs_tianhu').hover(function(){
		  $(this).find('.phone_bg').css('border','1px solid #ccc').css('background','#fff');
	      $(this).find('.phone_bg .idcs_bbs_window').css('display','block');
		  $(this).find('.photo_img img').stop(true).animate({left:'0px',top:'-25px'},200);
	   },
	   	  function(){
		   $(this).find('.phone_bg').css('border','1px solid #F2F2F2').css('background','#F2F2F2');
	       $(this).find('.phone_bg .idcs_bbs_window').css('display','none');
		   $(this).find('.photo_img img').stop(true).animate({left:'0px',top:'0px'},200);
	   }
	   );
	 //产品区域
	  $('.product_tianhu').hover(function(){
		  $('#top_link .product_inner').css('border','1px solid #ccc').css('background','#fff');
	      $('.product_inner .product_bg').css('display','block');
	   },
	   	  function(){
		  $('#top_link .product_inner').css('border','1px solid #F2F2F2').css('background','#F2F2F2');
	      $('.product_inner .product_bg').css('display','none');
	   }
	   );	 	
}
$(function(){
	  phoneIcoChange()//电话图标效果
	  qqIcoChange()//QQ图标效果
});
//qq
function opneq(){
var qtemp=document.createElement("div");
qtemp.id="qdiv";
qtemp.style.display='none';
document.body.appendChild(qtemp);
document.getElementById("qdiv").innerHTML="<iframe src=\"tencent://message/?Menu=yes&amp;amp;uin=434658198&amp;amp;Service=58&amp;amp;SigT=A7F6FEA02730C988BEE7FF2FB0DD26C6AE2C668E5071881E7ACCC030A841B45A2A4D58A51C445F786B9B654BD3846F20BC9DB5F806BCE1158FA6C136927CBB4615923987D63E9CE9F3C1556AEB5913F60C5EF3B2A9AB7E3DC6E7A1E85DFC7A0CBFFA151E16D76690A68822C63FDFD019813DE1C47FB1D835&amp;amp;SigU=30E5D5233A443AB2A6755976D414125D0C87D3883C3CFE007C9D8C5BB47CCAA73CCB78CD1317763AB6076B2E4E5892C17186C64FA22D0EADE1A3F2A8B7D8DECB9E32F67A0ADE6741\"></iframe>"};


//导航下拉的效果
/*$(document).ready(function(){					   
$(".sed_left_menu_show").hide();
$(".sed_all").hover(function(){
	$(".sed_left_menu_show").show();
	},function(){$(".sed_left_menu_show").hide();})
	
$(".sed_left_menutab").hide();
$(".sed_left_menu dd").hover(function(){
	$(this).find(".sed_left_menutab").show();
	$(this).addClass("sel_sed");
	$(this).siblings().removeClass("sel_sed");

	//$(".sed_left_menutab").siblings().hide();
	},function(){$(".sed_left_menutab").hide();
	$(this).removeClass("sel_sed");

	})

});	
*/
$(document).ready(function(){
var url=window.location.href;

if(false){

	$(".sed_left_menu").hide();				
	}else{
		
		$(".sed_left_menu").show();		
					}
$(".sed_all").hover(function(){
			$(".sed_left_menu").show();
			},function(){
				if(true){
					
					}else{
				$(".sed_left_menu").hide();
					}
			})
		$(".sed_left_menutab").hide();
		$(".sed_left_menu dd").hover(function(){
			$(this).find(".sed_left_menutab").show();
			$(this).addClass("sel_sed");
			$(this).siblings().removeClass("sel_sed");
			},function(){
				$(".sed_left_menutab").hide();
				$(this).removeClass("sel_sed");
			})


});	
function killerr(){
 return true;
}
window.onerror=killerr;

