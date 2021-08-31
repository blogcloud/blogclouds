var jj = {};
//��ʼ��
jj.init = function(){
	jj.events();		//�¼��������
}
//�¼��������
jj.events = function(){
	jj.nav();
	jj.service();
	jj.gotop();
	jj.userInfo();
}

//����
jj.nav = function(){
	var proSortWidth = 0;
	$('.navbar-toggle').click(function(){
		$('body,html').toggleClass('open');
	});
	$('.product-nav li').each(function(){
		proSortWidth += $(this).width() + 40;
	})
	$('.product-nav').width(proSortWidth-20);
	$(".Pro_Anchor ul li a").click(function() {
	    $("html, body").animate({
	      scrollTop: $($(this).attr("href")).offset().top-30 + "px"
	    }, {
	      duration: 500,
	      easing: "swing"
	    });
	    return false;
	});
}

//userInfo
jj.userInfo = function(){
	$('.login li.user > a').click(function () {
		$(this).siblings('dl').toggle();
    })
	$('.login li.user dl').click(function (e) {
		e.stopPropagation();
    })
    $('.login li.user dl').parents('.header').siblings().click(function(){
        $('.login li.user dl').hide();
	})
}

//����
jj.service = function(){
	$('.service > span').click(function(){
    	$('.i-contact').show();
  	});
  	$('.service .i-contact .close').click(function(){
    	$('.i-contact').hide();
  	})
}

// ���ض���
jj.gotop = function(){
	$(window).scroll(function(){
			if($(window).scrollTop()>250){
				$(".gotop").show();
			}else{
				$(".gotop").hide();
			}
		});
	$(".gotop").click(function(){
		$("html,body").stop().animate({"scrollTop":0},500);
	})
}

//dom�������ִ��
$(function(){
	jj.init();
});



