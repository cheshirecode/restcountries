import { j as jsx$2, G as Global, k as keyframes } from './common/emotion-react.browser.esm-45700e35.js';
import { r as react, o as objectAssign } from './common/index-04edb6a1.js';
import { T as ThemeContext } from './common/emotion-element-99289b21.browser.esm-5097461b.js';
import { n as newStyled } from './common/emotion-styled.browser.esm-2a8b0a2b.js';
import './common/emotion-utils.browser.esm-07bb8819.js';
import './common/_commonjsHelpers-8c19dec8.js';

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

const name = "@emotion/react";
const version = "11.4.1";
const main = "dist/emotion-react.cjs.js";
const module = "dist/emotion-react.esm.js";
const browser = {
  "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
  "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
};
const types = "types/index.d.ts";
const files = [
  "src",
  "dist",
  "jsx-runtime",
  "jsx-dev-runtime",
  "isolated-hoist-non-react-statics-do-not-use-this-in-your-code",
  "types/*.d.ts",
  "macro.js",
  "macro.d.ts",
  "macro.js.flow"
];
const sideEffects = false;
const author = "mitchellhamilton <mitchell@mitchellhamilton.me>";
const license = "MIT";
const scripts = {
  "test:typescript": "dtslint types"
};
const dependencies = {
  "@babel/runtime": "^7.13.10",
  "@emotion/cache": "^11.4.0",
  "@emotion/serialize": "^1.0.2",
  "@emotion/sheet": "^1.0.2",
  "@emotion/utils": "^1.0.0",
  "@emotion/weak-memoize": "^0.2.5",
  "hoist-non-react-statics": "^3.3.1"
};
const peerDependencies = {
  "@babel/core": "^7.0.0",
  react: ">=16.8.0"
};
const peerDependenciesMeta = {
  "@babel/core": {
    optional: true
  },
  "@types/react": {
    optional: true
  }
};
const devDependencies = {
  "@babel/core": "^7.13.10",
  "@emotion/css": "11.1.3",
  "@emotion/css-prettifier": "1.0.0",
  "@emotion/server": "11.4.0",
  "@emotion/styled": "11.3.0",
  "@types/react": "^16.9.11",
  dtslint: "^0.3.0",
  "html-tag-names": "^1.1.2",
  react: "16.14.0",
  "svg-tag-names": "^1.1.1"
};
const repository = "https://github.com/emotion-js/emotion/tree/main/packages/react";
const publishConfig = {
  access: "public"
};
const preconstruct = {
  entrypoints: [
    "./index.js",
    "./jsx-runtime.js",
    "./jsx-dev-runtime.js",
    "./isolated-hoist-non-react-statics-do-not-use-this-in-your-code.js"
  ],
  umdName: "emotionReact"
};
var packageInfo = {
  name: name,
  version: version,
  main: main,
  module: module,
  browser: browser,
  types: types,
  files: files,
  sideEffects: sideEffects,
  author: author,
  license: license,
  scripts: scripts,
  dependencies: dependencies,
  peerDependencies: peerDependencies,
  peerDependenciesMeta: peerDependenciesMeta,
  devDependencies: devDependencies,
  repository: repository,
  publishConfig: publishConfig,
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: preconstruct
};

/**
 * Allows for nested scales with shorthand values
 * @example
 * {
 *   colors: {
 *     primary: { __default: '#00f', light: '#33f' }
 *   }
 * }
 * css({ color: 'primary' }); // { color: '#00f' }
 * css({ color: 'primary.light' }) // { color: '#33f' }
 */

const THEME_UI_DEFAULT_KEY = '__default';

const hasDefault = x => {
  return typeof x === 'object' && x !== null && THEME_UI_DEFAULT_KEY in x;
};
/**
 * Extracts value under path from a deeply nested object.
 * Used for Themes, variants and Theme UI style objects.
 * Given a path to object with `__default` key, returns the value under that key.
 *
 * @param obj a theme, variant or style object
 * @param path path separated with dots (`.`)
 * @param fallback default value returned if get(obj, path) is not found
 */


function get(obj, path, fallback, p, undef) {
  const pathArray = path && typeof path === 'string' ? path.split('.') : [path];

  for (p = 0; p < pathArray.length; p++) {
    obj = obj ? obj[pathArray[p]] : undef;
  }

  if (obj === undef) return fallback;
  return hasDefault(obj) ? obj[THEME_UI_DEFAULT_KEY] : obj;
}
const getObjectWithVariants = (obj, theme) => {
  if (obj && obj['variant']) {
    let result = {};

    for (const key in obj) {
      const x = obj[key];

      if (key === 'variant') {
        const val = typeof x === 'function' ? x(theme) : x;
        const variant = getObjectWithVariants(get(theme, val), theme);
        result = { ...result,
          ...variant
        };
      } else {
        result[key] = x;
      }
    }

    return result;
  }

  return obj;
};
const defaultBreakpoints = [40, 52, 64].map(n => n + 'em');
const defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
const aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
const multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  scrollMarginX: ['scrollMarginLeft', 'scrollMarginRight'],
  scrollMarginY: ['scrollMarginTop', 'scrollMarginBottom'],
  scrollPaddingX: ['scrollPaddingLeft', 'scrollPaddingRight'],
  scrollPaddingY: ['scrollPaddingTop', 'scrollPaddingBottom'],
  size: ['width', 'height']
};
const scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  caretColor: 'colors',
  columnRuleColor: 'colors',
  textDecorationColor: 'colors',
  opacity: 'opacities',
  transition: 'transitions',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  marginBlock: 'space',
  marginBlockEnd: 'space',
  marginBlockStart: 'space',
  marginInline: 'space',
  marginInlineEnd: 'space',
  marginInlineStart: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  paddingBlock: 'space',
  paddingBlockEnd: 'space',
  paddingBlockStart: 'space',
  paddingInline: 'space',
  paddingInlineEnd: 'space',
  paddingInlineStart: 'space',
  scrollMargin: 'space',
  scrollMarginTop: 'space',
  scrollMarginRight: 'space',
  scrollMarginBottom: 'space',
  scrollMarginLeft: 'space',
  scrollMarginX: 'space',
  scrollMarginY: 'space',
  scrollPadding: 'space',
  scrollPaddingTop: 'space',
  scrollPaddingRight: 'space',
  scrollPaddingBottom: 'space',
  scrollPaddingLeft: 'space',
  scrollPaddingX: 'space',
  scrollPaddingY: 'space',
  inset: 'space',
  insetBlock: 'space',
  insetBlockEnd: 'space',
  insetBlockStart: 'space',
  insetInline: 'space',
  insetInlineEnd: 'space',
  insetInlineStart: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  borderBlock: 'borders',
  borderBlockColor: 'colors',
  borderBlockEnd: 'borders',
  borderBlockEndColor: 'colors',
  borderBlockEndStyle: 'borderStyles',
  borderBlockEndWidth: 'borderWidths',
  borderBlockStart: 'borders',
  borderBlockStartColor: 'colors',
  borderBlockStartStyle: 'borderStyles',
  borderBlockStartWidth: 'borderWidths',
  borderBlockStyle: 'borderStyles',
  borderBlockWidth: 'borderWidths',
  borderEndEndRadius: 'radii',
  borderEndStartRadius: 'radii',
  borderInline: 'borders',
  borderInlineColor: 'colors',
  borderInlineEnd: 'borders',
  borderInlineEndColor: 'colors',
  borderInlineEndStyle: 'borderStyles',
  borderInlineEndWidth: 'borderWidths',
  borderInlineStart: 'borders',
  borderInlineStartColor: 'colors',
  borderInlineStartStyle: 'borderStyles',
  borderInlineStartWidth: 'borderWidths',
  borderInlineStyle: 'borderStyles',
  borderInlineWidth: 'borderWidths',
  borderStartEndRadius: 'radii',
  borderStartStartRadius: 'radii',
  columnRuleWidth: 'borderWidths',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  blockSize: 'sizes',
  inlineSize: 'sizes',
  maxBlockSize: 'sizes',
  maxInlineSize: 'sizes',
  minBlockSize: 'sizes',
  minInlineSize: 'sizes',
  columnWidth: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

const positiveOrNegative = (scale, value) => {
  if (typeof value !== 'number' || value >= 0) {
    if (typeof value === 'string' && value.startsWith('-')) {
      const valueWithoutMinus = value.substring(1);
      const n = get(scale, valueWithoutMinus, valueWithoutMinus);

      if (typeof n === 'number') {
        return n * -1;
      }

      return `-${n}`;
    }

    return get(scale, value, value);
  }

  const absolute = Math.abs(value);
  const n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return Number(n) * -1;
};

const transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginBlock', 'marginBlockEnd', 'marginBlockStart', 'marginInline', 'marginInlineEnd', 'marginInlineStart', 'top', 'bottom', 'left', 'right'].reduce((acc, curr) => ({ ...acc,
  [curr]: positiveOrNegative
}), {});

const responsive = styles => theme => {
  const next = {};
  const breakpoints = theme && theme.breakpoints || defaultBreakpoints;
  const mediaQueries = [null, ...breakpoints.map(n => n.includes('@media') ? n : `@media screen and (min-width: ${n})`)];

  for (const k in styles) {
    const key = k;
    let value = styles[key];

    if (typeof value === 'function') {
      value = value(theme || {});
    }

    if (value === false || value == null) {
      continue;
    }

    if (!Array.isArray(value)) {
      next[key] = value;
      continue;
    }

    for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      const media = mediaQueries[i];

      if (!media) {
        next[key] = value[i];
        continue;
      }

      next[media] = next[media] || {};
      if (value[i] == null) continue;
      next[media][key] = value[i];
    }
  }

  return next;
};

const css = (args = {}) => (props = {}) => {
  const theme = { ...defaultTheme,
    ...('theme' in props ? props.theme : props)
  }; // insert variant props before responsive styles, so they can be merged
  // we need to maintain order of the style props, so if a variant is place in the middle
  // of other props, it will extends its props at that same location order.

  const obj = getObjectWithVariants(typeof args === 'function' ? args(theme) : args, theme);
  const styles = responsive(obj)(theme);
  let result = {};

  for (const key in styles) {
    const x = styles[key];
    const val = typeof x === 'function' ? x(theme) : x;

    if (val && typeof val === 'object') {
      if (hasDefault(val)) {
        result[key] = val[THEME_UI_DEFAULT_KEY];
        continue;
      } // On type level, val can also be an array here,
      // but we transform all arrays in `responsive` function.


      result[key] = css(val)(theme);
      continue;
    }

    const prop = key in aliases ? aliases[key] : key;
    const scaleName = prop in scales ? scales[prop] : undefined;
    const scale = scaleName ? theme == null ? void 0 : theme[scaleName] : get(theme, prop, {});
    const transform = get(transforms, prop, get);
    const value = transform(scale, val, val);

    if (prop in multiples) {
      const dirs = multiples[prop];

      for (let i = 0; i < dirs.length; i++) {
        result[dirs[i]] = value;
      }
    } else {
      result[prop] = value;
    }
  }

  return result;
};

const getCSS = props => theme => {
  const styles = css(props.sx)(theme);
  const raw = typeof props.css === 'function' ? props.css(theme) : props.css;
  return [styles, raw];
};

const parseProps = props => {
  if (!props || !props.sx && !props.css) return props;
  const next = {};

  for (let key in props) {
    if (key === 'sx') continue;
    next[key] = props[key];
  }

  next.css = getCSS(props);
  return next;
};

const __EMOTION_VERSION__ = packageInfo.version;
const jsx = (type, props, ...children) => jsx$2(type, parseProps(props), ...children);

/**
 * @internal
 */
const __themeUiDefaultContextValue = {
  __EMOTION_VERSION__,
  theme: {}
};
/**
 * @internal
 */

const __ThemeUIContext = /*#__PURE__*/react.createContext(__themeUiDefaultContextValue);
const useThemeUI = () => react.useContext(__ThemeUIContext);
const canUseSymbol$1 = typeof Symbol === 'function' && Symbol.for;
const REACT_ELEMENT = canUseSymbol$1 ? Symbol.for('react.element') : 0xeac7;
const FORWARD_REF = canUseSymbol$1 ? Symbol.for('react.forward_ref') : 0xeac7;
const deepmergeOptions = {
  isMergeableObject: n => {
    return !!n && typeof n === 'object' && n.$$typeof !== REACT_ELEMENT && n.$$typeof !== FORWARD_REF;
  },
  arrayMerge: (_leftArray, rightArray) => rightArray
};
/**
 * Deeply merge themes
 */

const merge = (a, b) => cjs(a, b, deepmergeOptions);

function mergeAll(...args) {
  return cjs.all(args, deepmergeOptions);
}

merge.all = mergeAll;

/**
 * @internal
 */
const __ThemeUIInternalBaseThemeProvider = ({
  context,
  children
}) => jsx(ThemeContext.Provider, {
  value: context.theme
}, jsx(__ThemeUIContext.Provider, {
  value: context,
  children
}));
function ThemeProvider({
  theme,
  children
}) {
  const outer = useThemeUI();

  const context = typeof theme === 'function' ? { ...outer,
    theme: theme(outer.theme)
  } : merge.all({}, outer, {
    theme
  });
  return jsx(__ThemeUIInternalBaseThemeProvider, {
    context,
    children
  });
}

const toVarName = key => `--theme-ui-${key.replace('-__default', '')}`;

const toVarValue = key => `var(${toVarName(key)})`;

const join = (...args) => args.filter(Boolean).join('-');

const reservedKeys = new Set(['useCustomProperties', 'initialColorModeName', 'printColorModeName', 'initialColorMode', 'useLocalStorage', 'config']); // convert theme values to custom properties

const toCustomProperties = (obj, parent) => {
  const next = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    const name = join(parent, key);

    if (value && typeof value === 'object') {
      next[key] = toCustomProperties(value, name);
      continue;
    }

    if (reservedKeys.has(key)) {
      next[key] = value;
      continue;
    }

    next[key] = toVarValue(name);
  }

  return next;
};
/**
 * @internal
 * Recursively transforms an object into CSS variables excluding "modes" key.
 */

const __objectToVars = (parent, obj) => {
  let vars = {};

  for (let key in obj) {
    if (key === 'modes') continue;
    const name = join(parent, key);
    const value = obj[key];

    if (value && typeof value === 'object') {
      vars = { ...vars,
        ...__objectToVars(name, value)
      };
    } else {
      vars[toVarName(name)] = value;
    }
  }

  return vars;
};
/**
 * @internal
 * Creates root styles for color modes.
 * - Transforms color scale into CSS variables.
 * - Sets background and text color.
 */

const __createColorStyles = (theme = {}) => {
  const {
    useCustomProperties,
    initialColorModeName,
    printColorModeName,
    useRootStyles
  } = theme.config || theme || {};
  const colors = theme.rawColors || theme.colors;
  if (!colors || useRootStyles === false) return {};

  if (useCustomProperties === false) {
    return css({
      color: 'text',
      bg: 'background'
    })(theme);
  }

  const modes = colors.modes || {};

  const styles = __createColorProperties(colors, modes);

  if (printColorModeName) {
    const mode = printColorModeName === 'initial' || printColorModeName === initialColorModeName ? colors : modes[printColorModeName];
    styles['@media print'] = __objectToVars('colors', mode);
  }

  const colorToVarValue = color => toVarValue(`colors-${color}`);

  return css({ ...styles,
    color: colorToVarValue('text'),
    bg: colorToVarValue('background')
  })(theme);
};
/**
 * @internal
 * Returns an object with colors turned into Custom CSS Properties and
 * .theme-ui-<colormode> classes used for no-flash serverside rendering.
 */

function __createColorProperties(colors, modes) {
  const styles = __objectToVars('colors', colors);

  Object.keys(modes).forEach(mode => {
    const className = `.theme-ui-${mode}`;
    const key = `&${className}, ${className} &`;
    styles[key] = __objectToVars('colors', modes[mode]);
  });
  return styles;
}

const STORAGE_KEY = 'theme-ui-color-mode';
const storage = {
  get: () => {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (err) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', err);
    }
  },
  set: value => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (err) {
      console.warn('localStorage is disabled and color mode might not work as expected.', 'Please check your Site Settings.', err);
    }
  }
};

const getPreferredColorScheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
  }

  return null;
};

const useClientsideEffect = typeof window === 'undefined' ? () => {} : react.useLayoutEffect;

const TopLevelColorModeProvider = ({
  outerCtx,
  children
}) => {
  const outerTheme = outerCtx.theme || {};
  const {
    initialColorModeName,
    useColorSchemeMediaQuery,
    useLocalStorage
  } = outerTheme.config || outerTheme;
  let [colorMode, setColorMode] = react.useState(() => {
    const preferredMode = useColorSchemeMediaQuery !== false && getPreferredColorScheme();
    return preferredMode || initialColorModeName;
  }); // on first render, we read the color mode from localStorage and
  // clear the class on document element body

  useClientsideEffect(() => {
    const stored = useLocalStorage !== false && storage.get();

    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('theme-ui-' + stored);
    }

    if (stored && stored !== colorMode) {
      colorMode = stored;
      setColorMode(stored);
    }
  }, []); // when mode changes, we save it to localStorage

  react.useEffect(() => {
    if (colorMode && useLocalStorage !== false) {
      storage.set(colorMode);
    }
  }, [colorMode, useLocalStorage]);

  const newTheme = useThemeWithAppliedColorMode({
    colorMode,
    outerTheme
  });
  const newCtx = { ...outerCtx,
    theme: newTheme,
    colorMode,
    setColorMode
  };
  return /*#__PURE__*/react.createElement(__ThemeUIInternalBaseThemeProvider, {
    context: newCtx
  }, /*#__PURE__*/react.createElement(GlobalColorStyles, {
    theme: newTheme
  }), children);
};

function useColorMode() {
  const {
    colorMode,
    setColorMode
  } = useThemeUI();

  if (typeof setColorMode !== 'function') {
    throw new Error(`[useColorMode] requires the ColorModeProvider component`);
  } // We're allowing the user to specify a narrower type for its color mode name.


  return [colorMode, setColorMode];
}

const omitModes = colors => {
  const res = { ...colors
  };
  delete res.modes;
  return res;
};

function copyRawColors(colors, outerThemeRawColors) {
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'string' && !value.startsWith('var(')) {
      outerThemeRawColors[key] = value;
    } else if (typeof value === 'object') {
      const newValue = { ...outerThemeRawColors[key]
      };
      copyRawColors(value, newValue);
      outerThemeRawColors[key] = newValue;
    }
  }
}

function useThemeWithAppliedColorMode({
  outerTheme,
  colorMode
}) {
  const theme = react.useMemo(() => {
    const res = { ...outerTheme
    };
    const modes = get(res, 'colors.modes', {});
    const currentColorMode = get(modes, colorMode, {});

    if (colorMode) {
      res.colors = { ...res.colors,
        ...currentColorMode
      };
    }

    const {
      useCustomProperties,
      initialColorModeName = '__default'
    } = outerTheme.config || outerTheme;
    let outerThemeRawColors = outerTheme.rawColors || outerTheme.colors || {};

    if (useCustomProperties !== false) {
      const alreadyHasRawColors = res.rawColors != null;
      const colors = res.colors || {};

      if (alreadyHasRawColors) {
        outerThemeRawColors = { ...outerThemeRawColors
        };
        copyRawColors(colors, outerThemeRawColors);

        if (outerThemeRawColors.modes) {
          outerThemeRawColors.modes[initialColorModeName] = omitModes(outerThemeRawColors);
        }

        res.rawColors = outerThemeRawColors;
      } else {
        if (!('modes' in outerThemeRawColors)) {
          res.rawColors = colors;
        } else {
          const modes = {
            [initialColorModeName]: omitModes(outerThemeRawColors),
            ...outerThemeRawColors.modes
          };
          res.rawColors = { ...colors,
            modes
          };
          /* modes doesn't match index signature by design */
        }
      }

      res.colors = toCustomProperties(omitModes(outerThemeRawColors), 'colors');
    }

    return res;
  }, [colorMode, outerTheme]);
  return theme;
}

function GlobalColorStyles({
  theme
}) {
  return jsx(Global, {
    styles: () => {
      return {
        html: __createColorStyles(theme)
      };
    }
  });
}

function NestedColorModeProvider({
  outerCtx,
  children
}) {
  var _newTheme$config2;

  const newTheme = useThemeWithAppliedColorMode({
    outerTheme: outerCtx.theme,
    colorMode: outerCtx.colorMode
  }); // Nested theme providers need to be rerendered after hydration for the correct
  // color mode to apply.

  const [needsRerender, setNeedsRerender] = react.useState( // Note: we could also check some "ssr-enabled" flag as an optimization for
  // SPAs, as deeply nested theme providers will also pay a performance penalty
  // for this SSR bug fix
  () => {
    var _newTheme$config;

    return ((_newTheme$config = newTheme.config) == null ? void 0 : _newTheme$config.useLocalStorage) !== false;
  });
  useClientsideEffect(() => void setNeedsRerender(false), []);
  const themeColors = newTheme.rawColors || newTheme.colors;
  const useCustomProperties = (_newTheme$config2 = newTheme.config) == null ? void 0 : _newTheme$config2.useCustomProperties;
  const colorVars = react.useMemo(() => {
    if (useCustomProperties === false) {
      return {};
    }

    const colors = themeColors || {};
    return css(__createColorProperties(colors, colors.modes || {}))(newTheme);
  }, [newTheme, themeColors, useCustomProperties]);
  return /*#__PURE__*/react.createElement(__ThemeUIInternalBaseThemeProvider, {
    context: { ...outerCtx,
      theme: newTheme
    }
  }, jsx('div', {
    'data-themeui-nested-provider': true,
    // the key here ensures that children will be rerendered after color
    // mode is read from localStorage
    key: Number(needsRerender),
    suppressHydrationWarning: true,
    css: colorVars,
    children
  }));
}

const ColorModeProvider = ({
  children
}) => {
  const outerCtx = useThemeUI();
  const isTopLevelColorModeProvider = typeof outerCtx.setColorMode !== 'function';
  return isTopLevelColorModeProvider ? /*#__PURE__*/react.createElement(TopLevelColorModeProvider, {
    outerCtx: outerCtx
  }, children) : /*#__PURE__*/react.createElement(NestedColorModeProvider, {
    outerCtx: outerCtx
  }, children);
};

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
        _defineProperty(target, key, source[key]);
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

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react.createContext({});
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react.createElement(react.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';

// mdx components
const tags = ['p', 'b', 'i', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img', 'pre', 'code', 'ol', 'ul', 'li', 'blockquote', 'hr', 'em', 'table', 'tr', 'th', 'td', 'em', 'strong', 'del', // mdx
'inlineCode', 'thematicBreak', // other
'div', // theme-ui
'root'];
const aliases$1 = {
  inlineCode: 'code',
  thematicBreak: 'hr',
  root: 'div'
};

const isAlias = x => x in aliases$1;

const alias = n => isAlias(n) ? aliases$1[n] : n;

const propOverrides = {
  th: {
    align: 'textAlign'
  },
  td: {
    align: 'textAlign'
  }
};
const themed = key => ({
  theme,
  ...rest
}) => {
  const propsStyle = propOverrides[key];
  const extraStyles = propsStyle ? Object.keys(rest).filter(prop => propsStyle[prop] !== undefined).reduce((acc, prop) => ({ ...acc,
    [propsStyle[prop]]: rest[prop]
  }), {}) : undefined;
  return css({ ...get(theme, `styles.${key}`),
    ...extraStyles
  })(theme);
}; // opt out of typechecking whenever `as` prop is used

const Themed = newStyled('div')(themed('div'));
/**
 * @deprecated since 0.6.0.
 *
 * `Styled` was renamed to `Themed` to avoid confusion with styled components.
 */

const Styled = newStyled('div')(themed('div'));

const warnStyled = tag => props => {
  react.useEffect(() => {
  }, []);
  return /*#__PURE__*/react.createElement(alias(tag), props);
};

const components = {};
tags.forEach(tag => {
  // fixme?
  components[tag] = newStyled(alias(tag))(themed(tag));
  Themed[tag] = components[tag];
  Styled[tag] = newStyled(warnStyled(tag))(themed(tag));
});

const createComponents = comps => {
  const next = { ...components
  };
  const componentKeys = Object.keys(comps);
  componentKeys.forEach(key => {
    next[key] = newStyled(comps[key])(themed(key));
  });
  return next;
};

const MDXProvider$1 = ({
  components,
  children
}) => {
  const outer = useMDXComponents();
  return jsx(MDXProvider, {
    components: createComponents({ ...outer,
      ...components
    }),
    children
  });
};

const RootStyles = () => jsx(Global, {
  styles: emotionTheme => {
    var _theme$config;

    const theme = emotionTheme;
    const {
      useRootStyles
    } = theme.config || theme;

    if (useRootStyles === false || theme.styles && !theme.styles.root) {
      return null;
    }

    const boxSizing = ((_theme$config = theme.config) == null ? void 0 : _theme$config.useBorderBox) === false ? undefined : 'border-box';
    return css({
      '*': {
        boxSizing
      },
      html: {
        variant: 'styles.root'
      },
      body: {
        margin: 0
      }
    })(theme);
  }
});

const ThemeProvider$1 = ({
  theme,
  components,
  children
}) => {
  const outer = useThemeUI();
  const isTopLevel = outer === __themeUiDefaultContextValue;
  return /*#__PURE__*/react.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/react.createElement(ColorModeProvider, null, isTopLevel && /*#__PURE__*/react.createElement(RootStyles, null), /*#__PURE__*/react.createElement(MDXProvider$1, {
    components: components
  }, children)));
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var merge$1 = function merge(a, b) {
  var result = objectAssign({}, a, b);

  for (var key in a) {
    var _assign;

    if (!a[key] || typeof b[key] !== 'object') continue;
    objectAssign(result, (_assign = {}, _assign[key] = objectAssign(a[key], b[key]), _assign));
  }

  return result;
}; // sort object-value responsive styles

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }).forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get$1(scale, n, n);
};

