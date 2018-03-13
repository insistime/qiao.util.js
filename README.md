# qiao.util.js
javascript tools on browser

# install
npm install qiao.util.js

# dependencies
1. qiao.ajax by reqwest
2. qiao.cookie by js-cookie

# documentation
1. qiao.ajax, reqwest, https://www.npmjs.com/package/reqwest
2. qiao.cookie, js-cookie, https://www.npmjs.com/package/js-cookie

# qiao.search
```javascript
'use strict';

var qiao = require('lib/qiao.util.js');

var test = function(){
	// url http://www.baidu.com?q=1
	var s = qiao.search('q');
	
	// s = 1
	console.log(s);
};

test();
```
# qiao.ajax
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

# qiao.cookie
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

# version
### 0.0.4.20180313
1. qiao.search

### 0.0.3.20180305
1. modify md

### 0.0.2.20180301
1. qiao.ajax

### 0.0.1.20180227
1. init project
2. qiao.cookie