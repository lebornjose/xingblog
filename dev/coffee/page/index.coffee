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

  # 拉取下下一页
  $("#J_page").click ->
    $(this).text("正在努力加载");
    str="";
    page=$(this).attr 'data';
    $.getJSON "http://127.0.0.1:7092/blog/home/page/"+page, (data) ->
      console.log (data);
      if(data.length==0)
        alert("亲,最后一页了");
        return;
      for i in data
        str+="<li class='clearfix'><article>";
        str+="<a href='/blog/home/detail/"+i.articleId+"' class='title'>"+i.title+"</a>";
        str+='<div class="content">'+i.summary+'</div>'
        str+='<div class="article-info"><span><i class="icon-calendar"></i>'+i.pubtime+'</span><span><i class="icon-book"></i>'+i.keyword+'</span><span><i class="icon-comments-alt"></i>'+i.reads+'</span><span><i class="icon-heart-empty"></i>'+i.ispost+'</span></div>';
        str+="</article></li>";
      $('.x-list').append(str);
      page++;
      $("#J_page").text "点击加载更多";
      $("#J_page").attr data:''+page+'';
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
    $(".cover-img").css("background-image","url(res/debug/img/"+week+".jpg)");
  Week();
  document.onreadystatechange = subSomething;
