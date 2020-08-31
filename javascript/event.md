# 事件

事件
事件流

被js监控到的行为
event对象描述事件信息
btn.addEventListener('click', func);

事件处理函数
事件句柄

为特定函数定义监听函数
直接在html元素中定义js函数

事件对象
给事件对象绑定一个事件类型
事件句柄 为 一个函数
dom 0 级事件
dom 2 级事件绑定方式

绑定多个监听函数

捕获和冒泡的事件

element.removeEventListener(event, function, useCapture);
移除添加的事件句柄

ie事件处理程序
attachEvent()
detachEvent()
ie 匿名函数中的this指向外部对象window

IE事件流

大部分时间使用事件冒泡

事件绑定损耗性能
所以要用到事件委托

event.type
event.target 点击谁执行谁
event.currentTarget 事件绑定到谁，就指向谁
event.preventDefault();
event.stopPropagation(); 阻止事件冒泡或捕获

event.clientY, pageY, screenY

clientY 浏览器顶边到元素被点击的位置
pageY 浏览器顶边到元素顶部的位置（包括滚动轴的距离）
screenY 屏幕定边到点击的位置

ie 浏览器event对象的属性和方法
event.type
event.returnValue = false; 阻止默认行为 preventDefault

srcElement 同 target
cancelBubble 同 stopPropagation

事件类型
load
new Image();
图片预加载
提前将图片加载到内存中

js 动态加载

unload 切换页面

focus 不支持冒泡

focusin 同 focus
focusout 同 blur

event.button
0, 1, 2

mouseover
mouseout 包括子元素

mouseenter
mouseleave 子包括自身，范围窄

keydown
keyup
keypress 按下字符键

keyCode 在 keypress中不稳定
charCode 推荐使用

textInput

touchstart
touchmove
touchend
touchcancel

event.touches 触摸点数组
event.changedTouches
event.targetTouches
