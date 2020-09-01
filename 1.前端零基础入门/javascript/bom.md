# bom

浏览器对象模型

window 对象
全局对象
全局变量
全局对象的属性

window.confirm("message");
true
false
返回值

prompt();
text
defaultText
null

\n
<br />
换行

打开和关闭浏览器窗口
window.open(pageURL, name, paramters);
window.close(); 关闭按钮所在的窗口

超时调用
间隔调用

id = setTimeout(code, millisec);
返回一个id值，计划执行代码的唯一标识符，用于取消超时调用
clearTimeout(id);

setInterval();
超时对象的id为一个对象；

bom
window

location
文档，导航，相关信息

location.href
完整url

window.location.href
location.hash
location.host
location.pathname
location.port
location.protocol
location.search

改变浏览器的位置
修改location对象的属性

location.replace()
不会在浏览器历史中生成记录，回退不可用

location.href =
window.location =
location.reload(); 从缓存中读取
location.reload(true); 强制刷新

history 对象
用户在浏览器中访问页面的历史记录
history.back()
history.go(-1);

history.forward()
history.go(1);
前进按钮
后退按钮

screen
客户端显示器的信息

screen availWidth
availHeight
屏幕可用宽高
window.innerWidth
window.innerHeight

Navigator 对象
浏览器和操作系统信息
userAgent
名称，版本，引擎，操作系统
toLowerCase
indexOf

尺寸根据背景图设置

通过js设置的dom 元素样式会显示成行内元素

display:none;
className
banner

1C 2D X
3AD 4A
5A X
6A 7D 8C 9C 10A
11B 12C 13D 14C 15A 16B 17C 18B
19AD X
20BC

switch语句中通过break语句来阻止代码自动的向下一个case运行，本题中，每个case后面没有break语句，所以它会向后面一直执行，输出每个case的执行代码；

nextSibling: 返回指定节点之后紧跟的节点，在相同的树层级中。
previousSibling：返回同一树层级中指定节点的前一个节点。
childNodes：childNodes 属性返回节点的子节点集合，以 NodeList 对象。

（1）循环与循环嵌套时，当外层循环为假时内层不再执行。
（2）先执行外层循环再执行内层循环，直到内层循环条件为假时再返回外层去执行。

字符串经过str转化后的结果是NaN，但是NaN不与任何数据相等，包括他本身，所以AB不对，同时，NaN也是一个number类型的一种。

网页重构
切图+码代码
低工耗
图层

静态页面开发
动态效果开发
