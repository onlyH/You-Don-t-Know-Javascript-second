# weibo_bolg
仿博客页面设计
### 重制样式的目的
使样式在不同浏览器下保持一致

### 用ul和li为例，直接在li中加display-inline和float：right，那么第一个元素反而会跑到最右边的，因为浮动是重第一个开始的，而用ul家float：right就不会出现这个问题

### background-attachment设置或检索背景图像是随对象内容滚动还是固定的；
fixed：固定

### 有的时候设置字体的大小会改变行高，即如上下两张图片之间有缝隙。可以在外层div加入font-size:0  去除缝隙

### 父元素的子元素浮动了，父元素就会塌缩至最小值，子元素不再受父元素的拘束。方法是清楚父元素浮动：
.element:afer{content:'';display:block;clear:both;}

``` bash
letter-spacing    //调节字体间距


.article-preview:nth-child(odd) //奇偶选择器

backgroud-size:cover;    //背景图片设置为封面，把图片扩展到整个页面；
backgroud-posotion:center center;    //居中
background:transparent    //背景透明


transform:rotate(45deg)   //旋转45度

.article-preview > div    //父元素下的子元素div，不包含子元素下的div
```