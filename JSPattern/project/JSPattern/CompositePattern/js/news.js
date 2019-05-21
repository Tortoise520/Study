/**
 *组合模式（Composite）：又称部分-整体模式，将对象组合成树形结构以表示“部分整体”的层次结构。
 * 组合模式使得用户对单个对象和组合对象的使用具有一致性。
 */

//新闻父类
var News = function() {
	this.children = [];
	this.element = null;
}
News.prototype = {
	init: function() {
		throw new Error('请重写方法');
	},
	add: function() {
		throw new Error('请重写方法');
	},
	getElement: function() {
		throw new Error('请重写方法');
	},
}

//寄生组合式继承。出现了Object.create()方法之后，可以不用此方法了
function inheritPrototype(child, father) {
	function F() {}
	F.prototype = father.prototype;
	var f = new F();
	f.constructor = child;
	child.prototype = f;

}

//容器类
var Container = function(id, parent) {
	News.call(this);
	this.id = id;
	this.parent = parent;
	this.init();
}

//相当于：
//Container.prototype = Object.reate(News.prototype);
//Container.prototype.constructor = Container;
inheritPrototype(Container, News);

Container.prototype.init = function() {
	this.element = document.createElement('ul');
	this.element.id = this.id;
	this.element.className = 'new-container';
}

Container.prototype.add = function(child) {
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
}

Container.prototype.getElement = function() {
	return this.element;
}

Container.prototype.show = function() {
	this.parent.appendChild(this.element);
}

//行容器
var Item = function(className) {
	News.call(this);
	this.className = className || '';
	this.init();
}

inheritPrototype(Item, News);

Item.prototype.init = function() {
	this.element = document.createElement('li');
	this.element.className = this.className;
}

Item.prototype.add = function(child) {
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
}

Item.prototype.getElement = function() {
	return this.element;
}

//新闻组
var NewsGroup = function(className) {
	News.call(this);
	this.className = className || '';
	this.init();
}

inheritPrototype(NewsGroup, News);

NewsGroup.prototype.init = function() {
	this.element = document.createElement('div');
	this.element.className = this.className;
}

NewsGroup.prototype.add = function(child) {
	this.children.push(child);
	this.element.appendChild(child.getElement());
	return this;
}

NewsGroup.prototype.getElement = function() {
	return this.element;
}

//图片新闻
var ImageNews = function(url, href, className) {
	News.call(this);
	this.url = url || '';
	this.href = href || '#';
	this.className = className || 'normal';
	this.init();
}

inheritPrototype(ImageNews, News);

ImageNews.prototype.init = function() {
	this.element = document.createElement('a');
	var img = new Image();
	img.src = this.url;
	this.element.appendChild(img);
	this.element.className = 'image-news ' + this.className;
	this.element.href = this.href;
}

ImageNews.prototype.add = function() {}

ImageNews.prototype.getElement = function() {
	return this.element;
}

//图标新闻
var IconNews = function(text, href, type) {
	News.call(this);
	this.text = text || '';
	this.href = href || '';
	this.type = type || '';
	this.init();
}

inheritPrototype(IconNews, News);

IconNews.prototype.init = function() {
	this.element = document.createElement('a');
	this.element.innerHTML = this.text;
	this.element.href = this.href;
	this.element.className = 'icon ' + this.type;
}

IconNews.prototype.add = function() {}

IconNews.prototype.getElement = function() {
	return this.element;
}

//简单新闻
var EasyNews = function(text, href) {
	News.call(this);
	this.text = text || '';
	this.href = href || '#';
	this.init();
}

inheritPrototype(EasyNews, News);

EasyNews.prototype.init = function() {
	this.element = document.createElement('a');
	this.element.innerHTML = this.text;
	this.element.href = this.href;
	this.element.className = 'text';
}

EasyNews.prototype.add = function() {}

EasyNews.prototype.getElement = function() {
	return this.element;
}

//类型新闻
var TypeNews = function(text, href, type, pos) {
	News.call(this);
	this.text = text || '';
	this.href = href || '#';
	this.type = type || '';
	this.pos = pos || 'left';
	this.init();
}

inheritPrototype(TypeNews, News);

TypeNews.prototype.init = function() {
	this.element = document.createElement('a');
	if (this.pos === 'left') {
		this.element.innerHTML = '[' + this.type + ']' + this.text;
	} else {
		this.element.innerHTML = this.text + '[' + this.type + ']';
	}
	this.element.href = this.href;
	this.element.className = 'text';
}

TypeNews.prototype.add = function() {}

TypeNews.prototype.getElement = function() {
	return this.element;
}

/* 测试一下 */
window.onload = function() {
	var news1 = new Container('news', document.body);
	news1.add(
		new Item('normal').add(
			new IconNews('梅西不拿金球也伟大', '#', 'video')
		)
	).add(
		new Item('normal').add(
			new IconNews('保护强国强队用意明显', '#', 'live')
		)
	).add(
		new Item('normal').add(
			new NewsGroup('has-img').add(
				new ImageNews('img/fat.jpg')
			).add(
				new EasyNews('从240斤胖子成功变型男', '#')
			).add(
				new EasyNews('五大雷人跑步机', '#')
			)
		)
	).add(
		new Item('normal').add(
			new TypeNews('AK47不愿为费城打球', '#', 'NBA', 'left')
		)
	).add(
		new Item('normal').add(
			new TypeNews('火炮飚6三分创新高', '#', 'CBA', 'right')
		)
	).show();
}
