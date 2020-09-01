# text

text-shadow: h-shadow v-shadow blur color;
blur 是向外的，不存在负值
模糊

text-outline: thickness blur color;
文本轮廓

word-break: normal | break-all | keep-all;
自动换行的处理方法
针对拉丁文本
在最近的标点符号处换行

word-wrap: normal|break-word;
长单词
url地址

text-align:justify;
text-align-last: auto|left|right|center|justify|start|end|initial|inherit;
规定最后一行的对齐方式
initial 默认值

overflow:hidden;
text-overflow: clip|ellipsis|string;
文本溢出包含元素的时候发生的事情
ellipsis ...
文本提示

新文本属性

## 字体

@font-face
语法规则

微软雅黑
黑提
宋体
安全字体

Arial

模块

把字体文件放到服务器上

@font-face {
  font-family: YourWebFontName; 名称
  src: source format, soruce format; 可以指定多个
  font-weight: weight; opt
  font-style: style;  opt
}

format 提醒浏览器使用的字体格式
TrueType
.ttf windows,mac 常见字体
RAW格式，写入式字体

OpenType(.otf)格式
原始的字体格式
内置在TryeType之上

Web Open Font Format(.woff)
.woff 字体是web字体中最佳格式，是TrueType/OpenType的压缩版本，支持元数据包的分离

weight 是否加粗
style 斜体

兼容性

Embedded Open type .eot
ie专用字体，从TrueType创建此格式字体

SVG(.svg)
基于svg渲染的一中格式

```css
/* css3 @font-face字体通用模板： */
@font-face {
  font-family: 'YourWebFontName';/* 给字体起的名字 */
  src: url("YourWebFontName.eot");/* 兼容IE9以上的浏览器 */
  src: url("YourWebFontName.eot?#iefix")format("embedded-opentype"),/* 兼容IE6-IE8浏览器 */
  url("YourWebFontName.ttf")format("truetype"),/* 兼容手机端,Safari,Android,iOS*/
  url("YourWebFontName.woff")format("woff"),/* 兼容所有浏览器 */
  url("YourWebFontName.svg#YourWebFontName")format("svg");;/* 针对IOS开发 */
}
```

skew
扭曲
skewX(angle)
skewY(angle)
斜切效果
一条边相对于另一条边平移

skew transformation
2D扭曲

A、transform: matrix(1, 0, 0, 1, x, y)等同于transform: translate(x, y)。
B、transform: matrix(sx, 0, 0, sy, 0, 0)等同于transform: scale(sx, sy)。
C、transform: matrix(cosθ, sinθ, -sinθ, cosθ, 0, 0)等同于transform: rotate(θdeg)。
D、transform: matrix(1, tanθy, tanθx, 1, 0, 0)等同于transform: skew(θxdeg, θydeg)。

计算公式为：matrix((1-k*k) / (1+k*k), 2k / (1 + k*k), 2k / (1 + k*k), (k*k - 1) / (1+k*k), 0, 0)
对称轴y=-x，即斜率k=-1，代入公式计算，matrix((1-  -1*-1) / (1+ -1*-1)， 2*-1 / (1 + -1*-1)，2*-1 / (1 + -1*-1)，(-1*-1 - 1) / (1+-1*-1), 0, 0)即得到matrix((1- 1) / (1+ 1)， -2 / (1 +1)，-2 / (1 + 1)，(1 - 1) / (1+1), 0, 0)=matrix(0，-1，-1，0, 0, 0)

transform-style属性指定嵌套元素是怎样在三维空间中呈现，
题目要求实现父元素对子元素的3D遮罩效果，因此需要放在B位置。

perspective

CSS的transition允许CSS的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标单击、获得焦点、被点击或对元素任何改变中触发，并圆滑地以动画效果改变CSS的属性值，网页加载不能触发过渡效果。

transition-property:none|all|property;
transition-duration:time;
transition-timing-function:ease|linear|ease-in|ease-out|ease-in-out
linear 匀速
ease 平滑过渡
ease-in 慢到快
ease-out 快到慢
ease-in-out 慢到快再到满

step-start
step-end

transition-delay:time;
0,s,ms

transition: property duration timing-function delay;

过渡 transition; 要有事件发生
转换 transform

CSS3过渡是元素从一种样式逐渐改变为另一种的效果，要实现这一点，必须规定：指定效果的持续时间
