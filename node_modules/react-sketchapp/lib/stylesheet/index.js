'use strict';

var _expandStyle = require('./expandStyle');

var _expandStyle2 = _interopRequireDefault(_expandStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasOwnProperty = Object.prototype.hasOwnProperty;

var _id = 0;
// eslint-disable-next-line no-plusplus
var guid = function guid() {
  return _id++;
};
var declarationRegistry = {};

var extractRules = function extractRules(style) {
  var declarations = {};

  Object.keys(style).forEach(function (key) {
    if (key[0] === ':') {
      // pseudo style. ignore for now.
    } else if (key[0] === '@') {
      // Media query. ignore for now.
    } else {
      declarations[key] = style[key];
    }
  });

  return {
    declarations: declarations
  };
};

var registerStyle = function registerStyle(style) {
  // TODO(lmr):
  // do "proptype"-like validation here in non-production build
  var id = guid();
  var rules = extractRules(style);
  declarationRegistry[id] = (0, _expandStyle2.default)(rules.declarations);
  return id;
};

var getStyle = function getStyle(id) {
  return declarationRegistry[id];
};

var create = function create(styles) {
  var result = {};
  Object.keys(styles).forEach(function (key) {
    result[key] = registerStyle(styles[key]);
  });
  return result;
};

var mergeTransforms = function mergeTransforms(a, b) {
  if (!a || a.length === 0) return b; // in this case, a has nothing to contribute.
  var result = [];
  var transformsInA = a.reduce(function (hash, t) {
    var key = Object.keys(t)[0];
    result.push(t);
    hash[key] = result.length - 1;
    return hash;
  }, {});
  b.forEach(function (t) {
    var key = Object.keys(t)[0];
    var index = transformsInA[key];
    if (index !== undefined) {
      result[index] = t;
    } else {
      result.push(t);
    }
  });
  return result;
};

// merge two style hashes together. Sort of like `Object.assign`, but is aware of `transform` as a
// special case.
// NOTE(lmr): mutates the first argument!
var mergeStyle = function mergeStyle(a, b) {
  var key = void 0;
  // eslint-disable-next-line no-restricted-syntax
  for (key in b) {
    if (hasOwnProperty.call(b, key)) {
      switch (key) {
        case 'transform':
          a[key] = mergeTransforms(a[key], b[key]);
          break;
        default:
          /* eslint no-param-reassign: 0 */
          a[key] = b[key];
          break;
      }
    }
  }
  return a;
};

var flattenStyle = function flattenStyle(input) {
  if (Array.isArray(input)) {
    return input.reduce(function (acc, val) {
      return mergeStyle(acc, flattenStyle(val));
    }, {});
  } else if (typeof input === 'number') {
    return getStyle(input);
  } else if (!input) {
    // input is falsy, so we skip it by returning undefined
    return undefined;
  }
  return (0, _expandStyle2.default)(input);
};

/**
 * A StyleSheet is an abstraction similar to CSS StyleSheets. WIP.
 */
var StyleSheet = {
  hairlineWidth: 1, // TODO(lmr): should this be something different?
  absoluteFill: registerStyle({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }),
  create: create,
  flatten: flattenStyle,
  resolve: function resolve(style) {
    return { style: flattenStyle(style) };
  }
};

module.exports = StyleSheet;