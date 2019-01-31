(function () {
    function byId(id) {
        return typeof id === 'string' ? document.getElementById(id) : id;
    }

    var index = 0,
        timer = null,
        left = 0,
        main = byId('banner-box'),
        aLiWidth = main.offsetWidth,
        pics = byId('banner').getElementsByTagName('div'),
        dots = byId('dots').getElementsByTagName('span'),
        prev = byId('prev'),
        next = byId('next'),
        len = pics.length;

    function slideImg() {

        main.onmouseover = function () {
            //清除定时器
            if (timer) clearInterval(timer);
        };
        main.onmouseout = function () {
            timer = setInterval(function () {
                index++;
                if (index >= len) {
                    index = 0;
                }
                changeImg();
            }, 3000);
        };
        //自动触发
        main.onmouseout();
        //遍历   绑定事件    点击圆点切换图片
        for (var d = 0; d < len; d++) {
            dots[d].id = d;
            dots[d].onclick = function () {
                //改变index为span的ID值
                index = this.id;

                //调用changeimg
                changeImg();
            };
        }
        //下一张
        next.onclick = function () {
            index++;
            if (index >= len) index = 0;
            changeImg();
        };
        //上一张
        prev.onclick = function () {
            index--;
            if (index < 0) index = len - 1;
            changeImg();
        };
    }
    //切换图片
    function changeImg() {
        //遍历DIV  隐藏
        for (var i = 0; i < len; i++) {
            pics[i].style.display = 'none';
            dots[i].className = '';
        }
        pics[index].style.display = 'block';
        dots[index].className = 'active';
    }
    slideImg();

    // 初始化手指坐标点
    var startPoint = 0;
    var startEle = 0;
    //手指按下
    main.addEventListener("touchstart", function (e) {
        startPoint = e.changedTouches[0].pageX;
        startEle = main.offsetLeft;
    });
    //手指滑动
    main.addEventListener("touchmove", function (e) {
        var currPoint = e.changedTouches[0].pageX;
        var disX = currPoint - startPoint;
        left = startEle + disX;
    });
    //当手指抬起的时候，判断图片滚动离左右的距离，当
    main.addEventListener("touchend", function (e) {
        console.log(left)
        if (left < -6) {
            index--;
            if (index < 0) index = len - 1;
            changeImg();
        }
        if (left > 6) {
            index++;
            if (index >= len) index = 0;
            changeImg();
        }
    })
})();