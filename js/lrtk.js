$(function(){
	$('#close_im').bind('click',function(){
		$('#main-im').css("height","0");
		$('#im_main').hide();
		$('#open_im').show();
	});
	$('#open_im').bind('click',function(e){
		$('#main-im').css("height","272");
		$('#im_main').show();
		$(this).hide();
	});
	$('.go-top').bind('click',function(){
		$(window).scrollTop(0);
	});
	$(".weixing-container").bind('mouseenter',function(){
		$('.weixing-show').show();
	})
	$(".weixing-container").bind('mouseleave',function(){        
		$('.weixing-show').hide();
	});


	$(".open_phone").hover(function(){
      $(".phone_panel").show();
    },function(){
      $(".phone_panel").hide();
    })

    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $(".to_top").fadeIn(500);
        }
        else
        {
            $(".to_top").fadeOut(100);
        }
    });
    $(".to_top").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    });
	
	$('.open_phone').on('click',function(){
		$(".phone_panel").toggle();
	})

});