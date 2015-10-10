define(function(){
  var getLocaltime = function(time) {
    var date, date1;
    date = new Date(parseInt(time) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
    return date1 = date.substring(0, date.length - 7);
  };
  var more=function(){
    $("#J_page").click(function() {
      var page, str;
      $(this).text("正在努力加载");
      str = "";
      page = $(this).attr('data');
      return $.getJSON("http://www.leborn.me/blog/home/page/" + page, function(data) {
        var i, _i, _len;
        console.log(data);
        if (data.length === 0) {
          alert("亲,最后一页了");
          return;
        }
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          i = data[_i];
          str += "<li class='clearfix'><article>";
          str += "<a href='/blog/home/detail/" + i.articleId + "' class='title'>" + i.title + "</a>";
          str += '<div class="content">' + i.summary + '</div>';
          str += '<div class="article-info"><span><i class="icon-calendar"></i>' + getLocaltime(i.pubtime) + '</span><span><i class="icon-book"></i>' + i.keyword + '</span><span><i class="icon-comments-alt"></i>' + i.reads + '</span><span><i class="icon-heart-empty"></i>' + i.ispost + '</span></div>';
          str += "</article></li>";
        }
        $('.x-list').append(str);
        page++;
        $("#J_page").text("点击加载更多");
        return $("#J_page").attr({
          data: '' + page + ''
        });
      });
    });
  };
  return {
    more:more
  }
});
