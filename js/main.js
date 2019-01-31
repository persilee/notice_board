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

// 字体计算 根元素12
var calculate_size = function () {
    var BASE_FONT_SIZE = 80;
    var docEl = document.documentElement,
        clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = BASE_FONT_SIZE * (clientWidth / 1920) + 'px';
};
if (document.addEventListener) {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    window.addEventListener(resizeEvt, calculate_size, false);
    document.addEventListener('DOMContentLoaded', calculate_size, false);
    calculate_size();
}