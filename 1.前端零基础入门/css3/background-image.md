# background

background-clip
绘制区域
图片裁剪

border-box | padding-box | content-box;

其他的区域会被裁剪掉

background-origin: border-box | padding-box | content-box;指定background-position的相对位置
background-position

绘制背景图像的起点
A、background-clip指定背景显示的范围
B、background-size属性指定背景图片的尺寸大小
C、background-origin属性指定背景图片的绘制起点
D、background-position属性是CSS2的，用来定位图片的位置

缺省值
background-size
100% auto
100%
50%
50% auto
800px auto

背景图片是否缩放
cover 能做到不留白
contain 至少保证一遍 100%，保持背景图片的原始比例

多重背景图像
background: url(), url();
放在前面的图会遮盖放在后面的图

背景整合
顺序

CSS3线性渐变中的透明度，颜色渐变的透明效果使用rgba（）进行表示，透明度的取值是0~1，如果值是0，那就是纯透明；如果值是1，就是不透明
