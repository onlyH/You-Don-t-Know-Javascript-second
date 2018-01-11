var handlerUnit = {
    //添加事件
    addhander: function (element, type, hand) {
        if (element.addEventListener) {
            element.addEventListener(type, hand, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, hand)
        } else {
            element['on'+type] = hand;
        }
    },
    //移除事件
    rmovehander: function (element, type, hand) {
        if (element.removeEventListener) {
            element.removeEventListener(type, hand, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, hand)
        } else {
            element['on'+type] = null;
        }
    },
    //判断兼容event事件
    eventhandler: function (event) {
        return event ? event : window.event;
    },

    //判断阻止冒泡
    stopBubble: function (event) {
        if(event.stopPropagation) {
            event.stopPropagation()
        }else{
            event.cancelBubble = true;
        }
    },
    //阻止默认行为
    Default: function (event) {
        if(event.preventDefault) {
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    //获取事件类型
    eventType: function (event) {
        return event.type;
    },
    //判断来自哪个元素
    target: function (event) {
        return event.target || event.srcElement;
    }
};