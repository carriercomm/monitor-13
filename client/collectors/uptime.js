/*
 *	Uptime collector
 *	This collector will read the uptime information of the server	
 * 
 */

// Load framework
var fw = require('../framework.js');

var aData = [];

function collect() {


}

function init() {
	fw.logger.trace("Uptime collector init");
}

function close() {
	fw.logger.trace("Uptime collector closed");
}


exports.collect = collect;
exports.init = init;
exports.close = close;