'use strict';

var qiao = require('../lib/qiao.util.js');

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