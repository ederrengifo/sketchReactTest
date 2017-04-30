'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _murmur2js = require('murmur2js');

var _murmur2js2 = _interopRequireDefault(_murmur2js);

var _sortObjectKeys = require('./sortObjectKeys');

var _sortObjectKeys2 = _interopRequireDefault(_sortObjectKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hashStyle = function hashStyle(obj) {
  return (0, _murmur2js2.default)(JSON.stringify((0, _sortObjectKeys2.default)(obj)));
};

exports.default = hashStyle;