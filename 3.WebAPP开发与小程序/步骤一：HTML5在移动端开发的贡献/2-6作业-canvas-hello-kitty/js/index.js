(function() {
    // 1.创建2d绘图环境
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    // 2.尾巴
    ctx.strokeStyle = '#33190c';
    ctx.lineWidth = 4;
    ctx.fillStyle = '#ffffd9';

    ctx.moveTo(433, 458);
    ctx.lineTo(477, 438); // 尾巴第一条线
    ctx.bezierCurveTo(492, 433, 496, 453, 484, 463); // 尾巴圆角
    ctx.lineTo(433, 494); // 尾巴剩余部分
    ctx.fill();
    ctx.stroke();

    // 3.身体
    ctx.beginPath();
    ctx.moveTo(255, 392); // 左边身体
    ctx.lineTo(255, 526);
    ctx.bezierCurveTo(256, 555, 282, 557, 293, 530); // 左脚
    ctx.lineTo(383, 530);
    ctx.bezierCurveTo(392, 557, 419, 558, 428, 526); // 右脚
    ctx.quadraticCurveTo(434, 523, 430, 393); // 右身
    ctx.fill();
    ctx.stroke();

    // 4.耳朵
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.moveTo(106, 79);
    ctx.quadraticCurveTo(114, 4, 209, 14); // 左耳
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(376, 14);
    ctx.quadraticCurveTo(431, 13, 446, 15); // 右耳
    ctx.quadraticCurveTo(488, 20, 498, 48); // 右耳
    ctx.quadraticCurveTo(508, 75, 512, 110); // 右耳
    ctx.fill();
    ctx.stroke();

    // 5.头
    ctx.beginPath();
    ctx.moveTo(280, 6);
    ctx.bezierCurveTo(476, 0, 535, 154, 541, 166); // 右耳下方曲线
    ctx.lineTo(546, 180); // 右耳下方曲线
    ctx.bezierCurveTo(584, 304, 530, 368, 432, 392);
    ctx.quadraticCurveTo(210, 460, 90, 372);
    ctx.quadraticCurveTo(38, 324, 34, 314);
    ctx.quadraticCurveTo(1, 268, 38, 174);
    ctx.quadraticCurveTo(128, 8, 280, 6);
    ctx.fill();
    ctx.stroke();

    // 6.胡须
    // 左边三根胡须
    ctx.beginPath();
    ctx.moveTo(6, 212);
    ctx.lineTo(23, 212);
    ctx.moveTo(2, 246);
    ctx.lineTo(15, 246);
    ctx.moveTo(6, 284);
    ctx.lineTo(17, 281);

    // 右边三根胡须
    ctx.moveTo(529, 233);
    ctx.lineTo(596, 246);
    ctx.moveTo(525, 263);
    ctx.lineTo(587, 290);
    ctx.moveTo(523, 296);
    ctx.lineTo(581, 331);
    ctx.stroke();

    // 7.眉毛
    ctx.beginPath();
    ctx.moveTo(163, 40);
    ctx.lineTo(182, 42);
    ctx.moveTo(374, 54);
    ctx.lineTo(395, 56);
    ctx.stroke();

    // 8.害羞斜杠
    ctx.beginPath();
    ctx.moveTo(71, 205);
    ctx.lineTo(65, 212);
    ctx.moveTo(88, 205);
    ctx.lineTo(82, 212);
    ctx.moveTo(448, 218);
    ctx.lineTo(443, 224);
    ctx.moveTo(466, 218);
    ctx.lineTo(460, 225);
    ctx.moveTo(482, 220);
    ctx.lineTo(475, 228);
    ctx.stroke();

    // 9.眼睛
    ctx.fillStyle = '#33190c';
    ctx.beginPath();
    ctx.moveTo(129, 140); // 左眼
    ctx.bezierCurveTo(206, 118, 215, 204, 172, 226);
    ctx.bezierCurveTo(92, 249, 85, 165, 129, 140);

    ctx.moveTo(332, 154); // 右眼
    ctx.bezierCurveTo(421, 108, 462, 208, 407, 240);
    ctx.bezierCurveTo(357, 279, 264, 214, 332, 154);
    ctx.fill();
    ctx.stroke();

    // 10.眼珠
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(177, 151); // 左眼珠
    ctx.bezierCurveTo(190, 152, 183, 166, 177, 164);
    ctx.bezierCurveTo(168, 164, 168, 152, 177, 151);

    ctx.moveTo(393, 154); // 右眼珠
    ctx.bezierCurveTo(406, 155, 402, 171, 393, 169);
    ctx.bezierCurveTo(384, 169, 382, 155, 393, 154);
    ctx.fill();
    ctx.stroke();

    // 11.鼻子
    ctx.fillStyle = '#33190c';
    ctx.beginPath();
    ctx.moveTo(237, 220); // 圆点
    ctx.bezierCurveTo(237, 209, 254, 209, 254, 220);
    ctx.bezierCurveTo(254, 231, 238, 231, 237, 220);
    ctx.fill();

    ctx.moveTo(218, 229); // 弧线
    ctx.bezierCurveTo(222, 241, 239, 243, 245, 226);
    ctx.bezierCurveTo(254, 245, 279, 244, 285, 234);
    ctx.stroke();

    // 12.爱心
    ctx.fillStyle = '#f30000';
    ctx.beginPath();
    ctx.moveTo(98, 376);
    ctx.bezierCurveTo(70, 301, 156, 194, 246, 303);
    ctx.bezierCurveTo(403, 197, 476, 345, 424, 402);
    ctx.quadraticCurveTo(375, 475, 260, 528);
    ctx.quadraticCurveTo(247, 536, 225, 526);
    ctx.quadraticCurveTo(130, 463, 98, 376);
    ctx.fill();
    ctx.stroke();

    // 13.手
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(98, 377); // 左手
    ctx.bezierCurveTo(137, 367, 128, 417, 113, 415);
    ctx.bezierCurveTo(97, 418, 74, 390, 98, 377);

    ctx.moveTo(390, 434); // 右手
    ctx.bezierCurveTo(358, 407, 392, 366, 427, 388);
    ctx.quadraticCurveTo(416, 409, 393, 435);
    ctx.fill();
    ctx.stroke();
})();
