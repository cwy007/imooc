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
