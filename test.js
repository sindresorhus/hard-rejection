import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const error = await t.throwsAsync(execa('node', ['fixture.js']), {code: 1});
	t.regex(error.stderr, /^Error: Unicorn/);
});

test('custom logging', async t => {
	const error = await t.throwsAsync(execa('node', ['fixture-custom-log.js']), {code: 1});
	t.regex(error.stdout, /^custom-log Error: Unicorn/);
});
