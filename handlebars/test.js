/**
 * Created by iMacbook on 2017/12/21.
 */
function Foo() {
    this.y = 2;
}
typeof Foo.prototype;
Foo.prototype.z = 1;

var a = new Foo();
a.y;
a.z;

var person = function (name, age) {
    this.name = name;
    this.age = age;
}
person.prototype.hi = function () {    //共享方法hi
    alert(this.name + "的年龄" + this.age);
}
//共享数据
person.prototype.leg = 2;
person.prototype.footer = 2;
person.prototype.walk = function () {
    alert(this.name + "暴走中。。。");
}

var student = function (name, age, className) {
    //调用父类
    person.call(this, name, age);
    this.className = className;
};
/*student的实例继承person.prototype上的一些方法，向上查找
 创建一个空对象，并且这个对象的原型指向括号里的
 如果直接赋值，那么增加student的方法时，person也会增加
 不设置constructor的话会指向person*/
student.prototype = Object.create(person.prototype);
student.prototype.constructor = student;
student.prototype.hi = function () {
    alert(this.name + "的年龄" + this.age + "的班级" + this.className);
}
student.prototype.subject = function (grade) {
    alert(this.name + "喜欢的科目" + grade + "在" + this.className)
}

var lihua = new student('李华', 21, "三班");
lihua.hi();//李华的年龄21的班级三班
alert(lihua.leg);//2
lihua.walk();//李华暴走中。。
lihua.subject("English");//李华喜欢的科目是English在三班

function abc() {
};
abc.prototype;//abc{}
var binded = abc.bind(null);//undefined
typeof binded;//"function"
binded.prototype;//undefined

[1, 2] instanceof Array === true;
//左边是对象，右边是构造器或者是函数，判断右边的构造器的prototype属性是否出现在左边的对象的原型链上


//模拟重载
function person() {
    var args = arguments;
    if (typeof args[0] === "object" && args[0]) {
        if (args[0].name) {
            this.name = args[0].name;
        }
        if (args[0].age) {
            this.age = args[0].age;
        }
    } else {
        if (args[0]) {
            this.name = args[0];
        }
        if (args[1]) {
            this.age = args[1]
        }
    }
}

person.prototype.toString = function () {
    alert(this.name + "的年龄" + this.age)

}
var a = new person('aa', 21);
a.toString();
var b = new person({name: 'bb', age: 23});
b.toString()

//调用子类方法
function person(name) {
    this.name = name;
}
function student(name, age) {
    this.age = age;
    person.call(this, name);
}
var a = new student('lee', 21);
a;

person.prototype.init = function () {

}
student.prototype.init = function () {
    //...
    person.prototype.init.apply(this, arguments);
};

//链式调用
function addc() {
}
addc.prototype.addClass = function (str) {
    alert(str + "class");
    return this;
};
var a = new addc();
a.addClass("a").addClass("b").addClass("c");

//模块化
var modulea;
modulea = function() {
    var prop = 1;
    function func() {};
    return{
        func:func,
        prop:prop
    }
}();

var moduleb;
moduleb = new function() {
    var prop = 1;
    function func() {}
    this.func = func;
    this.prop = prop;
};


//探测器
!function(global) {
    function DetectorBase(configs) {
        if(!this instanceof DetectorBase) {
            throw new Error('do not incoke without new');
        }
        this.configs = configs;
        this.analyze();
    }

    DetectorBase.prototype.detect = function () {
        throw new Error('not implemented');
    }

    DetectorBase.prototype.analyze = function () {
        console.log('analyzing');
        this.data = "###data###"
    };

    function LinkDetector(links) {
        if(!this instanceof LinkDetector) {
            throw new Error('do not invoke without new');
        }
        this.links = links;
        DetectorBase.apply(this,arguments)
    };

    function ContainerDetector(containers) {
        if(!this instanceof ContainerDetector) {
            throw new Error('do not incoke with new');
        }
        this.container = containers;
        DetectorBase.apply(this,arguments);
    }

    //inherit first
    inherit(LinkDetector,DetectorBase);
    inherit(ContainerDetector,DetectorBase);

    //expand later
    LinkDetector.prototype.detect = function() {
        console.log('loding data' + this.data);
        console.log('link detection started');
        console.log('scaning links' + this.links);
    }

    ContainerDetector.prototype.detect = function() {
        console.log('loding data' + this.data);
        console.log('link detection started');
        console.log('scaning links' + this.container);
    }

    //prevent from being altered
    Object.freeze(DetectorBase);
    Object.freeze(DetectorBase.prototype);
    Object.freeze(LinkDetector);
    Object.freeze(LinkDetector.prototype);
    Object.freeze(ContainerDetector);
    Object.freeze(ContainerDetector.prototype);

    //export global object
    Object.defineProperties(global,{
        LinkDetector:{value:LinkDetector},
        ContainerDetector:{value:ContainerDetector},
        DetectorBase:{value:DetectorBase}
    });

    function inherit(subClass,superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
    }

}(this);

var cd = new ContainerDetector('#abc #def #ghi');
var ld = new LinkDetector('http://baidu.com http://taobao.com http://tmall.com')
cd.detect();
ld.detect();
/*
analyzing
analyzing
loding data###data###
link detection started
scaning links#abc #def #ghi
loding data###data###
link detection started
scaning linkshttp://baidu.com http://taobao.com http://tmall.com*/


function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.length = length;
    this.push = push;
    this.pop = pop;
    this.peek = peek;//查找

}

function push(element) {
    this.dataStore[this.top++] = element;
}

function peek(element) {
    return this.dataStore[this.top -1];
}

function pop() {
    return this.dataStore[--this.top];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}
























