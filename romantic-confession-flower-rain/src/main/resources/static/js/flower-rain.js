//定义花 对象
function Flower(pic) {
    //创建盒子
    this.img = document.createElement("img");
    //半径
    this.r = randomRange(20, 50);
    //初始位置
    this.left = randomRange(0, 1000);
    this.top = randomRange(0, 600);
    //图片地址
    this.img.src = pic;
    this.speedX = randomRange(1, 5);
    this.speedY = randomRange(1,15);
}

//绘制花瓣
Flower.prototype.drawFlower = function (parent) {
    var style = this.img.style;
    style.width = this.r * 2 + "px";
    style.height = this.r * 2 + "px";
    style.left = this.left + "px";
    style.top = this.top + "px";
    parent.appendChild(this.img);
}

//移动
Flower.prototype.run = function (parent) {
    var maxLeft = parent.offsetWidth - this.r * 2;
    var maxTop = parent.offsetHeight - this.r * 2;
    var ts = this;
    setInterval(function () {
        //获取移动距离
        var left = ts.img.offsetLeft + ts.speedX;
        var top = ts.img.offsetTop + ts.speedY;

        if (left <= 0) {
            left = 0;
            ts.speedX *= -1;
        }
        if (top <= 0) {
            top = 0;
            ts.speedY *= -1;
        }
        if (left >= maxLeft) {
            left = 0;
            ts.speedX *= -1;
        }
        if (top >= maxTop) {
            top = 0;
            ts.speedY *= -1;
        }

        //start mobile
        ts.img.style.left = left + "px";
        ts.img.style.top = top + "px";

    }, 20);
}
//堆积
Flower.prototype.accumulation = function (parent) {
    var i = 0;

}


//随机数
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}