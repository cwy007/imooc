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
// ***************************上面是一些辅助方法************************************

// 需要设置动画的元素
var screenAnimateElements = {
  '.header': [
    '.header'
  ],
  '.screen-1': [
    '.screen-1__heading',
    '.screen-1__desc'
  ],
  '.screen-2': [
    '.screen-2__bg_2',
    '.screen-2__bg_1',
    '.screen-2__desc',
    '.screen-2__heading',
    '.screen-2__underline'
  ],
  '.screen-3': [
    '.screen-3__bg',
    '.screen-3__heading',
    '.screen-3__underline',
    '.screen-3__desc',
    '.screen-3__langs'
  ],
  '.screen-4': [
    '.screen-4__underline',
    '.screen-4__desc',
    '.screen-4__tools',
    '.screen-4__heading'
  ],
  '.screen-5': [
    '.screen-5__heading',
    '.screen-5__desc',
    '.screen-5__underline'
  ]
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
  // 自动播放顶部导航动画
  setTimeout(function () { playAnimateDone('.header') }, 1000);
});

// 滚动页面播放动画
window.addEventListener('scroll', function() {
  var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (top > 640 * 1 - 300) {
    playAnimateDone('.screen-2');
  }

  if (top > 640 * 2 - 300) {
    playAnimateDone('.screen-3');
  }

  if (top > 640 * 3 - 300) {
    playAnimateDone('.screen-4');
  }

  if (top > 640 * 4 - 300) {
    playAnimateDone('.screen-5');
  }

  if (top > 640 * 5 - 300) {
    playAnimateDone('.screen-6');
  }
})

// 当点击该按钮时，返回页面的顶部
var button = getElem('.screen-6__button');
button.addEventListener('click', function() {
  document.scrollingElement.scrollTop = 0;
})
