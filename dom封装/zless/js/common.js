Object.prototype.$ = function (id){ return document.getElementById(id); }
Object.prototype.addClass = function (sClass) {
    if (!this.className.match(new RegExp('\\b' + sClass + '\\b'))) {
        this.className += ' ' + sClass;
        this.className = this.className.replace('  ',' ');
    }
}
Object.prototype.removeClass = function (sClass) {
    var reg = new RegExp('\\b' + sClass + '\\b');
    this.className = this.className.replace(reg, '');
    this.className = this.className.replace('  ',' ');
}
Object.prototype.getClass = function (oParent,sClass) {
    if (window.getElementsByClassName) {
        return oParent.getElementsByClassName(sClass);
    } else {
        var reg = new RegExp('\\b' + sClass + '\\b');
        var arr = [];
        var _class = oParent.getElementsByTagName('*');
        for (var i = 0; i < _class.length; i++) {
            if (reg.test(_class[i].className)) {
                arr.push(_class[i])
            }
        }
        return arr;
    }
}
Object.prototype.show = function(){ this.style.display = 'block'; }
Object.prototype.hide = function(){ this.style.display = 'none'; }
Object.prototype.css = function(json){
    for(var attr in json){
        if(attr == 'opacity') this.style[attr] = json[attr];
        else this.style[attr] = json[attr] + 'px';
    } 
}

function zless(){
    //菜单
    this.oBtn = $('btn_menu');
    this.openBtn = getClass(document.body,'open_link')[0];
    this.openBtn.isclick = false;
    this.oCont = $('cont');
    this.allItem = getClass(document.body,'item');

    // console.log(this.allItem);

    var _this = this;
    this.menuopen = false;
    //按钮
    this.oBtn.onclick = function(){
        _this.menuClick(this);
    }
    //全部关闭，打开
    this.openBtn.onclick = function(){
        _this.allClick(this);
    }
    //每个元素点击
    for(i=0;i<this.allItem.length;i++){
        this.allItem[i].isClick = true;
        this.allItem[i].getElementsByTagName('h3')[0].onclick = function(){
            _this.itemClick(this);
        }
        this.allItem[i].getElementsByTagName('h3')[0].onmousedown = function(){
            return false;
        }
    }
};
zless.prototype.menuClick = function(newthis){
    newthis.showEle = $('header_nav');

    if(this.menuopen){
        this.menuopen = false;
        newthis.showEle.css({height:0,transition:'.35s'});
    }
    else{
        this.menuopen = true;
        newthis.showEle.show();
        newthis.showEle.css({height:newthis.showEle.scrollHeight,transition:'.35s'});
    }
}
zless.prototype.allClick = function(newthis){
    if(this.openBtn.isclick){
        newthis.innerHTML = '全部关闭';
        this.openBtn.isclick = false;
        // this.oCont.removeClass('close');
        //更新列表的状态
        for(var i=0;i<this.allItem.length;i++){
            this.allItem[i].removeClass('item_close');
            this.allItem[i].isClick = true;
        }
    }
    else{
        newthis.innerHTML = '全部打开';
        this.openBtn.isclick = true;
        // this.oCont.addClass('close');
        //更新列表的状态
        for(var i=0;i<this.allItem.length;i++){
            this.allItem[i].addClass('item_close');
            this.allItem[i].isClick = false;
        }
    }
}
zless.prototype.itemClick = function(newthis){
    // console.log(newthis.parentNode)
    //检测开关状态
    if(newthis.parentNode.isClick){
        newthis.parentNode.addClass('item_close');
        newthis.parentNode.isClick = false;
    }
    else{
        newthis.parentNode.removeClass('item_close');
        newthis.parentNode.isClick = true;
    }
    
}

new zless();