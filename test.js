'use strict';
var test = require('ava');
var osxVol = require('./');

test('get level', function (t) {
	t.plan(2);

	osxVol.get(function (err, level) {
		t.assert(!err, err);
		t.assert(typeof level === 'number');
	});
});

test('set level to 50%', function (t) {
	t.plan(3);

	osxVol.set(0.5, function (err) {
		t.assert(!err, err);

		osxVol.get(function (err, level) {
			t.assert(!err, err);
			t.assert(level === 0.5);
		});
	});
});
