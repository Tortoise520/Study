/**
 * 代理模式
 */

/* 统计代理（对请求img的url进行统计） */
var count = (function(){
	var _img = new Image();
	return function(param) {
		var str = 'http://www.count.com/a.gif?';
		for(var i in param) {
			str += i + '=' + param[i];
		}
		_img .src = str;
	}
})();

/* 测试一下，统计num */
count({num: 10});