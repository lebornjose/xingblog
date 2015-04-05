$(document).ready ->
  $(window).scroll ->
    if($(this).scrollTop() > 100) 
      $(".go-top").css({ bottom: "110px"});
    else
      $(".go-top").css({bottom: "-110px"});
  $(".go-top").click ->
  	$("body,html").animate
  		scrollTop: 0
  		400 
  # 网页加载实现动画效果
  subSomething = ->
    if(document.readyState == "loading") #当前页面加载状态
      $("#J_spinner").show();
    else if (document.readyState == "loaded")
      $("#J_spinner").show();
    else if (document.readyState == "complete")
      $("#J_spinner").hide();
  Week = ->
    week=new Date().getDay();
    $(".cover-img").css("background-image","url(../img/"+week+".jpg)"); 
  Week();
  document.onreadystatechange = subSomething;

  		

  		
