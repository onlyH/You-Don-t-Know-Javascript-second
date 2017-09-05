# btn_reset
对表单按钮进行美化

### id设置的值与label for 设置的值必须相同
input[type=text] 的使用

``` bash
function addLoadEvent(func){
	var oldonload = window.onload;
	//得到上一个onload事件的函数
	if(typeof  window.onload! ='function'){
		//判断类型是否为‘function’，注意typeof返回的是字符串
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			//调用之前覆盖的onload事件的函数
			func();
		}
	}
}
``` 

### 图片保证在正中央的写法
``` bash
{
	width:500px;
	height:326px;
	position:absolute;
	left:50%;
	top:50%;
	margin:-163px 0 0 -250px;
}
```
