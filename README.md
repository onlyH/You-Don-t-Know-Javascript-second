# 你不知道的javascript（中卷）
使用 delete 运算符可以将单元从数组中删除， 但是请注意， 单元删除后， 数组的 length 属性并不会发生变化
slice() 返回参数列表（类数组） 的一个数组复本。用 ES6 中的内置工具函数 Array.from(..)也能实现同样的功能
```
var arr = Array.from(arguments)
```
JavaScript 中字符串是不可变的， 而数组是可变的。 并且 a[1] 在 JavaScript 中并非总是合法语法
正确 的方法应该是 a.charAt(1)

字符串不可变是指字符串的成员函数不会改变其原始值， 而是创建并返回一个新的字符串。 而数组的成员函数都是在其原始值
上进行操作。
```
c = a.tpUpperCase();
a ===c;
s;
c;
b.push("!")
b;
```
