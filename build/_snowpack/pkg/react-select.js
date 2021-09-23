import { _ as _extends } from './common/emotion-element-99289b21.browser.esm-5097461b.js';
import { k as keyframes, j as jsx, C as ClassNames, c as css$2 } from './common/emotion-react.browser.esm-45700e35.js';
import { c as createCommonjsModule, g as getDefaultExportFromCjs } from './common/_commonjsHelpers-8c19dec8.js';
import { r as react } from './common/index-04edb6a1.js';
import { r as reactDom } from './common/index-3eae4d6e.js';
import './common/emotion-utils.browser.esm-07bb8819.js';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var AutosizeInput_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);



var _propTypes2 = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	_createClass(AutosizeInput, null, [{
		key: 'getDerivedStateFromProps',
		value: function getDerivedStateFromProps(props, state) {
			var id = props.id;

			return id !== state.prevId ? { inputId: id || generateId(), prevId: id } : null;
		}
	}]);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId(),
			prevId: props.id
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(react.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;
});

var AutosizeInput = /*@__PURE__*/getDefaultExportFromCjs(AutosizeInput_1);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, state, className) {
  var arr = [className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Clean Common Props
// ==============================

var cleanCommonProps = function cleanCommonProps(props) {
  //className
  props.className;
      props.clearValue;
      props.cx;
      props.getStyles;
      props.getValue;
      props.hasValue;
      props.isMulti;
      props.isRtl;
      props.options;
      props.selectOption;
      props.selectProps;
      props.setValue;
      props.theme;
      var innerProps = _objectWithoutProperties(props, ["className", "clearValue", "cx", "getStyles", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"]);

  return _objectSpread2({}, innerProps);
}; // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
} // ==============================
// Passive Event Detector
// ==============================
// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36

var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }

}; // check for SSR

var w = typeof window !== 'undefined' ? window : {};

if (w.addEventListener && w.removeEventListener) {
  w.addEventListener('p', noop, options);
  w.removeEventListener('p', noop, false);
}

var supportsPassiveEvents = passiveOptionAccessed;

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {
    label: 'menu'
  }, _defineProperty(_ref3, alignToControl(placement), '100%'), _defineProperty(_ref3, "backgroundColor", colors.neutral0), _defineProperty(_ref3, "borderRadius", borderRadius), _defineProperty(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), _defineProperty(_ref3, "marginBottom", spacing.menuGutter), _defineProperty(_ref3, "marginTop", spacing.menuGutter), _defineProperty(_ref3, "position", 'absolute'), _defineProperty(_ref3, "width", '100%'), _defineProperty(_ref3, "zIndex", 1), _ref3;
};
var PortalPlacementContext = /*#__PURE__*/react.createContext({
  getPortalPlacement: null
}); // NOTE: internal only

var MenuPlacer = /*#__PURE__*/function (_Component) {
  _inherits(MenuPlacer, _Component);

  var _super = _createSuper(MenuPlacer);

  function MenuPlacer() {
    var _this;

    _classCallCheck(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    };

    _this.getPlacement = function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    };

    _this.getUpdatedProps = function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread2(_objectSpread2({}, _this.props), {}, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    };

    return _this;
  }

  _createClass(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(react.Component);
MenuPlacer.contextType = PortalPlacementContext;

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('menu', props),
    className: cx({
      menu: true
    }, className),
    ref: innerRef
  }, innerProps), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      isMulti = props.isMulti;
  return jsx("div", _extends({
    css: getStyles('menuList', props),
    className: cx({
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, innerProps), children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('noOptionsMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('loadingMessage', props),
    className: cx({
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = /*#__PURE__*/function (_Component2) {
  _inherits(MenuPortal, _Component2);

  var _super2 = _createSuper(MenuPortal);

  function MenuPortal() {
    var _this2;

    _classCallCheck(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _this2.state = {
      placement: null
    };

    _this2.getPortalPlacement = function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    };

    return _this2;
  }

  _createClass(MenuPortal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          className = _this$props2.className,
          controlElement = _this$props2.controlElement,
          cx = _this$props2.cx,
          innerProps = _this$props2.innerProps,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = jsx("div", _extends({
        css: getStyles('menuPortal', state),
        className: cx({
          'menu-portal': true
        }, className)
      }, innerProps), children);
      return jsx(PortalPlacementContext.Provider, {
        value: {
          getPortalPlacement: this.getPortalPlacement
        }
      }, appendTo ? /*#__PURE__*/reactDom.createPortal(menuWrapper, appendTo) : menuWrapper);
    }
  }]);

  return MenuPortal;
}(react.Component);

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return jsx("div", _extends({
    css: getStyles('container', props),
    className: cx({
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      innerProps = props.innerProps,
      isMulti = props.isMulti,
      getStyles = props.getStyles,
      hasValue = props.hasValue;
  return jsx("div", _extends({
    css: getStyles('valueContainer', props),
    className: cx({
      'value-container': true,
      'value-container--is-multi': isMulti,
      'value-container--has-value': hasValue
    }, className)
  }, innerProps), children);
}; // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      innerProps = props.innerProps,
      getStyles = props.getStyles;
  return jsx("div", _extends({
    css: getStyles('indicatorsContainer', props),
    className: cx({
      indicators: true
    }, className)
  }, innerProps), children);
};

var _templateObject;

var _ref2 =  {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} ;

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties(_ref, ["size"]);

  return jsx("svg", _extends({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return jsx(Svg, _extends({
    size: 20
  }, props), jsx("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3) {
  var isFocused = _ref3.isFocused,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    label: 'indicatorContainer',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('dropdownIndicator', props),
    className: cx({
      indicator: true,
      'dropdown-indicator': true
    }, className)
  }, innerProps), children || jsx(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('clearIndicator', props),
    className: cx({
      indicator: true,
      'clear-indicator': true
    }, className)
  }, innerProps), children || jsx(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4) {
  var isDisabled = _ref4.isDisabled,
      _ref4$theme = _ref4.theme,
      baseUnit = _ref4$theme.spacing.baseUnit,
      colors = _ref4$theme.colors;
  return {
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("span", _extends({}, innerProps, {
    css: getStyles('indicatorSeparator', props),
    className: cx({
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var loadingDotAnimations = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5) {
  var isFocused = _ref5.isFocused,
      size = _ref5.size,
      _ref5$theme = _ref5.theme,
      colors = _ref5$theme.colors,
      baseUnit = _ref5$theme.spacing.baseUnit;
  return {
    label: 'loadingIndicator',
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
      offset = _ref6.offset;
  return jsx("span", {
    css: /*#__PURE__*/css$2({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  "" ,  "" )
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isRtl = props.isRtl;
  return jsx("div", _extends({
    css: getStyles('loadingIndicator', props),
    className: cx({
      indicator: true,
      'loading-indicator': true
    }, className)
  }, innerProps), jsx(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), jsx(LoadingDot, {
    delay: 160,
    offset: true
  }), jsx(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    label: 'control',
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return jsx("div", _extends({
    ref: innerRef,
    css: getStyles('control', props),
    className: cx({
      control: true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      innerProps = props.innerProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return jsx("div", _extends({
    css: getStyles('group', props),
    className: cx({
      group: true
    }, className)
  }, innerProps), jsx(Heading, _extends({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), jsx("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    label: 'group',
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var getStyles = props.getStyles,
      cx = props.cx,
      className = props.className;

  var _cleanCommonProps = cleanCommonProps(props);
      _cleanCommonProps.data;
      var innerProps = _objectWithoutProperties(_cleanCommonProps, ["data"]);

  return jsx("div", _extends({
    css: getStyles('groupHeading', props),
    className: cx({
      'group-heading': true
    }, className)
  }, innerProps));
};

var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    label: 'input',
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input = function Input(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;

  var _cleanCommonProps = cleanCommonProps(props),
      innerRef = _cleanCommonProps.innerRef,
      isDisabled = _cleanCommonProps.isDisabled,
      isHidden = _cleanCommonProps.isHidden,
      innerProps = _objectWithoutProperties(_cleanCommonProps, ["innerRef", "isDisabled", "isHidden"]);

  return jsx("div", {
    css: getStyles('input', props)
  }, jsx(AutosizeInput, _extends({
    className: cx({
      input: true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    label: 'multiValue',
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return jsx("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
      innerProps = _ref5.innerProps;
  return jsx("div", innerProps, children || jsx(CrossIcon, {
    size: 14
  }));
}

var MultiValue = function MultiValue(props) {
  var children = props.children,
      className = props.className,
      components = props.components,
      cx = props.cx,
      data = props.data,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      removeProps = props.removeProps,
      selectProps = props.selectProps;
  var Container = components.Container,
      Label = components.Label,
      Remove = components.Remove;
  return jsx(ClassNames, null, function (_ref6) {
    var css = _ref6.css,
        emotionCx = _ref6.cx;
    return jsx(Container, {
      data: data,
      innerProps: _objectSpread2({
        className: emotionCx(css(getStyles('multiValue', props)), cx({
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className))
      }, innerProps),
      selectProps: selectProps
    }, jsx(Label, {
      data: data,
      innerProps: {
        className: emotionCx(css(getStyles('multiValueLabel', props)), cx({
          'multi-value__label': true
        }, className))
      },
      selectProps: selectProps
    }, children), jsx(Remove, {
      data: data,
      innerProps: _objectSpread2({
        className: emotionCx(css(getStyles('multiValueRemove', props)), cx({
          'multi-value__remove': true
        }, className))
      }, removeProps),
      selectProps: selectProps
    }));
  });
};

MultiValue.defaultProps = {
  cropWithEllipsis: true
};

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'option',
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? colors.primary : colors.primary50)
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('option', props),
    className: cx({
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className),
    ref: innerRef
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'placeholder',
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('placeholder', props),
    className: cx({
      placeholder: true
    }, className)
  }, innerProps), children);
};

var css$1 = function css(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    label: 'singleValue',
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return jsx("div", _extends({
    css: getStyles('singleValue', props),
    className: cx({
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread2(_objectSpread2({}, components), props.components);
};

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

var _ref =  {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} ;

var A11yText = function A11yText(props) {
  return jsx("span", _extends({
    css: _ref
  }, props));
};

var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable,
        isMulti = props.isMulti,
        isDisabled = props.isDisabled,
        tabSelectsValue = props.tabSelectsValue,
        context = props.context;

    switch (context) {
      case 'menu':
        return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu").concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");

      case 'input':
        return "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';

      default:
        return '';
    }
  },
  onChange: function onChange(props) {
    var action = props.action,
        _props$label = props.label,
        label = _props$label === void 0 ? '' : _props$label,
        isDisabled = props.isDisabled;

    switch (action) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return "option ".concat(label, ", deselected.");

      case 'select-option':
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");

      default:
        return '';
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context,
        _props$focused = props.focused,
        focused = _props$focused === void 0 ? {} : _props$focused,
        options = props.options,
        _props$label2 = props.label,
        label = _props$label2 === void 0 ? '' : _props$label2,
        selectValue = props.selectValue,
        isDisabled = props.isDisabled,
        isSelected = props.isSelected;

    var getArrayIndex = function getArrayIndex(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
    };

    if (context === 'value' && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }

    if (context === 'menu') {
      var disabled = isDisabled ? ' disabled' : '';
      var status = "".concat(isSelected ? 'selected' : 'focused').concat(disabled);
      return "option ".concat(label, " ").concat(status, ", ").concat(getArrayIndex(options, focused), ".");
    }

    return '';
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue,
        resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
  }
};

var LiveRegion = function LiveRegion(props) {
  var ariaSelection = props.ariaSelection,
      focusedOption = props.focusedOption,
      focusedValue = props.focusedValue,
      focusableOptions = props.focusableOptions,
      isFocused = props.isFocused,
      selectValue = props.selectValue,
      selectProps = props.selectProps;
  var ariaLiveMessages = selectProps.ariaLiveMessages,
      getOptionLabel = selectProps.getOptionLabel,
      inputValue = selectProps.inputValue,
      isMulti = selectProps.isMulti,
      isOptionDisabled = selectProps.isOptionDisabled,
      isSearchable = selectProps.isSearchable,
      menuIsOpen = selectProps.menuIsOpen,
      options = selectProps.options,
      screenReaderStatus = selectProps.screenReaderStatus,
      tabSelectsValue = selectProps.tabSelectsValue;
  var ariaLabel = selectProps['aria-label'];
  var ariaLive = selectProps['aria-live']; // Update aria live message configuration when prop changes

  var messages = react.useMemo(function () {
    return _objectSpread2(_objectSpread2({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]); // Update aria live selected option when prop changes

  var ariaSelected = react.useMemo(function () {
    var message = '';

    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option,
          removedValue = ariaSelection.removedValue,
          value = ariaSelection.value; // select-option when !isMulti does not return option so we assume selected option is value

      var asOption = function asOption(val) {
        return !Array.isArray(val) ? val : null;
      };

      var selected = removedValue || option || asOption(value);

      var onChangeProps = _objectSpread2({
        isDisabled: selected && isOptionDisabled(selected),
        label: selected ? getOptionLabel(selected) : ''
      }, ariaSelection);

      message = messages.onChange(onChangeProps);
    }

    return message;
  }, [ariaSelection, isOptionDisabled, getOptionLabel, messages]);
  var ariaFocused = react.useMemo(function () {
    var focusMsg = '';
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));

    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused: focused,
        label: getOptionLabel(focused),
        isDisabled: isOptionDisabled(focused),
        isSelected: isSelected,
        options: options,
        context: focused === focusedOption ? 'menu' : 'value',
        selectValue: selectValue
      };
      focusMsg = messages.onFocus(onFocusProps);
    }

    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, options, selectValue]);
  var ariaResults = react.useMemo(function () {
    var resultsMsg = '';

    if (menuIsOpen && options.length && messages.onFilter) {
      var resultsMessage = screenReaderStatus({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue: inputValue,
        resultsMessage: resultsMessage
      });
    }

    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus]);
  var ariaGuidance = react.useMemo(function () {
    var guidanceMsg = '';

    if (messages.guidance) {
      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
      guidanceMsg = messages.guidance({
        'aria-label': ariaLabel,
        context: context,
        isDisabled: focusedOption && isOptionDisabled(focusedOption),
        isMulti: isMulti,
        isSearchable: isSearchable,
        tabSelectsValue: tabSelectsValue
      });
    }

    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, tabSelectsValue]);
  var ariaContext = "".concat(ariaFocused, " ").concat(ariaResults, " ").concat(ariaGuidance);
  return jsx(A11yText, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text"
  }, isFocused && jsx(react.Fragment, null, jsx("span", {
    id: "aria-selection"
  }, ariaSelected), jsx("span", {
    id: "aria-context"
  }, ariaContext)));
};

var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};

for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];

  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}

var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

var memoizedStripDiacriticsForInput = memoizeOne(stripDiacritics);

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread2({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

function DummyInput(_ref) {
  _ref.in;
      _ref.out;
      _ref.onExited;
      _ref.appear;
      _ref.enter;
      _ref.exit;
      var innerRef = _ref.innerRef;
      _ref.emotion;
      var props = _objectWithoutProperties(_ref, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

  return jsx("input", _extends({
    ref: innerRef
  }, props, {
    css: /*#__PURE__*/css$2({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      fontSize: 'inherit',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(0)'
    },  "" ,  "" )
  }));
}

var cancelScroll = function cancelScroll(event) {
  event.preventDefault();
  event.stopPropagation();
};

function useScrollCapture(_ref) {
  var isEnabled = _ref.isEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
  var isBottom = react.useRef(false);
  var isTop = react.useRef(false);
  var touchStart = react.useRef(0);
  var scrollTarget = react.useRef(null);
  var handleEventDelta = react.useCallback(function (event, delta) {
    // Reference should never be `null` at this point, but flow complains otherwise
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
        scrollTop = _scrollTarget$current.scrollTop,
        scrollHeight = _scrollTarget$current.scrollHeight,
        clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false; // reset bottom/top flags

    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }

    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    } // bottom limit


    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }

      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true; // top limit
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }

      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    } // cancel scroll


    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, []);
  var onWheel = react.useCallback(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = react.useCallback(function (event) {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = react.useCallback(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = react.useCallback(function (el) {
    // bail early if no element is available to attach to
    if (!el) return;
    var notPassive = supportsPassiveEvents ? {
      passive: false
    } : false; // all the if statements are to appease Flow 😢

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('wheel', onWheel, notPassive);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchstart', onTouchStart, notPassive);
    }

    if (typeof el.addEventListener === 'function') {
      el.addEventListener('touchmove', onTouchMove, notPassive);
    }
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = react.useCallback(function (el) {
    // bail early if no element is available to detach from
    if (!el) return; // all the if statements are to appease Flow 😢

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('wheel', onWheel, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchstart', onTouchStart, false);
    }

    if (typeof el.removeEventListener === 'function') {
      el.removeEventListener('touchmove', onTouchMove, false);
    }
  }, [onTouchMove, onTouchStart, onWheel]);
  react.useEffect(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}

function allowTouchMove(e) {
  e.stopPropagation();
}

function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface


function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref) {
  var isEnabled = _ref.isEnabled,
      _ref$accountForScroll = _ref.accountForScrollbars,
      accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = react.useRef({});
  var scrollTarget = react.useRef(null);
  var addScrollLock = react.useCallback(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    } // apply the lock styles and padding if this is the first scroll lock


    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });

      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    } // account for touch devices


    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, listenerOptions); // Allow scroll on provided target

      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    } // increment active scroll locks


    activeScrollLocks += 1;
  }, []);
  var removeScrollLock = react.useCallback(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style; // safely decrement active scroll locks

    activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];

        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    } // remove touch listeners


    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);

      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }
  }, []);
  react.useEffect(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}

var blurSelectInput = function blurSelectInput() {
  return document.activeElement && document.activeElement.blur();
};

var _ref2$1 =  {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} ;

function ScrollManager(_ref) {
  var children = _ref.children,
      lockEnabled = _ref.lockEnabled,
      _ref$captureEnabled = _ref.captureEnabled,
      captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
      onBottomArrive = _ref.onBottomArrive,
      onBottomLeave = _ref.onBottomLeave,
      onTopArrive = _ref.onTopArrive,
      onTopLeave = _ref.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive: onBottomArrive,
    onBottomLeave: onBottomLeave,
    onTopArrive: onTopArrive,
    onTopLeave: onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });

  var targetRef = function targetRef(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };

  return jsx(react.Fragment, null, lockEnabled && jsx("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$1,
  valueContainer: valueContainerCSS
}; // Merge Utility

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4; // Used to calculate consistent margin/padding on elements

var baseUnit = 4; // The minimum height of the control

var controlHeight = 38; // The amount of space between the control and menu */

var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  'aria-live': 'polite',
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};

function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);

  var isSelected = _isOptionSelected(props, option, selectValue);

  var label = getOptionLabel$1(props, option);
  var value = getOptionValue$1(props, option);
  return {
    type: 'option',
    data: option,
    isDisabled: isDisabled,
    isSelected: isSelected,
    label: label,
    value: value,
    index: index
  };
}

function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if (groupOrOption.options) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption) {
        return isFocusable(props, categorizedOption);
      });
      return categorizedOptions.length > 0 ? {
        type: 'group',
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : undefined;
    }

    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
  }) // Flow limitation (see https://github.com/facebook/flow/issues/1414)
  .filter(function (categorizedOption) {
    return !!categorizedOption;
  });
}

function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, _toConsumableArray(categorizedOption.options.map(function (option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }

    return optionsAccumulator;
  }, []);
}

function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}

function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
      inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
  var data = categorizedOption.data,
      isSelected = categorizedOption.isSelected,
      label = categorizedOption.label,
      value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label: label,
    value: value,
    data: data
  }, inputValue);
}

function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
      lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

    if (nextFocusedIndex > -1) {
      // the focused value is still in the selectValue, return it
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      // the focusedValue is not present in the next selectValue array by
      // reference, so return the new value at the same index
      return nextSelectValue[lastFocusedIndex];
    }
  }

  return null;
}

function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}

var getOptionLabel$1 = function getOptionLabel(props, data) {
  return props.getOptionLabel(data);
};

var getOptionValue$1 = function getOptionValue(props, data) {
  return props.getOptionValue(data);
};

function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
}

function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;

  if (typeof props.isOptionSelected === 'function') {
    return props.isOptionSelected(option, selectValue);
  }

  var candidate = getOptionValue$1(props, option);
  return selectValue.some(function (i) {
    return getOptionValue$1(props, i) === candidate;
  });
}

function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}

var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
      isMulti = props.isMulti;
  if (hideSelectedOptions === undefined) return isMulti;
  return hideSelectedOptions;
};

var instanceId = 1;

var Select = /*#__PURE__*/function (_Component) {
  _inherits(Select, _Component);

  var _super = _createSuper(Select);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      inputIsHiddenAfterUpdate: undefined,
      prevProps: undefined
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.instancePrefix = '';
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.controlRef = null;

    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };

    _this.focusedOptionRef = null;

    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };

    _this.menuListRef = null;

    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.inputRef = null;

    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };

    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;

    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      actionMeta.name = name;

      _this.ariaOnChange(newValue, actionMeta);

      onChange(newValue, actionMeta);
    };

    _this.setValue = function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.setState({
        clearFocusValueOnUpdate: true
      });

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };

    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti,
          name = _this$props3.name;
      var selectValue = _this.state.selectValue;

      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);

      var isDisabled = _this.isOptionDisabled(newValue, selectValue);

      if (deselected) {
        var candidate = _this.getOptionValue(newValue);

        _this.setValue(selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        }), 'deselect-option', newValue);
      } else if (!isDisabled) {
        // Select option if option is not disabled
        if (isMulti) {
          _this.setValue([].concat(_toConsumableArray(selectValue), [newValue]), 'select-option', newValue);
        } else {
          _this.setValue(newValue, 'select-option');
        }
      } else {
        _this.ariaOnChange(newValue, {
          action: 'select-option',
          name: name
        });

        return;
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };

    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = isMulti ? newValueArray : newValueArray[0] || null;

      _this.onChange(newValue, {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.focusInput();
    };

    _this.clearValue = function () {
      var selectValue = _this.state.selectValue;

      _this.onChange(_this.props.isMulti ? [] : null, {
        action: 'clear',
        removedValues: selectValue
      });
    };

    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = isMulti ? newValueArray : newValueArray[0] || null;

      _this.onChange(newValue, {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    };

    _this.getValue = function () {
      return _this.state.selectValue;
    };

    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };

    _this.getOptionLabel = function (data) {
      return getOptionLabel$1(_this.props, data);
    };

    _this.getOptionValue = function (data) {
      return getOptionValue$1(_this.props, data);
    };

    _this.getStyles = function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };

    _this.getElementId = function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    };

    _this.getComponents = function () {
      return defaultComponents(_this.props);
    };

    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };

    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };

    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };

    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };

    _this.ariaOnChange = function (value, actionMeta) {
      _this.setState({
        ariaSelection: _objectSpread2({
          value: value
        }, actionMeta)
      });
    };

    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    };

    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };

    _this.onControlMouseDown = function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if ( // $FlowFixMe
        event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }

      if ( // $FlowFixMe
      event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };

    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    };

    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;

      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };

    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };

    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };

    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };

    _this.onTouchStart = function (_ref2) {
      var touches = _ref2.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };

    _this.onTouchMove = function (_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };

    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };

    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    };

    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    };

    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    };

    _this.handleInputChange = function (event) {
      var inputValue = event.currentTarget.value;

      _this.setState({
        inputIsHiddenAfterUpdate: false
      });

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };

    _this.onInputFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    };

    _this.onInputBlur = function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };

    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    };

    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };

    _this.onKeyDown = function (event) {
      var _this$props5 = _this.props,
          isMulti = _this$props5.isMulti,
          backspaceRemovesValue = _this$props5.backspaceRemovesValue,
          escapeClearsValue = _this$props5.escapeClearsValue,
          inputValue = _this$props5.inputValue,
          isClearable = _this$props5.isClearable,
          isDisabled = _this$props5.isDisabled,
          menuIsOpen = _this$props5.menuIsOpen,
          onKeyDown = _this$props5.onKeyDown,
          tabSelectsValue = _this$props5.tabSelectsValue,
          openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state,
          focusedOption = _this$state.focusedOption,
          focusedValue = _this$state.focusedValue,
          selectValue = _this$state.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (_this.isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }

          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    };

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = cleanValue(_props.value);
    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
          isDisabled = _this$props6.isDisabled,
          menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }

      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programatically disabled while focused
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    } // ==============================
    // Consumer Handlers
    // ==============================

  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;

      var _this$state2 = this.state,
          selectValue = _this$state2.selectValue,
          isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;

      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex]
      }, function () {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state,
          selectValue = _this$state3.selectValue,
          focusedValue = _this$state3.focusedValue; // Only multiselects support value focusing

      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
    }
  }, {
    key: "getTheme",
    value: // ==============================
    // Getters
    // ==============================
    function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return _objectSpread2(_objectSpread2({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          cx = this.cx,
          getStyles = this.getStyles,
          getValue = this.getValue,
          selectOption = this.selectOption,
          setValue = this.setValue,
          props = this.props;
      var isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue: clearValue,
        cx: cx,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        selectProps: props,
        setValue: setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props,
          isClearable = _this$props7.isClearable,
          isMulti = _this$props7.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    value: // ==============================
    // Composition Handlers
    // ==============================
    function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value: // ==============================
    // Touch Handlers
    // ==============================
    function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value: // ==============================
    // Renderers
    // ==============================
    function renderInput() {
      var _this$props8 = this.props,
          isDisabled = _this$props8.isDisabled,
          isSearchable = _this$props8.isSearchable,
          inputId = _this$props8.inputId,
          inputValue = _this$props8.inputValue,
          tabIndex = _this$props8.tabIndex,
          form = _this$props8.form;

      var _this$getComponents = this.getComponents(),
          Input = _this$getComponents.Input;

      var inputIsHidden = this.state.inputIsHidden;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId('input'); // aria attributes makes the JSX "noisy", separated for clarity

      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/react.createElement(DummyInput, _extends({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          form: form,
          value: ""
        }, ariaAttributes));
      }

      return /*#__PURE__*/react.createElement(Input, _extends({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;

      var _this$getComponents2 = this.getComponents(),
          MultiValue = _this$getComponents2.MultiValue,
          MultiValueContainer = _this$getComponents2.MultiValueContainer,
          MultiValueLabel = _this$getComponents2.MultiValueLabel,
          MultiValueRemove = _this$getComponents2.MultiValueRemove,
          SingleValue = _this$getComponents2.SingleValue,
          Placeholder = _this$getComponents2.Placeholder;

      var commonProps = this.commonProps;
      var _this$props9 = this.props,
          controlShouldRenderValue = _this$props9.controlShouldRenderValue,
          isDisabled = _this$props9.isDisabled,
          isMulti = _this$props9.isMulti,
          inputValue = _this$props9.inputValue,
          placeholder = _this$props9.placeholder;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue,
          isFocused = _this$state4.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/react.createElement(Placeholder, _extends({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          return /*#__PURE__*/react.createElement(MultiValue, _extends({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: "".concat(_this3.getOptionValue(opt)).concat(index),
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return /*#__PURE__*/react.createElement(SingleValue, _extends({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
          ClearIndicator = _this$getComponents3.ClearIndicator;

      var commonProps = this.commonProps;
      var _this$props10 = this.props,
          isDisabled = _this$props10.isDisabled,
          isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react.createElement(ClearIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
          LoadingIndicator = _this$getComponents4.LoadingIndicator;

      var commonProps = this.commonProps;
      var _this$props11 = this.props,
          isDisabled = _this$props11.isDisabled,
          isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react.createElement(LoadingIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
          DropdownIndicator = _this$getComponents5.DropdownIndicator,
          IndicatorSeparator = _this$getComponents5.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator


      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/react.createElement(IndicatorSeparator, _extends({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
          DropdownIndicator = _this$getComponents6.DropdownIndicator;

      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react.createElement(DropdownIndicator, _extends({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;

      var _this$getComponents7 = this.getComponents(),
          Group = _this$getComponents7.Group,
          GroupHeading = _this$getComponents7.GroupHeading,
          Menu = _this$getComponents7.Menu,
          MenuList = _this$getComponents7.MenuList,
          MenuPortal = _this$getComponents7.MenuPortal,
          LoadingMessage = _this$getComponents7.LoadingMessage,
          NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
          Option = _this$getComponents7.Option;

      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props,
          captureMenuScroll = _this$props12.captureMenuScroll,
          inputValue = _this$props12.inputValue,
          isLoading = _this$props12.isLoading,
          loadingMessage = _this$props12.loadingMessage,
          minMenuHeight = _this$props12.minMenuHeight,
          maxMenuHeight = _this$props12.maxMenuHeight,
          menuIsOpen = _this$props12.menuIsOpen,
          menuPlacement = _this$props12.menuPlacement,
          menuPosition = _this$props12.menuPosition,
          menuPortalTarget = _this$props12.menuPortalTarget,
          menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
          noOptionsMessage = _this$props12.noOptionsMessage,
          onMenuScrollToTop = _this$props12.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props, id) {
        var type = props.type,
            data = props.data,
            isDisabled = props.isDisabled,
            isSelected = props.isSelected,
            label = props.label,
            value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? undefined : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1
        };
        return /*#__PURE__*/react.createElement(Option, _extends({}, commonProps, {
          innerProps: innerProps,
          data: data,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: type,
          value: value,
          isFocused: isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
        }), _this4.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === 'group') {
            var data = item.data,
                options = item.options,
                groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /*#__PURE__*/react.createElement(Group, _extends({}, commonProps, {
              key: groupId,
              data: data,
              options: options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === 'option') {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/react.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = /*#__PURE__*/react.createElement(NoOptionsMessage, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/react.createElement(MenuPlacer, _extends({}, commonProps, menuPlacementProps), function (_ref4) {
        var ref = _ref4.ref,
            _ref4$placerProps = _ref4.placerProps,
            placement = _ref4$placerProps.placement,
            maxHeight = _ref4$placerProps.maxHeight;
        return /*#__PURE__*/react.createElement(Menu, _extends({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/react.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /*#__PURE__*/react.createElement(MenuList, _extends({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);

              scrollTargetRef(instance);
            },
            isLoading: isLoading,
            maxHeight: maxHeight,
            focusedOption: focusedOption
          }), menuUI);
        }));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/react.createElement(MenuPortal, _extends({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;

      var _this$props13 = this.props,
          delimiter = _this$props13.delimiter,
          isDisabled = _this$props13.isDisabled,
          isMulti = _this$props13.isMulti,
          name = _this$props13.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/react.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/react.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /*#__PURE__*/react.createElement("input", {
            name: name,
            type: "hidden"
          });
          return /*#__PURE__*/react.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return /*#__PURE__*/react.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state5 = this.state,
          ariaSelection = _this$state5.ariaSelection,
          focusedOption = _this$state5.focusedOption,
          focusedValue = _this$state5.focusedValue,
          isFocused = _this$state5.isFocused,
          selectValue = _this$state5.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /*#__PURE__*/react.createElement(LiveRegion, _extends({}, commonProps, {
        ariaSelection: ariaSelection,
        focusedOption: focusedOption,
        focusedValue: focusedValue,
        isFocused: isFocused,
        selectValue: selectValue,
        focusableOptions: focusableOptions
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
          Control = _this$getComponents8.Control,
          IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
          SelectContainer = _this$getComponents8.SelectContainer,
          ValueContainer = _this$getComponents8.ValueContainer;

      var _this$props14 = this.props,
          className = _this$props14.className,
          id = _this$props14.id,
          isDisabled = _this$props14.isDisabled,
          menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/react.createElement(SelectContainer, _extends({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/react.createElement(Control, _extends({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/react.createElement(ValueContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/react.createElement(IndicatorsContainer, _extends({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
          clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
          inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate;
      var options = props.options,
          value = props.value,
          menuIsOpen = props.menuIsOpen,
          inputValue = props.inputValue;
      var newMenuOptionsState = {};

      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var selectValue = cleanValue(value);
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        newMenuOptionsState = {
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue,
          clearFocusValueOnUpdate: false
        };
      } // some updates should toggle the state of the input visibility


      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: undefined
      } : {};
      return _objectSpread2(_objectSpread2(_objectSpread2({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props
      });
    }
  }]);

  return Select;
}(react.Component);

Select.defaultProps = defaultProps;

var defaultProps$1 = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(StateManager, _Component);

    var _super = _createSuper(StateManager);

    function StateManager() {
      var _this;

      _classCallCheck(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.select = void 0;
      _this.state = {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      };

      _this.onChange = function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      };

      _this.onInputChange = function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      };

      _this.onMenuOpen = function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      };

      _this.onMenuClose = function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      };

      return _this;
    }

    _createClass(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props;
            _this$props2.defaultInputValue;
            _this$props2.defaultMenuIsOpen;
            _this$props2.defaultValue;
            var props = _objectWithoutProperties(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return /*#__PURE__*/react.createElement(SelectComponent, _extends({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(react.Component), _class.defaultProps = defaultProps$1, _temp;
};

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var objectWithoutProperties = createCommonjsModule(function (module) {
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var taggedTemplateLiteral = createCommonjsModule(function (module) {
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var index = manageState(Select);

export default index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtc2VsZWN0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtYXV0b3NpemUvbGliL0F1dG9zaXplSW5wdXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2V0UHJvdG90eXBlT2YuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3QvaW5kZXgtNGJkMDM1NzEuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21lbW9pemUtb25lL2Rpc3QvbWVtb2l6ZS1vbmUuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L1NlbGVjdC1kYmIxMmU1NC5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2VsZWN0L2Rpc3Qvc3RhdGVNYW5hZ2VyLTg0NWEzMzAwLmVzbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5TGlrZVRvQXJyYXkuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXNlbGVjdC9kaXN0L3JlYWN0LXNlbGVjdC5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBzaXplclN0eWxlID0ge1xuXHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0dG9wOiAwLFxuXHRsZWZ0OiAwLFxuXHR2aXNpYmlsaXR5OiAnaGlkZGVuJyxcblx0aGVpZ2h0OiAwLFxuXHRvdmVyZmxvdzogJ3Njcm9sbCcsXG5cdHdoaXRlU3BhY2U6ICdwcmUnXG59O1xuXG52YXIgSU5QVVRfUFJPUFNfQkxBQ0tMSVNUID0gWydleHRyYVdpZHRoJywgJ2luamVjdFN0eWxlcycsICdpbnB1dENsYXNzTmFtZScsICdpbnB1dFJlZicsICdpbnB1dFN0eWxlJywgJ21pbldpZHRoJywgJ29uQXV0b3NpemUnLCAncGxhY2Vob2xkZXJJc01pbldpZHRoJ107XG5cbnZhciBjbGVhbklucHV0UHJvcHMgPSBmdW5jdGlvbiBjbGVhbklucHV0UHJvcHMoaW5wdXRQcm9wcykge1xuXHRJTlBVVF9QUk9QU19CTEFDS0xJU1QuZm9yRWFjaChmdW5jdGlvbiAoZmllbGQpIHtcblx0XHRyZXR1cm4gZGVsZXRlIGlucHV0UHJvcHNbZmllbGRdO1xuXHR9KTtcblx0cmV0dXJuIGlucHV0UHJvcHM7XG59O1xuXG52YXIgY29weVN0eWxlcyA9IGZ1bmN0aW9uIGNvcHlTdHlsZXMoc3R5bGVzLCBub2RlKSB7XG5cdG5vZGUuc3R5bGUuZm9udFNpemUgPSBzdHlsZXMuZm9udFNpemU7XG5cdG5vZGUuc3R5bGUuZm9udEZhbWlseSA9IHN0eWxlcy5mb250RmFtaWx5O1xuXHRub2RlLnN0eWxlLmZvbnRXZWlnaHQgPSBzdHlsZXMuZm9udFdlaWdodDtcblx0bm9kZS5zdHlsZS5mb250U3R5bGUgPSBzdHlsZXMuZm9udFN0eWxlO1xuXHRub2RlLnN0eWxlLmxldHRlclNwYWNpbmcgPSBzdHlsZXMubGV0dGVyU3BhY2luZztcblx0bm9kZS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gc3R5bGVzLnRleHRUcmFuc2Zvcm07XG59O1xuXG52YXIgaXNJRSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgPyAvTVNJRSB8VHJpZGVudFxcL3xFZGdlXFwvLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSA6IGZhbHNlO1xuXG52YXIgZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uIGdlbmVyYXRlSWQoKSB7XG5cdC8vIHdlIG9ubHkgbmVlZCBhbiBhdXRvLWdlbmVyYXRlZCBJRCBmb3Igc3R5bGVzaGVldCBpbmplY3Rpb24sIHdoaWNoIGlzIG9ubHlcblx0Ly8gdXNlZCBmb3IgSUUuIHNvIGlmIHRoZSBicm93c2VyIGlzIG5vdCBJRSwgdGhpcyBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZC5cblx0cmV0dXJuIGlzSUUgPyAnXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTIpIDogdW5kZWZpbmVkO1xufTtcblxudmFyIEF1dG9zaXplSW5wdXQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuXHRfaW5oZXJpdHMoQXV0b3NpemVJbnB1dCwgX0NvbXBvbmVudCk7XG5cblx0X2NyZWF0ZUNsYXNzKEF1dG9zaXplSW5wdXQsIG51bGwsIFt7XG5cdFx0a2V5OiAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuXHRcdFx0dmFyIGlkID0gcHJvcHMuaWQ7XG5cblx0XHRcdHJldHVybiBpZCAhPT0gc3RhdGUucHJldklkID8geyBpbnB1dElkOiBpZCB8fCBnZW5lcmF0ZUlkKCksIHByZXZJZDogaWQgfSA6IG51bGw7XG5cdFx0fVxuXHR9XSk7XG5cblx0ZnVuY3Rpb24gQXV0b3NpemVJbnB1dChwcm9wcykge1xuXHRcdF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdXRvc2l6ZUlucHV0KTtcblxuXHRcdHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBdXRvc2l6ZUlucHV0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXV0b3NpemVJbnB1dCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHRcdF90aGlzLmlucHV0UmVmID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRfdGhpcy5pbnB1dCA9IGVsO1xuXHRcdFx0aWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5pbnB1dFJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRfdGhpcy5wcm9wcy5pbnB1dFJlZihlbCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdF90aGlzLnBsYWNlSG9sZGVyU2l6ZXJSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLnBsYWNlSG9sZGVyU2l6ZXIgPSBlbDtcblx0XHR9O1xuXG5cdFx0X3RoaXMuc2l6ZXJSZWYgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdF90aGlzLnNpemVyID0gZWw7XG5cdFx0fTtcblxuXHRcdF90aGlzLnN0YXRlID0ge1xuXHRcdFx0aW5wdXRXaWR0aDogcHJvcHMubWluV2lkdGgsXG5cdFx0XHRpbnB1dElkOiBwcm9wcy5pZCB8fCBnZW5lcmF0ZUlkKCksXG5cdFx0XHRwcmV2SWQ6IHByb3BzLmlkXG5cdFx0fTtcblx0XHRyZXR1cm4gX3RoaXM7XG5cdH1cblxuXHRfY3JlYXRlQ2xhc3MoQXV0b3NpemVJbnB1dCwgW3tcblx0XHRrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdFx0dGhpcy5tb3VudGVkID0gdHJ1ZTtcblx0XHRcdHRoaXMuY29weUlucHV0U3R5bGVzKCk7XG5cdFx0XHR0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcblx0XHRcdGlmIChwcmV2U3RhdGUuaW5wdXRXaWR0aCAhPT0gdGhpcy5zdGF0ZS5pbnB1dFdpZHRoKSB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkF1dG9zaXplID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5vbkF1dG9zaXplKHRoaXMuc3RhdGUuaW5wdXRXaWR0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlSW5wdXRXaWR0aCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50Jyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0XHR0aGlzLm1vdW50ZWQgPSBmYWxzZTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdjb3B5SW5wdXRTdHlsZXMnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBjb3B5SW5wdXRTdHlsZXMoKSB7XG5cdFx0XHRpZiAoIXRoaXMubW91bnRlZCB8fCAhd2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGlucHV0U3R5bGVzID0gdGhpcy5pbnB1dCAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmlucHV0KTtcblx0XHRcdGlmICghaW5wdXRTdHlsZXMpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29weVN0eWxlcyhpbnB1dFN0eWxlcywgdGhpcy5zaXplcik7XG5cdFx0XHRpZiAodGhpcy5wbGFjZUhvbGRlclNpemVyKSB7XG5cdFx0XHRcdGNvcHlTdHlsZXMoaW5wdXRTdHlsZXMsIHRoaXMucGxhY2VIb2xkZXJTaXplcik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAndXBkYXRlSW5wdXRXaWR0aCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUlucHV0V2lkdGgoKSB7XG5cdFx0XHRpZiAoIXRoaXMubW91bnRlZCB8fCAhdGhpcy5zaXplciB8fCB0eXBlb2YgdGhpcy5zaXplci5zY3JvbGxXaWR0aCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG5ld0lucHV0V2lkdGggPSB2b2lkIDA7XG5cdFx0XHRpZiAodGhpcy5wcm9wcy5wbGFjZWhvbGRlciAmJiAoIXRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLnBsYWNlaG9sZGVySXNNaW5XaWR0aCkpIHtcblx0XHRcdFx0bmV3SW5wdXRXaWR0aCA9IE1hdGgubWF4KHRoaXMuc2l6ZXIuc2Nyb2xsV2lkdGgsIHRoaXMucGxhY2VIb2xkZXJTaXplci5zY3JvbGxXaWR0aCkgKyAyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmV3SW5wdXRXaWR0aCA9IHRoaXMuc2l6ZXIuc2Nyb2xsV2lkdGggKyAyO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYWRkIGV4dHJhV2lkdGggdG8gdGhlIGRldGVjdGVkIHdpZHRoLiBmb3IgbnVtYmVyIHR5cGVzLCB0aGlzIGRlZmF1bHRzIHRvIDE2IHRvIGFsbG93IGZvciB0aGUgc3RlcHBlciBVSVxuXHRcdFx0dmFyIGV4dHJhV2lkdGggPSB0aGlzLnByb3BzLnR5cGUgPT09ICdudW1iZXInICYmIHRoaXMucHJvcHMuZXh0cmFXaWR0aCA9PT0gdW5kZWZpbmVkID8gMTYgOiBwYXJzZUludCh0aGlzLnByb3BzLmV4dHJhV2lkdGgpIHx8IDA7XG5cdFx0XHRuZXdJbnB1dFdpZHRoICs9IGV4dHJhV2lkdGg7XG5cdFx0XHRpZiAobmV3SW5wdXRXaWR0aCA8IHRoaXMucHJvcHMubWluV2lkdGgpIHtcblx0XHRcdFx0bmV3SW5wdXRXaWR0aCA9IHRoaXMucHJvcHMubWluV2lkdGg7XG5cdFx0XHR9XG5cdFx0XHRpZiAobmV3SW5wdXRXaWR0aCAhPT0gdGhpcy5zdGF0ZS5pbnB1dFdpZHRoKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGlucHV0V2lkdGg6IG5ld0lucHV0V2lkdGhcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnZ2V0SW5wdXQnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmlucHV0O1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ2ZvY3VzJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAnYmx1cicsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG5cdFx0XHR0aGlzLmlucHV0LmJsdXIoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdzZWxlY3QnLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiBzZWxlY3QoKSB7XG5cdFx0XHR0aGlzLmlucHV0LnNlbGVjdCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGtleTogJ3JlbmRlclN0eWxlcycsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIHJlbmRlclN0eWxlcygpIHtcblx0XHRcdC8vIHRoaXMgbWV0aG9kIGluamVjdHMgc3R5bGVzIHRvIGhpZGUgSUUncyBjbGVhciBpbmRpY2F0b3IsIHdoaWNoIG1lc3Nlc1xuXHRcdFx0Ly8gd2l0aCBpbnB1dCBzaXplIGRldGVjdGlvbi4gdGhlIHN0eWxlc2hlZXQgaXMgb25seSBpbmplY3RlZCB3aGVuIHRoZVxuXHRcdFx0Ly8gYnJvd3NlciBpcyBJRSwgYW5kIGNhbiBhbHNvIGJlIGRpc2FibGVkIGJ5IHRoZSBgaW5qZWN0U3R5bGVzYCBwcm9wLlxuXHRcdFx0dmFyIGluamVjdFN0eWxlcyA9IHRoaXMucHJvcHMuaW5qZWN0U3R5bGVzO1xuXG5cdFx0XHRyZXR1cm4gaXNJRSAmJiBpbmplY3RTdHlsZXMgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3R5bGUnLCB7IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG5cdFx0XHRcdFx0X19odG1sOiAnaW5wdXQjJyArIHRoaXMuc3RhdGUuaW5wdXRJZCArICc6Oi1tcy1jbGVhciB7ZGlzcGxheTogbm9uZTt9J1xuXHRcdFx0XHR9IH0pIDogbnVsbDtcblx0XHR9XG5cdH0sIHtcblx0XHRrZXk6ICdyZW5kZXInLFxuXHRcdHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdFx0XHR2YXIgc2l6ZXJWYWx1ZSA9IFt0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSwgdGhpcy5wcm9wcy52YWx1ZSwgJyddLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY3VycmVudFZhbHVlKSB7XG5cdFx0XHRcdGlmIChwcmV2aW91c1ZhbHVlICE9PSBudWxsICYmIHByZXZpb3VzVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybiBwcmV2aW91c1ZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBjdXJyZW50VmFsdWU7XG5cdFx0XHR9KTtcblxuXHRcdFx0dmFyIHdyYXBwZXJTdHlsZSA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLnN0eWxlKTtcblx0XHRcdGlmICghd3JhcHBlclN0eWxlLmRpc3BsYXkpIHdyYXBwZXJTdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG5cblx0XHRcdHZhciBpbnB1dFN0eWxlID0gX2V4dGVuZHMoe1xuXHRcdFx0XHRib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG5cdFx0XHRcdHdpZHRoOiB0aGlzLnN0YXRlLmlucHV0V2lkdGggKyAncHgnXG5cdFx0XHR9LCB0aGlzLnByb3BzLmlucHV0U3R5bGUpO1xuXG5cdFx0XHR2YXIgaW5wdXRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyh0aGlzLnByb3BzLCBbXSk7XG5cblx0XHRcdGNsZWFuSW5wdXRQcm9wcyhpbnB1dFByb3BzKTtcblx0XHRcdGlucHV0UHJvcHMuY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5pbnB1dENsYXNzTmFtZTtcblx0XHRcdGlucHV0UHJvcHMuaWQgPSB0aGlzLnN0YXRlLmlucHV0SWQ7XG5cdFx0XHRpbnB1dFByb3BzLnN0eWxlID0gaW5wdXRTdHlsZTtcblxuXHRcdFx0cmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLCBzdHlsZTogd3JhcHBlclN0eWxlIH0sXG5cdFx0XHRcdHRoaXMucmVuZGVyU3R5bGVzKCksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIF9leHRlbmRzKHt9LCBpbnB1dFByb3BzLCB7IHJlZjogdGhpcy5pbnB1dFJlZiB9KSksXG5cdFx0XHRcdF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgcmVmOiB0aGlzLnNpemVyUmVmLCBzdHlsZTogc2l6ZXJTdHlsZSB9LFxuXHRcdFx0XHRcdHNpemVyVmFsdWVcblx0XHRcdFx0KSxcblx0XHRcdFx0dGhpcy5wcm9wcy5wbGFjZWhvbGRlciA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgcmVmOiB0aGlzLnBsYWNlSG9sZGVyU2l6ZXJSZWYsIHN0eWxlOiBzaXplclN0eWxlIH0sXG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuXHRcdFx0XHQpIDogbnVsbFxuXHRcdFx0KTtcblx0XHR9XG5cdH1dKTtcblxuXHRyZXR1cm4gQXV0b3NpemVJbnB1dDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkF1dG9zaXplSW5wdXQucHJvcFR5cGVzID0ge1xuXHRjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBjbGFzc05hbWUgZm9yIHRoZSBvdXRlciBlbGVtZW50XG5cdGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksIC8vIGRlZmF1bHQgZmllbGQgdmFsdWVcblx0ZXh0cmFXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoWy8vIGFkZGl0aW9uYWwgd2lkdGggZm9yIGlucHV0IGVsZW1lbnRcblx0X3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG5cdGlkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgLy8gaWQgdG8gdXNlIGZvciB0aGUgaW5wdXQsIGNhbiBiZSBzZXQgZm9yIGNvbnNpc3RlbnQgc25hcHNob3RzXG5cdGluamVjdFN0eWxlczogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBpbmplY3QgdGhlIGN1c3RvbSBzdHlsZXNoZWV0IHRvIGhpZGUgY2xlYXIgVUksIGRlZmF1bHRzIHRvIHRydWVcblx0aW5wdXRDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBjbGFzc05hbWUgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdGlucHV0UmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsIC8vIHJlZiBjYWxsYmFjayBmb3IgdGhlIGlucHV0IGVsZW1lbnRcblx0aW5wdXRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsIC8vIGNzcyBzdHlsZXMgZm9yIHRoZSBpbnB1dCBlbGVtZW50XG5cdG1pbldpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbLy8gbWluaW11bSB3aWR0aCBmb3IgaW5wdXQgZWxlbWVudFxuXHRfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKSxcblx0b25BdXRvc2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvbkF1dG9zaXplIGhhbmRsZXI6IGZ1bmN0aW9uKG5ld1dpZHRoKSB7fVxuXHRvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLCAvLyBvbkNoYW5nZSBoYW5kbGVyOiBmdW5jdGlvbihldmVudCkge31cblx0cGxhY2Vob2xkZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCAvLyBwbGFjZWhvbGRlciB0ZXh0XG5cdHBsYWNlaG9sZGVySXNNaW5XaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLCAvLyBkb24ndCBjb2xsYXBzZSBzaXplIHRvIGxlc3MgdGhhbiB0aGUgcGxhY2Vob2xkZXJcblx0c3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LCAvLyBjc3Mgc3R5bGVzIGZvciB0aGUgb3V0ZXIgZWxlbWVudFxuXHR2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnkgLy8gZmllbGQgdmFsdWVcbn07XG5BdXRvc2l6ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcblx0bWluV2lkdGg6IDEsXG5cdGluamVjdFN0eWxlczogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXV0b3NpemVJbnB1dDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcywgY3NzIGFzIGNzcyQyLCBDbGFzc05hbWVzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF90eXBlb2YgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mJztcbmltcG9ydCBBdXRvc2l6ZUlucHV0IGZyb20gJ3JlYWN0LWlucHV0LWF1dG9zaXplJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkkMSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pO1xuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVN1cGVyKERlcml2ZWQpIHtcbiAgdmFyIGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCk7XG4gIHJldHVybiBmdW5jdGlvbiBfY3JlYXRlU3VwZXJJbnRlcm5hbCgpIHtcbiAgICB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksXG4gICAgICAgIHJlc3VsdDtcblxuICAgIGlmIChoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KSB7XG4gICAgICB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yO1xuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBOTyBPUFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbi8vIENsYXNzIE5hbWUgUHJlZml4ZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgY29tcG9uZW50IHN0YXRlIGZvciBzdHlsaW5nIHdpdGggY2xhc3MgbmFtZXMuXG5cbiBFeHBlY3RzIGFuIGFycmF5IG9mIHN0cmluZ3MgT1IgYSBzdHJpbmcvb2JqZWN0IHBhaXI6XG4gLSBjbGFzc05hbWUoWydjb21wJywgJ2NvbXAtYXJnJywgJ2NvbXAtYXJnLTInXSlcbiAgIEByZXR1cm5zICdyZWFjdC1zZWxlY3RfX2NvbXAgcmVhY3Qtc2VsZWN0X19jb21wLWFyZyByZWFjdC1zZWxlY3RfX2NvbXAtYXJnLTInXG4gLSBjbGFzc05hbWUoJ2NvbXAnLCB7IHNvbWU6IHRydWUsIHN0YXRlOiBmYWxzZSB9KVxuICAgQHJldHVybnMgJ3JlYWN0LXNlbGVjdF9fY29tcCByZWFjdC1zZWxlY3RfX2NvbXAtLXNvbWUnXG4qL1xuXG5mdW5jdGlvbiBhcHBseVByZWZpeFRvTmFtZShwcmVmaXgsIG5hbWUpIHtcbiAgaWYgKCFuYW1lKSB7XG4gICAgcmV0dXJuIHByZWZpeDtcbiAgfSBlbHNlIGlmIChuYW1lWzBdID09PSAnLScpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgbmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJ19fJyArIG5hbWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xhc3NOYW1lcyhwcmVmaXgsIHN0YXRlLCBjbGFzc05hbWUpIHtcbiAgdmFyIGFyciA9IFtjbGFzc05hbWVdO1xuXG4gIGlmIChzdGF0ZSAmJiBwcmVmaXgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHN0YXRlW2tleV0pIHtcbiAgICAgICAgYXJyLnB1c2goXCJcIi5jb25jYXQoYXBwbHlQcmVmaXhUb05hbWUocHJlZml4LCBrZXkpKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgcmV0dXJuIFN0cmluZyhpKS50cmltKCk7XG4gIH0pLmpvaW4oJyAnKTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGVhbiBWYWx1ZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBjbGVhblZhbHVlID0gZnVuY3Rpb24gY2xlYW5WYWx1ZSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5maWx0ZXIoQm9vbGVhbik7XG4gIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHJldHVybiBbdmFsdWVdO1xuICByZXR1cm4gW107XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENsZWFuIENvbW1vbiBQcm9wc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBjbGVhbkNvbW1vblByb3BzID0gZnVuY3Rpb24gY2xlYW5Db21tb25Qcm9wcyhwcm9wcykge1xuICAvL2NsYXNzTmFtZVxuICBwcm9wcy5jbGFzc05hbWU7XG4gICAgICBwcm9wcy5jbGVhclZhbHVlO1xuICAgICAgcHJvcHMuY3g7XG4gICAgICBwcm9wcy5nZXRTdHlsZXM7XG4gICAgICBwcm9wcy5nZXRWYWx1ZTtcbiAgICAgIHByb3BzLmhhc1ZhbHVlO1xuICAgICAgcHJvcHMuaXNNdWx0aTtcbiAgICAgIHByb3BzLmlzUnRsO1xuICAgICAgcHJvcHMub3B0aW9ucztcbiAgICAgIHByb3BzLnNlbGVjdE9wdGlvbjtcbiAgICAgIHByb3BzLnNlbGVjdFByb3BzO1xuICAgICAgcHJvcHMuc2V0VmFsdWU7XG4gICAgICBwcm9wcy50aGVtZTtcbiAgICAgIHZhciBpbm5lclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc05hbWVcIiwgXCJjbGVhclZhbHVlXCIsIFwiY3hcIiwgXCJnZXRTdHlsZXNcIiwgXCJnZXRWYWx1ZVwiLCBcImhhc1ZhbHVlXCIsIFwiaXNNdWx0aVwiLCBcImlzUnRsXCIsIFwib3B0aW9uc1wiLCBcInNlbGVjdE9wdGlvblwiLCBcInNlbGVjdFByb3BzXCIsIFwic2V0VmFsdWVcIiwgXCJ0aGVtZVwiXSk7XG5cbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKHt9LCBpbm5lclByb3BzKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSGFuZGxlIElucHV0IENoYW5nZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEsIG9uSW5wdXRDaGFuZ2UpIHtcbiAgaWYgKG9uSW5wdXRDaGFuZ2UpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBvbklucHV0Q2hhbmdlKGlucHV0VmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIGlmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdzdHJpbmcnKSByZXR1cm4gbmV3VmFsdWU7XG4gIH1cblxuICByZXR1cm4gaW5wdXRWYWx1ZTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTY3JvbGwgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzRG9jdW1lbnRFbGVtZW50KGVsKSB7XG4gIHJldHVybiBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5LCB3aW5kb3ddLmluZGV4T2YoZWwpID4gLTE7XG59IC8vIE5vcm1hbGl6ZWQgU2Nyb2xsIFRvcFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcChlbCkge1xuICBpZiAoaXNEb2N1bWVudEVsZW1lbnQoZWwpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgfVxuXG4gIHJldHVybiBlbC5zY3JvbGxUb3A7XG59XG5mdW5jdGlvbiBzY3JvbGxUbyhlbCwgdG9wKSB7XG4gIC8vIHdpdGggYSBzY3JvbGwgZGlzdGFuY2UsIHdlIHBlcmZvcm0gc2Nyb2xsIG9uIHRoZSBlbGVtZW50XG4gIGlmIChpc0RvY3VtZW50RWxlbWVudChlbCkpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgdG9wKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbC5zY3JvbGxUb3AgPSB0b3A7XG59IC8vIEdldCBTY3JvbGwgUGFyZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgdmFyIGV4Y2x1ZGVTdGF0aWNQYXJlbnQgPSBzdHlsZS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJztcbiAgdmFyIG92ZXJmbG93UnggPSAvKGF1dG98c2Nyb2xsKS87XG4gIHZhciBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgLy8gc3VjayBpdCwgZmxvdy4uLlxuXG4gIGlmIChzdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykgcmV0dXJuIGRvY0VsO1xuXG4gIGZvciAodmFyIHBhcmVudCA9IGVsZW1lbnQ7IHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50Oykge1xuICAgIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpO1xuXG4gICAgaWYgKGV4Y2x1ZGVTdGF0aWNQYXJlbnQgJiYgc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3dSeC50ZXN0KHN0eWxlLm92ZXJmbG93ICsgc3R5bGUub3ZlcmZsb3dZICsgc3R5bGUub3ZlcmZsb3dYKSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9jRWw7XG59IC8vIEFuaW1hdGVkIFNjcm9sbCBUb1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICBAcGFyYW0gdDogdGltZSAoZWxhcHNlZClcbiAgQHBhcmFtIGI6IGluaXRpYWwgdmFsdWVcbiAgQHBhcmFtIGM6IGFtb3VudCBvZiBjaGFuZ2VcbiAgQHBhcmFtIGQ6IGR1cmF0aW9uXG4qL1xuXG5mdW5jdGlvbiBlYXNlT3V0Q3ViaWModCwgYiwgYywgZCkge1xuICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZWRTY3JvbGxUbyhlbGVtZW50LCB0bykge1xuICB2YXIgZHVyYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IDIwMDtcbiAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBub29wO1xuICB2YXIgc3RhcnQgPSBnZXRTY3JvbGxUb3AoZWxlbWVudCk7XG4gIHZhciBjaGFuZ2UgPSB0byAtIHN0YXJ0O1xuICB2YXIgaW5jcmVtZW50ID0gMTA7XG4gIHZhciBjdXJyZW50VGltZSA9IDA7XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZVNjcm9sbCgpIHtcbiAgICBjdXJyZW50VGltZSArPSBpbmNyZW1lbnQ7XG4gICAgdmFyIHZhbCA9IGVhc2VPdXRDdWJpYyhjdXJyZW50VGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pO1xuICAgIHNjcm9sbFRvKGVsZW1lbnQsIHZhbCk7XG5cbiAgICBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZVNjcm9sbCgpO1xufSAvLyBTY3JvbGwgSW50byBWaWV3XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcobWVudUVsLCBmb2N1c2VkRWwpIHtcbiAgdmFyIG1lbnVSZWN0ID0gbWVudUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgZm9jdXNlZFJlY3QgPSBmb2N1c2VkRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBvdmVyU2Nyb2xsID0gZm9jdXNlZEVsLm9mZnNldEhlaWdodCAvIDM7XG5cbiAgaWYgKGZvY3VzZWRSZWN0LmJvdHRvbSArIG92ZXJTY3JvbGwgPiBtZW51UmVjdC5ib3R0b20pIHtcbiAgICBzY3JvbGxUbyhtZW51RWwsIE1hdGgubWluKGZvY3VzZWRFbC5vZmZzZXRUb3AgKyBmb2N1c2VkRWwuY2xpZW50SGVpZ2h0IC0gbWVudUVsLm9mZnNldEhlaWdodCArIG92ZXJTY3JvbGwsIG1lbnVFbC5zY3JvbGxIZWlnaHQpKTtcbiAgfSBlbHNlIGlmIChmb2N1c2VkUmVjdC50b3AgLSBvdmVyU2Nyb2xsIDwgbWVudVJlY3QudG9wKSB7XG4gICAgc2Nyb2xsVG8obWVudUVsLCBNYXRoLm1heChmb2N1c2VkRWwub2Zmc2V0VG9wIC0gb3ZlclNjcm9sbCwgMCkpO1xuICB9XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2V0IGJvdW5kaW5nIGNsaWVudCBvYmplY3Rcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gY2Fubm90IGdldCBrZXlzIHVzaW5nIGFycmF5IG5vdGF0aW9uIHdpdGggRE9NUmVjdFxuXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudE9iaihlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGhcbiAgfTtcbn1cbi8vIFRvdWNoIENhcGFiaWxpdHkgRGV0ZWN0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBpc1RvdWNoQ2FwYWJsZSgpIHtcbiAgdHJ5IHtcbiAgICBkb2N1bWVudC5jcmVhdGVFdmVudCgnVG91Y2hFdmVudCcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTW9iaWxlIERldmljZSBEZXRlY3RvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCkge1xuICB0cnkge1xuICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQYXNzaXZlIEV2ZW50IERldGVjdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWZncmFwaC9kZXRlY3QtaXQvYmxvYi9tYWluL3NyYy9pbmRleC50cyNMMTktTDM2XG5cbnZhciBwYXNzaXZlT3B0aW9uQWNjZXNzZWQgPSBmYWxzZTtcbnZhciBvcHRpb25zID0ge1xuICBnZXQgcGFzc2l2ZSgpIHtcbiAgICByZXR1cm4gcGFzc2l2ZU9wdGlvbkFjY2Vzc2VkID0gdHJ1ZTtcbiAgfVxuXG59OyAvLyBjaGVjayBmb3IgU1NSXG5cbnZhciB3ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcblxuaWYgKHcuYWRkRXZlbnRMaXN0ZW5lciAmJiB3LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgdy5hZGRFdmVudExpc3RlbmVyKCdwJywgbm9vcCwgb3B0aW9ucyk7XG4gIHcucmVtb3ZlRXZlbnRMaXN0ZW5lcigncCcsIG5vb3AsIGZhbHNlKTtcbn1cblxudmFyIHN1cHBvcnRzUGFzc2l2ZUV2ZW50cyA9IHBhc3NpdmVPcHRpb25BY2Nlc3NlZDtcblxuZnVuY3Rpb24gZ2V0TWVudVBsYWNlbWVudChfcmVmKSB7XG4gIHZhciBtYXhIZWlnaHQgPSBfcmVmLm1heEhlaWdodCxcbiAgICAgIG1lbnVFbCA9IF9yZWYubWVudUVsLFxuICAgICAgbWluSGVpZ2h0ID0gX3JlZi5taW5IZWlnaHQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudCxcbiAgICAgIHNob3VsZFNjcm9sbCA9IF9yZWYuc2hvdWxkU2Nyb2xsLFxuICAgICAgaXNGaXhlZFBvc2l0aW9uID0gX3JlZi5pc0ZpeGVkUG9zaXRpb24sXG4gICAgICB0aGVtZSA9IF9yZWYudGhlbWU7XG4gIHZhciBzcGFjaW5nID0gdGhlbWUuc3BhY2luZztcbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChtZW51RWwpO1xuICB2YXIgZGVmYXVsdFN0YXRlID0ge1xuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgfTsgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmcsIHJldHVybiBkZWZhdWx0IHN0YXRlXG5cbiAgaWYgKCFtZW51RWwgfHwgIW1lbnVFbC5vZmZzZXRQYXJlbnQpIHJldHVybiBkZWZhdWx0U3RhdGU7IC8vIHdlIGNhbid0IHRydXN0IGBzY3JvbGxQYXJlbnQuc2Nyb2xsSGVpZ2h0YCAtLT4gaXQgbWF5IGluY3JlYXNlIHdoZW5cbiAgLy8gdGhlIG1lbnUgaXMgcmVuZGVyZWRcblxuICB2YXIgX3Njcm9sbFBhcmVudCRnZXRCb3VuID0gc2Nyb2xsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3Njcm9sbFBhcmVudCRnZXRCb3VuLmhlaWdodDtcblxuICB2YXIgX21lbnVFbCRnZXRCb3VuZGluZ0NsID0gbWVudUVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgbWVudUJvdHRvbSA9IF9tZW51RWwkZ2V0Qm91bmRpbmdDbC5ib3R0b20sXG4gICAgICBtZW51SGVpZ2h0ID0gX21lbnVFbCRnZXRCb3VuZGluZ0NsLmhlaWdodCxcbiAgICAgIG1lbnVUb3AgPSBfbWVudUVsJGdldEJvdW5kaW5nQ2wudG9wO1xuXG4gIHZhciBfbWVudUVsJG9mZnNldFBhcmVudCQgPSBtZW51RWwub2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY29udGFpbmVyVG9wID0gX21lbnVFbCRvZmZzZXRQYXJlbnQkLnRvcDtcblxuICB2YXIgdmlld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIHNjcm9sbFRvcCA9IGdldFNjcm9sbFRvcChzY3JvbGxQYXJlbnQpO1xuICB2YXIgbWFyZ2luQm90dG9tID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpbkJvdHRvbSwgMTApO1xuICB2YXIgbWFyZ2luVG9wID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZW51RWwpLm1hcmdpblRvcCwgMTApO1xuICB2YXIgdmlld1NwYWNlQWJvdmUgPSBjb250YWluZXJUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciB2aWV3U3BhY2VCZWxvdyA9IHZpZXdIZWlnaHQgLSBtZW51VG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VBYm92ZSA9IHZpZXdTcGFjZUFib3ZlICsgc2Nyb2xsVG9wO1xuICB2YXIgc2Nyb2xsU3BhY2VCZWxvdyA9IHNjcm9sbEhlaWdodCAtIHNjcm9sbFRvcCAtIG1lbnVUb3A7XG4gIHZhciBzY3JvbGxEb3duID0gbWVudUJvdHRvbSAtIHZpZXdIZWlnaHQgKyBzY3JvbGxUb3AgKyBtYXJnaW5Cb3R0b207XG4gIHZhciBzY3JvbGxVcCA9IHNjcm9sbFRvcCArIG1lbnVUb3AgLSBtYXJnaW5Ub3A7XG4gIHZhciBzY3JvbGxEdXJhdGlvbiA9IDE2MDtcblxuICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgIGNhc2UgJ2F1dG8nOlxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAvLyAxOiB0aGUgbWVudSB3aWxsIGZpdCwgZG8gbm90aGluZ1xuICAgICAgaWYgKHZpZXdTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDI6IHRoZSBtZW51IHdpbGwgZml0LCBpZiBzY3JvbGxlZFxuXG5cbiAgICAgIGlmIChzY3JvbGxTcGFjZUJlbG93ID49IG1lbnVIZWlnaHQgJiYgIWlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICBpZiAoc2hvdWxkU2Nyb2xsKSB7XG4gICAgICAgICAgYW5pbWF0ZWRTY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24sIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcblxuXG4gICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUJlbG93ID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQmVsb3cgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsRG93biwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9IC8vIHdlIHdhbnQgdG8gcHJvdmlkZSBhcyBtdWNoIG9mIHRoZSBtZW51IGFzIHBvc3NpYmxlIHRvIHRoZSB1c2VyLFxuICAgICAgICAvLyBzbyBnaXZlIHRoZW0gd2hhdGV2ZXIgaXMgYXZhaWxhYmxlIGJlbG93IHJhdGhlciB0aGFuIHRoZSBtaW5IZWlnaHQuXG5cblxuICAgICAgICB2YXIgY29uc3RyYWluZWRIZWlnaHQgPSBpc0ZpeGVkUG9zaXRpb24gPyB2aWV3U3BhY2VCZWxvdyAtIG1hcmdpbkJvdHRvbSA6IHNjcm9sbFNwYWNlQmVsb3cgLSBtYXJnaW5Cb3R0b207XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IGNvbnN0cmFpbmVkSGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9IC8vIDQuIEZvcmtlZCBiZXZpb3VyIHdoZW4gdGhlcmUgaXNuJ3QgZW5vdWdoIHNwYWNlIGJlbG93XG4gICAgICAvLyBBVVRPOiBmbGlwIHRoZSBtZW51LCByZW5kZXIgYWJvdmVcblxuXG4gICAgICBpZiAocGxhY2VtZW50ID09PSAnYXV0bycgfHwgaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIG1heSBuZWVkIHRvIGJlIGNvbnN0cmFpbmVkIGFmdGVyIGZsaXBwaW5nXG4gICAgICAgIHZhciBfY29uc3RyYWluZWRIZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIHZhciBzcGFjZUFib3ZlID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQWJvdmUgOiBzY3JvbGxTcGFjZUFib3ZlO1xuXG4gICAgICAgIGlmIChzcGFjZUFib3ZlID49IG1pbkhlaWdodCkge1xuICAgICAgICAgIF9jb25zdHJhaW5lZEhlaWdodCA9IE1hdGgubWluKHNwYWNlQWJvdmUgLSBtYXJnaW5Cb3R0b20gLSBzcGFjaW5nLmNvbnRyb2xIZWlnaHQsIG1heEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBfY29uc3RyYWluZWRIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gQk9UVE9NOiBhbGxvdyBicm93c2VyIHRvIGluY3JlYXNlIHNjcm9sbGFibGUgYXJlYSBhbmQgaW1tZWRpYXRlbHkgc2V0IHNjcm9sbFxuXG5cbiAgICAgIGlmIChwbGFjZW1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBzY3JvbGxUbyhzY3JvbGxQYXJlbnQsIHNjcm9sbERvd24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndG9wJzpcbiAgICAgIC8vIDE6IHRoZSBtZW51IHdpbGwgZml0LCBkbyBub3RoaW5nXG4gICAgICBpZiAodmlld1NwYWNlQWJvdmUgPj0gbWVudUhlaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH0gLy8gMjogdGhlIG1lbnUgd2lsbCBmaXQsIGlmIHNjcm9sbGVkXG5cblxuICAgICAgaWYgKHNjcm9sbFNwYWNlQWJvdmUgPj0gbWVudUhlaWdodCAmJiAhaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIGlmIChzaG91bGRTY3JvbGwpIHtcbiAgICAgICAgICBhbmltYXRlZFNjcm9sbFRvKHNjcm9sbFBhcmVudCwgc2Nyb2xsVXAsIHNjcm9sbER1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodFxuICAgICAgICB9O1xuICAgICAgfSAvLyAzOiB0aGUgbWVudSB3aWxsIGZpdCwgaWYgY29uc3RyYWluZWRcblxuXG4gICAgICBpZiAoIWlzRml4ZWRQb3NpdGlvbiAmJiBzY3JvbGxTcGFjZUFib3ZlID49IG1pbkhlaWdodCB8fCBpc0ZpeGVkUG9zaXRpb24gJiYgdmlld1NwYWNlQWJvdmUgPj0gbWluSGVpZ2h0KSB7XG4gICAgICAgIHZhciBfY29uc3RyYWluZWRIZWlnaHQyID0gbWF4SGVpZ2h0OyAvLyB3ZSB3YW50IHRvIHByb3ZpZGUgYXMgbXVjaCBvZiB0aGUgbWVudSBhcyBwb3NzaWJsZSB0byB0aGUgdXNlcixcbiAgICAgICAgLy8gc28gZ2l2ZSB0aGVtIHdoYXRldmVyIGlzIGF2YWlsYWJsZSBiZWxvdyByYXRoZXIgdGhhbiB0aGUgbWluSGVpZ2h0LlxuXG4gICAgICAgIGlmICghaXNGaXhlZFBvc2l0aW9uICYmIHNjcm9sbFNwYWNlQWJvdmUgPj0gbWluSGVpZ2h0IHx8IGlzRml4ZWRQb3NpdGlvbiAmJiB2aWV3U3BhY2VBYm92ZSA+PSBtaW5IZWlnaHQpIHtcbiAgICAgICAgICBfY29uc3RyYWluZWRIZWlnaHQyID0gaXNGaXhlZFBvc2l0aW9uID8gdmlld1NwYWNlQWJvdmUgLSBtYXJnaW5Ub3AgOiBzY3JvbGxTcGFjZUFib3ZlIC0gbWFyZ2luVG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3VsZFNjcm9sbCkge1xuICAgICAgICAgIGFuaW1hdGVkU2Nyb2xsVG8oc2Nyb2xsUGFyZW50LCBzY3JvbGxVcCwgc2Nyb2xsRHVyYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgIG1heEhlaWdodDogX2NvbnN0cmFpbmVkSGVpZ2h0MlxuICAgICAgICB9O1xuICAgICAgfSAvLyA0LiBub3QgZW5vdWdoIHNwYWNlLCB0aGUgYnJvd3NlciBXSUxMIE5PVCBpbmNyZWFzZSBzY3JvbGxhYmxlIGFyZWEgd2hlblxuICAgICAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkIGVsZW1lbnQgcmVuZGVyZWQgYWJvdmUgdGhlIHZpZXdwb3J0IChvbmx5IGJlbG93KS5cbiAgICAgIC8vIEZsaXAgdGhlIG1lbnUsIHJlbmRlciBiZWxvd1xuXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0XG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcGxhY2VtZW50IHByb3ZpZGVkIFxcXCJcIi5jb25jYXQocGxhY2VtZW50LCBcIlxcXCIuXCIpKTtcbiAgfSAvLyBmdWxmaWwgY29udHJhY3Qgd2l0aCBmbG93OiBpbXBsaWNpdCByZXR1cm4gdmFsdWUgb2YgdW5kZWZpbmVkXG5cblxuICByZXR1cm4gZGVmYXVsdFN0YXRlO1xufSAvLyBNZW51IENvbXBvbmVudFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGFsaWduVG9Db250cm9sKHBsYWNlbWVudCkge1xuICB2YXIgcGxhY2VtZW50VG9DU1NQcm9wID0ge1xuICAgIGJvdHRvbTogJ3RvcCcsXG4gICAgdG9wOiAnYm90dG9tJ1xuICB9O1xuICByZXR1cm4gcGxhY2VtZW50ID8gcGxhY2VtZW50VG9DU1NQcm9wW3BsYWNlbWVudF0gOiAnYm90dG9tJztcbn1cblxudmFyIGNvZXJjZVBsYWNlbWVudCA9IGZ1bmN0aW9uIGNvZXJjZVBsYWNlbWVudChwKSB7XG4gIHJldHVybiBwID09PSAnYXV0bycgPyAnYm90dG9tJyA6IHA7XG59O1xuXG52YXIgbWVudUNTUyA9IGZ1bmN0aW9uIG1lbnVDU1MoX3JlZjIpIHtcbiAgdmFyIF9yZWYzO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjIkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgc3BhY2luZyA9IF9yZWYyJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmMiR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiBfcmVmMyA9IHtcbiAgICBsYWJlbDogJ21lbnUnXG4gIH0sIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBhbGlnblRvQ29udHJvbChwbGFjZW1lbnQpLCAnMTAwJScpLCBfZGVmaW5lUHJvcGVydHkkMShfcmVmMywgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgY29sb3JzLm5ldXRyYWwwKSwgX2RlZmluZVByb3BlcnR5JDEoX3JlZjMsIFwiYm9yZGVyUmFkaXVzXCIsIGJvcmRlclJhZGl1cyksIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBcImJveFNoYWRvd1wiLCAnMCAwIDAgMXB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpLCAwIDRweCAxMXB4IGhzbGEoMCwgMCUsIDAlLCAwLjEpJyksIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBcIm1hcmdpbkJvdHRvbVwiLCBzcGFjaW5nLm1lbnVHdXR0ZXIpLCBfZGVmaW5lUHJvcGVydHkkMShfcmVmMywgXCJtYXJnaW5Ub3BcIiwgc3BhY2luZy5tZW51R3V0dGVyKSwgX2RlZmluZVByb3BlcnR5JDEoX3JlZjMsIFwicG9zaXRpb25cIiwgJ2Fic29sdXRlJyksIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBcIndpZHRoXCIsICcxMDAlJyksIF9kZWZpbmVQcm9wZXJ0eSQxKF9yZWYzLCBcInpJbmRleFwiLCAxKSwgX3JlZjM7XG59O1xudmFyIFBvcnRhbFBsYWNlbWVudENvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dCh7XG4gIGdldFBvcnRhbFBsYWNlbWVudDogbnVsbFxufSk7IC8vIE5PVEU6IGludGVybmFsIG9ubHlcblxudmFyIE1lbnVQbGFjZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE1lbnVQbGFjZXIsIF9Db21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoTWVudVBsYWNlcik7XG5cbiAgZnVuY3Rpb24gTWVudVBsYWNlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWVudVBsYWNlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgbWF4SGVpZ2h0OiBfdGhpcy5wcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgICAgcGxhY2VtZW50OiBudWxsXG4gICAgfTtcblxuICAgIF90aGlzLmdldFBsYWNlbWVudCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG1pbk1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wcy5taW5NZW51SGVpZ2h0LFxuICAgICAgICAgIG1heE1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wcy5tYXhNZW51SGVpZ2h0LFxuICAgICAgICAgIG1lbnVQbGFjZW1lbnQgPSBfdGhpcyRwcm9wcy5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIG1lbnVQb3NpdGlvbiA9IF90aGlzJHByb3BzLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgPSBfdGhpcyRwcm9wcy5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZTtcbiAgICAgIGlmICghcmVmKSByZXR1cm47IC8vIERPIE5PVCBzY3JvbGwgaWYgcG9zaXRpb24gaXMgZml4ZWRcblxuICAgICAgdmFyIGlzRml4ZWRQb3NpdGlvbiA9IG1lbnVQb3NpdGlvbiA9PT0gJ2ZpeGVkJztcbiAgICAgIHZhciBzaG91bGRTY3JvbGwgPSBtZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcgJiYgIWlzRml4ZWRQb3NpdGlvbjtcbiAgICAgIHZhciBzdGF0ZSA9IGdldE1lbnVQbGFjZW1lbnQoe1xuICAgICAgICBtYXhIZWlnaHQ6IG1heE1lbnVIZWlnaHQsXG4gICAgICAgIG1lbnVFbDogcmVmLFxuICAgICAgICBtaW5IZWlnaHQ6IG1pbk1lbnVIZWlnaHQsXG4gICAgICAgIHBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgICAgc2hvdWxkU2Nyb2xsOiBzaG91bGRTY3JvbGwsXG4gICAgICAgIGlzRml4ZWRQb3NpdGlvbjogaXNGaXhlZFBvc2l0aW9uLFxuICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgIH0pO1xuICAgICAgdmFyIGdldFBvcnRhbFBsYWNlbWVudCA9IF90aGlzLmNvbnRleHQuZ2V0UG9ydGFsUGxhY2VtZW50O1xuICAgICAgaWYgKGdldFBvcnRhbFBsYWNlbWVudCkgZ2V0UG9ydGFsUGxhY2VtZW50KHN0YXRlKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRVcGRhdGVkUHJvcHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbWVudVBsYWNlbWVudCA9IF90aGlzLnByb3BzLm1lbnVQbGFjZW1lbnQ7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3RoaXMuc3RhdGUucGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgX3RoaXMucHJvcHMpLCB7fSwge1xuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgbWF4SGVpZ2h0OiBfdGhpcy5zdGF0ZS5tYXhIZWlnaHRcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTWVudVBsYWNlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgICByZWY6IHRoaXMuZ2V0UGxhY2VtZW50LFxuICAgICAgICBwbGFjZXJQcm9wczogdGhpcy5nZXRVcGRhdGVkUHJvcHMoKVxuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE1lbnVQbGFjZXI7XG59KENvbXBvbmVudCk7XG5NZW51UGxhY2VyLmNvbnRleHRUeXBlID0gUG9ydGFsUGxhY2VtZW50Q29udGV4dDtcblxudmFyIE1lbnUgPSBmdW5jdGlvbiBNZW51KHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ21lbnUnLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBtZW51OiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuLy8gTWVudSBMaXN0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIG1lbnVMaXN0Q1NTID0gZnVuY3Rpb24gbWVudUxpc3RDU1MoX3JlZjQpIHtcbiAgdmFyIG1heEhlaWdodCA9IF9yZWY0Lm1heEhlaWdodCxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjQudGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIHtcbiAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBwYWRkaW5nQm90dG9tOiBiYXNlVW5pdCxcbiAgICBwYWRkaW5nVG9wOiBiYXNlVW5pdCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyByZXF1aXJlZCBmb3Igb2Zmc2V0W0hlaWdodCwgVG9wXSA+IGtleWJvYXJkIHNjcm9sbFxuICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnXG4gIH07XG59O1xudmFyIE1lbnVMaXN0ID0gZnVuY3Rpb24gTWVudUxpc3QocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGk7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdtZW51TGlzdCcsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LWxpc3QnOiB0cnVlLFxuICAgICAgJ21lbnUtbGlzdC0taXMtbXVsdGknOiBpc011bHRpXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgTm90aWNlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBub3RpY2VDU1MgPSBmdW5jdGlvbiBub3RpY2VDU1MoX3JlZjUpIHtcbiAgdmFyIF9yZWY1JHRoZW1lID0gX3JlZjUudGhlbWUsXG4gICAgICBiYXNlVW5pdCA9IF9yZWY1JHRoZW1lLnNwYWNpbmcuYmFzZVVuaXQsXG4gICAgICBjb2xvcnMgPSBfcmVmNSR0aGVtZS5jb2xvcnM7XG4gIHJldHVybiB7XG4gICAgY29sb3I6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgcGFkZGluZzogXCJcIi5jb25jYXQoYmFzZVVuaXQgKiAyLCBcInB4IFwiKS5jb25jYXQoYmFzZVVuaXQgKiAzLCBcInB4XCIpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfTtcbn07XG5cbnZhciBub09wdGlvbnNNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIGxvYWRpbmdNZXNzYWdlQ1NTID0gbm90aWNlQ1NTO1xudmFyIE5vT3B0aW9uc01lc3NhZ2UgPSBmdW5jdGlvbiBOb09wdGlvbnNNZXNzYWdlKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnbm9PcHRpb25zTWVzc2FnZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LW5vdGljZSc6IHRydWUsXG4gICAgICAnbWVudS1ub3RpY2UtLW5vLW9wdGlvbnMnOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbk5vT3B0aW9uc01lc3NhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogJ05vIG9wdGlvbnMnXG59O1xudmFyIExvYWRpbmdNZXNzYWdlID0gZnVuY3Rpb24gTG9hZGluZ01lc3NhZ2UocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdsb2FkaW5nTWVzc2FnZScsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdtZW51LW5vdGljZSc6IHRydWUsXG4gICAgICAnbWVudS1ub3RpY2UtLWxvYWRpbmcnOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcbkxvYWRpbmdNZXNzYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46ICdMb2FkaW5nLi4uJ1xufTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNZW51IFBvcnRhbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciBtZW51UG9ydGFsQ1NTID0gZnVuY3Rpb24gbWVudVBvcnRhbENTUyhfcmVmNikge1xuICB2YXIgcmVjdCA9IF9yZWY2LnJlY3QsXG4gICAgICBvZmZzZXQgPSBfcmVmNi5vZmZzZXQsXG4gICAgICBwb3NpdGlvbiA9IF9yZWY2LnBvc2l0aW9uO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgdG9wOiBvZmZzZXQsXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgekluZGV4OiAxXG4gIH07XG59O1xudmFyIE1lbnVQb3J0YWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhNZW51UG9ydGFsLCBfQ29tcG9uZW50Mik7XG5cbiAgdmFyIF9zdXBlcjIgPSBfY3JlYXRlU3VwZXIoTWVudVBvcnRhbCk7XG5cbiAgZnVuY3Rpb24gTWVudVBvcnRhbCgpIHtcbiAgICB2YXIgX3RoaXMyO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1lbnVQb3J0YWwpO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgX3RoaXMyID0gX3N1cGVyMi5jYWxsLmFwcGx5KF9zdXBlcjIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgIF90aGlzMi5zdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogbnVsbFxuICAgIH07XG5cbiAgICBfdGhpczIuZ2V0UG9ydGFsUGxhY2VtZW50ID0gZnVuY3Rpb24gKF9yZWY3KSB7XG4gICAgICB2YXIgcGxhY2VtZW50ID0gX3JlZjcucGxhY2VtZW50O1xuICAgICAgdmFyIGluaXRpYWxQbGFjZW1lbnQgPSBjb2VyY2VQbGFjZW1lbnQoX3RoaXMyLnByb3BzLm1lbnVQbGFjZW1lbnQpOyAvLyBhdm9pZCByZS1yZW5kZXJzIGlmIHRoZSBwbGFjZW1lbnQgaGFzIG5vdCBjaGFuZ2VkXG5cbiAgICAgIGlmIChwbGFjZW1lbnQgIT09IGluaXRpYWxQbGFjZW1lbnQpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNZW51UG9ydGFsLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYXBwZW5kVG8gPSBfdGhpcyRwcm9wczIuYXBwZW5kVG8sXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBjb250cm9sRWxlbWVudCA9IF90aGlzJHByb3BzMi5jb250cm9sRWxlbWVudCxcbiAgICAgICAgICBjeCA9IF90aGlzJHByb3BzMi5jeCxcbiAgICAgICAgICBpbm5lclByb3BzID0gX3RoaXMkcHJvcHMyLmlubmVyUHJvcHMsXG4gICAgICAgICAgbWVudVBsYWNlbWVudCA9IF90aGlzJHByb3BzMi5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIHBvc2l0aW9uID0gX3RoaXMkcHJvcHMyLm1lbnVQb3NpdGlvbixcbiAgICAgICAgICBnZXRTdHlsZXMgPSBfdGhpcyRwcm9wczIuZ2V0U3R5bGVzO1xuICAgICAgdmFyIGlzRml4ZWQgPSBwb3NpdGlvbiA9PT0gJ2ZpeGVkJzsgLy8gYmFpbCBlYXJseSBpZiByZXF1aXJlZCBlbGVtZW50cyBhcmVuJ3QgcHJlc2VudFxuXG4gICAgICBpZiAoIWFwcGVuZFRvICYmICFpc0ZpeGVkIHx8ICFjb250cm9sRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHBsYWNlbWVudCA9IHRoaXMuc3RhdGUucGxhY2VtZW50IHx8IGNvZXJjZVBsYWNlbWVudChtZW51UGxhY2VtZW50KTtcbiAgICAgIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRPYmooY29udHJvbEVsZW1lbnQpO1xuICAgICAgdmFyIHNjcm9sbERpc3RhbmNlID0gaXNGaXhlZCA/IDAgOiB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICB2YXIgb2Zmc2V0ID0gcmVjdFtwbGFjZW1lbnRdICsgc2Nyb2xsRGlzdGFuY2U7XG4gICAgICB2YXIgc3RhdGUgPSB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgIHJlY3Q6IHJlY3RcbiAgICAgIH07IC8vIHNhbWUgd3JhcHBlciBlbGVtZW50IHdoZXRoZXIgZml4ZWQgb3IgcG9ydGFsbGVkXG5cbiAgICAgIHZhciBtZW51V3JhcHBlciA9IGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIGNzczogZ2V0U3R5bGVzKCdtZW51UG9ydGFsJywgc3RhdGUpLFxuICAgICAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICAgICAnbWVudS1wb3J0YWwnOiB0cnVlXG4gICAgICAgIH0sIGNsYXNzTmFtZSlcbiAgICAgIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG4gICAgICByZXR1cm4ganN4KFBvcnRhbFBsYWNlbWVudENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBnZXRQb3J0YWxQbGFjZW1lbnQ6IHRoaXMuZ2V0UG9ydGFsUGxhY2VtZW50XG4gICAgICAgIH1cbiAgICAgIH0sIGFwcGVuZFRvID8gLyojX19QVVJFX18qL2NyZWF0ZVBvcnRhbChtZW51V3JhcHBlciwgYXBwZW5kVG8pIDogbWVudVdyYXBwZXIpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNZW51UG9ydGFsO1xufShDb21wb25lbnQpO1xuXG52YXIgY29udGFpbmVyQ1NTID0gZnVuY3Rpb24gY29udGFpbmVyQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc1J0bCA9IF9yZWYuaXNSdGw7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdjb250YWluZXInLFxuICAgIGRpcmVjdGlvbjogaXNSdGwgPyAncnRsJyA6IG51bGwsXG4gICAgcG9pbnRlckV2ZW50czogaXNEaXNhYmxlZCA/ICdub25lJyA6IG51bGwsXG4gICAgLy8gY2FuY2VsIG1vdXNlIGV2ZW50cyB3aGVuIGRpc2FibGVkXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfTtcbn07XG52YXIgU2VsZWN0Q29udGFpbmVyID0gZnVuY3Rpb24gU2VsZWN0Q29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpc1J0bCA9IHByb3BzLmlzUnRsO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnY29udGFpbmVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJy0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkLFxuICAgICAgJy0taXMtcnRsJzogaXNSdGxcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFZhbHVlIENvbnRhaW5lclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnZhciB2YWx1ZUNvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIHZhbHVlQ29udGFpbmVyQ1NTKF9yZWYyKSB7XG4gIHZhciBzcGFjaW5nID0gX3JlZjIudGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleDogMSxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgLyAyLCBcInB4IFwiKS5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDIsIFwicHhcIiksXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gIH07XG59O1xudmFyIFZhbHVlQ29udGFpbmVyID0gZnVuY3Rpb24gVmFsdWVDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc011bHRpID0gcHJvcHMuaXNNdWx0aSxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGhhc1ZhbHVlID0gcHJvcHMuaGFzVmFsdWU7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCd2YWx1ZUNvbnRhaW5lcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICd2YWx1ZS1jb250YWluZXInOiB0cnVlLFxuICAgICAgJ3ZhbHVlLWNvbnRhaW5lci0taXMtbXVsdGknOiBpc011bHRpLFxuICAgICAgJ3ZhbHVlLWNvbnRhaW5lci0taGFzLXZhbHVlJzogaGFzVmFsdWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEluZGljYXRvciBDb250YWluZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgaW5kaWNhdG9yc0NvbnRhaW5lckNTUyA9IGZ1bmN0aW9uIGluZGljYXRvcnNDb250YWluZXJDU1MoKSB7XG4gIHJldHVybiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYWxpZ25TZWxmOiAnc3RyZXRjaCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhTaHJpbms6IDBcbiAgfTtcbn07XG52YXIgSW5kaWNhdG9yc0NvbnRhaW5lciA9IGZ1bmN0aW9uIEluZGljYXRvcnNDb250YWluZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdpbmRpY2F0b3JzQ29udGFpbmVyJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgaW5kaWNhdG9yczogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuKTtcbn07XG5cbnZhciBfdGVtcGxhdGVPYmplY3Q7XG5cbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cblxudmFyIF9yZWYyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjhtbWtjZ1wiLFxuICBzdHlsZXM6IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7ZmlsbDpjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6MTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowXCJcbn0gOiB7XG4gIG5hbWU6IFwidGo1YmRlLVN2Z1wiLFxuICBzdHlsZXM6IFwiZGlzcGxheTppbmxpbmUtYmxvY2s7ZmlsbDpjdXJyZW50Q29sb3I7bGluZS1oZWlnaHQ6MTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDowO2xhYmVsOlN2ZztcIixcbiAgbWFwOiBcIi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltbHVaR2xqWVhSdmNuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCYTBKSklpd2labWxzWlNJNkltbHVaR2xqWVhSdmNuTXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkFabXh2ZDF4dUx5b3FJRUJxYzNnZ2FuTjRJQ292WEc1cGJYQnZjblFnZXlCMGVYQmxJRTV2WkdVZ2ZTQm1jbTl0SUNkeVpXRmpkQ2M3WEc1cGJYQnZjblFnZXlCcWMzZ3NJR3RsZVdaeVlXMWxjeUI5SUdaeWIyMGdKMEJsYlc5MGFXOXVMM0psWVdOMEp6dGNibHh1YVcxd2IzSjBJSFI1Y0dVZ2V5QkRiMjF0YjI1UWNtOXdjeXdnVkdobGJXVWdmU0JtY205dElDY3VMaTkwZVhCbGN5YzdYRzVjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1THk4Z1JISnZjR1J2ZDI0Z0ppQkRiR1ZoY2lCSlkyOXVjMXh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzVjYm1OdmJuTjBJRk4yWnlBOUlDaDdJSE5wZW1Vc0lDNHVMbkJ5YjNCeklIMDZJSHNnYzJsNlpUb2diblZ0WW1WeUlIMHBJRDArSUNoY2JpQWdQSE4yWjF4dUlDQWdJR2hsYVdkb2REMTdjMmw2WlgxY2JpQWdJQ0IzYVdSMGFEMTdjMmw2WlgxY2JpQWdJQ0IyYVdWM1FtOTRQVndpTUNBd0lESXdJREl3WENKY2JpQWdJQ0JoY21saExXaHBaR1JsYmoxY0luUnlkV1ZjSWx4dUlDQWdJR1p2WTNWellXSnNaVDFjSW1aaGJITmxYQ0pjYmlBZ0lDQmpjM005ZTN0Y2JpQWdJQ0FnSUdScGMzQnNZWGs2SUNkcGJteHBibVV0WW14dlkyc25MRnh1SUNBZ0lDQWdabWxzYkRvZ0oyTjFjbkpsYm5SRGIyeHZjaWNzWEc0Z0lDQWdJQ0JzYVc1bFNHVnBaMmgwT2lBeExGeHVJQ0FnSUNBZ2MzUnliMnRsT2lBblkzVnljbVZ1ZEVOdmJHOXlKeXhjYmlBZ0lDQWdJSE4wY205clpWZHBaSFJvT2lBd0xGeHVJQ0FnSUgxOVhHNGdJQ0FnZXk0dUxuQnliM0J6ZlZ4dUlDQXZQbHh1S1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUVOeWIzTnpTV052YmlBOUlDaHdjbTl3Y3pvZ1lXNTVLU0E5UGlBb1hHNGdJRHhUZG1jZ2MybDZaVDE3TWpCOUlIc3VMaTV3Y205d2MzMCtYRzRnSUNBZ1BIQmhkR2dnWkQxY0lrMHhOQzR6TkRnZ01UUXVPRFE1WXkwd0xqUTJPU0F3TGpRMk9TMHhMakl5T1NBd0xqUTJPUzB4TGpZNU55QXdiQzB5TGpZMU1TMHpMakF6TUMweUxqWTFNU0F6TGpBeU9XTXRNQzQwTmprZ01DNDBOamt0TVM0eU1qa2dNQzQwTmprdE1TNDJPVGNnTUMwd0xqUTJPUzB3TGpRMk9TMHdMalEyT1MweExqSXlPU0F3TFRFdU5qazNiREl1TnpVNExUTXVNVFV0TWk0M05Ua3RNeTR4TlRKakxUQXVORFk1TFRBdU5EWTVMVEF1TkRZNUxURXVNakk0SURBdE1TNDJPVGR6TVM0eU1qZ3RNQzQwTmprZ01TNDJPVGNnTUd3eUxqWTFNaUF6TGpBek1TQXlMalkxTVMwekxqQXpNV013TGpRMk9TMHdMalEyT1NBeExqSXlPQzB3TGpRMk9TQXhMalk1TnlBd2N6QXVORFk1SURFdU1qSTVJREFnTVM0Mk9UZHNMVEl1TnpVNElETXVNVFV5SURJdU56VTRJRE11TVRWak1DNDBOamtnTUM0ME5qa2dNQzQwTmprZ01TNHlNamtnTUNBeExqWTVPSHBjSWlBdlBseHVJQ0E4TDFOMlp6NWNiaWs3WEc1bGVIQnZjblFnWTI5dWMzUWdSRzkzYmtOb1pYWnliMjRnUFNBb2NISnZjSE02SUdGdWVTa2dQVDRnS0Z4dUlDQThVM1puSUhOcGVtVTllekl3ZlNCN0xpNHVjSEp2Y0hOOVBseHVJQ0FnSUR4d1lYUm9JR1E5WENKTk5DNDFNVFlnTnk0MU5EaGpNQzQwTXpZdE1DNDBORFlnTVM0d05ETXRNQzQwT0RFZ01TNDFOellnTUd3ekxqa3dPQ0F6TGpjME55QXpMamt3T0MwekxqYzBOMk13TGpVek15MHdMalE0TVNBeExqRTBNUzB3TGpRME5pQXhMalUzTkNBd0lEQXVORE0ySURBdU5EUTFJREF1TkRBNElERXVNVGszSURBZ01TNDJNVFV0TUM0ME1EWWdNQzQwTVRndE5DNDJPVFVnTkM0MU1ESXROQzQyT1RVZ05DNDFNREl0TUM0eU1UY2dNQzR5TWpNdE1DNDFNRElnTUM0ek16VXRNQzQzT0RjZ01DNHpNelZ6TFRBdU5UY3RNQzR4TVRJdE1DNDNPRGt0TUM0ek16VmpNQ0F3TFRRdU1qZzNMVFF1TURnMExUUXVOamsxTFRRdU5UQXljeTB3TGpRek5pMHhMakUzSURBdE1TNDJNVFY2WENJZ0x6NWNiaUFnUEM5VGRtYytYRzRwTzF4dVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JpOHZJRVJ5YjNCa2IzZHVJQ1lnUTJ4bFlYSWdRblYwZEc5dWMxeHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNWNibVY0Y0c5eWRDQjBlWEJsSUVsdVpHbGpZWFJ2Y2xCeWIzQnpJRDBnUTI5dGJXOXVVSEp2Y0hNZ0ppQjdYRzRnSUM4cUtpQlVhR1VnWTJocGJHUnlaVzRnZEc4Z1ltVWdjbVZ1WkdWeVpXUWdhVzV6YVdSbElIUm9aU0JwYm1ScFkyRjBiM0l1SUNvdlhHNGdJR05vYVd4a2NtVnVPaUJPYjJSbExGeHVJQ0F2S2lvZ1VISnZjSE1nZEdoaGRDQjNhV3hzSUdKbElIQmhjM05sWkNCdmJpQjBieUIwYUdVZ1kyaHBiR1J5Wlc0dUlDb3ZYRzRnSUdsdWJtVnlVSEp2Y0hNNklHRnVlU3hjYmlBZ0x5b3FJRlJvWlNCbWIyTjFjMlZrSUhOMFlYUmxJRzltSUhSb1pTQnpaV3hsWTNRdUlDb3ZYRzRnSUdselJtOWpkWE5sWkRvZ1ltOXZiR1ZoYml4Y2JpQWdMeW9xSUZkb1pYUm9aWElnZEdobElIUmxlSFFnYVhNZ2NtbG5hSFFnZEc4Z2JHVm1kQ0FxTDF4dUlDQnBjMUowYkRvZ1ltOXZiR1ZoYml4Y2JuMDdYRzVjYm1OdmJuTjBJR0poYzJWRFUxTWdQU0FvZTF4dUlDQnBjMFp2WTNWelpXUXNYRzRnSUhSb1pXMWxPaUI3WEc0Z0lDQWdjM0JoWTJsdVp6b2dleUJpWVhObFZXNXBkQ0I5TEZ4dUlDQWdJR052Ykc5eWN5eGNiaUFnZlN4Y2JuMDZJRWx1WkdsallYUnZjbEJ5YjNCektTQTlQaUFvZTF4dUlDQnNZV0psYkRvZ0oybHVaR2xqWVhSdmNrTnZiblJoYVc1bGNpY3NYRzRnSUdOdmJHOXlPaUJwYzBadlkzVnpaV1FnUHlCamIyeHZjbk11Ym1WMWRISmhiRFl3SURvZ1kyOXNiM0p6TG01bGRYUnlZV3d5TUN4Y2JpQWdaR2x6Y0d4aGVUb2dKMlpzWlhnbkxGeHVJQ0J3WVdSa2FXNW5PaUJpWVhObFZXNXBkQ0FxSURJc1hHNGdJSFJ5WVc1emFYUnBiMjQ2SUNkamIyeHZjaUF4TlRCdGN5Y3NYRzVjYmlBZ0p6cG9iM1psY2ljNklIdGNiaUFnSUNCamIyeHZjam9nYVhOR2IyTjFjMlZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3c0TUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTkRBc1hHNGdJSDBzWEc1OUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHUnliM0JrYjNkdVNXNWthV05oZEc5eVExTlRJRDBnWW1GelpVTlRVenRjYm1WNGNHOXlkQ0JqYjI1emRDQkVjbTl3Wkc5M2JrbHVaR2xqWVhSdmNpQTlJQ2h3Y205d2N6b2dTVzVrYVdOaGRHOXlVSEp2Y0hNcElEMCtJSHRjYmlBZ1kyOXVjM1FnZXlCamFHbHNaSEpsYml3Z1kyeGhjM05PWVcxbExDQmplQ3dnWjJWMFUzUjViR1Z6TENCcGJtNWxjbEJ5YjNCeklIMGdQU0J3Y205d2N6dGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0JqYzNNOWUyZGxkRk4wZVd4bGN5Z25aSEp2Y0dSdmQyNUpibVJwWTJGMGIzSW5MQ0J3Y205d2N5bDlYRzRnSUNBZ0lDQmpiR0Z6YzA1aGJXVTllMk40S0Z4dUlDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdhVzVrYVdOaGRHOXlPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ2RrY205d1pHOTNiaTFwYm1ScFkyRjBiM0luT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCamJHRnpjMDVoYldWY2JpQWdJQ0FnSUNsOVhHNGdJQ0FnSUNCN0xpNHVhVzV1WlhKUWNtOXdjMzFjYmlBZ0lDQStYRzRnSUNBZ0lDQjdZMmhwYkdSeVpXNGdmSHdnUEVSdmQyNURhR1YyY205dUlDOCtmVnh1SUNBZ0lEd3ZaR2wyUGx4dUlDQXBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOc1pXRnlTVzVrYVdOaGRHOXlRMU5USUQwZ1ltRnpaVU5UVXp0Y2JtVjRjRzl5ZENCamIyNXpkQ0JEYkdWaGNrbHVaR2xqWVhSdmNpQTlJQ2h3Y205d2N6b2dTVzVrYVdOaGRHOXlVSEp2Y0hNcElEMCtJSHRjYmlBZ1kyOXVjM1FnZXlCamFHbHNaSEpsYml3Z1kyeGhjM05PWVcxbExDQmplQ3dnWjJWMFUzUjViR1Z6TENCcGJtNWxjbEJ5YjNCeklIMGdQU0J3Y205d2N6dGNiaUFnY21WMGRYSnVJQ2hjYmlBZ0lDQThaR2wyWEc0Z0lDQWdJQ0JqYzNNOWUyZGxkRk4wZVd4bGN5Z25ZMnhsWVhKSmJtUnBZMkYwYjNJbkxDQndjbTl3Y3lsOVhHNGdJQ0FnSUNCamJHRnpjMDVoYldVOWUyTjRLRnh1SUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXNWthV05oZEc5eU9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDZGpiR1ZoY2kxcGJtUnBZMkYwYjNJbk9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVmNiaUFnSUNBZ0lDbDlYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0ErWEc0Z0lDQWdJQ0I3WTJocGJHUnlaVzRnZkh3Z1BFTnliM056U1dOdmJpQXZQbjFjYmlBZ0lDQThMMlJwZGo1Y2JpQWdLVHRjYm4wN1hHNWNiaTh2SUQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBWeHVMeThnVTJWd1lYSmhkRzl5WEc0dkx5QTlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dWRIbHdaU0JUWlhCaGNtRjBiM0pUZEdGMFpTQTlJSHNnYVhORWFYTmhZbXhsWkRvZ1ltOXZiR1ZoYmlCOU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FXNWthV05oZEc5eVUyVndZWEpoZEc5eVExTlRJRDBnS0h0Y2JpQWdhWE5FYVhOaFlteGxaQ3hjYmlBZ2RHaGxiV1U2SUh0Y2JpQWdJQ0J6Y0dGamFXNW5PaUI3SUdKaGMyVlZibWwwSUgwc1hHNGdJQ0FnWTI5c2IzSnpMRnh1SUNCOUxGeHVmVG9nUTI5dGJXOXVVSEp2Y0hNZ0ppQlRaWEJoY21GMGIzSlRkR0YwWlNrZ1BUNGdLSHRjYmlBZ2JHRmlaV3c2SUNkcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJbkxGeHVJQ0JoYkdsbmJsTmxiR1k2SUNkemRISmxkR05vSnl4Y2JpQWdZbUZqYTJkeWIzVnVaRU52Ykc5eU9pQnBjMFJwYzJGaWJHVmtJRDhnWTI5c2IzSnpMbTVsZFhSeVlXd3hNQ0E2SUdOdmJHOXljeTV1WlhWMGNtRnNNakFzWEc0Z0lHMWhjbWRwYmtKdmRIUnZiVG9nWW1GelpWVnVhWFFnS2lBeUxGeHVJQ0J0WVhKbmFXNVViM0E2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnZDJsa2RHZzZJREVzWEc1OUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElFbHVaR2xqWVhSdmNsTmxjR0Z5WVhSdmNpQTlJQ2h3Y205d2N6b2dTVzVrYVdOaGRHOXlVSEp2Y0hNcElEMCtJSHRjYmlBZ1kyOXVjM1FnZXlCamJHRnpjMDVoYldVc0lHTjRMQ0JuWlhSVGRIbHNaWE1zSUdsdWJtVnlVSEp2Y0hNZ2ZTQTlJSEJ5YjNCek8xeHVJQ0J5WlhSMWNtNGdLRnh1SUNBZ0lEeHpjR0Z1WEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBZ0lHTnpjejE3WjJWMFUzUjViR1Z6S0NkcGJtUnBZMkYwYjNKVFpYQmhjbUYwYjNJbkxDQndjbTl3Y3lsOVhHNGdJQ0FnSUNCamJHRnpjMDVoYldVOWUyTjRLSHNnSjJsdVpHbGpZWFJ2Y2kxelpYQmhjbUYwYjNJbk9pQjBjblZsSUgwc0lHTnNZWE56VG1GdFpTbDlYRzRnSUNBZ0x6NWNiaUFnS1R0Y2JuMDdYRzVjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1THk4Z1RHOWhaR2x1WjF4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc1Y2JtTnZibk4wSUd4dllXUnBibWRFYjNSQmJtbHRZWFJwYjI1eklEMGdhMlY1Wm5KaGJXVnpZRnh1SUNBd0pTd2dPREFsTENBeE1EQWxJSHNnYjNCaFkybDBlVG9nTURzZ2ZWeHVJQ0EwTUNVZ2V5QnZjR0ZqYVhSNU9pQXhPeUI5WEc1Z08xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2JHOWhaR2x1WjBsdVpHbGpZWFJ2Y2tOVFV5QTlJQ2g3WEc0Z0lHbHpSbTlqZFhObFpDeGNiaUFnYzJsNlpTeGNiaUFnZEdobGJXVTZJSHRjYmlBZ0lDQmpiMnh2Y25Nc1hHNGdJQ0FnYzNCaFkybHVaem9nZXlCaVlYTmxWVzVwZENCOUxGeHVJQ0I5TEZ4dWZUb2dlMXh1SUNCcGMwWnZZM1Z6WldRNklHSnZiMnhsWVc0c1hHNGdJSE5wZW1VNklHNTFiV0psY2l4Y2JpQWdkR2hsYldVNklGUm9aVzFsTEZ4dWZTa2dQVDRnS0h0Y2JpQWdiR0ZpWld3NklDZHNiMkZrYVc1blNXNWthV05oZEc5eUp5eGNiaUFnWTI5c2IzSTZJR2x6Um05amRYTmxaQ0EvSUdOdmJHOXljeTV1WlhWMGNtRnNOakFnT2lCamIyeHZjbk11Ym1WMWRISmhiREl3TEZ4dUlDQmthWE53YkdGNU9pQW5abXhsZUNjc1hHNGdJSEJoWkdScGJtYzZJR0poYzJWVmJtbDBJQ29nTWl4Y2JpQWdkSEpoYm5OcGRHbHZiam9nSjJOdmJHOXlJREUxTUcxekp5eGNiaUFnWVd4cFoyNVRaV3htT2lBblkyVnVkR1Z5Snl4Y2JpQWdabTl1ZEZOcGVtVTZJSE5wZW1Vc1hHNGdJR3hwYm1WSVpXbG5hSFE2SURFc1hHNGdJRzFoY21kcGJsSnBaMmgwT2lCemFYcGxMRnh1SUNCMFpYaDBRV3hwWjI0NklDZGpaVzUwWlhJbkxGeHVJQ0IyWlhKMGFXTmhiRUZzYVdkdU9pQW5iV2xrWkd4bEp5eGNibjBwTzF4dVhHNTBlWEJsSUVSdmRGQnliM0J6SUQwZ2V5QmtaV3hoZVRvZ2JuVnRZbVZ5TENCdlptWnpaWFE2SUdKdmIyeGxZVzRnZlR0Y2JtTnZibk4wSUV4dllXUnBibWRFYjNRZ1BTQW9leUJrWld4aGVTd2diMlptYzJWMElIMDZJRVJ2ZEZCeWIzQnpLU0E5UGlBb1hHNGdJRHh6Y0dGdVhHNGdJQ0FnWTNOelBYdDdYRzRnSUNBZ0lDQmhibWx0WVhScGIyNDZJR0FrZTJ4dllXUnBibWRFYjNSQmJtbHRZWFJwYjI1emZTQXhjeUJsWVhObExXbHVMVzkxZENBa2UyUmxiR0Y1ZlcxeklHbHVabWx1YVhSbE8yQXNYRzRnSUNBZ0lDQmlZV05yWjNKdmRXNWtRMjlzYjNJNklDZGpkWEp5Wlc1MFEyOXNiM0luTEZ4dUlDQWdJQ0FnWW05eVpHVnlVbUZrYVhWek9pQW5NV1Z0Snl4Y2JpQWdJQ0FnSUdScGMzQnNZWGs2SUNkcGJteHBibVV0WW14dlkyc25MRnh1SUNBZ0lDQWdiV0Z5WjJsdVRHVm1kRG9nYjJabWMyVjBJRDhnSnpGbGJTY2dPaUJ1ZFd4c0xGeHVJQ0FnSUNBZ2FHVnBaMmgwT2lBbk1XVnRKeXhjYmlBZ0lDQWdJSFpsY25ScFkyRnNRV3hwWjI0NklDZDBiM0FuTEZ4dUlDQWdJQ0FnZDJsa2RHZzZJQ2N4WlcwbkxGeHVJQ0FnSUgxOVhHNGdJQzgrWEc0cE8xeHVYRzVsZUhCdmNuUWdkSGx3WlNCTWIyRmthVzVuU1dOdmJsQnliM0J6SUQwZ2UxeHVJQ0F2S2lvZ1VISnZjSE1nZEdoaGRDQjNhV3hzSUdKbElIQmhjM05sWkNCdmJpQjBieUIwYUdVZ1kyaHBiR1J5Wlc0dUlDb3ZYRzRnSUdsdWJtVnlVSEp2Y0hNNklHRnVlU3hjYmlBZ0x5b3FJRlJvWlNCbWIyTjFjMlZrSUhOMFlYUmxJRzltSUhSb1pTQnpaV3hsWTNRdUlDb3ZYRzRnSUdselJtOWpkWE5sWkRvZ1ltOXZiR1ZoYml4Y2JpQWdMeW9xSUZkb1pYUm9aWElnZEdobElIUmxlSFFnYVhNZ2NtbG5hSFFnZEc4Z2JHVm1kQ0FxTDF4dUlDQnBjMUowYkRvZ1ltOXZiR1ZoYml4Y2JuMGdKaUJEYjIxdGIyNVFjbTl3Y3lBbUlIdGNiaUFnSUNBdktpb2dVMlYwSUhOcGVtVWdiMllnZEdobElHTnZiblJoYVc1bGNpNGdLaTljYmlBZ0lDQnphWHBsT2lCdWRXMWlaWElzWEc0Z0lIMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ1RHOWhaR2x1WjBsdVpHbGpZWFJ2Y2lBOUlDaHdjbTl3Y3pvZ1RHOWhaR2x1WjBsamIyNVFjbTl3Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0I3SUdOc1lYTnpUbUZ0WlN3Z1kzZ3NJR2RsZEZOMGVXeGxjeXdnYVc1dVpYSlFjbTl3Y3l3Z2FYTlNkR3dnZlNBOUlIQnliM0J6TzF4dVhHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdZM056UFh0blpYUlRkSGxzWlhNb0oyeHZZV1JwYm1kSmJtUnBZMkYwYjNJbkxDQndjbTl3Y3lsOVhHNGdJQ0FnSUNCamJHRnpjMDVoYldVOWUyTjRLRnh1SUNBZ0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXNWthV05oZEc5eU9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNBZ0lDZHNiMkZrYVc1bkxXbHVaR2xqWVhSdmNpYzZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJR05zWVhOelRtRnRaVnh1SUNBZ0lDQWdLWDFjYmlBZ0lDQWdJSHN1TGk1cGJtNWxjbEJ5YjNCemZWeHVJQ0FnSUQ1Y2JpQWdJQ0FnSUR4TWIyRmthVzVuUkc5MElHUmxiR0Y1UFhzd2ZTQnZabVp6WlhROWUybHpVblJzZlNBdlBseHVJQ0FnSUNBZ1BFeHZZV1JwYm1kRWIzUWdaR1ZzWVhrOWV6RTJNSDBnYjJabWMyVjBJQzgrWEc0Z0lDQWdJQ0E4VEc5aFpHbHVaMFJ2ZENCa1pXeGhlVDE3TXpJd2ZTQnZabVp6WlhROWV5RnBjMUowYkgwZ0x6NWNiaUFnSUNBOEwyUnBkajVjYmlBZ0tUdGNibjA3WEc1TWIyRmthVzVuU1c1a2FXTmhkRzl5TG1SbFptRjFiSFJRY205d2N5QTlJSHNnYzJsNlpUb2dOQ0I5TzF4dUlsMTkgKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIFN2ZyA9IGZ1bmN0aW9uIFN2ZyhfcmVmKSB7XG4gIHZhciBzaXplID0gX3JlZi5zaXplLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1wic2l6ZVwiXSk7XG5cbiAgcmV0dXJuIGpzeChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgaGVpZ2h0OiBzaXplLFxuICAgIHdpZHRoOiBzaXplLFxuICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICBmb2N1c2FibGU6IFwiZmFsc2VcIixcbiAgICBjc3M6IF9yZWYyXG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgQ3Jvc3NJY29uID0gZnVuY3Rpb24gQ3Jvc3NJY29uKHByb3BzKSB7XG4gIHJldHVybiBqc3goU3ZnLCBfZXh0ZW5kcyh7XG4gICAgc2l6ZTogMjBcbiAgfSwgcHJvcHMpLCBqc3goXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xNC4zNDggMTQuODQ5Yy0wLjQ2OSAwLjQ2OS0xLjIyOSAwLjQ2OS0xLjY5NyAwbC0yLjY1MS0zLjAzMC0yLjY1MSAzLjAyOWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMC0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOSAwLTEuNjk3bDIuNzU4LTMuMTUtMi43NTktMy4xNTJjLTAuNDY5LTAuNDY5LTAuNDY5LTEuMjI4IDAtMS42OTdzMS4yMjgtMC40NjkgMS42OTcgMGwyLjY1MiAzLjAzMSAyLjY1MS0zLjAzMWMwLjQ2OS0wLjQ2OSAxLjIyOC0wLjQ2OSAxLjY5NyAwczAuNDY5IDEuMjI5IDAgMS42OTdsLTIuNzU4IDMuMTUyIDIuNzU4IDMuMTVjMC40NjkgMC40NjkgMC40NjkgMS4yMjkgMCAxLjY5OHpcIlxuICB9KSk7XG59O1xudmFyIERvd25DaGV2cm9uID0gZnVuY3Rpb24gRG93bkNoZXZyb24ocHJvcHMpIHtcbiAgcmV0dXJuIGpzeChTdmcsIF9leHRlbmRzKHtcbiAgICBzaXplOiAyMFxuICB9LCBwcm9wcyksIGpzeChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQuNTE2IDcuNTQ4YzAuNDM2LTAuNDQ2IDEuMDQzLTAuNDgxIDEuNTc2IDBsMy45MDggMy43NDcgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwIDEuNjE1LTAuNDA2IDAuNDE4LTQuNjk1IDQuNTAyLTQuNjk1IDQuNTAyLTAuMjE3IDAuMjIzLTAuNTAyIDAuMzM1LTAuNzg3IDAuMzM1cy0wLjU3LTAuMTEyLTAuNzg5LTAuMzM1YzAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiXG4gIH0pKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRHJvcGRvd24gJiBDbGVhciBCdXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGJhc2VDU1MgPSBmdW5jdGlvbiBiYXNlQ1NTKF9yZWYzKSB7XG4gIHZhciBpc0ZvY3VzZWQgPSBfcmVmMy5pc0ZvY3VzZWQsXG4gICAgICBfcmVmMyR0aGVtZSA9IF9yZWYzLnRoZW1lLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgICAgY29sb3JzID0gX3JlZjMkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnaW5kaWNhdG9yQ29udGFpbmVyJyxcbiAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICB0cmFuc2l0aW9uOiAnY29sb3IgMTUwbXMnLFxuICAgICc6aG92ZXInOiB7XG4gICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDBcbiAgICB9XG4gIH07XG59O1xuXG52YXIgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xudmFyIERyb3Bkb3duSW5kaWNhdG9yID0gZnVuY3Rpb24gRHJvcGRvd25JbmRpY2F0b3IocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdkcm9wZG93bkluZGljYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICdkcm9wZG93bi1pbmRpY2F0b3InOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4gfHwganN4KERvd25DaGV2cm9uLCBudWxsKSk7XG59O1xudmFyIGNsZWFySW5kaWNhdG9yQ1NTID0gYmFzZUNTUztcbnZhciBDbGVhckluZGljYXRvciA9IGZ1bmN0aW9uIENsZWFySW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlubmVyUHJvcHMgPSBwcm9wcy5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnY2xlYXJJbmRpY2F0b3InLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAnY2xlYXItaW5kaWNhdG9yJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcyksIGNoaWxkcmVuIHx8IGpzeChDcm9zc0ljb24sIG51bGwpKTtcbn07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2VwYXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGluZGljYXRvclNlcGFyYXRvckNTUyA9IGZ1bmN0aW9uIGluZGljYXRvclNlcGFyYXRvckNTUyhfcmVmNCkge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWY0LmlzRGlzYWJsZWQsXG4gICAgICBfcmVmNCR0aGVtZSA9IF9yZWY0LnRoZW1lLFxuICAgICAgYmFzZVVuaXQgPSBfcmVmNCR0aGVtZS5zcGFjaW5nLmJhc2VVbml0LFxuICAgICAgY29sb3JzID0gX3JlZjQkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnaW5kaWNhdG9yU2VwYXJhdG9yJyxcbiAgICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRGlzYWJsZWQgPyBjb2xvcnMubmV1dHJhbDEwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBtYXJnaW5Cb3R0b206IGJhc2VVbml0ICogMixcbiAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICB3aWR0aDogMVxuICB9O1xufTtcbnZhciBJbmRpY2F0b3JTZXBhcmF0b3IgPSBmdW5jdGlvbiBJbmRpY2F0b3JTZXBhcmF0b3IocHJvcHMpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcInNwYW5cIiwgX2V4dGVuZHMoe30sIGlubmVyUHJvcHMsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnaW5kaWNhdG9yU2VwYXJhdG9yJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ2luZGljYXRvci1zZXBhcmF0b3InOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9KSk7XG59OyAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG52YXIgbG9hZGluZ0RvdEFuaW1hdGlvbnMgPSBrZXlmcmFtZXMoX3RlbXBsYXRlT2JqZWN0IHx8IChfdGVtcGxhdGVPYmplY3QgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKFtcIlxcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gIDQwJSB7IG9wYWNpdHk6IDE7IH1cXG5cIl0pKSk7XG52YXIgbG9hZGluZ0luZGljYXRvckNTUyA9IGZ1bmN0aW9uIGxvYWRpbmdJbmRpY2F0b3JDU1MoX3JlZjUpIHtcbiAgdmFyIGlzRm9jdXNlZCA9IF9yZWY1LmlzRm9jdXNlZCxcbiAgICAgIHNpemUgPSBfcmVmNS5zaXplLFxuICAgICAgX3JlZjUkdGhlbWUgPSBfcmVmNS50aGVtZSxcbiAgICAgIGNvbG9ycyA9IF9yZWY1JHRoZW1lLmNvbG9ycyxcbiAgICAgIGJhc2VVbml0ID0gX3JlZjUkdGhlbWUuc3BhY2luZy5iYXNlVW5pdDtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICAgIGNvbG9yOiBpc0ZvY3VzZWQgPyBjb2xvcnMubmV1dHJhbDYwIDogY29sb3JzLm5ldXRyYWwyMCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZzogYmFzZVVuaXQgKiAyLFxuICAgIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICBmb250U2l6ZTogc2l6ZSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIG1hcmdpblJpZ2h0OiBzaXplLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgfTtcbn07XG5cbnZhciBMb2FkaW5nRG90ID0gZnVuY3Rpb24gTG9hZGluZ0RvdChfcmVmNikge1xuICB2YXIgZGVsYXkgPSBfcmVmNi5kZWxheSxcbiAgICAgIG9mZnNldCA9IF9yZWY2Lm9mZnNldDtcbiAgcmV0dXJuIGpzeChcInNwYW5cIiwge1xuICAgIGNzczogLyojX19QVVJFX18qL2NzcyQyKHtcbiAgICAgIGFuaW1hdGlvbjogXCJcIi5jb25jYXQobG9hZGluZ0RvdEFuaW1hdGlvbnMsIFwiIDFzIGVhc2UtaW4tb3V0IFwiKS5jb25jYXQoZGVsYXksIFwibXMgaW5maW5pdGU7XCIpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzFlbScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG9mZnNldCA/ICcxZW0nIDogbnVsbCxcbiAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgIHdpZHRoOiAnMWVtJ1xuICAgIH0sIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiXCIgOiBcIjtsYWJlbDpMb2FkaW5nRG90O1wiLCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWx1WkdsallYUnZjbk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQmMweEpJaXdpWm1sc1pTSTZJbWx1WkdsallYUnZjbk11YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJBWm14dmQxeHVMeW9xSUVCcWMzZ2dhbk40SUNvdlhHNXBiWEJ2Y25RZ2V5QjBlWEJsSUU1dlpHVWdmU0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ2V5QnFjM2dzSUd0bGVXWnlZVzFsY3lCOUlHWnliMjBnSjBCbGJXOTBhVzl1TDNKbFlXTjBKenRjYmx4dWFXMXdiM0owSUhSNWNHVWdleUJEYjIxdGIyNVFjbTl3Y3l3Z1ZHaGxiV1VnZlNCbWNtOXRJQ2N1TGk5MGVYQmxjeWM3WEc1Y2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dUx5OGdSSEp2Y0dSdmQyNGdKaUJEYkdWaGNpQkpZMjl1YzF4dUx5OGdQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5WEc1Y2JtTnZibk4wSUZOMlp5QTlJQ2g3SUhOcGVtVXNJQzR1TG5CeWIzQnpJSDA2SUhzZ2MybDZaVG9nYm5WdFltVnlJSDBwSUQwK0lDaGNiaUFnUEhOMloxeHVJQ0FnSUdobGFXZG9kRDE3YzJsNlpYMWNiaUFnSUNCM2FXUjBhRDE3YzJsNlpYMWNiaUFnSUNCMmFXVjNRbTk0UFZ3aU1DQXdJREl3SURJd1hDSmNiaUFnSUNCaGNtbGhMV2hwWkdSbGJqMWNJblJ5ZFdWY0lseHVJQ0FnSUdadlkzVnpZV0pzWlQxY0ltWmhiSE5sWENKY2JpQWdJQ0JqYzNNOWUzdGNiaUFnSUNBZ0lHUnBjM0JzWVhrNklDZHBibXhwYm1VdFlteHZZMnNuTEZ4dUlDQWdJQ0FnWm1sc2JEb2dKMk4xY25KbGJuUkRiMnh2Y2ljc1hHNGdJQ0FnSUNCc2FXNWxTR1ZwWjJoME9pQXhMRnh1SUNBZ0lDQWdjM1J5YjJ0bE9pQW5ZM1Z5Y21WdWRFTnZiRzl5Snl4Y2JpQWdJQ0FnSUhOMGNtOXJaVmRwWkhSb09pQXdMRnh1SUNBZ0lIMTlYRzRnSUNBZ2V5NHVMbkJ5YjNCemZWeHVJQ0F2UGx4dUtUdGNibHh1Wlhod2IzSjBJR052Ym5OMElFTnliM056U1dOdmJpQTlJQ2h3Y205d2N6b2dZVzU1S1NBOVBpQW9YRzRnSUR4VGRtY2djMmw2WlQxN01qQjlJSHN1TGk1d2NtOXdjMzArWEc0Z0lDQWdQSEJoZEdnZ1pEMWNJazB4TkM0ek5EZ2dNVFF1T0RRNVl5MHdMalEyT1NBd0xqUTJPUzB4TGpJeU9TQXdMalEyT1MweExqWTVOeUF3YkMweUxqWTFNUzB6TGpBek1DMHlMalkxTVNBekxqQXlPV010TUM0ME5qa2dNQzQwTmprdE1TNHlNamtnTUM0ME5qa3RNUzQyT1RjZ01DMHdMalEyT1Mwd0xqUTJPUzB3TGpRMk9TMHhMakl5T1NBd0xURXVOamszYkRJdU56VTRMVE11TVRVdE1pNDNOVGt0TXk0eE5USmpMVEF1TkRZNUxUQXVORFk1TFRBdU5EWTVMVEV1TWpJNElEQXRNUzQyT1Rkek1TNHlNamd0TUM0ME5qa2dNUzQyT1RjZ01Hd3lMalkxTWlBekxqQXpNU0F5TGpZMU1TMHpMakF6TVdNd0xqUTJPUzB3TGpRMk9TQXhMakl5T0Mwd0xqUTJPU0F4TGpZNU55QXdjekF1TkRZNUlERXVNakk1SURBZ01TNDJPVGRzTFRJdU56VTRJRE11TVRVeUlESXVOelU0SURNdU1UVmpNQzQwTmprZ01DNDBOamtnTUM0ME5qa2dNUzR5TWprZ01DQXhMalk1T0hwY0lpQXZQbHh1SUNBOEwxTjJaejVjYmlrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnUkc5M2JrTm9aWFp5YjI0Z1BTQW9jSEp2Y0hNNklHRnVlU2tnUFQ0Z0tGeHVJQ0E4VTNabklITnBlbVU5ZXpJd2ZTQjdMaTR1Y0hKdmNITjlQbHh1SUNBZ0lEeHdZWFJvSUdROVhDSk5OQzQxTVRZZ055NDFORGhqTUM0ME16WXRNQzQwTkRZZ01TNHdORE10TUM0ME9ERWdNUzQxTnpZZ01Hd3pMamt3T0NBekxqYzBOeUF6TGprd09DMHpMamMwTjJNd0xqVXpNeTB3TGpRNE1TQXhMakUwTVMwd0xqUTBOaUF4TGpVM05DQXdJREF1TkRNMklEQXVORFExSURBdU5EQTRJREV1TVRrM0lEQWdNUzQyTVRVdE1DNDBNRFlnTUM0ME1UZ3ROQzQyT1RVZ05DNDFNREl0TkM0Mk9UVWdOQzQxTURJdE1DNHlNVGNnTUM0eU1qTXRNQzQxTURJZ01DNHpNelV0TUM0M09EY2dNQzR6TXpWekxUQXVOVGN0TUM0eE1USXRNQzQzT0RrdE1DNHpNelZqTUNBd0xUUXVNamczTFRRdU1EZzBMVFF1TmprMUxUUXVOVEF5Y3kwd0xqUXpOaTB4TGpFM0lEQXRNUzQyTVRWNlhDSWdMejVjYmlBZ1BDOVRkbWMrWEc0cE8xeHVYRzR2THlBOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNiaTh2SUVSeWIzQmtiM2R1SUNZZ1EyeGxZWElnUW5WMGRHOXVjMXh1THk4Z1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlYRzVjYm1WNGNHOXlkQ0IwZVhCbElFbHVaR2xqWVhSdmNsQnliM0J6SUQwZ1EyOXRiVzl1VUhKdmNITWdKaUI3WEc0Z0lDOHFLaUJVYUdVZ1kyaHBiR1J5Wlc0Z2RHOGdZbVVnY21WdVpHVnlaV1FnYVc1emFXUmxJSFJvWlNCcGJtUnBZMkYwYjNJdUlDb3ZYRzRnSUdOb2FXeGtjbVZ1T2lCT2IyUmxMRnh1SUNBdktpb2dVSEp2Y0hNZ2RHaGhkQ0IzYVd4c0lHSmxJSEJoYzNObFpDQnZiaUIwYnlCMGFHVWdZMmhwYkdSeVpXNHVJQ292WEc0Z0lHbHVibVZ5VUhKdmNITTZJR0Z1ZVN4Y2JpQWdMeW9xSUZSb1pTQm1iMk4xYzJWa0lITjBZWFJsSUc5bUlIUm9aU0J6Wld4bFkzUXVJQ292WEc0Z0lHbHpSbTlqZFhObFpEb2dZbTl2YkdWaGJpeGNiaUFnTHlvcUlGZG9aWFJvWlhJZ2RHaGxJSFJsZUhRZ2FYTWdjbWxuYUhRZ2RHOGdiR1ZtZENBcUwxeHVJQ0JwYzFKMGJEb2dZbTl2YkdWaGJpeGNibjA3WEc1Y2JtTnZibk4wSUdKaGMyVkRVMU1nUFNBb2UxeHVJQ0JwYzBadlkzVnpaV1FzWEc0Z0lIUm9aVzFsT2lCN1hHNGdJQ0FnYzNCaFkybHVaem9nZXlCaVlYTmxWVzVwZENCOUxGeHVJQ0FnSUdOdmJHOXljeXhjYmlBZ2ZTeGNibjA2SUVsdVpHbGpZWFJ2Y2xCeWIzQnpLU0E5UGlBb2UxeHVJQ0JzWVdKbGJEb2dKMmx1WkdsallYUnZja052Ym5SaGFXNWxjaWNzWEc0Z0lHTnZiRzl5T2lCcGMwWnZZM1Z6WldRZ1B5QmpiMnh2Y25NdWJtVjFkSEpoYkRZd0lEb2dZMjlzYjNKekxtNWxkWFJ5WVd3eU1DeGNiaUFnWkdsemNHeGhlVG9nSjJac1pYZ25MRnh1SUNCd1lXUmthVzVuT2lCaVlYTmxWVzVwZENBcUlESXNYRzRnSUhSeVlXNXphWFJwYjI0NklDZGpiMnh2Y2lBeE5UQnRjeWNzWEc1Y2JpQWdKenBvYjNabGNpYzZJSHRjYmlBZ0lDQmpiMnh2Y2pvZ2FYTkdiMk4xYzJWa0lEOGdZMjlzYjNKekxtNWxkWFJ5WVd3NE1DQTZJR052Ykc5eWN5NXVaWFYwY21Gc05EQXNYRzRnSUgwc1hHNTlLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR1J5YjNCa2IzZHVTVzVrYVdOaGRHOXlRMU5USUQwZ1ltRnpaVU5UVXp0Y2JtVjRjRzl5ZENCamIyNXpkQ0JFY205d1pHOTNia2x1WkdsallYUnZjaUE5SUNod2NtOXdjem9nU1c1a2FXTmhkRzl5VUhKdmNITXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2V5QmphR2xzWkhKbGJpd2dZMnhoYzNOT1lXMWxMQ0JqZUN3Z1oyVjBVM1I1YkdWekxDQnBibTVsY2xCeWIzQnpJSDBnUFNCd2NtOXdjenRjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0E4WkdsMlhHNGdJQ0FnSUNCamMzTTllMmRsZEZOMGVXeGxjeWduWkhKdmNHUnZkMjVKYm1ScFkyRjBiM0luTENCd2NtOXdjeWw5WEc0Z0lDQWdJQ0JqYkdGemMwNWhiV1U5ZTJONEtGeHVJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnYVc1a2FXTmhkRzl5T2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUNka2NtOXdaRzkzYmkxcGJtUnBZMkYwYjNJbk9pQjBjblZsTEZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQmpiR0Z6YzA1aGJXVmNiaUFnSUNBZ0lDbDlYRzRnSUNBZ0lDQjdMaTR1YVc1dVpYSlFjbTl3YzMxY2JpQWdJQ0ErWEc0Z0lDQWdJQ0I3WTJocGJHUnlaVzRnZkh3Z1BFUnZkMjVEYUdWMmNtOXVJQzgrZlZ4dUlDQWdJRHd2WkdsMlBseHVJQ0FwTzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnNaV0Z5U1c1a2FXTmhkRzl5UTFOVElEMGdZbUZ6WlVOVFV6dGNibVY0Y0c5eWRDQmpiMjV6ZENCRGJHVmhja2x1WkdsallYUnZjaUE5SUNod2NtOXdjem9nU1c1a2FXTmhkRzl5VUhKdmNITXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2V5QmphR2xzWkhKbGJpd2dZMnhoYzNOT1lXMWxMQ0JqZUN3Z1oyVjBVM1I1YkdWekxDQnBibTVsY2xCeWIzQnpJSDBnUFNCd2NtOXdjenRjYmlBZ2NtVjBkWEp1SUNoY2JpQWdJQ0E4WkdsMlhHNGdJQ0FnSUNCamMzTTllMmRsZEZOMGVXeGxjeWduWTJ4bFlYSkpibVJwWTJGMGIzSW5MQ0J3Y205d2N5bDlYRzRnSUNBZ0lDQmpiR0Z6YzA1aGJXVTllMk40S0Z4dUlDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdhVzVrYVdOaGRHOXlPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ2RqYkdWaGNpMXBibVJwWTJGMGIzSW5PaUIwY25WbExGeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JqYkdGemMwNWhiV1ZjYmlBZ0lDQWdJQ2w5WEc0Z0lDQWdJQ0I3TGk0dWFXNXVaWEpRY205d2MzMWNiaUFnSUNBK1hHNGdJQ0FnSUNCN1kyaHBiR1J5Wlc0Z2ZId2dQRU55YjNOelNXTnZiaUF2UG4xY2JpQWdJQ0E4TDJScGRqNWNiaUFnS1R0Y2JuMDdYRzVjYmk4dklEMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVnh1THk4Z1UyVndZWEpoZEc5eVhHNHZMeUE5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVkSGx3WlNCVFpYQmhjbUYwYjNKVGRHRjBaU0E5SUhzZ2FYTkVhWE5oWW14bFpEb2dZbTl2YkdWaGJpQjlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdhVzVrYVdOaGRHOXlVMlZ3WVhKaGRHOXlRMU5USUQwZ0tIdGNiaUFnYVhORWFYTmhZbXhsWkN4Y2JpQWdkR2hsYldVNklIdGNiaUFnSUNCemNHRmphVzVuT2lCN0lHSmhjMlZWYm1sMElIMHNYRzRnSUNBZ1kyOXNiM0p6TEZ4dUlDQjlMRnh1ZlRvZ1EyOXRiVzl1VUhKdmNITWdKaUJUWlhCaGNtRjBiM0pUZEdGMFpTa2dQVDRnS0h0Y2JpQWdiR0ZpWld3NklDZHBibVJwWTJGMGIzSlRaWEJoY21GMGIzSW5MRnh1SUNCaGJHbG5ibE5sYkdZNklDZHpkSEpsZEdOb0p5eGNiaUFnWW1GamEyZHliM1Z1WkVOdmJHOXlPaUJwYzBScGMyRmliR1ZrSUQ4Z1kyOXNiM0p6TG01bGRYUnlZV3d4TUNBNklHTnZiRzl5Y3k1dVpYVjBjbUZzTWpBc1hHNGdJRzFoY21kcGJrSnZkSFJ2YlRvZ1ltRnpaVlZ1YVhRZ0tpQXlMRnh1SUNCdFlYSm5hVzVVYjNBNklHSmhjMlZWYm1sMElDb2dNaXhjYmlBZ2QybGtkR2c2SURFc1hHNTlLVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRWx1WkdsallYUnZjbE5sY0dGeVlYUnZjaUE5SUNod2NtOXdjem9nU1c1a2FXTmhkRzl5VUhKdmNITXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2V5QmpiR0Z6YzA1aGJXVXNJR040TENCblpYUlRkSGxzWlhNc0lHbHVibVZ5VUhKdmNITWdmU0E5SUhCeWIzQnpPMXh1SUNCeVpYUjFjbTRnS0Z4dUlDQWdJRHh6Y0dGdVhHNGdJQ0FnSUNCN0xpNHVhVzV1WlhKUWNtOXdjMzFjYmlBZ0lDQWdJR056Y3oxN1oyVjBVM1I1YkdWektDZHBibVJwWTJGMGIzSlRaWEJoY21GMGIzSW5MQ0J3Y205d2N5bDlYRzRnSUNBZ0lDQmpiR0Z6YzA1aGJXVTllMk40S0hzZ0oybHVaR2xqWVhSdmNpMXpaWEJoY21GMGIzSW5PaUIwY25WbElIMHNJR05zWVhOelRtRnRaU2w5WEc0Z0lDQWdMejVjYmlBZ0tUdGNibjA3WEc1Y2JpOHZJRDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFZ4dUx5OGdURzloWkdsdVoxeHVMeThnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVhHNWNibU52Ym5OMElHeHZZV1JwYm1kRWIzUkJibWx0WVhScGIyNXpJRDBnYTJWNVpuSmhiV1Z6WUZ4dUlDQXdKU3dnT0RBbExDQXhNREFsSUhzZ2IzQmhZMmwwZVRvZ01Ec2dmVnh1SUNBME1DVWdleUJ2Y0dGamFYUjVPaUF4T3lCOVhHNWdPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdiRzloWkdsdVowbHVaR2xqWVhSdmNrTlRVeUE5SUNoN1hHNGdJR2x6Um05amRYTmxaQ3hjYmlBZ2MybDZaU3hjYmlBZ2RHaGxiV1U2SUh0Y2JpQWdJQ0JqYjJ4dmNuTXNYRzRnSUNBZ2MzQmhZMmx1WnpvZ2V5QmlZWE5sVlc1cGRDQjlMRnh1SUNCOUxGeHVmVG9nZTF4dUlDQnBjMFp2WTNWelpXUTZJR0p2YjJ4bFlXNHNYRzRnSUhOcGVtVTZJRzUxYldKbGNpeGNiaUFnZEdobGJXVTZJRlJvWlcxbExGeHVmU2tnUFQ0Z0tIdGNiaUFnYkdGaVpXdzZJQ2RzYjJGa2FXNW5TVzVrYVdOaGRHOXlKeXhjYmlBZ1kyOXNiM0k2SUdselJtOWpkWE5sWkNBL0lHTnZiRzl5Y3k1dVpYVjBjbUZzTmpBZ09pQmpiMnh2Y25NdWJtVjFkSEpoYkRJd0xGeHVJQ0JrYVhOd2JHRjVPaUFuWm14bGVDY3NYRzRnSUhCaFpHUnBibWM2SUdKaGMyVlZibWwwSUNvZ01peGNiaUFnZEhKaGJuTnBkR2x2YmpvZ0oyTnZiRzl5SURFMU1HMXpKeXhjYmlBZ1lXeHBaMjVUWld4bU9pQW5ZMlZ1ZEdWeUp5eGNiaUFnWm05dWRGTnBlbVU2SUhOcGVtVXNYRzRnSUd4cGJtVklaV2xuYUhRNklERXNYRzRnSUcxaGNtZHBibEpwWjJoME9pQnphWHBsTEZ4dUlDQjBaWGgwUVd4cFoyNDZJQ2RqWlc1MFpYSW5MRnh1SUNCMlpYSjBhV05oYkVGc2FXZHVPaUFuYldsa1pHeGxKeXhjYm4wcE8xeHVYRzUwZVhCbElFUnZkRkJ5YjNCeklEMGdleUJrWld4aGVUb2diblZ0WW1WeUxDQnZabVp6WlhRNklHSnZiMnhsWVc0Z2ZUdGNibU52Ym5OMElFeHZZV1JwYm1kRWIzUWdQU0FvZXlCa1pXeGhlU3dnYjJabWMyVjBJSDA2SUVSdmRGQnliM0J6S1NBOVBpQW9YRzRnSUR4emNHRnVYRzRnSUNBZ1kzTnpQWHQ3WEc0Z0lDQWdJQ0JoYm1sdFlYUnBiMjQ2SUdBa2UyeHZZV1JwYm1kRWIzUkJibWx0WVhScGIyNXpmU0F4Y3lCbFlYTmxMV2x1TFc5MWRDQWtlMlJsYkdGNWZXMXpJR2x1Wm1sdWFYUmxPMkFzWEc0Z0lDQWdJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJQ2RqZFhKeVpXNTBRMjlzYjNJbkxGeHVJQ0FnSUNBZ1ltOXlaR1Z5VW1Ga2FYVnpPaUFuTVdWdEp5eGNiaUFnSUNBZ0lHUnBjM0JzWVhrNklDZHBibXhwYm1VdFlteHZZMnNuTEZ4dUlDQWdJQ0FnYldGeVoybHVUR1ZtZERvZ2IyWm1jMlYwSUQ4Z0p6RmxiU2NnT2lCdWRXeHNMRnh1SUNBZ0lDQWdhR1ZwWjJoME9pQW5NV1Z0Snl4Y2JpQWdJQ0FnSUhabGNuUnBZMkZzUVd4cFoyNDZJQ2QwYjNBbkxGeHVJQ0FnSUNBZ2QybGtkR2c2SUNjeFpXMG5MRnh1SUNBZ0lIMTlYRzRnSUM4K1hHNHBPMXh1WEc1bGVIQnZjblFnZEhsd1pTQk1iMkZrYVc1blNXTnZibEJ5YjNCeklEMGdlMXh1SUNBdktpb2dVSEp2Y0hNZ2RHaGhkQ0IzYVd4c0lHSmxJSEJoYzNObFpDQnZiaUIwYnlCMGFHVWdZMmhwYkdSeVpXNHVJQ292WEc0Z0lHbHVibVZ5VUhKdmNITTZJR0Z1ZVN4Y2JpQWdMeW9xSUZSb1pTQm1iMk4xYzJWa0lITjBZWFJsSUc5bUlIUm9aU0J6Wld4bFkzUXVJQ292WEc0Z0lHbHpSbTlqZFhObFpEb2dZbTl2YkdWaGJpeGNiaUFnTHlvcUlGZG9aWFJvWlhJZ2RHaGxJSFJsZUhRZ2FYTWdjbWxuYUhRZ2RHOGdiR1ZtZENBcUwxeHVJQ0JwYzFKMGJEb2dZbTl2YkdWaGJpeGNibjBnSmlCRGIyMXRiMjVRY205d2N5QW1JSHRjYmlBZ0lDQXZLaW9nVTJWMElITnBlbVVnYjJZZ2RHaGxJR052Ym5SaGFXNWxjaTRnS2k5Y2JpQWdJQ0J6YVhwbE9pQnVkVzFpWlhJc1hHNGdJSDA3WEc1bGVIQnZjblFnWTI5dWMzUWdURzloWkdsdVowbHVaR2xqWVhSdmNpQTlJQ2h3Y205d2N6b2dURzloWkdsdVowbGpiMjVRY205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCN0lHTnNZWE56VG1GdFpTd2dZM2dzSUdkbGRGTjBlV3hsY3l3Z2FXNXVaWEpRY205d2N5d2dhWE5TZEd3Z2ZTQTlJSEJ5YjNCek8xeHVYRzRnSUhKbGRIVnliaUFvWEc0Z0lDQWdQR1JwZGx4dUlDQWdJQ0FnWTNOelBYdG5aWFJUZEhsc1pYTW9KMnh2WVdScGJtZEpibVJwWTJGMGIzSW5MQ0J3Y205d2N5bDlYRzRnSUNBZ0lDQmpiR0Z6YzA1aGJXVTllMk40S0Z4dUlDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdhVzVrYVdOaGRHOXlPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ2RzYjJGa2FXNW5MV2x1WkdsallYUnZjaWM2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUdOc1lYTnpUbUZ0WlZ4dUlDQWdJQ0FnS1gxY2JpQWdJQ0FnSUhzdUxpNXBibTVsY2xCeWIzQnpmVnh1SUNBZ0lENWNiaUFnSUNBZ0lEeE1iMkZrYVc1blJHOTBJR1JsYkdGNVBYc3dmU0J2Wm1aelpYUTllMmx6VW5Sc2ZTQXZQbHh1SUNBZ0lDQWdQRXh2WVdScGJtZEViM1FnWkdWc1lYazllekUyTUgwZ2IyWm1jMlYwSUM4K1hHNGdJQ0FnSUNBOFRHOWhaR2x1WjBSdmRDQmtaV3hoZVQxN016SXdmU0J2Wm1aelpYUTlleUZwYzFKMGJIMGdMejVjYmlBZ0lDQThMMlJwZGo1Y2JpQWdLVHRjYm4wN1hHNU1iMkZrYVc1blNXNWthV05oZEc5eUxtUmxabUYxYkhSUWNtOXdjeUE5SUhzZ2MybDZaVG9nTkNCOU8xeHVJbDE5ICovXCIpXG4gIH0pO1xufTtcblxudmFyIExvYWRpbmdJbmRpY2F0b3IgPSBmdW5jdGlvbiBMb2FkaW5nSW5kaWNhdG9yKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc1J0bCA9IHByb3BzLmlzUnRsO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IGdldFN0eWxlcygnbG9hZGluZ0luZGljYXRvcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICdsb2FkaW5nLWluZGljYXRvcic6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBqc3goTG9hZGluZ0RvdCwge1xuICAgIGRlbGF5OiAwLFxuICAgIG9mZnNldDogaXNSdGxcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDE2MCxcbiAgICBvZmZzZXQ6IHRydWVcbiAgfSksIGpzeChMb2FkaW5nRG90LCB7XG4gICAgZGVsYXk6IDMyMCxcbiAgICBvZmZzZXQ6ICFpc1J0bFxuICB9KSk7XG59O1xuTG9hZGluZ0luZGljYXRvci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IDRcbn07XG5cbnZhciBjc3MgPSBmdW5jdGlvbiBjc3MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IF9yZWYuaXNGb2N1c2VkLFxuICAgICAgX3JlZiR0aGVtZSA9IF9yZWYudGhlbWUsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycyxcbiAgICAgIGJvcmRlclJhZGl1cyA9IF9yZWYkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2NvbnRyb2wnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsNSA6IGNvbG9ycy5uZXV0cmFsMCxcbiAgICBib3JkZXJDb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMTAgOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeSA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgYm94U2hhZG93OiBpc0ZvY3VzZWQgPyBcIjAgMCAwIDFweCBcIi5jb25jYXQoY29sb3JzLnByaW1hcnkpIDogbnVsbCxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1pbkhlaWdodDogc3BhY2luZy5jb250cm9sSGVpZ2h0LFxuICAgIG91dGxpbmU6ICcwICFpbXBvcnRhbnQnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMTAwbXMnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm9yZGVyQ29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLm5ldXRyYWwzMFxuICAgIH1cbiAgfTtcbn07XG5cbnZhciBDb250cm9sID0gZnVuY3Rpb24gQ29udHJvbChwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGN4ID0gcHJvcHMuY3gsXG4gICAgICBnZXRTdHlsZXMgPSBwcm9wcy5nZXRTdHlsZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIGlzRm9jdXNlZCA9IHByb3BzLmlzRm9jdXNlZCxcbiAgICAgIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIG1lbnVJc09wZW4gPSBwcm9wcy5tZW51SXNPcGVuO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGlubmVyUmVmLFxuICAgIGNzczogZ2V0U3R5bGVzKCdjb250cm9sJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgY29udHJvbDogdHJ1ZSxcbiAgICAgICdjb250cm9sLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAnY29udHJvbC0taXMtZm9jdXNlZCc6IGlzRm9jdXNlZCxcbiAgICAgICdjb250cm9sLS1tZW51LWlzLW9wZW4nOiBtZW51SXNPcGVuXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIGdyb3VwQ1NTID0gZnVuY3Rpb24gZ3JvdXBDU1MoX3JlZikge1xuICB2YXIgc3BhY2luZyA9IF9yZWYudGhlbWUuc3BhY2luZztcbiAgcmV0dXJuIHtcbiAgICBwYWRkaW5nQm90dG9tOiBzcGFjaW5nLmJhc2VVbml0ICogMixcbiAgICBwYWRkaW5nVG9wOiBzcGFjaW5nLmJhc2VVbml0ICogMlxuICB9O1xufTtcblxudmFyIEdyb3VwID0gZnVuY3Rpb24gR3JvdXAocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgSGVhZGluZyA9IHByb3BzLkhlYWRpbmcsXG4gICAgICBoZWFkaW5nUHJvcHMgPSBwcm9wcy5oZWFkaW5nUHJvcHMsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcyxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICB0aGVtZSA9IHByb3BzLnRoZW1lLFxuICAgICAgc2VsZWN0UHJvcHMgPSBwcm9wcy5zZWxlY3RQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2dyb3VwJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgZ3JvdXA6IHRydWVcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBqc3goSGVhZGluZywgX2V4dGVuZHMoe30sIGhlYWRpbmdQcm9wcywge1xuICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wcyxcbiAgICB0aGVtZTogdGhlbWUsXG4gICAgZ2V0U3R5bGVzOiBnZXRTdHlsZXMsXG4gICAgY3g6IGN4XG4gIH0pLCBsYWJlbCksIGpzeChcImRpdlwiLCBudWxsLCBjaGlsZHJlbikpO1xufTtcblxudmFyIGdyb3VwSGVhZGluZ0NTUyA9IGZ1bmN0aW9uIGdyb3VwSGVhZGluZ0NTUyhfcmVmMikge1xuICB2YXIgc3BhY2luZyA9IF9yZWYyLnRoZW1lLnNwYWNpbmc7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6ICdncm91cCcsXG4gICAgY29sb3I6ICcjOTk5JyxcbiAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAnNzUlJyxcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICBtYXJnaW5Cb3R0b206ICcwLjI1ZW0nLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmJhc2VVbml0ICogMyxcbiAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcuYmFzZVVuaXQgKiAzLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH07XG59O1xudmFyIEdyb3VwSGVhZGluZyA9IGZ1bmN0aW9uIEdyb3VwSGVhZGluZyhwcm9wcykge1xuICB2YXIgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcblxuICB2YXIgX2NsZWFuQ29tbW9uUHJvcHMgPSBjbGVhbkNvbW1vblByb3BzKHByb3BzKTtcbiAgICAgIF9jbGVhbkNvbW1vblByb3BzLmRhdGE7XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfY2xlYW5Db21tb25Qcm9wcywgW1wiZGF0YVwiXSk7XG5cbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ2dyb3VwSGVhZGluZycsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgICdncm91cC1oZWFkaW5nJzogdHJ1ZVxuICAgIH0sIGNsYXNzTmFtZSlcbiAgfSwgaW5uZXJQcm9wcykpO1xufTtcblxudmFyIGlucHV0Q1NTID0gZnVuY3Rpb24gaW5wdXRDU1MoX3JlZikge1xuICB2YXIgaXNEaXNhYmxlZCA9IF9yZWYuaXNEaXNhYmxlZCxcbiAgICAgIF9yZWYkdGhlbWUgPSBfcmVmLnRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9yZWYkdGhlbWUuc3BhY2luZyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIG1hcmdpbjogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcGFkZGluZ0JvdHRvbTogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcGFkZGluZ1RvcDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgdmlzaWJpbGl0eTogaXNEaXNhYmxlZCA/ICdoaWRkZW4nIDogJ3Zpc2libGUnLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwXG4gIH07XG59O1xuXG52YXIgaW5wdXRTdHlsZSA9IGZ1bmN0aW9uIGlucHV0U3R5bGUoaXNIaWRkZW4pIHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ2lucHV0JyxcbiAgICBiYWNrZ3JvdW5kOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgIG9wYWNpdHk6IGlzSGlkZGVuID8gMCA6IDEsXG4gICAgb3V0bGluZTogMCxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgfTtcbn07XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzO1xuXG4gIHZhciBfY2xlYW5Db21tb25Qcm9wcyA9IGNsZWFuQ29tbW9uUHJvcHMocHJvcHMpLFxuICAgICAgaW5uZXJSZWYgPSBfY2xlYW5Db21tb25Qcm9wcy5pbm5lclJlZixcbiAgICAgIGlzRGlzYWJsZWQgPSBfY2xlYW5Db21tb25Qcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaXNIaWRkZW4gPSBfY2xlYW5Db21tb25Qcm9wcy5pc0hpZGRlbixcbiAgICAgIGlubmVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX2NsZWFuQ29tbW9uUHJvcHMsIFtcImlubmVyUmVmXCIsIFwiaXNEaXNhYmxlZFwiLCBcImlzSGlkZGVuXCJdKTtcblxuICByZXR1cm4ganN4KFwiZGl2XCIsIHtcbiAgICBjc3M6IGdldFN0eWxlcygnaW5wdXQnLCBwcm9wcylcbiAgfSwganN4KEF1dG9zaXplSW5wdXQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIGlucHV0OiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICBpbnB1dFJlZjogaW5uZXJSZWYsXG4gICAgaW5wdXRTdHlsZTogaW5wdXRTdHlsZShpc0hpZGRlbiksXG4gICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgfSwgaW5uZXJQcm9wcykpKTtcbn07XG5cbnZhciBtdWx0aVZhbHVlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUNTUyhfcmVmKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBib3JkZXJSYWRpdXMgPSBfcmVmJHRoZW1lLmJvcmRlclJhZGl1cyxcbiAgICAgIGNvbG9ycyA9IF9yZWYkdGhlbWUuY29sb3JzO1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiAnbXVsdGlWYWx1ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMubmV1dHJhbDEwLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWFyZ2luOiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtaW5XaWR0aDogMCAvLyByZXNvbHZlcyBmbGV4L3RleHQtb3ZlcmZsb3cgYnVnXG5cbiAgfTtcbn07XG52YXIgbXVsdGlWYWx1ZUxhYmVsQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZUxhYmVsQ1NTKF9yZWYyKSB7XG4gIHZhciBfcmVmMiR0aGVtZSA9IF9yZWYyLnRoZW1lLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjIkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgY29sb3JzID0gX3JlZjIkdGhlbWUuY29sb3JzLFxuICAgICAgY3JvcFdpdGhFbGxpcHNpcyA9IF9yZWYyLmNyb3BXaXRoRWxsaXBzaXM7XG4gIHJldHVybiB7XG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMgLyAyLFxuICAgIGNvbG9yOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIGZvbnRTaXplOiAnODUlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogMyxcbiAgICBwYWRkaW5nTGVmdDogNixcbiAgICB0ZXh0T3ZlcmZsb3c6IGNyb3BXaXRoRWxsaXBzaXMgPyAnZWxsaXBzaXMnIDogbnVsbCxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9O1xufTtcbnZhciBtdWx0aVZhbHVlUmVtb3ZlQ1NTID0gZnVuY3Rpb24gbXVsdGlWYWx1ZVJlbW92ZUNTUyhfcmVmMykge1xuICB2YXIgX3JlZjMkdGhlbWUgPSBfcmVmMy50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmMyR0aGVtZS5zcGFjaW5nLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX3JlZjMkdGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgY29sb3JzID0gX3JlZjMkdGhlbWUuY29sb3JzLFxuICAgICAgaXNGb2N1c2VkID0gX3JlZjMuaXNGb2N1c2VkO1xuICByZXR1cm4ge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzIC8gMixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCAmJiBjb2xvcnMuZGFuZ2VyTGlnaHQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmJhc2VVbml0LFxuICAgIHBhZGRpbmdSaWdodDogc3BhY2luZy5iYXNlVW5pdCxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZGFuZ2VyTGlnaHQsXG4gICAgICBjb2xvcjogY29sb3JzLmRhbmdlclxuICAgIH1cbiAgfTtcbn07XG52YXIgTXVsdGlWYWx1ZUdlbmVyaWMgPSBmdW5jdGlvbiBNdWx0aVZhbHVlR2VuZXJpYyhfcmVmNCkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNC5jaGlsZHJlbixcbiAgICAgIGlubmVyUHJvcHMgPSBfcmVmNC5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIGlubmVyUHJvcHMsIGNoaWxkcmVuKTtcbn07XG52YXIgTXVsdGlWYWx1ZUNvbnRhaW5lciA9IE11bHRpVmFsdWVHZW5lcmljO1xudmFyIE11bHRpVmFsdWVMYWJlbCA9IE11bHRpVmFsdWVHZW5lcmljO1xuZnVuY3Rpb24gTXVsdGlWYWx1ZVJlbW92ZShfcmVmNSkge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNS5jaGlsZHJlbixcbiAgICAgIGlubmVyUHJvcHMgPSBfcmVmNS5pbm5lclByb3BzO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIGlubmVyUHJvcHMsIGNoaWxkcmVuIHx8IGpzeChDcm9zc0ljb24sIHtcbiAgICBzaXplOiAxNFxuICB9KSk7XG59XG5cbnZhciBNdWx0aVZhbHVlID0gZnVuY3Rpb24gTXVsdGlWYWx1ZShwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGRhdGEgPSBwcm9wcy5kYXRhLFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHMsXG4gICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgIHJlbW92ZVByb3BzID0gcHJvcHMucmVtb3ZlUHJvcHMsXG4gICAgICBzZWxlY3RQcm9wcyA9IHByb3BzLnNlbGVjdFByb3BzO1xuICB2YXIgQ29udGFpbmVyID0gY29tcG9uZW50cy5Db250YWluZXIsXG4gICAgICBMYWJlbCA9IGNvbXBvbmVudHMuTGFiZWwsXG4gICAgICBSZW1vdmUgPSBjb21wb25lbnRzLlJlbW92ZTtcbiAgcmV0dXJuIGpzeChDbGFzc05hbWVzLCBudWxsLCBmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICB2YXIgY3NzID0gX3JlZjYuY3NzLFxuICAgICAgICBlbW90aW9uQ3ggPSBfcmVmNi5jeDtcbiAgICByZXR1cm4ganN4KENvbnRhaW5lciwge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGlubmVyUHJvcHM6IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbW90aW9uQ3goY3NzKGdldFN0eWxlcygnbXVsdGlWYWx1ZScsIHByb3BzKSksIGN4KHtcbiAgICAgICAgICAnbXVsdGktdmFsdWUnOiB0cnVlLFxuICAgICAgICAgICdtdWx0aS12YWx1ZS0taXMtZGlzYWJsZWQnOiBpc0Rpc2FibGVkXG4gICAgICAgIH0sIGNsYXNzTmFtZSkpXG4gICAgICB9LCBpbm5lclByb3BzKSxcbiAgICAgIHNlbGVjdFByb3BzOiBzZWxlY3RQcm9wc1xuICAgIH0sIGpzeChMYWJlbCwge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgY2xhc3NOYW1lOiBlbW90aW9uQ3goY3NzKGdldFN0eWxlcygnbXVsdGlWYWx1ZUxhYmVsJywgcHJvcHMpKSwgY3goe1xuICAgICAgICAgICdtdWx0aS12YWx1ZV9fbGFiZWwnOiB0cnVlXG4gICAgICAgIH0sIGNsYXNzTmFtZSkpXG4gICAgICB9LFxuICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgfSwgY2hpbGRyZW4pLCBqc3goUmVtb3ZlLCB7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5uZXJQcm9wczogX29iamVjdFNwcmVhZDIoe1xuICAgICAgICBjbGFzc05hbWU6IGVtb3Rpb25DeChjc3MoZ2V0U3R5bGVzKCdtdWx0aVZhbHVlUmVtb3ZlJywgcHJvcHMpKSwgY3goe1xuICAgICAgICAgICdtdWx0aS12YWx1ZV9fcmVtb3ZlJzogdHJ1ZVxuICAgICAgICB9LCBjbGFzc05hbWUpKVxuICAgICAgfSwgcmVtb3ZlUHJvcHMpLFxuICAgICAgc2VsZWN0UHJvcHM6IHNlbGVjdFByb3BzXG4gICAgfSkpO1xuICB9KTtcbn07XG5cbk11bHRpVmFsdWUuZGVmYXVsdFByb3BzID0ge1xuICBjcm9wV2l0aEVsbGlwc2lzOiB0cnVlXG59O1xuXG52YXIgb3B0aW9uQ1NTID0gZnVuY3Rpb24gb3B0aW9uQ1NTKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBpc0ZvY3VzZWQgPSBfcmVmLmlzRm9jdXNlZCxcbiAgICAgIGlzU2VsZWN0ZWQgPSBfcmVmLmlzU2VsZWN0ZWQsXG4gICAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ29wdGlvbicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBpc1NlbGVjdGVkID8gY29sb3JzLnByaW1hcnkgOiBpc0ZvY3VzZWQgPyBjb2xvcnMucHJpbWFyeTI1IDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsMjAgOiBpc1NlbGVjdGVkID8gY29sb3JzLm5ldXRyYWwwIDogJ2luaGVyaXQnLFxuICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICBwYWRkaW5nOiBcIlwiLmNvbmNhdChzcGFjaW5nLmJhc2VVbml0ICogMiwgXCJweCBcIikuY29uY2F0KHNwYWNpbmcuYmFzZVVuaXQgKiAzLCBcInB4XCIpLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgLy8gcHJvdmlkZSBzb21lIGFmZm9yZGFuY2Ugb24gdG91Y2ggZGV2aWNlc1xuICAgICc6YWN0aXZlJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAhaXNEaXNhYmxlZCAmJiAoaXNTZWxlY3RlZCA/IGNvbG9ycy5wcmltYXJ5IDogY29sb3JzLnByaW1hcnk1MClcbiAgICB9XG4gIH07XG59O1xuXG52YXIgT3B0aW9uID0gZnVuY3Rpb24gT3B0aW9uKHByb3BzKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY3ggPSBwcm9wcy5jeCxcbiAgICAgIGdldFN0eWxlcyA9IHByb3BzLmdldFN0eWxlcyxcbiAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgaXNGb2N1c2VkID0gcHJvcHMuaXNGb2N1c2VkLFxuICAgICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgICBpbm5lclJlZiA9IHByb3BzLmlubmVyUmVmLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdvcHRpb24nLCBwcm9wcyksXG4gICAgY2xhc3NOYW1lOiBjeCh7XG4gICAgICBvcHRpb246IHRydWUsXG4gICAgICAnb3B0aW9uLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWQsXG4gICAgICAnb3B0aW9uLS1pcy1mb2N1c2VkJzogaXNGb2N1c2VkLFxuICAgICAgJ29wdGlvbi0taXMtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkXG4gICAgfSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGlubmVyUmVmXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG52YXIgcGxhY2Vob2xkZXJDU1MgPSBmdW5jdGlvbiBwbGFjZWhvbGRlckNTUyhfcmVmKSB7XG4gIHZhciBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ3BsYWNlaG9sZGVyJyxcbiAgICBjb2xvcjogY29sb3JzLm5ldXRyYWw1MCxcbiAgICBtYXJnaW5MZWZ0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXJnaW5SaWdodDogc3BhY2luZy5iYXNlVW5pdCAvIDIsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJ1xuICB9O1xufTtcblxudmFyIFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gUGxhY2Vob2xkZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaW5uZXJQcm9wcyA9IHByb3BzLmlubmVyUHJvcHM7XG4gIHJldHVybiBqc3goXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNzczogZ2V0U3R5bGVzKCdwbGFjZWhvbGRlcicsIHByb3BzKSxcbiAgICBjbGFzc05hbWU6IGN4KHtcbiAgICAgIHBsYWNlaG9sZGVyOiB0cnVlXG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBpbm5lclByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxudmFyIGNzcyQxID0gZnVuY3Rpb24gY3NzKF9yZWYpIHtcbiAgdmFyIGlzRGlzYWJsZWQgPSBfcmVmLmlzRGlzYWJsZWQsXG4gICAgICBfcmVmJHRoZW1lID0gX3JlZi50aGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfcmVmJHRoZW1lLnNwYWNpbmcsXG4gICAgICBjb2xvcnMgPSBfcmVmJHRoZW1lLmNvbG9ycztcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogJ3NpbmdsZVZhbHVlJyxcbiAgICBjb2xvcjogaXNEaXNhYmxlZCA/IGNvbG9ycy5uZXV0cmFsNDAgOiBjb2xvcnMubmV1dHJhbDgwLFxuICAgIG1hcmdpbkxlZnQ6IHNwYWNpbmcuYmFzZVVuaXQgLyAyLFxuICAgIG1hcmdpblJpZ2h0OiBzcGFjaW5nLmJhc2VVbml0IC8gMixcbiAgICBtYXhXaWR0aDogXCJjYWxjKDEwMCUgLSBcIi5jb25jYXQoc3BhY2luZy5iYXNlVW5pdCAqIDIsIFwicHgpXCIpLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJ1xuICB9O1xufTtcblxudmFyIFNpbmdsZVZhbHVlID0gZnVuY3Rpb24gU2luZ2xlVmFsdWUocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjeCA9IHByb3BzLmN4LFxuICAgICAgZ2V0U3R5bGVzID0gcHJvcHMuZ2V0U3R5bGVzLFxuICAgICAgaXNEaXNhYmxlZCA9IHByb3BzLmlzRGlzYWJsZWQsXG4gICAgICBpbm5lclByb3BzID0gcHJvcHMuaW5uZXJQcm9wcztcbiAgcmV0dXJuIGpzeChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBnZXRTdHlsZXMoJ3NpbmdsZVZhbHVlJywgcHJvcHMpLFxuICAgIGNsYXNzTmFtZTogY3goe1xuICAgICAgJ3NpbmdsZS12YWx1ZSc6IHRydWUsXG4gICAgICAnc2luZ2xlLXZhbHVlLS1pcy1kaXNhYmxlZCc6IGlzRGlzYWJsZWRcbiAgICB9LCBjbGFzc05hbWUpXG4gIH0sIGlubmVyUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG52YXIgY29tcG9uZW50cyA9IHtcbiAgQ2xlYXJJbmRpY2F0b3I6IENsZWFySW5kaWNhdG9yLFxuICBDb250cm9sOiBDb250cm9sLFxuICBEcm9wZG93bkluZGljYXRvcjogRHJvcGRvd25JbmRpY2F0b3IsXG4gIERvd25DaGV2cm9uOiBEb3duQ2hldnJvbixcbiAgQ3Jvc3NJY29uOiBDcm9zc0ljb24sXG4gIEdyb3VwOiBHcm91cCxcbiAgR3JvdXBIZWFkaW5nOiBHcm91cEhlYWRpbmcsXG4gIEluZGljYXRvcnNDb250YWluZXI6IEluZGljYXRvcnNDb250YWluZXIsXG4gIEluZGljYXRvclNlcGFyYXRvcjogSW5kaWNhdG9yU2VwYXJhdG9yLFxuICBJbnB1dDogSW5wdXQsXG4gIExvYWRpbmdJbmRpY2F0b3I6IExvYWRpbmdJbmRpY2F0b3IsXG4gIE1lbnU6IE1lbnUsXG4gIE1lbnVMaXN0OiBNZW51TGlzdCxcbiAgTWVudVBvcnRhbDogTWVudVBvcnRhbCxcbiAgTG9hZGluZ01lc3NhZ2U6IExvYWRpbmdNZXNzYWdlLFxuICBOb09wdGlvbnNNZXNzYWdlOiBOb09wdGlvbnNNZXNzYWdlLFxuICBNdWx0aVZhbHVlOiBNdWx0aVZhbHVlLFxuICBNdWx0aVZhbHVlQ29udGFpbmVyOiBNdWx0aVZhbHVlQ29udGFpbmVyLFxuICBNdWx0aVZhbHVlTGFiZWw6IE11bHRpVmFsdWVMYWJlbCxcbiAgTXVsdGlWYWx1ZVJlbW92ZTogTXVsdGlWYWx1ZVJlbW92ZSxcbiAgT3B0aW9uOiBPcHRpb24sXG4gIFBsYWNlaG9sZGVyOiBQbGFjZWhvbGRlcixcbiAgU2VsZWN0Q29udGFpbmVyOiBTZWxlY3RDb250YWluZXIsXG4gIFNpbmdsZVZhbHVlOiBTaW5nbGVWYWx1ZSxcbiAgVmFsdWVDb250YWluZXI6IFZhbHVlQ29udGFpbmVyXG59O1xudmFyIGRlZmF1bHRDb21wb25lbnRzID0gZnVuY3Rpb24gZGVmYXVsdENvbXBvbmVudHMocHJvcHMpIHtcbiAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb21wb25lbnRzKSwgcHJvcHMuY29tcG9uZW50cyk7XG59O1xuXG5leHBvcnQgeyBpc01vYmlsZURldmljZSBhcyBBLCBjbGFzc05hbWVzIGFzIEIsIGRlZmF1bHRDb21wb25lbnRzIGFzIEMsIGlzRG9jdW1lbnRFbGVtZW50IGFzIEQsIGNsZWFuVmFsdWUgYXMgRSwgc2Nyb2xsSW50b1ZpZXcgYXMgRiwgbm9vcCBhcyBHLCBoYW5kbGVJbnB1dENoYW5nZSBhcyBILCBNZW51UGxhY2VyIGFzIE0sIF9jcmVhdGVTdXBlciBhcyBfLCBfb2JqZWN0U3ByZWFkMiBhcyBhLCBjbGVhckluZGljYXRvckNTUyBhcyBiLCBjb21wb25lbnRzIGFzIGMsIGNvbnRhaW5lckNTUyBhcyBkLCBjc3MgYXMgZSwgZHJvcGRvd25JbmRpY2F0b3JDU1MgYXMgZiwgZ3JvdXBDU1MgYXMgZywgZ3JvdXBIZWFkaW5nQ1NTIGFzIGgsIGluZGljYXRvcnNDb250YWluZXJDU1MgYXMgaSwgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTIGFzIGosIGlucHV0Q1NTIGFzIGssIGxvYWRpbmdJbmRpY2F0b3JDU1MgYXMgbCwgbG9hZGluZ01lc3NhZ2VDU1MgYXMgbSwgbWVudUNTUyBhcyBuLCBtZW51TGlzdENTUyBhcyBvLCBtZW51UG9ydGFsQ1NTIGFzIHAsIG11bHRpVmFsdWVDU1MgYXMgcSwgbXVsdGlWYWx1ZUxhYmVsQ1NTIGFzIHIsIHN1cHBvcnRzUGFzc2l2ZUV2ZW50cyBhcyBzLCBtdWx0aVZhbHVlUmVtb3ZlQ1NTIGFzIHQsIG5vT3B0aW9uc01lc3NhZ2VDU1MgYXMgdSwgb3B0aW9uQ1NTIGFzIHYsIHBsYWNlaG9sZGVyQ1NTIGFzIHcsIGNzcyQxIGFzIHgsIHZhbHVlQ29udGFpbmVyQ1NTIGFzIHksIGlzVG91Y2hDYXBhYmxlIGFzIHogfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwidmFyIHNhZmVJc05hTiA9IE51bWJlci5pc05hTiB8fFxuICAgIGZ1bmN0aW9uIHBvbnlmaWxsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSB2YWx1ZTtcbiAgICB9O1xuZnVuY3Rpb24gaXNFcXVhbChmaXJzdCwgc2Vjb25kKSB7XG4gICAgaWYgKGZpcnN0ID09PSBzZWNvbmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChzYWZlSXNOYU4oZmlyc3QpICYmIHNhZmVJc05hTihzZWNvbmQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBhcmVJbnB1dHNFcXVhbChuZXdJbnB1dHMsIGxhc3RJbnB1dHMpIHtcbiAgICBpZiAobmV3SW5wdXRzLmxlbmd0aCAhPT0gbGFzdElucHV0cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0lucHV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWlzRXF1YWwobmV3SW5wdXRzW2ldLCBsYXN0SW5wdXRzW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBtZW1vaXplT25lKHJlc3VsdEZuLCBpc0VxdWFsKSB7XG4gICAgaWYgKGlzRXF1YWwgPT09IHZvaWQgMCkgeyBpc0VxdWFsID0gYXJlSW5wdXRzRXF1YWw7IH1cbiAgICB2YXIgbGFzdFRoaXM7XG4gICAgdmFyIGxhc3RBcmdzID0gW107XG4gICAgdmFyIGxhc3RSZXN1bHQ7XG4gICAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICAgICAgdmFyIG5ld0FyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG5ld0FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGVkT25jZSAmJiBsYXN0VGhpcyA9PT0gdGhpcyAmJiBpc0VxdWFsKG5ld0FyZ3MsIGxhc3RBcmdzKSkge1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFJlc3VsdCA9IHJlc3VsdEZuLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgICAgICBjYWxsZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgICAgICBsYXN0QXJncyA9IG5ld0FyZ3M7XG4gICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVPbmU7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgeyBhIGFzIF9vYmplY3RTcHJlYWQyLCBzIGFzIHN1cHBvcnRzUGFzc2l2ZUV2ZW50cywgYiBhcyBjbGVhckluZGljYXRvckNTUywgZCBhcyBjb250YWluZXJDU1MsIGUgYXMgY3NzJDEsIGYgYXMgZHJvcGRvd25JbmRpY2F0b3JDU1MsIGcgYXMgZ3JvdXBDU1MsIGggYXMgZ3JvdXBIZWFkaW5nQ1NTLCBpIGFzIGluZGljYXRvcnNDb250YWluZXJDU1MsIGogYXMgaW5kaWNhdG9yU2VwYXJhdG9yQ1NTLCBrIGFzIGlucHV0Q1NTLCBsIGFzIGxvYWRpbmdJbmRpY2F0b3JDU1MsIG0gYXMgbG9hZGluZ01lc3NhZ2VDU1MsIG4gYXMgbWVudUNTUywgbyBhcyBtZW51TGlzdENTUywgcCBhcyBtZW51UG9ydGFsQ1NTLCBxIGFzIG11bHRpVmFsdWVDU1MsIHIgYXMgbXVsdGlWYWx1ZUxhYmVsQ1NTLCB0IGFzIG11bHRpVmFsdWVSZW1vdmVDU1MsIHUgYXMgbm9PcHRpb25zTWVzc2FnZUNTUywgdiBhcyBvcHRpb25DU1MsIHcgYXMgcGxhY2Vob2xkZXJDU1MsIHggYXMgY3NzJDIsIHkgYXMgdmFsdWVDb250YWluZXJDU1MsIHogYXMgaXNUb3VjaENhcGFibGUsIEEgYXMgaXNNb2JpbGVEZXZpY2UsIF8gYXMgX2NyZWF0ZVN1cGVyLCBCIGFzIGNsYXNzTmFtZXMsIEMgYXMgZGVmYXVsdENvbXBvbmVudHMsIEQgYXMgaXNEb2N1bWVudEVsZW1lbnQsIEUgYXMgY2xlYW5WYWx1ZSwgRiBhcyBzY3JvbGxJbnRvVmlldywgRyBhcyBub29wLCBNIGFzIE1lbnVQbGFjZXIgfSBmcm9tICcuL2luZGV4LTRiZDAzNTcxLmVzbS5qcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0cyc7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5cbmZ1bmN0aW9uIF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fKCkgeyByZXR1cm4gXCJZb3UgaGF2ZSB0cmllZCB0byBzdHJpbmdpZnkgb2JqZWN0IHJldHVybmVkIGZyb20gYGNzc2AgZnVuY3Rpb24uIEl0IGlzbid0IHN1cHBvc2VkIHRvIGJlIHVzZWQgZGlyZWN0bHkgKGUuZy4gYXMgdmFsdWUgb2YgdGhlIGBjbGFzc05hbWVgIHByb3ApLCBidXQgcmF0aGVyIGhhbmRlZCB0byBlbW90aW9uIHNvIGl0IGNhbiBoYW5kbGUgaXQgKGUuZy4gYXMgdmFsdWUgb2YgYGNzc2AgcHJvcCkuXCI7IH1cblxudmFyIF9yZWYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIG5hbWU6IFwiN3BnMGNqLWExMXlUZXh0XCIsXG4gIHN0eWxlczogXCJsYWJlbDphMTF5VGV4dDt6LWluZGV4Ojk5OTk7Ym9yZGVyOjA7Y2xpcDpyZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7aGVpZ2h0OjFweDt3aWR0aDoxcHg7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3dyYXBcIlxufSA6IHtcbiAgbmFtZTogXCIxZjQzYXZ6LWExMXlUZXh0LUExMXlUZXh0XCIsXG4gIHN0eWxlczogXCJsYWJlbDphMTF5VGV4dDt6LWluZGV4Ojk5OTk7Ym9yZGVyOjA7Y2xpcDpyZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7aGVpZ2h0OjFweDt3aWR0aDoxcHg7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3dyYXA7bGFiZWw6QTExeVRleHQ7XCIsXG4gIG1hcDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa0V4TVhsVVpYaDBMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVZGSklpd2labWxzWlNJNklrRXhNWGxVWlhoMExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1FHWnNiM2RjYmk4cUtpQkFhbk40SUdwemVDQXFMMXh1YVcxd2IzSjBJSHNnZEhsd1pTQkZiR1Z0Wlc1MFEyOXVabWxuSUgwZ1puSnZiU0FuY21WaFkzUW5PMXh1YVcxd2IzSjBJSHNnYW5ONElIMGdabkp2YlNBblFHVnRiM1JwYjI0dmNtVmhZM1FuTzF4dVhHNHZMeUJCYzNOcGMzUnBkbVVnZEdWNGRDQjBieUJrWlhOamNtbGlaU0IyYVhOMVlXd2daV3hsYldWdWRITXVJRWhwWkdSbGJpQm1iM0lnYzJsbmFIUmxaQ0IxYzJWeWN5NWNibU52Ym5OMElFRXhNWGxVWlhoMElEMGdLSEJ5YjNCek9pQkZiR1Z0Wlc1MFEyOXVabWxuUENkemNHRnVKejRwSUQwK0lDaGNiaUFnUEhOd1lXNWNiaUFnSUNCamMzTTllM3RjYmlBZ0lDQWdJR3hoWW1Wc09pQW5ZVEV4ZVZSbGVIUW5MRnh1SUNBZ0lDQWdla2x1WkdWNE9pQTVPVGs1TEZ4dUlDQWdJQ0FnWW05eVpHVnlPaUF3TEZ4dUlDQWdJQ0FnWTJ4cGNEb2dKM0psWTNRb01YQjRMQ0F4Y0hnc0lERndlQ3dnTVhCNEtTY3NYRzRnSUNBZ0lDQm9aV2xuYUhRNklERXNYRzRnSUNBZ0lDQjNhV1IwYURvZ01TeGNiaUFnSUNBZ0lIQnZjMmwwYVc5dU9pQW5ZV0p6YjJ4MWRHVW5MRnh1SUNBZ0lDQWdiM1psY21ac2IzYzZJQ2RvYVdSa1pXNG5MRnh1SUNBZ0lDQWdjR0ZrWkdsdVp6b2dNQ3hjYmlBZ0lDQWdJSGRvYVhSbFUzQmhZMlU2SUNkdWIzZHlZWEFuTEZ4dUlDQWdJSDE5WEc0Z0lDQWdleTR1TG5CeWIzQnpmVnh1SUNBdlBseHVLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUVRFeGVWUmxlSFE3WEc0aVhYMD0gKi9cIixcbiAgdG9TdHJpbmc6IF9FTU9USU9OX1NUUklOR0lGSUVEX0NTU19FUlJPUl9fXG59O1xuXG52YXIgQTExeVRleHQgPSBmdW5jdGlvbiBBMTF5VGV4dChwcm9wcykge1xuICByZXR1cm4ganN4KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgY3NzOiBfcmVmXG4gIH0sIHByb3BzKSk7XG59O1xuXG52YXIgZGVmYXVsdEFyaWFMaXZlTWVzc2FnZXMgPSB7XG4gIGd1aWRhbmNlOiBmdW5jdGlvbiBndWlkYW5jZShwcm9wcykge1xuICAgIHZhciBpc1NlYXJjaGFibGUgPSBwcm9wcy5pc1NlYXJjaGFibGUsXG4gICAgICAgIGlzTXVsdGkgPSBwcm9wcy5pc011bHRpLFxuICAgICAgICBpc0Rpc2FibGVkID0gcHJvcHMuaXNEaXNhYmxlZCxcbiAgICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gcHJvcHMudGFiU2VsZWN0c1ZhbHVlLFxuICAgICAgICBjb250ZXh0ID0gcHJvcHMuY29udGV4dDtcblxuICAgIHN3aXRjaCAoY29udGV4dCkge1xuICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgIHJldHVybiBcIlVzZSBVcCBhbmQgRG93biB0byBjaG9vc2Ugb3B0aW9uc1wiLmNvbmNhdChpc0Rpc2FibGVkID8gJycgOiAnLCBwcmVzcyBFbnRlciB0byBzZWxlY3QgdGhlIGN1cnJlbnRseSBmb2N1c2VkIG9wdGlvbicsIFwiLCBwcmVzcyBFc2NhcGUgdG8gZXhpdCB0aGUgbWVudVwiKS5jb25jYXQodGFiU2VsZWN0c1ZhbHVlID8gJywgcHJlc3MgVGFiIHRvIHNlbGVjdCB0aGUgb3B0aW9uIGFuZCBleGl0IHRoZSBtZW51JyA6ICcnLCBcIi5cIik7XG5cbiAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHByb3BzWydhcmlhLWxhYmVsJ10gfHwgJ1NlbGVjdCcsIFwiIGlzIGZvY3VzZWQgXCIpLmNvbmNhdChpc1NlYXJjaGFibGUgPyAnLHR5cGUgdG8gcmVmaW5lIGxpc3QnIDogJycsIFwiLCBwcmVzcyBEb3duIHRvIG9wZW4gdGhlIG1lbnUsIFwiKS5jb25jYXQoaXNNdWx0aSA/ICcgcHJlc3MgbGVmdCB0byBmb2N1cyBzZWxlY3RlZCB2YWx1ZXMnIDogJycpO1xuXG4gICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgIHJldHVybiAnVXNlIGxlZnQgYW5kIHJpZ2h0IHRvIHRvZ2dsZSBiZXR3ZWVuIGZvY3VzZWQgdmFsdWVzLCBwcmVzcyBCYWNrc3BhY2UgdG8gcmVtb3ZlIHRoZSBjdXJyZW50bHkgZm9jdXNlZCB2YWx1ZSc7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH0sXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShwcm9wcykge1xuICAgIHZhciBhY3Rpb24gPSBwcm9wcy5hY3Rpb24sXG4gICAgICAgIF9wcm9wcyRsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgICBsYWJlbCA9IF9wcm9wcyRsYWJlbCA9PT0gdm9pZCAwID8gJycgOiBfcHJvcHMkbGFiZWwsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkO1xuXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2Rlc2VsZWN0LW9wdGlvbic6XG4gICAgICBjYXNlICdwb3AtdmFsdWUnOlxuICAgICAgY2FzZSAncmVtb3ZlLXZhbHVlJzpcbiAgICAgICAgcmV0dXJuIFwib3B0aW9uIFwiLmNvbmNhdChsYWJlbCwgXCIsIGRlc2VsZWN0ZWQuXCIpO1xuXG4gICAgICBjYXNlICdzZWxlY3Qtb3B0aW9uJzpcbiAgICAgICAgcmV0dXJuIGlzRGlzYWJsZWQgPyBcIm9wdGlvbiBcIi5jb25jYXQobGFiZWwsIFwiIGlzIGRpc2FibGVkLiBTZWxlY3QgYW5vdGhlciBvcHRpb24uXCIpIDogXCJvcHRpb24gXCIuY29uY2F0KGxhYmVsLCBcIiwgc2VsZWN0ZWQuXCIpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9LFxuICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKHByb3BzKSB7XG4gICAgdmFyIGNvbnRleHQgPSBwcm9wcy5jb250ZXh0LFxuICAgICAgICBfcHJvcHMkZm9jdXNlZCA9IHByb3BzLmZvY3VzZWQsXG4gICAgICAgIGZvY3VzZWQgPSBfcHJvcHMkZm9jdXNlZCA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkZm9jdXNlZCxcbiAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICAgIF9wcm9wcyRsYWJlbDIgPSBwcm9wcy5sYWJlbCxcbiAgICAgICAgbGFiZWwgPSBfcHJvcHMkbGFiZWwyID09PSB2b2lkIDAgPyAnJyA6IF9wcm9wcyRsYWJlbDIsXG4gICAgICAgIHNlbGVjdFZhbHVlID0gcHJvcHMuc2VsZWN0VmFsdWUsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgICBpc1NlbGVjdGVkID0gcHJvcHMuaXNTZWxlY3RlZDtcblxuICAgIHZhciBnZXRBcnJheUluZGV4ID0gZnVuY3Rpb24gZ2V0QXJyYXlJbmRleChhcnIsIGl0ZW0pIHtcbiAgICAgIHJldHVybiBhcnIgJiYgYXJyLmxlbmd0aCA/IFwiXCIuY29uY2F0KGFyci5pbmRleE9mKGl0ZW0pICsgMSwgXCIgb2YgXCIpLmNvbmNhdChhcnIubGVuZ3RoKSA6ICcnO1xuICAgIH07XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ3ZhbHVlJyAmJiBzZWxlY3RWYWx1ZSkge1xuICAgICAgcmV0dXJuIFwidmFsdWUgXCIuY29uY2F0KGxhYmVsLCBcIiBmb2N1c2VkLCBcIikuY29uY2F0KGdldEFycmF5SW5kZXgoc2VsZWN0VmFsdWUsIGZvY3VzZWQpLCBcIi5cIik7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgPT09ICdtZW51Jykge1xuICAgICAgdmFyIGRpc2FibGVkID0gaXNEaXNhYmxlZCA/ICcgZGlzYWJsZWQnIDogJyc7XG4gICAgICB2YXIgc3RhdHVzID0gXCJcIi5jb25jYXQoaXNTZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnZm9jdXNlZCcpLmNvbmNhdChkaXNhYmxlZCk7XG4gICAgICByZXR1cm4gXCJvcHRpb24gXCIuY29uY2F0KGxhYmVsLCBcIiBcIikuY29uY2F0KHN0YXR1cywgXCIsIFwiKS5jb25jYXQoZ2V0QXJyYXlJbmRleChvcHRpb25zLCBmb2N1c2VkKSwgXCIuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfSxcbiAgb25GaWx0ZXI6IGZ1bmN0aW9uIG9uRmlsdGVyKHByb3BzKSB7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgICByZXN1bHRzTWVzc2FnZSA9IHByb3BzLnJlc3VsdHNNZXNzYWdlO1xuICAgIHJldHVybiBcIlwiLmNvbmNhdChyZXN1bHRzTWVzc2FnZSkuY29uY2F0KGlucHV0VmFsdWUgPyAnIGZvciBzZWFyY2ggdGVybSAnICsgaW5wdXRWYWx1ZSA6ICcnLCBcIi5cIik7XG4gIH1cbn07XG5cbnZhciBMaXZlUmVnaW9uID0gZnVuY3Rpb24gTGl2ZVJlZ2lvbihwcm9wcykge1xuICB2YXIgYXJpYVNlbGVjdGlvbiA9IHByb3BzLmFyaWFTZWxlY3Rpb24sXG4gICAgICBmb2N1c2VkT3B0aW9uID0gcHJvcHMuZm9jdXNlZE9wdGlvbixcbiAgICAgIGZvY3VzZWRWYWx1ZSA9IHByb3BzLmZvY3VzZWRWYWx1ZSxcbiAgICAgIGZvY3VzYWJsZU9wdGlvbnMgPSBwcm9wcy5mb2N1c2FibGVPcHRpb25zLFxuICAgICAgaXNGb2N1c2VkID0gcHJvcHMuaXNGb2N1c2VkLFxuICAgICAgc2VsZWN0VmFsdWUgPSBwcm9wcy5zZWxlY3RWYWx1ZSxcbiAgICAgIHNlbGVjdFByb3BzID0gcHJvcHMuc2VsZWN0UHJvcHM7XG4gIHZhciBhcmlhTGl2ZU1lc3NhZ2VzID0gc2VsZWN0UHJvcHMuYXJpYUxpdmVNZXNzYWdlcyxcbiAgICAgIGdldE9wdGlvbkxhYmVsID0gc2VsZWN0UHJvcHMuZ2V0T3B0aW9uTGFiZWwsXG4gICAgICBpbnB1dFZhbHVlID0gc2VsZWN0UHJvcHMuaW5wdXRWYWx1ZSxcbiAgICAgIGlzTXVsdGkgPSBzZWxlY3RQcm9wcy5pc011bHRpLFxuICAgICAgaXNPcHRpb25EaXNhYmxlZCA9IHNlbGVjdFByb3BzLmlzT3B0aW9uRGlzYWJsZWQsXG4gICAgICBpc1NlYXJjaGFibGUgPSBzZWxlY3RQcm9wcy5pc1NlYXJjaGFibGUsXG4gICAgICBtZW51SXNPcGVuID0gc2VsZWN0UHJvcHMubWVudUlzT3BlbixcbiAgICAgIG9wdGlvbnMgPSBzZWxlY3RQcm9wcy5vcHRpb25zLFxuICAgICAgc2NyZWVuUmVhZGVyU3RhdHVzID0gc2VsZWN0UHJvcHMuc2NyZWVuUmVhZGVyU3RhdHVzLFxuICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gc2VsZWN0UHJvcHMudGFiU2VsZWN0c1ZhbHVlO1xuICB2YXIgYXJpYUxhYmVsID0gc2VsZWN0UHJvcHNbJ2FyaWEtbGFiZWwnXTtcbiAgdmFyIGFyaWFMaXZlID0gc2VsZWN0UHJvcHNbJ2FyaWEtbGl2ZSddOyAvLyBVcGRhdGUgYXJpYSBsaXZlIG1lc3NhZ2UgY29uZmlndXJhdGlvbiB3aGVuIHByb3AgY2hhbmdlc1xuXG4gIHZhciBtZXNzYWdlcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZGVmYXVsdEFyaWFMaXZlTWVzc2FnZXMpLCBhcmlhTGl2ZU1lc3NhZ2VzIHx8IHt9KTtcbiAgfSwgW2FyaWFMaXZlTWVzc2FnZXNdKTsgLy8gVXBkYXRlIGFyaWEgbGl2ZSBzZWxlY3RlZCBvcHRpb24gd2hlbiBwcm9wIGNoYW5nZXNcblxuICB2YXIgYXJpYVNlbGVjdGVkID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnJztcblxuICAgIGlmIChhcmlhU2VsZWN0aW9uICYmIG1lc3NhZ2VzLm9uQ2hhbmdlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gYXJpYVNlbGVjdGlvbi5vcHRpb24sXG4gICAgICAgICAgcmVtb3ZlZFZhbHVlID0gYXJpYVNlbGVjdGlvbi5yZW1vdmVkVmFsdWUsXG4gICAgICAgICAgdmFsdWUgPSBhcmlhU2VsZWN0aW9uLnZhbHVlOyAvLyBzZWxlY3Qtb3B0aW9uIHdoZW4gIWlzTXVsdGkgZG9lcyBub3QgcmV0dXJuIG9wdGlvbiBzbyB3ZSBhc3N1bWUgc2VsZWN0ZWQgb3B0aW9uIGlzIHZhbHVlXG5cbiAgICAgIHZhciBhc09wdGlvbiA9IGZ1bmN0aW9uIGFzT3B0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gIUFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IG51bGw7XG4gICAgICB9O1xuXG4gICAgICB2YXIgc2VsZWN0ZWQgPSByZW1vdmVkVmFsdWUgfHwgb3B0aW9uIHx8IGFzT3B0aW9uKHZhbHVlKTtcblxuICAgICAgdmFyIG9uQ2hhbmdlUHJvcHMgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIGlzRGlzYWJsZWQ6IHNlbGVjdGVkICYmIGlzT3B0aW9uRGlzYWJsZWQoc2VsZWN0ZWQpLFxuICAgICAgICBsYWJlbDogc2VsZWN0ZWQgPyBnZXRPcHRpb25MYWJlbChzZWxlY3RlZCkgOiAnJ1xuICAgICAgfSwgYXJpYVNlbGVjdGlvbik7XG5cbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlcy5vbkNoYW5nZShvbkNoYW5nZVByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfSwgW2FyaWFTZWxlY3Rpb24sIGlzT3B0aW9uRGlzYWJsZWQsIGdldE9wdGlvbkxhYmVsLCBtZXNzYWdlc10pO1xuICB2YXIgYXJpYUZvY3VzZWQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm9jdXNNc2cgPSAnJztcbiAgICB2YXIgZm9jdXNlZCA9IGZvY3VzZWRPcHRpb24gfHwgZm9jdXNlZFZhbHVlO1xuICAgIHZhciBpc1NlbGVjdGVkID0gISEoZm9jdXNlZE9wdGlvbiAmJiBzZWxlY3RWYWx1ZSAmJiBzZWxlY3RWYWx1ZS5pbmNsdWRlcyhmb2N1c2VkT3B0aW9uKSk7XG5cbiAgICBpZiAoZm9jdXNlZCAmJiBtZXNzYWdlcy5vbkZvY3VzKSB7XG4gICAgICB2YXIgb25Gb2N1c1Byb3BzID0ge1xuICAgICAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgICAgICBsYWJlbDogZ2V0T3B0aW9uTGFiZWwoZm9jdXNlZCksXG4gICAgICAgIGlzRGlzYWJsZWQ6IGlzT3B0aW9uRGlzYWJsZWQoZm9jdXNlZCksXG4gICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIGNvbnRleHQ6IGZvY3VzZWQgPT09IGZvY3VzZWRPcHRpb24gPyAnbWVudScgOiAndmFsdWUnLFxuICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWVcbiAgICAgIH07XG4gICAgICBmb2N1c01zZyA9IG1lc3NhZ2VzLm9uRm9jdXMob25Gb2N1c1Byb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9jdXNNc2c7XG4gIH0sIFtmb2N1c2VkT3B0aW9uLCBmb2N1c2VkVmFsdWUsIGdldE9wdGlvbkxhYmVsLCBpc09wdGlvbkRpc2FibGVkLCBtZXNzYWdlcywgb3B0aW9ucywgc2VsZWN0VmFsdWVdKTtcbiAgdmFyIGFyaWFSZXN1bHRzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdHNNc2cgPSAnJztcblxuICAgIGlmIChtZW51SXNPcGVuICYmIG9wdGlvbnMubGVuZ3RoICYmIG1lc3NhZ2VzLm9uRmlsdGVyKSB7XG4gICAgICB2YXIgcmVzdWx0c01lc3NhZ2UgPSBzY3JlZW5SZWFkZXJTdGF0dXMoe1xuICAgICAgICBjb3VudDogZm9jdXNhYmxlT3B0aW9ucy5sZW5ndGhcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0c01zZyA9IG1lc3NhZ2VzLm9uRmlsdGVyKHtcbiAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgcmVzdWx0c01lc3NhZ2U6IHJlc3VsdHNNZXNzYWdlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c01zZztcbiAgfSwgW2ZvY3VzYWJsZU9wdGlvbnMsIGlucHV0VmFsdWUsIG1lbnVJc09wZW4sIG1lc3NhZ2VzLCBvcHRpb25zLCBzY3JlZW5SZWFkZXJTdGF0dXNdKTtcbiAgdmFyIGFyaWFHdWlkYW5jZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBndWlkYW5jZU1zZyA9ICcnO1xuXG4gICAgaWYgKG1lc3NhZ2VzLmd1aWRhbmNlKSB7XG4gICAgICB2YXIgY29udGV4dCA9IGZvY3VzZWRWYWx1ZSA/ICd2YWx1ZScgOiBtZW51SXNPcGVuID8gJ21lbnUnIDogJ2lucHV0JztcbiAgICAgIGd1aWRhbmNlTXNnID0gbWVzc2FnZXMuZ3VpZGFuY2Uoe1xuICAgICAgICAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgaXNEaXNhYmxlZDogZm9jdXNlZE9wdGlvbiAmJiBpc09wdGlvbkRpc2FibGVkKGZvY3VzZWRPcHRpb24pLFxuICAgICAgICBpc011bHRpOiBpc011bHRpLFxuICAgICAgICBpc1NlYXJjaGFibGU6IGlzU2VhcmNoYWJsZSxcbiAgICAgICAgdGFiU2VsZWN0c1ZhbHVlOiB0YWJTZWxlY3RzVmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBndWlkYW5jZU1zZztcbiAgfSwgW2FyaWFMYWJlbCwgZm9jdXNlZE9wdGlvbiwgZm9jdXNlZFZhbHVlLCBpc011bHRpLCBpc09wdGlvbkRpc2FibGVkLCBpc1NlYXJjaGFibGUsIG1lbnVJc09wZW4sIG1lc3NhZ2VzLCB0YWJTZWxlY3RzVmFsdWVdKTtcbiAgdmFyIGFyaWFDb250ZXh0ID0gXCJcIi5jb25jYXQoYXJpYUZvY3VzZWQsIFwiIFwiKS5jb25jYXQoYXJpYVJlc3VsdHMsIFwiIFwiKS5jb25jYXQoYXJpYUd1aWRhbmNlKTtcbiAgcmV0dXJuIGpzeChBMTF5VGV4dCwge1xuICAgIFwiYXJpYS1saXZlXCI6IGFyaWFMaXZlLFxuICAgIFwiYXJpYS1hdG9taWNcIjogXCJmYWxzZVwiLFxuICAgIFwiYXJpYS1yZWxldmFudFwiOiBcImFkZGl0aW9ucyB0ZXh0XCJcbiAgfSwgaXNGb2N1c2VkICYmIGpzeChSZWFjdC5GcmFnbWVudCwgbnVsbCwganN4KFwic3BhblwiLCB7XG4gICAgaWQ6IFwiYXJpYS1zZWxlY3Rpb25cIlxuICB9LCBhcmlhU2VsZWN0ZWQpLCBqc3goXCJzcGFuXCIsIHtcbiAgICBpZDogXCJhcmlhLWNvbnRleHRcIlxuICB9LCBhcmlhQ29udGV4dCkpKTtcbn07XG5cbnZhciBkaWFjcml0aWNzID0gW3tcbiAgYmFzZTogJ0EnLFxuICBsZXR0ZXJzOiBcIkFcXHUyNEI2XFx1RkYyMVxceEMwXFx4QzFcXHhDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHhDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx4QzRcXHUwMURFXFx1MUVBMlxceEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZcIlxufSwge1xuICBiYXNlOiAnQUEnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzJcIlxufSwge1xuICBiYXNlOiAnQUUnLFxuICBsZXR0ZXJzOiBcIlxceEM2XFx1MDFGQ1xcdTAxRTJcIlxufSwge1xuICBiYXNlOiAnQU8nLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzRcIlxufSwge1xuICBiYXNlOiAnQVUnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzZcIlxufSwge1xuICBiYXNlOiAnQVYnLFxuICBsZXR0ZXJzOiBcIlxcdUE3MzhcXHVBNzNBXCJcbn0sIHtcbiAgYmFzZTogJ0FZJyxcbiAgbGV0dGVyczogXCJcXHVBNzNDXCJcbn0sIHtcbiAgYmFzZTogJ0InLFxuICBsZXR0ZXJzOiBcIkJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MVwiXG59LCB7XG4gIGJhc2U6ICdDJyxcbiAgbGV0dGVyczogXCJDXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx4QzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXCJcbn0sIHtcbiAgYmFzZTogJ0QnLFxuICBsZXR0ZXJzOiBcIkRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XCJcbn0sIHtcbiAgYmFzZTogJ0RaJyxcbiAgbGV0dGVyczogXCJcXHUwMUYxXFx1MDFDNFwiXG59LCB7XG4gIGJhc2U6ICdEeicsXG4gIGxldHRlcnM6IFwiXFx1MDFGMlxcdTAxQzVcIlxufSwge1xuICBiYXNlOiAnRScsXG4gIGxldHRlcnM6IFwiRVxcdTI0QkFcXHVGRjI1XFx4QzhcXHhDOVxceENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxceENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RVwiXG59LCB7XG4gIGJhc2U6ICdGJyxcbiAgbGV0dGVyczogXCJGXFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JcIlxufSwge1xuICBiYXNlOiAnRycsXG4gIGxldHRlcnM6IFwiR1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXCJcbn0sIHtcbiAgYmFzZTogJ0gnLFxuICBsZXR0ZXJzOiBcIkhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXCJcbn0sIHtcbiAgYmFzZTogJ0knLFxuICBsZXR0ZXJzOiBcIklcXHUyNEJFXFx1RkYyOVxceENDXFx4Q0RcXHhDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHhDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N1wiXG59LCB7XG4gIGJhc2U6ICdKJyxcbiAgbGV0dGVyczogXCJKXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OFwiXG59LCB7XG4gIGJhc2U6ICdLJyxcbiAgbGV0dGVyczogXCJLXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMlwiXG59LCB7XG4gIGJhc2U6ICdMJyxcbiAgbGV0dGVyczogXCJMXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBcIlxufSwge1xuICBiYXNlOiAnTEonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzdcIlxufSwge1xuICBiYXNlOiAnTGonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQzhcIlxufSwge1xuICBiYXNlOiAnTScsXG4gIGxldHRlcnM6IFwiTVxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNcIlxufSwge1xuICBiYXNlOiAnTicsXG4gIGxldHRlcnM6IFwiTlxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHhEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRcIlxufSwge1xuICBiYXNlOiAnTkonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0FcIlxufSwge1xuICBiYXNlOiAnTmonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0JcIlxufSwge1xuICBiYXNlOiAnTycsXG4gIGxldHRlcnM6IFwiT1xcdTI0QzRcXHVGRjJGXFx4RDJcXHhEM1xceEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxceEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx4RDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx4RDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q1wiXG59LCB7XG4gIGJhc2U6ICdPSScsXG4gIGxldHRlcnM6IFwiXFx1MDFBMlwiXG59LCB7XG4gIGJhc2U6ICdPTycsXG4gIGxldHRlcnM6IFwiXFx1QTc0RVwiXG59LCB7XG4gIGJhc2U6ICdPVScsXG4gIGxldHRlcnM6IFwiXFx1MDIyMlwiXG59LCB7XG4gIGJhc2U6ICdQJyxcbiAgbGV0dGVyczogXCJQXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XCJcbn0sIHtcbiAgYmFzZTogJ1EnLFxuICBsZXR0ZXJzOiBcIlFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QVwiXG59LCB7XG4gIGJhc2U6ICdSJyxcbiAgbGV0dGVyczogXCJSXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4MlwiXG59LCB7XG4gIGJhc2U6ICdTJyxcbiAgbGV0dGVyczogXCJTXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NFwiXG59LCB7XG4gIGJhc2U6ICdUJyxcbiAgbGV0dGVyczogXCJUXFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZcIlxufSwge1xuICBiYXNlOiAnVFonLFxuICBsZXR0ZXJzOiBcIlxcdUE3MjhcIlxufSwge1xuICBiYXNlOiAnVScsXG4gIGxldHRlcnM6IFwiVVxcdTI0Q0FcXHVGRjM1XFx4RDlcXHhEQVxceERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHhEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRcIlxufSwge1xuICBiYXNlOiAnVicsXG4gIGxldHRlcnM6IFwiVlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVcIlxufSwge1xuICBiYXNlOiAnVlknLFxuICBsZXR0ZXJzOiBcIlxcdUE3NjBcIlxufSwge1xuICBiYXNlOiAnVycsXG4gIGxldHRlcnM6IFwiV1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3MlwiXG59LCB7XG4gIGJhc2U6ICdYJyxcbiAgbGV0dGVyczogXCJYXFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q1wiXG59LCB7XG4gIGJhc2U6ICdZJyxcbiAgbGV0dGVyczogXCJZXFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx4RERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXCJcbn0sIHtcbiAgYmFzZTogJ1onLFxuICBsZXR0ZXJzOiBcIlpcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXCJcbn0sIHtcbiAgYmFzZTogJ2EnLFxuICBsZXR0ZXJzOiBcImFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHhFMFxceEUxXFx4RTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx4RTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxceEU0XFx1MDFERlxcdTFFQTNcXHhFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXCJcbn0sIHtcbiAgYmFzZTogJ2FhJyxcbiAgbGV0dGVyczogXCJcXHVBNzMzXCJcbn0sIHtcbiAgYmFzZTogJ2FlJyxcbiAgbGV0dGVyczogXCJcXHhFNlxcdTAxRkRcXHUwMUUzXCJcbn0sIHtcbiAgYmFzZTogJ2FvJyxcbiAgbGV0dGVyczogXCJcXHVBNzM1XCJcbn0sIHtcbiAgYmFzZTogJ2F1JyxcbiAgbGV0dGVyczogXCJcXHVBNzM3XCJcbn0sIHtcbiAgYmFzZTogJ2F2JyxcbiAgbGV0dGVyczogXCJcXHVBNzM5XFx1QTczQlwiXG59LCB7XG4gIGJhc2U6ICdheScsXG4gIGxldHRlcnM6IFwiXFx1QTczRFwiXG59LCB7XG4gIGJhc2U6ICdiJyxcbiAgbGV0dGVyczogXCJiXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNcIlxufSwge1xuICBiYXNlOiAnYycsXG4gIGxldHRlcnM6IFwiY1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxceEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRcIlxufSwge1xuICBiYXNlOiAnZCcsXG4gIGxldHRlcnM6IFwiZFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FcIlxufSwge1xuICBiYXNlOiAnZHonLFxuICBsZXR0ZXJzOiBcIlxcdTAxRjNcXHUwMUM2XCJcbn0sIHtcbiAgYmFzZTogJ2UnLFxuICBsZXR0ZXJzOiBcImVcXHUyNEQ0XFx1RkY0NVxceEU4XFx4RTlcXHhFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHhFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXCJcbn0sIHtcbiAgYmFzZTogJ2YnLFxuICBsZXR0ZXJzOiBcImZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q1wiXG59LCB7XG4gIGJhc2U6ICdnJyxcbiAgbGV0dGVyczogXCJnXFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZcIlxufSwge1xuICBiYXNlOiAnaCcsXG4gIGxldHRlcnM6IFwiaFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XCJcbn0sIHtcbiAgYmFzZTogJ2h2JyxcbiAgbGV0dGVyczogXCJcXHUwMTk1XCJcbn0sIHtcbiAgYmFzZTogJ2knLFxuICBsZXR0ZXJzOiBcImlcXHUyNEQ4XFx1RkY0OVxceEVDXFx4RURcXHhFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxceEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMVwiXG59LCB7XG4gIGJhc2U6ICdqJyxcbiAgbGV0dGVyczogXCJqXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDlcIlxufSwge1xuICBiYXNlOiAnaycsXG4gIGxldHRlcnM6IFwia1xcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNcIlxufSwge1xuICBiYXNlOiAnbCcsXG4gIGxldHRlcnM6IFwibFxcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N1wiXG59LCB7XG4gIGJhc2U6ICdsaicsXG4gIGxldHRlcnM6IFwiXFx1MDFDOVwiXG59LCB7XG4gIGJhc2U6ICdtJyxcbiAgbGV0dGVyczogXCJtXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2RlwiXG59LCB7XG4gIGJhc2U6ICduJyxcbiAgbGV0dGVyczogXCJuXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxceEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVcIlxufSwge1xuICBiYXNlOiAnbmonLFxuICBsZXR0ZXJzOiBcIlxcdTAxQ0NcIlxufSwge1xuICBiYXNlOiAnbycsXG4gIGxldHRlcnM6IFwib1xcdTI0REVcXHVGRjRGXFx4RjJcXHhGM1xceEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxceEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx4RjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx4RjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NVwiXG59LCB7XG4gIGJhc2U6ICdvaScsXG4gIGxldHRlcnM6IFwiXFx1MDFBM1wiXG59LCB7XG4gIGJhc2U6ICdvdScsXG4gIGxldHRlcnM6IFwiXFx1MDIyM1wiXG59LCB7XG4gIGJhc2U6ICdvbycsXG4gIGxldHRlcnM6IFwiXFx1QTc0RlwiXG59LCB7XG4gIGJhc2U6ICdwJyxcbiAgbGV0dGVyczogXCJwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XCJcbn0sIHtcbiAgYmFzZTogJ3EnLFxuICBsZXR0ZXJzOiBcInFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OVwiXG59LCB7XG4gIGJhc2U6ICdyJyxcbiAgbGV0dGVyczogXCJyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M1wiXG59LCB7XG4gIGJhc2U6ICdzJyxcbiAgbGV0dGVyczogXCJzXFx1MjRFMlxcdUZGNTNcXHhERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXCJcbn0sIHtcbiAgYmFzZTogJ3QnLFxuICBsZXR0ZXJzOiBcInRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODdcIlxufSwge1xuICBiYXNlOiAndHonLFxuICBsZXR0ZXJzOiBcIlxcdUE3MjlcIlxufSwge1xuICBiYXNlOiAndScsXG4gIGxldHRlcnM6IFwidVxcdTI0RTRcXHVGRjU1XFx4RjlcXHhGQVxceEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHhGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODlcIlxufSwge1xuICBiYXNlOiAndicsXG4gIGxldHRlcnM6IFwidlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENcIlxufSwge1xuICBiYXNlOiAndnknLFxuICBsZXR0ZXJzOiBcIlxcdUE3NjFcIlxufSwge1xuICBiYXNlOiAndycsXG4gIGxldHRlcnM6IFwid1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNcIlxufSwge1xuICBiYXNlOiAneCcsXG4gIGxldHRlcnM6IFwieFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERcIlxufSwge1xuICBiYXNlOiAneScsXG4gIGxldHRlcnM6IFwieVxcdTI0RThcXHVGRjU5XFx1MUVGM1xceEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxceEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXCJcbn0sIHtcbiAgYmFzZTogJ3onLFxuICBsZXR0ZXJzOiBcInpcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXCJcbn1dO1xudmFyIGFueURpYWNyaXRpYyA9IG5ldyBSZWdFeHAoJ1snICsgZGlhY3JpdGljcy5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgcmV0dXJuIGQubGV0dGVycztcbn0pLmpvaW4oJycpICsgJ10nLCAnZycpO1xudmFyIGRpYWNyaXRpY1RvQmFzZSA9IHt9O1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IGRpYWNyaXRpY3MubGVuZ3RoOyBpKyspIHtcbiAgdmFyIGRpYWNyaXRpYyA9IGRpYWNyaXRpY3NbaV07XG5cbiAgZm9yICh2YXIgaiA9IDA7IGogPCBkaWFjcml0aWMubGV0dGVycy5sZW5ndGg7IGorKykge1xuICAgIGRpYWNyaXRpY1RvQmFzZVtkaWFjcml0aWMubGV0dGVyc1tqXV0gPSBkaWFjcml0aWMuYmFzZTtcbiAgfVxufVxuXG52YXIgc3RyaXBEaWFjcml0aWNzID0gZnVuY3Rpb24gc3RyaXBEaWFjcml0aWNzKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoYW55RGlhY3JpdGljLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZGlhY3JpdGljVG9CYXNlW21hdGNoXTtcbiAgfSk7XG59O1xuXG52YXIgbWVtb2l6ZWRTdHJpcERpYWNyaXRpY3NGb3JJbnB1dCA9IG1lbW9pemVPbmUoc3RyaXBEaWFjcml0aWNzKTtcblxudmFyIHRyaW1TdHJpbmcgPSBmdW5jdGlvbiB0cmltU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbn07XG5cbnZhciBkZWZhdWx0U3RyaW5naWZ5ID0gZnVuY3Rpb24gZGVmYXVsdFN0cmluZ2lmeShvcHRpb24pIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG9wdGlvbi5sYWJlbCwgXCIgXCIpLmNvbmNhdChvcHRpb24udmFsdWUpO1xufTtcblxudmFyIGNyZWF0ZUZpbHRlciA9IGZ1bmN0aW9uIGNyZWF0ZUZpbHRlcihjb25maWcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb24sIHJhd0lucHV0KSB7XG4gICAgdmFyIF9pZ25vcmVDYXNlJGlnbm9yZUFjYyA9IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIGlnbm9yZUNhc2U6IHRydWUsXG4gICAgICBpZ25vcmVBY2NlbnRzOiB0cnVlLFxuICAgICAgc3RyaW5naWZ5OiBkZWZhdWx0U3RyaW5naWZ5LFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIG1hdGNoRnJvbTogJ2FueSdcbiAgICB9LCBjb25maWcpLFxuICAgICAgICBpZ25vcmVDYXNlID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLmlnbm9yZUNhc2UsXG4gICAgICAgIGlnbm9yZUFjY2VudHMgPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MuaWdub3JlQWNjZW50cyxcbiAgICAgICAgc3RyaW5naWZ5ID0gX2lnbm9yZUNhc2UkaWdub3JlQWNjLnN0cmluZ2lmeSxcbiAgICAgICAgdHJpbSA9IF9pZ25vcmVDYXNlJGlnbm9yZUFjYy50cmltLFxuICAgICAgICBtYXRjaEZyb20gPSBfaWdub3JlQ2FzZSRpZ25vcmVBY2MubWF0Y2hGcm9tO1xuXG4gICAgdmFyIGlucHV0ID0gdHJpbSA/IHRyaW1TdHJpbmcocmF3SW5wdXQpIDogcmF3SW5wdXQ7XG4gICAgdmFyIGNhbmRpZGF0ZSA9IHRyaW0gPyB0cmltU3RyaW5nKHN0cmluZ2lmeShvcHRpb24pKSA6IHN0cmluZ2lmeShvcHRpb24pO1xuXG4gICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmIChpZ25vcmVBY2NlbnRzKSB7XG4gICAgICBpbnB1dCA9IG1lbW9pemVkU3RyaXBEaWFjcml0aWNzRm9ySW5wdXQoaW5wdXQpO1xuICAgICAgY2FuZGlkYXRlID0gc3RyaXBEaWFjcml0aWNzKGNhbmRpZGF0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoRnJvbSA9PT0gJ3N0YXJ0JyA/IGNhbmRpZGF0ZS5zdWJzdHIoMCwgaW5wdXQubGVuZ3RoKSA9PT0gaW5wdXQgOiBjYW5kaWRhdGUuaW5kZXhPZihpbnB1dCkgPiAtMTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIER1bW15SW5wdXQoX3JlZikge1xuICBfcmVmLmluO1xuICAgICAgX3JlZi5vdXQ7XG4gICAgICBfcmVmLm9uRXhpdGVkO1xuICAgICAgX3JlZi5hcHBlYXI7XG4gICAgICBfcmVmLmVudGVyO1xuICAgICAgX3JlZi5leGl0O1xuICAgICAgdmFyIGlubmVyUmVmID0gX3JlZi5pbm5lclJlZjtcbiAgICAgIF9yZWYuZW1vdGlvbjtcbiAgICAgIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJpblwiLCBcIm91dFwiLCBcIm9uRXhpdGVkXCIsIFwiYXBwZWFyXCIsIFwiZW50ZXJcIiwgXCJleGl0XCIsIFwiaW5uZXJSZWZcIiwgXCJlbW90aW9uXCJdKTtcblxuICByZXR1cm4ganN4KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogaW5uZXJSZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjc3M6IC8qI19fUFVSRV9fKi9jc3Moe1xuICAgICAgbGFiZWw6ICdkdW1teUlucHV0JyxcbiAgICAgIC8vIGdldCByaWQgb2YgYW55IGRlZmF1bHQgc3R5bGVzXG4gICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgIG91dGxpbmU6IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgLy8gaW1wb3J0YW50ISB3aXRob3V0IGB3aWR0aGAgYnJvd3NlcnMgd29uJ3QgYWxsb3cgZm9jdXNcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgLy8gcmVtb3ZlIGN1cnNvciBvbiBkZXNrdG9wXG4gICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gbW9iaWxlIHdoaWxzdCBtYWludGFpbmluZyBcInNjcm9sbCBpbnRvIHZpZXdcIiBiZWhhdmlvdXJcbiAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgICB9LCBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIlwiIDogXCI7bGFiZWw6RHVtbXlJbnB1dDtcIiwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCJcIiA6IFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtSMWJXMTVTVzV3ZFhRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJiVUpOSWl3aVptbHNaU0k2SWtSMWJXMTVTVzV3ZFhRdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQVpteHZkMXh1THlvcUlFQnFjM2dnYW5ONElDb3ZYRzVwYlhCdmNuUWdleUJxYzNnZ2ZTQm1jbTl0SUNkQVpXMXZkR2x2Ymk5eVpXRmpkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUVSMWJXMTVTVzV3ZFhRb2UxeHVJQ0JwYmpvZ2FXNVFjbTl3TEZ4dUlDQnZkWFFzWEc0Z0lHOXVSWGhwZEdWa0xGeHVJQ0JoY0hCbFlYSXNYRzRnSUdWdWRHVnlMRnh1SUNCbGVHbDBMRnh1SUNCcGJtNWxjbEpsWml4Y2JpQWdaVzF2ZEdsdmJpeGNiaUFnTGk0dWNISnZjSE5jYm4wNklHRnVlU2tnZTF4dUlDQnlaWFIxY200Z0tGeHVJQ0FnSUR4cGJuQjFkRnh1SUNBZ0lDQWdjbVZtUFh0cGJtNWxjbEpsWm4xY2JpQWdJQ0FnSUhzdUxpNXdjbTl3YzMxY2JpQWdJQ0FnSUdOemN6MTdlMXh1SUNBZ0lDQWdJQ0JzWVdKbGJEb2dKMlIxYlcxNVNXNXdkWFFuTEZ4dUlDQWdJQ0FnSUNBdkx5Qm5aWFFnY21sa0lHOW1JR0Z1ZVNCa1pXWmhkV3gwSUhOMGVXeGxjMXh1SUNBZ0lDQWdJQ0JpWVdOclozSnZkVzVrT2lBd0xGeHVJQ0FnSUNBZ0lDQmliM0prWlhJNklEQXNYRzRnSUNBZ0lDQWdJR1p2Ym5SVGFYcGxPaUFuYVc1b1pYSnBkQ2NzWEc0Z0lDQWdJQ0FnSUc5MWRHeHBibVU2SURBc1hHNGdJQ0FnSUNBZ0lIQmhaR1JwYm1jNklEQXNYRzRnSUNBZ0lDQWdJQzh2SUdsdGNHOXlkR0Z1ZENFZ2QybDBhRzkxZENCZ2QybGtkR2hnSUdKeWIzZHpaWEp6SUhkdmJpZDBJR0ZzYkc5M0lHWnZZM1Z6WEc0Z0lDQWdJQ0FnSUhkcFpIUm9PaUF4TEZ4dVhHNGdJQ0FnSUNBZ0lDOHZJSEpsYlc5MlpTQmpkWEp6YjNJZ2IyNGdaR1Z6YTNSdmNGeHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ0ozUnlZVzV6Y0dGeVpXNTBKeXhjYmx4dUlDQWdJQ0FnSUNBdkx5QnlaVzF2ZG1VZ1kzVnljMjl5SUc5dUlHMXZZbWxzWlNCM2FHbHNjM1FnYldGcGJuUmhhVzVwYm1jZ1hDSnpZM0p2Ykd3Z2FXNTBieUIyYVdWM1hDSWdZbVZvWVhacGIzVnlYRzRnSUNBZ0lDQWdJR3hsWm5RNklDMHhNREFzWEc0Z0lDQWdJQ0FnSUc5d1lXTnBkSGs2SURBc1hHNGdJQ0FnSUNBZ0lIQnZjMmwwYVc5dU9pQW5jbVZzWVhScGRtVW5MRnh1SUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTA2SUNkelkyRnNaU2d3S1Njc1hHNGdJQ0FnSUNCOWZWeHVJQ0FnSUM4K1hHNGdJQ2s3WEc1OVhHNGlYWDA9ICovXCIpXG4gIH0pKTtcbn1cblxudmFyIGNhbmNlbFNjcm9sbCA9IGZ1bmN0aW9uIGNhbmNlbFNjcm9sbChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn07XG5cbmZ1bmN0aW9uIHVzZVNjcm9sbENhcHR1cmUoX3JlZikge1xuICB2YXIgaXNFbmFibGVkID0gX3JlZi5pc0VuYWJsZWQsXG4gICAgICBvbkJvdHRvbUFycml2ZSA9IF9yZWYub25Cb3R0b21BcnJpdmUsXG4gICAgICBvbkJvdHRvbUxlYXZlID0gX3JlZi5vbkJvdHRvbUxlYXZlLFxuICAgICAgb25Ub3BBcnJpdmUgPSBfcmVmLm9uVG9wQXJyaXZlLFxuICAgICAgb25Ub3BMZWF2ZSA9IF9yZWYub25Ub3BMZWF2ZTtcbiAgdmFyIGlzQm90dG9tID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIGlzVG9wID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIHRvdWNoU3RhcnQgPSB1c2VSZWYoMCk7XG4gIHZhciBzY3JvbGxUYXJnZXQgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVFdmVudERlbHRhID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50LCBkZWx0YSkge1xuICAgIC8vIFJlZmVyZW5jZSBzaG91bGQgbmV2ZXIgYmUgYG51bGxgIGF0IHRoaXMgcG9pbnQsIGJ1dCBmbG93IGNvbXBsYWlucyBvdGhlcndpc2VcbiAgICBpZiAoc2Nyb2xsVGFyZ2V0LmN1cnJlbnQgPT09IG51bGwpIHJldHVybjtcbiAgICB2YXIgX3Njcm9sbFRhcmdldCRjdXJyZW50ID0gc2Nyb2xsVGFyZ2V0LmN1cnJlbnQsXG4gICAgICAgIHNjcm9sbFRvcCA9IF9zY3JvbGxUYXJnZXQkY3VycmVudC5zY3JvbGxUb3AsXG4gICAgICAgIHNjcm9sbEhlaWdodCA9IF9zY3JvbGxUYXJnZXQkY3VycmVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGNsaWVudEhlaWdodCA9IF9zY3JvbGxUYXJnZXQkY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgdmFyIHRhcmdldCA9IHNjcm9sbFRhcmdldC5jdXJyZW50O1xuICAgIHZhciBpc0RlbHRhUG9zaXRpdmUgPSBkZWx0YSA+IDA7XG4gICAgdmFyIGF2YWlsYWJsZVNjcm9sbCA9IHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCAtIHNjcm9sbFRvcDtcbiAgICB2YXIgc2hvdWxkQ2FuY2VsU2Nyb2xsID0gZmFsc2U7IC8vIHJlc2V0IGJvdHRvbS90b3AgZmxhZ3NcblxuICAgIGlmIChhdmFpbGFibGVTY3JvbGwgPiBkZWx0YSAmJiBpc0JvdHRvbS5jdXJyZW50KSB7XG4gICAgICBpZiAob25Cb3R0b21MZWF2ZSkgb25Cb3R0b21MZWF2ZShldmVudCk7XG4gICAgICBpc0JvdHRvbS5jdXJyZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiBpc1RvcC5jdXJyZW50KSB7XG4gICAgICBpZiAob25Ub3BMZWF2ZSkgb25Ub3BMZWF2ZShldmVudCk7XG4gICAgICBpc1RvcC5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSAvLyBib3R0b20gbGltaXRcblxuXG4gICAgaWYgKGlzRGVsdGFQb3NpdGl2ZSAmJiBkZWx0YSA+IGF2YWlsYWJsZVNjcm9sbCkge1xuICAgICAgaWYgKG9uQm90dG9tQXJyaXZlICYmICFpc0JvdHRvbS5jdXJyZW50KSB7XG4gICAgICAgIG9uQm90dG9tQXJyaXZlKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IHNjcm9sbEhlaWdodDtcbiAgICAgIHNob3VsZENhbmNlbFNjcm9sbCA9IHRydWU7XG4gICAgICBpc0JvdHRvbS5jdXJyZW50ID0gdHJ1ZTsgLy8gdG9wIGxpbWl0XG4gICAgfSBlbHNlIGlmICghaXNEZWx0YVBvc2l0aXZlICYmIC1kZWx0YSA+IHNjcm9sbFRvcCkge1xuICAgICAgaWYgKG9uVG9wQXJyaXZlICYmICFpc1RvcC5jdXJyZW50KSB7XG4gICAgICAgIG9uVG9wQXJyaXZlKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0LnNjcm9sbFRvcCA9IDA7XG4gICAgICBzaG91bGRDYW5jZWxTY3JvbGwgPSB0cnVlO1xuICAgICAgaXNUb3AuY3VycmVudCA9IHRydWU7XG4gICAgfSAvLyBjYW5jZWwgc2Nyb2xsXG5cblxuICAgIGlmIChzaG91bGRDYW5jZWxTY3JvbGwpIHtcbiAgICAgIGNhbmNlbFNjcm9sbChldmVudCk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHZhciBvbldoZWVsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRXZlbnREZWx0YShldmVudCwgZXZlbnQuZGVsdGFZKTtcbiAgfSwgW2hhbmRsZUV2ZW50RGVsdGFdKTtcbiAgdmFyIG9uVG91Y2hTdGFydCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIHNldCB0b3VjaCBzdGFydCBzbyB3ZSBjYW4gY2FsY3VsYXRlIHRvdWNobW92ZSBkZWx0YVxuICAgIHRvdWNoU3RhcnQuY3VycmVudCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gIH0sIFtdKTtcbiAgdmFyIG9uVG91Y2hNb3ZlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGRlbHRhWSA9IHRvdWNoU3RhcnQuY3VycmVudCAtIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgaGFuZGxlRXZlbnREZWx0YShldmVudCwgZGVsdGFZKTtcbiAgfSwgW2hhbmRsZUV2ZW50RGVsdGFdKTtcbiAgdmFyIHN0YXJ0TGlzdGVuaW5nID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsKSB7XG4gICAgLy8gYmFpbCBlYXJseSBpZiBubyBlbGVtZW50IGlzIGF2YWlsYWJsZSB0byBhdHRhY2ggdG9cbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgdmFyIG5vdFBhc3NpdmUgPSBzdXBwb3J0c1Bhc3NpdmVFdmVudHMgPyB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTsgLy8gYWxsIHRoZSBpZiBzdGF0ZW1lbnRzIGFyZSB0byBhcHBlYXNlIEZsb3cg8J+YolxuXG4gICAgaWYgKHR5cGVvZiBlbC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uV2hlZWwsIG5vdFBhc3NpdmUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZWwuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgbm90UGFzc2l2ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlbC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgbm90UGFzc2l2ZSk7XG4gICAgfVxuICB9LCBbb25Ub3VjaE1vdmUsIG9uVG91Y2hTdGFydCwgb25XaGVlbF0pO1xuICB2YXIgc3RvcExpc3RlbmluZyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlbCkge1xuICAgIC8vIGJhaWwgZWFybHkgaWYgbm8gZWxlbWVudCBpcyBhdmFpbGFibGUgdG8gZGV0YWNoIGZyb21cbiAgICBpZiAoIWVsKSByZXR1cm47IC8vIGFsbCB0aGUgaWYgc3RhdGVtZW50cyBhcmUgdG8gYXBwZWFzZSBGbG93IPCfmKJcblxuICAgIGlmICh0eXBlb2YgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbldoZWVsLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlbC5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBlbC5yZW1vdmVFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuICAgIH1cbiAgfSwgW29uVG91Y2hNb3ZlLCBvblRvdWNoU3RhcnQsIG9uV2hlZWxdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuO1xuICAgIHZhciBlbGVtZW50ID0gc2Nyb2xsVGFyZ2V0LmN1cnJlbnQ7XG4gICAgc3RhcnRMaXN0ZW5pbmcoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0b3BMaXN0ZW5pbmcoZWxlbWVudCk7XG4gICAgfTtcbiAgfSwgW2lzRW5hYmxlZCwgc3RhcnRMaXN0ZW5pbmcsIHN0b3BMaXN0ZW5pbmddKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgc2Nyb2xsVGFyZ2V0LmN1cnJlbnQgPSBlbGVtZW50O1xuICB9O1xufVxuXG52YXIgU1RZTEVfS0VZUyA9IFsnYm94U2l6aW5nJywgJ2hlaWdodCcsICdvdmVyZmxvdycsICdwYWRkaW5nUmlnaHQnLCAncG9zaXRpb24nXTtcbnZhciBMT0NLX1NUWUxFUyA9IHtcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIC8vIGFjY291bnQgZm9yIHBvc3NpYmxlIGRlY2xhcmF0aW9uIGB3aWR0aDogMTAwJTtgIG9uIGJvZHlcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgaGVpZ2h0OiAnMTAwJSdcbn07XG5cbmZ1bmN0aW9uIHByZXZlbnRUb3VjaE1vdmUoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGFsbG93VG91Y2hNb3ZlKGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gcHJldmVudEluZXJ0aWFTY3JvbGwoKSB7XG4gIHZhciB0b3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgdmFyIHRvdGFsU2Nyb2xsID0gdGhpcy5zY3JvbGxIZWlnaHQ7XG4gIHZhciBjdXJyZW50U2Nyb2xsID0gdG9wICsgdGhpcy5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKHRvcCA9PT0gMCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gMTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2Nyb2xsID09PSB0b3RhbFNjcm9sbCkge1xuICAgIHRoaXMuc2Nyb2xsVG9wID0gdG9wIC0gMTtcbiAgfVxufSAvLyBgb250b3VjaHN0YXJ0YCBjaGVjayB3b3JrcyBvbiBtb3N0IGJyb3dzZXJzXG4vLyBgbWF4VG91Y2hQb2ludHNgIHdvcmtzIG9uIElFMTAvMTEgYW5kIFN1cmZhY2VcblxuXG5mdW5jdGlvbiBpc1RvdWNoRGV2aWNlKCkge1xuICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cztcbn1cblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG52YXIgYWN0aXZlU2Nyb2xsTG9ja3MgPSAwO1xudmFyIGxpc3RlbmVyT3B0aW9ucyA9IHtcbiAgY2FwdHVyZTogZmFsc2UsXG4gIHBhc3NpdmU6IGZhbHNlXG59O1xuZnVuY3Rpb24gdXNlU2Nyb2xsTG9jayhfcmVmKSB7XG4gIHZhciBpc0VuYWJsZWQgPSBfcmVmLmlzRW5hYmxlZCxcbiAgICAgIF9yZWYkYWNjb3VudEZvclNjcm9sbCA9IF9yZWYuYWNjb3VudEZvclNjcm9sbGJhcnMsXG4gICAgICBhY2NvdW50Rm9yU2Nyb2xsYmFycyA9IF9yZWYkYWNjb3VudEZvclNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkYWNjb3VudEZvclNjcm9sbDtcbiAgdmFyIG9yaWdpbmFsU3R5bGVzID0gdXNlUmVmKHt9KTtcbiAgdmFyIHNjcm9sbFRhcmdldCA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGFkZFNjcm9sbExvY2sgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICBpZiAoIWNhblVzZURPTSkgcmV0dXJuO1xuICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgIHZhciB0YXJnZXRTdHlsZSA9IHRhcmdldCAmJiB0YXJnZXQuc3R5bGU7XG5cbiAgICBpZiAoYWNjb3VudEZvclNjcm9sbGJhcnMpIHtcbiAgICAgIC8vIHN0b3JlIGFueSBzdHlsZXMgYWxyZWFkeSBhcHBsaWVkIHRvIHRoZSBib2R5XG4gICAgICBTVFlMRV9LRVlTLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsID0gdGFyZ2V0U3R5bGUgJiYgdGFyZ2V0U3R5bGVba2V5XTtcbiAgICAgICAgb3JpZ2luYWxTdHlsZXMuY3VycmVudFtrZXldID0gdmFsO1xuICAgICAgfSk7XG4gICAgfSAvLyBhcHBseSB0aGUgbG9jayBzdHlsZXMgYW5kIHBhZGRpbmcgaWYgdGhpcyBpcyB0aGUgZmlyc3Qgc2Nyb2xsIGxvY2tcblxuXG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgdmFyIGN1cnJlbnRQYWRkaW5nID0gcGFyc2VJbnQob3JpZ2luYWxTdHlsZXMuY3VycmVudC5wYWRkaW5nUmlnaHQsIDEwKSB8fCAwO1xuICAgICAgdmFyIGNsaWVudFdpZHRoID0gZG9jdW1lbnQuYm9keSA/IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggOiAwO1xuICAgICAgdmFyIGFkanVzdGVkUGFkZGluZyA9IHdpbmRvdy5pbm5lcldpZHRoIC0gY2xpZW50V2lkdGggKyBjdXJyZW50UGFkZGluZyB8fCAwO1xuICAgICAgT2JqZWN0LmtleXMoTE9DS19TVFlMRVMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsID0gTE9DS19TVFlMRVNba2V5XTtcblxuICAgICAgICBpZiAodGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgICB0YXJnZXRTdHlsZVtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRhcmdldFN0eWxlKSB7XG4gICAgICAgIHRhcmdldFN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KGFkanVzdGVkUGFkZGluZywgXCJweFwiKTtcbiAgICAgIH1cbiAgICB9IC8vIGFjY291bnQgZm9yIHRvdWNoIGRldmljZXNcblxuXG4gICAgaWYgKHRhcmdldCAmJiBpc1RvdWNoRGV2aWNlKCkpIHtcbiAgICAgIC8vIE1vYmlsZSBTYWZhcmkgaWdub3JlcyB7IG92ZXJmbG93OiBoaWRkZW4gfSBkZWNsYXJhdGlvbiBvbiB0aGUgYm9keS5cbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50VG91Y2hNb3ZlLCBsaXN0ZW5lck9wdGlvbnMpOyAvLyBBbGxvdyBzY3JvbGwgb24gcHJvdmlkZWQgdGFyZ2V0XG5cbiAgICAgIGlmICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcHJldmVudEluZXJ0aWFTY3JvbGwsIGxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRvdWNoU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGFsbG93VG91Y2hNb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gLy8gaW5jcmVtZW50IGFjdGl2ZSBzY3JvbGwgbG9ja3NcblxuXG4gICAgYWN0aXZlU2Nyb2xsTG9ja3MgKz0gMTtcbiAgfSwgW10pO1xuICB2YXIgcmVtb3ZlU2Nyb2xsTG9jayA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0b3VjaFNjcm9sbFRhcmdldCkge1xuICAgIGlmICghY2FuVXNlRE9NKSByZXR1cm47XG4gICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgdmFyIHRhcmdldFN0eWxlID0gdGFyZ2V0ICYmIHRhcmdldC5zdHlsZTsgLy8gc2FmZWx5IGRlY3JlbWVudCBhY3RpdmUgc2Nyb2xsIGxvY2tzXG5cbiAgICBhY3RpdmVTY3JvbGxMb2NrcyA9IE1hdGgubWF4KGFjdGl2ZVNjcm9sbExvY2tzIC0gMSwgMCk7IC8vIHJlYXBwbHkgb3JpZ2luYWwgYm9keSBzdHlsZXMsIGlmIGFueVxuXG4gICAgaWYgKGFjY291bnRGb3JTY3JvbGxiYXJzICYmIGFjdGl2ZVNjcm9sbExvY2tzIDwgMSkge1xuICAgICAgU1RZTEVfS0VZUy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbCA9IG9yaWdpbmFsU3R5bGVzLmN1cnJlbnRba2V5XTtcblxuICAgICAgICBpZiAodGFyZ2V0U3R5bGUpIHtcbiAgICAgICAgICB0YXJnZXRTdHlsZVtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIHJlbW92ZSB0b3VjaCBsaXN0ZW5lcnNcblxuXG4gICAgaWYgKHRhcmdldCAmJiBpc1RvdWNoRGV2aWNlKCkpIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50VG91Y2hNb3ZlLCBsaXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgICBpZiAodG91Y2hTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgdG91Y2hTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHByZXZlbnRJbmVydGlhU2Nyb2xsLCBsaXN0ZW5lck9wdGlvbnMpO1xuICAgICAgICB0b3VjaFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBhbGxvd1RvdWNoTW92ZSwgbGlzdGVuZXJPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzRW5hYmxlZCkgcmV0dXJuO1xuICAgIHZhciBlbGVtZW50ID0gc2Nyb2xsVGFyZ2V0LmN1cnJlbnQ7XG4gICAgYWRkU2Nyb2xsTG9jayhlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlU2Nyb2xsTG9jayhlbGVtZW50KTtcbiAgICB9O1xuICB9LCBbaXNFbmFibGVkLCBhZGRTY3JvbGxMb2NrLCByZW1vdmVTY3JvbGxMb2NrXSk7XG4gIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHNjcm9sbFRhcmdldC5jdXJyZW50ID0gZWxlbWVudDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX0VNT1RJT05fU1RSSU5HSUZJRURfQ1NTX0VSUk9SX18kMSgpIHsgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiOyB9XG5cbnZhciBibHVyU2VsZWN0SW5wdXQgPSBmdW5jdGlvbiBibHVyU2VsZWN0SW5wdXQoKSB7XG4gIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xufTtcblxudmFyIF9yZWYyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8ge1xuICBuYW1lOiBcIjFrZmRiMGVcIixcbiAgc3R5bGVzOiBcInBvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RvcDowXCJcbn0gOiB7XG4gIG5hbWU6IFwiYnA4Y3VhLVNjcm9sbE1hbmFnZXJcIixcbiAgc3R5bGVzOiBcInBvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3RvcDowO2xhYmVsOlNjcm9sbE1hbmFnZXI7XCIsXG4gIG1hcDogXCIvKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbE5qY205c2JFMWhibUZuWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJhMFJWSWl3aVptbHNaU0k2SWxOamNtOXNiRTFoYm1GblpYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkFabXh2ZDF4dUx5b3FJRUJxYzNnZ2FuTjRJQ292WEc1cGJYQnZjblFnZXlCcWMzZ2dmU0JtY205dElDZEFaVzF2ZEdsdmJpOXlaV0ZqZENjN1hHNXBiWEJ2Y25RZ1VtVmhZM1FzSUhzZ2RIbHdaU0JGYkdWdFpXNTBJSDBnWm5KdmJTQW5jbVZoWTNRbk8xeHVhVzF3YjNKMElIVnpaVk5qY205c2JFTmhjSFIxY21VZ1puSnZiU0FuTGk5MWMyVlRZM0p2Ykd4RFlYQjBkWEpsSnp0Y2JtbHRjRzl5ZENCMWMyVlRZM0p2Ykd4TWIyTnJJR1p5YjIwZ0p5NHZkWE5sVTJOeWIyeHNURzlqYXljN1hHNWNiblI1Y0dVZ1VtVm1RMkZzYkdKaFkyczhWRDRnUFNBb1ZDQjhJRzUxYkd3cElEMCtJSFp2YVdRN1hHNWNiblI1Y0dVZ1VISnZjSE1nUFNCN1hHNGdJR05vYVd4a2NtVnVPaUFvVW1WbVEyRnNiR0poWTJzOFNGUk5URVZzWlcxbGJuUStLU0E5UGlCRmJHVnRaVzUwUENvK0xGeHVJQ0JzYjJOclJXNWhZbXhsWkRvZ1ltOXZiR1ZoYml4Y2JpQWdZMkZ3ZEhWeVpVVnVZV0pzWldRNklHSnZiMnhsWVc0c1hHNGdJRzl1UW05MGRHOXRRWEp5YVhabFB6b2dLR1YyWlc1ME9pQlRlVzUwYUdWMGFXTkZkbVZ1ZER4SVZFMU1SV3hsYldWdWRENHBJRDArSUhadmFXUXNYRzRnSUc5dVFtOTBkRzl0VEdWaGRtVS9PaUFvWlhabGJuUTZJRk41Ym5Sb1pYUnBZMFYyWlc1MFBFaFVUVXhGYkdWdFpXNTBQaWtnUFQ0Z2RtOXBaQ3hjYmlBZ2IyNVViM0JCY25KcGRtVS9PaUFvWlhabGJuUTZJRk41Ym5Sb1pYUnBZMFYyWlc1MFBFaFVUVXhGYkdWdFpXNTBQaWtnUFQ0Z2RtOXBaQ3hjYmlBZ2IyNVViM0JNWldGMlpUODZJQ2hsZG1WdWREb2dVM2x1ZEdobGRHbGpSWFpsYm5ROFNGUk5URVZzWlcxbGJuUStLU0E5UGlCMmIybGtMRnh1ZlR0Y2JseHVZMjl1YzNRZ1lteDFjbE5sYkdWamRFbHVjSFYwSUQwZ0tDa2dQVDVjYmlBZ1pHOWpkVzFsYm5RdVlXTjBhWFpsUld4bGJXVnVkQ0FtSmlCa2IyTjFiV1Z1ZEM1aFkzUnBkbVZGYkdWdFpXNTBMbUpzZFhJb0tUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdVMk55YjJ4c1RXRnVZV2RsY2loN1hHNGdJR05vYVd4a2NtVnVMRnh1SUNCc2IyTnJSVzVoWW14bFpDeGNiaUFnWTJGd2RIVnlaVVZ1WVdKc1pXUWdQU0IwY25WbExGeHVJQ0J2YmtKdmRIUnZiVUZ5Y21sMlpTeGNiaUFnYjI1Q2IzUjBiMjFNWldGMlpTeGNiaUFnYjI1VWIzQkJjbkpwZG1Vc1hHNGdJRzl1Vkc5d1RHVmhkbVVzWEc1OU9pQlFjbTl3Y3lrZ2UxeHVJQ0JqYjI1emRDQnpaWFJUWTNKdmJHeERZWEIwZFhKbFZHRnlaMlYwSUQwZ2RYTmxVMk55YjJ4c1EyRndkSFZ5WlNoN1hHNGdJQ0FnYVhORmJtRmliR1ZrT2lCallYQjBkWEpsUlc1aFlteGxaQ3hjYmlBZ0lDQnZia0p2ZEhSdmJVRnljbWwyWlN4Y2JpQWdJQ0J2YmtKdmRIUnZiVXhsWVhabExGeHVJQ0FnSUc5dVZHOXdRWEp5YVhabExGeHVJQ0FnSUc5dVZHOXdUR1ZoZG1Vc1hHNGdJSDBwTzF4dUlDQmpiMjV6ZENCelpYUlRZM0p2Ykd4TWIyTnJWR0Z5WjJWMElEMGdkWE5sVTJOeWIyeHNURzlqYXloN0lHbHpSVzVoWW14bFpEb2diRzlqYTBWdVlXSnNaV1FnZlNrN1hHNWNiaUFnWTI5dWMzUWdkR0Z5WjJWMFVtVm1JRDBnWld4bGJXVnVkQ0E5UGlCN1hHNGdJQ0FnYzJWMFUyTnliMnhzUTJGd2RIVnlaVlJoY21kbGRDaGxiR1Z0Wlc1MEtUdGNiaUFnSUNCelpYUlRZM0p2Ykd4TWIyTnJWR0Z5WjJWMEtHVnNaVzFsYm5RcE8xeHVJQ0I5TzF4dVhHNGdJSEpsZEhWeWJpQW9YRzRnSUNBZ1BGSmxZV04wTGtaeVlXZHRaVzUwUGx4dUlDQWdJQ0FnZTJ4dlkydEZibUZpYkdWa0lDWW1JQ2hjYmlBZ0lDQWdJQ0FnUEdScGRseHVJQ0FnSUNBZ0lDQWdJRzl1UTJ4cFkyczllMkpzZFhKVFpXeGxZM1JKYm5CMWRIMWNiaUFnSUNBZ0lDQWdJQ0JqYzNNOWUzc2djRzl6YVhScGIyNDZJQ2RtYVhobFpDY3NJR3hsWm5RNklEQXNJR0p2ZEhSdmJUb2dNQ3dnY21sbmFIUTZJREFzSUhSdmNEb2dNQ0I5ZlZ4dUlDQWdJQ0FnSUNBdlBseHVJQ0FnSUNBZ0tYMWNiaUFnSUNBZ0lIdGphR2xzWkhKbGJpaDBZWEpuWlhSU1pXWXBmVnh1SUNBZ0lEd3ZVbVZoWTNRdVJuSmhaMjFsYm5RK1hHNGdJQ2s3WEc1OVhHNGlYWDA9ICovXCIsXG4gIHRvU3RyaW5nOiBfRU1PVElPTl9TVFJJTkdJRklFRF9DU1NfRVJST1JfXyQxXG59O1xuXG5mdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGxvY2tFbmFibGVkID0gX3JlZi5sb2NrRW5hYmxlZCxcbiAgICAgIF9yZWYkY2FwdHVyZUVuYWJsZWQgPSBfcmVmLmNhcHR1cmVFbmFibGVkLFxuICAgICAgY2FwdHVyZUVuYWJsZWQgPSBfcmVmJGNhcHR1cmVFbmFibGVkID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRjYXB0dXJlRW5hYmxlZCxcbiAgICAgIG9uQm90dG9tQXJyaXZlID0gX3JlZi5vbkJvdHRvbUFycml2ZSxcbiAgICAgIG9uQm90dG9tTGVhdmUgPSBfcmVmLm9uQm90dG9tTGVhdmUsXG4gICAgICBvblRvcEFycml2ZSA9IF9yZWYub25Ub3BBcnJpdmUsXG4gICAgICBvblRvcExlYXZlID0gX3JlZi5vblRvcExlYXZlO1xuICB2YXIgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldCA9IHVzZVNjcm9sbENhcHR1cmUoe1xuICAgIGlzRW5hYmxlZDogY2FwdHVyZUVuYWJsZWQsXG4gICAgb25Cb3R0b21BcnJpdmU6IG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmU6IG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmU6IG9uVG9wQXJyaXZlLFxuICAgIG9uVG9wTGVhdmU6IG9uVG9wTGVhdmVcbiAgfSk7XG4gIHZhciBzZXRTY3JvbGxMb2NrVGFyZ2V0ID0gdXNlU2Nyb2xsTG9jayh7XG4gICAgaXNFbmFibGVkOiBsb2NrRW5hYmxlZFxuICB9KTtcblxuICB2YXIgdGFyZ2V0UmVmID0gZnVuY3Rpb24gdGFyZ2V0UmVmKGVsZW1lbnQpIHtcbiAgICBzZXRTY3JvbGxDYXB0dXJlVGFyZ2V0KGVsZW1lbnQpO1xuICAgIHNldFNjcm9sbExvY2tUYXJnZXQoZWxlbWVudCk7XG4gIH07XG5cbiAgcmV0dXJuIGpzeChSZWFjdC5GcmFnbWVudCwgbnVsbCwgbG9ja0VuYWJsZWQgJiYganN4KFwiZGl2XCIsIHtcbiAgICBvbkNsaWNrOiBibHVyU2VsZWN0SW5wdXQsXG4gICAgY3NzOiBfcmVmMlxuICB9KSwgY2hpbGRyZW4odGFyZ2V0UmVmKSk7XG59XG5cbnZhciBmb3JtYXRHcm91cExhYmVsID0gZnVuY3Rpb24gZm9ybWF0R3JvdXBMYWJlbChncm91cCkge1xuICByZXR1cm4gZ3JvdXAubGFiZWw7XG59O1xudmFyIGdldE9wdGlvbkxhYmVsID0gZnVuY3Rpb24gZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB7XG4gIHJldHVybiBvcHRpb24ubGFiZWw7XG59O1xudmFyIGdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSB7XG4gIHJldHVybiBvcHRpb24udmFsdWU7XG59O1xudmFyIGlzT3B0aW9uRGlzYWJsZWQgPSBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbikge1xuICByZXR1cm4gISFvcHRpb24uaXNEaXNhYmxlZDtcbn07XG5cbnZhciBkZWZhdWx0U3R5bGVzID0ge1xuICBjbGVhckluZGljYXRvcjogY2xlYXJJbmRpY2F0b3JDU1MsXG4gIGNvbnRhaW5lcjogY29udGFpbmVyQ1NTLFxuICBjb250cm9sOiBjc3MkMSxcbiAgZHJvcGRvd25JbmRpY2F0b3I6IGRyb3Bkb3duSW5kaWNhdG9yQ1NTLFxuICBncm91cDogZ3JvdXBDU1MsXG4gIGdyb3VwSGVhZGluZzogZ3JvdXBIZWFkaW5nQ1NTLFxuICBpbmRpY2F0b3JzQ29udGFpbmVyOiBpbmRpY2F0b3JzQ29udGFpbmVyQ1NTLFxuICBpbmRpY2F0b3JTZXBhcmF0b3I6IGluZGljYXRvclNlcGFyYXRvckNTUyxcbiAgaW5wdXQ6IGlucHV0Q1NTLFxuICBsb2FkaW5nSW5kaWNhdG9yOiBsb2FkaW5nSW5kaWNhdG9yQ1NTLFxuICBsb2FkaW5nTWVzc2FnZTogbG9hZGluZ01lc3NhZ2VDU1MsXG4gIG1lbnU6IG1lbnVDU1MsXG4gIG1lbnVMaXN0OiBtZW51TGlzdENTUyxcbiAgbWVudVBvcnRhbDogbWVudVBvcnRhbENTUyxcbiAgbXVsdGlWYWx1ZTogbXVsdGlWYWx1ZUNTUyxcbiAgbXVsdGlWYWx1ZUxhYmVsOiBtdWx0aVZhbHVlTGFiZWxDU1MsXG4gIG11bHRpVmFsdWVSZW1vdmU6IG11bHRpVmFsdWVSZW1vdmVDU1MsXG4gIG5vT3B0aW9uc01lc3NhZ2U6IG5vT3B0aW9uc01lc3NhZ2VDU1MsXG4gIG9wdGlvbjogb3B0aW9uQ1NTLFxuICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJDU1MsXG4gIHNpbmdsZVZhbHVlOiBjc3MkMixcbiAgdmFsdWVDb250YWluZXI6IHZhbHVlQ29udGFpbmVyQ1NTXG59OyAvLyBNZXJnZSBVdGlsaXR5XG4vLyBBbGxvd3MgY29uc3VtZXJzIHRvIGV4dGVuZCBhIGJhc2UgU2VsZWN0IHdpdGggYWRkaXRpb25hbCBzdHlsZXNcblxuZnVuY3Rpb24gbWVyZ2VTdHlsZXMoc291cmNlKSB7XG4gIHZhciB0YXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gIC8vIGluaXRpYWxpemUgd2l0aCBzb3VyY2Ugc3R5bGVzXG4gIHZhciBzdHlsZXMgPSBfb2JqZWN0U3ByZWFkMih7fSwgc291cmNlKTsgLy8gbWFzc2FnZSBpbiB0YXJnZXQgc3R5bGVzXG5cblxuICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChzb3VyY2Vba2V5XSkge1xuICAgICAgc3R5bGVzW2tleV0gPSBmdW5jdGlvbiAocnNDc3MsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XShzb3VyY2Vba2V5XShyc0NzcywgcHJvcHMpLCBwcm9wcyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNba2V5XSA9IHRhcmdldFtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzdHlsZXM7XG59XG5cbnZhciBjb2xvcnMgPSB7XG4gIHByaW1hcnk6ICcjMjY4NEZGJyxcbiAgcHJpbWFyeTc1OiAnIzRDOUFGRicsXG4gIHByaW1hcnk1MDogJyNCMkQ0RkYnLFxuICBwcmltYXJ5MjU6ICcjREVFQkZGJyxcbiAgZGFuZ2VyOiAnI0RFMzUwQicsXG4gIGRhbmdlckxpZ2h0OiAnI0ZGQkRBRCcsXG4gIG5ldXRyYWwwOiAnaHNsKDAsIDAlLCAxMDAlKScsXG4gIG5ldXRyYWw1OiAnaHNsKDAsIDAlLCA5NSUpJyxcbiAgbmV1dHJhbDEwOiAnaHNsKDAsIDAlLCA5MCUpJyxcbiAgbmV1dHJhbDIwOiAnaHNsKDAsIDAlLCA4MCUpJyxcbiAgbmV1dHJhbDMwOiAnaHNsKDAsIDAlLCA3MCUpJyxcbiAgbmV1dHJhbDQwOiAnaHNsKDAsIDAlLCA2MCUpJyxcbiAgbmV1dHJhbDUwOiAnaHNsKDAsIDAlLCA1MCUpJyxcbiAgbmV1dHJhbDYwOiAnaHNsKDAsIDAlLCA0MCUpJyxcbiAgbmV1dHJhbDcwOiAnaHNsKDAsIDAlLCAzMCUpJyxcbiAgbmV1dHJhbDgwOiAnaHNsKDAsIDAlLCAyMCUpJyxcbiAgbmV1dHJhbDkwOiAnaHNsKDAsIDAlLCAxMCUpJ1xufTtcbnZhciBib3JkZXJSYWRpdXMgPSA0OyAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBjb25zaXN0ZW50IG1hcmdpbi9wYWRkaW5nIG9uIGVsZW1lbnRzXG5cbnZhciBiYXNlVW5pdCA9IDQ7IC8vIFRoZSBtaW5pbXVtIGhlaWdodCBvZiB0aGUgY29udHJvbFxuXG52YXIgY29udHJvbEhlaWdodCA9IDM4OyAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIGNvbnRyb2wgYW5kIG1lbnUgKi9cblxudmFyIG1lbnVHdXR0ZXIgPSBiYXNlVW5pdCAqIDI7XG52YXIgc3BhY2luZyA9IHtcbiAgYmFzZVVuaXQ6IGJhc2VVbml0LFxuICBjb250cm9sSGVpZ2h0OiBjb250cm9sSGVpZ2h0LFxuICBtZW51R3V0dGVyOiBtZW51R3V0dGVyXG59O1xudmFyIGRlZmF1bHRUaGVtZSA9IHtcbiAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gIGNvbG9yczogY29sb3JzLFxuICBzcGFjaW5nOiBzcGFjaW5nXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICAnYXJpYS1saXZlJzogJ3BvbGl0ZScsXG4gIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZTogdHJ1ZSxcbiAgYmx1cklucHV0T25TZWxlY3Q6IGlzVG91Y2hDYXBhYmxlKCksXG4gIGNhcHR1cmVNZW51U2Nyb2xsOiAhaXNUb3VjaENhcGFibGUoKSxcbiAgY2xvc2VNZW51T25TZWxlY3Q6IHRydWUsXG4gIGNsb3NlTWVudU9uU2Nyb2xsOiBmYWxzZSxcbiAgY29tcG9uZW50czoge30sXG4gIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcbiAgZXNjYXBlQ2xlYXJzVmFsdWU6IGZhbHNlLFxuICBmaWx0ZXJPcHRpb246IGNyZWF0ZUZpbHRlcigpLFxuICBmb3JtYXRHcm91cExhYmVsOiBmb3JtYXRHcm91cExhYmVsLFxuICBnZXRPcHRpb25MYWJlbDogZ2V0T3B0aW9uTGFiZWwsXG4gIGdldE9wdGlvblZhbHVlOiBnZXRPcHRpb25WYWx1ZSxcbiAgaXNEaXNhYmxlZDogZmFsc2UsXG4gIGlzTG9hZGluZzogZmFsc2UsXG4gIGlzTXVsdGk6IGZhbHNlLFxuICBpc1J0bDogZmFsc2UsXG4gIGlzU2VhcmNoYWJsZTogdHJ1ZSxcbiAgaXNPcHRpb25EaXNhYmxlZDogaXNPcHRpb25EaXNhYmxlZCxcbiAgbG9hZGluZ01lc3NhZ2U6IGZ1bmN0aW9uIGxvYWRpbmdNZXNzYWdlKCkge1xuICAgIHJldHVybiAnTG9hZGluZy4uLic7XG4gIH0sXG4gIG1heE1lbnVIZWlnaHQ6IDMwMCxcbiAgbWluTWVudUhlaWdodDogMTQwLFxuICBtZW51SXNPcGVuOiBmYWxzZSxcbiAgbWVudVBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1lbnVQb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgbWVudVNob3VsZEJsb2NrU2Nyb2xsOiBmYWxzZSxcbiAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3OiAhaXNNb2JpbGVEZXZpY2UoKSxcbiAgbm9PcHRpb25zTWVzc2FnZTogZnVuY3Rpb24gbm9PcHRpb25zTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gJ05vIG9wdGlvbnMnO1xuICB9LFxuICBvcGVuTWVudU9uRm9jdXM6IGZhbHNlLFxuICBvcGVuTWVudU9uQ2xpY2s6IHRydWUsXG4gIG9wdGlvbnM6IFtdLFxuICBwYWdlU2l6ZTogNSxcbiAgcGxhY2Vob2xkZXI6ICdTZWxlY3QuLi4nLFxuICBzY3JlZW5SZWFkZXJTdGF0dXM6IGZ1bmN0aW9uIHNjcmVlblJlYWRlclN0YXR1cyhfcmVmKSB7XG4gICAgdmFyIGNvdW50ID0gX3JlZi5jb3VudDtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoY291bnQsIFwiIHJlc3VsdFwiKS5jb25jYXQoY291bnQgIT09IDEgPyAncycgOiAnJywgXCIgYXZhaWxhYmxlXCIpO1xuICB9LFxuICBzdHlsZXM6IHt9LFxuICB0YWJJbmRleDogJzAnLFxuICB0YWJTZWxlY3RzVmFsdWU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHRvQ2F0ZWdvcml6ZWRPcHRpb24ocHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUsIGluZGV4KSB7XG4gIHZhciBpc0Rpc2FibGVkID0gX2lzT3B0aW9uRGlzYWJsZWQocHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuXG4gIHZhciBpc1NlbGVjdGVkID0gX2lzT3B0aW9uU2VsZWN0ZWQocHJvcHMsIG9wdGlvbiwgc2VsZWN0VmFsdWUpO1xuXG4gIHZhciBsYWJlbCA9IGdldE9wdGlvbkxhYmVsJDEocHJvcHMsIG9wdGlvbik7XG4gIHZhciB2YWx1ZSA9IGdldE9wdGlvblZhbHVlJDEocHJvcHMsIG9wdGlvbik7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ29wdGlvbicsXG4gICAgZGF0YTogb3B0aW9uLFxuICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGluZGV4OiBpbmRleFxuICB9O1xufVxuXG5mdW5jdGlvbiBidWlsZENhdGVnb3JpemVkT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpIHtcbiAgcmV0dXJuIHByb3BzLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChncm91cE9yT3B0aW9uLCBncm91cE9yT3B0aW9uSW5kZXgpIHtcbiAgICBpZiAoZ3JvdXBPck9wdGlvbi5vcHRpb25zKSB7XG4gICAgICB2YXIgY2F0ZWdvcml6ZWRPcHRpb25zID0gZ3JvdXBPck9wdGlvbi5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBvcHRpb25JbmRleCkge1xuICAgICAgICByZXR1cm4gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSwgb3B0aW9uSW5kZXgpO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChjYXRlZ29yaXplZE9wdGlvbikge1xuICAgICAgICByZXR1cm4gaXNGb2N1c2FibGUocHJvcHMsIGNhdGVnb3JpemVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNhdGVnb3JpemVkT3B0aW9ucy5sZW5ndGggPiAwID8ge1xuICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICBkYXRhOiBncm91cE9yT3B0aW9uLFxuICAgICAgICBvcHRpb25zOiBjYXRlZ29yaXplZE9wdGlvbnMsXG4gICAgICAgIGluZGV4OiBncm91cE9yT3B0aW9uSW5kZXhcbiAgICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGNhdGVnb3JpemVkT3B0aW9uID0gdG9DYXRlZ29yaXplZE9wdGlvbihwcm9wcywgZ3JvdXBPck9wdGlvbiwgc2VsZWN0VmFsdWUsIGdyb3VwT3JPcHRpb25JbmRleCk7XG4gICAgcmV0dXJuIGlzRm9jdXNhYmxlKHByb3BzLCBjYXRlZ29yaXplZE9wdGlvbikgPyBjYXRlZ29yaXplZE9wdGlvbiA6IHVuZGVmaW5lZDtcbiAgfSkgLy8gRmxvdyBsaW1pdGF0aW9uIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTQpXG4gIC5maWx0ZXIoZnVuY3Rpb24gKGNhdGVnb3JpemVkT3B0aW9uKSB7XG4gICAgcmV0dXJuICEhY2F0ZWdvcml6ZWRPcHRpb247XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBidWlsZEZvY3VzYWJsZU9wdGlvbnNGcm9tQ2F0ZWdvcml6ZWRPcHRpb25zKGNhdGVnb3JpemVkT3B0aW9ucykge1xuICByZXR1cm4gY2F0ZWdvcml6ZWRPcHRpb25zLnJlZHVjZShmdW5jdGlvbiAob3B0aW9uc0FjY3VtdWxhdG9yLCBjYXRlZ29yaXplZE9wdGlvbikge1xuICAgIGlmIChjYXRlZ29yaXplZE9wdGlvbi50eXBlID09PSAnZ3JvdXAnKSB7XG4gICAgICBvcHRpb25zQWNjdW11bGF0b3IucHVzaC5hcHBseShvcHRpb25zQWNjdW11bGF0b3IsIF90b0NvbnN1bWFibGVBcnJheShjYXRlZ29yaXplZE9wdGlvbi5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24uZGF0YTtcbiAgICAgIH0pKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnNBY2N1bXVsYXRvci5wdXNoKGNhdGVnb3JpemVkT3B0aW9uLmRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zQWNjdW11bGF0b3I7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gYnVpbGRGb2N1c2FibGVPcHRpb25zKHByb3BzLCBzZWxlY3RWYWx1ZSkge1xuICByZXR1cm4gYnVpbGRGb2N1c2FibGVPcHRpb25zRnJvbUNhdGVnb3JpemVkT3B0aW9ucyhidWlsZENhdGVnb3JpemVkT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gaXNGb2N1c2FibGUocHJvcHMsIGNhdGVnb3JpemVkT3B0aW9uKSB7XG4gIHZhciBfcHJvcHMkaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICBpbnB1dFZhbHVlID0gX3Byb3BzJGlucHV0VmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGlucHV0VmFsdWU7XG4gIHZhciBkYXRhID0gY2F0ZWdvcml6ZWRPcHRpb24uZGF0YSxcbiAgICAgIGlzU2VsZWN0ZWQgPSBjYXRlZ29yaXplZE9wdGlvbi5pc1NlbGVjdGVkLFxuICAgICAgbGFiZWwgPSBjYXRlZ29yaXplZE9wdGlvbi5sYWJlbCxcbiAgICAgIHZhbHVlID0gY2F0ZWdvcml6ZWRPcHRpb24udmFsdWU7XG4gIHJldHVybiAoIXNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMocHJvcHMpIHx8ICFpc1NlbGVjdGVkKSAmJiBfZmlsdGVyT3B0aW9uKHByb3BzLCB7XG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkYXRhOiBkYXRhXG4gIH0sIGlucHV0VmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0Rm9jdXNlZFZhbHVlKHN0YXRlLCBuZXh0U2VsZWN0VmFsdWUpIHtcbiAgdmFyIGZvY3VzZWRWYWx1ZSA9IHN0YXRlLmZvY3VzZWRWYWx1ZSxcbiAgICAgIGxhc3RTZWxlY3RWYWx1ZSA9IHN0YXRlLnNlbGVjdFZhbHVlO1xuICB2YXIgbGFzdEZvY3VzZWRJbmRleCA9IGxhc3RTZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG5cbiAgaWYgKGxhc3RGb2N1c2VkSW5kZXggPiAtMSkge1xuICAgIHZhciBuZXh0Rm9jdXNlZEluZGV4ID0gbmV4dFNlbGVjdFZhbHVlLmluZGV4T2YoZm9jdXNlZFZhbHVlKTtcblxuICAgIGlmIChuZXh0Rm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgIC8vIHRoZSBmb2N1c2VkIHZhbHVlIGlzIHN0aWxsIGluIHRoZSBzZWxlY3RWYWx1ZSwgcmV0dXJuIGl0XG4gICAgICByZXR1cm4gZm9jdXNlZFZhbHVlO1xuICAgIH0gZWxzZSBpZiAobGFzdEZvY3VzZWRJbmRleCA8IG5leHRTZWxlY3RWYWx1ZS5sZW5ndGgpIHtcbiAgICAgIC8vIHRoZSBmb2N1c2VkVmFsdWUgaXMgbm90IHByZXNlbnQgaW4gdGhlIG5leHQgc2VsZWN0VmFsdWUgYXJyYXkgYnlcbiAgICAgIC8vIHJlZmVyZW5jZSwgc28gcmV0dXJuIHRoZSBuZXcgdmFsdWUgYXQgdGhlIHNhbWUgaW5kZXhcbiAgICAgIHJldHVybiBuZXh0U2VsZWN0VmFsdWVbbGFzdEZvY3VzZWRJbmRleF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRGb2N1c2VkT3B0aW9uKHN0YXRlLCBvcHRpb25zKSB7XG4gIHZhciBsYXN0Rm9jdXNlZE9wdGlvbiA9IHN0YXRlLmZvY3VzZWRPcHRpb247XG4gIHJldHVybiBsYXN0Rm9jdXNlZE9wdGlvbiAmJiBvcHRpb25zLmluZGV4T2YobGFzdEZvY3VzZWRPcHRpb24pID4gLTEgPyBsYXN0Rm9jdXNlZE9wdGlvbiA6IG9wdGlvbnNbMF07XG59XG5cbnZhciBnZXRPcHRpb25MYWJlbCQxID0gZnVuY3Rpb24gZ2V0T3B0aW9uTGFiZWwocHJvcHMsIGRhdGEpIHtcbiAgcmV0dXJuIHByb3BzLmdldE9wdGlvbkxhYmVsKGRhdGEpO1xufTtcblxudmFyIGdldE9wdGlvblZhbHVlJDEgPSBmdW5jdGlvbiBnZXRPcHRpb25WYWx1ZShwcm9wcywgZGF0YSkge1xuICByZXR1cm4gcHJvcHMuZ2V0T3B0aW9uVmFsdWUoZGF0YSk7XG59O1xuXG5mdW5jdGlvbiBfaXNPcHRpb25EaXNhYmxlZChwcm9wcywgb3B0aW9uLCBzZWxlY3RWYWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHByb3BzLmlzT3B0aW9uRGlzYWJsZWQgPT09ICdmdW5jdGlvbicgPyBwcm9wcy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9pc09wdGlvblNlbGVjdGVkKHByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKSB7XG4gIGlmIChzZWxlY3RWYWx1ZS5pbmRleE9mKG9wdGlvbikgPiAtMSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiBwcm9wcy5pc09wdGlvblNlbGVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHByb3BzLmlzT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBzZWxlY3RWYWx1ZSk7XG4gIH1cblxuICB2YXIgY2FuZGlkYXRlID0gZ2V0T3B0aW9uVmFsdWUkMShwcm9wcywgb3B0aW9uKTtcbiAgcmV0dXJuIHNlbGVjdFZhbHVlLnNvbWUoZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uVmFsdWUkMShwcm9wcywgaSkgPT09IGNhbmRpZGF0ZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIF9maWx0ZXJPcHRpb24ocHJvcHMsIG9wdGlvbiwgaW5wdXRWYWx1ZSkge1xuICByZXR1cm4gcHJvcHMuZmlsdGVyT3B0aW9uID8gcHJvcHMuZmlsdGVyT3B0aW9uKG9wdGlvbiwgaW5wdXRWYWx1ZSkgOiB0cnVlO1xufVxuXG52YXIgc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyA9IGZ1bmN0aW9uIHNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMocHJvcHMpIHtcbiAgdmFyIGhpZGVTZWxlY3RlZE9wdGlvbnMgPSBwcm9wcy5oaWRlU2VsZWN0ZWRPcHRpb25zLFxuICAgICAgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGk7XG4gIGlmIChoaWRlU2VsZWN0ZWRPcHRpb25zID09PSB1bmRlZmluZWQpIHJldHVybiBpc011bHRpO1xuICByZXR1cm4gaGlkZVNlbGVjdGVkT3B0aW9ucztcbn07XG5cbnZhciBpbnN0YW5jZUlkID0gMTtcblxudmFyIFNlbGVjdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2VsZWN0LCBfQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFNlbGVjdCk7XG5cbiAgLy8gTWlzYy4gSW5zdGFuY2UgUHJvcGVydGllc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gVE9ET1xuICAvLyBSZWZzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBMaWZlY3ljbGVcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGZ1bmN0aW9uIFNlbGVjdChfcHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VsZWN0KTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX3Byb3BzKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFyaWFTZWxlY3Rpb246IG51bGwsXG4gICAgICBmb2N1c2VkT3B0aW9uOiBudWxsLFxuICAgICAgZm9jdXNlZFZhbHVlOiBudWxsLFxuICAgICAgaW5wdXRJc0hpZGRlbjogZmFsc2UsXG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgc2VsZWN0VmFsdWU6IFtdLFxuICAgICAgY2xlYXJGb2N1c1ZhbHVlT25VcGRhdGU6IGZhbHNlLFxuICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiB1bmRlZmluZWQsXG4gICAgICBwcmV2UHJvcHM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IGZhbHNlO1xuICAgIF90aGlzLmlzQ29tcG9zaW5nID0gZmFsc2U7XG4gICAgX3RoaXMuY29tbW9uUHJvcHMgPSB2b2lkIDA7XG4gICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgX3RoaXMuaW5pdGlhbFRvdWNoWSA9IDA7XG4gICAgX3RoaXMuaW5zdGFuY2VQcmVmaXggPSAnJztcbiAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuICAgIF90aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlID0gZmFsc2U7XG4gICAgX3RoaXMudXNlcklzRHJhZ2dpbmcgPSB2b2lkIDA7XG4gICAgX3RoaXMuY29udHJvbFJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5nZXRDb250cm9sUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuY29udHJvbFJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZm9jdXNlZE9wdGlvblJlZiA9IG51bGw7XG5cbiAgICBfdGhpcy5nZXRGb2N1c2VkT3B0aW9uUmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgX3RoaXMuZm9jdXNlZE9wdGlvblJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMubWVudUxpc3RSZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0TWVudUxpc3RSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5tZW51TGlzdFJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuaW5wdXRSZWYgPSBudWxsO1xuXG4gICAgX3RoaXMuZ2V0SW5wdXRSZWYgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICBfdGhpcy5pbnB1dFJlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgX3RoaXMuZm9jdXMgPSBfdGhpcy5mb2N1c0lucHV0O1xuICAgIF90aGlzLmJsdXIgPSBfdGhpcy5ibHVySW5wdXQ7XG5cbiAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMubmFtZTtcbiAgICAgIGFjdGlvbk1ldGEubmFtZSA9IG5hbWU7XG5cbiAgICAgIF90aGlzLmFyaWFPbkNoYW5nZShuZXdWYWx1ZSwgYWN0aW9uTWV0YSk7XG5cbiAgICAgIG9uQ2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdzZXQtdmFsdWUnO1xuICAgICAgdmFyIG9wdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNsb3NlTWVudU9uU2VsZWN0ID0gX3RoaXMkcHJvcHMyLmNsb3NlTWVudU9uU2VsZWN0LFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczIuaXNNdWx0aTtcblxuICAgICAgX3RoaXMub25JbnB1dENoYW5nZSgnJywge1xuICAgICAgICBhY3Rpb246ICdzZXQtdmFsdWUnXG4gICAgICB9KTtcblxuICAgICAgaWYgKGNsb3NlTWVudU9uU2VsZWN0KSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6ICFpc011bHRpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9IC8vIHdoZW4gdGhlIHNlbGVjdCB2YWx1ZSBzaG91bGQgY2hhbmdlLCB3ZSBzaG91bGQgcmVzZXQgZm9jdXNlZFZhbHVlXG5cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZTogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCB7XG4gICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICBvcHRpb246IG9wdGlvblxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNlbGVjdE9wdGlvbiA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGJsdXJJbnB1dE9uU2VsZWN0ID0gX3RoaXMkcHJvcHMzLmJsdXJJbnB1dE9uU2VsZWN0LFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczMuaXNNdWx0aSxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMzLm5hbWU7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcblxuICAgICAgdmFyIGRlc2VsZWN0ZWQgPSBpc011bHRpICYmIF90aGlzLmlzT3B0aW9uU2VsZWN0ZWQobmV3VmFsdWUsIHNlbGVjdFZhbHVlKTtcblxuICAgICAgdmFyIGlzRGlzYWJsZWQgPSBfdGhpcy5pc09wdGlvbkRpc2FibGVkKG5ld1ZhbHVlLCBzZWxlY3RWYWx1ZSk7XG5cbiAgICAgIGlmIChkZXNlbGVjdGVkKSB7XG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSBfdGhpcy5nZXRPcHRpb25WYWx1ZShuZXdWYWx1ZSk7XG5cbiAgICAgICAgX3RoaXMuc2V0VmFsdWUoc2VsZWN0VmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmdldE9wdGlvblZhbHVlKGkpICE9PSBjYW5kaWRhdGU7XG4gICAgICAgIH0pLCAnZGVzZWxlY3Qtb3B0aW9uJywgbmV3VmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICghaXNEaXNhYmxlZCkge1xuICAgICAgICAvLyBTZWxlY3Qgb3B0aW9uIGlmIG9wdGlvbiBpcyBub3QgZGlzYWJsZWRcbiAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICBfdGhpcy5zZXRWYWx1ZShbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHNlbGVjdFZhbHVlKSwgW25ld1ZhbHVlXSksICdzZWxlY3Qtb3B0aW9uJywgbmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLnNldFZhbHVlKG5ld1ZhbHVlLCAnc2VsZWN0LW9wdGlvbicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5hcmlhT25DaGFuZ2UobmV3VmFsdWUsIHtcbiAgICAgICAgICBhY3Rpb246ICdzZWxlY3Qtb3B0aW9uJyxcbiAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGJsdXJJbnB1dE9uU2VsZWN0KSB7XG4gICAgICAgIF90aGlzLmJsdXJJbnB1dCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZW1vdmVWYWx1ZSA9IGZ1bmN0aW9uIChyZW1vdmVkVmFsdWUpIHtcbiAgICAgIHZhciBpc011bHRpID0gX3RoaXMucHJvcHMuaXNNdWx0aTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuXG4gICAgICB2YXIgY2FuZGlkYXRlID0gX3RoaXMuZ2V0T3B0aW9uVmFsdWUocmVtb3ZlZFZhbHVlKTtcblxuICAgICAgdmFyIG5ld1ZhbHVlQXJyYXkgPSBzZWxlY3RWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdldE9wdGlvblZhbHVlKGkpICE9PSBjYW5kaWRhdGU7XG4gICAgICB9KTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGlzTXVsdGkgPyBuZXdWYWx1ZUFycmF5IDogbmV3VmFsdWVBcnJheVswXSB8fCBudWxsO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSwge1xuICAgICAgICBhY3Rpb246ICdyZW1vdmUtdmFsdWUnLFxuICAgICAgICByZW1vdmVkVmFsdWU6IHJlbW92ZWRWYWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2xlYXJWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZShfdGhpcy5wcm9wcy5pc011bHRpID8gW10gOiBudWxsLCB7XG4gICAgICAgIGFjdGlvbjogJ2NsZWFyJyxcbiAgICAgICAgcmVtb3ZlZFZhbHVlczogc2VsZWN0VmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5wb3BWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpc011bHRpID0gX3RoaXMucHJvcHMuaXNNdWx0aTtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgdmFyIGxhc3RTZWxlY3RlZFZhbHVlID0gc2VsZWN0VmFsdWVbc2VsZWN0VmFsdWUubGVuZ3RoIC0gMV07XG4gICAgICB2YXIgbmV3VmFsdWVBcnJheSA9IHNlbGVjdFZhbHVlLnNsaWNlKDAsIHNlbGVjdFZhbHVlLmxlbmd0aCAtIDEpO1xuICAgICAgdmFyIG5ld1ZhbHVlID0gaXNNdWx0aSA/IG5ld1ZhbHVlQXJyYXkgOiBuZXdWYWx1ZUFycmF5WzBdIHx8IG51bGw7XG5cbiAgICAgIF90aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCB7XG4gICAgICAgIGFjdGlvbjogJ3BvcC12YWx1ZScsXG4gICAgICAgIHJlbW92ZWRWYWx1ZTogbGFzdFNlbGVjdGVkVmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzTmFtZXMuYXBwbHkodm9pZCAwLCBbX3RoaXMucHJvcHMuY2xhc3NOYW1lUHJlZml4XS5jb25jYXQoYXJncykpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRPcHRpb25MYWJlbCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICByZXR1cm4gZ2V0T3B0aW9uTGFiZWwkMShfdGhpcy5wcm9wcywgZGF0YSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldE9wdGlvblZhbHVlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHJldHVybiBnZXRPcHRpb25WYWx1ZSQxKF90aGlzLnByb3BzLCBkYXRhKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0U3R5bGVzID0gZnVuY3Rpb24gKGtleSwgcHJvcHMpIHtcbiAgICAgIHZhciBiYXNlID0gZGVmYXVsdFN0eWxlc1trZXldKHByb3BzKTtcbiAgICAgIGJhc2UuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgICAgdmFyIGN1c3RvbSA9IF90aGlzLnByb3BzLnN0eWxlc1trZXldO1xuICAgICAgcmV0dXJuIGN1c3RvbSA/IGN1c3RvbShiYXNlLCBwcm9wcykgOiBiYXNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRFbGVtZW50SWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KF90aGlzLmluc3RhbmNlUHJlZml4LCBcIi1cIikuY29uY2F0KGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRDb21wb25lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRDb21wb25lbnRzKF90aGlzLnByb3BzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYnVpbGRDYXRlZ29yaXplZE9wdGlvbnMoX3RoaXMucHJvcHMsIF90aGlzLnN0YXRlLnNlbGVjdFZhbHVlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q2F0ZWdvcml6ZWRPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm1lbnVJc09wZW4gPyBfdGhpcy5idWlsZENhdGVnb3JpemVkT3B0aW9ucygpIDogW107XG4gICAgfTtcblxuICAgIF90aGlzLmJ1aWxkRm9jdXNhYmxlT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBidWlsZEZvY3VzYWJsZU9wdGlvbnNGcm9tQ2F0ZWdvcml6ZWRPcHRpb25zKF90aGlzLmJ1aWxkQ2F0ZWdvcml6ZWRPcHRpb25zKCkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm1lbnVJc09wZW4gPyBfdGhpcy5idWlsZEZvY3VzYWJsZU9wdGlvbnMoKSA6IFtdO1xuICAgIH07XG5cbiAgICBfdGhpcy5hcmlhT25DaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYXJpYVNlbGVjdGlvbjogX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBhY3Rpb25NZXRhKVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uTWVudU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1lbnVNb3VzZU1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db250cm9sTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgb3Blbk1lbnVPbkNsaWNrID0gX3RoaXMucHJvcHMub3Blbk1lbnVPbkNsaWNrO1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmlzRm9jdXNlZCkge1xuICAgICAgICBpZiAob3Blbk1lbnVPbkNsaWNrKSB7XG4gICAgICAgICAgX3RoaXMub3BlbkFmdGVyRm9jdXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfSBlbHNlIGlmICghX3RoaXMucHJvcHMubWVudUlzT3Blbikge1xuICAgICAgICBpZiAob3Blbk1lbnVPbkNsaWNrKSB7XG4gICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICggLy8gJEZsb3dGaXhNZVxuICAgICAgICBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCAvLyAkRmxvd0ZpeE1lXG4gICAgICBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJiBldmVudC50YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyb3Bkb3duSW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLmlzRGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM0LmlzTXVsdGksXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNC5tZW51SXNPcGVuO1xuXG4gICAgICBfdGhpcy5mb2N1c0lucHV0KCk7XG5cbiAgICAgIGlmIChtZW51SXNPcGVuKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6ICFpc011bHRpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLm9uTWVudUNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBpZ25vcmUgbW91c2UgZXZlbnRzIHRoYXQgd2VyZW4ndCB0cmlnZ2VyZWQgYnkgdGhlIHByaW1hcnkgYnV0dG9uXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY2xlYXJWYWx1ZSgpO1xuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIF90aGlzLm9wZW5BZnRlckZvY3VzID0gZmFsc2U7XG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hlbmQnKSB7XG4gICAgICAgIF90aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5mb2N1c0lucHV0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vblNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5jbG9zZU1lbnVPblNjcm9sbCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc0RvY3VtZW50RWxlbWVudChldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgX3RoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLmNsb3NlTWVudU9uU2Nyb2xsKGV2ZW50KSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Db21wb3NpdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSB0cnVlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbXBvc2l0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IF9yZWYyLnRvdWNoZXM7XG4gICAgICB2YXIgdG91Y2ggPSB0b3VjaGVzICYmIHRvdWNoZXMuaXRlbSgwKTtcblxuICAgICAgaWYgKCF0b3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmluaXRpYWxUb3VjaFggPSB0b3VjaC5jbGllbnRYO1xuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWSA9IHRvdWNoLmNsaWVudFk7XG4gICAgICBfdGhpcy51c2VySXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoTW92ZSA9IGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIHRvdWNoZXMgPSBfcmVmMy50b3VjaGVzO1xuICAgICAgdmFyIHRvdWNoID0gdG91Y2hlcyAmJiB0b3VjaGVzLml0ZW0oMCk7XG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGVsdGFYID0gTWF0aC5hYnModG91Y2guY2xpZW50WCAtIF90aGlzLmluaXRpYWxUb3VjaFgpO1xuICAgICAgdmFyIGRlbHRhWSA9IE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSBfdGhpcy5pbml0aWFsVG91Y2hZKTtcbiAgICAgIHZhciBtb3ZlVGhyZXNob2xkID0gNTtcbiAgICAgIF90aGlzLnVzZXJJc0RyYWdnaW5nID0gZGVsdGFYID4gbW92ZVRocmVzaG9sZCB8fCBkZWx0YVkgPiBtb3ZlVGhyZXNob2xkO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjsgLy8gY2xvc2UgdGhlIG1lbnUgaWYgdGhlIHVzZXIgdGFwcyBvdXRzaWRlXG4gICAgICAvLyB3ZSdyZSBjaGVja2luZyBvbiBldmVudC50YXJnZXQgaGVyZSBpbnN0ZWFkIG9mIGV2ZW50LmN1cnJlbnRUYXJnZXQsIGJlY2F1c2Ugd2Ugd2FudCB0byBhc3NlcnQgaW5mb3JtYXRpb25cbiAgICAgIC8vIG9uIGV2ZW50cyBvbiBjaGlsZCBlbGVtZW50cywgbm90IHRoZSBkb2N1bWVudCAod2hpY2ggd2UndmUgYXR0YWNoZWQgdGhpcyBoYW5kbGVyIHRvKS5cblxuICAgICAgaWYgKF90aGlzLmNvbnRyb2xSZWYgJiYgIV90aGlzLmNvbnRyb2xSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBfdGhpcy5tZW51TGlzdFJlZiAmJiAhX3RoaXMubWVudUxpc3RSZWYuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICBfdGhpcy5ibHVySW5wdXQoKTtcbiAgICAgIH0gLy8gcmVzZXQgbW92ZSB2YXJzXG5cblxuICAgICAgX3RoaXMuaW5pdGlhbFRvdWNoWCA9IDA7XG4gICAgICBfdGhpcy5pbml0aWFsVG91Y2hZID0gMDtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Db250cm9sVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkNvbnRyb2xNb3VzZURvd24oZXZlbnQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy51c2VySXNEcmFnZ2luZykgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5vbkNsZWFySW5kaWNhdG9yTW91c2VEb3duKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvclRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMudXNlcklzRHJhZ2dpbmcpIHJldHVybjtcblxuICAgICAgX3RoaXMub25Ecm9wZG93bkluZGljYXRvck1vdXNlRG93bihldmVudCk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoaW5wdXRWYWx1ZSwge1xuICAgICAgICBhY3Rpb246ICdpbnB1dC1jaGFuZ2UnXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIF90aGlzLm9uTWVudU9wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25JbnB1dEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlLFxuICAgICAgICBpc0ZvY3VzZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMub3BlbkFmdGVyRm9jdXMgfHwgX3RoaXMucHJvcHMub3Blbk1lbnVPbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLm9wZW5NZW51KCdmaXJzdCcpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5vcGVuQWZ0ZXJGb2N1cyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbklucHV0Qmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLm1lbnVMaXN0UmVmICYmIF90aGlzLm1lbnVMaXN0UmVmLmNvbnRhaW5zKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIF90aGlzLmlucHV0UmVmLmZvY3VzKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgYWN0aW9uOiAnaW5wdXQtYmx1cidcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWRWYWx1ZTogbnVsbCxcbiAgICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uT3B0aW9uSG92ZXIgPSBmdW5jdGlvbiAoZm9jdXNlZE9wdGlvbikge1xuICAgICAgaWYgKF90aGlzLmJsb2NrT3B0aW9uSG92ZXIgfHwgX3RoaXMuc3RhdGUuZm9jdXNlZE9wdGlvbiA9PT0gZm9jdXNlZE9wdGlvbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvblxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNob3VsZEhpZGVTZWxlY3RlZE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2hvdWxkSGlkZVNlbGVjdGVkT3B0aW9ucyhfdGhpcy5wcm9wcyk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczUuaXNNdWx0aSxcbiAgICAgICAgICBiYWNrc3BhY2VSZW1vdmVzVmFsdWUgPSBfdGhpcyRwcm9wczUuYmFja3NwYWNlUmVtb3Zlc1ZhbHVlLFxuICAgICAgICAgIGVzY2FwZUNsZWFyc1ZhbHVlID0gX3RoaXMkcHJvcHM1LmVzY2FwZUNsZWFyc1ZhbHVlLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRwcm9wczUuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBpc0NsZWFyYWJsZSA9IF90aGlzJHByb3BzNS5pc0NsZWFyYWJsZSxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHM1LmlzRGlzYWJsZWQsXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzNS5tZW51SXNPcGVuLFxuICAgICAgICAgIG9uS2V5RG93biA9IF90aGlzJHByb3BzNS5vbktleURvd24sXG4gICAgICAgICAgdGFiU2VsZWN0c1ZhbHVlID0gX3RoaXMkcHJvcHM1LnRhYlNlbGVjdHNWYWx1ZSxcbiAgICAgICAgICBvcGVuTWVudU9uRm9jdXMgPSBfdGhpcyRwcm9wczUub3Blbk1lbnVPbkZvY3VzO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF90aGlzJHN0YXRlLmZvY3VzZWRPcHRpb24sXG4gICAgICAgICAgZm9jdXNlZFZhbHVlID0gX3RoaXMkc3RhdGUuZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGUuc2VsZWN0VmFsdWU7XG4gICAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAodHlwZW9mIG9uS2V5RG93biA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbktleURvd24oZXZlbnQpO1xuXG4gICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IC8vIEJsb2NrIG9wdGlvbiBob3ZlciBldmVudHMgd2hlbiB0aGUgdXNlciBoYXMganVzdCBwcmVzc2VkIGEga2V5XG5cblxuICAgICAgX3RoaXMuYmxvY2tPcHRpb25Ib3ZlciA9IHRydWU7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgaWYgKCFpc011bHRpIHx8IGlucHV0VmFsdWUpIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzVmFsdWUoJ3ByZXZpb3VzJyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICBpZiAoIWlzTXVsdGkgfHwgaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgX3RoaXMuZm9jdXNWYWx1ZSgnbmV4dCcpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcbiAgICAgICAgICBpZiAoaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKGZvY3VzZWRWYWx1ZSkge1xuICAgICAgICAgICAgX3RoaXMucmVtb3ZlVmFsdWUoZm9jdXNlZFZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFiYWNrc3BhY2VSZW1vdmVzVmFsdWUpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgICAgICAgX3RoaXMucG9wVmFsdWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUpIHtcbiAgICAgICAgICAgICAgX3RoaXMuY2xlYXJWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgICAgaWYgKF90aGlzLmlzQ29tcG9zaW5nKSByZXR1cm47XG5cbiAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkgfHwgIW1lbnVJc09wZW4gfHwgIXRhYlNlbGVjdHNWYWx1ZSB8fCAhZm9jdXNlZE9wdGlvbiB8fCAvLyBkb24ndCBjYXB0dXJlIHRoZSBldmVudCBpZiB0aGUgbWVudSBvcGVucyBvbiBmb2N1cyBhbmQgdGhlIGZvY3VzZWRcbiAgICAgICAgICAvLyBvcHRpb24gaXMgYWxyZWFkeSBzZWxlY3RlZDsgaXQgYnJlYWtzIHRoZSBmbG93IG9mIG5hdmlnYXRpb25cbiAgICAgICAgICBvcGVuTWVudU9uRm9jdXMgJiYgX3RoaXMuaXNPcHRpb25TZWxlY3RlZChmb2N1c2VkT3B0aW9uLCBzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDIyOSkge1xuICAgICAgICAgICAgLy8gaWdub3JlIHRoZSBrZXlkb3duIGV2ZW50IGZyb20gYW4gSW5wdXQgTWV0aG9kIEVkaXRvcihJTUUpXG4gICAgICAgICAgICAvLyByZWYuIGh0dHBzOi8vd3d3LnczLm9yZy9UUi91aWV2ZW50cy8jZGV0ZXJtaW5lLWtleWRvd24ta2V5dXAta2V5Q29kZVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIGlmICghZm9jdXNlZE9wdGlvbikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzQ29tcG9zaW5nKSByZXR1cm47XG5cbiAgICAgICAgICAgIF90aGlzLnNlbGVjdE9wdGlvbihmb2N1c2VkT3B0aW9uKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgaWYgKG1lbnVJc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UoJycsIHtcbiAgICAgICAgICAgICAgYWN0aW9uOiAnbWVudS1jbG9zZSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy5vbk1lbnVDbG9zZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNDbGVhcmFibGUgJiYgZXNjYXBlQ2xlYXJzVmFsdWUpIHtcbiAgICAgICAgICAgIF90aGlzLmNsZWFyVmFsdWUoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAvLyBzcGFjZVxuICAgICAgICAgIGlmIChpbnB1dFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpcy5vcGVuTWVudSgnZmlyc3QnKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFmb2N1c2VkT3B0aW9uKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5zZWxlY3RPcHRpb24oZm9jdXNlZE9wdGlvbik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ3VwJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLm9wZW5NZW51KCdsYXN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBpZiAobWVudUlzT3Blbikge1xuICAgICAgICAgICAgX3RoaXMuZm9jdXNPcHRpb24oJ2Rvd24nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMub3Blbk1lbnUoJ2ZpcnN0Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUGFnZVVwJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdldXAnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1BhZ2VEb3duJzpcbiAgICAgICAgICBpZiAoIW1lbnVJc09wZW4pIHJldHVybjtcblxuICAgICAgICAgIF90aGlzLmZvY3VzT3B0aW9uKCdwYWdlZG93bicpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnSG9tZSc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignZmlyc3QnKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm47XG5cbiAgICAgICAgICBfdGhpcy5mb2N1c09wdGlvbignbGFzdCcpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLmluc3RhbmNlUHJlZml4ID0gJ3JlYWN0LXNlbGVjdC0nICsgKF90aGlzLnByb3BzLmluc3RhbmNlSWQgfHwgKytpbnN0YW5jZUlkKTtcbiAgICBfdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZSA9IGNsZWFuVmFsdWUoX3Byb3BzLnZhbHVlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvbigpO1xuICAgICAgdGhpcy5zdGFydExpc3RlbmluZ1RvVG91Y2goKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VNZW51T25TY3JvbGwgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAvLyBMaXN0ZW4gdG8gYWxsIHNjcm9sbCBldmVudHMsIGFuZCBmaWx0ZXIgdGhlbSBvdXQgaW5zaWRlIG9mICdvblNjcm9sbCdcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczYuaXNEaXNhYmxlZCxcbiAgICAgICAgICBtZW51SXNPcGVuID0gX3RoaXMkcHJvcHM2Lm1lbnVJc09wZW47XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cbiAgICAgIGlmICggLy8gZW5zdXJlIGZvY3VzIGlzIHJlc3RvcmVkIGNvcnJlY3RseSB3aGVuIHRoZSBjb250cm9sIGJlY29tZXMgZW5hYmxlZFxuICAgICAgaXNGb2N1c2VkICYmICFpc0Rpc2FibGVkICYmIHByZXZQcm9wcy5pc0Rpc2FibGVkIHx8IC8vIGVuc3VyZSBmb2N1cyBpcyBvbiB0aGUgSW5wdXQgd2hlbiB0aGUgbWVudSBvcGVuc1xuICAgICAgaXNGb2N1c2VkICYmIG1lbnVJc09wZW4gJiYgIXByZXZQcm9wcy5tZW51SXNPcGVuKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGb2N1c2VkICYmIGlzRGlzYWJsZWQgJiYgIXByZXZQcm9wcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzZWxlY3Qgc3RhdGUgZ2V0cyBibHVycmVkIGluIGNhc2UgU2VsZWN0IGlzIHByb2dyYW1hdGljYWxseSBkaXNhYmxlZCB3aGlsZSBmb2N1c2VkXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgICAgICAgfSwgdGhpcy5vbk1lbnVDbG9zZSk7XG4gICAgICB9IC8vIHNjcm9sbCB0aGUgZm9jdXNlZCBvcHRpb24gaW50byB2aWV3IGlmIG5lY2Vzc2FyeVxuXG5cbiAgICAgIGlmICh0aGlzLm1lbnVMaXN0UmVmICYmIHRoaXMuZm9jdXNlZE9wdGlvblJlZiAmJiB0aGlzLnNjcm9sbFRvRm9jdXNlZE9wdGlvbk9uVXBkYXRlKSB7XG4gICAgICAgIHNjcm9sbEludG9WaWV3KHRoaXMubWVudUxpc3RSZWYsIHRoaXMuZm9jdXNlZE9wdGlvblJlZik7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpO1xuICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nVG9Ub3VjaCgpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgdHJ1ZSk7XG4gICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDb25zdW1lciBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6IFwib25NZW51T3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk1lbnVPcGVuKCkge1xuICAgICAgdGhpcy5wcm9wcy5vbk1lbnVPcGVuKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm9uTWVudUNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVudUNsb3NlKCkge1xuICAgICAgdGhpcy5vbklucHV0Q2hhbmdlKCcnLCB7XG4gICAgICAgIGFjdGlvbjogJ21lbnUtY2xvc2UnXG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcHMub25NZW51Q2xvc2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwib25JbnB1dENoYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbklucHV0Q2hhbmdlKG5ld1ZhbHVlLCBhY3Rpb25NZXRhKSB7XG4gICAgICB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UobmV3VmFsdWUsIGFjdGlvbk1ldGEpO1xuICAgIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gTWV0aG9kc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c0lucHV0KCkge1xuICAgICAgaWYgKCF0aGlzLmlucHV0UmVmKSByZXR1cm47XG4gICAgICB0aGlzLmlucHV0UmVmLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJJbnB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVySW5wdXQoKSB7XG4gICAgICBpZiAoIXRoaXMuaW5wdXRSZWYpIHJldHVybjtcbiAgICAgIHRoaXMuaW5wdXRSZWYuYmx1cigpO1xuICAgIH0gLy8gYWxpYXNlZCBmb3IgY29uc3VtZXJzXG5cbiAgfSwge1xuICAgIGtleTogXCJvcGVuTWVudVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuTWVudShmb2N1c09wdGlvbikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGUyLnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlMi5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgZm9jdXNhYmxlT3B0aW9ucyA9IHRoaXMuYnVpbGRGb2N1c2FibGVPcHRpb25zKCk7XG4gICAgICB2YXIgb3BlbkF0SW5kZXggPSBmb2N1c09wdGlvbiA9PT0gJ2ZpcnN0JyA/IDAgOiBmb2N1c2FibGVPcHRpb25zLmxlbmd0aCAtIDE7XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gZm9jdXNhYmxlT3B0aW9ucy5pbmRleE9mKHNlbGVjdFZhbHVlWzBdKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgb3BlbkF0SW5kZXggPSBzZWxlY3RlZEluZGV4O1xuICAgICAgICB9XG4gICAgICB9IC8vIG9ubHkgc2Nyb2xsIGlmIHRoZSBtZW51IGlzbid0IGFscmVhZHkgb3BlblxuXG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9Gb2N1c2VkT3B0aW9uT25VcGRhdGUgPSAhKGlzRm9jdXNlZCAmJiB0aGlzLm1lbnVMaXN0UmVmKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IGZhbHNlLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGwsXG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzYWJsZU9wdGlvbnNbb3BlbkF0SW5kZXhdXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIub25NZW51T3BlbigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXNWYWx1ZShkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIHNlbGVjdFZhbHVlID0gX3RoaXMkc3RhdGUzLnNlbGVjdFZhbHVlLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlMy5mb2N1c2VkVmFsdWU7IC8vIE9ubHkgbXVsdGlzZWxlY3RzIHN1cHBvcnQgdmFsdWUgZm9jdXNpbmdcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzTXVsdGkpIHJldHVybjtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkT3B0aW9uOiBudWxsXG4gICAgICB9KTtcbiAgICAgIHZhciBmb2N1c2VkSW5kZXggPSBzZWxlY3RWYWx1ZS5pbmRleE9mKGZvY3VzZWRWYWx1ZSk7XG5cbiAgICAgIGlmICghZm9jdXNlZFZhbHVlKSB7XG4gICAgICAgIGZvY3VzZWRJbmRleCA9IC0xO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdEluZGV4ID0gc2VsZWN0VmFsdWUubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBuZXh0Rm9jdXMgPSAtMTtcbiAgICAgIGlmICghc2VsZWN0VmFsdWUubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICBpZiAoZm9jdXNlZEluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAvLyBkb24ndCBjeWNsZSBmcm9tIHRoZSBzdGFydCB0byB0aGUgZW5kXG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZm9jdXNlZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgLy8gaWYgbm90aGluZyBpcyBmb2N1c2VkLCBmb2N1cyB0aGUgbGFzdCB2YWx1ZSBmaXJzdFxuICAgICAgICAgICAgbmV4dEZvY3VzID0gbGFzdEluZGV4O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0Rm9jdXMgPSBmb2N1c2VkSW5kZXggLSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPiAtMSAmJiBmb2N1c2VkSW5kZXggPCBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCArIDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dElzSGlkZGVuOiBuZXh0Rm9jdXMgIT09IC0xLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IHNlbGVjdFZhbHVlW25leHRGb2N1c11cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb2N1c09wdGlvblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1c09wdGlvbigpIHtcbiAgICAgIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdmaXJzdCc7XG4gICAgICB2YXIgcGFnZVNpemUgPSB0aGlzLnByb3BzLnBhZ2VTaXplO1xuICAgICAgdmFyIGZvY3VzZWRPcHRpb24gPSB0aGlzLnN0YXRlLmZvY3VzZWRPcHRpb247XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9ucygpO1xuICAgICAgaWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgdmFyIG5leHRGb2N1cyA9IDA7IC8vIGhhbmRsZXMgJ2ZpcnN0J1xuXG4gICAgICB2YXIgZm9jdXNlZEluZGV4ID0gb3B0aW9ucy5pbmRleE9mKGZvY3VzZWRPcHRpb24pO1xuXG4gICAgICBpZiAoIWZvY3VzZWRPcHRpb24pIHtcbiAgICAgICAgZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgICAgbmV4dEZvY3VzID0gZm9jdXNlZEluZGV4ID4gMCA/IGZvY3VzZWRJbmRleCAtIDEgOiBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IChmb2N1c2VkSW5kZXggKyAxKSAlIG9wdGlvbnMubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdwYWdldXAnKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCAtIHBhZ2VTaXplO1xuICAgICAgICBpZiAobmV4dEZvY3VzIDwgMCkgbmV4dEZvY3VzID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncGFnZWRvd24nKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IGZvY3VzZWRJbmRleCArIHBhZ2VTaXplO1xuICAgICAgICBpZiAobmV4dEZvY3VzID4gb3B0aW9ucy5sZW5ndGggLSAxKSBuZXh0Rm9jdXMgPSBvcHRpb25zLmxlbmd0aCAtIDE7XG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2xhc3QnKSB7XG4gICAgICAgIG5leHRGb2N1cyA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxUb0ZvY3VzZWRPcHRpb25PblVwZGF0ZSA9IHRydWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZE9wdGlvbjogb3B0aW9uc1tuZXh0Rm9jdXNdLFxuICAgICAgICBmb2N1c2VkVmFsdWU6IG51bGxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRUaGVtZVwiLFxuICAgIHZhbHVlOiAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBHZXR0ZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZnVuY3Rpb24gZ2V0VGhlbWUoKSB7XG4gICAgICAvLyBVc2UgdGhlIGRlZmF1bHQgdGhlbWUgaWYgdGhlcmUgYXJlIG5vIGN1c3RvbWl6YXRpb25zLlxuICAgICAgaWYgKCF0aGlzLnByb3BzLnRoZW1lKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VGhlbWU7XG4gICAgICB9IC8vIElmIHRoZSB0aGVtZSBwcm9wIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSB0aGUgZnVuY3Rpb25cbiAgICAgIC8vIGtub3dzIGhvdyB0byBtZXJnZSB0aGUgcGFzc2VkLWluIGRlZmF1bHQgdGhlbWUgd2l0aFxuICAgICAgLy8gaXRzIG93biBtb2RpZmljYXRpb25zLlxuXG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy50aGVtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy50aGVtZShkZWZhdWx0VGhlbWUpO1xuICAgICAgfSAvLyBPdGhlcndpc2UsIGlmIGEgcGxhaW4gdGhlbWUgb2JqZWN0IHdhcyBwYXNzZWQgaW4sXG4gICAgICAvLyBvdmVybGF5IGl0IHdpdGggdGhlIGRlZmF1bHQgdGhlbWUuXG5cblxuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBkZWZhdWx0VGhlbWUpLCB0aGlzLnByb3BzLnRoZW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Q29tbW9uUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29tbW9uUHJvcHMoKSB7XG4gICAgICB2YXIgY2xlYXJWYWx1ZSA9IHRoaXMuY2xlYXJWYWx1ZSxcbiAgICAgICAgICBjeCA9IHRoaXMuY3gsXG4gICAgICAgICAgZ2V0U3R5bGVzID0gdGhpcy5nZXRTdHlsZXMsXG4gICAgICAgICAgZ2V0VmFsdWUgPSB0aGlzLmdldFZhbHVlLFxuICAgICAgICAgIHNlbGVjdE9wdGlvbiA9IHRoaXMuc2VsZWN0T3B0aW9uLFxuICAgICAgICAgIHNldFZhbHVlID0gdGhpcy5zZXRWYWx1ZSxcbiAgICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgaXNNdWx0aSA9IHByb3BzLmlzTXVsdGksXG4gICAgICAgICAgaXNSdGwgPSBwcm9wcy5pc1J0bCxcbiAgICAgICAgICBvcHRpb25zID0gcHJvcHMub3B0aW9ucztcbiAgICAgIHZhciBoYXNWYWx1ZSA9IHRoaXMuaGFzVmFsdWUoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFyVmFsdWU6IGNsZWFyVmFsdWUsXG4gICAgICAgIGN4OiBjeCxcbiAgICAgICAgZ2V0U3R5bGVzOiBnZXRTdHlsZXMsXG4gICAgICAgIGdldFZhbHVlOiBnZXRWYWx1ZSxcbiAgICAgICAgaGFzVmFsdWU6IGhhc1ZhbHVlLFxuICAgICAgICBpc011bHRpOiBpc011bHRpLFxuICAgICAgICBpc1J0bDogaXNSdGwsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIHNlbGVjdE9wdGlvbjogc2VsZWN0T3B0aW9uLFxuICAgICAgICBzZWxlY3RQcm9wczogcHJvcHMsXG4gICAgICAgIHNldFZhbHVlOiBzZXRWYWx1ZSxcbiAgICAgICAgdGhlbWU6IHRoaXMuZ2V0VGhlbWUoKVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaGFzVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzVmFsdWUoKSB7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLnN0YXRlLnNlbGVjdFZhbHVlO1xuICAgICAgcmV0dXJuIHNlbGVjdFZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc09wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzT3B0aW9ucygpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuZ2V0Rm9jdXNhYmxlT3B0aW9ucygpLmxlbmd0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNDbGVhcmFibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDbGVhcmFibGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpc0NsZWFyYWJsZSA9IF90aGlzJHByb3BzNy5pc0NsZWFyYWJsZSxcbiAgICAgICAgICBpc011bHRpID0gX3RoaXMkcHJvcHM3LmlzTXVsdGk7IC8vIHNpbmdsZSBzZWxlY3QsIGJ5IGRlZmF1bHQsIElTIE5PVCBjbGVhcmFibGVcbiAgICAgIC8vIG11bHRpIHNlbGVjdCwgYnkgZGVmYXVsdCwgSVMgY2xlYXJhYmxlXG5cbiAgICAgIGlmIChpc0NsZWFyYWJsZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNNdWx0aTtcbiAgICAgIHJldHVybiBpc0NsZWFyYWJsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcHRpb25EaXNhYmxlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvbkRpc2FibGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfaXNPcHRpb25EaXNhYmxlZCh0aGlzLnByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNPcHRpb25TZWxlY3RlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc09wdGlvblNlbGVjdGVkKG9wdGlvbiwgc2VsZWN0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfaXNPcHRpb25TZWxlY3RlZCh0aGlzLnByb3BzLCBvcHRpb24sIHNlbGVjdFZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmlsdGVyT3B0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpbHRlck9wdGlvbihvcHRpb24sIGlucHV0VmFsdWUpIHtcbiAgICAgIHJldHVybiBfZmlsdGVyT3B0aW9uKHRoaXMucHJvcHMsIG9wdGlvbiwgaW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdE9wdGlvbkxhYmVsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdE9wdGlvbkxhYmVsKGRhdGEsIGNvbnRleHQpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5mb3JtYXRPcHRpb25MYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMucHJvcHMuaW5wdXRWYWx1ZTtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZm9ybWF0T3B0aW9uTGFiZWwoZGF0YSwge1xuICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZTogc2VsZWN0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcHRpb25MYWJlbChkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9ybWF0R3JvdXBMYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRHcm91cExhYmVsKGRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmZvcm1hdEdyb3VwTGFiZWwoZGF0YSk7XG4gICAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBNb3VzZSBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdDb21wb3NpdGlvblwiLFxuICAgIHZhbHVlOiAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDb21wb3NpdGlvbiBIYW5kbGVyc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGZ1bmN0aW9uIHN0YXJ0TGlzdGVuaW5nQ29tcG9zaXRpb24oKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjb21wb3NpdGlvbnN0YXJ0JywgdGhpcy5vbkNvbXBvc2l0aW9uU3RhcnQsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25lbmQnLCB0aGlzLm9uQ29tcG9zaXRpb25FbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ0NvbXBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmdDb21wb3NpdGlvbigpIHtcbiAgICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RhcnRMaXN0ZW5pbmdUb1RvdWNoXCIsXG4gICAgdmFsdWU6IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIFRvdWNoIEhhbmRsZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZnVuY3Rpb24gc3RhcnRMaXN0ZW5pbmdUb1RvdWNoKCkge1xuICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcExpc3RlbmluZ1RvVG91Y2hcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZ1RvVG91Y2goKSB7XG4gICAgICBpZiAoZG9jdW1lbnQgJiYgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hFbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJbnB1dFwiLFxuICAgIHZhbHVlOiAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBSZW5kZXJlcnNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBmdW5jdGlvbiByZW5kZXJJbnB1dCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczguaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc1NlYXJjaGFibGUgPSBfdGhpcyRwcm9wczguaXNTZWFyY2hhYmxlLFxuICAgICAgICAgIGlucHV0SWQgPSBfdGhpcyRwcm9wczguaW5wdXRJZCxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHM4LmlucHV0VmFsdWUsXG4gICAgICAgICAgdGFiSW5kZXggPSBfdGhpcyRwcm9wczgudGFiSW5kZXgsXG4gICAgICAgICAgZm9ybSA9IF90aGlzJHByb3BzOC5mb3JtO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50cyA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIElucHV0ID0gX3RoaXMkZ2V0Q29tcG9uZW50cy5JbnB1dDtcblxuICAgICAgdmFyIGlucHV0SXNIaWRkZW4gPSB0aGlzLnN0YXRlLmlucHV0SXNIaWRkZW47XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIGlkID0gaW5wdXRJZCB8fCB0aGlzLmdldEVsZW1lbnRJZCgnaW5wdXQnKTsgLy8gYXJpYSBhdHRyaWJ1dGVzIG1ha2VzIHRoZSBKU1ggXCJub2lzeVwiLCBzZXBhcmF0ZWQgZm9yIGNsYXJpdHlcblxuICAgICAgdmFyIGFyaWFBdHRyaWJ1dGVzID0ge1xuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbGlzdCcsXG4gICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogdGhpcy5wcm9wc1snYXJpYS1sYWJlbGxlZGJ5J11cbiAgICAgIH07XG5cbiAgICAgIGlmICghaXNTZWFyY2hhYmxlKSB7XG4gICAgICAgIC8vIHVzZSBhIGR1bW15IGlucHV0IHRvIG1haW50YWluIGZvY3VzL2JsdXIgZnVuY3Rpb25hbGl0eVxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRHVtbXlJbnB1dCwgX2V4dGVuZHMoe1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBpbm5lclJlZjogdGhpcy5nZXRJbnB1dFJlZixcbiAgICAgICAgICBvbkJsdXI6IHRoaXMub25JbnB1dEJsdXIsXG4gICAgICAgICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgICAgICAgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgICAgdmFsdWU6IFwiXCJcbiAgICAgICAgfSwgYXJpYUF0dHJpYnV0ZXMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgYXV0b0NhcGl0YWxpemU6IFwibm9uZVwiLFxuICAgICAgICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgIGF1dG9Db3JyZWN0OiBcIm9mZlwiLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGlubmVyUmVmOiB0aGlzLmdldElucHV0UmVmLFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0hpZGRlbjogaW5wdXRJc0hpZGRlbixcbiAgICAgICAgb25CbHVyOiB0aGlzLm9uSW5wdXRCbHVyLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgb25Gb2N1czogdGhpcy5vbklucHV0Rm9jdXMsXG4gICAgICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIixcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICBmb3JtOiBmb3JtLFxuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgdmFsdWU6IGlucHV0VmFsdWVcbiAgICAgIH0sIGFyaWFBdHRyaWJ1dGVzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclBsYWNlaG9sZGVyT3JWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJQbGFjZWhvbGRlck9yVmFsdWUoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHMyID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgICAgTXVsdGlWYWx1ZSA9IF90aGlzJGdldENvbXBvbmVudHMyLk11bHRpVmFsdWUsXG4gICAgICAgICAgTXVsdGlWYWx1ZUNvbnRhaW5lciA9IF90aGlzJGdldENvbXBvbmVudHMyLk11bHRpVmFsdWVDb250YWluZXIsXG4gICAgICAgICAgTXVsdGlWYWx1ZUxhYmVsID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICAgIE11bHRpVmFsdWVSZW1vdmUgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5NdWx0aVZhbHVlUmVtb3ZlLFxuICAgICAgICAgIFNpbmdsZVZhbHVlID0gX3RoaXMkZ2V0Q29tcG9uZW50czIuU2luZ2xlVmFsdWUsXG4gICAgICAgICAgUGxhY2Vob2xkZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzMi5QbGFjZWhvbGRlcjtcblxuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBfdGhpcyRwcm9wczkgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSA9IF90aGlzJHByb3BzOS5jb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXG4gICAgICAgICAgaXNEaXNhYmxlZCA9IF90aGlzJHByb3BzOS5pc0Rpc2FibGVkLFxuICAgICAgICAgIGlzTXVsdGkgPSBfdGhpcyRwcm9wczkuaXNNdWx0aSxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHM5LmlucHV0VmFsdWUsXG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBfdGhpcyRwcm9wczkucGxhY2Vob2xkZXI7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU0ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlNC5zZWxlY3RWYWx1ZSxcbiAgICAgICAgICBmb2N1c2VkVmFsdWUgPSBfdGhpcyRzdGF0ZTQuZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZCA9IF90aGlzJHN0YXRlNC5pc0ZvY3VzZWQ7XG5cbiAgICAgIGlmICghdGhpcy5oYXNWYWx1ZSgpIHx8ICFjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWUgPyBudWxsIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGxhY2Vob2xkZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgIGtleTogXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgICAgfSksIHBsYWNlaG9sZGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlcyA9IHNlbGVjdFZhbHVlLm1hcChmdW5jdGlvbiAob3B0LCBpbmRleCkge1xuICAgICAgICAgIHZhciBpc09wdGlvbkZvY3VzZWQgPSBvcHQgPT09IGZvY3VzZWRWYWx1ZTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTXVsdGlWYWx1ZSwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgIENvbnRhaW5lcjogTXVsdGlWYWx1ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgTGFiZWw6IE11bHRpVmFsdWVMYWJlbCxcbiAgICAgICAgICAgICAgUmVtb3ZlOiBNdWx0aVZhbHVlUmVtb3ZlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNGb2N1c2VkOiBpc09wdGlvbkZvY3VzZWQsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAga2V5OiBcIlwiLmNvbmNhdChfdGhpczMuZ2V0T3B0aW9uVmFsdWUob3B0KSkuY29uY2F0KGluZGV4KSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHJlbW92ZVByb3BzOiB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5yZW1vdmVWYWx1ZShvcHQpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMucmVtb3ZlVmFsdWUob3B0KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IG9wdFxuICAgICAgICAgIH0pLCBfdGhpczMuZm9ybWF0T3B0aW9uTGFiZWwob3B0LCAndmFsdWUnKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VsZWN0VmFsdWVzO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHNpbmdsZVZhbHVlID0gc2VsZWN0VmFsdWVbMF07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlVmFsdWUsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBkYXRhOiBzaW5nbGVWYWx1ZSxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgICAgfSksIHRoaXMuZm9ybWF0T3B0aW9uTGFiZWwoc2luZ2xlVmFsdWUsICd2YWx1ZScpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyQ2xlYXJJbmRpY2F0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2xlYXJJbmRpY2F0b3IoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czMgPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBDbGVhckluZGljYXRvciA9IF90aGlzJGdldENvbXBvbmVudHMzLkNsZWFySW5kaWNhdG9yO1xuXG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTAgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczEwLmlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMxMC5pc0xvYWRpbmc7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG5cbiAgICAgIGlmICghdGhpcy5pc0NsZWFyYWJsZSgpIHx8ICFDbGVhckluZGljYXRvciB8fCBpc0Rpc2FibGVkIHx8ICF0aGlzLmhhc1ZhbHVlKCkgfHwgaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMub25DbGVhckluZGljYXRvck1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkNsZWFySW5kaWNhdG9yVG91Y2hFbmQsXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbGVhckluZGljYXRvciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUHJvcHM6IGlubmVyUHJvcHMsXG4gICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxvYWRpbmdJbmRpY2F0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTG9hZGluZ0luZGljYXRvcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzNCA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIExvYWRpbmdJbmRpY2F0b3IgPSBfdGhpcyRnZXRDb21wb25lbnRzNC5Mb2FkaW5nSW5kaWNhdG9yO1xuXG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTEgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczExLmlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNMb2FkaW5nID0gX3RoaXMkcHJvcHMxMS5pc0xvYWRpbmc7XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICBpZiAoIUxvYWRpbmdJbmRpY2F0b3IgfHwgIWlzTG9hZGluZykgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgaW5uZXJQcm9wcyA9IHtcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmdJbmRpY2F0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9yU2VwYXJhdG9yKCkge1xuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM1ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgICAgRHJvcGRvd25JbmRpY2F0b3IgPSBfdGhpcyRnZXRDb21wb25lbnRzNS5Ecm9wZG93bkluZGljYXRvcixcbiAgICAgICAgICBJbmRpY2F0b3JTZXBhcmF0b3IgPSBfdGhpcyRnZXRDb21wb25lbnRzNS5JbmRpY2F0b3JTZXBhcmF0b3I7IC8vIHNlcGFyYXRvciBkb2Vzbid0IG1ha2Ugc2Vuc2Ugd2l0aG91dCB0aGUgZHJvcGRvd24gaW5kaWNhdG9yXG5cblxuICAgICAgaWYgKCFEcm9wZG93bkluZGljYXRvciB8fCAhSW5kaWNhdG9yU2VwYXJhdG9yKSByZXR1cm4gbnVsbDtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgaXNEaXNhYmxlZCA9IHRoaXMucHJvcHMuaXNEaXNhYmxlZDtcbiAgICAgIHZhciBpc0ZvY3VzZWQgPSB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbmRpY2F0b3JTZXBhcmF0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJEcm9wZG93bkluZGljYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJEcm9wZG93bkluZGljYXRvcigpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRDb21wb25lbnRzNiA9IHRoaXMuZ2V0Q29tcG9uZW50cygpLFxuICAgICAgICAgIERyb3Bkb3duSW5kaWNhdG9yID0gX3RoaXMkZ2V0Q29tcG9uZW50czYuRHJvcGRvd25JbmRpY2F0b3I7XG5cbiAgICAgIGlmICghRHJvcGRvd25JbmRpY2F0b3IpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBpc0Rpc2FibGVkID0gdGhpcy5wcm9wcy5pc0Rpc2FibGVkO1xuICAgICAgdmFyIGlzRm9jdXNlZCA9IHRoaXMuc3RhdGUuaXNGb2N1c2VkO1xuICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uRHJvcGRvd25JbmRpY2F0b3JNb3VzZURvd24sXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMub25Ecm9wZG93bkluZGljYXRvclRvdWNoRW5kLFxuICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcGRvd25JbmRpY2F0b3IsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJNZW51XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJGdldENvbXBvbmVudHM3ID0gdGhpcy5nZXRDb21wb25lbnRzKCksXG4gICAgICAgICAgR3JvdXAgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5Hcm91cCxcbiAgICAgICAgICBHcm91cEhlYWRpbmcgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5Hcm91cEhlYWRpbmcsXG4gICAgICAgICAgTWVudSA9IF90aGlzJGdldENvbXBvbmVudHM3Lk1lbnUsXG4gICAgICAgICAgTWVudUxpc3QgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5NZW51TGlzdCxcbiAgICAgICAgICBNZW51UG9ydGFsID0gX3RoaXMkZ2V0Q29tcG9uZW50czcuTWVudVBvcnRhbCxcbiAgICAgICAgICBMb2FkaW5nTWVzc2FnZSA9IF90aGlzJGdldENvbXBvbmVudHM3LkxvYWRpbmdNZXNzYWdlLFxuICAgICAgICAgIE5vT3B0aW9uc01lc3NhZ2UgPSBfdGhpcyRnZXRDb21wb25lbnRzNy5Ob09wdGlvbnNNZXNzYWdlLFxuICAgICAgICAgIE9wdGlvbiA9IF90aGlzJGdldENvbXBvbmVudHM3Lk9wdGlvbjtcblxuICAgICAgdmFyIGNvbW1vblByb3BzID0gdGhpcy5jb21tb25Qcm9wcztcbiAgICAgIHZhciBmb2N1c2VkT3B0aW9uID0gdGhpcy5zdGF0ZS5mb2N1c2VkT3B0aW9uO1xuICAgICAgdmFyIF90aGlzJHByb3BzMTIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNhcHR1cmVNZW51U2Nyb2xsID0gX3RoaXMkcHJvcHMxMi5jYXB0dXJlTWVudVNjcm9sbCxcbiAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkcHJvcHMxMi5pbnB1dFZhbHVlLFxuICAgICAgICAgIGlzTG9hZGluZyA9IF90aGlzJHByb3BzMTIuaXNMb2FkaW5nLFxuICAgICAgICAgIGxvYWRpbmdNZXNzYWdlID0gX3RoaXMkcHJvcHMxMi5sb2FkaW5nTWVzc2FnZSxcbiAgICAgICAgICBtaW5NZW51SGVpZ2h0ID0gX3RoaXMkcHJvcHMxMi5taW5NZW51SGVpZ2h0LFxuICAgICAgICAgIG1heE1lbnVIZWlnaHQgPSBfdGhpcyRwcm9wczEyLm1heE1lbnVIZWlnaHQsXG4gICAgICAgICAgbWVudUlzT3BlbiA9IF90aGlzJHByb3BzMTIubWVudUlzT3BlbixcbiAgICAgICAgICBtZW51UGxhY2VtZW50ID0gX3RoaXMkcHJvcHMxMi5tZW51UGxhY2VtZW50LFxuICAgICAgICAgIG1lbnVQb3NpdGlvbiA9IF90aGlzJHByb3BzMTIubWVudVBvc2l0aW9uLFxuICAgICAgICAgIG1lbnVQb3J0YWxUYXJnZXQgPSBfdGhpcyRwcm9wczEyLm1lbnVQb3J0YWxUYXJnZXQsXG4gICAgICAgICAgbWVudVNob3VsZEJsb2NrU2Nyb2xsID0gX3RoaXMkcHJvcHMxMi5tZW51U2hvdWxkQmxvY2tTY3JvbGwsXG4gICAgICAgICAgbWVudVNob3VsZFNjcm9sbEludG9WaWV3ID0gX3RoaXMkcHJvcHMxMi5tZW51U2hvdWxkU2Nyb2xsSW50b1ZpZXcsXG4gICAgICAgICAgbm9PcHRpb25zTWVzc2FnZSA9IF90aGlzJHByb3BzMTIubm9PcHRpb25zTWVzc2FnZSxcbiAgICAgICAgICBvbk1lbnVTY3JvbGxUb1RvcCA9IF90aGlzJHByb3BzMTIub25NZW51U2Nyb2xsVG9Ub3AsXG4gICAgICAgICAgb25NZW51U2Nyb2xsVG9Cb3R0b20gPSBfdGhpcyRwcm9wczEyLm9uTWVudVNjcm9sbFRvQm90dG9tO1xuICAgICAgaWYgKCFtZW51SXNPcGVuKSByZXR1cm4gbnVsbDsgLy8gVE9ETzogSW50ZXJuYWwgT3B0aW9uIFR5cGUgaGVyZVxuXG4gICAgICB2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKHByb3BzLCBpZCkge1xuICAgICAgICB2YXIgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICAgICAgICBkYXRhID0gcHJvcHMuZGF0YSxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQgPSBwcm9wcy5pc0Rpc2FibGVkLFxuICAgICAgICAgICAgaXNTZWxlY3RlZCA9IHByb3BzLmlzU2VsZWN0ZWQsXG4gICAgICAgICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGlzRm9jdXNlZCA9IGZvY3VzZWRPcHRpb24gPT09IGRhdGE7XG4gICAgICAgIHZhciBvbkhvdmVyID0gaXNEaXNhYmxlZCA/IHVuZGVmaW5lZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0Lm9uT3B0aW9uSG92ZXIoZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvblNlbGVjdCA9IGlzRGlzYWJsZWQgPyB1bmRlZmluZWQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5zZWxlY3RPcHRpb24oZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvcHRpb25JZCA9IFwiXCIuY29uY2F0KF90aGlzNC5nZXRFbGVtZW50SWQoJ29wdGlvbicpLCBcIi1cIikuY29uY2F0KGlkKTtcbiAgICAgICAgdmFyIGlubmVyUHJvcHMgPSB7XG4gICAgICAgICAgaWQ6IG9wdGlvbklkLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uU2VsZWN0LFxuICAgICAgICAgIG9uTW91c2VNb3ZlOiBvbkhvdmVyLFxuICAgICAgICAgIG9uTW91c2VPdmVyOiBvbkhvdmVyLFxuICAgICAgICAgIHRhYkluZGV4OiAtMVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3B0aW9uLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICBpbm5lclByb3BzOiBpbm5lclByb3BzLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICAgIGtleTogb3B0aW9uSWQsXG4gICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGlzRm9jdXNlZDogaXNGb2N1c2VkLFxuICAgICAgICAgIGlubmVyUmVmOiBpc0ZvY3VzZWQgPyBfdGhpczQuZ2V0Rm9jdXNlZE9wdGlvblJlZiA6IHVuZGVmaW5lZFxuICAgICAgICB9KSwgX3RoaXM0LmZvcm1hdE9wdGlvbkxhYmVsKHByb3BzLmRhdGEsICdtZW51JykpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1lbnVVSTtcblxuICAgICAgaWYgKHRoaXMuaGFzT3B0aW9ucygpKSB7XG4gICAgICAgIG1lbnVVSSA9IHRoaXMuZ2V0Q2F0ZWdvcml6ZWRPcHRpb25zKCkubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBpdGVtLmRhdGEsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IGl0ZW0ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBncm91cEluZGV4ID0gaXRlbS5pbmRleDtcbiAgICAgICAgICAgIHZhciBncm91cElkID0gXCJcIi5jb25jYXQoX3RoaXM0LmdldEVsZW1lbnRJZCgnZ3JvdXAnKSwgXCItXCIpLmNvbmNhdChncm91cEluZGV4KTtcbiAgICAgICAgICAgIHZhciBoZWFkaW5nSWQgPSBcIlwiLmNvbmNhdChncm91cElkLCBcIi1oZWFkaW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEdyb3VwLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgICAgICAga2V5OiBncm91cElkLFxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICBIZWFkaW5nOiBHcm91cEhlYWRpbmcsXG4gICAgICAgICAgICAgIGhlYWRpbmdQcm9wczoge1xuICAgICAgICAgICAgICAgIGlkOiBoZWFkaW5nSWQsXG4gICAgICAgICAgICAgICAgZGF0YTogaXRlbS5kYXRhXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxhYmVsOiBfdGhpczQuZm9ybWF0R3JvdXBMYWJlbChpdGVtLmRhdGEpXG4gICAgICAgICAgICB9KSwgaXRlbS5vcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZW5kZXIob3B0aW9uLCBcIlwiLmNvbmNhdChncm91cEluZGV4LCBcIi1cIikuY29uY2F0KG9wdGlvbi5pbmRleCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSAnb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihpdGVtLCBcIlwiLmNvbmNhdChpdGVtLmluZGV4KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gbG9hZGluZ01lc3NhZ2Uoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtZXNzYWdlID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbWVudVVJID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZ01lc3NhZ2UsIGNvbW1vblByb3BzLCBtZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfbWVzc2FnZSA9IG5vT3B0aW9uc01lc3NhZ2Uoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF9tZXNzYWdlID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICAgICAgbWVudVVJID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTm9PcHRpb25zTWVzc2FnZSwgY29tbW9uUHJvcHMsIF9tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG1lbnVQbGFjZW1lbnRQcm9wcyA9IHtcbiAgICAgICAgbWluTWVudUhlaWdodDogbWluTWVudUhlaWdodCxcbiAgICAgICAgbWF4TWVudUhlaWdodDogbWF4TWVudUhlaWdodCxcbiAgICAgICAgbWVudVBsYWNlbWVudDogbWVudVBsYWNlbWVudCxcbiAgICAgICAgbWVudVBvc2l0aW9uOiBtZW51UG9zaXRpb24sXG4gICAgICAgIG1lbnVTaG91bGRTY3JvbGxJbnRvVmlldzogbWVudVNob3VsZFNjcm9sbEludG9WaWV3XG4gICAgICB9O1xuICAgICAgdmFyIG1lbnVFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudVBsYWNlciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCBtZW51UGxhY2VtZW50UHJvcHMpLCBmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgICAgdmFyIHJlZiA9IF9yZWY0LnJlZixcbiAgICAgICAgICAgIF9yZWY0JHBsYWNlclByb3BzID0gX3JlZjQucGxhY2VyUHJvcHMsXG4gICAgICAgICAgICBwbGFjZW1lbnQgPSBfcmVmNCRwbGFjZXJQcm9wcy5wbGFjZW1lbnQsXG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBfcmVmNCRwbGFjZXJQcm9wcy5tYXhIZWlnaHQ7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIG1lbnVQbGFjZW1lbnRQcm9wcywge1xuICAgICAgICAgIGlubmVyUmVmOiByZWYsXG4gICAgICAgICAgaW5uZXJQcm9wczoge1xuICAgICAgICAgICAgb25Nb3VzZURvd246IF90aGlzNC5vbk1lbnVNb3VzZURvd24sXG4gICAgICAgICAgICBvbk1vdXNlTW92ZTogX3RoaXM0Lm9uTWVudU1vdXNlTW92ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbE1hbmFnZXIsIHtcbiAgICAgICAgICBjYXB0dXJlRW5hYmxlZDogY2FwdHVyZU1lbnVTY3JvbGwsXG4gICAgICAgICAgb25Ub3BBcnJpdmU6IG9uTWVudVNjcm9sbFRvVG9wLFxuICAgICAgICAgIG9uQm90dG9tQXJyaXZlOiBvbk1lbnVTY3JvbGxUb0JvdHRvbSxcbiAgICAgICAgICBsb2NrRW5hYmxlZDogbWVudVNob3VsZEJsb2NrU2Nyb2xsXG4gICAgICAgIH0sIGZ1bmN0aW9uIChzY3JvbGxUYXJnZXRSZWYpIHtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUxpc3QsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICAgICAgaW5uZXJSZWY6IGZ1bmN0aW9uIGlubmVyUmVmKGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgIF90aGlzNC5nZXRNZW51TGlzdFJlZihpbnN0YW5jZSk7XG5cbiAgICAgICAgICAgICAgc2Nyb2xsVGFyZ2V0UmVmKGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgICAgICAgICAgZm9jdXNlZE9wdGlvbjogZm9jdXNlZE9wdGlvblxuICAgICAgICAgIH0pLCBtZW51VUkpO1xuICAgICAgICB9KSk7XG4gICAgICB9KTsgLy8gcG9zaXRpb25pbmcgYmVoYXZpb3VyIGlzIGFsbW9zdCBpZGVudGljYWwgZm9yIHBvcnRhbGxlZCBhbmQgZml4ZWQsXG4gICAgICAvLyBzbyB3ZSB1c2UgdGhlIHNhbWUgY29tcG9uZW50LiB0aGUgYWN0dWFsIHBvcnRhbGxpbmcgbG9naWMgaXMgZm9ya2VkXG4gICAgICAvLyB3aXRoaW4gdGhlIGNvbXBvbmVudCBiYXNlZCBvbiBgbWVudVBvc2l0aW9uYFxuXG4gICAgICByZXR1cm4gbWVudVBvcnRhbFRhcmdldCB8fCBtZW51UG9zaXRpb24gPT09ICdmaXhlZCcgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51UG9ydGFsLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgYXBwZW5kVG86IG1lbnVQb3J0YWxUYXJnZXQsXG4gICAgICAgIGNvbnRyb2xFbGVtZW50OiB0aGlzLmNvbnRyb2xSZWYsXG4gICAgICAgIG1lbnVQbGFjZW1lbnQ6IG1lbnVQbGFjZW1lbnQsXG4gICAgICAgIG1lbnVQb3NpdGlvbjogbWVudVBvc2l0aW9uXG4gICAgICB9KSwgbWVudUVsZW1lbnQpIDogbWVudUVsZW1lbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckZvcm1GaWVsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJGb3JtRmllbGQoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzMTMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlbGltaXRlciA9IF90aGlzJHByb3BzMTMuZGVsaW1pdGVyLFxuICAgICAgICAgIGlzRGlzYWJsZWQgPSBfdGhpcyRwcm9wczEzLmlzRGlzYWJsZWQsXG4gICAgICAgICAgaXNNdWx0aSA9IF90aGlzJHByb3BzMTMuaXNNdWx0aSxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMxMy5uYW1lO1xuICAgICAgdmFyIHNlbGVjdFZhbHVlID0gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZTtcbiAgICAgIGlmICghbmFtZSB8fCBpc0Rpc2FibGVkKSByZXR1cm47XG5cbiAgICAgIGlmIChpc011bHRpKSB7XG4gICAgICAgIGlmIChkZWxpbWl0ZXIpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNS5nZXRPcHRpb25WYWx1ZShvcHQpO1xuICAgICAgICAgIH0pLmpvaW4oZGVsaW1pdGVyKTtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnB1dCA9IHNlbGVjdFZhbHVlLmxlbmd0aCA+IDAgPyBzZWxlY3RWYWx1ZS5tYXAoZnVuY3Rpb24gKG9wdCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiaS1cIi5jb25jYXQoaSksXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIHR5cGU6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdGhpczUuZ2V0T3B0aW9uVmFsdWUob3B0KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB0eXBlOiBcImhpZGRlblwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF92YWx1ZSA9IHNlbGVjdFZhbHVlWzBdID8gdGhpcy5nZXRPcHRpb25WYWx1ZShzZWxlY3RWYWx1ZVswXSkgOiAnJztcblxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICB0eXBlOiBcImhpZGRlblwiLFxuICAgICAgICAgIHZhbHVlOiBfdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxpdmVSZWdpb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTGl2ZVJlZ2lvbigpIHtcbiAgICAgIHZhciBjb21tb25Qcm9wcyA9IHRoaXMuY29tbW9uUHJvcHM7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU1ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBhcmlhU2VsZWN0aW9uID0gX3RoaXMkc3RhdGU1LmFyaWFTZWxlY3Rpb24sXG4gICAgICAgICAgZm9jdXNlZE9wdGlvbiA9IF90aGlzJHN0YXRlNS5mb2N1c2VkT3B0aW9uLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZSA9IF90aGlzJHN0YXRlNS5mb2N1c2VkVmFsdWUsXG4gICAgICAgICAgaXNGb2N1c2VkID0gX3RoaXMkc3RhdGU1LmlzRm9jdXNlZCxcbiAgICAgICAgICBzZWxlY3RWYWx1ZSA9IF90aGlzJHN0YXRlNS5zZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBmb2N1c2FibGVPcHRpb25zID0gdGhpcy5nZXRGb2N1c2FibGVPcHRpb25zKCk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGl2ZVJlZ2lvbiwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGFyaWFTZWxlY3Rpb246IGFyaWFTZWxlY3Rpb24sXG4gICAgICAgIGZvY3VzZWRPcHRpb246IGZvY3VzZWRPcHRpb24sXG4gICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgc2VsZWN0VmFsdWU6IHNlbGVjdFZhbHVlLFxuICAgICAgICBmb2N1c2FibGVPcHRpb25zOiBmb2N1c2FibGVPcHRpb25zXG4gICAgICB9KSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0Q29tcG9uZW50czggPSB0aGlzLmdldENvbXBvbmVudHMoKSxcbiAgICAgICAgICBDb250cm9sID0gX3RoaXMkZ2V0Q29tcG9uZW50czguQ29udHJvbCxcbiAgICAgICAgICBJbmRpY2F0b3JzQ29udGFpbmVyID0gX3RoaXMkZ2V0Q29tcG9uZW50czguSW5kaWNhdG9yc0NvbnRhaW5lcixcbiAgICAgICAgICBTZWxlY3RDb250YWluZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzOC5TZWxlY3RDb250YWluZXIsXG4gICAgICAgICAgVmFsdWVDb250YWluZXIgPSBfdGhpcyRnZXRDb21wb25lbnRzOC5WYWx1ZUNvbnRhaW5lcjtcblxuICAgICAgdmFyIF90aGlzJHByb3BzMTQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMTQuY2xhc3NOYW1lLFxuICAgICAgICAgIGlkID0gX3RoaXMkcHJvcHMxNC5pZCxcbiAgICAgICAgICBpc0Rpc2FibGVkID0gX3RoaXMkcHJvcHMxNC5pc0Rpc2FibGVkLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBfdGhpcyRwcm9wczE0Lm1lbnVJc09wZW47XG4gICAgICB2YXIgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZS5pc0ZvY3VzZWQ7XG4gICAgICB2YXIgY29tbW9uUHJvcHMgPSB0aGlzLmNvbW1vblByb3BzID0gdGhpcy5nZXRDb21tb25Qcm9wcygpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbnRhaW5lciwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBpbm5lclByb3BzOiB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd25cbiAgICAgICAgfSxcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZCxcbiAgICAgICAgaXNGb2N1c2VkOiBpc0ZvY3VzZWRcbiAgICAgIH0pLCB0aGlzLnJlbmRlckxpdmVSZWdpb24oKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udHJvbCwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICAgIGlubmVyUmVmOiB0aGlzLmdldENvbnRyb2xSZWYsXG4gICAgICAgIGlubmVyUHJvcHM6IHtcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5vbkNvbnRyb2xNb3VzZURvd24sXG4gICAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5vbkNvbnRyb2xUb3VjaEVuZFxuICAgICAgICB9LFxuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICBpc0ZvY3VzZWQ6IGlzRm9jdXNlZCxcbiAgICAgICAgbWVudUlzT3BlbjogbWVudUlzT3BlblxuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFZhbHVlQ29udGFpbmVyLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcbiAgICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgICAgfSksIHRoaXMucmVuZGVyUGxhY2Vob2xkZXJPclZhbHVlKCksIHRoaXMucmVuZGVySW5wdXQoKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEluZGljYXRvcnNDb250YWluZXIsIF9leHRlbmRzKHt9LCBjb21tb25Qcm9wcywge1xuICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXG4gICAgICB9KSwgdGhpcy5yZW5kZXJDbGVhckluZGljYXRvcigpLCB0aGlzLnJlbmRlckxvYWRpbmdJbmRpY2F0b3IoKSwgdGhpcy5yZW5kZXJJbmRpY2F0b3JTZXBhcmF0b3IoKSwgdGhpcy5yZW5kZXJEcm9wZG93bkluZGljYXRvcigpKSksIHRoaXMucmVuZGVyTWVudSgpLCB0aGlzLnJlbmRlckZvcm1GaWVsZCgpKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgdmFyIHByZXZQcm9wcyA9IHN0YXRlLnByZXZQcm9wcyxcbiAgICAgICAgICBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA9IHN0YXRlLmNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlLFxuICAgICAgICAgIGlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZSA9IHN0YXRlLmlucHV0SXNIaWRkZW5BZnRlclVwZGF0ZTtcbiAgICAgIHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucyxcbiAgICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICAgIG1lbnVJc09wZW4gPSBwcm9wcy5tZW51SXNPcGVuLFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBwcm9wcy5pbnB1dFZhbHVlO1xuICAgICAgdmFyIG5ld01lbnVPcHRpb25zU3RhdGUgPSB7fTtcblxuICAgICAgaWYgKHByZXZQcm9wcyAmJiAodmFsdWUgIT09IHByZXZQcm9wcy52YWx1ZSB8fCBvcHRpb25zICE9PSBwcmV2UHJvcHMub3B0aW9ucyB8fCBtZW51SXNPcGVuICE9PSBwcmV2UHJvcHMubWVudUlzT3BlbiB8fCBpbnB1dFZhbHVlICE9PSBwcmV2UHJvcHMuaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHNlbGVjdFZhbHVlID0gY2xlYW5WYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHZhciBmb2N1c2FibGVPcHRpb25zID0gbWVudUlzT3BlbiA/IGJ1aWxkRm9jdXNhYmxlT3B0aW9ucyhwcm9wcywgc2VsZWN0VmFsdWUpIDogW107XG4gICAgICAgIHZhciBmb2N1c2VkVmFsdWUgPSBjbGVhckZvY3VzVmFsdWVPblVwZGF0ZSA/IGdldE5leHRGb2N1c2VkVmFsdWUoc3RhdGUsIHNlbGVjdFZhbHVlKSA6IG51bGw7XG4gICAgICAgIHZhciBmb2N1c2VkT3B0aW9uID0gZ2V0TmV4dEZvY3VzZWRPcHRpb24oc3RhdGUsIGZvY3VzYWJsZU9wdGlvbnMpO1xuICAgICAgICBuZXdNZW51T3B0aW9uc1N0YXRlID0ge1xuICAgICAgICAgIHNlbGVjdFZhbHVlOiBzZWxlY3RWYWx1ZSxcbiAgICAgICAgICBmb2N1c2VkT3B0aW9uOiBmb2N1c2VkT3B0aW9uLFxuICAgICAgICAgIGZvY3VzZWRWYWx1ZTogZm9jdXNlZFZhbHVlLFxuICAgICAgICAgIGNsZWFyRm9jdXNWYWx1ZU9uVXBkYXRlOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgfSAvLyBzb21lIHVwZGF0ZXMgc2hvdWxkIHRvZ2dsZSB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IHZpc2liaWxpdHlcblxuXG4gICAgICB2YXIgbmV3SW5wdXRJc0hpZGRlblN0YXRlID0gaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlICE9IG51bGwgJiYgcHJvcHMgIT09IHByZXZQcm9wcyA/IHtcbiAgICAgICAgaW5wdXRJc0hpZGRlbjogaW5wdXRJc0hpZGRlbkFmdGVyVXBkYXRlLFxuICAgICAgICBpbnB1dElzSGlkZGVuQWZ0ZXJVcGRhdGU6IHVuZGVmaW5lZFxuICAgICAgfSA6IHt9O1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBuZXdNZW51T3B0aW9uc1N0YXRlKSwgbmV3SW5wdXRJc0hpZGRlblN0YXRlKSwge30sIHtcbiAgICAgICAgcHJldlByb3BzOiBwcm9wc1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlbGVjdDtcbn0oQ29tcG9uZW50KTtcblxuU2VsZWN0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IHsgU2VsZWN0IGFzIFMsIGdldE9wdGlvbkxhYmVsIGFzIGEsIGRlZmF1bHRQcm9wcyBhcyBiLCBjcmVhdGVGaWx0ZXIgYXMgYywgZGVmYXVsdFRoZW1lIGFzIGQsIGdldE9wdGlvblZhbHVlIGFzIGcsIG1lcmdlU3R5bGVzIGFzIG0gfTtcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMnO1xuaW1wb3J0IHsgXyBhcyBfY3JlYXRlU3VwZXIgfSBmcm9tICcuL2luZGV4LTRiZDAzNTcxLmVzbS5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBkZWZhdWx0SW5wdXRWYWx1ZTogJycsXG4gIGRlZmF1bHRNZW51SXNPcGVuOiBmYWxzZSxcbiAgZGVmYXVsdFZhbHVlOiBudWxsXG59O1xuXG52YXIgbWFuYWdlU3RhdGUgPSBmdW5jdGlvbiBtYW5hZ2VTdGF0ZShTZWxlY3RDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFN0YXRlTWFuYWdlciwgX0NvbXBvbmVudCk7XG5cbiAgICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFN0YXRlTWFuYWdlcik7XG5cbiAgICBmdW5jdGlvbiBTdGF0ZU1hbmFnZXIoKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0ZU1hbmFnZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbC5hcHBseShfc3VwZXIsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuICAgICAgX3RoaXMuc2VsZWN0ID0gdm9pZCAwO1xuICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlucHV0VmFsdWU6IF90aGlzLnByb3BzLmlucHV0VmFsdWUgIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLmlucHV0VmFsdWUgOiBfdGhpcy5wcm9wcy5kZWZhdWx0SW5wdXRWYWx1ZSxcbiAgICAgICAgbWVudUlzT3BlbjogX3RoaXMucHJvcHMubWVudUlzT3BlbiAhPT0gdW5kZWZpbmVkID8gX3RoaXMucHJvcHMubWVudUlzT3BlbiA6IF90aGlzLnByb3BzLmRlZmF1bHRNZW51SXNPcGVuLFxuICAgICAgICB2YWx1ZTogX3RoaXMucHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCA/IF90aGlzLnByb3BzLnZhbHVlIDogX3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlXG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uTWV0YSkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25DaGFuZ2UnLCB2YWx1ZSwgYWN0aW9uTWV0YSk7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLm9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbk1ldGEpIHtcbiAgICAgICAgLy8gVE9ETzogZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB3ZSBhbGxvdyB0aGUgcHJvcCB0byByZXR1cm4gYSBuZXdcbiAgICAgICAgLy8gdmFsdWUsIGJ1dCBub3cgaW5wdXRWYWx1ZSBpcyBhIGNvbnRyb2xsYWJsZSBwcm9wIHdlIHByb2JhYmx5IHNob3VsZG4ndFxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBfdGhpcy5jYWxsUHJvcCgnb25JbnB1dENoYW5nZScsIHZhbHVlLCBhY3Rpb25NZXRhKTtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogbmV3VmFsdWUgIT09IHVuZGVmaW5lZCA/IG5ld1ZhbHVlIDogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1lbnVPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jYWxsUHJvcCgnb25NZW51T3BlbicpO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZW51SXNPcGVuOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub25NZW51Q2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLmNhbGxQcm9wKCdvbk1lbnVDbG9zZScpO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBtZW51SXNPcGVuOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RhdGVNYW5hZ2VyLCBbe1xuICAgICAga2V5OiBcImZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImJsdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICB0aGlzLnNlbGVjdC5ibHVyKCk7XG4gICAgICB9IC8vIEZJWE1FOiB1bnR5cGVkIGZsb3cgY29kZSwgcmV0dXJuIGFueVxuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFByb3BcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQcm9wKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wc1trZXldICE9PSB1bmRlZmluZWQgPyB0aGlzLnByb3BzW2tleV0gOiB0aGlzLnN0YXRlW2tleV07XG4gICAgICB9IC8vIEZJWE1FOiB1bnR5cGVkIGZsb3cgY29kZSwgcmV0dXJuIGFueVxuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNhbGxQcm9wXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2FsbFByb3AobmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkcHJvcHM7XG5cbiAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKF90aGlzJHByb3BzID0gdGhpcy5wcm9wcylbbmFtZV0uYXBwbHkoX3RoaXMkcHJvcHMsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBfdGhpcyRwcm9wczIuZGVmYXVsdElucHV0VmFsdWU7XG4gICAgICAgICAgICBfdGhpcyRwcm9wczIuZGVmYXVsdE1lbnVJc09wZW47XG4gICAgICAgICAgICBfdGhpcyRwcm9wczIuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMiwgW1wiZGVmYXVsdElucHV0VmFsdWVcIiwgXCJkZWZhdWx0TWVudUlzT3BlblwiLCBcImRlZmF1bHRWYWx1ZVwiXSk7XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoX3JlZikge1xuICAgICAgICAgICAgX3RoaXMyLnNlbGVjdCA9IF9yZWY7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiB0aGlzLmdldFByb3AoJ2lucHV0VmFsdWUnKSxcbiAgICAgICAgICBtZW51SXNPcGVuOiB0aGlzLmdldFByb3AoJ21lbnVJc09wZW4nKSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgICBvbklucHV0Q2hhbmdlOiB0aGlzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICAgICAgb25NZW51Q2xvc2U6IHRoaXMub25NZW51Q2xvc2UsXG4gICAgICAgICAgb25NZW51T3BlbjogdGhpcy5vbk1lbnVPcGVuLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLmdldFByb3AoJ3ZhbHVlJylcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTdGF0ZU1hbmFnZXI7XG4gIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcywgX3RlbXA7XG59O1xuXG5leHBvcnQgeyBtYW5hZ2VTdGF0ZSBhcyBtIH07XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlID0gcmVxdWlyZShcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImltcG9ydCB7IFMgYXMgU2VsZWN0IH0gZnJvbSAnLi9TZWxlY3QtZGJiMTJlNTQuZXNtLmpzJztcbmV4cG9ydCB7IGMgYXMgY3JlYXRlRmlsdGVyLCBkIGFzIGRlZmF1bHRUaGVtZSwgbSBhcyBtZXJnZVN0eWxlcyB9IGZyb20gJy4vU2VsZWN0LWRiYjEyZTU0LmVzbS5qcyc7XG5pbXBvcnQgeyBtIGFzIG1hbmFnZVN0YXRlIH0gZnJvbSAnLi9zdGF0ZU1hbmFnZXItODQ1YTMzMDAuZXNtLmpzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzJztcbmltcG9ydCB7IF8gYXMgX2NyZWF0ZVN1cGVyIH0gZnJvbSAnLi9pbmRleC00YmQwMzU3MS5lc20uanMnO1xuZXhwb3J0IHsgYyBhcyBjb21wb25lbnRzIH0gZnJvbSAnLi9pbmRleC00YmQwMzU3MS5lc20uanMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhY2hlUHJvdmlkZXIgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSAnQGVtb3Rpb24vY2FjaGUnO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdGFnZ2VkVGVtcGxhdGVMaXRlcmFsJztcbmltcG9ydCAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0ICdyZWFjdC1pbnB1dC1hdXRvc2l6ZSc7XG5pbXBvcnQgJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0ICdyZWFjdC1kb20nO1xuXG52YXIgTm9uY2VQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTm9uY2VQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOb25jZVByb3ZpZGVyKTtcblxuICBmdW5jdGlvbiBOb25jZVByb3ZpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vbmNlUHJvdmlkZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5jcmVhdGVFbW90aW9uQ2FjaGUgPSBmdW5jdGlvbiAobm9uY2UsIGtleSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUNhY2hlKHtcbiAgICAgICAgbm9uY2U6IG5vbmNlLFxuICAgICAgICBrZXk6IGtleVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmNyZWF0ZUVtb3Rpb25DYWNoZSA9IG1lbW9pemVPbmUoX3RoaXMuY3JlYXRlRW1vdGlvbkNhY2hlKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTm9uY2VQcm92aWRlciwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBlbW90aW9uQ2FjaGUgPSB0aGlzLmNyZWF0ZUVtb3Rpb25DYWNoZSh0aGlzLnByb3BzLm5vbmNlLCB0aGlzLnByb3BzLmNhY2hlS2V5KTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDYWNoZVByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBlbW90aW9uQ2FjaGVcbiAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBOb25jZVByb3ZpZGVyO1xufShDb21wb25lbnQpO1xuXG52YXIgaW5kZXggPSBtYW5hZ2VTdGF0ZShTZWxlY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbmV4cG9ydCB7IE5vbmNlUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJyZXF1aXJlJCQwIiwiX3JlYWN0IiwiX3Byb3BUeXBlcyIsInNldFByb3RvdHlwZU9mIiwiX2RlZmluZVByb3BlcnR5IiwiX2RlZmluZVByb3BlcnR5JDEiLCJjcmVhdGVDb250ZXh0IiwiQ29tcG9uZW50IiwiY3JlYXRlUG9ydGFsIiwiYXJyYXlMaWtlVG9BcnJheSIsImFycmF5V2l0aG91dEhvbGVzIiwiaXRlcmFibGVUb0FycmF5IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVNwcmVhZCIsInVzZU1lbW8iLCJSZWFjdCIsImNzcyIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwiX3JlZjIiLCJjc3MkMSIsImNzcyQyIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBUyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0FBQzdELEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNaLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0IsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtBQUN4RCxJQUFJLEdBQUcsRUFBRTtBQUNULE1BQU0sS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQy9C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
