window.onload = function() {
	var spans = document.getElementsByTagName('span');
	spans[0].onmouseover = function () {//此匿名函数就是桥接函数
		changeColor(this, 'red', '#ddd');
	}
	spans[0].onmouseout = function () {
		changeColor(this, '#333', '#f5f5f5');
	}
	spans[1].onmouseover = function () {//此匿名函数就是桥接函数
		changeColor(this.getElementsByTagName('strong')[0], 'red', '#ddd');
	}
	spans[1].onmouseout = function () {
		changeColor(this.getElementsByTagName('strong')[0], '#333', '#f5f5f5');
	}
	spans[2].onmouseover = function () {//此匿名函数就是桥接函数
		changeColor(this.getElementsByTagName('strong')[0], 'red', '#ddd');
	}
	spans[2].onmouseout = function () {
		changeColor(this.getElementsByTagName('strong')[0], '#333', '#f5f5f5');
	}
	
}

//抽象出来的方法。鼠标经过时改变颜色的动作是相同的
function changeColor(dom, color, bg) {
	dom.style.color = color;
	dom.style.background = bg;
}