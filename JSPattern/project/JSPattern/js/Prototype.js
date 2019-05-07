/**
 * 原型模式
 */

//图片轮播类
var LoopImages = function(imgArr, container) {
	this.imagesArrray = imgArr;
	this.container = container;
}

LoopImages.prototype = {

	//创建轮播图片
	createImage: function() {
		console.log('LoopImages createImage function');
	},

	//切换下一张图片
	changeImage: function() {
		console.log('LoopImages changeImage function');
	}
}

//上下滑动切换类
var SlideLoopImg = function(imgArr, container) {
	LoopImages.call(this, imgArr, container);
}

SlideLoopImg.prototype = new LoopImages();

SlideLoopImg.prototype.changeImage = function() {
	console.log('SlideLoopImg changeImage function');
}

//渐隐切换类
var FadeLoopImg = function(imgArr, container, arrow) {
	LoopImages.call(this, imgArr, container);
	this.arrow = arrow;
}

FadeLoopImg.prototype = new LoopImages();

FadeLoopImg.prototype.changeImage = function() {
	console.log('FadeLoopImg changeImage function');
}


/* 测试一下 */
var fadeImg = new FadeLoopImg(['01.jpg', '02.jpg', '03.jpg', '04.jpg'], 'slide', ['left.jpg', 'right.jpg']);
console.log(fadeImg.container); //slide
fadeImg.changeImage(); //FadeLoopImg changeImage function

//扩展原型中的方法
LoopImages.prototype.getImageLength = function() {
	return this.imagesArrray.length;
}

FadeLoopImg.prototype.getContainer = function() {
	return this.container;
}

console.log(fadeImg.getImageLength());
console.log(fadeImg.getContainer());

/**
 * 基于已经存在的模板对象克隆出新对象的模式
 * arguments数组中保存的模板对象
 * 注意：这里对模板引用类型的属性实质上进行了浅复制（引用顾类型属性共享），当然根据需求可以自行深复制（引用类型属性复制）
 */
function prototypeExtend() {
	var F = function() {}
	var args = arguments, i = 0, len = args.length;
	for ( ; i < len; i++) {
		for (var key in args[i]) {
			F.prototype[key] = args[i][key];
		}
	}
	return new F();
}

/**
 * 企鹅游戏
 */
var penguin = prototypeExtend({
	speed: 20,
	swim: function() {
		console.log('swim speed is ' + this.speed);
	}
}, {
	run: function(speed) {
		console.log('run speed is ' + speed );
	}
}, {
	jump: function() {
		console.log('jump action');
	}
});

penguin.swim();
penguin.run(10);
penguin.jump();