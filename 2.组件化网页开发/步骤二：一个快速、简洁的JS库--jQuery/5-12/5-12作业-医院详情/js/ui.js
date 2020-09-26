// ui-search 定义
$.fn.UiSearch = function () {
  var ui = $(this);

  $('.ui-search-selected', ui).on('click', function () {
    $('.ui-search-select-list').toggle();
    return false;
  });

  $('.ui-search-select-list a', ui).on('click', function () {
    $('.ui-search-selected').text($(this).text());
  });

  $('body').on('click', function () {
    $('.ui-search-select-list').hide();
  });
}

// ui-back-top
$.fn.UiBackTop = function () {
  var ui = $(this),
    el = $('<a href="#" class="ui-back-top"></a>'),
    windowHeight = $(window).height();

  ui.append(el);
  $(window).on('scroll', function () {
    var top = $('body, html').scrollTop();
    if (top > windowHeight) {
      el.show();
    } else {
      el.hide();
    }
  });
  el.on('click', function () {
    $(window).scrollTop(0);
  });
}

/**
 * ui-tab
 * @param {string} header  TAB组件，的所有选项卡 item
 * @param {string} content TAB组件，内容区域，所有 item
 */
$.fn.UiTab = function (header, content) {
  var ui = $(this),
    tabs = $(header, ui),
    cons = $(content, ui);

  tabs.on('click', function () {
    var index = $(this).index();
    tabs.removeClass('active')
      .eq(index)
      .addClass('active');
    cons.hide().eq(index).show();
    return false;
  });
}

// 页面的脚本逻辑
$(function () {
  $('.ui-search').UiSearch();
  $('body').UiBackTop();
  $('.content-tab').UiTab('.content-tab-captions-item', '.content-tab-details-item');
});
