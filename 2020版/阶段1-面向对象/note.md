# js object

运算求值
属性值为函数
自报家门

基本类型值
引用类型值

函数内部调用函数自己

Array.isArray()

函数的上下文由调用方式决定

运行时上下文

上下文规则
obj.fn()
fn()
arr[3]()
iife
setInterval() 计时器
setTimeout() 定时器
elem.onclick = function() {

}

枚举
类数组对象
自然数序列

iife
(function(){})()

调用机理
四步走
new fun()
{}
this
exec
{}

让基本类型值获取方法

该题考查的是Math.random（）方法，正确选项为C。该方法返回的是一个大于等于0并且小于1的随机数，不是整数。

[a, b] 之间的随机数
parseInt(Math.random() * (b - a + 1)) + a
