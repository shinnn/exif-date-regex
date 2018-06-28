# exif-date-regex

[![npm version](https://img.shields.io/npm/v/exif-date-regex.svg)](https://www.npmjs.com/package/exif-date-regex)
[![Build Status](https://travis-ci.com/shinnn/exif-date-regex.svg?branch=master)](https://travis-ci.com/shinnn/exif-date-regex)

<!--
A [regular expression](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) to validate and parse Exif date format
-->

A [regular expression](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) to validate Exif date format

```javascript
import exifDateRegex from 'exif-date-regex';

exifDateRegex.test('2018:06:27 14:05:28'); //=> true
```

<!--
```javascript
import exifDateRegex from 'exif-date-regex';

exifDateRegex.exec('2018:06:27 14:05:28').groups; /*=> {
  year: '2018',
  month: '06',
  date: '27',
  hours: '14',
  minutes: '05',
  seconds: '28'
} */
```
-->

According to the [Exif specification (PDF)](http://www.cipa.jp/std/documents/e/DC-008-Translation-2016-E.pdf), the format of `DateTime`, `DateTimeOriginal` and `DateTimeDigitaized` is:

> "YYYY:MM:DD HH:MM:SS" with time shown in 24-hour
format, and the date and time separated by one blank character

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install exif-date-regex
```

## API

```javascript
import exifDateRegex from 'exif-date-regex';
```

### exifDateRegex

Type: [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

<!--
The regular expression has 6 capture groups `year`, `month`, `date`, `hours`, `minutes` and `seconds`.

```javascript
'2016:07:29 00:00:00'.replace(exifDateRegex, '$<year>/$<month>/$<date>'); //=> '2016/07/29'
```
-->

<!--
Leap years are taken into consideration.

```javascript
exifDateRegex.test('2016:02:29 12:30:00'); //=> true
exifDateRegex.test('2017:02:29 12:30:00'); //=> false
```
-->

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
