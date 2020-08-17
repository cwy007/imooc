# tag

结构标签
article
header
nav
section
aside
hgroup
figure
figcaption
footer
dialog

语义化标签

这5个标签不要自我嵌套
header/section/aside/article/footer

优先级，最佳实践
header/section/footer > aside/article/figure/hgroup/nav > div/figcaption

多媒体标签
video

audio
src ""
autoplay autoplay
loop -1
controls controls

source
src
type

canvas

embed
svg
img

web 应用标签
状态标签
meter 温度
progress 下载进度

`<header>` 标签定义头部区域；
`<embed>` 标签定义嵌入的内容；
`<progress>` 标签定义任务的进度；
使用 `meter` 标签来度量给定范围内的数据；

列表标签
datalist
details

input
datalist

details
summary

注视标签
ruby
rt
rp

```html
<!-- 拼音注释 -->
<!-- <rp>(</rp> 浏览器不兼容时会显示，控制是否显示括号 -->

<ruby>陈<rp>(</rp><rt>chen</rt><rp>)</rp></ruby>

<ruby>
  魑<rp>(</rp><rt>chi</rt><rp>)</rp>
  魅<rp>(</rp><rt>mei</rt><rp>)</rp>
  魍<rp>(</rp><rt>wang</rt><rp>)</rp>
  魉<rp>(</rp><rt>liang</rt><rp>)</rp>
</ruby>

```

云南人

其他标签
mark 着重，高亮的文字
选中的状态

form
output
单价*数量=总价

结构与表现分离

纯表现的元素
Basefont
big
center
font
s
strike
tt
u

对可用性产生负面影响的元素
frame
frameset
noframes

产生混淆 xiao 的元素
acronym
applet
isindex
dir

方案优先级
html > css > js

重定义标签
b
i
dd ：details, figure, dialog 一同使用；定义包含文本
dt
hr 水平线，主题结束
menu command，menuitem 重新定义用户界面的菜单；之前冲html标准中删除又拿回来
small 小字体
strong 重要性而不表示强调

h5
标签
属性
布局

input
手机端

form
表单属性
链接属性
其他属性

input type
email
url
tel
number

新增属性
color、date、datetime、datetime-local、month、week、time、email、number、range、search、tel、url

date pickers input

pc端
range
search
color 在线文本编辑器，颜色选择

form / input  域
autocomplete on/off 自动补全，类似于datalist, 自动填充

autofocus
autofocus="autofocus" 适用于所有的input

multiple
type="file" multiple
multiple="multiple
以数组的形式发送到后台

placeholder

required

bootstrap

链接属性
sizes
link rel="icon" href="icon.gif" type="image/gif" sizes="16x16"

target
base href="http://localhost" target="_blank"

`<a>` 标签中，html5新增了一个属性，这个属性可以规定链接文档为何种媒体媒介 media
a tag
media
hreflang="zh" 被链接文档的语言；
rel="external" 资源在外部服务器 youtube
rel规定当前文档与被链接文档之间的关系；

script
document.write();
defer 页面加载完成后，才会执行脚本
html加载完后

async 一旦脚本可用，会异步执行

变量空间

通过script读取标签

浏览器是多线程的
async异步时，会有等待

A：src规定外部脚本文件的 URL；
B：async属性规定对脚本进行异步加载，实现JavaScript双线程加载；
C：type指示脚本的 MIME 类型；
D：defer规定是否对脚本执行进行延迟，直到页面加载为止；

ol
start
reversed

html
index.manifest
html mainfest="index.manifest"
页面的离线应用
定义页面离线应用文件

style
style scoped
