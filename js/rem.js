//����html��font-size
    var EventUtil = {
        addHandler: function(element, type, handler){
            if (element.addEventListener){
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent){
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        }
    };
    function change() {
        var window_w = document.documentElement.clientWidth;
        window_w = window_w > 750 ? 750 : window_w;
        //����ƶ�����Ƹ���1920px�ģ�window_w�ͳ���19.2
        document.documentElement.style.fontSize = window_w / 7.5 + 'px';
    }
    change();
    //����ֻ�������
    EventUtil.addHandler(window, 'orientationchange', change);
    EventUtil.addHandler(window, 'resize', change);
    //��Ļ�ߴ�仯
    // window.addEventListener('orientationchange',change,false);
    // window.addEventListener('resize',change,false);