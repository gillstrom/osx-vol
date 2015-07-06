# osx-vol [![Build Status](https://travis-ci.org/gillstrom/osx-vol.svg?branch=master)](https://travis-ci.org/gillstrom/osx-vol)

> Get and set volume in OS X systems.


## Install

```
$ npm install --save osx-vol
```


## Usage

```js
var osxVol = require('osx-vol');

osxVol.get(function (err, level) {
	console.log(level);
	//=> 0.45
});

osxVol.set(0.65, function (err) {
	console.log('Changed volume to 65%');
});
```


## API

### .get(callback)

Get volume level.

#### callback(err, level)
  
Type: `function`

##### level

Type: `number`

Current volume level.

### .set(level, callback)

Set volume level.

#### level

*Required*
Type: `number`

A number between `0` and `1.

#### callback(err)
  
Type: `function`


## CLI

See the [vol](https://github.com/gillstrom/vol) CLI.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
