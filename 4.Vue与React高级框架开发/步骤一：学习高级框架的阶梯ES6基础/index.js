let node = {
    type: "Identifier",
    name: "Es",
    loc: {
        start: ["line", "column"],
        end: {
            line: 1,
            column: 4
        }
    }
};

let { loc: { start: [line1], end: {line}}} = node;

document.write('startLine: ' + line1 + ', endLine:' + line);

(function() {
    randNum = (start=0, end=100) => {
        var length = end - start;
        return Math.ceil(Math.random() * length + start);
    }

    let arr = [];
    for(let i = 0; i < 10; i++) {
        arr.push(randNum());
    }

    document.body.innerHTML = arr.sort((a, b) => b - a);
    document.body.innerHTML += '<br/>';
    document.body.innerHTML += `这组数中最大的值是：${Math.max(arr)}，最小的值是：${Math.min(arr)}`
})();

// JavaScript生成指定范围的随机数和随机数序列
// https://blog.csdn.net/sinat_34693148/article/details/71036617?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.channel_param&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.channel_param

function * foo(){}

imgLoad = (url) => {
    return new Promise((resolve) => {
        let img = new Image();
        img.src = url;
        img.onload = () => {
            document.body.append(img);
            setTimeout(() => {
                resolve();
            }, 1000);
        }
    });
}

let imgUrl1 = 'http://climg.mukewang.com/5b16558d00011ed506000338.jpg';
let imgUrl2 = 'http://climg.mukewang.com/5b165603000146ca06000338.jpg';
let imgUrl3 = 'http://climg.mukewang.com/5b1656140001c89906000338.jpg';
imgLoad(imgUrl1)
    .then(() => {
        return imgLoad(imgUrl2);
    })
    .then(() => {
        return imgLoad(imgUrl3);
    });


var img = function (url) {
    return new Promise(function (res) {
        var imgurl = document.createElement('img');
        imgurl.src = url;
        document.body.appendChild(imgurl);
        imgurl.onload = function () {
            setTimeout(function () {
                res();
            }, 1000)

        }
    })
}
img('http://climg.mukewang.com/5b16558d00011ed506000338.jpg').then(
    function () {
        img('http://climg.mukewang.com/5b165603000146ca06000338.jpg ')
    }
).then(function () {
    img('http://climg.mukewang.com/5b1656140001c89906000338.jpg ')
})
