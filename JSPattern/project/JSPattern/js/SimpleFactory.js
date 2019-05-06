//简单工厂模式
function createPop(type, text) {
	var o = new Object();
	o.content = text;
	o.show = function() {
		console.log(this.text);
	}
	if (type === 'alert') {
		//差异部分
		o.content = 'alert:' + text;
	}
	if (type === 'confirm') {
		//差异部分
		o.content = 'confirm:' + text + '- 还要多加个注册按钮';
	}
	if (type === 'prompt') {
		//差异部分
		o.content = 'prompt:' + text;

	}
	return o;
}

//用户名不能多于16个字母或数字 
//密码不正确
//用户名不存在，请重新输入
//登录成功！欢迎回来！
var usernameAlert = createPop('alert', '用户名不能多于16个字母或数字 ');