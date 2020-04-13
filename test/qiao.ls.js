'use strict';

var qiao = require('../lib/qiao.util.js');

var test = function(){
	// set
	qiao.ls('name', 'value');
	
	// get
	console.log(qiao.ls('name'));
	
	// delete
	qiao.ls('name', null);
	console.log(qiao.ls('name'));

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