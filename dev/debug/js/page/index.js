$(document).ready(function() {
  var Week;
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
  Week = function() {
    var week;
    week = new Date().getDay();
    return $(".cover-img").css("background-image", "url(../img/" + week + ".jpg)");
  };
  return Week();
});
