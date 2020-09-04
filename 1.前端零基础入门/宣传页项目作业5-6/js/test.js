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
    '.screen-4__tools__item_i_1',
    '.screen-4__tools__item_i_2',
    '.screen-4__tools__item_i_3',
    '.screen-4__tools__item_i_4',
    '.screen-4__heading'
  ],
  '.screen-5': []
}

function setScreenAnimate(screenCls) {

  var screen = document.querySelector(screenCls); // 获取当前屏的元素
  var animateElements = screenAnimateElements[screenCls]; // 需要设置动画的元素

  var isSetAnimateClass = false; // 是否有初始化子元素的样式

  var isAnimateDone = false; // 当前屏幕下所有子元素的状态是DONE？

  screen.onclick = function () {

    //  初始化样式，增加init A A_init
    if (isSetAnimateClass === false) {
      for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
      }
      isSetAnimateClass = true;
      return;
    }
    //  切换所有 animateElements 的  init -> done   A A_done
    if (isAnimateDone === false) {
      for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));
      }
      isAnimateDone = true;
      return;
    }
    //  切换所有 animateElements 的  done -> init   A A_init
    if (isAnimateDone === true) {
      for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute('class', baseCls.replace('_animate_done', '_animate_init'));
      }
      isAnimateDone = false;
      return;
    }

  }


}

for (k in screenAnimateElements) {
  setScreenAnimate(k);
}