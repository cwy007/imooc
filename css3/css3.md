# css3

CSS是层叠样式表（Cascading Style Sheets）的简称，并且它是增量式，向后兼容，
所以它支持CSS3以前的所有的版本，当然包括CSS2的内容，CSS3也称作级联样式表或者是层级样式表。
CSS3是CSS技术的升级版本，CSS3语言开发是朝着模块化发展的

+ 相邻兄弟选择器，选中的是和它同一个父元素，并且要相邻的元素，而且是它下面的那个相邻的元素
~ 通用兄弟选择器，选中的是和它同一个父元素，而且是指定的它下面兄弟元素

Element[attribute~=value] 选择器用于选取属性值中包含指定词汇的元素，只要是指定的属性，并且属性值列表中包含value，而不是在某个值中以value开头或结尾

Element[attribute^="value"]匹配指定属性的指定value值开头的元素，如果class中有多个value值，第一个值中的第一个字母不是指定的值，即使后面的属性中首字母是指定的值，那么也不能匹配上

Elemrnt[attribute*="value"]匹配的是指定属性、并且属性值中包含value的都可以匹配到，所以one、two、three、four、five都变红

Element[attribute|=”value”]匹配的是指定的属性，并且属性值是以“value-“开头的元素

动态伪类
锚点伪类
link
visited
用户行为伪类
hover
active
focus

ui 元素状态伪类
enabled
disabled
checked

结构类
first-child

n=0
nth-child(n)
nth-child(odd)
nth-child(even)

倒数
nth-last-child()

nth-of-type
nth-last-of-type()

first-of-type()
last-of-type()

唯一的
only-child()

only-of-type()

没有子元素
:empty()

否定选择器 not
parent:not(child)
nav > a:not(:last-of-type)

伪元素
element::pseudo-element
first-line
first-letter
before
selection 修改文字选中时的状态

自动换行

边界图片
border-image: source slice width outset repeat;

slice 图片的边界向内偏移多少
