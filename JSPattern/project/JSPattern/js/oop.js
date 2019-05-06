/* 
//小白做法，缺点：	
	//• 定义了大量全局变量
	//• 当类似的全局变量很多时，容易出现重名覆盖问题，且出现此问题后，不易发现
function checkName() {
	//验证姓名
}

function checkEmail() {
	//验证Email
} */

/*
 这样做可以避免小白做法的缺点，并且一旦出现第一名覆盖问题，整个代码块的功能将失效，很容易就能发现。
缺点：这个对象不能复制，别人直接引用时用的是同一个对象，对象中有变量时就不能给多个人使用了。
*/
/* var checkOject = {
	checkName: function() {
		//验证姓名
	}
	checkEmail: function() {
		//验证Email
	}
} */

/* 这样做可以复制多份对象了
	缺点：返回的对象与checkOject 没有任何联系
*/
/* var checkOject = function() {
	return {
		checkName: function() {
			//验证姓名
		}
		checkEmail: function() {
			//验证Email
		}
	}
} */

/* 创建类的方式 
	
*/
/* var CheckOject = function() {}

CheckOject.prototype.checkName = function() {
	//验证姓名
};
CheckOject.prototype.checkEmail = function() {
	alert('checkEmail');
	//验证Email
};
var obj = new CheckOject();
obj.checkEmail(); */

/*var CheckOject = function() {}

 CheckOject.prototype = {
	checkName: function() {
		//验证姓名
	}
	checkEmail: function() {
		//验证Email
	}
};
var obj = new CheckOject(); */

/*支持链式调用*/
/* var CheckOject = function() {}

CheckOject.prototype = {
	checkName: function() {
		//验证姓名
		return this;
	},
	checkEmail: function() {
		//验证Email
		return this;
	}
};
var obj = new CheckOject();
obj.checkName().checkEmail(); */



/* var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}

animals[0].print(); */

/* var Book = function(title, time, type) {
	this.title = title;
	this.time = time;
	this.type = type;
}
//book的值将会是undefined,此处相当于直接调用Book方法，Book执行完后返回值为undefined,所以book的值是undefined. 此时的this指向window
var book = Book('JS', '2014', 'js');
 */
/* var Book = function(title, time, type) {
	if(this instanceof Book){
		this.title = title;
		this.time = time;
		this.type = type;
	} else {
		return new Book(title, time, type);
	}
} */

/* 寄生组合式继承 */
/* 
//寄生式继承
function inheritObject(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

//寄生组合式继承
function inheritPrototype(subClass, superClass) {
	var p = inheritObject(superClass.prototype);
	p.constructor = subClass;
	subClass.prototype = p;
}

function SuperClass(name) {
	this.name = name;
	this.colors = ['red', 'blue', 'breen'];
}
SuperClass.prototype.getName = function() {
	console.log(this.name);
}
function SubClass(name, time) {
	SuperClass.call(this, name);
	this.time = time;
}
inheritPrototype(SubClass, SuperClass);
SubClass.prototype.getTime = function() {
	console.log(this.time);
}
var ins1 = new SubClass('js book', 2014);
var ins2 = new SubClass('css book', 2013);
ins1.colors.push('black');
console.log(ins1.colors);
console.log(ins2.colors);
ins1.getName();
ins2.getName();
ins2.getTime(); */

/* 
var extend = function() {
	var i = 1;//arguments数组的索引，第二个参数作为开始浅复制对象
	var len = arguments.length, target = arguments[0], source;
	for (; i < len; i++) {
		source = arguments[i];
		for(var prop in source) {
			target[prop] = source[prop];
		}
	}
	return target;
}

Object.prototype.extend = function() {
	var i = 0;//arguments数组的索引，第一个参数作为开始浅复制对象
	var len = arguments.length, source;
	for (; i < len; i++) {
		source = arguments[i];
		for(var prop in source) {
			this[prop] = source[prop];
		}
	}
} 
*/

/* 多态 */
/* function Add() {
	function one(a) {
		return a;
	}

	function two(a, b) {
		return a + b;
	}

	function three(a, b, c) {
		return a + b + c;
	}

	this.add = function() {
		var arg = arguments;
		var len = arguments.length;
		switch (len) {
			case 1:
				return one(arg[0]);
			case 2:
				return two(arg[0], arg[1]);
			case 3:
				return two(arg[0], arg[1], arg[2]);
			default:
				return 0;
		}
	}
} */
