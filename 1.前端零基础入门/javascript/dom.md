# dom

dom 是 js 操作 html 的桥梁

节点思维

节点获取
节点操作
节点移除
节点克隆

js 操作 html 的接口
使文档操作变得简单
dom 文档对象模型
dtd

元素
属性
文本节点

dom 节点树
符合人的直觉

nodeType
属性值

元素 1
文字 3
注释 8
document 9
DTD 节点 10

访问页面上的元素节点

document 对象
dom 节点树的根

对象
属性
方法

延迟运行

html 节点的后面 script

window.onload = function(){};

使得js可以找到需要的html dom 节点

事件监听
一个事情发生了，需要监听到这个事情发生，事件发生了，执行函数中的语句

querySelector();
得到页面上的一个元素
选择器

节点关系选择器

querySelectorAll();

parentNode
firstChild
lastChild
childNodes
nextSibling
previousSibling

节点关系

所有节点

排除文本节点的干扰
只考虑元素节点
children
parentNode
firstElementChild
lastElementChild
previousElementChild
nextElementChild

空文本节点

获取节点
改变元素节点的内容

innerHTML
innerText

oBox.style.backgoundColor = 'red';

事件驱动元素样式的改变

约定
class 负责书写样式
id 负责书写js

改变dom节点的html的属性

setAttribute();
getAttribute();

是否解析
以html语法修改元素内容

document.createElement();
孤儿节点无法看到

appendChild();
insertBefore(孤儿节点, 标杆节点);
将孤儿节点挂载到dom树