var get$1 = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get$1(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get$1(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge$1(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }

        if (raw !== null) {
          styles = merge$1(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }

        continue;
      }

      objectAssign(styles, sx(raw, scale, props));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);

    if (!media) {
      objectAssign(styles, style);
    } else {
      var _assign2;

      objectAssign(styles, (_assign2 = {}, _assign2[media] = objectAssign({}, styles[media], style), _assign2));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {};

  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);

    if (!breakpoint) {
      objectAssign(styles, style);
    } else {
      var _assign3;

      var media = createMediaQuery(breakpoint);
      objectAssign(styles, (_assign3 = {}, _assign3[media] = objectAssign({}, styles[media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale, _props) {
    var result = {};
    var n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach(function (prop) {
      result[prop] = n;
    });
    return result;
  };

  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
}; // new v5 API

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {};
  Object.keys(args).forEach(function (key) {
    var conf = args[key];

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }

    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }

    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};
var compose = function compose() {
  var config = {};

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return;
    objectAssign(config, parser.config);
  });
  var parser = createParser(config);
  return parser;
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return get$1(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = system(config);

var config$1 = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config$1.bg = config$1.backgroundColor;
var color = system(config$1);

var defaults$1 = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config$2 = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults$1.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = system(config$2);

var config$3 = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = system(config$3);

var defaults$2 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config$4 = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = system(config$4);

var config$5 = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  }
};
config$5.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths'
};
config$5.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors'
};
config$5.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles'
};
config$5.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii'
};
config$5.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii'
};
config$5.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths'
};
config$5.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors'
};
config$5.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles'
};
config$5.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii'
};
config$5.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii'
};
config$5.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths'
};
config$5.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors'
};
config$5.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles'
};
config$5.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths'
};
config$5.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors'
};
config$5.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles'
};
var border = system(config$5);

var config$6 = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config$6.bgImage = config$6.backgroundImage;
config$6.bgSize = config$6.backgroundSize;
config$6.bgPosition = config$6.backgroundPosition;
config$6.bgRepeat = config$6.backgroundRepeat;
var background = system(config$6);

var defaults$3 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config$7 = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults$3.space
  }
};
var position = system(config$7);

var defaults$4 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

var isNumber$1 = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber$1(n)) {
    return get$1(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = get$1(scale, absolute, absolute);

  if (!isNumber$1(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var configs = {};
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults$4.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = system(configs.margin);
var padding = system(configs.padding);
var space = compose(margin, padding);

var shadow = system({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// based on https://github.com/developit/dlv
var get$2 = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var defaultBreakpoints$1 = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme$1 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases$2 = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples$1 = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales$1 = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative$1 = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get$2(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get$2(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms$1 = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative$1, _extends2));
}, {});
var responsive$1 = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get$2(theme, 'breakpoints', defaultBreakpoints$1);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        if (value[i] == null) continue;
        next[media][key] = value[i];
      }
    }

    return next;
  };
};
var css$1 = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends({}, defaultTheme$1, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive$1(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get$2(theme, val))(theme);
        result = _extends({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get$2(aliases$2, key, key);
      var scaleName = get$2(scales$1, prop);
      var scale = get$2(theme, scaleName, get$2(theme, prop, {}));
      var transform = get$2(transforms$1, prop, get$2);
      var value = transform(scale, val, val);

      if (multiples$1[prop]) {
        var dirs = multiples$1[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return css$1(get$1(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return get$1(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = createParser(config);
  return parser;
};
var buttonStyle = variant({
  key: 'buttons'
});
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});

var all = compose(space, typography, color, layout, flexbox, border, background, position, grid, shadow, buttonStyle, textStyle, colorStyle);
var props = all.propNames;
var createShouldForwardProp = function createShouldForwardProp(props) {
  var regex = new RegExp("^(" + props.join('|') + ")$");
  return memoize(function (prop) {
    return index(prop) && !regex.test(prop);
  });
};
createShouldForwardProp(props);

const boxSystemProps = [...space.propNames, ...color.propNames];
const shouldForwardProp = createShouldForwardProp(boxSystemProps);

const sx = props => css(props.sx)(props.theme);

const base = props => css(props.__css)(props.theme);

const variant$1 = ({
  theme,
  variant,
  __themeKey = 'variants'
}) => css(get(theme, __themeKey + '.' + variant, get(theme, variant)));

const Box = newStyled('div', {
  shouldForwardProp
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
}, base, variant$1, space, color, sx, props => props.css);
Box.displayName = 'Box';

const Flex = newStyled(Box)({
  display: 'flex'
});
Flex.displayName = 'Flex';

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

const px = n => typeof n === 'number' ? n + 'px' : n;

const widthToColumns = (width, repeat) => Array.isArray(width) ? width.map(w => widthToColumns(w, repeat)) : !!width && `repeat(auto-${repeat}, minmax(${px(width)}, 1fr))`;

const countToColumns = n => Array.isArray(n) ? n.map(countToColumns) : !!n && (typeof n === 'number' ? `repeat(${n}, 1fr)` : n);

const Grid = /*#__PURE__*/react.forwardRef(function Grid({
  width,
  columns,
  gap = 3,
  repeat = 'fit',
  ...props
}, ref) {
  const gridTemplateColumns = !!width ? widthToColumns(width, repeat) : countToColumns(columns);
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref
  }, props, {
    __themeKey: "grids",
    __css: {
      display: 'grid',
      gridGap: gap,
      gridTemplateColumns
    }
  }));
});

const Button = /*#__PURE__*/react.forwardRef(function Button(props, ref) {
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref,
    as: "button",
    variant: "primary"
  }, props, {
    __themeKey: "buttons",
    __css: {
      appearance: 'none',
      display: props.hidden ? undefined : 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      px: 3,
      py: 2,
      color: 'white',
      bg: 'primary',
      border: 0,
      borderRadius: 4
    }
  }));
});

const Link = /*#__PURE__*/react.forwardRef(function Link(props, ref) {
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref,
    as: "a",
    variant: "styles.a"
  }, props, {
    __themeKey: "links"
  }));
});

const Text = /*#__PURE__*/react.forwardRef(function Text(props, ref) {
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    as: "span",
    ref: ref,
    variant: "default"
  }, props, {
    __themeKey: "text"
  }));
});

const Heading = /*#__PURE__*/react.forwardRef(function Heading(props, ref) {
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref,
    as: "h2",
    variant: "heading"
  }, props, {
    __themeKey: "text",
    __css: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading'
    }
  }));
});

const Image = /*#__PURE__*/react.forwardRef(function Image(props, ref) {
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref,
    as: "img"
  }, props, {
    __themeKey: "images",
    __css: {
      maxWidth: '100%',
      height: 'auto',
      ...props.__css
    }
  }));
});

const Card = /*#__PURE__*/react.forwardRef(function Card(props, ref) {
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref,
    variant: "primary"
  }, props, {
    __themeKey: "cards"
  }));
});

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
});
const Spinner = /*#__PURE__*/react.forwardRef(function Spinner({
  size = 48,
  strokeWidth = 4,
  max = 1,
  title = 'Loading...',
  duration = 500,
  ...props
}, ref) {
  const r = 16 - strokeWidth;
  const C = 2 * r * Math.PI;
  const offset = C - 1 / 4 * C;
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref,
    as: "svg",
    viewBox: "0 0 32 32",
    width: size,
    height: size,
    strokeWidth: strokeWidth,
    fill: "none",
    stroke: "currentcolor",
    role: "img"
  }, props, {
    __css: {
      color: 'primary',
      overflow: 'visible'
    }
  }), /*#__PURE__*/react.createElement("title", null, title), /*#__PURE__*/react.createElement("circle", {
    cx: 16,
    cy: 16,
    r: r,
    opacity: 1 / 8
  }), /*#__PURE__*/react.createElement(Box, {
    as: "circle",
    cx: 16,
    cy: 16,
    r: r,
    strokeDasharray: C,
    strokeDashoffset: offset,
    __css: {
      transformOrigin: '50% 50%',
      animationName: spin.toString(),
      animationTimingFunction: 'linear',
      animationDuration: duration + 'ms',
      animationIterationCount: 'infinite'
    }
  }));
});

const IconButton = /*#__PURE__*/react.forwardRef(function IconButton({
  size = 32,
  ...props
}, ref) {
  var _props$__css;

  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref,
    as: "button",
    variant: "icon"
  }, props, {
    __themeKey: "buttons",
    __css: {
      label: ((_props$__css = props.__css) == null ? void 0 : _props$__css.label) || 'IconButton',
      appearance: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 1,
      width: size,
      height: size,
      color: 'inherit',
      bg: 'transparent',
      border: 'none',
      borderRadius: 4
    }
  }));
});

const Alert = /*#__PURE__*/react.forwardRef(function Alert(props, ref) {
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref,
    variant: "primary"
  }, props, {
    __themeKey: "alerts",
    __css: {
      display: 'flex',
      alignItems: 'center',
      px: 3,
      py: 2,
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      borderRadius: 4
    }
  }));
});

const AspectRatio = /*#__PURE__*/react.forwardRef(function AspectRatio({
  ratio = 4 / 3,
  children,
  ...props
}, ref) {
  return /*#__PURE__*/react.createElement(Box, {
    ref: ref,
    sx: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react.createElement(Box, {
    sx: {
      width: '100%',
      height: 0,
      paddingBottom: 100 / ratio + '%'
    }
  }), /*#__PURE__*/react.createElement(Box, _extends$1({}, props, {
    __css: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }), children));
});

const AspectImage = /*#__PURE__*/react.forwardRef(function AspectImage({
  ratio,
  ...props
}, ref) {
  return /*#__PURE__*/react.createElement(AspectRatio, {
    ratio: ratio
  }, /*#__PURE__*/react.createElement(Image, _extends$1({
    ref: ref
  }, props, {
    __css: {
      objectFit: 'cover'
    }
  })));
});

const Container = /*#__PURE__*/react.forwardRef(function Container(props, ref) {
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref,
    variant: "container"
  }, props, {
    __themeKey: "layout",
    __css: {
      width: '100%',
      maxWidth: 'container',
      mx: 'auto'
    }
  }));
});

const Message = /*#__PURE__*/react.forwardRef(function Message(props, ref) {
  return /*#__PURE__*/react.createElement(Box, _extends$1({
    ref: ref
  }, props, {
    __themeKey: "messages",
    __css: {
      padding: 3,
      paddingLeft: t => t.space[3] - t.space[1],
      borderLeftWidth: t => t.space[1],
      borderLeftStyle: 'solid',
      borderLeftColor: 'primary',
      borderRadius: 4,
      bg: 'highlight'
    }
  }));
});

const jsx$1 = jsx;

