"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pick = function pick(obj, keys) {
  var result = {};
  // eslint-disable-next-line no-plusplus
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (obj[key] !== undefined) {
      result[key] = obj[key];
    }
  }
  return result;
};

exports.default = pick;