/**
 * 单例模式
 */

/**
 * 使用命名空间实现单例模式。
 * 这里的Ming相当于JQuery中的JQuery。JQuery中调用方法通常是JQuery.animate()。
 */
var Ming = {
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

/**
 * 使用单例模式管理静态变量
 */
var conf = (function() {
	var conf = {
		MAX_NUM: 100,
		MIN_NUM:1,
		COUNT: 1000
	};
	return {
		get: function(name) {
			return conf[name] ? conf[name] : null;
		}
	}
})();

var count = conf.get('COUNT');
console.log(count);//1000

/**
 * 惰性单例
 */
var LazySingle = (function() {
	var _instance = null;
	function single() {
		return {
			publicMethod: function(){},
			publicProperty: '1.0'
		}
	}
	return function() {
		if (!_instance) {
			_instance = single();
		}
		return _instance;
	}
})();

console.log(LazySingle().publicProperty);//1.0

