/* document.ready(function(){

}) */
var CanWidth = 500;
var CanHeight = CanWidth;

var windowOffsetX

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var isMouseOn = false;


var beginPath;
window.onload = function() {
    drawGrid();

    canvas.onmousedown = function(e) {
        //鼠标落下
        e.preventDefault(); //阻止默认事件响应
        isMouseOn = true;
        beginPath = windowToCanvas(e.x, e.y);



        //   mousePath = { x: e.x, y: e.y }
        //  write(mousePath);



    }

    canvas.onmouseup = function(e) {
        //鼠标放开
        e.preventDefault();
        isMouseOn = false;

    }
    canvas.onmousemove = function(e) {
        //鼠标在画布中移动
        e.preventDefault();
        if (isMouseOn) {
            ctx.beginPath();
            ctx.moveTo(beginPath.x, beginPath.y);
            var movePath = windowToCanvas(e.x, e.y);
            x = movePath.x;
            y = movePath.y;
            ctx.lineTo(x, y);
            ctx.strokeStyle = "#000"
            ctx.stroke();
            beginPath = movePath;
        };

    }
    canvas.onmouseout = function(e) {
        //鼠标移出画布
        e.preventDefault();
        isMouseOn = false;


    }
};

function write(path) {
    ctx.beginPath();
    ctx.moveTo(path.x, path.y);

}

function windowToCanvas(x, y) {
    var box = canvas.getBoundingClientRect();
    return {
        x: x - box.left,
        y: y - box.top
    }
}

function drawGrid() {
    ctx.save(); //保证之后的绘图不影响这里的画布
    canvas.height = CanHeight;
    canvas.width = CanWidth;
    ctx.strokeStyle = "#666"

    ctx.beginPath();
    ctx.moveTo(3, 3)
    ctx.lineTo(CanHeight - 3, 3)
    ctx.lineTo(CanHeight - 3, CanHeight - 3)
    ctx.lineTo(3, CanHeight - 3);
    ctx.closePath();
    ctx.lineWidth = 6;
    ctx.stroke()


    ctx.beginPath();
    ctx.moveTo(CanWidth / 2, 0)
    ctx.lineTo(CanWidth / 2, CanHeight)

    ctx.moveTo(0, CanHeight / 2)
    ctx.lineTo(CanWidth, CanHeight / 2)

    ctx.moveTo(0, 0)
    ctx.lineTo(CanWidth, CanHeight);

    ctx.moveTo(0, CanHeight)
    ctx.lineTo(CanWidth, 0);

    ctx.lineWidth = 2;
    ctx.stroke();



    ctx.restore();
}