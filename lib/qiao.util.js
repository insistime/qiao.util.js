'use strict';

var reqwest	= require('reqwest');
var cookie 	= require('js-cookie');

/**
 * qiao.ajax
 * 	use reqwest api
 * 	https://www.npmjs.com/package/reqwest
 * 
 * 	options
 * 		url
 * 		method
 * 		type
 * 		data
 * 		headers
 * 		contentType
 * 		crossOrigin
 * 		withCredentials
 * 		jsonpCallback
 * 		jsonpCallbackName
 * 		error
 * 		success
 * 		complete
 */
exports.ajax = function(options){
	reqwest(options);
};

/**
 * qiao.cookie
 * 	use js-cookie
 * 	https://www.npmjs.com/package/js-cookie
 * 
 * 	qiao.cookie('name', value, option);
 * 	qiao.cookie('name');
 * 	qiao.cookie('name', null);
 */
exports.cookie = function(name, value, option){
	// remove
	if(value === null){
		cookie.remove(name);
		return;
	}
	
	// get
	if(typeof value == 'undefined'){
		return cookie.get(name);
	}
	
	// set
	cookie.set(name, value, option);
};