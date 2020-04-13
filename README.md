# urls
## homepage
[https://code.insistime.com/qiao.util.js](https://code.insistime.com/qiao.util.js)

## github
[https://github.com/insistime/qiao.util.js](https://github.com/insistime/qiao.util.js)

## npm
[https://www.npmjs.com/package/qiao.util.js](https://www.npmjs.com/package/qiao.util.js)

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

# started
## install
npm install qiao.util.js

## dependencies
1. qiao.ajax by reqwest
2. qiao.cookie by js-cookie
3. qiao.ls by qiao.ls.js
4. qiao.qrcode by qrcode

## documentation
1. qiao.ajax, reqwest, https://www.npmjs.com/package/reqwest
2. qiao.cookie, js-cookie, https://www.npmjs.com/package/js-cookie
3. qiao.ls, qiao.ls.js, https://www.npmjs.com/package/qiao.ls.js
4. qiao.qrcode, qrcode, https://www.npmjs.com/package/qrcode

# api
## qiao.ajax
```javascript
'use strict';

var qiao = require('qiao.util.js');

var test = function(){
	qiao.ajax({
	    url: 'path/to/html'
	  , method: 'post'
	  , data: { foo: 'bar', baz: 100 }
	  , success: function (resp) {
	      qwery('#content').html(resp)
	    }
	});
	 
	qiao.ajax({
	    url: 'path/to/html'
	  , method: 'get'
	  , data: [ { name: 'foo', value: 'bar' }, { name: 'baz', value: 100 } ]
	  , success: function (resp) {
	      qwery('#content').html(resp)
	    }
	});
	 
	qiao.ajax({
	    url: 'path/to/json'
	  , type: 'json'
	  , method: 'post'
	  , error: function (err) { }
	  , success: function (resp) {
	      qwery('#content').html(resp.content)
	    }
	});
	 
	qiao.ajax({
	    url: 'path/to/json'
	  , type: 'json'
	  , method: 'post'
	  , contentType: 'application/json'
	  , headers: {
	      'X-My-Custom-Header': 'SomethingImportant'
	    }
	  , error: function (err) { }
	  , success: function (resp) {
	      qwery('#content').html(resp.content)
	    }
	});
	 
	// Uses XMLHttpRequest2 credentialled requests (cookies, HTTP basic auth) if supported 
	qiao.ajax({
	    url: 'path/to/json'
	  , type: 'json'
	  , method: 'post'
	  , contentType: 'application/json'
	  , crossOrigin: true
	  , withCredentials: true
	  , error: function (err) { }
	  , success: function (resp) {
	      qwery('#content').html(resp.content)
	    }
	});
	 
	qiao.ajax({
	    url: 'path/to/data.jsonp?callback=?'
	  , type: 'jsonp'
	  , success: function (resp) {
	      qwery('#content').html(resp.content)
	    }
	});
	 
	qiao.ajax({
	    url: 'path/to/data.jsonp?foo=bar'
	  , type: 'jsonp'
	  , jsonpCallback: 'foo'
	  , jsonpCallbackName: 'bar'
	  , success: function (resp) {
	      qwery('#content').html(resp.content)
	    }
	});
	
	qiao.ajax({
	    url: 'path/to/data.jsonp?foo=bar'
	  , type: 'jsonp'
	  , jsonpCallback: 'foo'
	  , success: function (resp) {
	      qwery('#content').html(resp.content)
	    }
	  , complete: function (resp) {
	      qwery('#hide-this').hide()
	    }
	});
};

test();
```

## qiao.cookie
```javascript
'use strict';

var qiao = require('qiao.util.js');

var test = function(){
	// set
	qiao.cookie('name', 'value');
	
	// get
	console.log(qiao.cookie('name'));
	
	// delete
	qiao.cookie('name', null);
	console.log(qiao.cookie('name'));
};

test();
```

## qiao.ls
```javascript
'use strict';

var qiao = require('qiao.util.js');

var test = function(){
	// set
	qiao.ls('name', 'value');
	
	// get
	console.log(qiao.ls('name'));
	
	// delete
	qiao.ls('name', null);
	console.log(qiao.ls('name'));
};

test();
```

## qiao.cache
```javascript
'use strict';

var qiao = require('qiao.util.js');

var test = function(){
	// set
	qiao.cache('name', 'key', 'value');

	// get
	console.log(qiao.cache('name', 'key'));
	
	// delete
	qiao.cache('name', 'key', null);
	console.log(qiao.cache('name', 'key'));
	
	// clear
	qiao.cache('name', null);
};

test();
```

## qiao.qrcode
```javascript
'use strict';

var qiao = require('qiao.util.js');

var test = function(){
	// need <div id="qrcode" style="width:100px;height:100px;"></div>
	
	// canvas
	qiao.qrcode({
		id	: 'qrcode',
		type: 'canvas',
		text: 'http://insistime.com/'
	});

	// img
	qiao.qrcode({
		id	: 'qrcode',
		type: 'img',
		text: 'http://insistime.com/'
	});
	
	// svg
	qiao.qrcode({
		id	: 'qrcode',
		type: 'svg',
		text: 'http://insistime.com/'
	});
};

test();
```

## qiao.search
```javascript
'use strict';

var qiao = require('qiao.util.js');

var test = function(){
	// url http://www.baidu.com?q=1
	var s = qiao.search('q');
	
	// s = 1
	console.log(s);
};

test();
```

# version
## 0.1.3.20200414
1. add cache

## 0.1.2.20191204
1. add funding
2. update packagers

## 0.1.1.20190624
1. add qiao.ls.js
2. update npms

## 0.1.0.20190621
1. add file type

## 0.0.9.20190605
1. add vendor

## 0.0.8.20180720
1. https homepage

## 0.0.7.20180719
1. modify readme.md

## 0.0.6.20180319
1. add qrcode keyword

## 0.0.5.20180318
1. qiao.qrcode

## 0.0.4.20180313
1. qiao.search

## 0.0.3.20180305
1. modify md

## 0.0.2.20180301
1. qiao.ajax

## 0.0.1.20180227
1. init project
2. qiao.cookie
