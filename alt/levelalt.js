'use strict';

var LevelPouch = require('../lib/adapters/leveldb');
var levelalt = require('levelalt');
var utils = require('../lib/utils');

function LevelPouchAlt(opts, callback) {
  var _opts = utils.extend({
    db: levelalt
  }, opts);

  LevelPouch.call(this, _opts, callback);
}

LevelPouchAlt.valid = function () {
  return LevelPouch.valid();
};

LevelPouchAlt.destroy = utils.toPromise(function (name, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  var _opts = utils.extend({
    db: levelalt
  }, opts);

  return LevelPouch.destroy(name, _opts, callback);
});

module.exports = LevelPouchAlt;
