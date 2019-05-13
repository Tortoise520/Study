/**
 * 外观模式
 */

/* 
	添加事件套餐(解决监测器兼容问题) 
	如果直接用dom.onclick这种方式绑定事件，会有以下问题：
	1、多个人给dom绑定onclick事件时，后者会把前者覆盖；
	2、IE低版本浏览器中不兼容e.preventDefault()和e.target
*/
function addEvent(dom, type, fn) {
	if (!dom) {
		console.error('Dom is null!');
		return;
	}
	if (dom.addEventListener) {
		//非IE浏览器
		dom.addEventListener(type, fn, false);
	} else if (dom.attachEvent) {
		dom.attachEvent('on' + type, fn);
	} else {
		dom['on' + type] = fn;
	}
}


/* 解决IE浏览器没有e.preventDefault()和e.target的问题 */
var getEvent = function(event) {
	//普通浏览器返回event,IE返回window.event
	return event || window.event;
}

var getTarget = function(event) {
	var event = getEvent(event);
	return event.target || event.srcElement;
}

var preventDefault = function(event) {
	var event = getEvent(event);
	if (event.preventDefault) {
		event.preventDefault();
	} else {
		event.returnValue = false;
	}
	
}

function hidePageAlert() {
	//隐藏提示框
}

/* 封装代码库中的多个功能来简化底层操作 */
var A = {
	g: function(id) {
		return document.getElementById(id);
	},
	css: function(id, key, value) {
		this.g(id).style[key] = value;
	},
	attr: function(id, key, value) {
		this.g(id)[key] = value;
	},
	html: function(id, value) {
		this.g(id).innerHTML = value;
	},
	on: function(id, type, fn) {
		this.g(id)['on' + type] = fn;
	}
}


/* 测试一下 */
window.onload = function() {
	var myInput = document.getElementById('myInput');
	addEvent(myInput, 'click', function() {
		console.log('First event');
	});
	addEvent(myInput, 'click', function() {
		console.log('Second event');
	});
	addEvent(myInput, 'click', function() {
		console.log('Third event');
	});
	
	var dom = document;
	addEvent(dom, 'click', function(e) {
		preventDefault(e);
		if (getTarget(e) !== myInput) {
			hidePageAlert();
		}
	});
	
	A.css('myInput', 'background', 'red');
}