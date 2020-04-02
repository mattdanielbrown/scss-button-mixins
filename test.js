import test from 'ava';
import scssButtonMixins from '.';

test('title', t => {
	t.throws(() => {
		scssButtonMixins(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(scssButtonMixins('unicorns'), 'unicorns & rainbows');
});
