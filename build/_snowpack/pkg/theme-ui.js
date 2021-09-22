import { j as jsx$2, G as Global, k as keyframes } from './common/emotion-react.browser.esm-3c95c8d1.js';
import { r as react, o as objectAssign } from './common/index-8af8b000.js';
import { T as ThemeContext } from './common/emotion-element-99289b21.browser.esm-72bed7ef.js';
import { n as newStyled } from './common/emotion-styled.browser.esm-5d3c837e.js';
import './common/emotion-utils.browser.esm-07bb8819.js';

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
//# sourceMappingURL=theme-ui.js.map
