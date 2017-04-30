'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _sketchappJsonPlugin = require('sketchapp-json-plugin');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextStyles = function () {
  function TextStyles() {
    _classCallCheck(this, TextStyles);

    this._context = null;
  }

  _createClass(TextStyles, [{
    key: 'setContext',
    value: function setContext(context) {
      (0, _invariant2.default)(context, 'Please provide a context');

      this._context = context;
      return this;
    }
  }, {
    key: 'setStyles',
    value: function setStyles(styles) {
      (0, _invariant2.default)(this._context, 'Please provide a context');

      this._context.document.documentData().layerTextStyles().setObjects(styles);

      return this;
    }
  }, {
    key: 'addStyle',
    value: function addStyle(name, style) {
      (0, _invariant2.default)(this._context, 'Please provide a context');

      var textStyle = (0, _sketchappJsonPlugin.fromSJSONDictionary)(style);

      // Flow doesn't pick up invariant truthies
      var context = this._context;

      var s = context.document.documentData().layerTextStyles().addSharedStyleWithName_firstInstance(name, textStyle);

      // NOTE(gold): the returned object ID changes after being added to the store
      // _don't_ rely on the object ID we pass to it, but we have to have one set
      // otherwise Sketch crashes
      return s.objectID();
    }
  }]);

  return TextStyles;
}();

exports.default = new TextStyles();