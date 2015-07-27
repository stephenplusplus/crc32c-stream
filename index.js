'use strict';

var crc = require('sse4_crc32');
var isStream = require('is-stream');

function crc32cStream(stream, callback) {
  if (!isStream(stream)) {
    throw new TypeError('Expected a stream.');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('Expected a callback.');
  }

  var results;

  stream
    .on('error', callback)
    .on('data', function (chunk) {
      results = crc.calculate(chunk, results);
    })
    .on('end', function () {
      callback(null, new Buffer([results]).toString('base64'));
    });
}

module.exports = crc32cStream;
