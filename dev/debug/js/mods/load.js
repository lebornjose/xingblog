define(function(){
  var load=function(){
    $("#J_spinner").show();
    this.subSomething = function() {
      if (document.readyState === "loading") {
        return $("#J_spinner").show();
      } else if (document.readyState === "loaded") {
        return $("#J_spinner").show();
      } else if (document.readyState === "complete") {
        return $("#J_spinner").hide();
      }
    };
    this.week = function() {
      var week;
      week = new Date().getDay();
      return $(".cover-img").css("background-image", "url(http://xinblog.oss-cn-qingdao.aliyuncs.com/" + week + ".jpg)");
    };
  };

  return{
    load:load
  }
});
