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

function formatDatetime() {
  weeks = ["日", "一", "二", "三", "四", "五", "六"]
  var date = new Date();
  var year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    week = weeks[date.getDay()],
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  return "今天是" + year + "年" + month + "月" + day + "日" + "星期" + week + "<br />" + hour + ":" + min + ":" + sec;
}
// uiSchedulingTable 科室排班表
$.fn.UiSchedulingTable = function() {
  var ui = $(this);
  var tableWrap = $('<div class="ui-scheduling-table-wrap">');
  var left = $('<div class="ui-scheduling-table-left">');
  var prevBtn = $('<span class="prev"></span>');
  left.append(prevBtn);
  left.append($('<span class="morning">上午</span>'));
  left.append($('<span class="afternoon">下午</span>'));
  left.append($('<span class="evening">晚上</span>'));
  tableWrap.append(left);
  var columns = $('<div class="ui-scheduling-table-columns clearfix">');
  var zhCnWeeks = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  var today = new Date();

  // 7周
  for (var i = 0; i < 49; i++) {
    var week = zhCnWeeks[today.getDay()],
        year = today.getFullYear(),
        month = (today.getMonth() + 1),
        day = today.getDate(),
        column = $('<div class="ui-scheduling-table-columns-item">'),
        date = $('<span class="date">');
        morning = $('<span class="morning">'),
        afternoon = $('<span class="afternoon">约满</span>'),
        evening = $('<span class="evening">');
    date.html(week + '<br/>' + year + '-' + month + '-' + day);
    column.append(date, morning, afternoon, evening);
    columns.append(column);
    today.setDate(today.getDate() + 1);
  }
  tableWrap.append(columns);
  var right = $('<div class="ui-scheduling-table-right">');
  var nextBtn = $('<span class="next"></span>');
  right.append(nextBtn);
  tableWrap.append(right);
  ui.append(tableWrap);

  var idx = 0;
  prevBtn.on('click', function() {
    idx -= 1;
    if (idx <= 0) idx = 6;
    columns.css('left', -656 * idx);
  })
  nextBtn.on('click', function() {
    idx += 1;
    if (idx > 6) idx = 0;
    columns.css('left', -656 * idx);
  })
}

// 页面的脚本逻辑
$(function () {
  $('.ui-search').UiSearch();
  $('body').UiBackTop();
  $('.content-tab').UiTab('.content-tab-captions-item', '.content-tab-details-item');
  $('.ui-scheduling-table').UiSchedulingTable();
});
