/**
 * 跑步游戏
 */

//运动类
function Speed(x, y){
	this.x = x;
	this.y = y;
}

Speed.prototype.run = function(){
	console.log('Running...');
}

//着色类
function Color(cl) {
	this.color = cl;
}

Color.prototype.draw = function() {
	console.log('Drawing...');
}

//说话类
function Speek(wd) {
	this.word = wd;
}

Speek.prototype.say = function(){
	console.log('Saying...');
}

//变形类
function Shape(sp) {
	this.shape = sp;
}

Shape.prototype.change = function() {
	console.log('Shaping...');
}

//球类
function Ball(x, y, c) {
	this.speed = new Speed(x, y);
	this.color = new Color(c);
}

Ball.prototype.init = function() {
	this.speed.run();
	this.color.draw();
}

//人类
function People(x, y, f) {
	this.speed = new Speed(x, y);
	this.font = new Speek(f);
}

People.prototype.init = function() {
	this.speed.run();
	this.font.say();
}

//精灵类
function Spirite(x, y, c, s) {
	this.speed = new Speed(x, y);
	this.color = new Color(c);
	this.shape = new Shape(s);
}

Spirite.prototype.init = function() {
	this.speed.run();
	this.color.draw();
	this.shape.change();
}


window.onload = function() {
	var p = new People(10, 11, 'Hello!');
	p.init();
}