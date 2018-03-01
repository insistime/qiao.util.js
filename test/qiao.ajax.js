'use strict';

var qiao = require('../lib/qiao.util.js');

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