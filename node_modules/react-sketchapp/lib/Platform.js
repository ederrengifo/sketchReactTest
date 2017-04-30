'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Platform = {
  OS: 'sketch',
  Version: 1,
  select: function select(obj) {
    return obj.sketch;
  }
};

exports.default = Platform;