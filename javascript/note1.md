# note1

变量没有类型
松散类型
标识符

变量声明
赋值
一次声明多个变量

关键字
保留字

当想存储值时使用变量
注释
语法

数据类型
typeof

null undefined string boolean number
Object Function
变量本身没有类型，变量的类型取决于变量的值

undefined
声明一个变量，但是没有赋值

null 表示一个空的指针对象

undefined派生自null
undefined==null
true

Number
整数和浮点数

NaN

涉及到 NaN 的操作都会返回 NaN
NaN 和任何值都不想等，包括 NaN 本身

isNaN(n)
是否为非数字

var a = null, b = 10, c = “我是字符串”, d = “10“, e = undefined;

数值转换
Number()

parseInt()
parseFloat()

无效的浮点数字符

强制类型转换

“50px“，“px50“，“50px50“，“50.51“

var a = "50px", b = "px50", c = "50px50", d = "50.51";
document.write(parseInt(a));
document.write(parseInt(b));
document.write(parseInt(c));
document.write(parseInt(d));

“50px“，“px50“，“050px“，“50.12345“，“50.123px45“

var a = "50px", b = "px50", c = "050px", d = "50.12345", e = "50.123px45";

document.write(parseFloat(a) + " | ");
document.write(parseFloat(b) + " | ");
document.write(parseFloat(c) + " | ");
document.write(parseFloat(d) + " | ");
document.write(parseFloat(e) + " | ");

String
Boolean

str.toString()
String()

隐式类型转换

表达式
算术操作符
递增/递减
++a 返回递增之后a的值
a++
--a
a--

在运算中，除了加法，其余的运算都会将字符串先转换为数字之后再进行计算，但是两个数据相加，
如果有一方是字符串的话，加号的作用就是将他们进行拼接

+=
/=
%=
赋值操作符
比较运算符
三元操作符

逻辑操作符
操作数不是boolean类型的情况

&&
||
!

短路操作

alert
age = prompt("");

condition
statement

str.length
isNaN()

new Date().getDay();
0-6

switch(expression) {
  case value:statement
  break;
  default:statement
}

switch语句中通过break语句来阻止代码自动的向下一个case运行，本题中，
每个case后面没有break语句，所以它会向后面一直执行，输出每个case的执行代码；

for
for-in
while
do-while

嵌套循环
先执行外层，再执行内层，直到内层的条件为false再执行外层；

while(condition) {
  statement;
}

do {
  statement;
} while(condition);

for 已知循环次数的循环体
while 循环次数未知的循环体

break     立即退出整个循环体
continue  立即退出本次循环，还会开始下一次循环
