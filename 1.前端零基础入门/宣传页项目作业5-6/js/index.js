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
