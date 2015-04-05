$(document).ready(function() {
  var Week, subSomething;
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
  subSomething = function() {
    if (document.readyState === "loading") {
      return $("#J_spinner").show();
    } else if (document.readyState === "loaded") {
      return $("#J_spinner").show();
    } else if (document.readyState === "complete") {
      return $("#J_spinner").hide();
    }
  };
  Week = function() {
    var week;
    week = new Date().getDay();
    return $(".cover-img").css("background-image", "url(../img/" + week + ".jpg)");
  };
  Week();
  return document.onreadystatechange = subSomething;
});
