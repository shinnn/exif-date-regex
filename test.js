'use strict';

const exifDateRegex = require('.');
const test = require('tape');

test('exifDateRegex()', t => {
	t.deepEqual(
		[...exifDateRegex.exec('2018:06:19 15:01:38')],
		['2018:06:19 15:01:38', '2018', '06', '19', '15', '01', '38'],
		'should match a date in the Exif compatible format.'
	);

	t.deepEqual(
		exifDateRegex.exec('3104:02:29 23:59:59').groups,
		{
			year: '3104',
			month: '02',
			date: '29',
			hours: '23',
			minutes: '59',
			seconds: '59'
		},
		'should assign each parsed values to the `group` property.'
	);

	t.equal(
		exifDateRegex.exec('2015:02:29 23:01:38'),
		null,
		'should take leap years into consideration.'
	);

	t.equal(
		exifDateRegex.exec('10000:04:29 01:11:58'),
		null,
		'should invalidate years more than 9999.'
	);

	t.equal(
		exifDateRegex.exec('1967:12:31 24:00:00'),
		null,
		'should validate time.'
	);

	t.equal(
		exifDateRegex.exec('\n2011:11:11 23:59:12'),
		null,
		'should invaldiate leading white spaces.'
	);

	t.equal(
		exifDateRegex.exec('1991:01:01 00:00:00 '),
		null,
		'should invaldiate trailing white spaces.'
	);

	t.end();
});
