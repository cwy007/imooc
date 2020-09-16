# note

A：不区分大小写，修饰符i。
B：行首行尾，修饰符m，m修饰符的作用是修改^和$在正则表达式中的作用，让它们分别表示行首和行尾。
D：全局匹配，修饰符g，匹配所有元素，如有多个匹配时，返回数组。

var str = 'regular expression = regexp';
/*此处写代码*/
var regexp = /lar exp/;
var regexp2 = new RegExp("lar exp");

document.write(regexp.test(str) + "/");
document.write(regexp2.test(str) + "/");
document.write(regexp.exec(str) + "/");
document.write(regexp2.exec(str) + "/");

var regexp1 = /_RegExp_5@gm/;
var regexp2 = new RegExp("_RegExp_5@gm");
var regexp3 = /_regexp_5@gm/i;
var regexp4 = new RegExp("_regexp_5@gm", 'i');

document.write(regexp1.test(str) + "/");
document.write(regexp2.test(str) + "/");
document.write(regexp3.test(str) + "/");
document.write(regexp4.test(str) + "/");
document.write(regexp1.exec(str) + "/");
document.write(regexp2.exec(str) + "/");
document.write(regexp3.exec(str) + "/");
document.write(regexp4.exec(str) + "/");

普通字符
转义字符：一种含义转换为另一种含义；
边界
特殊字符 --> 普通字符
. 除了\n之外的所有字符
量词
贪婪匹配只和量词有关
默认为贪婪匹配
在条件允许的情况下，寻找提一个可以匹配到的
尽可能少
寻找字符串中第一个可能匹配到的位置
选择 ｜

str = "html css js"
p = /js|css|html/
p.exec(str)

正则表达式在匹配的时候，会在字符串中从前往后一 一的匹配，直到找到能匹配上的字符，此正则表达式在字符串中的第一位就找到了自己要找的其中一个c，因此就不会再往下继续找

捕获性分组
(?:非捕获分组)

\1 第一个分组
属性

要采用分组的方式，所以A错误；后缀名是包含“.”的，所以C错误；不需要区分大小写

分组和引用
位置
开头
结尾

单词边界
\b 是\w与\W之间的位置

前瞻性匹配
/java(?=script)/;
负向前瞻性
/java(?!script)/;
new RegExp('\\');

pattern.lastIndex
正则的方法
test
exec
继承的方法

valueOf
ignoreCase
global
multiline
source

实例属性
构造函数属性
RegExp.input
RegExp.$_
RegExp.lastMatch
RegExp['$&']
RegExp.leftContext
RegExp['$`']

RegExp.rightMatch
RegExp["$'"]

RegExp.$1
m 将字符串作为多行处理
g ^ $
