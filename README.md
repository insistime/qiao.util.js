# qiao.util.js
javascript tools on browser

# install
npm install qiao.util.js

# dependencies
1. qiao.cookie by js-cookie

# documentation
1. qiao.cookie, js-cookie, https://www.npmjs.com/package/js-cookie

# qiao.cookie
```javascript
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
```

# version
### 0.0.1.20180227
1.init project
2.qiao.cookie