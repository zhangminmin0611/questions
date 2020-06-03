console.log(123)

// var ajax = function (options) {
// 	// 创建XMLHttpRequest对象
// 	var xhr = new XMLHttpRequest();

// 	// in https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in
// 	var async = 'async' in options ? options.async : true;
// 	var ajaxSuccess = function (data) {
// 		options.success(data)
// 		options.complete(data)
// 	}
// 	var ajaxError = function (err) {
// 		options.error(err)
// 		options.complete(err)
// 	}

// 	xhr.open(options.type, options.url, async);

// 	xhr.onreadystatechange = function () {
// 		console.log(xhr.readyState)
// 		if (xhr.readyState != 4) return
// 		if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 || xhr.status === 0) {
// 			ajaxSuccess(xhr.responseText)
// 		} else {
// 			ajaxError(xhr.statusText || null)
// 		}
// 	};
	

// 	var header = {}
// 	var setHeader = function (name, value) {
// 		header[name.toLowerCase()] = value
// 	}
// 	setHeader('Accept', options.datatype === 'json' ? 'application/json' : '*/*')
// 	if (options.contentType || (options.contentType != false && options.data && options.type.toUpperCase != 'GET')) {
// 		setHeader('Content-Type', options.type || 'application/x-www-form-urlencoded')
// 	}

// 	if (options.header) {
// 		for (var key in options.header) {
// 			xhr.setHeader(key, options.header[key])
// 		}
// 	}

// 	xhr.send(options.data ? options.data : null)
// }


// ajax ({
// 	url: 'http://file:///F:/Project/questions/ajax.json',
// 	type: 'get',
// 	dataType: 'json',
// 	// data: {
		
// 	// },
// 	success: function (data) {
// 		console.log(data)
// 	},
// 	error: function (err) {
// 		console.log(err)
// 	},
// 	complete: function (data) {
// 		console.log(data)
// 	}
// })