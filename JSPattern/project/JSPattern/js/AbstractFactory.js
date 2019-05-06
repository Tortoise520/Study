/**
 * 抽象工厂方法
 * @param {Object} subType 子类类型（类名）
 * @param {String} superType 父类类型（字符串）
 */
var VehicleFactory = function(subType, superType) {
	if (typeof VehicleFactory[superType] === 'function') {
		function F() {}
		F.prototype = new VehicleFactory[superType];
		subType.constructor = subType;
		subType.prototype = new F();
	} else {
		throw new Error('未创建该抽象类！');
	}
}

/* Car */
VehicleFactory.Car = function () {
	this.type = 'Car';
}

VehicleFactory.Car.prototype = {
	getPrice: function() {
		return new Error('抽象方法不能调用！');
	},
	getSpeed: function () {
		return new Error('抽象方法不能调用！');
	}
}

/* Bus */
VehicleFactory.Bus = function () {
	this.type = 'Bus';
}

VehicleFactory.Bus.prototype = {
	getPrice: function() {
		return new Error('抽象方法不能调用！');
	},
	getPassengerNum: function () {
		return new Error('抽象方法不能调用！');
	}
}

/* Truck */
VehicleFactory.Truck = function () {
	this.type = 'Truck';
}

VehicleFactory.Truck.prototype = {
	getPrice: function() {
		return new Error('抽象方法不能调用！');
	},
	getTrainload: function () {
		return new Error('抽象方法不能调用！');
	}
}

/* 宝马 */
var BMW = function(price, speed) {
	this.price = price;
	this.speed = speed;
}

//继承
VehicleFactory(BMW, 'Car');

BMW.prototype.getPrice = function() {
	return this.price;
}

BMW.prototype.getSpeed= function() {
	return this.speed;
}

/* 兰博基尼 */
var Lamborghini = function(price, speed) {
	this.price = price;
	this.speed = speed;
}

//继承
VehicleFactory(Lamborghini, 'Car');

Lamborghini.prototype.getPrice = function() {
	return this.price;
}

Lamborghini.prototype.getSpeed= function() {
	return this.speed;
}

/* 宇通 */
var Yutong = function(price, passenger) {
	this.price = price;
	this.passenger = passenger;
}

//继承
VehicleFactory(Yutong, 'Bus');

Yutong.prototype.getPrice = function() {
	return this.price;
}

Yutong.prototype.getPassengerNum= function() {
	return this.passenger;
}

/* 奔驰卡车 */
var BenzTruck = function(price, trainload) {
	this.price = price;
	this.trainload = trainload;
}

//继承
VehicleFactory(BenzTruck, 'Truck');

BenzTruck.prototype.getPrice = function() {
	return this.price;
}

BenzTruck.prototype.getTrainload= function() {
	return this.trainload;
}

/* 测试一下 */
var truck = new BenzTruck(1000000, 1000);
console.log(truck.getPrice());
console.log(truck.getTrainload());
console.log(truck.type);



