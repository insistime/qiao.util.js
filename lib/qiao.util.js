'use strict';

var reqwest	= require('reqwest');
var cookie 	= require('js-cookie');
var qls		= require('qiao.ls.js');
var qrcode 	= require('qrcode');

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

/**
 * qiao.fileType
 */
exports.fileType = function(filename){
    if(!filename) return null;
    filename = filename.toLowerCase();

    if(/\.pdf$/.test(filename)) return 'pdf';
    if(/\.(doc|docx|dotx)$/.test(filename)) return 'word';
    if(/\.(xls|xlsx|xlsb|xlsm)$/.test(filename)) return 'excel';
    if(/\.(ppt|pptx|ppsx|pps|potx|ppsm)$/.test(filename)) return 'ppt';

    return null;
};

/**
 * qiao.ls
 * 	qiao.ls('name', value, expires);
 * 	qiao.ls('name');
 * 	qiao.ls('name', null);
 */
exports.ls = qls.ls;


/**
 * qiao.cache
 * 	qiao.cache('name', null);
 * 	qiao.cache('name', 'key', null);
 * 	qiao.cache('name', 'key');
 * 	qiao.cache('name', 'key', value, exp);
 */
exports.cache = qls.cache;

/**
 * qiao.qrcode
 * 	obj.type
 * 		canvas，img，svg
 * 	obj.id
 * 		父容器，<div id="qrcode"></div>
 * 	obj.text
 * 		二维码内容
 * 	obj.options
 * 		二维码选项，https://www.npmjs.com/package/qrcode#options
 */
exports.qrcode = function(obj){
	if(!obj.type) return;
	
	if(obj.type == 'canvas') qrcodeCanvas(obj);
	if(obj.type == 'img') qrcodeImg(obj);
	if(obj.type == 'svg') qrcodeSvg(obj);
};
function qrcodeCanvas(obj){
	// vars
	var id		= obj.id;
	var text 	= obj.text;
	var options	= obj.options || {};
	if(!id || !text) return;
	
	// div
	var $div 	= document.getElementById(id);
	if(!$div) return;
	
	// canvas
	var cid			= id + '-canvas'
	var canvas 		= '<canvas id="' + cid + '"></canvas>';
	$div.innerHTML 	= canvas;
	
	// render
	options.width = options.width || $div.offsetWidth;
	qrcode.toCanvas(document.getElementById(cid), text, options, function(error){
		if(error){
			console.error(error);
			return;
		}
	});
}
function qrcodeImg(obj){
	// vars
	var id		= obj.id;
	var text 	= obj.text;
	var options	= obj.options || {};
	if(!id || !text) return;
	
	// div
	var $div 	= document.getElementById(id);
	if(!$div) return;
	
	// render
	options.width = options.width || $div.offsetWidth;
	qrcode.toDataURL(text, options, function(error, url){
		if(error){
			console.error(error);
			return;
		}

		var img 	= new Image();
		img.src 	= url;
		img.width	= options.width;
		img.height	= options.width;
		
		$div.appendChild(img);
	});
}
function qrcodeSvg(obj){
	// vars
	var id		= obj.id;
	var text 	= obj.text;
	var options	= obj.options || {};
	if(!id || !text) return;
	
	// div
	var $div 	= document.getElementById(id);
	if(!$div) return;
	
	// render
	options.width = options.width || $div.offsetWidth;
	qrcode.toString(text, options, function(error, svg){
		if(error){
			console.error(error);
			return;
		}

		$div.innerHTML 	= svg;
	});
}

/**
 * qiao.search
 * 	format location.search to obj
 */
exports.search = function(key){
	var res;
	
	var s = location.search;
	if(s){
		s = s.substr(1);
		if(s){
			var ss = s.split('&');
			for(var i=0; i<ss.length; i++){
				var sss = ss[i].split('=');
				if(sss && sss[0] == key) res = sss[1]; 
			}
		}
	}
	
	return res;
};

/**
 * qiao.vendor
 *  return 浏览器类型
 */
exports.vendor = function(){
    var ua = window.navigator.userAgent;

    var vendor = {};
    vendor.mobile   = /AppleWebKit.*Mobile.*/.test(ua);
    vendor.android  = /android/gi.test(ua);
    vendor.ios      = /(iphone|ipad|ipod)/gi.test(ua);
    vendor.iphone   = /iphone/gi.test(ua);
    vendor.ipad     = /ipad/gi.test(ua);
    vendor.ipod     = /ipod/gi.test(ua);
    vendor.weixin   = /micromessenger/gi.test(ua);
    vendor.qq       = / qq/gi.test(ua);
    vendor.qqb      = /mqqbrowser/gi.test(ua);
    vendor.weibo    = /weibo/gi.test(ua);
    vendor.nochrome = /^((?!chrome).)*$/gi.test(ua);
    vendor.safari   = /safari/gi.test(ua) && vendor.nochrome;
    var matched;
    if((matched = ua.match(/MSIE\s([\d\.]+)/)) || (matched = ua.match(/IEMobile\/([\d\.]+)/))){
        vendor.ie = true;
        vendor.version = matched[1];
    }

    return vendor;
};
