'use strict';

var qiao = require('../lib/qiao.util.js');

var test = function(){
	// url http://www.baidu.com?q=1
	var s = qiao.search('q');
	
	// s = 1
	console.log(s);
};

test();