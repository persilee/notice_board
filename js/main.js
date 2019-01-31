var lastTime = new Date().getTime();
var currentTime = new Date().getTime();
var timeOut = 1 * 60 * 1000; //设置超时时间： 10分

window.onload = function () {
    document.onmousemove = function () {
        lastTime = new Date().getTime(); //更新操作时间
    }
}

function testTime() {
    currentTime = new Date().getTime(); //更新当前时间
    if (currentTime - lastTime > timeOut) { //判断是否超时
        window.location.href = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/index.html';
    }
}

/* 定时器  间隔1秒检测是否长时间未操作页面  */
window.setInterval(testTime, 1000);