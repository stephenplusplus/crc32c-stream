'use strict';

var assert = require('assert');
var fs = require('fs');

var crcStream = require('./');

it('should calculate crc32c value from a stream', function (done) {
  crcStream(fs.createReadStream('./unicorns.txt'), function (err, results) {
    assert.ifError(err);
    assert.strictEqual(results, 'rw==');
    done();
  });
});
