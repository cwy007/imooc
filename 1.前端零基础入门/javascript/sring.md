# string

str.charAt(index);
str.charCodeAt(index);
字符
字符编码

str.indexOf(char);
没有出现过返回 -1
字符的位置
字符串出现的位置

lastIndexOf(char);

截取方法
str.slice(start参数必填, end参数可选);
end 本身不在截取范围内
负数：与长度进行相加

str.substring(start, end);
参数为负数时，将参数转为0；
区别在于负数
比较小的为值为被转换为开始位置，将较大的数转换为结束的位置
负数的处理方法

str.substr(start, len);
len 截取的字符总数

解析

str.split(separator);
将字符串分割成字符串数组

str.replace(regexp/substr, replacement);
不修改原字符串
返回一个新的字符串

str.toUpperCase()
str.toLowerCase()
生成字符串的副本

Math
数学对象

min(n, n1, ..., nx)
max()
min（）返回指定的数组中最小的那个数字，如果参数是不能转换成数字的非数字值，则返回NaN

ceil(n)
floor(num)
向上取整
向下取整

round(num)
四舍五入

abs(num)

Math.random();
该方法返回的是一个大于等于0并且小于1的随机数，不是整数。

n-m之间的随机数
Math.floor(Math.random()*(m-n+1) + n);

new Date();
日期时间对象

getfullYear(); 4位
getMonth();
getDate(); mday
getDay(); wday 0:周日 6:周六
getHours();
getMinutes();
getSeconds();
getTime();

month = getMonth() + 1;

```js
function formatDatetime() {
  weeks = ["日", "一", "二", "三", "四", "五", "六"]
  var date = new Date();
  var year = date.getFullYear(),
  month = date.getMonth() + 1,
  day = date.getDate(),
  week = weeks[date.getDay()],
  hour = date.getHours(),
  min = date.getMinutes(),
  sec = date.getSeconds();
  return "今天是" + year + "年" + month + "月" + day + "日" + "星期" + week + "<br />" + hour + ":" + min + ":" + sec;
}
```

setFullYear();

创建日期时间对象

年月日时分秒
毫秒数
年月日必须指定
容错
