# js regexp

regexp.test(str);
是否符合规则

按位描述规则
内存中的地址
\d
\D
\w
\W
\s
.

正则有两种创建方式，一种是/内容/，一种是new RegExp('内容')。这两种方式在使用元字符时有区别，即new RegExp('内容')中使用元字符时要多加一个斜杠。这是因为字符串中，斜杠是转义字符。如果想把转义字符\变成正则表达式中的\，就要把再加一个\ ,即\\就转译成一个\。

r.test(str);
r.exec(str);

打点

str.search(regexp)  // idx -1
str.match(regexp)   // [] null
str.replace(regexp)
str.split(regexp)

ajax 提交时，input 不用写在form中

字符集

`cd`, ad, `c`, b, bc
c, d, c, b,d
b, d, d, c, `?`
a, c, c, `a`, a

不管在全局作用域还是局部作用域，初次赋值时，如果没有使用var定义，那么变量为全局变量，A说法正确。
typeof 是检测数据类型，typeof null输出的是object，B说法错误。
Infinity是一个数值，表示无穷大。非零数字除以0时，结果是Infinity，C说法正确。
在js代码执行之前，变量会预解析，即提前定义。所以会输出undefined，不会报错，D说法错误。

substring（）方法可以截取字符串中的子字符串，有两个参数，第一个参数是截取的开始位置，第二个参数是截取的结束位置，参数截取含头不含尾。
