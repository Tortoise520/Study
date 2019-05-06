/*
 * 建造者模式 
 */

/* 人类 */
var Human = function(param) {
	this.skill = param && param.skill || '保密';
	this.hobby = param && param.hobby || '保密';
}

Human.prototype = {
	getSkill: function() {
		return this.skill;
	},
	getHobby: function() {
		return this.hobby;
	}
}

/* 姓名 */
var Named = function(name) {
	var that = this;
	(function(name, that) {
		that.wholeName = name;
		if (name.indexOf(' ') > -1) {
			that.firstName = name.slice(0, name.indexOf(' '));
			that.secondName = name.slice(name.indexOf(' '));
		}
	})(name, that);
}

/* 职位 */
var Work = function(work) {
	var that = this;
	(function(work, that) {
		switch (work) {
			case 'code':
				that.work = '工程师';
				that.workDescript = '每天沉醉于编程';
				break;
			case 'UI':
				that.work = '设计师';
				that.workDescript = '设计更似一种艺术';
				break;
			case 'teach':
				that.work = '教师';
				that.workDescript = '分享也是一种快乐';
				break;
			default:
				that.work = work;
				that.workDescript = 'Sorry，找不到职位相关描述';
				break;
		}
	})(work, that);
}

Work.prototype.changeWork = function(work) {
	this.work = work;
}

Work.prototype.changeDescript = function(desc) {
	this.workDescript = desc;
}

/**
 * 应聘者建造类
 * @param {Object} name 姓名（全名）
 * @param {Object} work 期望职位
 */
var Person = function(name, work) {
	var _person = new Human();
	_person.name = new Named(name);
	_person.work = new Work(work);
	return _person;
}

/* 测试一下 */
var person = new Person('Xiao Ming', 'code');
console.log(person.skill);
console.log(person.name.firstName);
console.log(person.work.work);
console.log(person.work.workDescript);
person.work.changeDescript('更改职位描述');
console.log(person.work.workDescript);