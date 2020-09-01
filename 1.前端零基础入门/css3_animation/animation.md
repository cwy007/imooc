# animation

视觉暂留

从一种样式逐渐变化为另一种样式的效果
动画可以定义为使用绘画的手法，创造生命运动的艺术，通过把人物的表情、动作、变化等分解后画成许多动作瞬间的画幅，利用视觉暂留的原理，在一幅画还没有消失前播放下一幅画，就会给人造成一种流畅的视觉变化效果，CSS3动画使元素从一种样式逐渐变化为另一种样式的效果，可以改变任意多的样式任意多的次数。

animation-name: keyframename|none;
设置对象所应用的动画名称

animation-name属性检索或设置对象所应用的动画名称，必须与规则@keyframes配合使用，因为动画名称由@keyframes定义如果提供多个属性值，以逗号进行分隔。

animation-iteration-count

animation-fill-mode: forwards;

css3 animation

animation-duration:time; 0
设置对象动画的持续时间
默认值为0，表示没有动画效果

-webkit-
手机端兼容

名称
持续的时间

rotateX

动画为一组图片连续起来
标识符

A、 infinite是animation-iteration-count属性的参数，表示无限循环
B、forwards是animation-fill-mode属性的参数，表示设置对象状态为动画结束时的状态
C、animation-duration是用来指定元素播放动画所持续的时间长，取值<time>为数值，单位为s （秒）或者毫秒(ms)其，默认值为0
D、none是animation-name属性的默认值，当值为none时，将没有任何动画效果

animation-timing-function:ease;
动画的过渡类型

贝塞尔曲线
ease, linear, ease-in, ease-out, ease-in-out
过渡

animation-delay
延迟
延迟不算动画开始，属于动画之外的内容
定制动画之外的时间

animation-duration 表示真正动画的时间

.5
0.5 推荐使用 .5

animation-delay 属性定义动画什么时候开始，单位可以是秒（s）或毫秒（ms），允许负值，-2s使动画马上开始，但会跳过2s进入动画。

animation-iteration-count: infinite;
默认值为1
执行一次动画
动画本身

animation-direction:reverse|normal|alternate|alternate-reverse|initial|inherit;

alternate
交替运行
依赖于循环的次数

animation-fill-mode:none|forwards|backwards|both|initial|inherit;
还未开始
播放完成
显示的元素状态
forwards 结束状态
backwards 开始状态

A、animation-fill-mode: none;中none是默认值，不设置对象动画之外的状态

B、animation-fill-mode: forwards;中forwards是设置对象状态为动画结束时的状态

C、animation-fill-mode: backwards;中backwards是设置对象状态为动画开始时的状态

D、animation-fill-mode: both;中both是设置对象状态为动画结束或开始的状态

animation-play-state:paused|running;
正在运行
暂停

animation
name duration timing-function delay iteration-count derection fill-mode play-state;

name 必须
duration 必须

@keyframes
关键帧

动画变化的关键位置
逐步改变从一个css样式到另一个css样式

keyframes-selector 动画持续时间的百分比
from 0%
to 100%
css-styles

@keyframes animationname {
  keyframe-selector {
    css-styles;
  }
}

@-webkit-keyframes

animationname：必写项，定义animation的名称

keyframes-selector：必写项，动画持续时间的百分比，0-100%、from (0%)、to (100%)

css-styles：必写项，一个或多个合法的CSS样式属性

position-fixed
带图片的元素放在伪元素中
will-change
需要提前通知浏览器元素将要做什么动画，让浏览器提前准备合适的优化设置

will-change: auto|scroll-position|contents|custom-ident|animateable-feature;

auto没有特定的意图
scroll-position将要改变元素滚动位置
contents 将要改变元素的内容
custom-ident 明确指定将要改变的属性和给定的名称; 推荐，new layer
animateable-feature 可动画的特征

will-change: left/top/margin;
