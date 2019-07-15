//把气球画出来
//让气球动起来
function Balloon(pic) {
    //盒子
    this.div = document.createElement("div");
    //半径  范围 20-80
    this.r = randomRange(20, 80);
    //初始位置
    this.left = randomRange(0, 1000);
    this.top = randomRange(0, 600);
    //背景颜色
    if (pic == null) {
        this.bg = randomColor();
        this.r = randomRange(20, 80);
    } else {
        this.bg = pic;
        this.r = 85;
    }
    //速度
    this.speedX = randomRange(-6, 6);
    this.speedY = randomRange(-6, 6);
}

//绘制气球
Balloon.prototype.drawBalloon = function (parent) {
    var style = this.div.style;
    style.width = this.r * 2 + "px";
    style.height = this.r * 2 + "px";
    style.left = this.left + "px";
    style.top = this.top + "px";
    style.background = this.bg;
    style.backgroundPosition="center";
    parent.appendChild(this.div);
}
//运动
Balloon.prototype.run = function (parent) {
    var maxLeft = parent.offsetWidth - this.r * 2;
    var maxTop = parent.offsetHeight - this.r * 2;

    var ts = this;
    //定时器
    setInterval(function () {
        //获取移动距离
        var left = ts.div.offsetLeft + ts.speedX;
        var top = ts.div.offsetTop + ts.speedY;

        //不能出边界
        if (left <= 0) {
            left = 0;
            ts.speedX *= -1;
        }
        if (top <= 0) {
            top = 0;
            ts.speedY *= -1;
        }
        if (left >= maxLeft) {
            left = maxLeft;
            ts.speedX *= -1;
        }
        if (top >= maxTop) {
            top = maxTop;
            ts.speedY *= -1;
        }

        //开始移动
        ts.div.style.left = left + "px";
        ts.div.style.top = top + "px";

    }, 20);
}

//随机圆
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

//随机颜色
function randomColor() {
    var r = randomRange(0, 255);
    var g = randomRange(0, 255);
    var b = randomRange(0, 255);
    var a = randomRange(0, 1);
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}