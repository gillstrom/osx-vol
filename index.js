'use strict';
var applescript = require('applescript');
var inRange = require('in-range');
var toPercent = require('to-percent');
var toDecimal = require('to-decimal');

exports.get = function (cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	applescript.execString('get volume settings', function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, toDecimal(parseInt(res[0].split(':')[1], 10)));
	});
};

exports.set = function (level, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	if (typeof level !== 'number') {
		throw new TypeError('Expected a number');
	}

	if (!inRange(level, 1)) {
		cb(new Error('Expected a level between 0 and 1'));
		return;
	}

	applescript.execString('set volume output volume ' + toPercent(level), function (err) {
		if (err) {
			cb(err);
			return;
		}

		cb();
	});
};
