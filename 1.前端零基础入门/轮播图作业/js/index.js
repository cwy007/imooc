window.onload = function() {
  var banner = document.getElementById("banner");
  var titles = document.querySelectorAll("#banner-title > li");
  var slides = document.querySelectorAll("#banner-content > .banner-slide");
  var index = 0;
  var timer = null;

  // 删除指定元素上的一个类 className
  function removeClass(element, className) {
    var arr = element.className.split(" ");
    var idx = arr.indexOf(className);
    if (idx > -1) {
      arr.splice(idx, 1);
      element.className = arr.join(" ");
    }
  }

  // 根据变量index的值，显示对应的图片
  function changeImg() {
    for (var j = 0; j < titles.length; j++) {
      removeClass(titles[j], "active");
      removeClass(slides[j], "active");
    }
    titles[index].className = "active";
    slides[index].className += " active"
  }

  // 图片每1秒钟切换1次
  function startAutoPlay() {
    timer = setInterval(function() {
      index++;
      if (index >= titles.length) index = 0;
      changeImg()
    }, 1000);
  }

  // 停止图片轮播
  function stopAutoPlay() {
    if (timer) clearInterval(timer);
  }

  function slideImg() {
    startAutoPlay();
    banner.addEventListener("mouseover", stopAutoPlay);
    banner.addEventListener("mouseout", startAutoPlay);

    for (var i=0; i<titles.length; i++) {
      // 给每个标题添加自定义属性，保存索引值
      titles[i].setAttribute('data-idx', i);
      titles[i].addEventListener('click', function() {
        index = this.getAttribute("data-idx");
        changeImg();
      })
    }
  }

  slideImg();
}
