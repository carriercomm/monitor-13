//
//	Uptime collector
//

// Load framework
var fw = require('../framework.js');

var aData = [];

function collect() {


}

function init() {
	fw.logger.trace("Uptime collector init");
}

exports.collect = collect;
exports.init = init;