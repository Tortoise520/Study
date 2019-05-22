function Form() {
	this.children = [];
	this.element = null;
}

Form.prototype = {
	init: function() {
		return new Error('请重写方法');
	},
	add: function() {
		return new Error('请重写方法');
	},
	getElement: function() {
		return new Error('请重写方法');
	}
}

//Form容器
function FormItem(id, parent) {
	Form.call(this);
	this.id = id || '';
	this.parent = parent || document.body;
	this.init();
}

FormItem.prototype = Object.create(Form.prototype);
FormItem.prototype.constructor = FormItem;

FormItem.prototype.init = function() {
	this.element = document.createElement('form');
	this.element.id = this.id;
	this.element.parent = this.parent;
}

FormItem.prototype.add = function(child) {
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
}

FormItem.prototype.getElement = function() {
	return this.element;
}

FormItem.prototype.show = function() {
	this.parent.appendChild(this.element);
}

//fieldset项
function FieldsetItem(name, legend) {
	Form.call(this);
	this.name = name || '';
	this.legend = legend || '';
	this.init();
}

FieldsetItem.prototype = Object.create(Form.prototype);
FieldsetItem.prototype.constructor = FieldsetItem;

FieldsetItem.prototype.init = function() {
	this.element = document.createElement('fieldset');
	this.element.name = this.name;
	var _legend = document.createElement('legend');
	_legend.innerHTML = this.legend;
	this.element.appendChild(_legend);
}

FieldsetItem.prototype.add = function(child) {
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
}

FieldsetItem.prototype.getElement = function() {
	return this.element;
}

//分组
function Group() {
	Form.call(this);
	this.init();
}

Group.prototype = Object.create(Form.prototype);
Group.prototype.constructor = Group;

Group.prototype.init = function() {
	this.element = document.createElement('div');
}

Group.prototype.add = function(child) {
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
}

Group.prototype.getElement = function() {
	return this.element;
}

//Label项
function LabelItem(forInput, text) {
	Form.call(this);
	this.for = forInput || '';
	this.text = text || '';
	this.init();
}

LabelItem.prototype = Object.create(Form.prototype);
LabelItem.prototype.constructor = LabelItem;

LabelItem.prototype.init = function() {
	this.element = document.createElement('label');
	this.element.setAttribute('for', this.for);
	this.element.innerHTML = this.text;
}

LabelItem.prototype.add = function() {}

LabelItem.prototype.getElement = function() {
	return this.element;
}

//Input项
function InputItem(id, type) {
	Form.call(this);
	this.id = id || '';
	this.type = type || 'text';
	this.init();
}

InputItem.prototype = Object.create(Form.prototype);
InputItem.prototype.constructor = InputItem;

InputItem.prototype.init = function() {
	this.element = document.createElement('input');
	this.element.type = this.type;
	this.element.id = this.id;
	if (this.type === 'submit') {
		this.element.value = 'submit';
	}
}

InputItem.prototype.add = function() {}

InputItem.prototype.getElement = function() {
	return this.element;
}

//Span项
function SpanItem(text) {
	Form.call(this);
	this.text = text || '';
	this.init();
}

SpanItem.prototype = Object.create(Form.prototype);
SpanItem.prototype.constructor = SpanItem;

SpanItem.prototype.init = function() {
	this.element = document.createElement('span');
	this.element.innerHTML = this.text;
}

SpanItem.prototype.add = function() {}

SpanItem.prototype.getElement = function() {
	return this.element;
}

/* 测试一下 */
window.onload = function()  {
	var form = new FormItem('FormItem', document.body);
	form.add(
		new FieldsetItem('account', '账号').add(
			new Group().add(
				new LabelItem('user_name', '用户名：')
			).add(
				new InputItem('user_name')
			).add(
				new SpanItem('4到7位数字或字母')
			)
		).add(
			new Group().add(
				new LabelItem('user_pwd', '密&emsp;码：')
			).add(
				new InputItem('user_pwd', 'password')
			).add(
				new SpanItem('6到12位数字或字母')
			)
		)
	).add(
		new FieldsetItem('info', '信息').add(
			new Group().add(
				new LabelItem('nick_name', '昵称：')
			).add(
				new InputItem('nick_name')
			)
		).add(
			new Group().add(
				new LabelItem('status', '状态：')
			).add(
				new InputItem('status')
			)
		)
	).add(
		new InputItem('submit', 'submit')
	).show();
}