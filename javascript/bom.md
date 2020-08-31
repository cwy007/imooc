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
