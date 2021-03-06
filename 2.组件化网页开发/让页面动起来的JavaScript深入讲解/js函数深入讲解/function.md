# function

## 函数的本质

对象：值的集合，任何值都可以；
空的对象
尽量少的使用全局变量
创建对象
{} 字面量
new Object();
Object.create();

如何使用对象
delete obj.name 删除name属性
没有值的属性为 undefined 不会报错 obj.name

in 判断是否有属性
name in obj;

遍历对象
for (var k in obj) {

}

函数介绍

function
解析器
函数已死，有事烧纸；
每次执行会创建一个全新的作用域；

好处：
复用代码
  自己的代码，别人的代码
  jQuery 封装了很多的方法，对象中的方法
统一修改和维护
可读性

读代码，先读函数名，需要时，再度函数中的细节，这样可以提高效率

函数二象性
  函数调用
  函数是对象

给函数添加属性，缓存一些值

作为数据使用

一山不能容二虎除非一公和一母

作为参数来使用
函数本体

函数作为返回值

不要拿函数不当对象；

## 定义

函数解析器
字面量：function 声明；var 的赋值表达式；
构造函数方式
var func = new Function('p','p2', '...', 'return 2');

定义方式在预解析阶段是有区别的；

函数定义的位置
函数声明
全局作用域
前面，后面，里面

函数作用域
函数内部
函数自己内部
同一级的函数内部
作用域链
es5 中没有块级作用域

对象中的函数定义

B：使用var声明的函数，只能在声明之后调用，即：
D：内部函数可以访问外部函数的变量(作用域链的机制)
一个定义在函数内部的函数，可以访问到其所在函数的局部变量

## 调用

add(1, 2);
一般函数
对象中的函数
普通函数的调用
命名函数

匿名函数执行
(function(){})();
将其赋值给一个变量；
直接来调用；
js解析器

function 开头就表示声明；
合法而无关紧要

递归调用
阶层

```js
// 5!
// 5*4!
// 5*4*3!
// 递归调用
// 阶层函数
// 递归 vs 循环

// 递归调用就是自己调用自己，但切记一定要有终止条件，否则函数将无限递归下去。
function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num -1);
}
console.log(factorial(5));
```

对象中方法的调用

模拟鼠标点击
document.onclick();
对象中合化标识符和非法标识符

方法的链式调用
$('p').html('段落').css('background-color', 'red');

构造函数的调用
add();
new Person();
大写开头并不是强制要求；
区别在于调用方式，是否通过new 来调用；
返回一个对象，交给变量保存；

A：构造函数首字母最好大写，而不是必须的，主要是为了让人一看就知道是构造函数，不至于直接调用；
B：构造函数必须通过new实例化调用，直接调用没有意义；

函数的间接调用
add.call  参数分开来传参数
add.apply 参数数组

改变函数中this的指向
给函数装上了翅膀
坑爹货
丧心病狂
适可而止

A：对象没有call和apply方法，只有函数有；
D：apply可以将数组和类数组一次性的传递进函数中，call只能一个一个的传；

## 参数

函数的参数
参数的类型
形参：占位符，形式上的参数，局部变量，预解析；
实参：实际传递的参数，会替换形参；
将实参赋值给实参 -- 参数传递的本质；

普通类型
引用类型
首先赋值

参数个数问题：
传递的实参个数和形参个数相等；
小于，有可选参数时；
大于形参的个数

预解析，var a; 这是 a 的值为undefined

参数默认值设置
if (!power) power = 2;
power = power || 2; // 短路操作

$('p');
$('p', document); // 指定上下文

不知道写多少个参数，就一个都不写
return 的第一个含义：函数结束了；

奉陪到底

arguments
每个函数中都有，类似数组的对象；
arguments.length;
{
  '0': 1, // '0' 要用引号，因为数字开头为非法标识符
  '1': 2,
  '2': 3,
  length: 3
}

arguments[0] = ''
给 arguments 赋值与给函数传参的比较
不能跨函数
auguments.callee 等于函数本身，一般用在递归;指代函数本身；
严格模式下 auguments.callee 不可用；
"use strict";

辛辛苦苦几十年，一下回到解放前；
天生我才必有用，不是不用，时候未到；

```js
// 严格模式下 auguments.callee 不可用；
var factorial = function fn(num) { // fn 用在函数内部
  if (num <= 1) return 1;
  return num * fn(num -1);
}

```

functionName.length // 形式参数个数
arguments.length // 实际参数个数

什么可以做参数
数据都可以作为参数

基本数据类型

经验：函数的纯洁性，一个函数只做一件事；
大而全，就什么也做不好；

jQuery 中的方法示例
$.each([1, 2, 3], function(index, item) {
  console.log(index);
  console.log(item);
})

想写出好的代码，将函数作为参数是必不可少的
回调函数：当下不会调用，在稍后满足一定条件时，在回过头来调用；

## 返回值

return
在函数中使用
函数的结束
将值返回

continue
跳出本次循环

break
跳出当前循环，执行循环外的语句
break只能跳出一层循环；
switch中如果没有break，就会发生`穿刺现象`，也就是程序执行完选中的case后会继续往下执行，直到遇到break跳出switch语句或执行完所有case后退出switch语句。

什么可以作为返回值？
什么都不返回

alert([1, 3, 5].toString());

在不报错的情况下自动加上分号

1、document.write期望接收和输出字符串，当接收的参数不为字符串时，会调用参数的toString方法，将其转化成字符串输出
2、 数组调用toString()后，会将其中的元素用逗号拼接起来变成字符串
3、 一般的对象调用toString()后返回[object Object]
重写对象的toString()方法，就按照重写方法的返回值输出；

1、 count()()这样调用，每次都会创建一个新的局部作用域，num的值会不断地被初始化为1
2、 return num++表示先返回num的值，再将num加1

## 计算器示例

从dom中获取到的值都是字符串

+'3' => 3

将写过的代码，进行改写

open closed priciple
ocp

switch 代码糟糕的开始

可扩展性
手动抛出错误，遇到错误定位问题

将代码放到局部作用域中执行
函数
局部作用域
(function() {})();
暴露接口
返回函数
给函数添加属性
