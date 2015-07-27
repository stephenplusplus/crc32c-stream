# crc32c-stream [![Build Status](https://travis-ci.org/stephenplusplus/crc32c-stream.svg?branch=master)](https://travis-ci.org/stephenplusplus/crc32c-stream)

> Get the crc32c calculation from a stream.


```sh
$ npm install --save crc32c-stream
```
```js
var crcStream = require('crc32c-stream');
var fs = require('fs');

crcStream(fs.createReadStream('/unicorns.txt'), function(err, results) {
  if (!err) {
    // results => rw==
  }
});
```


## API

### crc32cStream(stream, callback)

#### input

*Required*
Type: `string`

Lorem ipsum.

#### callback(err, results)

*Required*
Type: `Function`

##### err

Type: `Error`

An error emitted from the provided stream.

##### results

Type: `String`

The base64 encoded results of the calculation.
