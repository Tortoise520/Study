/**
 * 适配器模式
 */

function arrToObjAdapter(arr) {
	return {
		name: arr[0],
		type: arr[1],
		title: arr[2],
		data: arr[3],
	}
}

/* 测试一下 */
var arr = ['js', 'book', 'code language', '8月1日'];
var adapterData = arrToObjAdapter(arr);
console.log(adapterData);

/* 另一个例子 */
function ajaxAdapter(data) {
	return [data['key1'], data['key2'], data['key3'] ];
}
/* $.ajax({
	url: 'someAddress.php',
	success: function(data, status) {
		if (data) {
			doSomething(ajaxAdapter(data));
		}
	}
});
 */