var Factory = function(type, content) {
	if (this instanceof Factory) {
		var s = new this[type](content);
		return s;
	} else{
		return new Factory(type, content);
	}
}

Factory.prototype = {
	Java: function(content) {
		//...
	},
	Javascript: function(content) {
		//...
	},
	UI: function(content) {
		this.content = content;
		(function(content) {
			var div = document.createElement('div');
			div.innerHTML = content;
			div.style.border = '1px solid red';
			document.getElementById('container').appendChild(div);
		})(content);
	},
	php: function(content) {
		//...
	},
}