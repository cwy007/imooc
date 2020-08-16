# position

定位

模块
元素定位
层叠相关

属性
position
relative

定位模型
排版文档

static
静态，常规，自然

relative
相对定位
containing-block
可定位的祖先元素
心念家乡
浮动元素偏移，堆叠

absolute
绝对定位
脱离常规流
最近定位的祖先元素

fixed
固定定位模型
相对于谁作绝对定位

```css
/* 居中 */
div {
     position: fixed;
     margin: 0 auto;
     left: 0;
     right: 0;
}
```

sticky
磁贴定位/吸附定位/粘性定位

top: 0;
position: sticky;
偏移量
定位模型
定位巨型，然后捕获

熟练

z-index

居中

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    /*完善下列代码*/
    .per{
     width: 300px;
     height: 300px;
     background: red;
     margin-left:200px;
     margin-top: 200px;
     position: relative;
   }

   .son{
     width: 100px;
     height: 100px;
     background: blue;
     position: absolute;
     margin: auto auto;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
   }
  </style>
</head>
<body>
  <div class="per">
    <div class="son"></div>
  </div>
</body>
</html>

```
