define(function() {
  var top=function(){
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        return $(".go-top").css({
          bottom: "110px"
        });
      } else {
        return $(".go-top").css({
          bottom: "-110px"
        });
      }
    });
    $(".go-top").click(function() {
      return $("body,html").animate({
        scrollTop: 0
      }, 400);
    });
  };

  return {
    top: top
  };
});
