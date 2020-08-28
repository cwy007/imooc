# object

字符串，函数，数组
内置对象
属性 特性
方法 所做的事

存储一组数据
创建，元素读写，length

new Array(元素数量|数组中的元素);

字面量

build-in object

通过length移除元素
移除数组中末尾的值

arr.length = 0;

arr.push(item); // 返回长度
arr.pop();
app.shift();    // 返回元素
app.unshift(item);

arr.join(separator);

arr.reverse();

arr.sort(sortby);
toString()
默认将每一项转成字符串，按字符串比较排序

arr.sort(function(a,b) {
  return b-a;
});

arr.concat(arr1, arr2, ...);
连接数组，返回新的数组

arr.slice(start,end);
截取
不包含end位置的值
start 允许为负数
负值+length

连接
截取

删除数组中的项
arr.splice(start, deleteNum);

插入
arr.splice(index, 0, item1, item2);

替换
arr.splice(index, deleteCount, item1, item2, ...);

本题考察的是数组splice的插入方法，splice（index，0，item1，item2）方法的第一个参数index是插入数组项的起始位置，0是表示不删除任何项，所以返回的是一个空数组；后面的数值表示插入的项。

arr.indexOf(searchvalue, startIndex);
arr.lastIndexOf();
从末尾开始检测

