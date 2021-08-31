
;(function($){
  "use strict";


  /* ----------------------------------------------------------- */
  /*  1. Main Navigation
  /* ----------------------------------------------------------- */
 
//   按钮点击效果
$(".proselect_infor .nav li").on("click",function(){
    $(this).addClass("active").siblings().removeClass("active");
})

 $('.default').dropkick();
  // Menu drop down effect
  $('.dropdown-toggle').dropdownHover().dropdown();

  $(document).on('click', '.fhmm .dropdown-menu', function(e) {
      e.stopPropagation()
  });

  $('.navbar-toggle').on('click', function () {
    $('.navbar-collapse').collapse('toggle');
  });
//左侧导航条

$(".product_nav ul li a").bind("click",function(){
    if($(this).parent().hasClass("active")){
        $(this).parent().removeClass("active");
        $(this).parent().find(".pro_nav_sec").slideUp(3000);
         $(this).parent().find(".icon").removeClass("icon-arrow-down").addClass("icon-arrow-up");
        minHcon();
    }
    else{
         $(this).parent().addClass("active");
        $(this).parent().find(".pro_nav_sec").slideDown(5000);
         $(this).parent().find(".icon").removeClass("icon-arrow-up").addClass("icon-arrow-down");
        minHcon();
    }
})


//广告关闭
    $('.off_active').click(function(){
       $(this).parents(".active_buy").remove();
    });  

   // Back to Top
  $("#back-top").hide();
  
  if($(window).width() > 991) {
      $('body').append('<div id="back-top"><a href="#top"><i class="fa fa-chevron-up"></i></a></div>')
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#back-top').fadeIn();
          } else {
              $('#back-top').fadeOut();
          }
      });

      // scroll body to 0px on click
      $('#back-top a').click(function(e) {
          e.preventDefault();
          $('body,html').animate({
              scrollTop: 0
          }, 400);
          return false;
      });
  };
$(window).resize(function(){
     adaptive();
});
  //弹出框根据屏幕高度自适应
function  adaptive(){
    var wh = $(window).height();
    //console.log(wh);
    var panel_H = $(".layui-layer-page .layui-layer-content .layer_panel").height()+20,
        content_H = $(".layui-layer-page .layui-layer-content").height(),
        title_H = 42,
        btn_H = 49,
        modalh = panel_H + title_H + btn_H;
    var dfh = wh - modalh;
    if(dfh <0){
        $(".layui-layer-page").height(wh);
        $(".layui-layer-page").css('top', '0');
        $(".layui-layer-page .layui-layer-content").height(wh - title_H - btn_H);
        $(".layui-layer-page .layui-layer-content").css({"overflow-y":"scroll","overflow-x":"hidden"});
    } else{
        if (content_H < panel_H) {
            $(".layui-layer-page").height(panel_H + title_H + btn_H);
            $(".layui-layer-page .layui-layer-content").css({"height": panel_H});
        } else {            
            $(".layui-layer-page").height(panel_H + title_H + btn_H);
            $(".layui-layer-page .layui-layer-content").css({"height": panel_H, "overflow-y":"auto"});
        }
        var layer_H = $(".layui-layer-page").height();
        var layer_top = (wh - layer_H)/2;
        $(".layui-layer-page").css('top', layer_top);   
    };
}
function minHcon(){
    var newH = $(".product_nav ul").height() + 58;
        var conH = $(".product_panel").height();
        var minH = newH - conH;
       //console.log(minH);
        if( minH > 0 ){
            $(".product_main .container:first-child").css("min-height", newH +"px")
        }
        else{
            $(".product_main .container:first-child").css("min-height", conH +"px")
        }
}

$(".Pro_Anchor ul li a , .video_nav dl dd a").click(function() {
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top-30 + "px"
    }, {
      duration: 500,
      easing: "swing"
    });
    return false;
  });


})(jQuery);