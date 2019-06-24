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
};

test();