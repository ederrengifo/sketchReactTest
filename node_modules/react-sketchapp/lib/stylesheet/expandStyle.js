"use strict";

/* eslint max-len:0 no-nested-ternary:0 */
var hasOwnProperty = Object.prototype.hasOwnProperty;

var styleShortHands = {
  borderColor: {
    borderTopColor: true,
    borderRightColor: true,
    borderBottomColor: true,
    borderLeftColor: true
  },
  borderRadius: {
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomRightRadius: true,
    borderBottomLeftRadius: true
  },
  borderStyle: {
    borderTopStyle: true,
    borderRightStyle: true,
    borderBottomStyle: true,
    borderLeftStyle: true
  },
  borderWidth: {
    borderTopWidth: true,
    borderRightWidth: true,
    borderBottomWidth: true,
    borderLeftWidth: true
  },
  margin: {
    marginTop: true,
    marginRight: true,
    marginBottom: true,
    marginLeft: true
  },
  marginHorizontal: {
    marginRight: true,
    marginLeft: true
  },
  marginVertical: {
    marginTop: true,
    marginBottom: true
  },
  overflow: {
    overflowX: true,
    overflowY: true
  },
  padding: {
    paddingTop: true,
    paddingRight: true,
    paddingBottom: true,
    paddingLeft: true
  },
  paddingHorizontal: {
    paddingRight: true,
    paddingLeft: true
  },
  paddingVertical: {
    paddingTop: true,
    paddingBottom: true
  },
  textDecorationLine: {
    textDecoration: true
  },
  writingDirection: {
    direction: true
  }
};

/**
 * Alpha-sort properties, apart from shorthands – they must appear before the
 * longhand properties that they expand into. This lets more specific styles
 * override less specific styles, whatever the order in which they were
 * originally declared.
 */
var sortProps = function sortProps(propsArray) {
  return propsArray.sort(function (a, b) {
    var expandedA = styleShortHands[a];
    var expandedB = styleShortHands[b];
    if (expandedA && expandedA[b]) {
      return -1;
    } else if (expandedB && expandedB[a]) {
      return 1;
    }
    return a < b ? -1 : a > b ? 1 : 0;
  });
};

/**
 * Expand the shorthand properties to isolate every declaration from the others.
 */
var expandStyle = function expandStyle(style) {
  if (!style) return style;
  /* eslint no-param-reassign:0 */
  var propsArray = Object.keys(style);
  var sortedProps = sortProps(propsArray);
  var resolvedStyle = {};

  // eslint-disable-next-line no-plusplus
  for (var i = 0; i < sortedProps.length; i++) {
    var key = sortedProps[i];
    var expandedProps = styleShortHands[key];
    var value = style[key];

    if (expandedProps) {
      // eslint-disable-next-line no-restricted-syntax
      for (var propName in expandedProps) {
        if (hasOwnProperty.call(expandedProps, propName)) {
          resolvedStyle[propName] = value;
        }
      }
    } else {
      resolvedStyle[key] = value;
    }
  }
  return resolvedStyle;
};

module.exports = expandStyle;