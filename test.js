import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const err = await t.throws(execa('node', ['fixture.js']));
	t.is(err.code, 1);
	t.regex(err.stderr, /^Error: Unicorn/);
});

test('custom logging', async t => {
	const err = await t.throws(execa('node', ['fixture-custom-log.js']));
	t.is(err.code, 1);
	t.regex(err.stdout, /^custom-log Error: Unicorn/);
});
