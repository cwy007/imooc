# error

语法错误
一定运行不成功

漏打
语句未完成
变量名错误

运行时错误
可能运行成功

在运行时才发生的错误
runtime error
reference error
type error
range error

逻辑错误
计算结果不符合预期

debugger;
watch
跳到下一行
进入函数
跳出函数
单步跟踪调试，处理逻辑错误

try
catch
主动触发一个错误
抛出一个错误

throw new Error("");
try
catch
finally

begin
rescue
ensure

浏览器抛出的错误
手动抛出的错误

断点

appendChild
insetBefore
移动节点
一个节点不能同时位于dom树的两个位置

parentNode.removeChild(childNode);
由父节点删除子节点

老节点.cloneNode(true);
是否深度clone true

获取
操作
创建
移动
删除
clone

文档或浏览器中发生交互的瞬间
html事件
浏览器事件

onclick
onmouseover
this dom元素的引用
直接在html标签上添加事件
onmousemove
onmouseout

DOM0 级事件
在dom对象上绑定事件

不推荐使用html事件
className

onload 页面加载完成后触发
onfocus
onblur
onchange
onclick
onmouseover
onmouseout
onmousemove

onload事件是在网页中的元素（图片、外部关联文件等）都完全加载到浏览器之后才执行

获取焦点
失去焦点

onchange
select

menu.options
menu.selectedIndex

onsubmit
表单中
form 标签上
确认按钮被点击时触发

onmousedown
onmouseup

window.onresize

onscroll

onkeydown
onkeypress
onkeyup
keyCode

document.onkeydown = function(event) {
  console.log(event.keyCode);
}