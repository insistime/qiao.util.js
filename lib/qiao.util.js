'use strict';

var cookie = require('js-cookie');

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