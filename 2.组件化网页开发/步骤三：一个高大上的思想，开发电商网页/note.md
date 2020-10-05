# note

按需加载
楼层

online-store
穿衣服
dom节点
将 script 标签放在后面的好处
不会阻塞页面加载
上线后推荐从cdn加载

window.jQuery || document.write('<script src=""><\/script>')

从属关系 nav-site

点击不产生任何效果 javascript:;
container
fl
fr
link
dropdown-layer

巨型选择器
shift
标尺
<https://class.imooc.com/lesson/803#mid=20215>

公共样式
页面专属样式

vertical-align: middle;
一定要有position，这样 z-index 才会生效

重绘
回流

为什么不用*，非要把每个都写一遍

在小的项目中是可以用`*`的，他的影响可以忽略不计，甚至还可以减少代码。但是项目很大使用`*`就会减慢程序运行速度，因为现在的项目都是按需加载，使用`*`一上来就全部加载了一遍，这样大大影响了运行速度

[CSS3：{*zoom:1;}作用](https://blog.csdn.net/weixin_30470643/article/details/96961781)

base.css 常用公共样式，在多个项目中使用
common.css 通用样式，组件提取
index.css 专属样式

```css
position: absolute;
right:0;
/* for absolutely positioned elements, the position of the element is based on the right property */
left: auto; /* 这里设置为 auto 已使 right 属性起作用 */
```

```js
$.fn.extend({
  dropdown: function() {
    return this;
  }
})

// 使用 options 的属性覆盖 defaults 对象中的属性，然后，
// 将属性添加到新的空对象中，将新建的对象赋值给变量 options
options = $.extend({}, defaults, options);
```

http 请求

[阿里图标字体](https://www.iconfont.cn/)

组合方式更灵活

line-height

```js
{
    // show: mode.show,
    // hide: mode.hide
    // $.proxy 修改函数内 this 的指向 和传参
    show: $.proxy(mode.show, this, $elem),
    hide: $.proxy(mode.hide, this, $elem),
}
```

$.getJSON();
[jQuery请求本地JSON文件，在谷歌浏览器运行时报跨域错误](https://www.cnblogs.com/nongfusanquan/p/13275597.html)
3.vscode安装使用扩展live-server
注：live Server扩展，安装好后，选择html文件，右击选择Open with Live Server

$(selector).proxy(function,context)
function 要被调用的已有的函数。
context 函数所在的对象的名称。
$.fn.extend() 函数为jQuery扩展一个或多个实例属性和方法(主要用于扩展方法)。
提示：jQuery.fn是jQuery的原型对象，其extend()方法用于为jQuery的原型添加新的属性和方法。这些方法可以在jQuery实例对象上调用。
$.fn.extend( object )
Object类型 指定的对象，用来合并到jQuery的原型对象上。

seo
h1 标签 用在logo处
文字溢出隐藏

浏览器的自动完成
input autocomplete="off"

.text-ellipsis{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

change event
内容变化 input event
blur

使用done(), fail(), always() 为了避免代码嵌套在ajax里面，方便阅读。
encodeURIComponent( $.trim($(input.val()) );

这里发送的是jsonp请求，所以不需要服务器环境。因为jsonp的本质是利用script标签，该标签可以跨域请求资源。jsonp的实现过程就是在页面上动态创建script标签，设置其src属性，让其去请求数据，请求数据完成，再将它删除；它不是XMLHttpRequest对象，所以运行本地文件就可以获取到数据。

通用的事情
具体的事情
dom操作 vs 变量

[VS代码现在已经支持每个语言的缩进设置，你可以在你的package.json设置默认值：](http://cn.voidcc.com/question/p-zqskttnc-by.html)

"configurationDefaults": {
  "[dart]": {
    "editor.tabSize": 2,
    "editor.insertSpaces": true
  },

[VScode如何根据不同文件类型设置诸如tab的长度、ruler位置等选项？](https://www.zhihu.com/question/49624784)

http://127.0.0.1:5500/2.%E7%BB%84%E4%BB%B6%E5%8C%96%E7%BD%91%E9%A1%B5%E5%BC%80%E5%8F%91/%E6%AD%A5%E9%AA%A4%E4%B8%89%EF%BC%9A%E4%B8%80%E4%B8%AA%E9%AB%98%E5%A4%A7%E4%B8%8A%E7%9A%84%E6%80%9D%E6%83%B3%EF%BC%8C%E5%BC%80%E5%8F%91%E7%94%B5%E5%95%86%E7%BD%91%E9%A1%B5/%E6%85%95%E6%B7%98%E7%BD%91%E4%B9%8B%E4%B8%AD%E5%BF%83focus%E5%8C%BA%E7%BB%84%E4%BB%B6%E5%8C%96--%E5%88%86%E6%AD%A5%E4%BB%A3%E7%A0%81/1-4%20%E5%95%86%E5%93%81%E5%88%86%E7%B1%BB%E7%9A%84css%E6%A0%B7%E5%BC%8F2--%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85/index.html

```jquery
$.each
通过return false跳出当前循环

```
