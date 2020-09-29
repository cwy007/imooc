# note

1.open() 方法：open() 有三个参数。第一个参数定义发送请求所使用的方法,第二个参数规定服务器端脚本的URL，第三个参数规定应当对请求进行异步地处理。xmlHttp.open("GET","test.php",true);

2.send() 方法：send() 方法将请求送往服务器，当使用get时，open中的url拼好参数，send中不传参数，那么代码是这样的：xmlHttp.send(null); 当使用post时，open中不带参数，send中传入参数

$.ajax()
$.get()
$.post()
$.getJson()

本题考察的是 $.ajax 方法，正确选项为AB；
C：jQuery中的$.ajax是jQuery封装好的使用ajax的方法，减少了原生方法步骤中代码的书写；
D：$.ajax 的使用主要是传入一个对象：声明传递的方式，地址，数据以及成功或者失败后执行的函数；

## rails + render + jsonp  + callback

ruby 返回jsonp

<https://blog.csdn.net/mn960mn/article/details/38538429?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.channel_param&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromBaidu-1.channel_param>
<https://stackoverflow.com/questions/14824551/rendering-json-in-controller>

需求分析，设计，开发

return false
$.fn.uiSearch()

$(document).ready(function() {

});
$(function(){

})

参数、类型、名称、注释

ui组件，通用型

## jQuery 中的ready 写法

$(document).ready(function() {
});

$().ready(function() {
});

$(function() {});

mouseup事件鼠标左键点击和鼠标右键点击都可以实现
dblclick事件鼠标左键双击和鼠标右键双击都可以实现

jQuery中mouseover和mouseout事件执行的过程，鼠标移入移出的过程为：移入one---移入two---移出two---移出one，需要考虑到这两个事件发生的时候会冒泡到父元素上，所以移入子元素的时候会冒泡到父元素上，父元素会执行移出和移入事件，所以按照顺序输出的结果为：
one over---one out---two over---one over---two out---one out---one over---one out

jQuery的选择器类型，常见的有基本选择器、多项选择器、层级选择器、属性选择器、过滤器等

:checked 选择器选取所有选中的复选框或单选按钮以及select中的option元素
