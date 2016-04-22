/* global $:true */
/*jshint unused: false*/
+function ($) {
  "use strict";

  var getPage = function() {
    var $page = $(".page-current");
    if(!$page[0]) $page = $(".page").addClass("page-current");
    return $page;
  };

  //初始化页面中的JS组件
  $.initPage = function(page) {
    var $page = page ? $(page) : getPage();
    if(!$page[0]) $page = $(document.body);
    var $content = $page.hasClass("content") ? $page : $page.find(".content");

    $.initPullToRefresh($content);
    $.initInfiniteScroll($content);
    $.initCalendar($content);
    $.initIndexList($content);

    //extend
    if($.initSwiper) $.initSwiper($content);
    if($.initSwipeout) $.initSwipeout();  // don't pass $content because the swipeout element is not $content
  };


  if($.smConfig.showPageLoadingIndicator) {
    //这里的 以 push 开头的是私有事件，不要用
    $(window).on("pageLoadStart", function() {
      $.showIndicator();
    });
    $(window).on("pageAnimationStart", function() {
      $.hideIndicator();
    });
    $(window).on("pageLoadCancel", function() {
      $.hideIndicator();
    });
    $(window).on("pageLoadError", function() {
      $.hideIndicator();
      $.toast("加载失败");
    });
  }

  // 从SUI中复制过的代码，在路由切换前关闭Panel、Modal窗口
  $(window).on('pageAnimationStart', function(event,id,page) {
    // 在路由切换页面动画开始前,为了把位于 .page 之外的 popup 等隐藏,此处做些处理
    $.closeModal();
    $.closePanel();
    // 如果 panel 的 effect 是 reveal 时,似乎是 page 的动画或别的样式原因导致了 transitionEnd 事件不会触发
    // 这里暂且处理一下
    $('body').removeClass('panel-closing');
    // transitionEnd 事件不被触发，暂时处理如下
    $('.panel-reveal').css({display: ''});
    $.allowPanelOpen = true;
  });


  $.init = function() {
    var $page = getPage();
    var id = $page[0].id;
    if($page.hasClass("page-inited")) {
      $page.trigger("pageReinit", [id, $page]);
    } else {
      $.initPage();
      $page.addClass("page-inited");
      $page.trigger("pageInit", [id, $page]);
    }
  };

  $(function() {
    if($.smConfig.autoInit) {
      $.init();
    }

    $(document).on("pageInitInternal", function(e, id, $page) {
      $.init();
    });
  });


}($);
