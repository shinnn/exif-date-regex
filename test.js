'use strict';

const {deepEqual, equal} = require('assert').strict;

const exifDateRegex = require('.');
const test = require('testit');

test('match a date in the Exif compatible format', () => {
	deepEqual(
		[...exifDateRegex.exec('2018:06:19 15:01:38')],
		['2018:06:19 15:01:38', '2018', '06', '19', '15', '01', '38'],
	);
});

test('assign each parsed values to the `group` property', () => {
	deepEqual(
		{...exifDateRegex.exec('3104:02:29 23:59:59').groups},
		{
			year: '3104',
			month: '02',
			date: '29',
			hours: '23',
			minutes: '59',
			seconds: '59'
		}
	);
});

test('take leap years into consideration', () => {
	equal(exifDateRegex.exec('2015:02:29 23:01:38'), null);
});

test('invalidate years more than 9999', () => {
	equal(exifDateRegex.exec('10000:04:29 01:11:58'), null);
});

test('validate time', () => {
	equal(exifDateRegex.exec('1967:12:31 24:00:00'), null);
});

test('invaldiate leading and trailing white spaces', () => {
	equal(exifDateRegex.exec('\n2011:11:11 23:59:12'), null);
	equal(exifDateRegex.exec('1991:01:01 00:00:00 '), null);
});
