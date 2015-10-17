import test from 'ava';
import osxVol from './';

test('get level', t => {
	t.plan(2);

	osxVol.get((err, level) => {
		t.assert(!err, err);
		t.assert(typeof level === 'number');
	});
});

test('set level to 50%', t => {
	t.plan(3);

	osxVol.set(0.5, err => {
		t.assert(!err, err);

		osxVol.get((err, level) => {
			t.assert(!err, err);
			t.assert(level === 0.5);
		});
	});
});