export { Alert, AspectImage, Box, Button, Card, Container, Flex, Grid, Heading, IconButton, Link, Message, Spinner, Text, ThemeProvider$1 as ThemeProvider, jsx$1 as jsx, useColorMode, useThemeUI };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtdWkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kZWVwbWVyZ2UvZGlzdC9janMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL2Nzcy9kaXN0L3RoZW1lLXVpLWNzcy5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL3BhcnNlLXByb3BzL2Rpc3QvdGhlbWUtdWktcGFyc2UtcHJvcHMuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9jb3JlL2Rpc3QvdGhlbWUtdWktY29yZS5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL2NvbG9yLW1vZGVzL2Rpc3QvdGhlbWUtdWktY29sb3ItbW9kZXMuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BtZHgtanMvcmVhY3QvZGlzdC9lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL21keC9kaXN0L3RoZW1lLXVpLW1keC5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHRoZW1lLXVpL3RoZW1lLXByb3ZpZGVyL2Rpc3QvdGhlbWUtdWktdGhlbWUtcHJvdmlkZXIuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3Nob3VsZC1mb3J3YXJkLXByb3Avbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3Nob3VsZC1mb3J3YXJkLXByb3Avbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2NvcmUvZGlzdC9pbmRleC5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vbGF5b3V0L2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2NvbG9yL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3R5cG9ncmFwaHkvZGlzdC9pbmRleC5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vZmxleGJveC9kaXN0L2luZGV4LmVzbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9ncmlkL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL2JvcmRlci9kaXN0L2luZGV4LmVzbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9iYWNrZ3JvdW5kL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3Bvc2l0aW9uL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3NwYWNlL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BzdHlsZWQtc3lzdGVtL3NoYWRvdy9kaXN0L2luZGV4LmVzbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9jc3MvZGlzdC9pbmRleC5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHN0eWxlZC1zeXN0ZW0vdmFyaWFudC9kaXN0L2luZGV4LmVzbS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3R5bGVkLXN5c3RlbS9zaG91bGQtZm9yd2FyZC1wcm9wL2Rpc3QvaW5kZXguZXNtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0aGVtZS11aS9jb21wb25lbnRzL2Rpc3QvdGhlbWUtdWktY29tcG9uZW50cy5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhlbWUtdWkvZGlzdC90aGVtZS11aS5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcblx0cmV0dXJuIChvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSlcblx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuXHRpZiAoIW9wdGlvbnMuY3VzdG9tTWVyZ2UpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlXG5cdH1cblx0dmFyIGN1c3RvbU1lcmdlID0gb3B0aW9ucy5jdXN0b21NZXJnZShrZXkpO1xuXHRyZXR1cm4gdHlwZW9mIGN1c3RvbU1lcmdlID09PSAnZnVuY3Rpb24nID8gY3VzdG9tTWVyZ2UgOiBkZWVwbWVyZ2Vcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNcblx0XHQ/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KS5maWx0ZXIoZnVuY3Rpb24oc3ltYm9sKSB7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0LnByb3BlcnR5SXNFbnVtZXJhYmxlKHN5bWJvbClcblx0XHR9KVxuXHRcdDogW11cbn1cblxuZnVuY3Rpb24gZ2V0S2V5cyh0YXJnZXQpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldCkuY29uY2F0KGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSlcbn1cblxuZnVuY3Rpb24gcHJvcGVydHlJc09uT2JqZWN0KG9iamVjdCwgcHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gcHJvcGVydHkgaW4gb2JqZWN0XG5cdH0gY2F0Y2goXykge1xuXHRcdHJldHVybiBmYWxzZVxuXHR9XG59XG5cbi8vIFByb3RlY3RzIGZyb20gcHJvdG90eXBlIHBvaXNvbmluZyBhbmQgdW5leHBlY3RlZCBtZXJnaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5mdW5jdGlvbiBwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSB7XG5cdHJldHVybiBwcm9wZXJ0eUlzT25PYmplY3QodGFyZ2V0LCBrZXkpIC8vIFByb3BlcnRpZXMgYXJlIHNhZmUgdG8gbWVyZ2UgaWYgdGhleSBkb24ndCBleGlzdCBpbiB0aGUgdGFyZ2V0IHlldCxcblx0XHQmJiAhKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSAvLyB1bnNhZmUgaWYgdGhleSBleGlzdCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLFxuXHRcdFx0JiYgT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0LCBrZXkpKSAvLyBhbmQgYWxzbyB1bnNhZmUgaWYgdGhleSdyZSBub25lbnVtZXJhYmxlLlxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZGVzdGluYXRpb24gPSB7fTtcblx0aWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuXHRcdGdldEtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHRhcmdldFtrZXldLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fVxuXHRnZXRLZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRpZiAocHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmIChwcm9wZXJ0eUlzT25PYmplY3QodGFyZ2V0LCBrZXkpICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pKSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0b3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXHRvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDtcblx0Ly8gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgaXMgYWRkZWQgdG8gYG9wdGlvbnNgIHNvIHRoYXQgY3VzdG9tIGFycmF5TWVyZ2UoKVxuXHQvLyBpbXBsZW1lbnRhdGlvbnMgY2FuIHVzZSBpdC4gVGhlIGNhbGxlciBtYXkgbm90IHJlcGxhY2UgaXQuXG5cdG9wdGlvbnMuY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZDtcblxuXHR2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcblx0dmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG5cdHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuXHRpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpXG5cdH1cblxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnMpXG5cdH0sIHt9KVxufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZXBtZXJnZV8xO1xuIiwiLyoqXG4gKiBBbGxvd3MgZm9yIG5lc3RlZCBzY2FsZXMgd2l0aCBzaG9ydGhhbmQgdmFsdWVzXG4gKiBAZXhhbXBsZVxuICoge1xuICogICBjb2xvcnM6IHtcbiAqICAgICBwcmltYXJ5OiB7IF9fZGVmYXVsdDogJyMwMGYnLCBsaWdodDogJyMzM2YnIH1cbiAqICAgfVxuICogfVxuICogY3NzKHsgY29sb3I6ICdwcmltYXJ5JyB9KTsgLy8geyBjb2xvcjogJyMwMGYnIH1cbiAqIGNzcyh7IGNvbG9yOiAncHJpbWFyeS5saWdodCcgfSkgLy8geyBjb2xvcjogJyMzM2YnIH1cbiAqL1xuXG5jb25zdCBUSEVNRV9VSV9ERUZBVUxUX0tFWSA9ICdfX2RlZmF1bHQnO1xuXG5jb25zdCBoYXNEZWZhdWx0ID0geCA9PiB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbCAmJiBUSEVNRV9VSV9ERUZBVUxUX0tFWSBpbiB4O1xufTtcbi8qKlxuICogRXh0cmFjdHMgdmFsdWUgdW5kZXIgcGF0aCBmcm9tIGEgZGVlcGx5IG5lc3RlZCBvYmplY3QuXG4gKiBVc2VkIGZvciBUaGVtZXMsIHZhcmlhbnRzIGFuZCBUaGVtZSBVSSBzdHlsZSBvYmplY3RzLlxuICogR2l2ZW4gYSBwYXRoIHRvIG9iamVjdCB3aXRoIGBfX2RlZmF1bHRgIGtleSwgcmV0dXJucyB0aGUgdmFsdWUgdW5kZXIgdGhhdCBrZXkuXG4gKlxuICogQHBhcmFtIG9iaiBhIHRoZW1lLCB2YXJpYW50IG9yIHN0eWxlIG9iamVjdFxuICogQHBhcmFtIHBhdGggcGF0aCBzZXBhcmF0ZWQgd2l0aCBkb3RzIChgLmApXG4gKiBAcGFyYW0gZmFsbGJhY2sgZGVmYXVsdCB2YWx1ZSByZXR1cm5lZCBpZiBnZXQob2JqLCBwYXRoKSBpcyBub3QgZm91bmRcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgsIGZhbGxiYWNrLCBwLCB1bmRlZikge1xuICBjb25zdCBwYXRoQXJyYXkgPSBwYXRoICYmIHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJyA/IHBhdGguc3BsaXQoJy4nKSA6IFtwYXRoXTtcblxuICBmb3IgKHAgPSAwOyBwIDwgcGF0aEFycmF5Lmxlbmd0aDsgcCsrKSB7XG4gICAgb2JqID0gb2JqID8gb2JqW3BhdGhBcnJheVtwXV0gOiB1bmRlZjtcbiAgfVxuXG4gIGlmIChvYmogPT09IHVuZGVmKSByZXR1cm4gZmFsbGJhY2s7XG4gIHJldHVybiBoYXNEZWZhdWx0KG9iaikgPyBvYmpbVEhFTUVfVUlfREVGQVVMVF9LRVldIDogb2JqO1xufVxuY29uc3QgZ2V0T2JqZWN0V2l0aFZhcmlhbnRzID0gKG9iaiwgdGhlbWUpID0+IHtcbiAgaWYgKG9iaiAmJiBvYmpbJ3ZhcmlhbnQnXSkge1xuICAgIGxldCByZXN1bHQgPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgY29uc3QgeCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoa2V5ID09PSAndmFyaWFudCcpIHtcbiAgICAgICAgY29uc3QgdmFsID0gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgPyB4KHRoZW1lKSA6IHg7XG4gICAgICAgIGNvbnN0IHZhcmlhbnQgPSBnZXRPYmplY3RXaXRoVmFyaWFudHMoZ2V0KHRoZW1lLCB2YWwpLCB0aGVtZSk7XG4gICAgICAgIHJlc3VsdCA9IHsgLi4ucmVzdWx0LFxuICAgICAgICAgIC4uLnZhcmlhbnRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0geDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5jb25zdCBkZWZhdWx0QnJlYWtwb2ludHMgPSBbNDAsIDUyLCA2NF0ubWFwKG4gPT4gbiArICdlbScpO1xuY29uc3QgZGVmYXVsdFRoZW1lID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdLFxuICBmb250U2l6ZXM6IFsxMiwgMTQsIDE2LCAyMCwgMjQsIDMyLCA0OCwgNjQsIDcyXVxufTtcbmNvbnN0IGFsaWFzZXMgPSB7XG4gIGJnOiAnYmFja2dyb3VuZENvbG9yJyxcbiAgbTogJ21hcmdpbicsXG4gIG10OiAnbWFyZ2luVG9wJyxcbiAgbXI6ICdtYXJnaW5SaWdodCcsXG4gIG1iOiAnbWFyZ2luQm90dG9tJyxcbiAgbWw6ICdtYXJnaW5MZWZ0JyxcbiAgbXg6ICdtYXJnaW5YJyxcbiAgbXk6ICdtYXJnaW5ZJyxcbiAgcDogJ3BhZGRpbmcnLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBweDogJ3BhZGRpbmdYJyxcbiAgcHk6ICdwYWRkaW5nWSdcbn07XG5jb25zdCBtdWx0aXBsZXMgPSB7XG4gIG1hcmdpblg6IFsnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCddLFxuICBtYXJnaW5ZOiBbJ21hcmdpblRvcCcsICdtYXJnaW5Cb3R0b20nXSxcbiAgcGFkZGluZ1g6IFsncGFkZGluZ0xlZnQnLCAncGFkZGluZ1JpZ2h0J10sXG4gIHBhZGRpbmdZOiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICBzY3JvbGxNYXJnaW5YOiBbJ3Njcm9sbE1hcmdpbkxlZnQnLCAnc2Nyb2xsTWFyZ2luUmlnaHQnXSxcbiAgc2Nyb2xsTWFyZ2luWTogWydzY3JvbGxNYXJnaW5Ub3AnLCAnc2Nyb2xsTWFyZ2luQm90dG9tJ10sXG4gIHNjcm9sbFBhZGRpbmdYOiBbJ3Njcm9sbFBhZGRpbmdMZWZ0JywgJ3Njcm9sbFBhZGRpbmdSaWdodCddLFxuICBzY3JvbGxQYWRkaW5nWTogWydzY3JvbGxQYWRkaW5nVG9wJywgJ3Njcm9sbFBhZGRpbmdCb3R0b20nXSxcbiAgc2l6ZTogWyd3aWR0aCcsICdoZWlnaHQnXVxufTtcbmNvbnN0IHNjYWxlcyA9IHtcbiAgY29sb3I6ICdjb2xvcnMnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJDb2xvcjogJ2NvbG9ycycsXG4gIGNhcmV0Q29sb3I6ICdjb2xvcnMnLFxuICBjb2x1bW5SdWxlQ29sb3I6ICdjb2xvcnMnLFxuICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnY29sb3JzJyxcbiAgb3BhY2l0eTogJ29wYWNpdGllcycsXG4gIHRyYW5zaXRpb246ICd0cmFuc2l0aW9ucycsXG4gIG1hcmdpbjogJ3NwYWNlJyxcbiAgbWFyZ2luVG9wOiAnc3BhY2UnLFxuICBtYXJnaW5SaWdodDogJ3NwYWNlJyxcbiAgbWFyZ2luQm90dG9tOiAnc3BhY2UnLFxuICBtYXJnaW5MZWZ0OiAnc3BhY2UnLFxuICBtYXJnaW5YOiAnc3BhY2UnLFxuICBtYXJnaW5ZOiAnc3BhY2UnLFxuICBtYXJnaW5CbG9jazogJ3NwYWNlJyxcbiAgbWFyZ2luQmxvY2tFbmQ6ICdzcGFjZScsXG4gIG1hcmdpbkJsb2NrU3RhcnQ6ICdzcGFjZScsXG4gIG1hcmdpbklubGluZTogJ3NwYWNlJyxcbiAgbWFyZ2luSW5saW5lRW5kOiAnc3BhY2UnLFxuICBtYXJnaW5JbmxpbmVTdGFydDogJ3NwYWNlJyxcbiAgcGFkZGluZzogJ3NwYWNlJyxcbiAgcGFkZGluZ1RvcDogJ3NwYWNlJyxcbiAgcGFkZGluZ1JpZ2h0OiAnc3BhY2UnLFxuICBwYWRkaW5nQm90dG9tOiAnc3BhY2UnLFxuICBwYWRkaW5nTGVmdDogJ3NwYWNlJyxcbiAgcGFkZGluZ1g6ICdzcGFjZScsXG4gIHBhZGRpbmdZOiAnc3BhY2UnLFxuICBwYWRkaW5nQmxvY2s6ICdzcGFjZScsXG4gIHBhZGRpbmdCbG9ja0VuZDogJ3NwYWNlJyxcbiAgcGFkZGluZ0Jsb2NrU3RhcnQ6ICdzcGFjZScsXG4gIHBhZGRpbmdJbmxpbmU6ICdzcGFjZScsXG4gIHBhZGRpbmdJbmxpbmVFbmQ6ICdzcGFjZScsXG4gIHBhZGRpbmdJbmxpbmVTdGFydDogJ3NwYWNlJyxcbiAgc2Nyb2xsTWFyZ2luOiAnc3BhY2UnLFxuICBzY3JvbGxNYXJnaW5Ub3A6ICdzcGFjZScsXG4gIHNjcm9sbE1hcmdpblJpZ2h0OiAnc3BhY2UnLFxuICBzY3JvbGxNYXJnaW5Cb3R0b206ICdzcGFjZScsXG4gIHNjcm9sbE1hcmdpbkxlZnQ6ICdzcGFjZScsXG4gIHNjcm9sbE1hcmdpblg6ICdzcGFjZScsXG4gIHNjcm9sbE1hcmdpblk6ICdzcGFjZScsXG4gIHNjcm9sbFBhZGRpbmc6ICdzcGFjZScsXG4gIHNjcm9sbFBhZGRpbmdUb3A6ICdzcGFjZScsXG4gIHNjcm9sbFBhZGRpbmdSaWdodDogJ3NwYWNlJyxcbiAgc2Nyb2xsUGFkZGluZ0JvdHRvbTogJ3NwYWNlJyxcbiAgc2Nyb2xsUGFkZGluZ0xlZnQ6ICdzcGFjZScsXG4gIHNjcm9sbFBhZGRpbmdYOiAnc3BhY2UnLFxuICBzY3JvbGxQYWRkaW5nWTogJ3NwYWNlJyxcbiAgaW5zZXQ6ICdzcGFjZScsXG4gIGluc2V0QmxvY2s6ICdzcGFjZScsXG4gIGluc2V0QmxvY2tFbmQ6ICdzcGFjZScsXG4gIGluc2V0QmxvY2tTdGFydDogJ3NwYWNlJyxcbiAgaW5zZXRJbmxpbmU6ICdzcGFjZScsXG4gIGluc2V0SW5saW5lRW5kOiAnc3BhY2UnLFxuICBpbnNldElubGluZVN0YXJ0OiAnc3BhY2UnLFxuICB0b3A6ICdzcGFjZScsXG4gIHJpZ2h0OiAnc3BhY2UnLFxuICBib3R0b206ICdzcGFjZScsXG4gIGxlZnQ6ICdzcGFjZScsXG4gIGdyaWRHYXA6ICdzcGFjZScsXG4gIGdyaWRDb2x1bW5HYXA6ICdzcGFjZScsXG4gIGdyaWRSb3dHYXA6ICdzcGFjZScsXG4gIGdhcDogJ3NwYWNlJyxcbiAgY29sdW1uR2FwOiAnc3BhY2UnLFxuICByb3dHYXA6ICdzcGFjZScsXG4gIGZvbnRGYW1pbHk6ICdmb250cycsXG4gIGZvbnRTaXplOiAnZm9udFNpemVzJyxcbiAgZm9udFdlaWdodDogJ2ZvbnRXZWlnaHRzJyxcbiAgbGluZUhlaWdodDogJ2xpbmVIZWlnaHRzJyxcbiAgbGV0dGVyU3BhY2luZzogJ2xldHRlclNwYWNpbmdzJyxcbiAgYm9yZGVyOiAnYm9yZGVycycsXG4gIGJvcmRlclRvcDogJ2JvcmRlcnMnLFxuICBib3JkZXJSaWdodDogJ2JvcmRlcnMnLFxuICBib3JkZXJCb3R0b206ICdib3JkZXJzJyxcbiAgYm9yZGVyTGVmdDogJ2JvcmRlcnMnLFxuICBib3JkZXJXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlclN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyUmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJUb3BSaWdodFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyVG9wTGVmdFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlclRvcFdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyVG9wQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJUb3BTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckJvdHRvbVdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyQm90dG9tQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJCb3R0b21TdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckxlZnRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlckxlZnRDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlckxlZnRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlclJpZ2h0V2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJSaWdodENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyUmlnaHRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckJsb2NrOiAnYm9yZGVycycsXG4gIGJvcmRlckJsb2NrQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJCbG9ja0VuZDogJ2JvcmRlcnMnLFxuICBib3JkZXJCbG9ja0VuZENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyQmxvY2tFbmRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckJsb2NrRW5kV2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJCbG9ja1N0YXJ0OiAnYm9yZGVycycsXG4gIGJvcmRlckJsb2NrU3RhcnRDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlckJsb2NrU3RhcnRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckJsb2NrU3RhcnRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlckJsb2NrU3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJCbG9ja1dpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyRW5kRW5kUmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJFbmRTdGFydFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVySW5saW5lOiAnYm9yZGVycycsXG4gIGJvcmRlcklubGluZUNvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVySW5saW5lRW5kOiAnYm9yZGVycycsXG4gIGJvcmRlcklubGluZUVuZENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVySW5saW5lRW5kU3R5bGU6ICdib3JkZXJTdHlsZXMnLFxuICBib3JkZXJJbmxpbmVFbmRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlcklubGluZVN0YXJ0OiAnYm9yZGVycycsXG4gIGJvcmRlcklubGluZVN0YXJ0Q29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJJbmxpbmVTdGFydFN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVySW5saW5lU3RhcnRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlcklubGluZVN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVySW5saW5lV2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJTdGFydEVuZFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyU3RhcnRTdGFydFJhZGl1czogJ3JhZGlpJyxcbiAgY29sdW1uUnVsZVdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgb3V0bGluZUNvbG9yOiAnY29sb3JzJyxcbiAgYm94U2hhZG93OiAnc2hhZG93cycsXG4gIHRleHRTaGFkb3c6ICdzaGFkb3dzJyxcbiAgekluZGV4OiAnekluZGljZXMnLFxuICB3aWR0aDogJ3NpemVzJyxcbiAgbWluV2lkdGg6ICdzaXplcycsXG4gIG1heFdpZHRoOiAnc2l6ZXMnLFxuICBoZWlnaHQ6ICdzaXplcycsXG4gIG1pbkhlaWdodDogJ3NpemVzJyxcbiAgbWF4SGVpZ2h0OiAnc2l6ZXMnLFxuICBmbGV4QmFzaXM6ICdzaXplcycsXG4gIHNpemU6ICdzaXplcycsXG4gIGJsb2NrU2l6ZTogJ3NpemVzJyxcbiAgaW5saW5lU2l6ZTogJ3NpemVzJyxcbiAgbWF4QmxvY2tTaXplOiAnc2l6ZXMnLFxuICBtYXhJbmxpbmVTaXplOiAnc2l6ZXMnLFxuICBtaW5CbG9ja1NpemU6ICdzaXplcycsXG4gIG1pbklubGluZVNpemU6ICdzaXplcycsXG4gIGNvbHVtbldpZHRoOiAnc2l6ZXMnLFxuICAvLyBzdmdcbiAgZmlsbDogJ2NvbG9ycycsXG4gIHN0cm9rZTogJ2NvbG9ycydcbn07XG5cbmNvbnN0IHBvc2l0aXZlT3JOZWdhdGl2ZSA9IChzY2FsZSwgdmFsdWUpID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgdmFsdWUgPj0gMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLnN0YXJ0c1dpdGgoJy0nKSkge1xuICAgICAgY29uc3QgdmFsdWVXaXRob3V0TWludXMgPSB2YWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgICBjb25zdCBuID0gZ2V0KHNjYWxlLCB2YWx1ZVdpdGhvdXRNaW51cywgdmFsdWVXaXRob3V0TWludXMpO1xuXG4gICAgICBpZiAodHlwZW9mIG4gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBuICogLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBgLSR7bn1gO1xuICAgIH1cblxuICAgIHJldHVybiBnZXQoc2NhbGUsIHZhbHVlLCB2YWx1ZSk7XG4gIH1cblxuICBjb25zdCBhYnNvbHV0ZSA9IE1hdGguYWJzKHZhbHVlKTtcbiAgY29uc3QgbiA9IGdldChzY2FsZSwgYWJzb2x1dGUsIGFic29sdXRlKTtcbiAgaWYgKHR5cGVvZiBuID09PSAnc3RyaW5nJykgcmV0dXJuICctJyArIG47XG4gIHJldHVybiBOdW1iZXIobikgKiAtMTtcbn07XG5cbmNvbnN0IHRyYW5zZm9ybXMgPSBbJ21hcmdpbicsICdtYXJnaW5Ub3AnLCAnbWFyZ2luUmlnaHQnLCAnbWFyZ2luQm90dG9tJywgJ21hcmdpbkxlZnQnLCAnbWFyZ2luWCcsICdtYXJnaW5ZJywgJ21hcmdpbkJsb2NrJywgJ21hcmdpbkJsb2NrRW5kJywgJ21hcmdpbkJsb2NrU3RhcnQnLCAnbWFyZ2luSW5saW5lJywgJ21hcmdpbklubGluZUVuZCcsICdtYXJnaW5JbmxpbmVTdGFydCcsICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnXS5yZWR1Y2UoKGFjYywgY3VycikgPT4gKHsgLi4uYWNjLFxuICBbY3Vycl06IHBvc2l0aXZlT3JOZWdhdGl2ZVxufSksIHt9KTtcblxuY29uc3QgcmVzcG9uc2l2ZSA9IHN0eWxlcyA9PiB0aGVtZSA9PiB7XG4gIGNvbnN0IG5leHQgPSB7fTtcbiAgY29uc3QgYnJlYWtwb2ludHMgPSB0aGVtZSAmJiB0aGVtZS5icmVha3BvaW50cyB8fCBkZWZhdWx0QnJlYWtwb2ludHM7XG4gIGNvbnN0IG1lZGlhUXVlcmllcyA9IFtudWxsLCAuLi5icmVha3BvaW50cy5tYXAobiA9PiBuLmluY2x1ZGVzKCdAbWVkaWEnKSA/IG4gOiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtufSlgKV07XG5cbiAgZm9yIChjb25zdCBrIGluIHN0eWxlcykge1xuICAgIGNvbnN0IGtleSA9IGs7XG4gICAgbGV0IHZhbHVlID0gc3R5bGVzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlKHRoZW1lIHx8IHt9KTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIG5leHRba2V5XSA9IHZhbHVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5zbGljZSgwLCBtZWRpYVF1ZXJpZXMubGVuZ3RoKS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbWVkaWEgPSBtZWRpYVF1ZXJpZXNbaV07XG5cbiAgICAgIGlmICghbWVkaWEpIHtcbiAgICAgICAgbmV4dFtrZXldID0gdmFsdWVbaV07XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBuZXh0W21lZGlhXSA9IG5leHRbbWVkaWFdIHx8IHt9O1xuICAgICAgaWYgKHZhbHVlW2ldID09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgbmV4dFttZWRpYV1ba2V5XSA9IHZhbHVlW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXh0O1xufTtcblxuY29uc3QgY3NzID0gKGFyZ3MgPSB7fSkgPT4gKHByb3BzID0ge30pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB7IC4uLmRlZmF1bHRUaGVtZSxcbiAgICAuLi4oJ3RoZW1lJyBpbiBwcm9wcyA/IHByb3BzLnRoZW1lIDogcHJvcHMpXG4gIH07IC8vIGluc2VydCB2YXJpYW50IHByb3BzIGJlZm9yZSByZXNwb25zaXZlIHN0eWxlcywgc28gdGhleSBjYW4gYmUgbWVyZ2VkXG4gIC8vIHdlIG5lZWQgdG8gbWFpbnRhaW4gb3JkZXIgb2YgdGhlIHN0eWxlIHByb3BzLCBzbyBpZiBhIHZhcmlhbnQgaXMgcGxhY2UgaW4gdGhlIG1pZGRsZVxuICAvLyBvZiBvdGhlciBwcm9wcywgaXQgd2lsbCBleHRlbmRzIGl0cyBwcm9wcyBhdCB0aGF0IHNhbWUgbG9jYXRpb24gb3JkZXIuXG5cbiAgY29uc3Qgb2JqID0gZ2V0T2JqZWN0V2l0aFZhcmlhbnRzKHR5cGVvZiBhcmdzID09PSAnZnVuY3Rpb24nID8gYXJncyh0aGVtZSkgOiBhcmdzLCB0aGVtZSk7XG4gIGNvbnN0IHN0eWxlcyA9IHJlc3BvbnNpdmUob2JqKSh0aGVtZSk7XG4gIGxldCByZXN1bHQgPSB7fTtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZXMpIHtcbiAgICBjb25zdCB4ID0gc3R5bGVzW2tleV07XG4gICAgY29uc3QgdmFsID0gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgPyB4KHRoZW1lKSA6IHg7XG5cbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaGFzRGVmYXVsdCh2YWwpKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdmFsW1RIRU1FX1VJX0RFRkFVTFRfS0VZXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IC8vIE9uIHR5cGUgbGV2ZWwsIHZhbCBjYW4gYWxzbyBiZSBhbiBhcnJheSBoZXJlLFxuICAgICAgLy8gYnV0IHdlIHRyYW5zZm9ybSBhbGwgYXJyYXlzIGluIGByZXNwb25zaXZlYCBmdW5jdGlvbi5cblxuXG4gICAgICByZXN1bHRba2V5XSA9IGNzcyh2YWwpKHRoZW1lKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3AgPSBrZXkgaW4gYWxpYXNlcyA/IGFsaWFzZXNba2V5XSA6IGtleTtcbiAgICBjb25zdCBzY2FsZU5hbWUgPSBwcm9wIGluIHNjYWxlcyA/IHNjYWxlc1twcm9wXSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzY2FsZSA9IHNjYWxlTmFtZSA/IHRoZW1lID09IG51bGwgPyB2b2lkIDAgOiB0aGVtZVtzY2FsZU5hbWVdIDogZ2V0KHRoZW1lLCBwcm9wLCB7fSk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gZ2V0KHRyYW5zZm9ybXMsIHByb3AsIGdldCk7XG4gICAgY29uc3QgdmFsdWUgPSB0cmFuc2Zvcm0oc2NhbGUsIHZhbCwgdmFsKTtcblxuICAgIGlmIChwcm9wIGluIG11bHRpcGxlcykge1xuICAgICAgY29uc3QgZGlycyA9IG11bHRpcGxlc1twcm9wXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdFtkaXJzW2ldXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbcHJvcF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHsgVEhFTUVfVUlfREVGQVVMVF9LRVksIGNzcywgZGVmYXVsdEJyZWFrcG9pbnRzLCBnZXQsIGdldE9iamVjdFdpdGhWYXJpYW50cywgbXVsdGlwbGVzLCBzY2FsZXMgfTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0B0aGVtZS11aS9jc3MnO1xuXG5jb25zdCBnZXRDU1MgPSBwcm9wcyA9PiB0aGVtZSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGNzcyhwcm9wcy5zeCkodGhlbWUpO1xuICBjb25zdCByYXcgPSB0eXBlb2YgcHJvcHMuY3NzID09PSAnZnVuY3Rpb24nID8gcHJvcHMuY3NzKHRoZW1lKSA6IHByb3BzLmNzcztcbiAgcmV0dXJuIFtzdHlsZXMsIHJhd107XG59O1xuXG5jb25zdCBwYXJzZVByb3BzID0gcHJvcHMgPT4ge1xuICBpZiAoIXByb3BzIHx8ICFwcm9wcy5zeCAmJiAhcHJvcHMuY3NzKSByZXR1cm4gcHJvcHM7XG4gIGNvbnN0IG5leHQgPSB7fTtcblxuICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoa2V5ID09PSAnc3gnKSBjb250aW51ZTtcbiAgICBuZXh0W2tleV0gPSBwcm9wc1trZXldO1xuICB9XG5cbiAgbmV4dC5jc3MgPSBnZXRDU1MocHJvcHMpO1xuICByZXR1cm4gbmV4dDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhcnNlUHJvcHM7XG4iLCJpbXBvcnQgeyBqc3ggYXMganN4JDEsIFRoZW1lQ29udGV4dCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5pbXBvcnQgcGFja2FnZUluZm8gZnJvbSAnQGVtb3Rpb24vcmVhY3QvcGFja2FnZS5qc29uJztcbmltcG9ydCBwYXJzZVByb3BzIGZyb20gJ0B0aGVtZS11aS9wYXJzZS1wcm9wcyc7XG5cbmNvbnN0IF9fRU1PVElPTl9WRVJTSU9OX18gPSBwYWNrYWdlSW5mby52ZXJzaW9uO1xuY29uc3QganN4ID0gKHR5cGUsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ganN4JDEodHlwZSwgcGFyc2VQcm9wcyhwcm9wcyksIC4uLmNoaWxkcmVuKTtcbi8qKlxuICogQGludGVybmFsIGZvciBCYWJlbCBKU1ggcHJhZ21hXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zeXN0ZW0tdWkvdGhlbWUtdWkvaXNzdWVzLzE2MDNcbiAqL1xuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0ganN4O1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jb25zdCBfX3RoZW1lVWlEZWZhdWx0Q29udGV4dFZhbHVlID0ge1xuICBfX0VNT1RJT05fVkVSU0lPTl9fLFxuICB0aGVtZToge31cbn07XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5cbmNvbnN0IF9fVGhlbWVVSUNvbnRleHQgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChfX3RoZW1lVWlEZWZhdWx0Q29udGV4dFZhbHVlKTtcbmNvbnN0IHVzZVRoZW1lVUkgPSAoKSA9PiB1c2VDb250ZXh0KF9fVGhlbWVVSUNvbnRleHQpO1xuY29uc3QgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuY29uc3QgUkVBQ1RfRUxFTUVOVCA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbmNvbnN0IEZPUldBUkRfUkVGID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFjNztcbmNvbnN0IGRlZXBtZXJnZU9wdGlvbnMgPSB7XG4gIGlzTWVyZ2VhYmxlT2JqZWN0OiBuID0+IHtcbiAgICByZXR1cm4gISFuICYmIHR5cGVvZiBuID09PSAnb2JqZWN0JyAmJiBuLiQkdHlwZW9mICE9PSBSRUFDVF9FTEVNRU5UICYmIG4uJCR0eXBlb2YgIT09IEZPUldBUkRfUkVGO1xuICB9LFxuICBhcnJheU1lcmdlOiAoX2xlZnRBcnJheSwgcmlnaHRBcnJheSkgPT4gcmlnaHRBcnJheVxufTtcbi8qKlxuICogRGVlcGx5IG1lcmdlIHRoZW1lc1xuICovXG5cbmNvbnN0IG1lcmdlID0gKGEsIGIpID0+IGRlZXBtZXJnZShhLCBiLCBkZWVwbWVyZ2VPcHRpb25zKTtcblxuZnVuY3Rpb24gbWVyZ2VBbGwoLi4uYXJncykge1xuICByZXR1cm4gZGVlcG1lcmdlLmFsbChhcmdzLCBkZWVwbWVyZ2VPcHRpb25zKTtcbn1cblxubWVyZ2UuYWxsID0gbWVyZ2VBbGw7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IF9fVGhlbWVVSUludGVybmFsQmFzZVRoZW1lUHJvdmlkZXIgPSAoe1xuICBjb250ZXh0LFxuICBjaGlsZHJlblxufSkgPT4ganN4KFRoZW1lQ29udGV4dC5Qcm92aWRlciwge1xuICB2YWx1ZTogY29udGV4dC50aGVtZVxufSwganN4KF9fVGhlbWVVSUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgdmFsdWU6IGNvbnRleHQsXG4gIGNoaWxkcmVuXG59KSk7XG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHtcbiAgdGhlbWUsXG4gIGNoaWxkcmVuXG59KSB7XG4gIGNvbnN0IG91dGVyID0gdXNlVGhlbWVVSSgpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKG91dGVyLl9fRU1PVElPTl9WRVJTSU9OX18gIT09IF9fRU1PVElPTl9WRVJTSU9OX18pIHtcbiAgICAgIGNvbnNvbGUud2FybignTXVsdGlwbGUgdmVyc2lvbnMgb2YgRW1vdGlvbiBkZXRlY3RlZCwnLCAnYW5kIHRoZW1pbmcgbWlnaHQgbm90IHdvcmsgYXMgZXhwZWN0ZWQuJywgJ1BsZWFzZSBlbnN1cmUgdGhlcmUgaXMgb25seSBvbmUgY29weSBvZiBAZW1vdGlvbi9yZWFjdCBpbnN0YWxsZWQgaW4geW91ciBhcHBsaWNhdGlvbi4nKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjb250ZXh0ID0gdHlwZW9mIHRoZW1lID09PSAnZnVuY3Rpb24nID8geyAuLi5vdXRlcixcbiAgICB0aGVtZTogdGhlbWUob3V0ZXIudGhlbWUpXG4gIH0gOiBtZXJnZS5hbGwoe30sIG91dGVyLCB7XG4gICAgdGhlbWVcbiAgfSk7XG4gIHJldHVybiBqc3goX19UaGVtZVVJSW50ZXJuYWxCYXNlVGhlbWVQcm92aWRlciwge1xuICAgIGNvbnRleHQsXG4gICAgY2hpbGRyZW5cbiAgfSk7XG59XG5cbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIsIF9fVGhlbWVVSUNvbnRleHQsIF9fVGhlbWVVSUludGVybmFsQmFzZVRoZW1lUHJvdmlkZXIsIF9fdGhlbWVVaURlZmF1bHRDb250ZXh0VmFsdWUsIGNyZWF0ZUVsZW1lbnQsIGpzeCwgbWVyZ2UsIHVzZVRoZW1lVUkgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUaGVtZVVJLCBqc3gsIF9fVGhlbWVVSUludGVybmFsQmFzZVRoZW1lUHJvdmlkZXIgfSBmcm9tICdAdGhlbWUtdWkvY29yZSc7XG5pbXBvcnQgeyBjc3MsIGdldCB9IGZyb20gJ0B0aGVtZS11aS9jc3MnO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5jb25zdCB0b1Zhck5hbWUgPSBrZXkgPT4gYC0tdGhlbWUtdWktJHtrZXkucmVwbGFjZSgnLV9fZGVmYXVsdCcsICcnKX1gO1xuXG5jb25zdCB0b1ZhclZhbHVlID0ga2V5ID0+IGB2YXIoJHt0b1Zhck5hbWUoa2V5KX0pYDtcblxuY29uc3Qgam9pbiA9ICguLi5hcmdzKSA9PiBhcmdzLmZpbHRlcihCb29sZWFuKS5qb2luKCctJyk7XG5cbmNvbnN0IHJlc2VydmVkS2V5cyA9IG5ldyBTZXQoWyd1c2VDdXN0b21Qcm9wZXJ0aWVzJywgJ2luaXRpYWxDb2xvck1vZGVOYW1lJywgJ3ByaW50Q29sb3JNb2RlTmFtZScsICdpbml0aWFsQ29sb3JNb2RlJywgJ3VzZUxvY2FsU3RvcmFnZScsICdjb25maWcnXSk7IC8vIGNvbnZlcnQgdGhlbWUgdmFsdWVzIHRvIGN1c3RvbSBwcm9wZXJ0aWVzXG5cbmNvbnN0IHRvQ3VzdG9tUHJvcGVydGllcyA9IChvYmosIHBhcmVudCkgPT4ge1xuICBjb25zdCBuZXh0ID0gQXJyYXkuaXNBcnJheShvYmopID8gW10gOiB7fTtcblxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcbiAgICBjb25zdCBuYW1lID0gam9pbihwYXJlbnQsIGtleSk7XG5cbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgbmV4dFtrZXldID0gdG9DdXN0b21Qcm9wZXJ0aWVzKHZhbHVlLCBuYW1lKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChyZXNlcnZlZEtleXMuaGFzKGtleSkpIHtcbiAgICAgIG5leHRba2V5XSA9IHZhbHVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbmV4dFtrZXldID0gdG9WYXJWYWx1ZShuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBuZXh0O1xufTtcbi8qKlxuICogQGludGVybmFsXG4gKiBSZWN1cnNpdmVseSB0cmFuc2Zvcm1zIGFuIG9iamVjdCBpbnRvIENTUyB2YXJpYWJsZXMgZXhjbHVkaW5nIFwibW9kZXNcIiBrZXkuXG4gKi9cblxuY29uc3QgX19vYmplY3RUb1ZhcnMgPSAocGFyZW50LCBvYmopID0+IHtcbiAgbGV0IHZhcnMgPSB7fTtcblxuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGtleSA9PT0gJ21vZGVzJykgY29udGludWU7XG4gICAgY29uc3QgbmFtZSA9IGpvaW4ocGFyZW50LCBrZXkpO1xuICAgIGNvbnN0IHZhbHVlID0gb2JqW2tleV07XG5cbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFycyA9IHsgLi4udmFycyxcbiAgICAgICAgLi4uX19vYmplY3RUb1ZhcnMobmFtZSwgdmFsdWUpXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJzW3RvVmFyTmFtZShuYW1lKV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFycztcbn07XG4vKipcbiAqIEBpbnRlcm5hbFxuICogQ3JlYXRlcyByb290IHN0eWxlcyBmb3IgY29sb3IgbW9kZXMuXG4gKiAtIFRyYW5zZm9ybXMgY29sb3Igc2NhbGUgaW50byBDU1MgdmFyaWFibGVzLlxuICogLSBTZXRzIGJhY2tncm91bmQgYW5kIHRleHQgY29sb3IuXG4gKi9cblxuY29uc3QgX19jcmVhdGVDb2xvclN0eWxlcyA9ICh0aGVtZSA9IHt9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VDdXN0b21Qcm9wZXJ0aWVzLFxuICAgIGluaXRpYWxDb2xvck1vZGVOYW1lLFxuICAgIHByaW50Q29sb3JNb2RlTmFtZSxcbiAgICB1c2VSb290U3R5bGVzXG4gIH0gPSB0aGVtZS5jb25maWcgfHwgdGhlbWUgfHwge307XG4gIGNvbnN0IGNvbG9ycyA9IHRoZW1lLnJhd0NvbG9ycyB8fCB0aGVtZS5jb2xvcnM7XG4gIGlmICghY29sb3JzIHx8IHVzZVJvb3RTdHlsZXMgPT09IGZhbHNlKSByZXR1cm4ge307XG5cbiAgaWYgKHVzZUN1c3RvbVByb3BlcnRpZXMgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGNzcyh7XG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgYmc6ICdiYWNrZ3JvdW5kJ1xuICAgIH0pKHRoZW1lKTtcbiAgfVxuXG4gIGNvbnN0IG1vZGVzID0gY29sb3JzLm1vZGVzIHx8IHt9O1xuXG4gIGNvbnN0IHN0eWxlcyA9IF9fY3JlYXRlQ29sb3JQcm9wZXJ0aWVzKGNvbG9ycywgbW9kZXMpO1xuXG4gIGlmIChwcmludENvbG9yTW9kZU5hbWUpIHtcbiAgICBjb25zdCBtb2RlID0gcHJpbnRDb2xvck1vZGVOYW1lID09PSAnaW5pdGlhbCcgfHwgcHJpbnRDb2xvck1vZGVOYW1lID09PSBpbml0aWFsQ29sb3JNb2RlTmFtZSA/IGNvbG9ycyA6IG1vZGVzW3ByaW50Q29sb3JNb2RlTmFtZV07XG4gICAgc3R5bGVzWydAbWVkaWEgcHJpbnQnXSA9IF9fb2JqZWN0VG9WYXJzKCdjb2xvcnMnLCBtb2RlKTtcbiAgfVxuXG4gIGNvbnN0IGNvbG9yVG9WYXJWYWx1ZSA9IGNvbG9yID0+IHRvVmFyVmFsdWUoYGNvbG9ycy0ke2NvbG9yfWApO1xuXG4gIHJldHVybiBjc3MoeyAuLi5zdHlsZXMsXG4gICAgY29sb3I6IGNvbG9yVG9WYXJWYWx1ZSgndGV4dCcpLFxuICAgIGJnOiBjb2xvclRvVmFyVmFsdWUoJ2JhY2tncm91bmQnKVxuICB9KSh0aGVtZSk7XG59O1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggY29sb3JzIHR1cm5lZCBpbnRvIEN1c3RvbSBDU1MgUHJvcGVydGllcyBhbmRcbiAqIC50aGVtZS11aS08Y29sb3Jtb2RlPiBjbGFzc2VzIHVzZWQgZm9yIG5vLWZsYXNoIHNlcnZlcnNpZGUgcmVuZGVyaW5nLlxuICovXG5cbmZ1bmN0aW9uIF9fY3JlYXRlQ29sb3JQcm9wZXJ0aWVzKGNvbG9ycywgbW9kZXMpIHtcbiAgY29uc3Qgc3R5bGVzID0gX19vYmplY3RUb1ZhcnMoJ2NvbG9ycycsIGNvbG9ycyk7XG5cbiAgT2JqZWN0LmtleXMobW9kZXMpLmZvckVhY2gobW9kZSA9PiB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYC50aGVtZS11aS0ke21vZGV9YDtcbiAgICBjb25zdCBrZXkgPSBgJiR7Y2xhc3NOYW1lfSwgJHtjbGFzc05hbWV9ICZgO1xuICAgIHN0eWxlc1trZXldID0gX19vYmplY3RUb1ZhcnMoJ2NvbG9ycycsIG1vZGVzW21vZGVdKTtcbiAgfSk7XG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmNvbnN0IFNUT1JBR0VfS0VZID0gJ3RoZW1lLXVpLWNvbG9yLW1vZGUnO1xuY29uc3Qgc3RvcmFnZSA9IHtcbiAgZ2V0OiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS53YXJuKCdsb2NhbFN0b3JhZ2UgaXMgZGlzYWJsZWQgYW5kIGNvbG9yIG1vZGUgbWlnaHQgbm90IHdvcmsgYXMgZXhwZWN0ZWQuJywgJ1BsZWFzZSBjaGVjayB5b3VyIFNpdGUgU2V0dGluZ3MuJywgZXJyKTtcbiAgICB9XG4gIH0sXG4gIHNldDogdmFsdWUgPT4ge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybignbG9jYWxTdG9yYWdlIGlzIGRpc2FibGVkIGFuZCBjb2xvciBtb2RlIG1pZ2h0IG5vdCB3b3JrIGFzIGV4cGVjdGVkLicsICdQbGVhc2UgY2hlY2sgeW91ciBTaXRlIFNldHRpbmdzLicsIGVycik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBnZXRQcmVmZXJyZWRDb2xvclNjaGVtZSA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykge1xuICAgICAgcmV0dXJuICdkYXJrJztcbiAgICB9XG5cbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogbGlnaHQpJykubWF0Y2hlcykge1xuICAgICAgcmV0dXJuICdsaWdodCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCB1c2VDbGllbnRzaWRlRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAoKSA9PiB7fSA6IHVzZUxheW91dEVmZmVjdDtcblxuY29uc3QgVG9wTGV2ZWxDb2xvck1vZGVQcm92aWRlciA9ICh7XG4gIG91dGVyQ3R4LFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBvdXRlclRoZW1lID0gb3V0ZXJDdHgudGhlbWUgfHwge307XG4gIGNvbnN0IHtcbiAgICBpbml0aWFsQ29sb3JNb2RlTmFtZSxcbiAgICB1c2VDb2xvclNjaGVtZU1lZGlhUXVlcnksXG4gICAgdXNlTG9jYWxTdG9yYWdlXG4gIH0gPSBvdXRlclRoZW1lLmNvbmZpZyB8fCBvdXRlclRoZW1lO1xuICBsZXQgW2NvbG9yTW9kZSwgc2V0Q29sb3JNb2RlXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBjb25zdCBwcmVmZXJyZWRNb2RlID0gdXNlQ29sb3JTY2hlbWVNZWRpYVF1ZXJ5ICE9PSBmYWxzZSAmJiBnZXRQcmVmZXJyZWRDb2xvclNjaGVtZSgpO1xuICAgIHJldHVybiBwcmVmZXJyZWRNb2RlIHx8IGluaXRpYWxDb2xvck1vZGVOYW1lO1xuICB9KTsgLy8gb24gZmlyc3QgcmVuZGVyLCB3ZSByZWFkIHRoZSBjb2xvciBtb2RlIGZyb20gbG9jYWxTdG9yYWdlIGFuZFxuICAvLyBjbGVhciB0aGUgY2xhc3Mgb24gZG9jdW1lbnQgZWxlbWVudCBib2R5XG5cbiAgdXNlQ2xpZW50c2lkZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkID0gdXNlTG9jYWxTdG9yYWdlICE9PSBmYWxzZSAmJiBzdG9yYWdlLmdldCgpO1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0aGVtZS11aS0nICsgc3RvcmVkKTtcbiAgICB9XG5cbiAgICBpZiAoc3RvcmVkICYmIHN0b3JlZCAhPT0gY29sb3JNb2RlKSB7XG4gICAgICBjb2xvck1vZGUgPSBzdG9yZWQ7XG4gICAgICBzZXRDb2xvck1vZGUoc3RvcmVkKTtcbiAgICB9XG4gIH0sIFtdKTsgLy8gd2hlbiBtb2RlIGNoYW5nZXMsIHdlIHNhdmUgaXQgdG8gbG9jYWxTdG9yYWdlXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29sb3JNb2RlICYmIHVzZUxvY2FsU3RvcmFnZSAhPT0gZmFsc2UpIHtcbiAgICAgIHN0b3JhZ2Uuc2V0KGNvbG9yTW9kZSk7XG4gICAgfVxuICB9LCBbY29sb3JNb2RlLCB1c2VMb2NhbFN0b3JhZ2VdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciBfb3V0ZXJUaGVtZSRjb2xvcnM7XG5cbiAgICBpZiAoKF9vdXRlclRoZW1lJGNvbG9ycyA9IG91dGVyVGhlbWUuY29sb3JzKSAhPSBudWxsICYmIF9vdXRlclRoZW1lJGNvbG9ycy5tb2RlcyAmJiBpbml0aWFsQ29sb3JNb2RlTmFtZSAmJiBPYmplY3Qua2V5cyhvdXRlclRoZW1lLmNvbG9ycy5tb2RlcykuaW5kZXhPZihpbml0aWFsQ29sb3JNb2RlTmFtZSkgPiAtMSkge1xuICAgICAgY29uc29sZS53YXJuKCdbdGhlbWUtdWldIFRoZSBgaW5pdGlhbENvbG9yTW9kZU5hbWVgIHZhbHVlIHNob3VsZCBiZSBhIHVuaXF1ZSBuYW1lJyArICcgYW5kIGNhbm5vdCByZWZlcmVuY2UgYSBrZXkgaW4gYHRoZW1lLmNvbG9ycy5tb2Rlc2AuJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmV3VGhlbWUgPSB1c2VUaGVtZVdpdGhBcHBsaWVkQ29sb3JNb2RlKHtcbiAgICBjb2xvck1vZGUsXG4gICAgb3V0ZXJUaGVtZVxuICB9KTtcbiAgY29uc3QgbmV3Q3R4ID0geyAuLi5vdXRlckN0eCxcbiAgICB0aGVtZTogbmV3VGhlbWUsXG4gICAgY29sb3JNb2RlLFxuICAgIHNldENvbG9yTW9kZVxuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX19UaGVtZVVJSW50ZXJuYWxCYXNlVGhlbWVQcm92aWRlciwge1xuICAgIGNvbnRleHQ6IG5ld0N0eFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChHbG9iYWxDb2xvclN0eWxlcywge1xuICAgIHRoZW1lOiBuZXdUaGVtZVxuICB9KSwgY2hpbGRyZW4pO1xufTtcblxuZnVuY3Rpb24gdXNlQ29sb3JNb2RlKCkge1xuICBjb25zdCB7XG4gICAgY29sb3JNb2RlLFxuICAgIHNldENvbG9yTW9kZVxuICB9ID0gdXNlVGhlbWVVSSgpO1xuXG4gIGlmICh0eXBlb2Ygc2V0Q29sb3JNb2RlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBbdXNlQ29sb3JNb2RlXSByZXF1aXJlcyB0aGUgQ29sb3JNb2RlUHJvdmlkZXIgY29tcG9uZW50YCk7XG4gIH0gLy8gV2UncmUgYWxsb3dpbmcgdGhlIHVzZXIgdG8gc3BlY2lmeSBhIG5hcnJvd2VyIHR5cGUgZm9yIGl0cyBjb2xvciBtb2RlIG5hbWUuXG5cblxuICByZXR1cm4gW2NvbG9yTW9kZSwgc2V0Q29sb3JNb2RlXTtcbn1cblxuY29uc3Qgb21pdE1vZGVzID0gY29sb3JzID0+IHtcbiAgY29uc3QgcmVzID0geyAuLi5jb2xvcnNcbiAgfTtcbiAgZGVsZXRlIHJlcy5tb2RlcztcbiAgcmV0dXJuIHJlcztcbn07XG5cbmZ1bmN0aW9uIGNvcHlSYXdDb2xvcnMoY29sb3JzLCBvdXRlclRoZW1lUmF3Q29sb3JzKSB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGNvbG9ycykpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhdmFsdWUuc3RhcnRzV2l0aCgndmFyKCcpKSB7XG4gICAgICBvdXRlclRoZW1lUmF3Q29sb3JzW2tleV0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0geyAuLi5vdXRlclRoZW1lUmF3Q29sb3JzW2tleV1cbiAgICAgIH07XG4gICAgICBjb3B5UmF3Q29sb3JzKHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICBvdXRlclRoZW1lUmF3Q29sb3JzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlVGhlbWVXaXRoQXBwbGllZENvbG9yTW9kZSh7XG4gIG91dGVyVGhlbWUsXG4gIGNvbG9yTW9kZVxufSkge1xuICBjb25zdCB0aGVtZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IHsgLi4ub3V0ZXJUaGVtZVxuICAgIH07XG4gICAgY29uc3QgbW9kZXMgPSBnZXQocmVzLCAnY29sb3JzLm1vZGVzJywge30pO1xuICAgIGNvbnN0IGN1cnJlbnRDb2xvck1vZGUgPSBnZXQobW9kZXMsIGNvbG9yTW9kZSwge30pO1xuXG4gICAgaWYgKGNvbG9yTW9kZSkge1xuICAgICAgcmVzLmNvbG9ycyA9IHsgLi4ucmVzLmNvbG9ycyxcbiAgICAgICAgLi4uY3VycmVudENvbG9yTW9kZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICB1c2VDdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgaW5pdGlhbENvbG9yTW9kZU5hbWUgPSAnX19kZWZhdWx0J1xuICAgIH0gPSBvdXRlclRoZW1lLmNvbmZpZyB8fCBvdXRlclRoZW1lO1xuICAgIGxldCBvdXRlclRoZW1lUmF3Q29sb3JzID0gb3V0ZXJUaGVtZS5yYXdDb2xvcnMgfHwgb3V0ZXJUaGVtZS5jb2xvcnMgfHwge307XG5cbiAgICBpZiAodXNlQ3VzdG9tUHJvcGVydGllcyAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGFscmVhZHlIYXNSYXdDb2xvcnMgPSByZXMucmF3Q29sb3JzICE9IG51bGw7XG4gICAgICBjb25zdCBjb2xvcnMgPSByZXMuY29sb3JzIHx8IHt9O1xuXG4gICAgICBpZiAoYWxyZWFkeUhhc1Jhd0NvbG9ycykge1xuICAgICAgICBvdXRlclRoZW1lUmF3Q29sb3JzID0geyAuLi5vdXRlclRoZW1lUmF3Q29sb3JzXG4gICAgICAgIH07XG4gICAgICAgIGNvcHlSYXdDb2xvcnMoY29sb3JzLCBvdXRlclRoZW1lUmF3Q29sb3JzKTtcblxuICAgICAgICBpZiAob3V0ZXJUaGVtZVJhd0NvbG9ycy5tb2Rlcykge1xuICAgICAgICAgIG91dGVyVGhlbWVSYXdDb2xvcnMubW9kZXNbaW5pdGlhbENvbG9yTW9kZU5hbWVdID0gb21pdE1vZGVzKG91dGVyVGhlbWVSYXdDb2xvcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzLnJhd0NvbG9ycyA9IG91dGVyVGhlbWVSYXdDb2xvcnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoISgnbW9kZXMnIGluIG91dGVyVGhlbWVSYXdDb2xvcnMpKSB7XG4gICAgICAgICAgcmVzLnJhd0NvbG9ycyA9IGNvbG9ycztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBtb2RlcyA9IHtcbiAgICAgICAgICAgIFtpbml0aWFsQ29sb3JNb2RlTmFtZV06IG9taXRNb2RlcyhvdXRlclRoZW1lUmF3Q29sb3JzKSxcbiAgICAgICAgICAgIC4uLm91dGVyVGhlbWVSYXdDb2xvcnMubW9kZXNcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlcy5yYXdDb2xvcnMgPSB7IC4uLmNvbG9ycyxcbiAgICAgICAgICAgIG1vZGVzXG4gICAgICAgICAgfTtcbiAgICAgICAgICAvKiBtb2RlcyBkb2Vzbid0IG1hdGNoIGluZGV4IHNpZ25hdHVyZSBieSBkZXNpZ24gKi9cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXMuY29sb3JzID0gdG9DdXN0b21Qcm9wZXJ0aWVzKG9taXRNb2RlcyhvdXRlclRoZW1lUmF3Q29sb3JzKSwgJ2NvbG9ycycpO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH0sIFtjb2xvck1vZGUsIG91dGVyVGhlbWVdKTtcbiAgcmV0dXJuIHRoZW1lO1xufVxuXG5mdW5jdGlvbiBHbG9iYWxDb2xvclN0eWxlcyh7XG4gIHRoZW1lXG59KSB7XG4gIHJldHVybiBqc3goR2xvYmFsLCB7XG4gICAgc3R5bGVzOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBodG1sOiBfX2NyZWF0ZUNvbG9yU3R5bGVzKHRoZW1lKVxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBOZXN0ZWRDb2xvck1vZGVQcm92aWRlcih7XG4gIG91dGVyQ3R4LFxuICBjaGlsZHJlblxufSkge1xuICB2YXIgX25ld1RoZW1lJGNvbmZpZzI7XG5cbiAgY29uc3QgbmV3VGhlbWUgPSB1c2VUaGVtZVdpdGhBcHBsaWVkQ29sb3JNb2RlKHtcbiAgICBvdXRlclRoZW1lOiBvdXRlckN0eC50aGVtZSxcbiAgICBjb2xvck1vZGU6IG91dGVyQ3R4LmNvbG9yTW9kZVxuICB9KTsgLy8gTmVzdGVkIHRoZW1lIHByb3ZpZGVycyBuZWVkIHRvIGJlIHJlcmVuZGVyZWQgYWZ0ZXIgaHlkcmF0aW9uIGZvciB0aGUgY29ycmVjdFxuICAvLyBjb2xvciBtb2RlIHRvIGFwcGx5LlxuXG4gIGNvbnN0IFtuZWVkc1JlcmVuZGVyLCBzZXROZWVkc1JlcmVuZGVyXSA9IHVzZVN0YXRlKCAvLyBOb3RlOiB3ZSBjb3VsZCBhbHNvIGNoZWNrIHNvbWUgXCJzc3ItZW5hYmxlZFwiIGZsYWcgYXMgYW4gb3B0aW1pemF0aW9uIGZvclxuICAvLyBTUEFzLCBhcyBkZWVwbHkgbmVzdGVkIHRoZW1lIHByb3ZpZGVycyB3aWxsIGFsc28gcGF5IGEgcGVyZm9ybWFuY2UgcGVuYWx0eVxuICAvLyBmb3IgdGhpcyBTU1IgYnVnIGZpeFxuICAoKSA9PiB7XG4gICAgdmFyIF9uZXdUaGVtZSRjb25maWc7XG5cbiAgICByZXR1cm4gKChfbmV3VGhlbWUkY29uZmlnID0gbmV3VGhlbWUuY29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX25ld1RoZW1lJGNvbmZpZy51c2VMb2NhbFN0b3JhZ2UpICE9PSBmYWxzZTtcbiAgfSk7XG4gIHVzZUNsaWVudHNpZGVFZmZlY3QoKCkgPT4gdm9pZCBzZXROZWVkc1JlcmVuZGVyKGZhbHNlKSwgW10pO1xuICBjb25zdCB0aGVtZUNvbG9ycyA9IG5ld1RoZW1lLnJhd0NvbG9ycyB8fCBuZXdUaGVtZS5jb2xvcnM7XG4gIGNvbnN0IHVzZUN1c3RvbVByb3BlcnRpZXMgPSAoX25ld1RoZW1lJGNvbmZpZzIgPSBuZXdUaGVtZS5jb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfbmV3VGhlbWUkY29uZmlnMi51c2VDdXN0b21Qcm9wZXJ0aWVzO1xuICBjb25zdCBjb2xvclZhcnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAodXNlQ3VzdG9tUHJvcGVydGllcyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvcnMgPSB0aGVtZUNvbG9ycyB8fCB7fTtcbiAgICByZXR1cm4gY3NzKF9fY3JlYXRlQ29sb3JQcm9wZXJ0aWVzKGNvbG9ycywgY29sb3JzLm1vZGVzIHx8IHt9KSkobmV3VGhlbWUpO1xuICB9LCBbbmV3VGhlbWUsIHRoZW1lQ29sb3JzLCB1c2VDdXN0b21Qcm9wZXJ0aWVzXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfX1RoZW1lVUlJbnRlcm5hbEJhc2VUaGVtZVByb3ZpZGVyLCB7XG4gICAgY29udGV4dDogeyAuLi5vdXRlckN0eCxcbiAgICAgIHRoZW1lOiBuZXdUaGVtZVxuICAgIH1cbiAgfSwganN4KCdkaXYnLCB7XG4gICAgJ2RhdGEtdGhlbWV1aS1uZXN0ZWQtcHJvdmlkZXInOiB0cnVlLFxuICAgIC8vIHRoZSBrZXkgaGVyZSBlbnN1cmVzIHRoYXQgY2hpbGRyZW4gd2lsbCBiZSByZXJlbmRlcmVkIGFmdGVyIGNvbG9yXG4gICAgLy8gbW9kZSBpcyByZWFkIGZyb20gbG9jYWxTdG9yYWdlXG4gICAga2V5OiBOdW1iZXIobmVlZHNSZXJlbmRlciksXG4gICAgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nOiB0cnVlLFxuICAgIGNzczogY29sb3JWYXJzLFxuICAgIGNoaWxkcmVuXG4gIH0pKTtcbn1cblxuY29uc3QgQ29sb3JNb2RlUHJvdmlkZXIgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBvdXRlckN0eCA9IHVzZVRoZW1lVUkoKTtcbiAgY29uc3QgaXNUb3BMZXZlbENvbG9yTW9kZVByb3ZpZGVyID0gdHlwZW9mIG91dGVyQ3R4LnNldENvbG9yTW9kZSAhPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIGlzVG9wTGV2ZWxDb2xvck1vZGVQcm92aWRlciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRvcExldmVsQ29sb3JNb2RlUHJvdmlkZXIsIHtcbiAgICBvdXRlckN0eDogb3V0ZXJDdHhcbiAgfSwgY2hpbGRyZW4pIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTmVzdGVkQ29sb3JNb2RlUHJvdmlkZXIsIHtcbiAgICBvdXRlckN0eDogb3V0ZXJDdHhcbiAgfSwgY2hpbGRyZW4pO1xufTtcbmNvbnN0IG5vZmxhc2ggPSBgKGZ1bmN0aW9uKCkgeyB0cnkge1xuICB2YXIgbW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZS11aS1jb2xvci1tb2RlJyk7XG4gIGlmICghbW9kZSkgcmV0dXJuXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0aGVtZS11aS0nICsgbW9kZSk7XG59IGNhdGNoIChlKSB7fSB9KSgpO2A7XG5jb25zdCBJbml0aWFsaXplQ29sb3JNb2RlID0gKCkgPT4ganN4KCdzY3JpcHQnLCB7XG4gIGtleTogJ3RoZW1lLXVpLW5vLWZsYXNoJyxcbiAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICBfX2h0bWw6IG5vZmxhc2hcbiAgfVxufSk7XG5cbmV4cG9ydCB7IENvbG9yTW9kZVByb3ZpZGVyLCBJbml0aWFsaXplQ29sb3JNb2RlLCB1c2VDb2xvck1vZGUgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgTURYQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbnZhciB3aXRoTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHdpdGhNRFhDb21wb25lbnRzKENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY29tcG9uZW50czogYWxsQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgdXNlTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICB2YXIgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpO1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IGNvbnRleHRDb21wb25lbnRzO1xuXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IGlzRnVuY3Rpb24oY29tcG9uZW50cykgPyBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKSA6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb250ZXh0Q29tcG9uZW50cyksIGNvbXBvbmVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGFsbENvbXBvbmVudHM7XG59O1xudmFyIE1EWFByb3ZpZGVyID0gZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTURYQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBhbGxDb21wb25lbnRzXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbnZhciBUWVBFX1BST1BfTkFNRSA9ICdtZHhUeXBlJztcbnZhciBERUZBVUxUUyA9IHtcbiAgaW5saW5lQ29kZTogJ2NvZGUnLFxuICB3cmFwcGVyOiBmdW5jdGlvbiB3cmFwcGVyKF9yZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIGNoaWxkcmVuKTtcbiAgfVxufTtcbnZhciBNRFhDcmVhdGVFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHByb3BDb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICAgIG1keFR5cGUgPSBwcm9wcy5tZHhUeXBlLFxuICAgICAgb3JpZ2luYWxUeXBlID0gcHJvcHMub3JpZ2luYWxUeXBlLFxuICAgICAgcGFyZW50TmFtZSA9IHByb3BzLnBhcmVudE5hbWUsXG4gICAgICBldGMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNvbXBvbmVudHNcIiwgXCJtZHhUeXBlXCIsIFwib3JpZ2luYWxUeXBlXCIsIFwicGFyZW50TmFtZVwiXSk7XG5cbiAgdmFyIGNvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BDb21wb25lbnRzKTtcbiAgdmFyIHR5cGUgPSBtZHhUeXBlO1xuICB2YXIgQ29tcG9uZW50ID0gY29tcG9uZW50c1tcIlwiLmNvbmNhdChwYXJlbnROYW1lLCBcIi5cIikuY29uY2F0KHR5cGUpXSB8fCBjb21wb25lbnRzW3R5cGVdIHx8IERFRkFVTFRTW3R5cGVdIHx8IG9yaWdpbmFsVHlwZTtcblxuICBpZiAocHJvcENvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7XG4gICAgICByZWY6IHJlZlxuICAgIH0sIGV0YyksIHt9LCB7XG4gICAgICBjb21wb25lbnRzOiBwcm9wQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKHtcbiAgICByZWY6IHJlZlxuICB9LCBldGMpKTtcbn0pO1xuTURYQ3JlYXRlRWxlbWVudC5kaXNwbGF5TmFtZSA9ICdNRFhDcmVhdGVFbGVtZW50JztcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbWR4VHlwZSA9IHByb3BzICYmIHByb3BzLm1keFR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCBtZHhUeXBlKSB7XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IE1EWENyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1Byb3BzLm9yaWdpbmFsVHlwZSA9IHR5cGU7XG4gICAgbmV3UHJvcHNbVFlQRV9QUk9QX05BTUVdID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA6IG1keFR5cGU7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gbmV3UHJvcHM7XG5cbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbmV4cG9ydCB7IE1EWENvbnRleHQsIE1EWFByb3ZpZGVyLCBjcmVhdGVFbGVtZW50IGFzIG1keCwgdXNlTURYQ29tcG9uZW50cywgd2l0aE1EWENvbXBvbmVudHMgfTtcbiIsImltcG9ydCB7IGpzeCB9IGZyb20gJ0B0aGVtZS11aS9jb3JlJztcbmltcG9ydCB7IGNzcywgZ2V0IH0gZnJvbSAnQHRoZW1lLXVpL2Nzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyB1c2VNRFhDb21wb25lbnRzLCBNRFhQcm92aWRlciBhcyBNRFhQcm92aWRlciQxIH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cbi8vIG1keCBjb21wb25lbnRzXG5jb25zdCB0YWdzID0gWydwJywgJ2InLCAnaScsICdhJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2ltZycsICdwcmUnLCAnY29kZScsICdvbCcsICd1bCcsICdsaScsICdibG9ja3F1b3RlJywgJ2hyJywgJ2VtJywgJ3RhYmxlJywgJ3RyJywgJ3RoJywgJ3RkJywgJ2VtJywgJ3N0cm9uZycsICdkZWwnLCAvLyBtZHhcbidpbmxpbmVDb2RlJywgJ3RoZW1hdGljQnJlYWsnLCAvLyBvdGhlclxuJ2RpdicsIC8vIHRoZW1lLXVpXG4ncm9vdCddO1xuY29uc3QgYWxpYXNlcyA9IHtcbiAgaW5saW5lQ29kZTogJ2NvZGUnLFxuICB0aGVtYXRpY0JyZWFrOiAnaHInLFxuICByb290OiAnZGl2J1xufTtcblxuY29uc3QgaXNBbGlhcyA9IHggPT4geCBpbiBhbGlhc2VzO1xuXG5jb25zdCBhbGlhcyA9IG4gPT4gaXNBbGlhcyhuKSA/IGFsaWFzZXNbbl0gOiBuO1xuXG5jb25zdCBwcm9wT3ZlcnJpZGVzID0ge1xuICB0aDoge1xuICAgIGFsaWduOiAndGV4dEFsaWduJ1xuICB9LFxuICB0ZDoge1xuICAgIGFsaWduOiAndGV4dEFsaWduJ1xuICB9XG59O1xuY29uc3QgdGhlbWVkID0ga2V5ID0+ICh7XG4gIHRoZW1lLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IHByb3BzU3R5bGUgPSBwcm9wT3ZlcnJpZGVzW2tleV07XG4gIGNvbnN0IGV4dHJhU3R5bGVzID0gcHJvcHNTdHlsZSA/IE9iamVjdC5rZXlzKHJlc3QpLmZpbHRlcihwcm9wID0+IHByb3BzU3R5bGVbcHJvcF0gIT09IHVuZGVmaW5lZCkucmVkdWNlKChhY2MsIHByb3ApID0+ICh7IC4uLmFjYyxcbiAgICBbcHJvcHNTdHlsZVtwcm9wXV06IHJlc3RbcHJvcF1cbiAgfSksIHt9KSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIGNzcyh7IC4uLmdldCh0aGVtZSwgYHN0eWxlcy4ke2tleX1gKSxcbiAgICAuLi5leHRyYVN0eWxlc1xuICB9KSh0aGVtZSk7XG59OyAvLyBvcHQgb3V0IG9mIHR5cGVjaGVja2luZyB3aGVuZXZlciBgYXNgIHByb3AgaXMgdXNlZFxuXG5jb25zdCBUaGVtZWQgPSBzdHlsZWQoJ2RpdicpKHRoZW1lZCgnZGl2JykpO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSAwLjYuMC5cbiAqXG4gKiBgU3R5bGVkYCB3YXMgcmVuYW1lZCB0byBgVGhlbWVkYCB0byBhdm9pZCBjb25mdXNpb24gd2l0aCBzdHlsZWQgY29tcG9uZW50cy5cbiAqL1xuXG5jb25zdCBTdHlsZWQgPSBzdHlsZWQoJ2RpdicpKHRoZW1lZCgnZGl2JykpO1xuXG5jb25zdCB3YXJuU3R5bGVkID0gdGFnID0+IHByb3BzID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdbdGhlbWUtdWldIFRoZSBTdHlsZWQgY29tcG9uZW50IGZyb20gXCJAdGhlbWUtdWkvbWR4XCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uIEl0IGhhcyBiZWVuIHJlbmFtZWQgdG8gVGhlbWVkIHdpdGggdGhlIHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoYWxpYXModGFnKSwgcHJvcHMpO1xufTtcblxuY29uc3QgY29tcG9uZW50cyA9IHt9O1xudGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gIC8vIGZpeG1lP1xuICBjb21wb25lbnRzW3RhZ10gPSBzdHlsZWQoYWxpYXModGFnKSkodGhlbWVkKHRhZykpO1xuICBUaGVtZWRbdGFnXSA9IGNvbXBvbmVudHNbdGFnXTtcbiAgU3R5bGVkW3RhZ10gPSBzdHlsZWQod2FyblN0eWxlZCh0YWcpKSh0aGVtZWQodGFnKSk7XG59KTtcblxuY29uc3QgY3JlYXRlQ29tcG9uZW50cyA9IGNvbXBzID0+IHtcbiAgY29uc3QgbmV4dCA9IHsgLi4uY29tcG9uZW50c1xuICB9O1xuICBjb25zdCBjb21wb25lbnRLZXlzID0gT2JqZWN0LmtleXMoY29tcHMpO1xuICBjb21wb25lbnRLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICBuZXh0W2tleV0gPSBzdHlsZWQoY29tcHNba2V5XSkodGhlbWVkKGtleSkpO1xuICB9KTtcbiAgcmV0dXJuIG5leHQ7XG59O1xuXG5jb25zdCBNRFhQcm92aWRlciA9ICh7XG4gIGNvbXBvbmVudHMsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IG91dGVyID0gdXNlTURYQ29tcG9uZW50cygpO1xuICByZXR1cm4ganN4KE1EWFByb3ZpZGVyJDEsIHtcbiAgICBjb21wb25lbnRzOiBjcmVhdGVDb21wb25lbnRzKHsgLi4ub3V0ZXIsXG4gICAgICAuLi5jb21wb25lbnRzXG4gICAgfSksXG4gICAgY2hpbGRyZW5cbiAgfSk7XG59O1xuXG5leHBvcnQgeyBNRFhQcm92aWRlciwgU3R5bGVkLCBUaGVtZWQsIGNvbXBvbmVudHMsIHRoZW1lZCB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRoZW1lVUksIFRoZW1lUHJvdmlkZXIgYXMgVGhlbWVQcm92aWRlciQxLCBqc3gsIF9fdGhlbWVVaURlZmF1bHRDb250ZXh0VmFsdWUgfSBmcm9tICdAdGhlbWUtdWkvY29yZSc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAdGhlbWUtdWkvY3NzJztcbmltcG9ydCB7IENvbG9yTW9kZVByb3ZpZGVyIH0gZnJvbSAnQHRoZW1lLXVpL2NvbG9yLW1vZGVzJztcbmltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQHRoZW1lLXVpL21keCc7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJvb3RTdHlsZXMgPSAoKSA9PiBqc3goR2xvYmFsLCB7XG4gIHN0eWxlczogZW1vdGlvblRoZW1lID0+IHtcbiAgICB2YXIgX3RoZW1lJGNvbmZpZztcblxuICAgIGNvbnN0IHRoZW1lID0gZW1vdGlvblRoZW1lO1xuICAgIGNvbnN0IHtcbiAgICAgIHVzZVJvb3RTdHlsZXNcbiAgICB9ID0gdGhlbWUuY29uZmlnIHx8IHRoZW1lO1xuXG4gICAgaWYgKHVzZVJvb3RTdHlsZXMgPT09IGZhbHNlIHx8IHRoZW1lLnN0eWxlcyAmJiAhdGhlbWUuc3R5bGVzLnJvb3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGJveFNpemluZyA9ICgoX3RoZW1lJGNvbmZpZyA9IHRoZW1lLmNvbmZpZykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGVtZSRjb25maWcudXNlQm9yZGVyQm94KSA9PT0gZmFsc2UgPyB1bmRlZmluZWQgOiAnYm9yZGVyLWJveCc7XG4gICAgcmV0dXJuIGNzcyh7XG4gICAgICAnKic6IHtcbiAgICAgICAgYm94U2l6aW5nXG4gICAgICB9LFxuICAgICAgaHRtbDoge1xuICAgICAgICB2YXJpYW50OiAnc3R5bGVzLnJvb3QnXG4gICAgICB9LFxuICAgICAgYm9keToge1xuICAgICAgICBtYXJnaW46IDBcbiAgICAgIH1cbiAgICB9KSh0aGVtZSk7XG4gIH1cbn0pO1xuXG5jb25zdCBUaGVtZVByb3ZpZGVyID0gKHtcbiAgdGhlbWUsXG4gIGNvbXBvbmVudHMsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IG91dGVyID0gdXNlVGhlbWVVSSgpO1xuICBjb25zdCBpc1RvcExldmVsID0gb3V0ZXIgPT09IF9fdGhlbWVVaURlZmF1bHRDb250ZXh0VmFsdWU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUaGVtZVByb3ZpZGVyJDEsIHtcbiAgICB0aGVtZTogdGhlbWVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29sb3JNb2RlUHJvdmlkZXIsIG51bGwsIGlzVG9wTGV2ZWwgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm9vdFN0eWxlcywgbnVsbCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE1EWFByb3ZpZGVyLCB7XG4gICAgY29tcG9uZW50czogY29tcG9uZW50c1xuICB9LCBjaGlsZHJlbikpKTtcbn07XG5cbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIgfTtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaW5kZXggPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IGFzc2lnbiBmcm9tICdvYmplY3QtYXNzaWduJztcbmV4cG9ydCB2YXIgbWVyZ2UgPSBmdW5jdGlvbiBtZXJnZShhLCBiKSB7XG4gIHZhciByZXN1bHQgPSBhc3NpZ24oe30sIGEsIGIpO1xuXG4gIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgdmFyIF9hc3NpZ247XG5cbiAgICBpZiAoIWFba2V5XSB8fCB0eXBlb2YgYltrZXldICE9PSAnb2JqZWN0JykgY29udGludWU7XG4gICAgYXNzaWduKHJlc3VsdCwgKF9hc3NpZ24gPSB7fSwgX2Fzc2lnbltrZXldID0gYXNzaWduKGFba2V5XSwgYltrZXldKSwgX2Fzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07IC8vIHNvcnQgb2JqZWN0LXZhbHVlIHJlc3BvbnNpdmUgc3R5bGVzXG5cbnZhciBzb3J0ID0gZnVuY3Rpb24gc29ydChvYmopIHtcbiAgdmFyIG5leHQgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEubG9jYWxlQ29tcGFyZShiLCB1bmRlZmluZWQsIHtcbiAgICAgIG51bWVyaWM6IHRydWUsXG4gICAgICBzZW5zaXRpdml0eTogJ2Jhc2UnXG4gICAgfSk7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIG5leHRba2V5XSA9IG9ialtrZXldO1xuICB9KTtcbiAgcmV0dXJuIG5leHQ7XG59O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGJyZWFrcG9pbnRzOiBbNDAsIDUyLCA2NF0ubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG4gKyAnZW0nO1xuICB9KVxufTtcblxudmFyIGNyZWF0ZU1lZGlhUXVlcnkgPSBmdW5jdGlvbiBjcmVhdGVNZWRpYVF1ZXJ5KG4pIHtcbiAgcmV0dXJuIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogXCIgKyBuICsgXCIpXCI7XG59O1xuXG52YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZShuLCBzY2FsZSkge1xuICByZXR1cm4gZ2V0KHNjYWxlLCBuLCBuKTtcbn07XG5cbmV4cG9ydCB2YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iaiwga2V5LCBkZWYsIHAsIHVuZGVmKSB7XG4gIGtleSA9IGtleSAmJiBrZXkuc3BsaXQgPyBrZXkuc3BsaXQoJy4nKSA6IFtrZXldO1xuXG4gIGZvciAocCA9IDA7IHAgPCBrZXkubGVuZ3RoOyBwKyspIHtcbiAgICBvYmogPSBvYmogPyBvYmpba2V5W3BdXSA6IHVuZGVmO1xuICB9XG5cbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWYgPyBkZWYgOiBvYmo7XG59O1xuZXhwb3J0IHZhciBjcmVhdGVQYXJzZXIgPSBmdW5jdGlvbiBjcmVhdGVQYXJzZXIoY29uZmlnKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuXG4gIHZhciBwYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKHByb3BzKSB7XG4gICAgdmFyIHN0eWxlcyA9IHt9O1xuICAgIHZhciBzaG91bGRTb3J0ID0gZmFsc2U7XG4gICAgdmFyIGlzQ2FjaGVEaXNhYmxlZCA9IHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLmRpc2FibGVTdHlsZWRTeXN0ZW1DYWNoZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKCFjb25maWdba2V5XSkgY29udGludWU7XG4gICAgICB2YXIgc3ggPSBjb25maWdba2V5XTtcbiAgICAgIHZhciByYXcgPSBwcm9wc1trZXldO1xuICAgICAgdmFyIHNjYWxlID0gZ2V0KHByb3BzLnRoZW1lLCBzeC5zY2FsZSwgc3guZGVmYXVsdHMpO1xuXG4gICAgICBpZiAodHlwZW9mIHJhdyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY2FjaGUuYnJlYWtwb2ludHMgPSAhaXNDYWNoZURpc2FibGVkICYmIGNhY2hlLmJyZWFrcG9pbnRzIHx8IGdldChwcm9wcy50aGVtZSwgJ2JyZWFrcG9pbnRzJywgZGVmYXVsdHMuYnJlYWtwb2ludHMpO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJhdykpIHtcbiAgICAgICAgICBjYWNoZS5tZWRpYSA9ICFpc0NhY2hlRGlzYWJsZWQgJiYgY2FjaGUubWVkaWEgfHwgW251bGxdLmNvbmNhdChjYWNoZS5icmVha3BvaW50cy5tYXAoY3JlYXRlTWVkaWFRdWVyeSkpO1xuICAgICAgICAgIHN0eWxlcyA9IG1lcmdlKHN0eWxlcywgcGFyc2VSZXNwb25zaXZlU3R5bGUoY2FjaGUubWVkaWEsIHN4LCBzY2FsZSwgcmF3LCBwcm9wcykpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJhdyAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0eWxlcyA9IG1lcmdlKHN0eWxlcywgcGFyc2VSZXNwb25zaXZlT2JqZWN0KGNhY2hlLmJyZWFrcG9pbnRzLCBzeCwgc2NhbGUsIHJhdywgcHJvcHMpKTtcbiAgICAgICAgICBzaG91bGRTb3J0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBhc3NpZ24oc3R5bGVzLCBzeChyYXcsIHNjYWxlLCBwcm9wcykpO1xuICAgIH0gLy8gc29ydCBvYmplY3QtYmFzZWQgcmVzcG9uc2l2ZSBzdHlsZXNcblxuXG4gICAgaWYgKHNob3VsZFNvcnQpIHtcbiAgICAgIHN0eWxlcyA9IHNvcnQoc3R5bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9O1xuXG4gIHBhcnNlLmNvbmZpZyA9IGNvbmZpZztcbiAgcGFyc2UucHJvcE5hbWVzID0gT2JqZWN0LmtleXMoY29uZmlnKTtcbiAgcGFyc2UuY2FjaGUgPSBjYWNoZTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjb25maWcpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgIHJldHVybiBrICE9PSAnY29uZmlnJztcbiAgfSk7XG5cbiAgaWYgKGtleXMubGVuZ3RoID4gMSkge1xuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgX2NyZWF0ZVBhcnNlcjtcblxuICAgICAgcGFyc2Vba2V5XSA9IGNyZWF0ZVBhcnNlcigoX2NyZWF0ZVBhcnNlciA9IHt9LCBfY3JlYXRlUGFyc2VyW2tleV0gPSBjb25maWdba2V5XSwgX2NyZWF0ZVBhcnNlcikpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlO1xufTtcblxudmFyIHBhcnNlUmVzcG9uc2l2ZVN0eWxlID0gZnVuY3Rpb24gcGFyc2VSZXNwb25zaXZlU3R5bGUobWVkaWFRdWVyaWVzLCBzeCwgc2NhbGUsIHJhdywgX3Byb3BzKSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcbiAgcmF3LnNsaWNlKDAsIG1lZGlhUXVlcmllcy5sZW5ndGgpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgdmFyIG1lZGlhID0gbWVkaWFRdWVyaWVzW2ldO1xuICAgIHZhciBzdHlsZSA9IHN4KHZhbHVlLCBzY2FsZSwgX3Byb3BzKTtcblxuICAgIGlmICghbWVkaWEpIHtcbiAgICAgIGFzc2lnbihzdHlsZXMsIHN0eWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9hc3NpZ24yO1xuXG4gICAgICBhc3NpZ24oc3R5bGVzLCAoX2Fzc2lnbjIgPSB7fSwgX2Fzc2lnbjJbbWVkaWFdID0gYXNzaWduKHt9LCBzdHlsZXNbbWVkaWFdLCBzdHlsZSksIF9hc3NpZ24yKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN0eWxlcztcbn07XG5cbnZhciBwYXJzZVJlc3BvbnNpdmVPYmplY3QgPSBmdW5jdGlvbiBwYXJzZVJlc3BvbnNpdmVPYmplY3QoYnJlYWtwb2ludHMsIHN4LCBzY2FsZSwgcmF3LCBfcHJvcHMpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiByYXcpIHtcbiAgICB2YXIgYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRzW2tleV07XG4gICAgdmFyIHZhbHVlID0gcmF3W2tleV07XG4gICAgdmFyIHN0eWxlID0gc3godmFsdWUsIHNjYWxlLCBfcHJvcHMpO1xuXG4gICAgaWYgKCFicmVha3BvaW50KSB7XG4gICAgICBhc3NpZ24oc3R5bGVzLCBzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfYXNzaWduMztcblxuICAgICAgdmFyIG1lZGlhID0gY3JlYXRlTWVkaWFRdWVyeShicmVha3BvaW50KTtcbiAgICAgIGFzc2lnbihzdHlsZXMsIChfYXNzaWduMyA9IHt9LCBfYXNzaWduM1ttZWRpYV0gPSBhc3NpZ24oe30sIHN0eWxlc1ttZWRpYV0sIHN0eWxlKSwgX2Fzc2lnbjMpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcblxuZXhwb3J0IHZhciBjcmVhdGVTdHlsZUZ1bmN0aW9uID0gZnVuY3Rpb24gY3JlYXRlU3R5bGVGdW5jdGlvbihfcmVmKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gX3JlZi5wcm9wZXJ0aWVzLFxuICAgICAgcHJvcGVydHkgPSBfcmVmLnByb3BlcnR5LFxuICAgICAgc2NhbGUgPSBfcmVmLnNjYWxlLFxuICAgICAgX3JlZiR0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYkdHJhbnNmb3JtID09PSB2b2lkIDAgPyBnZXRWYWx1ZSA6IF9yZWYkdHJhbnNmb3JtLFxuICAgICAgZGVmYXVsdFNjYWxlID0gX3JlZi5kZWZhdWx0U2NhbGU7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IFtwcm9wZXJ0eV07XG5cbiAgdmFyIHN4ID0gZnVuY3Rpb24gc3godmFsdWUsIHNjYWxlLCBfcHJvcHMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIG4gPSB0cmFuc2Zvcm0odmFsdWUsIHNjYWxlLCBfcHJvcHMpO1xuICAgIGlmIChuID09PSBudWxsKSByZXR1cm47XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXN1bHRbcHJvcF0gPSBuO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgc3guc2NhbGUgPSBzY2FsZTtcbiAgc3guZGVmYXVsdHMgPSBkZWZhdWx0U2NhbGU7XG4gIHJldHVybiBzeDtcbn07IC8vIG5ldyB2NSBBUElcblxuZXhwb3J0IHZhciBzeXN0ZW0gPSBmdW5jdGlvbiBzeXN0ZW0oYXJncykge1xuICBpZiAoYXJncyA9PT0gdm9pZCAwKSB7XG4gICAgYXJncyA9IHt9O1xuICB9XG5cbiAgdmFyIGNvbmZpZyA9IHt9O1xuICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY29uZiA9IGFyZ3Nba2V5XTtcblxuICAgIGlmIChjb25mID09PSB0cnVlKSB7XG4gICAgICAvLyBzaG9ydGN1dCBkZWZpbml0aW9uXG4gICAgICBjb25maWdba2V5XSA9IGNyZWF0ZVN0eWxlRnVuY3Rpb24oe1xuICAgICAgICBwcm9wZXJ0eToga2V5LFxuICAgICAgICBzY2FsZToga2V5XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbmZpZ1trZXldID0gY29uZjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25maWdba2V5XSA9IGNyZWF0ZVN0eWxlRnVuY3Rpb24oY29uZik7XG4gIH0pO1xuICB2YXIgcGFyc2VyID0gY3JlYXRlUGFyc2VyKGNvbmZpZyk7XG4gIHJldHVybiBwYXJzZXI7XG59O1xuZXhwb3J0IHZhciBjb21wb3NlID0gZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJzZXJzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcnNlcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBwYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xuICAgIGlmICghcGFyc2VyIHx8ICFwYXJzZXIuY29uZmlnKSByZXR1cm47XG4gICAgYXNzaWduKGNvbmZpZywgcGFyc2VyLmNvbmZpZyk7XG4gIH0pO1xuICB2YXIgcGFyc2VyID0gY3JlYXRlUGFyc2VyKGNvbmZpZyk7XG4gIHJldHVybiBwYXJzZXI7XG59O1xuIiwiaW1wb3J0IHsgc3lzdGVtLCBnZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcblxudmFyIGlzTnVtYmVyID0gZnVuY3Rpb24gaXNOdW1iZXIobikge1xuICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInICYmICFpc05hTihuKTtcbn07XG5cbnZhciBnZXRXaWR0aCA9IGZ1bmN0aW9uIGdldFdpZHRoKG4sIHNjYWxlKSB7XG4gIHJldHVybiBnZXQoc2NhbGUsIG4sICFpc051bWJlcihuKSB8fCBuID4gMSA/IG4gOiBuICogMTAwICsgJyUnKTtcbn07XG5cbnZhciBjb25maWcgPSB7XG4gIHdpZHRoOiB7XG4gICAgcHJvcGVydHk6ICd3aWR0aCcsXG4gICAgc2NhbGU6ICdzaXplcycsXG4gICAgdHJhbnNmb3JtOiBnZXRXaWR0aFxuICB9LFxuICBoZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2hlaWdodCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWluV2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ21pbldpZHRoJyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBtaW5IZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ21pbkhlaWdodCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgbWF4V2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ21heFdpZHRoJyxcbiAgICBzY2FsZTogJ3NpemVzJ1xuICB9LFxuICBtYXhIZWlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ21heEhlaWdodCcsXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgc2l6ZToge1xuICAgIHByb3BlcnRpZXM6IFsnd2lkdGgnLCAnaGVpZ2h0J10sXG4gICAgc2NhbGU6ICdzaXplcydcbiAgfSxcbiAgb3ZlcmZsb3c6IHRydWUsXG4gIG92ZXJmbG93WDogdHJ1ZSxcbiAgb3ZlcmZsb3dZOiB0cnVlLFxuICBkaXNwbGF5OiB0cnVlLFxuICB2ZXJ0aWNhbEFsaWduOiB0cnVlXG59O1xuZXhwb3J0IHZhciBsYXlvdXQgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGxheW91dDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGNvbmZpZyA9IHtcbiAgY29sb3I6IHtcbiAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcbiAgICBzY2FsZTogJ2NvbG9ycydcbiAgfSxcbiAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgcHJvcGVydHk6ICdiYWNrZ3JvdW5kQ29sb3InLFxuICAgIHNjYWxlOiAnY29sb3JzJ1xuICB9LFxuICBvcGFjaXR5OiB0cnVlXG59O1xuY29uZmlnLmJnID0gY29uZmlnLmJhY2tncm91bmRDb2xvcjtcbmV4cG9ydCB2YXIgY29sb3IgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGNvbG9yO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG52YXIgZGVmYXVsdHMgPSB7XG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDIwLCAyNCwgMzIsIDQ4LCA2NCwgNzJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgZm9udEZhbWlseToge1xuICAgIHByb3BlcnR5OiAnZm9udEZhbWlseScsXG4gICAgc2NhbGU6ICdmb250cydcbiAgfSxcbiAgZm9udFNpemU6IHtcbiAgICBwcm9wZXJ0eTogJ2ZvbnRTaXplJyxcbiAgICBzY2FsZTogJ2ZvbnRTaXplcycsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5mb250U2l6ZXNcbiAgfSxcbiAgZm9udFdlaWdodDoge1xuICAgIHByb3BlcnR5OiAnZm9udFdlaWdodCcsXG4gICAgc2NhbGU6ICdmb250V2VpZ2h0cydcbiAgfSxcbiAgbGluZUhlaWdodDoge1xuICAgIHByb3BlcnR5OiAnbGluZUhlaWdodCcsXG4gICAgc2NhbGU6ICdsaW5lSGVpZ2h0cydcbiAgfSxcbiAgbGV0dGVyU3BhY2luZzoge1xuICAgIHByb3BlcnR5OiAnbGV0dGVyU3BhY2luZycsXG4gICAgc2NhbGU6ICdsZXR0ZXJTcGFjaW5ncydcbiAgfSxcbiAgdGV4dEFsaWduOiB0cnVlLFxuICBmb250U3R5bGU6IHRydWVcbn07XG5leHBvcnQgdmFyIHR5cG9ncmFwaHkgPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IHR5cG9ncmFwaHk7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGFsaWduSXRlbXM6IHRydWUsXG4gIGFsaWduQ29udGVudDogdHJ1ZSxcbiAganVzdGlmeUl0ZW1zOiB0cnVlLFxuICBqdXN0aWZ5Q29udGVudDogdHJ1ZSxcbiAgZmxleFdyYXA6IHRydWUsXG4gIGZsZXhEaXJlY3Rpb246IHRydWUsXG4gIC8vIGl0ZW1cbiAgZmxleDogdHJ1ZSxcbiAgZmxleEdyb3c6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhCYXNpczogdHJ1ZSxcbiAganVzdGlmeVNlbGY6IHRydWUsXG4gIGFsaWduU2VsZjogdHJ1ZSxcbiAgb3JkZXI6IHRydWVcbn07XG5leHBvcnQgdmFyIGZsZXhib3ggPSBzeXN0ZW0oY29uZmlnKTtcbmV4cG9ydCBkZWZhdWx0IGZsZXhib3g7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBkZWZhdWx0cyA9IHtcbiAgc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXVxufTtcbnZhciBjb25maWcgPSB7XG4gIGdyaWRHYXA6IHtcbiAgICBwcm9wZXJ0eTogJ2dyaWRHYXAnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgZ3JpZENvbHVtbkdhcDoge1xuICAgIHByb3BlcnR5OiAnZ3JpZENvbHVtbkdhcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBncmlkUm93R2FwOiB7XG4gICAgcHJvcGVydHk6ICdncmlkUm93R2FwJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIGdyaWRDb2x1bW46IHRydWUsXG4gIGdyaWRSb3c6IHRydWUsXG4gIGdyaWRBdXRvRmxvdzogdHJ1ZSxcbiAgZ3JpZEF1dG9Db2x1bW5zOiB0cnVlLFxuICBncmlkQXV0b1Jvd3M6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZVJvd3M6IHRydWUsXG4gIGdyaWRUZW1wbGF0ZUFyZWFzOiB0cnVlLFxuICBncmlkQXJlYTogdHJ1ZVxufTtcbmV4cG9ydCB2YXIgZ3JpZCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgZ3JpZDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGNvbmZpZyA9IHtcbiAgYm9yZGVyOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXInLFxuICAgIHNjYWxlOiAnYm9yZGVycydcbiAgfSxcbiAgYm9yZGVyV2lkdGg6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlcldpZHRoJyxcbiAgICBzY2FsZTogJ2JvcmRlcldpZHRocydcbiAgfSxcbiAgYm9yZGVyU3R5bGU6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclN0eWxlJyxcbiAgICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbiAgfSxcbiAgYm9yZGVyQ29sb3I6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckNvbG9yJyxcbiAgICBzY2FsZTogJ2NvbG9ycydcbiAgfSxcbiAgYm9yZGVyUmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlclRvcDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyVG9wJyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlclRvcExlZnRSYWRpdXM6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclRvcExlZnRSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJUb3BSaWdodFJhZGl1cycsXG4gICAgc2NhbGU6ICdyYWRpaSdcbiAgfSxcbiAgYm9yZGVyUmlnaHQ6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlclJpZ2h0JyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlckJvdHRvbToge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tJyxcbiAgICBzY2FsZTogJ2JvcmRlcnMnXG4gIH0sXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHtcbiAgICBwcm9wZXJ0eTogJ2JvcmRlckJvdHRvbUxlZnRSYWRpdXMnLFxuICAgIHNjYWxlOiAncmFkaWknXG4gIH0sXG4gIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiB7XG4gICAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsXG4gICAgc2NhbGU6ICdyYWRpaSdcbiAgfSxcbiAgYm9yZGVyTGVmdDoge1xuICAgIHByb3BlcnR5OiAnYm9yZGVyTGVmdCcsXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJYOiB7XG4gICAgcHJvcGVydGllczogWydib3JkZXJMZWZ0JywgJ2JvcmRlclJpZ2h0J10sXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9LFxuICBib3JkZXJZOiB7XG4gICAgcHJvcGVydGllczogWydib3JkZXJUb3AnLCAnYm9yZGVyQm90dG9tJ10sXG4gICAgc2NhbGU6ICdib3JkZXJzJ1xuICB9XG59O1xuY29uZmlnLmJvcmRlclRvcFdpZHRoID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcFdpZHRoJyxcbiAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG59O1xuY29uZmlnLmJvcmRlclRvcENvbG9yID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcENvbG9yJyxcbiAgc2NhbGU6ICdjb2xvcnMnXG59O1xuY29uZmlnLmJvcmRlclRvcFN0eWxlID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcFN0eWxlJyxcbiAgc2NhbGU6ICdib3JkZXJTdHlsZXMnXG59O1xuY29uZmlnLmJvcmRlclRvcExlZnRSYWRpdXMgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyVG9wTGVmdFJhZGl1cycsXG4gIHNjYWxlOiAncmFkaWknXG59O1xuY29uZmlnLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJyxcbiAgc2NhbGU6ICdyYWRpaSdcbn07XG5jb25maWcuYm9yZGVyQm90dG9tV2lkdGggPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tV2lkdGgnLFxuICBzY2FsZTogJ2JvcmRlcldpZHRocydcbn07XG5jb25maWcuYm9yZGVyQm90dG9tQ29sb3IgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tQ29sb3InLFxuICBzY2FsZTogJ2NvbG9ycydcbn07XG5jb25maWcuYm9yZGVyQm90dG9tU3R5bGUgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tU3R5bGUnLFxuICBzY2FsZTogJ2JvcmRlclN0eWxlcydcbn07XG5jb25maWcuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJCb3R0b21MZWZ0UmFkaXVzJyxcbiAgc2NhbGU6ICdyYWRpaSdcbn07XG5jb25maWcuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMnLFxuICBzY2FsZTogJ3JhZGlpJ1xufTtcbmNvbmZpZy5ib3JkZXJMZWZ0V2lkdGggPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgc2NhbGU6ICdib3JkZXJXaWR0aHMnXG59O1xuY29uZmlnLmJvcmRlckxlZnRDb2xvciA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJMZWZ0Q29sb3InLFxuICBzY2FsZTogJ2NvbG9ycydcbn07XG5jb25maWcuYm9yZGVyTGVmdFN0eWxlID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlckxlZnRTdHlsZScsXG4gIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xufTtcbmNvbmZpZy5ib3JkZXJSaWdodFdpZHRoID0ge1xuICBwcm9wZXJ0eTogJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICBzY2FsZTogJ2JvcmRlcldpZHRocydcbn07XG5jb25maWcuYm9yZGVyUmlnaHRDb2xvciA9IHtcbiAgcHJvcGVydHk6ICdib3JkZXJSaWdodENvbG9yJyxcbiAgc2NhbGU6ICdjb2xvcnMnXG59O1xuY29uZmlnLmJvcmRlclJpZ2h0U3R5bGUgPSB7XG4gIHByb3BlcnR5OiAnYm9yZGVyUmlnaHRTdHlsZScsXG4gIHNjYWxlOiAnYm9yZGVyU3R5bGVzJ1xufTtcbmV4cG9ydCB2YXIgYm9yZGVyID0gc3lzdGVtKGNvbmZpZyk7XG5leHBvcnQgZGVmYXVsdCBib3JkZXI7XG4iLCJpbXBvcnQgeyBzeXN0ZW0gfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9jb3JlJztcbnZhciBjb25maWcgPSB7XG4gIGJhY2tncm91bmQ6IHRydWUsXG4gIGJhY2tncm91bmRJbWFnZTogdHJ1ZSxcbiAgYmFja2dyb3VuZFNpemU6IHRydWUsXG4gIGJhY2tncm91bmRQb3NpdGlvbjogdHJ1ZSxcbiAgYmFja2dyb3VuZFJlcGVhdDogdHJ1ZVxufTtcbmNvbmZpZy5iZ0ltYWdlID0gY29uZmlnLmJhY2tncm91bmRJbWFnZTtcbmNvbmZpZy5iZ1NpemUgPSBjb25maWcuYmFja2dyb3VuZFNpemU7XG5jb25maWcuYmdQb3NpdGlvbiA9IGNvbmZpZy5iYWNrZ3JvdW5kUG9zaXRpb247XG5jb25maWcuYmdSZXBlYXQgPSBjb25maWcuYmFja2dyb3VuZFJlcGVhdDtcbmV4cG9ydCB2YXIgYmFja2dyb3VuZCA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgYmFja2dyb3VuZDtcbiIsImltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xudmFyIGNvbmZpZyA9IHtcbiAgcG9zaXRpb246IHRydWUsXG4gIHpJbmRleDoge1xuICAgIHByb3BlcnR5OiAnekluZGV4JyxcbiAgICBzY2FsZTogJ3pJbmRpY2VzJ1xuICB9LFxuICB0b3A6IHtcbiAgICBwcm9wZXJ0eTogJ3RvcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICByaWdodDoge1xuICAgIHByb3BlcnR5OiAncmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdib3R0b20nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbGVmdDoge1xuICAgIHByb3BlcnR5OiAnbGVmdCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9XG59O1xuZXhwb3J0IHZhciBwb3NpdGlvbiA9IHN5c3RlbShjb25maWcpO1xuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJpbXBvcnQgeyBnZXQsIHN5c3RlbSwgY29tcG9zZSB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjQsIDEyOCwgMjU2LCA1MTJdXG59O1xuXG52YXIgaXNOdW1iZXIgPSBmdW5jdGlvbiBpc051bWJlcihuKSB7XG4gIHJldHVybiB0eXBlb2YgbiA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG4pO1xufTtcblxudmFyIGdldE1hcmdpbiA9IGZ1bmN0aW9uIGdldE1hcmdpbihuLCBzY2FsZSkge1xuICBpZiAoIWlzTnVtYmVyKG4pKSB7XG4gICAgcmV0dXJuIGdldChzY2FsZSwgbiwgbik7XG4gIH1cblxuICB2YXIgaXNOZWdhdGl2ZSA9IG4gPCAwO1xuICB2YXIgYWJzb2x1dGUgPSBNYXRoLmFicyhuKTtcbiAgdmFyIHZhbHVlID0gZ2V0KHNjYWxlLCBhYnNvbHV0ZSwgYWJzb2x1dGUpO1xuXG4gIGlmICghaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgcmV0dXJuIGlzTmVnYXRpdmUgPyAnLScgKyB2YWx1ZSA6IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlICogKGlzTmVnYXRpdmUgPyAtMSA6IDEpO1xufTtcblxudmFyIGNvbmZpZ3MgPSB7fTtcbmNvbmZpZ3MubWFyZ2luID0ge1xuICBtYXJnaW46IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpbicsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5Ub3A6IHtcbiAgICBwcm9wZXJ0eTogJ21hcmdpblRvcCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5SaWdodDoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luUmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luQm90dG9tOiB7XG4gICAgcHJvcGVydHk6ICdtYXJnaW5Cb3R0b20nLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIHRyYW5zZm9ybTogZ2V0TWFyZ2luLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgbWFyZ2luTGVmdDoge1xuICAgIHByb3BlcnR5OiAnbWFyZ2luTGVmdCcsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5YOiB7XG4gICAgcHJvcGVydGllczogWydtYXJnaW5MZWZ0JywgJ21hcmdpblJpZ2h0J10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBtYXJnaW5ZOiB7XG4gICAgcHJvcGVydGllczogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgdHJhbnNmb3JtOiBnZXRNYXJnaW4sXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9XG59O1xuY29uZmlncy5tYXJnaW4ubSA9IGNvbmZpZ3MubWFyZ2luLm1hcmdpbjtcbmNvbmZpZ3MubWFyZ2luLm10ID0gY29uZmlncy5tYXJnaW4ubWFyZ2luVG9wO1xuY29uZmlncy5tYXJnaW4ubXIgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5SaWdodDtcbmNvbmZpZ3MubWFyZ2luLm1iID0gY29uZmlncy5tYXJnaW4ubWFyZ2luQm90dG9tO1xuY29uZmlncy5tYXJnaW4ubWwgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5MZWZ0O1xuY29uZmlncy5tYXJnaW4ubXggPSBjb25maWdzLm1hcmdpbi5tYXJnaW5YO1xuY29uZmlncy5tYXJnaW4ubXkgPSBjb25maWdzLm1hcmdpbi5tYXJnaW5ZO1xuY29uZmlncy5wYWRkaW5nID0ge1xuICBwYWRkaW5nOiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nJyxcbiAgICBzY2FsZTogJ3NwYWNlJyxcbiAgICBkZWZhdWx0U2NhbGU6IGRlZmF1bHRzLnNwYWNlXG4gIH0sXG4gIHBhZGRpbmdUb3A6IHtcbiAgICBwcm9wZXJ0eTogJ3BhZGRpbmdUb3AnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1JpZ2h0OiB7XG4gICAgcHJvcGVydHk6ICdwYWRkaW5nUmlnaHQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ0JvdHRvbToge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ0JvdHRvbScsXG4gICAgc2NhbGU6ICdzcGFjZScsXG4gICAgZGVmYXVsdFNjYWxlOiBkZWZhdWx0cy5zcGFjZVxuICB9LFxuICBwYWRkaW5nTGVmdDoge1xuICAgIHByb3BlcnR5OiAncGFkZGluZ0xlZnQnLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1g6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfSxcbiAgcGFkZGluZ1k6IHtcbiAgICBwcm9wZXJ0aWVzOiBbJ3BhZGRpbmdUb3AnLCAncGFkZGluZ0JvdHRvbSddLFxuICAgIHNjYWxlOiAnc3BhY2UnLFxuICAgIGRlZmF1bHRTY2FsZTogZGVmYXVsdHMuc3BhY2VcbiAgfVxufTtcbmNvbmZpZ3MucGFkZGluZy5wID0gY29uZmlncy5wYWRkaW5nLnBhZGRpbmc7XG5jb25maWdzLnBhZGRpbmcucHQgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ1RvcDtcbmNvbmZpZ3MucGFkZGluZy5wciA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nUmlnaHQ7XG5jb25maWdzLnBhZGRpbmcucGIgPSBjb25maWdzLnBhZGRpbmcucGFkZGluZ0JvdHRvbTtcbmNvbmZpZ3MucGFkZGluZy5wbCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nTGVmdDtcbmNvbmZpZ3MucGFkZGluZy5weCA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nWDtcbmNvbmZpZ3MucGFkZGluZy5weSA9IGNvbmZpZ3MucGFkZGluZy5wYWRkaW5nWTtcbmV4cG9ydCB2YXIgbWFyZ2luID0gc3lzdGVtKGNvbmZpZ3MubWFyZ2luKTtcbmV4cG9ydCB2YXIgcGFkZGluZyA9IHN5c3RlbShjb25maWdzLnBhZGRpbmcpO1xuZXhwb3J0IHZhciBzcGFjZSA9IGNvbXBvc2UobWFyZ2luLCBwYWRkaW5nKTtcbmV4cG9ydCBkZWZhdWx0IHNwYWNlO1xuIiwiaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29yZSc7XG5leHBvcnQgdmFyIHNoYWRvdyA9IHN5c3RlbSh7XG4gIGJveFNoYWRvdzoge1xuICAgIHByb3BlcnR5OiAnYm94U2hhZG93JyxcbiAgICBzY2FsZTogJ3NoYWRvd3MnXG4gIH0sXG4gIHRleHRTaGFkb3c6IHtcbiAgICBwcm9wZXJ0eTogJ3RleHRTaGFkb3cnLFxuICAgIHNjYWxlOiAnc2hhZG93cydcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBzaGFkb3c7XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L2RsdlxuZXhwb3J0IHZhciBnZXQgPSBmdW5jdGlvbiBnZXQob2JqLCBrZXksIGRlZiwgcCwgdW5kZWYpIHtcbiAga2V5ID0ga2V5ICYmIGtleS5zcGxpdCA/IGtleS5zcGxpdCgnLicpIDogW2tleV07XG5cbiAgZm9yIChwID0gMDsgcCA8IGtleS5sZW5ndGg7IHArKykge1xuICAgIG9iaiA9IG9iaiA/IG9ialtrZXlbcF1dIDogdW5kZWY7XG4gIH1cblxuICByZXR1cm4gb2JqID09PSB1bmRlZiA/IGRlZiA6IG9iajtcbn07XG52YXIgZGVmYXVsdEJyZWFrcG9pbnRzID0gWzQwLCA1MiwgNjRdLm1hcChmdW5jdGlvbiAobikge1xuICByZXR1cm4gbiArICdlbSc7XG59KTtcbnZhciBkZWZhdWx0VGhlbWUgPSB7XG4gIHNwYWNlOiBbMCwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMl0sXG4gIGZvbnRTaXplczogWzEyLCAxNCwgMTYsIDIwLCAyNCwgMzIsIDQ4LCA2NCwgNzJdXG59O1xudmFyIGFsaWFzZXMgPSB7XG4gIGJnOiAnYmFja2dyb3VuZENvbG9yJyxcbiAgbTogJ21hcmdpbicsXG4gIG10OiAnbWFyZ2luVG9wJyxcbiAgbXI6ICdtYXJnaW5SaWdodCcsXG4gIG1iOiAnbWFyZ2luQm90dG9tJyxcbiAgbWw6ICdtYXJnaW5MZWZ0JyxcbiAgbXg6ICdtYXJnaW5YJyxcbiAgbXk6ICdtYXJnaW5ZJyxcbiAgcDogJ3BhZGRpbmcnLFxuICBwdDogJ3BhZGRpbmdUb3AnLFxuICBwcjogJ3BhZGRpbmdSaWdodCcsXG4gIHBiOiAncGFkZGluZ0JvdHRvbScsXG4gIHBsOiAncGFkZGluZ0xlZnQnLFxuICBweDogJ3BhZGRpbmdYJyxcbiAgcHk6ICdwYWRkaW5nWSdcbn07XG52YXIgbXVsdGlwbGVzID0ge1xuICBtYXJnaW5YOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXSxcbiAgbWFyZ2luWTogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIHBhZGRpbmdYOiBbJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCddLFxuICBwYWRkaW5nWTogWydwYWRkaW5nVG9wJywgJ3BhZGRpbmdCb3R0b20nXSxcbiAgc2l6ZTogWyd3aWR0aCcsICdoZWlnaHQnXVxufTtcbnZhciBzY2FsZXMgPSB7XG4gIGNvbG9yOiAnY29sb3JzJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyQ29sb3I6ICdjb2xvcnMnLFxuICBtYXJnaW46ICdzcGFjZScsXG4gIG1hcmdpblRvcDogJ3NwYWNlJyxcbiAgbWFyZ2luUmlnaHQ6ICdzcGFjZScsXG4gIG1hcmdpbkJvdHRvbTogJ3NwYWNlJyxcbiAgbWFyZ2luTGVmdDogJ3NwYWNlJyxcbiAgbWFyZ2luWDogJ3NwYWNlJyxcbiAgbWFyZ2luWTogJ3NwYWNlJyxcbiAgcGFkZGluZzogJ3NwYWNlJyxcbiAgcGFkZGluZ1RvcDogJ3NwYWNlJyxcbiAgcGFkZGluZ1JpZ2h0OiAnc3BhY2UnLFxuICBwYWRkaW5nQm90dG9tOiAnc3BhY2UnLFxuICBwYWRkaW5nTGVmdDogJ3NwYWNlJyxcbiAgcGFkZGluZ1g6ICdzcGFjZScsXG4gIHBhZGRpbmdZOiAnc3BhY2UnLFxuICB0b3A6ICdzcGFjZScsXG4gIHJpZ2h0OiAnc3BhY2UnLFxuICBib3R0b206ICdzcGFjZScsXG4gIGxlZnQ6ICdzcGFjZScsXG4gIGdyaWRHYXA6ICdzcGFjZScsXG4gIGdyaWRDb2x1bW5HYXA6ICdzcGFjZScsXG4gIGdyaWRSb3dHYXA6ICdzcGFjZScsXG4gIGdhcDogJ3NwYWNlJyxcbiAgY29sdW1uR2FwOiAnc3BhY2UnLFxuICByb3dHYXA6ICdzcGFjZScsXG4gIGZvbnRGYW1pbHk6ICdmb250cycsXG4gIGZvbnRTaXplOiAnZm9udFNpemVzJyxcbiAgZm9udFdlaWdodDogJ2ZvbnRXZWlnaHRzJyxcbiAgbGluZUhlaWdodDogJ2xpbmVIZWlnaHRzJyxcbiAgbGV0dGVyU3BhY2luZzogJ2xldHRlclNwYWNpbmdzJyxcbiAgYm9yZGVyOiAnYm9yZGVycycsXG4gIGJvcmRlclRvcDogJ2JvcmRlcnMnLFxuICBib3JkZXJSaWdodDogJ2JvcmRlcnMnLFxuICBib3JkZXJCb3R0b206ICdib3JkZXJzJyxcbiAgYm9yZGVyTGVmdDogJ2JvcmRlcnMnLFxuICBib3JkZXJXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlclN0eWxlOiAnYm9yZGVyU3R5bGVzJyxcbiAgYm9yZGVyUmFkaXVzOiAncmFkaWknLFxuICBib3JkZXJUb3BSaWdodFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyVG9wTGVmdFJhZGl1czogJ3JhZGlpJyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICdyYWRpaScsXG4gIGJvcmRlclRvcFdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyVG9wQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJUb3BTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckJvdHRvbVdpZHRoOiAnYm9yZGVyV2lkdGhzJyxcbiAgYm9yZGVyQm90dG9tQ29sb3I6ICdjb2xvcnMnLFxuICBib3JkZXJCb3R0b21TdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlckxlZnRXaWR0aDogJ2JvcmRlcldpZHRocycsXG4gIGJvcmRlckxlZnRDb2xvcjogJ2NvbG9ycycsXG4gIGJvcmRlckxlZnRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIGJvcmRlclJpZ2h0V2lkdGg6ICdib3JkZXJXaWR0aHMnLFxuICBib3JkZXJSaWdodENvbG9yOiAnY29sb3JzJyxcbiAgYm9yZGVyUmlnaHRTdHlsZTogJ2JvcmRlclN0eWxlcycsXG4gIG91dGxpbmVDb2xvcjogJ2NvbG9ycycsXG4gIGJveFNoYWRvdzogJ3NoYWRvd3MnLFxuICB0ZXh0U2hhZG93OiAnc2hhZG93cycsXG4gIHpJbmRleDogJ3pJbmRpY2VzJyxcbiAgd2lkdGg6ICdzaXplcycsXG4gIG1pbldpZHRoOiAnc2l6ZXMnLFxuICBtYXhXaWR0aDogJ3NpemVzJyxcbiAgaGVpZ2h0OiAnc2l6ZXMnLFxuICBtaW5IZWlnaHQ6ICdzaXplcycsXG4gIG1heEhlaWdodDogJ3NpemVzJyxcbiAgZmxleEJhc2lzOiAnc2l6ZXMnLFxuICBzaXplOiAnc2l6ZXMnLFxuICAvLyBzdmdcbiAgZmlsbDogJ2NvbG9ycycsXG4gIHN0cm9rZTogJ2NvbG9ycydcbn07XG5cbnZhciBwb3NpdGl2ZU9yTmVnYXRpdmUgPSBmdW5jdGlvbiBwb3NpdGl2ZU9yTmVnYXRpdmUoc2NhbGUsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInIHx8IHZhbHVlID49IDApIHtcbiAgICByZXR1cm4gZ2V0KHNjYWxlLCB2YWx1ZSwgdmFsdWUpO1xuICB9XG5cbiAgdmFyIGFic29sdXRlID0gTWF0aC5hYnModmFsdWUpO1xuICB2YXIgbiA9IGdldChzY2FsZSwgYWJzb2x1dGUsIGFic29sdXRlKTtcbiAgaWYgKHR5cGVvZiBuID09PSAnc3RyaW5nJykgcmV0dXJuICctJyArIG47XG4gIHJldHVybiBuICogLTE7XG59O1xuXG52YXIgdHJhbnNmb3JtcyA9IFsnbWFyZ2luJywgJ21hcmdpblRvcCcsICdtYXJnaW5SaWdodCcsICdtYXJnaW5Cb3R0b20nLCAnbWFyZ2luTGVmdCcsICdtYXJnaW5YJywgJ21hcmdpblknLCAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0J10ucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIpIHtcbiAgdmFyIF9leHRlbmRzMjtcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbY3Vycl0gPSBwb3NpdGl2ZU9yTmVnYXRpdmUsIF9leHRlbmRzMikpO1xufSwge30pO1xuZXhwb3J0IHZhciByZXNwb25zaXZlID0gZnVuY3Rpb24gcmVzcG9uc2l2ZShzdHlsZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIHZhciBuZXh0ID0ge307XG4gICAgdmFyIGJyZWFrcG9pbnRzID0gZ2V0KHRoZW1lLCAnYnJlYWtwb2ludHMnLCBkZWZhdWx0QnJlYWtwb2ludHMpO1xuICAgIHZhciBtZWRpYVF1ZXJpZXMgPSBbbnVsbF0uY29uY2F0KGJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogXCIgKyBuICsgXCIpXCI7XG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgICAgdmFyIHZhbHVlID0gdHlwZW9mIHN0eWxlc1trZXldID09PSAnZnVuY3Rpb24nID8gc3R5bGVzW2tleV0odGhlbWUpIDogc3R5bGVzW2tleV07XG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbmV4dFtrZXldID0gdmFsdWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLnNsaWNlKDAsIG1lZGlhUXVlcmllcy5sZW5ndGgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBtZWRpYSA9IG1lZGlhUXVlcmllc1tpXTtcblxuICAgICAgICBpZiAoIW1lZGlhKSB7XG4gICAgICAgICAgbmV4dFtrZXldID0gdmFsdWVbaV07XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0W21lZGlhXSA9IG5leHRbbWVkaWFdIHx8IHt9O1xuICAgICAgICBpZiAodmFsdWVbaV0gPT0gbnVsbCkgY29udGludWU7XG4gICAgICAgIG5leHRbbWVkaWFdW2tleV0gPSB2YWx1ZVtpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dDtcbiAgfTtcbn07XG5leHBvcnQgdmFyIGNzcyA9IGZ1bmN0aW9uIGNzcyhhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBpZiAocHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgcHJvcHMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgdGhlbWUgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFRoZW1lLCB7fSwgcHJvcHMudGhlbWUgfHwgcHJvcHMpO1xuXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBvYmogPSB0eXBlb2YgYXJncyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZ3ModGhlbWUpIDogYXJncztcbiAgICB2YXIgc3R5bGVzID0gcmVzcG9uc2l2ZShvYmopKHRoZW1lKTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdHlsZXMpIHtcbiAgICAgIHZhciB4ID0gc3R5bGVzW2tleV07XG4gICAgICB2YXIgdmFsID0gdHlwZW9mIHggPT09ICdmdW5jdGlvbicgPyB4KHRoZW1lKSA6IHg7XG5cbiAgICAgIGlmIChrZXkgPT09ICd2YXJpYW50Jykge1xuICAgICAgICB2YXIgdmFyaWFudCA9IGNzcyhnZXQodGhlbWUsIHZhbCkpKHRoZW1lKTtcbiAgICAgICAgcmVzdWx0ID0gX2V4dGVuZHMoe30sIHJlc3VsdCwge30sIHZhcmlhbnQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXN1bHRba2V5XSA9IGNzcyh2YWwpKHRoZW1lKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wID0gZ2V0KGFsaWFzZXMsIGtleSwga2V5KTtcbiAgICAgIHZhciBzY2FsZU5hbWUgPSBnZXQoc2NhbGVzLCBwcm9wKTtcbiAgICAgIHZhciBzY2FsZSA9IGdldCh0aGVtZSwgc2NhbGVOYW1lLCBnZXQodGhlbWUsIHByb3AsIHt9KSk7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gZ2V0KHRyYW5zZm9ybXMsIHByb3AsIGdldCk7XG4gICAgICB2YXIgdmFsdWUgPSB0cmFuc2Zvcm0oc2NhbGUsIHZhbCwgdmFsKTtcblxuICAgICAgaWYgKG11bHRpcGxlc1twcm9wXSkge1xuICAgICAgICB2YXIgZGlycyA9IG11bHRpcGxlc1twcm9wXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHRbZGlyc1tpXV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W3Byb3BdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJpbXBvcnQgeyBnZXQsIGNyZWF0ZVBhcnNlciB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL2NvcmUnO1xuaW1wb3J0IGNzcyBmcm9tICdAc3R5bGVkLXN5c3RlbS9jc3MnO1xuZXhwb3J0IHZhciB2YXJpYW50ID0gZnVuY3Rpb24gdmFyaWFudChfcmVmKSB7XG4gIHZhciBfY29uZmlnO1xuXG4gIHZhciBzY2FsZSA9IF9yZWYuc2NhbGUsXG4gICAgICBfcmVmJHByb3AgPSBfcmVmLnByb3AsXG4gICAgICBwcm9wID0gX3JlZiRwcm9wID09PSB2b2lkIDAgPyAndmFyaWFudCcgOiBfcmVmJHByb3AsXG4gICAgICBfcmVmJHZhcmlhbnRzID0gX3JlZi52YXJpYW50cyxcbiAgICAgIHZhcmlhbnRzID0gX3JlZiR2YXJpYW50cyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJHZhcmlhbnRzLFxuICAgICAga2V5ID0gX3JlZi5rZXk7XG4gIHZhciBzeDtcblxuICBpZiAoT2JqZWN0LmtleXModmFyaWFudHMpLmxlbmd0aCkge1xuICAgIHN4ID0gZnVuY3Rpb24gc3godmFsdWUsIHNjYWxlLCBwcm9wcykge1xuICAgICAgcmV0dXJuIGNzcyhnZXQoc2NhbGUsIHZhbHVlLCBudWxsKSkocHJvcHMudGhlbWUpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgc3ggPSBmdW5jdGlvbiBzeCh2YWx1ZSwgc2NhbGUpIHtcbiAgICAgIHJldHVybiBnZXQoc2NhbGUsIHZhbHVlLCBudWxsKTtcbiAgICB9O1xuICB9XG5cbiAgc3guc2NhbGUgPSBzY2FsZSB8fCBrZXk7XG4gIHN4LmRlZmF1bHRzID0gdmFyaWFudHM7XG4gIHZhciBjb25maWcgPSAoX2NvbmZpZyA9IHt9LCBfY29uZmlnW3Byb3BdID0gc3gsIF9jb25maWcpO1xuICB2YXIgcGFyc2VyID0gY3JlYXRlUGFyc2VyKGNvbmZpZyk7XG4gIHJldHVybiBwYXJzZXI7XG59O1xuZXhwb3J0IGRlZmF1bHQgdmFyaWFudDtcbmV4cG9ydCB2YXIgYnV0dG9uU3R5bGUgPSB2YXJpYW50KHtcbiAga2V5OiAnYnV0dG9ucydcbn0pO1xuZXhwb3J0IHZhciB0ZXh0U3R5bGUgPSB2YXJpYW50KHtcbiAga2V5OiAndGV4dFN0eWxlcycsXG4gIHByb3A6ICd0ZXh0U3R5bGUnXG59KTtcbmV4cG9ydCB2YXIgY29sb3JTdHlsZSA9IHZhcmlhbnQoe1xuICBrZXk6ICdjb2xvclN0eWxlcycsXG4gIHByb3A6ICdjb2xvcnMnXG59KTtcbiIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuaW1wb3J0IGlzUHJvcFZhbGlkIGZyb20gJ0BlbW90aW9uL2lzLXByb3AtdmFsaWQnO1xuaW1wb3J0IHsgY29tcG9zZSwgc3BhY2UsIHR5cG9ncmFwaHksIGNvbG9yLCBsYXlvdXQsIGZsZXhib3gsIGJvcmRlciwgYmFja2dyb3VuZCwgcG9zaXRpb24sIGdyaWQsIHNoYWRvdywgYnV0dG9uU3R5bGUsIHRleHRTdHlsZSwgY29sb3JTdHlsZSB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xudmFyIGFsbCA9IGNvbXBvc2Uoc3BhY2UsIHR5cG9ncmFwaHksIGNvbG9yLCBsYXlvdXQsIGZsZXhib3gsIGJvcmRlciwgYmFja2dyb3VuZCwgcG9zaXRpb24sIGdyaWQsIHNoYWRvdywgYnV0dG9uU3R5bGUsIHRleHRTdHlsZSwgY29sb3JTdHlsZSk7XG5leHBvcnQgdmFyIHByb3BzID0gYWxsLnByb3BOYW1lcztcbmV4cG9ydCB2YXIgY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AgPSBmdW5jdGlvbiBjcmVhdGVTaG91bGRGb3J3YXJkUHJvcChwcm9wcykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKFwiXihcIiArIHByb3BzLmpvaW4oJ3wnKSArIFwiKSRcIik7XG4gIHJldHVybiBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuIGlzUHJvcFZhbGlkKHByb3ApICYmICFyZWdleC50ZXN0KHByb3ApO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaG91bGRGb3J3YXJkUHJvcChwcm9wcyk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MsIGdldCB9IGZyb20gJ0B0aGVtZS11aS9jc3MnO1xuaW1wb3J0IHsgY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zaG91bGQtZm9yd2FyZC1wcm9wJztcbmltcG9ydCBzcGFjZSBmcm9tICdAc3R5bGVkLXN5c3RlbS9zcGFjZSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnQHN0eWxlZC1zeXN0ZW0vY29sb3InO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgYm94U3lzdGVtUHJvcHMgPSBbLi4uc3BhY2UucHJvcE5hbWVzLCAuLi5jb2xvci5wcm9wTmFtZXNdO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqIEB0eXBlIHsocHJvcDogc3RyaW5nKSA9PiBib29sZWFufVxuICovXG5cbmNvbnN0IF9faXNCb3hTdHlsZWRTeXN0ZW1Qcm9wID0gcHJvcCA9PiBib3hTeXN0ZW1Qcm9wcy5pbmNsdWRlcyhwcm9wKTtcbmNvbnN0IHNob3VsZEZvcndhcmRQcm9wID0gY3JlYXRlU2hvdWxkRm9yd2FyZFByb3AoYm94U3lzdGVtUHJvcHMpO1xuXG5jb25zdCBzeCA9IHByb3BzID0+IGNzcyhwcm9wcy5zeCkocHJvcHMudGhlbWUpO1xuXG5jb25zdCBiYXNlID0gcHJvcHMgPT4gY3NzKHByb3BzLl9fY3NzKShwcm9wcy50aGVtZSk7XG5cbmNvbnN0IHZhcmlhbnQgPSAoe1xuICB0aGVtZSxcbiAgdmFyaWFudCxcbiAgX190aGVtZUtleSA9ICd2YXJpYW50cydcbn0pID0+IGNzcyhnZXQodGhlbWUsIF9fdGhlbWVLZXkgKyAnLicgKyB2YXJpYW50LCBnZXQodGhlbWUsIHZhcmlhbnQpKSk7XG5cbmNvbnN0IEJveCA9IHN0eWxlZCgnZGl2Jywge1xuICBzaG91bGRGb3J3YXJkUHJvcFxufSkoe1xuICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgbWFyZ2luOiAwLFxuICBtaW5XaWR0aDogMFxufSwgYmFzZSwgdmFyaWFudCwgc3BhY2UsIGNvbG9yLCBzeCwgcHJvcHMgPT4gcHJvcHMuY3NzKTtcbkJveC5kaXNwbGF5TmFtZSA9ICdCb3gnO1xuXG5jb25zdCBGbGV4ID0gc3R5bGVkKEJveCkoe1xuICBkaXNwbGF5OiAnZmxleCdcbn0pO1xuRmxleC5kaXNwbGF5TmFtZSA9ICdGbGV4JztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuY29uc3QgcHggPSBuID0+IHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IG4gKyAncHgnIDogbjtcblxuY29uc3Qgd2lkdGhUb0NvbHVtbnMgPSAod2lkdGgsIHJlcGVhdCkgPT4gQXJyYXkuaXNBcnJheSh3aWR0aCkgPyB3aWR0aC5tYXAodyA9PiB3aWR0aFRvQ29sdW1ucyh3LCByZXBlYXQpKSA6ICEhd2lkdGggJiYgYHJlcGVhdChhdXRvLSR7cmVwZWF0fSwgbWlubWF4KCR7cHgod2lkdGgpfSwgMWZyKSlgO1xuXG5jb25zdCBjb3VudFRvQ29sdW1ucyA9IG4gPT4gQXJyYXkuaXNBcnJheShuKSA/IG4ubWFwKGNvdW50VG9Db2x1bW5zKSA6ICEhbiAmJiAodHlwZW9mIG4gPT09ICdudW1iZXInID8gYHJlcGVhdCgke259LCAxZnIpYCA6IG4pO1xuXG5jb25zdCBHcmlkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gR3JpZCh7XG4gIHdpZHRoLFxuICBjb2x1bW5zLFxuICBnYXAgPSAzLFxuICByZXBlYXQgPSAnZml0JyxcbiAgLi4ucHJvcHNcbn0sIHJlZikge1xuICBjb25zdCBncmlkVGVtcGxhdGVDb2x1bW5zID0gISF3aWR0aCA/IHdpZHRoVG9Db2x1bW5zKHdpZHRoLCByZXBlYXQpIDogY291bnRUb0NvbHVtbnMoY29sdW1ucyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIF9fdGhlbWVLZXk6IFwiZ3JpZHNcIixcbiAgICBfX2Nzczoge1xuICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgZ3JpZEdhcDogZ2FwLFxuICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uc1xuICAgIH1cbiAgfSkpO1xufSk7XG5cbmNvbnN0IEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEJ1dHRvbihwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBhczogXCJidXR0b25cIixcbiAgICB2YXJpYW50OiBcInByaW1hcnlcIlxuICB9LCBwcm9wcywge1xuICAgIF9fdGhlbWVLZXk6IFwiYnV0dG9uc1wiLFxuICAgIF9fY3NzOiB7XG4gICAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiBwcm9wcy5oaWRkZW4gPyB1bmRlZmluZWQgOiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgIHB4OiAzLFxuICAgICAgcHk6IDIsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGJnOiAncHJpbWFyeScsXG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6IDRcbiAgICB9XG4gIH0pKTtcbn0pO1xuXG5jb25zdCBMaW5rID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGluayhwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBhczogXCJhXCIsXG4gICAgdmFyaWFudDogXCJzdHlsZXMuYVwiXG4gIH0sIHByb3BzLCB7XG4gICAgX190aGVtZUtleTogXCJsaW5rc1wiXG4gIH0pKTtcbn0pO1xuXG5jb25zdCBQYXJhZ3JhcGggPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQYXJhZ3JhcGgocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgYXM6IFwicFwiLFxuICAgIHZhcmlhbnQ6IFwicGFyYWdyYXBoXCIsXG4gICAgX190aGVtZUtleTogXCJ0ZXh0XCIsXG4gICAgX19jc3M6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5J1xuICAgIH1cbiAgfSwgcHJvcHMpKTtcbn0pO1xuXG5jb25zdCBUZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGV4dChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICBhczogXCJzcGFuXCIsXG4gICAgcmVmOiByZWYsXG4gICAgdmFyaWFudDogXCJkZWZhdWx0XCJcbiAgfSwgcHJvcHMsIHtcbiAgICBfX3RoZW1lS2V5OiBcInRleHRcIlxuICB9KSk7XG59KTtcblxuY29uc3QgSGVhZGluZyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEhlYWRpbmcocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgYXM6IFwiaDJcIixcbiAgICB2YXJpYW50OiBcImhlYWRpbmdcIlxuICB9LCBwcm9wcywge1xuICAgIF9fdGhlbWVLZXk6IFwidGV4dFwiLFxuICAgIF9fY3NzOiB7XG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZydcbiAgICB9XG4gIH0pKTtcbn0pO1xuXG5jb25zdCBJbWFnZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEltYWdlKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGFzOiBcImltZ1wiXG4gIH0sIHByb3BzLCB7XG4gICAgX190aGVtZUtleTogXCJpbWFnZXNcIixcbiAgICBfX2Nzczoge1xuICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgLi4ucHJvcHMuX19jc3NcbiAgICB9XG4gIH0pKTtcbn0pO1xuXG5jb25zdCBDYXJkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQ2FyZChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICB2YXJpYW50OiBcInByaW1hcnlcIlxuICB9LCBwcm9wcywge1xuICAgIF9fdGhlbWVLZXk6IFwiY2FyZHNcIlxuICB9KSk7XG59KTtcblxuY29uc3QgTGFiZWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBMYWJlbChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBhczogXCJsYWJlbFwiLFxuICAgIHZhcmlhbnQ6IFwibGFiZWxcIlxuICB9LCBwcm9wcywge1xuICAgIF9fdGhlbWVLZXk6IFwiZm9ybXNcIixcbiAgICBfX2Nzczoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH1cbiAgfSkpO1xufSk7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCd0aGVtZS11aScpLlRoZW1lVUlTdHlsZU9iamVjdH0gKi9cblxuY29uc3QgYXV0b2ZpbGxTdHlsZXMgPSB7XG4gIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDEwMDBweCB2YXIoLS10aGVtZS11aS1pbnB1dC1hdXRvZmlsbC1iZyknLFxuICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAnOmZpcnN0LWxpbmUnOiB7XG4gICAgZm9udFNpemU6ICcxcmVtJ1xuICB9XG59O1xuLyoqIEB0eXBlIHtpbXBvcnQoJ3RoZW1lLXVpJykuVGhlbWVVSVN0eWxlT2JqZWN0fSAqL1xuXG5jb25zdCBkZWZhdWx0SW5wdXRTdHlsZXMgPSB7XG4gIGRpc3BsYXk6ICdibG9jaycsXG4gIHdpZHRoOiAnMTAwJScsXG4gIHA6IDIsXG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgbGluZUhlaWdodDogJ2luaGVyaXQnLFxuICBib3JkZXI6ICcxcHggc29saWQnLFxuICBib3JkZXJSYWRpdXM6IDQsXG4gIGNvbG9yOiAnaW5oZXJpdCcsXG4gIGJnOiAndHJhbnNwYXJlbnQnLFxuICAnOmF1dG9maWxsLCA6YXV0b2ZpbGw6aG92ZXIsIDphdXRvZmlsbDpmb2N1cyc6IGF1dG9maWxsU3R5bGVzLFxuICAnOi13ZWJraXQtYXV0b2ZpbGwsIDotd2Via2l0LWF1dG9maWxsOmhvdmVyLCA6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyc6IGF1dG9maWxsU3R5bGVzXG59O1xuY29uc3QgSW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBJbnB1dCh7XG4gIHN4LFxuICBhdXRvZmlsbEJhY2tncm91bmRDb2xvciA9ICdiYWNrZ3JvdW5kJyxcbiAgLi4ucmVzdFxufSwgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBhczogXCJpbnB1dFwiLFxuICAgIHZhcmlhbnQ6IFwiaW5wdXRcIixcbiAgICBzeDoge1xuICAgICAgJy0tdGhlbWUtdWktaW5wdXQtYXV0b2ZpbGwtYmcnOiB0aGVtZSA9PiBnZXQodGhlbWUuY29sb3JzLCBhdXRvZmlsbEJhY2tncm91bmRDb2xvciwgbnVsbCksXG4gICAgICAuLi5zeFxuICAgIH1cbiAgfSwgcmVzdCwge1xuICAgIF9fdGhlbWVLZXk6IFwiZm9ybXNcIixcbiAgICBfX2NzczogZGVmYXVsdElucHV0U3R5bGVzXG4gIH0pKTtcbn0pO1xuXG5jb25zdCBTVkcgPSAoe1xuICBzaXplID0gMjQsXG4gIC4uLnByb3BzXG59KSA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgYXM6IFwic3ZnXCIsXG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBzaXplICsgJycsXG4gIGhlaWdodDogc2l6ZSArICcnLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICBmaWxsOiBcImN1cnJlbnRjb2xvclwiXG59LCBwcm9wcykpO1xuXG5TVkcuZGlzcGxheU5hbWUgPSAnU1ZHJztcblxuY29uc3QgZ2V0UHJvcHMgPSB0ZXN0ID0+IHByb3BzID0+IHtcbiAgY29uc3QgbmV4dCA9IHt9O1xuXG4gIGZvciAoY29uc3Qga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKHRlc3Qoa2V5IHx8ICcnKSkgbmV4dFtrZXldID0gcHJvcHNba2V5XTtcbiAgfVxuXG4gIHJldHVybiBuZXh0O1xufTtcbmNvbnN0IE1SRSA9IC9ebVt0cmJseHldPyQvO1xuY29uc3QgZ2V0TWFyZ2luID0gZ2V0UHJvcHMoayA9PiBNUkUudGVzdChrKSk7XG5jb25zdCBvbWl0TWFyZ2luID0gZ2V0UHJvcHMoayA9PiAhTVJFLnRlc3QoaykpO1xuXG5jb25zdCBEb3duQXJyb3cgPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTVkcsIHByb3BzLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk03IDEwbDUgNSA1LTV6XCJcbn0pKTtcblxuY29uc3QgU2VsZWN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU2VsZWN0KHtcbiAgYXJyb3csXG4gIC4uLnByb3BzXG59LCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgX2V4dGVuZHMoe30sIGdldE1hcmdpbihwcm9wcyksIHtcbiAgICBzeDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgYXM6IFwic2VsZWN0XCIsXG4gICAgdmFyaWFudDogXCJzZWxlY3RcIlxuICB9LCBvbWl0TWFyZ2luKHByb3BzKSwge1xuICAgIF9fdGhlbWVLZXk6IFwiZm9ybXNcIixcbiAgICBfX2Nzczoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwOiAyLFxuICAgICAgYXBwZWFyYW5jZTogJ25vbmUnLFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZSA9PiBnZXQodGhlbWUsICdjb2xvcnMuYmFja2dyb3VuZCcsIG51bGwpXG4gICAgfVxuICB9KSksIGFycm93IHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERvd25BcnJvdywge1xuICAgIHN4OiB7XG4gICAgICBtbDogLTI4LFxuICAgICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH1cbiAgfSkpO1xufSk7XG5cbmNvbnN0IFRleHRhcmVhID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGV4dGFyZWEocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgYXM6IFwidGV4dGFyZWFcIixcbiAgICB2YXJpYW50OiBcInRleHRhcmVhXCJcbiAgfSwgcHJvcHMsIHtcbiAgICBfX3RoZW1lS2V5OiBcImZvcm1zXCIsXG4gICAgX19jc3M6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcDogMixcbiAgICAgIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnXG4gICAgfVxuICB9KSk7XG59KTtcblxuY29uc3QgUmFkaW9DaGVja2VkID0gcHJvcHMgPT4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU1ZHLCBwcm9wcywgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNSA1LTIuMjQgNS01LTIuMjQtNS01LTV6bTAtNUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6XCJcbn0pKTtcblxuY29uc3QgUmFkaW9VbmNoZWNrZWQgPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTVkcsIHByb3BzLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHpcIlxufSkpO1xuXG5jb25zdCBSYWRpb0ljb24gPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmFkaW9DaGVja2VkLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgX19jc3M6IHtcbiAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgJ2lucHV0OmNoZWNrZWQgfiAmJzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH1cbiAgfVxufSkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSYWRpb1VuY2hlY2tlZCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gIF9fY3NzOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH1cbn0pKSk7XG5cbmNvbnN0IFJhZGlvID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUmFkaW8oe1xuICBjbGFzc05hbWUsXG4gIHN4LFxuICB2YXJpYW50ID0gJ3JhZGlvJyxcbiAgLi4ucHJvcHNcbn0sIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7XG4gICAgc3g6IHtcbiAgICAgIG1pbldpZHRoOiAnbWluLWNvbnRlbnQnXG4gICAgfVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBhczogXCJpbnB1dFwiLFxuICAgIHR5cGU6IFwicmFkaW9cIlxuICB9LCBwcm9wcywge1xuICAgIHN4OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgd2lkdGg6IDEsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9XG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7XG4gICAgYXM6IFJhZGlvSWNvbixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIF9fdGhlbWVLZXk6IFwiZm9ybXNcIixcbiAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHN4OiBzeCxcbiAgICBfX2Nzczoge1xuICAgICAgLy8gdG9kbzogc3lzdGVtIHByb3BzPz9cbiAgICAgIG1yOiAyLFxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5LFxuICAgICAgY29sb3I6ICdncmF5JyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeSdcbiAgICAgIH0sXG4gICAgICAnaW5wdXQ6Zm9jdXMgfiAmJzoge1xuICAgICAgICBiZzogJ2hpZ2hsaWdodCdcbiAgICAgIH1cbiAgICB9XG4gIH0pKTtcbn0pO1xuXG5jb25zdCBDaGVja2JveENoZWNrZWQgPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTVkcsIHByb3BzLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uOSAyLTJWNWMwLTEuMS0uODktMi0yLTJ6bS05IDE0bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XCJcbn0pKTtcblxuY29uc3QgQ2hlY2tib3hVbmNoZWNrZWQgPSBwcm9wcyA9PiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTVkcsIHByb3BzLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xOSA1djE0SDVWNWgxNG0wLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yelwiXG59KSk7XG5cbmNvbnN0IENoZWNrYm94SWNvbiA9IHByb3BzID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2JveENoZWNrZWQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICBfX2Nzczoge1xuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfVxuICB9XG59KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrYm94VW5jaGVja2VkLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgX19jc3M6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICdpbnB1dDpjaGVja2VkIH4gJic6IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfVxufSkpKTtcblxuY29uc3QgQ2hlY2tib3ggPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBDaGVja2JveCh7XG4gIGNsYXNzTmFtZSxcbiAgc3gsXG4gIHZhcmlhbnQgPSAnY2hlY2tib3gnLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn0sIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7XG4gICAgc3g6IHtcbiAgICAgIG1pbldpZHRoOiAnbWluLWNvbnRlbnQnXG4gICAgfVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBhczogXCJpbnB1dFwiLFxuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9LCBwcm9wcywge1xuICAgIHN4OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgd2lkdGg6IDEsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9XG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7XG4gICAgYXM6IENoZWNrYm94SWNvbixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIF9fdGhlbWVLZXk6IFwiZm9ybXNcIixcbiAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHN4OiBzeCxcbiAgICBfX2Nzczoge1xuICAgICAgbXI6IDIsXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgICdpbnB1dDpjaGVja2VkIH4gJic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5J1xuICAgICAgfSxcbiAgICAgICdpbnB1dDpmb2N1cyB+ICYnOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgIGJnOiAnaGlnaGxpZ2h0J1xuICAgICAgfVxuICAgIH1cbiAgfSksIGNoaWxkcmVuKTtcbn0pO1xuXG5jb25zdCBHVVRURVIgPSAyO1xuY29uc3QgU0laRSA9IDE4O1xuY29uc3QgU3dpdGNoID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU3dpdGNoKHtcbiAgY2xhc3NOYW1lLFxuICBsYWJlbCxcbiAgc3gsXG4gIHZhcmlhbnQgPSAnc3dpdGNoJyxcbiAgLi4ucHJvcHNcbn0sIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtcbiAgICBzeDoge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGFzOiBcImlucHV0XCIsXG4gICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgIF9fdGhlbWVLZXk6IFwiZm9ybXNcIixcbiAgICBcImFyaWEtbGFiZWxcIjogbGFiZWxcbiAgfSwgcHJvcHMsIHtcbiAgICBzeDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgekluZGV4OiAtMSxcbiAgICAgIHdpZHRoOiAxLFxuICAgICAgaGVpZ2h0OiAxLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfVxuICB9KSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwge1xuICAgIGNzczoge1xuICAgICAgcGFkZGluZzogR1VUVEVSXG4gICAgfSxcbiAgICBfX3RoZW1lS2V5OiBcImZvcm1zXCIsXG4gICAgdmFyaWFudDogdmFyaWFudCxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICBzeDogc3gsXG4gICAgX19jc3M6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYmc6ICdncmF5JyxcbiAgICAgIGJvcmRlclJhZGl1czogU0laRSxcbiAgICAgIGhlaWdodDogU0laRSArIEdVVFRFUiAqIDIsXG4gICAgICB3aWR0aDogU0laRSAqIDIgKyBHVVRURVIgKiAyLFxuICAgICAgbXI6IDIsXG4gICAgICAnaW5wdXQ6ZGlzYWJsZWQgfiAmJzoge1xuICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJ1xuICAgICAgfSxcbiAgICAgICcmID4gZGl2Jzoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICBoZWlnaHQ6IFNJWkUsXG4gICAgICAgIHdpZHRoOiBTSVpFLFxuICAgICAgICBiZzogJ3doaXRlJyxcbiAgICAgICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKScsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDAlKScsXG4gICAgICAgIHRyYW5zaXRpb246IGB0cmFuc2Zvcm0gMjQwbXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKWBcbiAgICAgIH0sXG4gICAgICAnaW5wdXQ6Y2hlY2tlZCB+ICYnOiB7XG4gICAgICAgIGJnOiAncHJpbWFyeScsXG4gICAgICAgICc+IGRpdic6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGxhYmVsKSk7XG59KTtcblxuY29uc3QgdGh1bWIgPSB7XG4gIGFwcGVhcmFuY2U6ICdub25lJyxcbiAgd2lkdGg6IDE2LFxuICBoZWlnaHQ6IDE2LFxuICBiZzogJ2N1cnJlbnRjb2xvcicsXG4gIGJvcmRlcjogMCxcbiAgYm9yZGVyUmFkaXVzOiA5OTk5LFxuICB2YXJpYW50OiAnZm9ybXMuc2xpZGVyLnRodW1iJ1xufTtcbmNvbnN0IFNsaWRlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFNsaWRlcihwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBhczogXCJpbnB1dFwiLFxuICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgICB2YXJpYW50OiBcInNsaWRlclwiXG4gIH0sIHByb3BzLCB7XG4gICAgX190aGVtZUtleTogXCJmb3Jtc1wiLFxuICAgIF9fY3NzOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogNCxcbiAgICAgIG15OiAyLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6IDk5OTksXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgYmc6ICdncmF5JyxcbiAgICAgICc6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5J1xuICAgICAgfSxcbiAgICAgICcmOjotd2Via2l0LXNsaWRlci10aHVtYic6IHRodW1iLFxuICAgICAgJyY6Oi1tb3otcmFuZ2UtdGh1bWInOiB0aHVtYixcbiAgICAgICcmOjotbXMtdGh1bWInOiB0aHVtYlxuICAgIH1cbiAgfSkpO1xufSk7XG5cbmNvbnN0IEZpZWxkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRmllbGQoe1xuICBhczogQ29udHJvbCA9IElucHV0LFxuICBsYWJlbCxcbiAgaWQsXG4gIG5hbWUsXG4gIC4uLnByb3BzXG59LCByZWYpIHtcbiAgY29uc3QgZmllbGRJZGVudGlmaWVyID0gaWQgfHwgbmFtZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgZ2V0TWFyZ2luKHByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHtcbiAgICBodG1sRm9yOiBmaWVsZElkZW50aWZpZXJcbiAgfSwgbGFiZWwpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb250cm9sLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgaWQ6IGZpZWxkSWRlbnRpZmllcixcbiAgICBuYW1lOiBuYW1lXG4gIH0sIG9taXRNYXJnaW4ocHJvcHMpKSkpO1xufSk7XG5cbmNvbnN0IFByb2dyZXNzID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUHJvZ3Jlc3MocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgYXM6IFwicHJvZ3Jlc3NcIixcbiAgICB2YXJpYW50OiBcInN0eWxlcy5wcm9ncmVzc1wiXG4gIH0sIHByb3BzLCB7XG4gICAgX19jc3M6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnNHB4JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYmc6ICdncmF5JyxcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OSxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgJyY6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyJzoge1xuICAgICAgICBiZzogJ3RyYW5zcGFyZW50J1xuICAgICAgfSxcbiAgICAgICcmOjotd2Via2l0LXByb2dyZXNzLXZhbHVlJzoge1xuICAgICAgICBiZzogJ2N1cnJlbnRjb2xvcidcbiAgICAgIH0sXG4gICAgICAnJjo6LW1vei1wcm9ncmVzcy1iYXInOiB7XG4gICAgICAgIGJnOiAnY3VycmVudGNvbG9yJ1xuICAgICAgfVxuICAgIH1cbiAgfSkpO1xufSk7XG5cbmNvbnN0IERvbnV0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRG9udXQoe1xuICBzaXplID0gMTI4LFxuICBzdHJva2VXaWR0aCA9IDIsXG4gIHZhbHVlID0gMCxcbiAgbWluID0gMCxcbiAgbWF4ID0gMSxcbiAgdGl0bGUsXG4gIC4uLnByb3BzXG59LCByZWYpIHtcbiAgY29uc3QgciA9IDE2IC0gc3Ryb2tlV2lkdGg7XG4gIGNvbnN0IEMgPSAyICogciAqIE1hdGguUEk7XG4gIGNvbnN0IG9mZnNldCA9IEMgLSAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikgKiBDO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgYXM6IFwic3ZnXCIsXG4gICAgdmlld0JveDogXCIwIDAgMzIgMzJcIixcbiAgICB3aWR0aDogc2l6ZSxcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgc3Ryb2tlV2lkdGg6IHN0cm9rZVdpZHRoLFxuICAgIGZpbGw6IFwibm9uZVwiLFxuICAgIHN0cm9rZTogXCJjdXJyZW50Y29sb3JcIixcbiAgICByb2xlOiBcImltZ1wiLFxuICAgIFwiYXJpYS12YWx1ZW5vd1wiOiB2YWx1ZSxcbiAgICBcImFyaWEtdmFsdWVtaW5cIjogbWluLFxuICAgIFwiYXJpYS12YWx1ZW1heFwiOiBtYXhcbiAgfSwgcHJvcHMsIHtcbiAgICBfX2Nzczoge1xuICAgICAgY29sb3I6ICdwcmltYXJ5J1xuICAgIH1cbiAgfSksIHRpdGxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgdGl0bGUpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IDE2LFxuICAgIGN5OiAxNixcbiAgICByOiByLFxuICAgIG9wYWNpdHk6IDEgLyA4XG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IDE2LFxuICAgIGN5OiAxNixcbiAgICByOiByLFxuICAgIHN0cm9rZURhc2hhcnJheTogQyxcbiAgICBzdHJva2VEYXNob2Zmc2V0OiBvZmZzZXQsXG4gICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgtOTAgMTYgMTYpXCJcbiAgfSkpO1xufSk7XG5cbmNvbnN0IHNwaW4gPSBrZXlmcmFtZXMoe1xuICBmcm9tOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJ1xuICB9LFxuICB0bzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJ1xuICB9XG59KTtcbmNvbnN0IFNwaW5uZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTcGlubmVyKHtcbiAgc2l6ZSA9IDQ4LFxuICBzdHJva2VXaWR0aCA9IDQsXG4gIG1heCA9IDEsXG4gIHRpdGxlID0gJ0xvYWRpbmcuLi4nLFxuICBkdXJhdGlvbiA9IDUwMCxcbiAgLi4ucHJvcHNcbn0sIHJlZikge1xuICBjb25zdCByID0gMTYgLSBzdHJva2VXaWR0aDtcbiAgY29uc3QgQyA9IDIgKiByICogTWF0aC5QSTtcbiAgY29uc3Qgb2Zmc2V0ID0gQyAtIDEgLyA0ICogQztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGFzOiBcInN2Z1wiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDMyIDMyXCIsXG4gICAgd2lkdGg6IHNpemUsXG4gICAgaGVpZ2h0OiBzaXplLFxuICAgIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICBzdHJva2U6IFwiY3VycmVudGNvbG9yXCIsXG4gICAgcm9sZTogXCJpbWdcIlxuICB9LCBwcm9wcywge1xuICAgIF9fY3NzOiB7XG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuICAgIH1cbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwgbnVsbCwgdGl0bGUpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7XG4gICAgY3g6IDE2LFxuICAgIGN5OiAxNixcbiAgICByOiByLFxuICAgIG9wYWNpdHk6IDEgLyA4XG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHtcbiAgICBhczogXCJjaXJjbGVcIixcbiAgICBjeDogMTYsXG4gICAgY3k6IDE2LFxuICAgIHI6IHIsXG4gICAgc3Ryb2tlRGFzaGFycmF5OiBDLFxuICAgIHN0cm9rZURhc2hvZmZzZXQ6IG9mZnNldCxcbiAgICBfX2Nzczoge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJScsXG4gICAgICBhbmltYXRpb25OYW1lOiBzcGluLnRvU3RyaW5nKCksXG4gICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogZHVyYXRpb24gKyAnbXMnLFxuICAgICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZSdcbiAgICB9XG4gIH0pKTtcbn0pO1xuXG5jb25zdCBBdmF0YXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBBdmF0YXIoe1xuICBzaXplID0gNDgsXG4gIC4uLnByb3BzXG59LCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgd2lkdGg6IHNpemUsXG4gICAgaGVpZ2h0OiBzaXplLFxuICAgIHZhcmlhbnQ6IFwiYXZhdGFyXCJcbiAgfSwgcHJvcHMsIHtcbiAgICBfX2Nzczoge1xuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5XG4gICAgfVxuICB9KSk7XG59KTtcblxuY29uc3QgQmFkZ2UgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBCYWRnZShwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICB2YXJpYW50OiBcInByaW1hcnlcIlxuICB9LCBwcm9wcywge1xuICAgIF9fdGhlbWVLZXk6IFwiYmFkZ2VzXCIsXG4gICAgX19jc3M6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdmVydGljYWxBbGlnbjogJ2Jhc2VsaW5lJyxcbiAgICAgIGZvbnRTaXplOiAwLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBweDogMSxcbiAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmc6ICdwcmltYXJ5J1xuICAgIH1cbiAgfSkpO1xufSk7XG5cbmNvbnN0IEljb25CdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBJY29uQnV0dG9uKHtcbiAgc2l6ZSA9IDMyLFxuICAuLi5wcm9wc1xufSwgcmVmKSB7XG4gIHZhciBfcHJvcHMkX19jc3M7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGFzOiBcImJ1dHRvblwiLFxuICAgIHZhcmlhbnQ6IFwiaWNvblwiXG4gIH0sIHByb3BzLCB7XG4gICAgX190aGVtZUtleTogXCJidXR0b25zXCIsXG4gICAgX19jc3M6IHtcbiAgICAgIGxhYmVsOiAoKF9wcm9wcyRfX2NzcyA9IHByb3BzLl9fY3NzKSA9PSBudWxsID8gdm9pZCAwIDogX3Byb3BzJF9fY3NzLmxhYmVsKSB8fCAnSWNvbkJ1dHRvbicsXG4gICAgICBhcHBlYXJhbmNlOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBwYWRkaW5nOiAxLFxuICAgICAgd2lkdGg6IHNpemUsXG4gICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJvcmRlclJhZGl1czogNFxuICAgIH1cbiAgfSkpO1xufSk7XG5cbmNvbnN0IHggPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gIHdpZHRoOiBcIjI0XCIsXG4gIGhlaWdodDogXCIyNFwiLFxuICBmaWxsOiBcImN1cnJlbnRjb2xvclwiLFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiXG59LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6XCJcbn0pKTtcbmNvbnN0IENsb3NlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQ2xvc2Uoe1xuICBzaXplID0gMzIsXG4gIC4uLnByb3BzXG59LCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBzaXplOiBzaXplLFxuICAgIHRpdGxlOiBcIkNsb3NlXCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIixcbiAgICB2YXJpYW50OiBcImNsb3NlXCJcbiAgfSwgcHJvcHMsIHtcbiAgICBjaGlsZHJlbjogeFxuICB9KSk7XG59KTtcblxuY29uc3QgQWxlcnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBBbGVydChwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICB2YXJpYW50OiBcInByaW1hcnlcIlxuICB9LCBwcm9wcywge1xuICAgIF9fdGhlbWVLZXk6IFwiYWxlcnRzXCIsXG4gICAgX19jc3M6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcHg6IDMsXG4gICAgICBweTogMixcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgIGJvcmRlclJhZGl1czogNFxuICAgIH1cbiAgfSkpO1xufSk7XG5cbmNvbnN0IERpdmlkZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBEaXZpZGVyKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGFzOiBcImhyXCIsXG4gICAgdmFyaWFudDogXCJzdHlsZXMuaHJcIlxuICB9LCBwcm9wcywge1xuICAgIF9fY3NzOiB7XG4gICAgICBjb2xvcjogJ2dyYXknLFxuICAgICAgbTogMCxcbiAgICAgIG15OiAyLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJ1xuICAgIH1cbiAgfSkpO1xufSk7XG5cbmNvbnN0IGdldENvbnRhaW5lclByb3BzID0gZ2V0UHJvcHMoX19pc0JveFN0eWxlZFN5c3RlbVByb3ApO1xuY29uc3QgZ2V0SWZyYW1lUHJvcHMgPSBnZXRQcm9wcyhzdHIgPT4gIV9faXNCb3hTdHlsZWRTeXN0ZW1Qcm9wKHN0cikpO1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi9pbmRleFwiKS5FbWJlZFByb3BzfSBFbWJlZFByb3BzICovXG5cbi8qKiBAdHlwZSB7UmVhY3QuRm9yd2FyZFJlZkV4b3RpY0NvbXBvbmVudDxFbWJlZFByb3BzPn0gKi9cblxuY29uc3QgRW1iZWQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBFbWJlZCh7XG4gIHZhcmlhbnQsXG4gIHN4LFxuICByYXRpbyA9IDE2IC8gOSxcbiAgc3JjLFxuICBmcmFtZUJvcmRlciA9IDAsXG4gIGFsbG93RnVsbFNjcmVlbiA9IHRydWUsXG4gIHdpZHRoID0gNTYwLFxuICBoZWlnaHQgPSAzMTUsXG4gIGFsbG93LFxuICAuLi5yZXN0XG59LCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgX2V4dGVuZHMoe1xuICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgc3g6IHN4LFxuICAgIF9fY3NzOiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgcGFkZGluZ0JvdHRvbTogMTAwIC8gcmF0aW8gKyAnJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH1cbiAgfSwgZ2V0Q29udGFpbmVyUHJvcHMocmVzdCkpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHtcbiAgICByZWY6IHJlZixcbiAgICBhczogXCJpZnJhbWVcIixcbiAgICBzcmM6IHNyYyxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgZnJhbWVCb3JkZXI6IGZyYW1lQm9yZGVyLFxuICAgIGFsbG93RnVsbFNjcmVlbjogYWxsb3dGdWxsU2NyZWVuLFxuICAgIGFsbG93OiBhbGxvd1xuICB9LCBnZXRJZnJhbWVQcm9wcyhyZXN0KSwge1xuICAgIF9fY3NzOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3JkZXI6IDBcbiAgICB9XG4gIH0pKSk7XG59KTtcblxuY29uc3QgQXNwZWN0UmF0aW8gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBBc3BlY3RSYXRpbyh7XG4gIHJhdGlvID0gNCAvIDMsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufSwgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHtcbiAgICByZWY6IHJlZixcbiAgICBzeDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwge1xuICAgIHN4OiB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgcGFkZGluZ0JvdHRvbTogMTAwIC8gcmF0aW8gKyAnJSdcbiAgICB9XG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIF9fY3NzOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH1cbiAgfSksIGNoaWxkcmVuKSk7XG59KTtcblxuY29uc3QgQXNwZWN0SW1hZ2UgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBBc3BlY3RJbWFnZSh7XG4gIHJhdGlvLFxuICAuLi5wcm9wc1xufSwgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBc3BlY3RSYXRpbywge1xuICAgIHJhdGlvOiByYXRpb1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgX19jc3M6IHtcbiAgICAgIG9iamVjdEZpdDogJ2NvdmVyJ1xuICAgIH1cbiAgfSkpKTtcbn0pO1xuXG5jb25zdCBDb250YWluZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBDb250YWluZXIocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgdmFyaWFudDogXCJjb250YWluZXJcIlxuICB9LCBwcm9wcywge1xuICAgIF9fdGhlbWVLZXk6IFwibGF5b3V0XCIsXG4gICAgX19jc3M6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXhXaWR0aDogJ2NvbnRhaW5lcicsXG4gICAgICBteDogJ2F1dG8nXG4gICAgfVxuICB9KSk7XG59KTtcblxuY29uc3QgTmF2TGluayA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdkxpbmsocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIHZhcmlhbnQ6IFwibmF2XCJcbiAgfSwgcHJvcHMsIHtcbiAgICBfX2Nzczoge1xuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICcmOmhvdmVyLCAmOmZvY3VzLCAmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5J1xuICAgICAgfVxuICAgIH1cbiAgfSkpO1xufSk7XG5cbmNvbnN0IE1lc3NhZ2UgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBNZXNzYWdlKHByb3BzLCByZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgX190aGVtZUtleTogXCJtZXNzYWdlc1wiLFxuICAgIF9fY3NzOiB7XG4gICAgICBwYWRkaW5nOiAzLFxuICAgICAgcGFkZGluZ0xlZnQ6IHQgPT4gdC5zcGFjZVszXSAtIHQuc3BhY2VbMV0sXG4gICAgICBib3JkZXJMZWZ0V2lkdGg6IHQgPT4gdC5zcGFjZVsxXSxcbiAgICAgIGJvcmRlckxlZnRTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlckxlZnRDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgYmc6ICdoaWdobGlnaHQnXG4gICAgfVxuICB9KSk7XG59KTtcblxuY29uc3QgTWVudUljb24gPSAoe1xuICBzaXplID0gMjRcbn0pID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJveCwge1xuICBhczogXCJzdmdcIixcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IHNpemUsXG4gIGhlaWdodDogc2l6ZSxcbiAgZmlsbDogXCJjdXJyZW50Y29sb3JcIixcbiAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgc3g6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbjogMFxuICB9XG59LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0zIDE4aDE4di0ySDN2MnptMC01aDE4di0ySDN2MnptMC03djJoMThWNkgzelwiXG59KSk7XG5jb25zdCBNZW51QnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTWVudUJ1dHRvbihwcm9wcywgcmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWYsXG4gICAgdGl0bGU6IFwiTWVudVwiLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBcIlRvZ2dsZSBNZW51XCIsXG4gICAgdmFyaWFudDogXCJtZW51XCJcbiAgfSwgcHJvcHMpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51SWNvbiwgbnVsbCkpO1xufSk7XG5cbmV4cG9ydCB7IEFsZXJ0LCBBc3BlY3RJbWFnZSwgQXNwZWN0UmF0aW8sIEF2YXRhciwgQmFkZ2UsIEJveCwgQnV0dG9uLCBDYXJkLCBDaGVja2JveCwgQ2xvc2UsIENvbnRhaW5lciwgRGl2aWRlciwgRG9udXQsIEVtYmVkLCBGaWVsZCwgRmxleCwgR3JpZCwgSGVhZGluZywgSWNvbkJ1dHRvbiwgSW1hZ2UsIElucHV0LCBMYWJlbCwgTGluaywgTWVudUJ1dHRvbiwgTWVzc2FnZSwgTmF2TGluaywgUGFyYWdyYXBoLCBQcm9ncmVzcywgUmFkaW8sIFNlbGVjdCwgU2xpZGVyLCBTcGlubmVyLCBTd2l0Y2gsIFRleHQsIFRleHRhcmVhIH07XG4iLCJpbXBvcnQgeyBqc3ggYXMganN4JDEgfSBmcm9tICdAdGhlbWUtdWkvY29yZSc7XG5leHBvcnQgeyBfX1RoZW1lVUlDb250ZXh0LCBjcmVhdGVFbGVtZW50LCBtZXJnZSwgdXNlVGhlbWVVSSB9IGZyb20gJ0B0aGVtZS11aS9jb3JlJztcbmV4cG9ydCB7IEluaXRpYWxpemVDb2xvck1vZGUsIHVzZUNvbG9yTW9kZSB9IGZyb20gJ0B0aGVtZS11aS9jb2xvci1tb2Rlcyc7XG5leHBvcnQgeyBTdHlsZWQsIFRoZW1lZCwgY29tcG9uZW50cyB9IGZyb20gJ0B0aGVtZS11aS9tZHgnO1xuZXhwb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0B0aGVtZS11aS90aGVtZS1wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICdAdGhlbWUtdWkvY29tcG9uZW50cyc7XG5leHBvcnQgeyBjc3MsIGdldCB9IGZyb20gJ0B0aGVtZS11aS9jc3MnO1xuXG5jb25zdCBCYXNlU3R5bGVzID0gcHJvcHMgPT4ganN4KCdkaXYnLCB7IC4uLnByb3BzLFxuICBzeDoge1xuICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICBsaW5lSGVpZ2h0OiAnYm9keScsXG4gICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgIHZhcmlhbnQ6ICdzdHlsZXMnXG4gIH1cbn0pO1xuY29uc3QganN4ID0ganN4JDE7XG5cbmV4cG9ydCB7IEJhc2VTdHlsZXMsIGpzeCB9O1xuIl0sIm5hbWVzIjpbImpzeCQxIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJjYW5Vc2VTeW1ib2wiLCJkZWVwbWVyZ2UiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0IiwidXNlTWVtbyIsImFsaWFzZXMiLCJzdHlsZWQiLCJjcmVhdGVFbGVtZW50IiwiTURYUHJvdmlkZXIiLCJNRFhQcm92aWRlciQxIiwiVGhlbWVQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIkMSIsIm1lcmdlIiwiYXNzaWduIiwiZ2V0IiwiY29uZmlnIiwiZGVmYXVsdHMiLCJpc051bWJlciIsImRlZmF1bHRCcmVha3BvaW50cyIsImRlZmF1bHRUaGVtZSIsIm11bHRpcGxlcyIsInNjYWxlcyIsInBvc2l0aXZlT3JOZWdhdGl2ZSIsInRyYW5zZm9ybXMiLCJyZXNwb25zaXZlIiwiY3NzIiwiaXNQcm9wVmFsaWQiLCJ2YXJpYW50IiwiX2V4dGVuZHMiLCJqc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFJLGlCQUFpQixHQUFHLFNBQVMsaUJBQWlCLENBQUMsS0FBSyxFQUFFO0FBQzFELENBQUMsT0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDO0FBQzlCLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ3RCLENBQUMsQ0FBQztBQUNGO0FBQ0EsU0FBUyxlQUFlLENBQUMsS0FBSyxFQUFFO0FBQ2hDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVE7QUFDNUMsQ0FBQztBQUNEO0FBQ0EsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQzFCLENBQUMsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFD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
