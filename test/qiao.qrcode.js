'use strict';

var qiao = require('../lib/qiao.util.js');

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