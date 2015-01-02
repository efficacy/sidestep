/*jslint node: true */
"use strict";

var uuid = require('node-uuid');

exports.clone = function clone(item) {
  var ret = JSON.parse(JSON.stringify(item));
  ret.id = uuid.v4();
  return ret;
};