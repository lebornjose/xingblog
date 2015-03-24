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
  Week = ->
    week=new Date().getDay();
    $(".cover-img").css("background-image","url(../img/"+week+".jpg)"); 
  Week();

  		

  		
