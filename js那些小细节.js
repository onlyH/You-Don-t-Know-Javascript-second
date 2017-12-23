遇到浮点数解决办法：
var a = 0.1;
b = 0.2;
c = a + b; //0.30000000000000004
c = (a * 10 + b * 10) / 10; //0.3

js函数调用： 4 种
每种方式的不同方式在于this的初始化
this指向函数执行时的当前对象。
this是保留关键字， 不能修改this的值

function myFunction(a, b) {
	return a * b;
}
document.getElementById(‘demo’).innerHTML = myFunction(3, 4); //12
全局变量， 方法或者函数容易造成命名冲突的bug
当函数没有被自身的的帝乡调用时， this的值就会变成全局对象。 全局对象 == 浏览器窗口 == window对象
var add = (function() {
	var cons = 0;
	return function() {
		return cons += 1
	}
})();

function show1() {
	document.getElementById('demo').innerHTML = add();
}
闭包

	<
	script type = "text/javascript" >
	var p1 = 2;
p2 = 3;
document.getElementById('btn').addEventListener('click', function() {
	myFunction(p1, p2);
})

function myFunction(a, b) {
	var result = a * b;
	document.getElementById('demo').innerHTML = result;
}

<
/script>   事件监听
对象

person = {
	lastName: "abc",
	firstName: "def",
	age: 12,
	color: 'yellow'
}
document.write(person.lastName + person.age)

var test = new Object()
test.lastName = 'jion',
	test.firstName = 'deo',
	test.age = 12,
	test.color = 'blue'
document.write(test.lastName + test.age)———————————————————————————————————————————
function myFunction(firstName, lastName, age, color) {
	this.firstName = firstName,
		this.lastName = lastName,
		this.age = age,
		this.color = color
}
myTest = new myFunction('jion', 'deo', 21, 'green');
document.write(myTest.firstName + ”"+myTest.color)
		对象构造器———————————————————————————————————————— -
		function person(firstName, lastName, age, eyeColor) {
			this.firstName = firstName;
			this.lastName = lastName;
			this.age = age;
			this.eyeColor = eyeColor;
			this.changeName = changeName;

			function changeName(name) {
				this.lastName = name;
			}
		}
		myTest = new person('abc', 'def', 34, 'black'); myTest.changeName('darker'); document.write(myTest.lastName)

		—————————————————————————————————————————

		function myFunction() {
			var x;
			var txt = "";
			var person = {
				firstName: 'abc',
				lastName: 'def',
				age: 45
			}
			for(x in person) {
				txt = txt + person[x];
			}
			document.getElementById('demo').innerHTML = txt
		}———————————————————————————————————————
		测试for in循环 循环的是属性 person = {
			name: 'abc',
			color: 'yellow',
			age: 14,
			sport: 'baskball'
		}
		for(var i in person) {
			document.write(i);
		} //name color age sport
		————————————————————————————————————————
		var aa = setInterval(function() {
			cc()
		}, 1000);

		function cc() {
			var d = new Date();
			var t = d.toLocaleTimeString();
			document.getElementById('demo').innerHTML = t;
		}——————————————————————————————————————— -
		function setCookie(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires;
		}

		function getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i].trim();
				if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
			}
			return "";
		}

		function checkCookie() {
			var user = getCookie("username");
			if(user != "") {
				alert("Welcome again " + user);
			} else {
				user = prompt("Please enter your name:", "");
				if(user != "" && user != null) {
					setCookie("username", user, 30);
				}
			}
		} <
		body onload = “checkCookie()
		"></body>———————————————————————————————————

		var aa = ['aa', 'vv', 'ff', 'ee'];
		for(var i = 0; i < aa.length; i++) {
			alert(aa[i])
		}———————————————————————————————————————
		function showPic(aa) {
			var source = aa.getAttribute('href');
			var palceHolder = document.getElementById('xx');
			palceHolder.setAttribute('src', source);
		} <
		a href = "img/HBuilder.png"
		title = "a title top”>xx</a>—————————————————————————————————————— -
		<
		a href = "baidu.com"
		onclick = "return false”>click</a>
		o 'clock = showPic(this);return false;——————————————————————————————————————