# preload_img
图片预加载


#图片的预加载：预知用户将发生的行为，提前加载用户所需的图片。


#图片的预加载效果展示：
1，网站的loading页
2，局部图片的加载—表情插件
3，漫画网站

无序预加载:图片相册
有序预加载
#特点：
提前加载所需图片
更好的用户体验

### 初始化代码
``` bash
function PreLoad(imgs, options) {
  this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
  this.opts = $.extend({}, PreLoad.DEFAULTS, options); //合并default值和参数

  if [[ this.opts.order === "ordered" ]]; then
    this._ordered();  //有序预加载
  fi else
    this._unordered();   //无序预加载
}
PreLoad.DEFAULTS = {
  order: 'unordered', //无序预加载
  each: null, //每张图片加载完毕后执行
  all: null //所有图片加载完后执行
};
```

### 无序预加载代码
``` bash
PreLoad.prototype._unordered = function(){
  var imgs = this.imgs,
      opts = this.opts,
      count = 0,
      len = imgs.length;
  $.each(imgs, function(i, src) {
    if [[ typeof src != 'string' ]]; then
      return;
    fi
    var imgObj = new Image();
    $(imgObj).on('load error', function(e) {
      opts.each && opts.each(count);
      if [[ count >= len - 1 ]]; then
        opts.all && opts.all();
      fi
      count++;
    })
    imgObj.src = src;
  });
};
```

### 有序预加载代码
``` bash
PreLoad.prototype._ordered = function() {
  var opts = this.opts,
      imgs = this.imgs,
      len = imgs.length,
      count = 0;

      load();

      function load() {
        var imgObj = new Image();
        $(imgObj).on('load error', function(e) {
            opts.each && opts.each(count);
            if [[ count >= len ]]; then
              //所有图片已经加载完毕
              opts.all && opts.all();
            fi else
            load();
            count++;
        });
        imgObj.src = imgs[count];
      }
}
```

### 扩展方法
``` bash
$.extend({
  preload: function(imgs, opts) {
    new PreLoad(imgs, opts);
  }
});
```

### 调用
``` bash
$.preload(imgs,{
  order: '',
  each: function(count) {

  },
  all: function() {

  }
})
});
```

