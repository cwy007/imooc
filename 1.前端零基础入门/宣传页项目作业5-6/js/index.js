// 获取元素
function getElem(selector) {
  return document.querySelector(selector);
}

// 获取所有的元素
function getAllElem(selector) {
  return document.querySelectorAll(selector);
}

// 获取元素的类
function getCls(elem) {
  return elem.getAttribute('class');
}

// 设置元素的类
function setCls(elem, cls) {
  return elem.setAttribute('class', cls);
}

// 给元素添加类
function addCls(elem, cls) {
  var baseCls = getCls(elem);
  if (baseCls.indexOf(cls) != -1) return;
  setCls(elem, baseCls + ' ' + cls);
}

// 删除元素的类
function delCls(elem, cls) {
  setCls(elem, getCls(elem).split(cls).join(' ').replace(/\s+/g, ' '));
}

// 需要设置动画的元素
var screenAnimateElements = {
  '.screen-1': [
    '.screen-1__heading',
    '.screen-1__desc'
  ],
  '.screen-2': [],
  '.screen-3': [],
  '.screen-4': [],
  '.screen-5': []
}

// 当鼠标切换导航项时，下划线跟随鼠标移动到相应的导航项上
var navItems = getAllElem('.header__nav-item');
var navTip = getElem('.header__nav-tip');

function setNavTip(idx, items) {
  items[idx].addEventListener('mouseover', function() {
    navTip.style.left = idx * 78 + 'px';
  })

  items[idx].addEventListener('mouseout', function() {
    var currentIdx = 0;
    for (var i = 0; i < navItems.length; i++) {
      if (getCls(navItems[i]).indexOf('.header__nav-item_status_active') != -1) {
        currentIdx = i;
        break
      }
    }
    navTip.style.left = currentIdx * 78 + 'px';
  })
}

for (var i = 0; i < navItems.length; i++) {
  setNavTip(i, navItems);
}

// 初始化元素的状态
function setAnimateInit(screen) {
  var animateElements = screenAnimateElements[screen];
  for (var i = 0; i < animateElements.length; i++) {
    var element = getElem(animateElements[i])
    addCls(element, animateElements[i].substr(1) + '_animate_init');
  }
}

// 播放动画 init --> done
function playAnimateDone(screen) {
  var animateElements = screenAnimateElements[screen];
  for (var i = 0; i < animateElements.length; i++) {
    var element = getElem(animateElements[i])
    setCls(element, getCls(element).replace('_animate_init', '_animate_done'));
  }
}

window.addEventListener('load', function () {
  for (var k in screenAnimateElements) {
    setAnimateInit(k);
  }

  // 页面加载完成，1秒后自动播放第一屏动画
  setTimeout(function () { playAnimateDone('.screen-1') }, 1000);
});

