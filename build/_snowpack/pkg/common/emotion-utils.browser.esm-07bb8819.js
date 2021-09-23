/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var e = "-ms-";
var r = "-moz-";
var a = "-webkit-";
var c = "comm";
var n = "rule";
var t = "decl";
var i = "@import";
var p = "@keyframes";
var k = Math.abs;
var d = String.fromCharCode;
function m(e2, r2) {
  return (((r2 << 2 ^ z(e2, 0)) << 2 ^ z(e2, 1)) << 2 ^ z(e2, 2)) << 2 ^ z(e2, 3);
}
function g(e2) {
  return e2.trim();
}
function x(e2, r2) {
  return (e2 = r2.exec(e2)) ? e2[0] : e2;
}
function y(e2, r2, a2) {
  return e2.replace(r2, a2);
}
function j(e2, r2) {
  return e2.indexOf(r2);
}
function z(e2, r2) {
  return e2.charCodeAt(r2) | 0;
}
function C(e2, r2, a2) {
  return e2.slice(r2, a2);
}
function A(e2) {
  return e2.length;
}
function M(e2) {
  return e2.length;
}
function O(e2, r2) {
  return r2.push(e2), e2;
}
function S(e2, r2) {
  return e2.map(r2).join("");
}
var q = 1;
var B = 1;
var D = 0;
var E = 0;
var F = 0;
var G = "";
function H(e2, r2, a2, c2, n2, t2, s2) {
  return {value: e2, root: r2, parent: a2, type: c2, props: n2, children: t2, line: q, column: B, length: s2, return: ""};
}
function I(e2, r2, a2) {
  return H(e2, r2.root, r2.parent, a2, r2.props, r2.children, 0);
}
function J() {
  return F;
}
function K() {
  F = E > 0 ? z(G, --E) : 0;
  if (B--, F === 10)
    B = 1, q--;
  return F;
}
function L() {
  F = E < D ? z(G, E++) : 0;
  if (B++, F === 10)
    B = 1, q++;
  return F;
}
function N() {
  return z(G, E);
}
function P() {
  return E;
}
function Q(e2, r2) {
  return C(G, e2, r2);
}
function R(e2) {
  switch (e2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function T(e2) {
  return q = B = 1, D = A(G = e2), E = 0, [];
}
function U(e2) {
  return G = "", e2;
}
function V(e2) {
  return g(Q(E - 1, _(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function X(e2) {
  while (F = N())
    if (F < 33)
      L();
    else
      break;
  return R(e2) > 2 || R(F) > 3 ? "" : " ";
}
function Z(e2, r2) {
  while (--r2 && L())
    if (F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97)
      break;
  return Q(e2, P() + (r2 < 6 && N() == 32 && L() == 32));
}
function _(e2) {
  while (L())
    switch (F) {
      case e2:
        return E;
      case 34:
      case 39:
        return _(e2 === 34 || e2 === 39 ? e2 : F);
      case 40:
        if (e2 === 41)
          _(e2);
        break;
      case 92:
        L();
        break;
    }
  return E;
}
function ee(e2, r2) {
  while (L())
    if (e2 + F === 47 + 10)
      break;
    else if (e2 + F === 42 + 42 && N() === 47)
      break;
  return "/*" + Q(r2, E - 1) + "*" + d(e2 === 47 ? e2 : L());
}
function re(e2) {
  while (!R(N()))
    L();
  return Q(e2, E);
}
function ae(e2) {
  return U(ce("", null, null, null, [""], e2 = T(e2), 0, [0], e2));
}
function ce(e2, r2, a2, c2, n2, t2, s2, u2, i2) {
  var f2 = 0;
  var o2 = 0;
  var l2 = s2;
  var v2 = 0;
  var h2 = 0;
  var p2 = 0;
  var b2 = 1;
  var w2 = 1;
  var $2 = 1;
  var k2 = 0;
  var m2 = "";
  var g2 = n2;
  var x2 = t2;
  var j2 = c2;
  var z2 = m2;
  while (w2)
    switch (p2 = k2, k2 = L()) {
      case 34:
      case 39:
      case 91:
      case 40:
        z2 += V(k2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z2 += X(p2);
        break;
      case 92:
        z2 += Z(P() - 1, 7);
        continue;
      case 47:
        switch (N()) {
          case 42:
          case 47:
            O(te(ee(L(), P()), r2, a2), i2);
            break;
          default:
            z2 += "/";
        }
        break;
      case 123 * b2:
        u2[f2++] = A(z2) * $2;
      case 125 * b2:
      case 59:
      case 0:
        switch (k2) {
          case 0:
          case 125:
            w2 = 0;
          case 59 + o2:
            if (h2 > 0 && A(z2) - l2)
              O(h2 > 32 ? se(z2 + ";", c2, a2, l2 - 1) : se(y(z2, " ", "") + ";", c2, a2, l2 - 2), i2);
            break;
          case 59:
            z2 += ";";
          default:
            O(j2 = ne(z2, r2, a2, f2, o2, n2, u2, m2, g2 = [], x2 = [], l2), t2);
            if (k2 === 123)
              if (o2 === 0)
                ce(z2, r2, j2, j2, g2, t2, l2, u2, x2);
              else
                switch (v2) {
                  case 100:
                  case 109:
                  case 115:
                    ce(e2, j2, j2, c2 && O(ne(e2, j2, j2, 0, 0, n2, u2, m2, n2, g2 = [], l2), x2), n2, x2, l2, u2, c2 ? g2 : x2);
                    break;
                  default:
                    ce(z2, j2, j2, j2, [""], x2, l2, u2, x2);
                }
        }
        f2 = o2 = h2 = 0, b2 = $2 = 1, m2 = z2 = "", l2 = s2;
        break;
      case 58:
        l2 = 1 + A(z2), h2 = p2;
      default:
        if (b2 < 1) {
          if (k2 == 123)
            --b2;
          else if (k2 == 125 && b2++ == 0 && K() == 125)
            continue;
        }
        switch (z2 += d(k2), k2 * b2) {
          case 38:
            $2 = o2 > 0 ? 1 : (z2 += "\f", -1);
            break;
          case 44:
            u2[f2++] = (A(z2) - 1) * $2, $2 = 1;
            break;
          case 64:
            if (N() === 45)
              z2 += V(L());
            v2 = N(), o2 = A(m2 = z2 += re(P())), k2++;
            break;
          case 45:
            if (p2 === 45 && A(z2) == 2)
              b2 = 0;
        }
    }
  return t2;
}
function ne(e2, r2, a2, c2, t2, s2, u2, i2, f2, o2, l2) {
  var v2 = t2 - 1;
  var h2 = t2 === 0 ? s2 : [""];
  var p2 = M(h2);
  for (var b2 = 0, w2 = 0, $2 = 0; b2 < c2; ++b2)
    for (var d2 = 0, m2 = C(e2, v2 + 1, v2 = k(w2 = u2[b2])), x2 = e2; d2 < p2; ++d2)
      if (x2 = g(w2 > 0 ? h2[d2] + " " + m2 : y(m2, /&\f/g, h2[d2])))
        f2[$2++] = x2;
  return H(e2, r2, a2, t2 === 0 ? n : i2, f2, o2, l2);
}
function te(e2, r2, a2) {
  return H(e2, r2, a2, c, d(J()), C(e2, 2, -2), 0);
}
function se(e2, r2, a2, c2) {
  return H(e2, r2, a2, t, C(e2, 0, c2), C(e2, c2 + 1, -1), c2);
}
function ue(c2, n2) {
  switch (m(c2, n2)) {
    case 5103:
      return a + "print-" + c2 + c2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + c2 + c2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + c2 + r + c2 + e + c2 + c2;
    case 6828:
    case 4268:
      return a + c2 + e + c2 + c2;
    case 6165:
      return a + c2 + e + "flex-" + c2 + c2;
    case 5187:
      return a + c2 + y(c2, /(\w+).+(:[^]+)/, a + "box-$1$2" + e + "flex-$1$2") + c2;
    case 5443:
      return a + c2 + e + "flex-item-" + y(c2, /flex-|-self/, "") + c2;
    case 4675:
      return a + c2 + e + "flex-line-pack" + y(c2, /align-content|flex-|-self/, "") + c2;
    case 5548:
      return a + c2 + e + y(c2, "shrink", "negative") + c2;
    case 5292:
      return a + c2 + e + y(c2, "basis", "preferred-size") + c2;
    case 6060:
      return a + "box-" + y(c2, "-grow", "") + a + c2 + e + y(c2, "grow", "positive") + c2;
    case 4554:
      return a + y(c2, /([^-])(transform)/g, "$1" + a + "$2") + c2;
    case 6187:
      return y(y(y(c2, /(zoom-|grab)/, a + "$1"), /(image-set)/, a + "$1"), c2, "") + c2;
    case 5495:
    case 3959:
      return y(c2, /(image-set\([^]*)/, a + "$1$`$1");
    case 4968:
      return y(y(c2, /(.+:)(flex-)?(.*)/, a + "box-pack:$3" + e + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a + c2 + c2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(c2, /(.+)-inline(.+)/, a + "$1$2") + c2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A(c2) - 1 - n2 > 6)
        switch (z(c2, n2 + 1)) {
          case 109:
            if (z(c2, n2 + 4) !== 45)
              break;
          case 102:
            return y(c2, /(.+:)(.+)-([^]+)/, "$1" + a + "$2-$3$1" + r + (z(c2, n2 + 3) == 108 ? "$3" : "$2-$3")) + c2;
          case 115:
            return ~j(c2, "stretch") ? ue(y(c2, "stretch", "fill-available"), n2) + c2 : c2;
        }
      break;
    case 4949:
      if (z(c2, n2 + 1) !== 115)
        break;
    case 6444:
      switch (z(c2, A(c2) - 3 - (~j(c2, "!important") && 10))) {
        case 107:
          return y(c2, ":", ":" + a) + c2;
        case 101:
          return y(c2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a + (z(c2, 14) === 45 ? "inline-" : "") + "box$3$1" + a + "$2$3$1" + e + "$2box$3") + c2;
      }
      break;
    case 5936:
      switch (z(c2, n2 + 11)) {
        case 114:
          return a + c2 + e + y(c2, /[svh]\w+-[tblr]{2}/, "tb") + c2;
        case 108:
          return a + c2 + e + y(c2, /[svh]\w+-[tblr]{2}/, "tb-rl") + c2;
        case 45:
          return a + c2 + e + y(c2, /[svh]\w+-[tblr]{2}/, "lr") + c2;
      }
      return a + c2 + e + c2 + c2;
  }
  return c2;
}
function ie(e2, r2) {
  var a2 = "";
  var c2 = M(e2);
  for (var n2 = 0; n2 < c2; n2++)
    a2 += r2(e2[n2], n2, e2, r2) || "";
  return a2;
}
function fe(e2, r2, a2, s2) {
  switch (e2.type) {
    case i:
    case t:
      return e2.return = e2.return || e2.value;
    case c:
      return "";
    case n:
      e2.value = e2.props.join(",");
  }
  return A(a2 = ie(e2.children, s2)) ? e2.return = e2.value + "{" + a2 + "}" : "";
}
function oe(e2) {
  var r2 = M(e2);
  return function(a2, c2, n2, t2) {
    var s2 = "";
    for (var u2 = 0; u2 < r2; u2++)
      s2 += e2[u2](a2, c2, n2, t2) || "";
    return s2;
  };
}
function le(e2) {
  return function(r2) {
    if (!r2.root) {
      if (r2 = r2.return)
        e2(r2);
    }
  };
}
function ve(c2, s2, u2, i2) {
  if (!c2.return)
    switch (c2.type) {
      case t:
        c2.return = ue(c2.value, c2.length);
        break;
      case p:
        return ie([I(y(c2.value, "@", "@" + a), c2, "")], i2);
      case n:
        if (c2.length)
          return S(c2.props, function(n2) {
            switch (x(n2, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ie([I(y(n2, /:(read-\w+)/, ":" + r + "$1"), c2, "")], i2);
              case "::placeholder":
                return ie([I(y(n2, /:(plac\w+)/, ":" + a + "input-$1"), c2, ""), I(y(n2, /:(plac\w+)/, ":" + r + "$1"), c2, ""), I(y(n2, /:(plac\w+)/, e + "input-$1"), c2, "")], i2);
            }
            return "";
          });
    }
}

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (R(character)) {
      case 0:
        // &\f
        if (character === 38 && N() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += re(E - 1);
        break;

      case 2:
        parsed[index] += V(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = N() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += d(character);
    }
  } while (character = L());

  return parsed;
};

var getRules = function getRules(value, points) {
  return U(toRules(T(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

var defaultStylisPlugins = [ve];

var createCache = function createCache(options) {
  var key = options.key;

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  {
    var currentSheet;
    var finalizingPlugins = [fe,  le(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = oe(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return ie(ae(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};

export { StyleSheet as S, createCache as c, getRegisteredStyles as g, insertStyles as i, memoize as m, serializeStyles as s };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vdGlvbi11dGlscy5icm93c2VyLmVzbS0wN2JiODgxOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3NoZWV0L2Rpc3QvZW1vdGlvbi1zaGVldC5icm93c2VyLmVzbS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsaXMvZGlzdC9zdHlsaXMubWpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9lbW90aW9uLW1lbW9pemUuYnJvd3Nlci5lc20uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vY2FjaGUvZGlzdC9lbW90aW9uLWNhY2hlLmJyb3dzZXIuZXNtLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuZXNtLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc2VyaWFsaXplL2Rpc3QvZW1vdGlvbi1zZXJpYWxpemUuYnJvd3Nlci5lc20uanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vdXRpbHMvZGlzdC9lbW90aW9uLXV0aWxzLmJyb3dzZXIuZXNtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbkJhc2VkIG9mZiBnbGFtb3IncyBTdHlsZVNoZWV0LCB0aGFua3MgU3VuaWwg4p2k77iPXG5cbmhpZ2ggcGVyZm9ybWFuY2UgU3R5bGVTaGVldCBmb3IgY3NzLWluLWpzIHN5c3RlbXNcblxuLSB1c2VzIG11bHRpcGxlIHN0eWxlIHRhZ3MgYmVoaW5kIHRoZSBzY2VuZXMgZm9yIG1pbGxpb25zIG9mIHJ1bGVzXG4tIHVzZXMgYGluc2VydFJ1bGVgIGZvciBhcHBlbmRpbmcgaW4gcHJvZHVjdGlvbiBmb3IgKm11Y2gqIGZhc3RlciBwZXJmb3JtYW5jZVxuXG4vLyB1c2FnZVxuXG5pbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnXG5cbmxldCBzdHlsZVNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoeyBrZXk6ICcnLCBjb250YWluZXI6IGRvY3VtZW50LmhlYWQgfSlcblxuc3R5bGVTaGVldC5pbnNlcnQoJyNib3ggeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7IH0nKVxuLSBhcHBlbmRzIGEgY3NzIHJ1bGUgaW50byB0aGUgc3R5bGVzaGVldFxuXG5zdHlsZVNoZWV0LmZsdXNoKClcbi0gZW1wdGllcyB0aGUgc3R5bGVzaGVldCBvZiBhbGwgaXRzIGNvbnRlbnRzXG5cbiovXG4vLyAkRmxvd0ZpeE1lXG5mdW5jdGlvbiBzaGVldEZvclRhZyh0YWcpIHtcbiAgaWYgKHRhZy5zaGVldCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gdGFnLnNoZWV0O1xuICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkb2N1bWVudC5zdHlsZVNoZWV0c1tpXS5vd25lck5vZGUgPT09IHRhZykge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywgb3B0aW9ucy5rZXkpO1xuXG4gIGlmIChvcHRpb25zLm5vbmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIG9wdGlvbnMubm9uY2UpO1xuICB9XG5cbiAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gIHRhZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtcycsICcnKTtcbiAgcmV0dXJuIHRhZztcbn1cblxudmFyIFN0eWxlU2hlZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5faW5zZXJ0VGFnID0gZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIGJlZm9yZTtcblxuICAgICAgaWYgKF90aGlzLnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJlZm9yZSA9IF90aGlzLnByZXBlbmQgPyBfdGhpcy5jb250YWluZXIuZmlyc3RDaGlsZCA6IF90aGlzLmJlZm9yZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJlZm9yZSA9IF90aGlzLnRhZ3NbX3RoaXMudGFncy5sZW5ndGggLSAxXS5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgX3RoaXMuY29udGFpbmVyLmluc2VydEJlZm9yZSh0YWcsIGJlZm9yZSk7XG5cbiAgICAgIF90aGlzLnRhZ3MucHVzaCh0YWcpO1xuICAgIH07XG5cbiAgICB0aGlzLmlzU3BlZWR5ID0gb3B0aW9ucy5zcGVlZHkgPT09IHVuZGVmaW5lZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgOiBvcHRpb25zLnNwZWVkeTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG4gICAgdGhpcy5ub25jZSA9IG9wdGlvbnMubm9uY2U7IC8vIGtleSBpcyB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUsIGl0J3MgdXNlZCB0byBpZGVudGlmeSBkaWZmZXJlbnQgc2hlZXRzXG5cbiAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgdGhpcy5wcmVwZW5kID0gb3B0aW9ucy5wcmVwZW5kO1xuICAgIHRoaXMuYmVmb3JlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uaHlkcmF0ZSA9IGZ1bmN0aW9uIGh5ZHJhdGUobm9kZXMpIHtcbiAgICBub2Rlcy5mb3JFYWNoKHRoaXMuX2luc2VydFRhZyk7XG4gIH07XG5cbiAgX3Byb3RvLmluc2VydCA9IGZ1bmN0aW9uIGluc2VydChydWxlKSB7XG4gICAgLy8gdGhlIG1heCBsZW5ndGggaXMgaG93IG1hbnkgcnVsZXMgd2UgaGF2ZSBwZXIgc3R5bGUgdGFnLCBpdCdzIDY1MDAwIGluIHNwZWVkeSBtb2RlXG4gICAgLy8gaXQncyAxIGluIGRldiBiZWNhdXNlIHdlIGluc2VydCBzb3VyY2UgbWFwcyB0aGF0IG1hcCBhIHNpbmdsZSBydWxlIHRvIGEgbG9jYXRpb25cbiAgICAvLyBhbmQgeW91IGNhbiBvbmx5IGhhdmUgb25lIHNvdXJjZSBtYXAgcGVyIHN0eWxlIHRhZ1xuICAgIGlmICh0aGlzLmN0ciAlICh0aGlzLmlzU3BlZWR5ID8gNjUwMDAgOiAxKSA9PT0gMCkge1xuICAgICAgdGhpcy5faW5zZXJ0VGFnKGNyZWF0ZVN0eWxlRWxlbWVudCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IHRoaXMudGFnc1t0aGlzLnRhZ3MubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGlzSW1wb3J0UnVsZSA9IHJ1bGUuY2hhckNvZGVBdCgwKSA9PT0gNjQgJiYgcnVsZS5jaGFyQ29kZUF0KDEpID09PSAxMDU7XG5cbiAgICAgIGlmIChpc0ltcG9ydFJ1bGUgJiYgdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUpIHtcbiAgICAgICAgLy8gdGhpcyB3b3VsZCBvbmx5IGNhdXNlIHByb2JsZW0gaW4gc3BlZWR5IG1vZGVcbiAgICAgICAgLy8gYnV0IHdlIGRvbid0IHdhbnQgZW5hYmxpbmcgc3BlZWR5IHRvIGFmZmVjdCB0aGUgb2JzZXJ2YWJsZSBiZWhhdmlvclxuICAgICAgICAvLyBzbyB3ZSByZXBvcnQgdGhpcyBlcnJvciBhdCBhbGwgdGltZXNcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSdyZSBhdHRlbXB0aW5nIHRvIGluc2VydCB0aGUgZm9sbG93aW5nIHJ1bGU6XFxuXCIgKyBydWxlICsgJ1xcblxcbmBAaW1wb3J0YCBydWxlcyBtdXN0IGJlIGJlZm9yZSBhbGwgb3RoZXIgdHlwZXMgb2YgcnVsZXMgaW4gYSBzdHlsZXNoZWV0IGJ1dCBvdGhlciBydWxlcyBoYXZlIGFscmVhZHkgYmVlbiBpbnNlcnRlZC4gUGxlYXNlIGVuc3VyZSB0aGF0IGBAaW1wb3J0YCBydWxlcyBhcmUgYmVmb3JlIGFsbCBvdGhlciBydWxlcy4nKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FscmVhZHlJbnNlcnRlZE9yZGVySW5zZW5zaXRpdmVSdWxlID0gdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUgfHwgIWlzSW1wb3J0UnVsZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1NwZWVkeSkge1xuICAgICAgdmFyIHNoZWV0ID0gc2hlZXRGb3JUYWcodGFnKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdWx0cmFmYXN0IHZlcnNpb24sIHdvcmtzIGFjcm9zcyBicm93c2Vyc1xuICAgICAgICAvLyB0aGUgYmlnIGRyYXdiYWNrIGlzIHRoYXQgdGhlIGNzcyB3b24ndCBiZSBlZGl0YWJsZSBpbiBkZXZ0b29sc1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIHNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICEvOigtbW96LXBsYWNlaG9sZGVyfC1tb3otZm9jdXMtaW5uZXJ8LW1vei1mb2N1c3Jpbmd8LW1zLWlucHV0LXBsYWNlaG9sZGVyfC1tb3otcmVhZC13cml0ZXwtbW96LXJlYWQtb25seXwtbXMtY2xlYXIpey8udGVzdChydWxlKSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGluc2VydGluZyB0aGUgZm9sbG93aW5nIHJ1bGU6IFxcXCJcIiArIHJ1bGUgKyBcIlxcXCJcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHJ1bGUpKTtcbiAgICB9XG5cbiAgICB0aGlzLmN0cisrO1xuICB9O1xuXG4gIF9wcm90by5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICB0aGlzLnRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICByZXR1cm4gdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICB9KTtcbiAgICB0aGlzLnRhZ3MgPSBbXTtcbiAgICB0aGlzLmN0ciA9IDA7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhpcy5fYWxyZWFkeUluc2VydGVkT3JkZXJJbnNlbnNpdGl2ZVJ1bGUgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cbmV4cG9ydCB7IFN0eWxlU2hlZXQgfTtcbiIsInZhciBlID0gXCItbXMtXCI7XG52YXIgciA9IFwiLW1vei1cIjtcbnZhciBhID0gXCItd2Via2l0LVwiO1xudmFyIGMgPSBcImNvbW1cIjtcbnZhciBuID0gXCJydWxlXCI7XG52YXIgdCA9IFwiZGVjbFwiO1xudmFyIHMgPSBcIkBwYWdlXCI7XG52YXIgdSA9IFwiQG1lZGlhXCI7XG52YXIgaSA9IFwiQGltcG9ydFwiO1xudmFyIGYgPSBcIkBjaGFyc2V0XCI7XG52YXIgbyA9IFwiQHZpZXdwb3J0XCI7XG52YXIgbCA9IFwiQHN1cHBvcnRzXCI7XG52YXIgdiA9IFwiQGRvY3VtZW50XCI7XG52YXIgaCA9IFwiQG5hbWVzcGFjZVwiO1xudmFyIHAgPSBcIkBrZXlmcmFtZXNcIjtcbnZhciBiID0gXCJAZm9udC1mYWNlXCI7XG52YXIgdyA9IFwiQGNvdW50ZXItc3R5bGVcIjtcbnZhciAkID0gXCJAZm9udC1mZWF0dXJlLXZhbHVlc1wiO1xudmFyIGsgPSBNYXRoLmFicztcbnZhciBkID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbmZ1bmN0aW9uIG0oZTIsIHIyKSB7XG4gIHJldHVybiAoKChyMiA8PCAyIF4geihlMiwgMCkpIDw8IDIgXiB6KGUyLCAxKSkgPDwgMiBeIHooZTIsIDIpKSA8PCAyIF4geihlMiwgMyk7XG59XG5mdW5jdGlvbiBnKGUyKSB7XG4gIHJldHVybiBlMi50cmltKCk7XG59XG5mdW5jdGlvbiB4KGUyLCByMikge1xuICByZXR1cm4gKGUyID0gcjIuZXhlYyhlMikpID8gZTJbMF0gOiBlMjtcbn1cbmZ1bmN0aW9uIHkoZTIsIHIyLCBhMikge1xuICByZXR1cm4gZTIucmVwbGFjZShyMiwgYTIpO1xufVxuZnVuY3Rpb24gaihlMiwgcjIpIHtcbiAgcmV0dXJuIGUyLmluZGV4T2YocjIpO1xufVxuZnVuY3Rpb24geihlMiwgcjIpIHtcbiAgcmV0dXJuIGUyLmNoYXJDb2RlQXQocjIpIHwgMDtcbn1cbmZ1bmN0aW9uIEMoZTIsIHIyLCBhMikge1xuICByZXR1cm4gZTIuc2xpY2UocjIsIGEyKTtcbn1cbmZ1bmN0aW9uIEEoZTIpIHtcbiAgcmV0dXJuIGUyLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIE0oZTIpIHtcbiAgcmV0dXJuIGUyLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIE8oZTIsIHIyKSB7XG4gIHJldHVybiByMi5wdXNoKGUyKSwgZTI7XG59XG5mdW5jdGlvbiBTKGUyLCByMikge1xuICByZXR1cm4gZTIubWFwKHIyKS5qb2luKFwiXCIpO1xufVxudmFyIHEgPSAxO1xudmFyIEIgPSAxO1xudmFyIEQgPSAwO1xudmFyIEUgPSAwO1xudmFyIEYgPSAwO1xudmFyIEcgPSBcIlwiO1xuZnVuY3Rpb24gSChlMiwgcjIsIGEyLCBjMiwgbjIsIHQyLCBzMikge1xuICByZXR1cm4ge3ZhbHVlOiBlMiwgcm9vdDogcjIsIHBhcmVudDogYTIsIHR5cGU6IGMyLCBwcm9wczogbjIsIGNoaWxkcmVuOiB0MiwgbGluZTogcSwgY29sdW1uOiBCLCBsZW5ndGg6IHMyLCByZXR1cm46IFwiXCJ9O1xufVxuZnVuY3Rpb24gSShlMiwgcjIsIGEyKSB7XG4gIHJldHVybiBIKGUyLCByMi5yb290LCByMi5wYXJlbnQsIGEyLCByMi5wcm9wcywgcjIuY2hpbGRyZW4sIDApO1xufVxuZnVuY3Rpb24gSigpIHtcbiAgcmV0dXJuIEY7XG59XG5mdW5jdGlvbiBLKCkge1xuICBGID0gRSA+IDAgPyB6KEcsIC0tRSkgOiAwO1xuICBpZiAoQi0tLCBGID09PSAxMClcbiAgICBCID0gMSwgcS0tO1xuICByZXR1cm4gRjtcbn1cbmZ1bmN0aW9uIEwoKSB7XG4gIEYgPSBFIDwgRCA/IHooRywgRSsrKSA6IDA7XG4gIGlmIChCKyssIEYgPT09IDEwKVxuICAgIEIgPSAxLCBxKys7XG4gIHJldHVybiBGO1xufVxuZnVuY3Rpb24gTigpIHtcbiAgcmV0dXJuIHooRywgRSk7XG59XG5mdW5jdGlvbiBQKCkge1xuICByZXR1cm4gRTtcbn1cbmZ1bmN0aW9uIFEoZTIsIHIyKSB7XG4gIHJldHVybiBDKEcsIGUyLCByMik7XG59XG5mdW5jdGlvbiBSKGUyKSB7XG4gIHN3aXRjaCAoZTIpIHtcbiAgICBjYXNlIDA6XG4gICAgY2FzZSA5OlxuICAgIGNhc2UgMTA6XG4gICAgY2FzZSAxMzpcbiAgICBjYXNlIDMyOlxuICAgICAgcmV0dXJuIDU7XG4gICAgY2FzZSAzMzpcbiAgICBjYXNlIDQzOlxuICAgIGNhc2UgNDQ6XG4gICAgY2FzZSA0NzpcbiAgICBjYXNlIDYyOlxuICAgIGNhc2UgNjQ6XG4gICAgY2FzZSAxMjY6XG4gICAgY2FzZSA1OTpcbiAgICBjYXNlIDEyMzpcbiAgICBjYXNlIDEyNTpcbiAgICAgIHJldHVybiA0O1xuICAgIGNhc2UgNTg6XG4gICAgICByZXR1cm4gMztcbiAgICBjYXNlIDM0OlxuICAgIGNhc2UgMzk6XG4gICAgY2FzZSA0MDpcbiAgICBjYXNlIDkxOlxuICAgICAgcmV0dXJuIDI7XG4gICAgY2FzZSA0MTpcbiAgICBjYXNlIDkzOlxuICAgICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5mdW5jdGlvbiBUKGUyKSB7XG4gIHJldHVybiBxID0gQiA9IDEsIEQgPSBBKEcgPSBlMiksIEUgPSAwLCBbXTtcbn1cbmZ1bmN0aW9uIFUoZTIpIHtcbiAgcmV0dXJuIEcgPSBcIlwiLCBlMjtcbn1cbmZ1bmN0aW9uIFYoZTIpIHtcbiAgcmV0dXJuIGcoUShFIC0gMSwgXyhlMiA9PT0gOTEgPyBlMiArIDIgOiBlMiA9PT0gNDAgPyBlMiArIDEgOiBlMikpKTtcbn1cbmZ1bmN0aW9uIFcoZTIpIHtcbiAgcmV0dXJuIFUoWShUKGUyKSkpO1xufVxuZnVuY3Rpb24gWChlMikge1xuICB3aGlsZSAoRiA9IE4oKSlcbiAgICBpZiAoRiA8IDMzKVxuICAgICAgTCgpO1xuICAgIGVsc2VcbiAgICAgIGJyZWFrO1xuICByZXR1cm4gUihlMikgPiAyIHx8IFIoRikgPiAzID8gXCJcIiA6IFwiIFwiO1xufVxuZnVuY3Rpb24gWShlMikge1xuICB3aGlsZSAoTCgpKVxuICAgIHN3aXRjaCAoUihGKSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBPKHJlKEUgLSAxKSwgZTIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgTyhWKEYpLCBlMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgTyhkKEYpLCBlMik7XG4gICAgfVxuICByZXR1cm4gZTI7XG59XG5mdW5jdGlvbiBaKGUyLCByMikge1xuICB3aGlsZSAoLS1yMiAmJiBMKCkpXG4gICAgaWYgKEYgPCA0OCB8fCBGID4gMTAyIHx8IEYgPiA1NyAmJiBGIDwgNjUgfHwgRiA+IDcwICYmIEYgPCA5NylcbiAgICAgIGJyZWFrO1xuICByZXR1cm4gUShlMiwgUCgpICsgKHIyIDwgNiAmJiBOKCkgPT0gMzIgJiYgTCgpID09IDMyKSk7XG59XG5mdW5jdGlvbiBfKGUyKSB7XG4gIHdoaWxlIChMKCkpXG4gICAgc3dpdGNoIChGKSB7XG4gICAgICBjYXNlIGUyOlxuICAgICAgICByZXR1cm4gRTtcbiAgICAgIGNhc2UgMzQ6XG4gICAgICBjYXNlIDM5OlxuICAgICAgICByZXR1cm4gXyhlMiA9PT0gMzQgfHwgZTIgPT09IDM5ID8gZTIgOiBGKTtcbiAgICAgIGNhc2UgNDA6XG4gICAgICAgIGlmIChlMiA9PT0gNDEpXG4gICAgICAgICAgXyhlMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5MjpcbiAgICAgICAgTCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIHJldHVybiBFO1xufVxuZnVuY3Rpb24gZWUoZTIsIHIyKSB7XG4gIHdoaWxlIChMKCkpXG4gICAgaWYgKGUyICsgRiA9PT0gNDcgKyAxMClcbiAgICAgIGJyZWFrO1xuICAgIGVsc2UgaWYgKGUyICsgRiA9PT0gNDIgKyA0MiAmJiBOKCkgPT09IDQ3KVxuICAgICAgYnJlYWs7XG4gIHJldHVybiBcIi8qXCIgKyBRKHIyLCBFIC0gMSkgKyBcIipcIiArIGQoZTIgPT09IDQ3ID8gZTIgOiBMKCkpO1xufVxuZnVuY3Rpb24gcmUoZTIpIHtcbiAgd2hpbGUgKCFSKE4oKSkpXG4gICAgTCgpO1xuICByZXR1cm4gUShlMiwgRSk7XG59XG5mdW5jdGlvbiBhZShlMikge1xuICByZXR1cm4gVShjZShcIlwiLCBudWxsLCBudWxsLCBudWxsLCBbXCJcIl0sIGUyID0gVChlMiksIDAsIFswXSwgZTIpKTtcbn1cbmZ1bmN0aW9uIGNlKGUyLCByMiwgYTIsIGMyLCBuMiwgdDIsIHMyLCB1MiwgaTIpIHtcbiAgdmFyIGYyID0gMDtcbiAgdmFyIG8yID0gMDtcbiAgdmFyIGwyID0gczI7XG4gIHZhciB2MiA9IDA7XG4gIHZhciBoMiA9IDA7XG4gIHZhciBwMiA9IDA7XG4gIHZhciBiMiA9IDE7XG4gIHZhciB3MiA9IDE7XG4gIHZhciAkMiA9IDE7XG4gIHZhciBrMiA9IDA7XG4gIHZhciBtMiA9IFwiXCI7XG4gIHZhciBnMiA9IG4yO1xuICB2YXIgeDIgPSB0MjtcbiAgdmFyIGoyID0gYzI7XG4gIHZhciB6MiA9IG0yO1xuICB3aGlsZSAodzIpXG4gICAgc3dpdGNoIChwMiA9IGsyLCBrMiA9IEwoKSkge1xuICAgICAgY2FzZSAzNDpcbiAgICAgIGNhc2UgMzk6XG4gICAgICBjYXNlIDkxOlxuICAgICAgY2FzZSA0MDpcbiAgICAgICAgejIgKz0gVihrMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA5OlxuICAgICAgY2FzZSAxMDpcbiAgICAgIGNhc2UgMTM6XG4gICAgICBjYXNlIDMyOlxuICAgICAgICB6MiArPSBYKHAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDkyOlxuICAgICAgICB6MiArPSBaKFAoKSAtIDEsIDcpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIGNhc2UgNDc6XG4gICAgICAgIHN3aXRjaCAoTigpKSB7XG4gICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgTyh0ZShlZShMKCksIFAoKSksIHIyLCBhMiksIGkyKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB6MiArPSBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTIzICogYjI6XG4gICAgICAgIHUyW2YyKytdID0gQSh6MikgKiAkMjtcbiAgICAgIGNhc2UgMTI1ICogYjI6XG4gICAgICBjYXNlIDU5OlxuICAgICAgY2FzZSAwOlxuICAgICAgICBzd2l0Y2ggKGsyKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgdzIgPSAwO1xuICAgICAgICAgIGNhc2UgNTkgKyBvMjpcbiAgICAgICAgICAgIGlmIChoMiA+IDAgJiYgQSh6MikgLSBsMilcbiAgICAgICAgICAgICAgTyhoMiA+IDMyID8gc2UoejIgKyBcIjtcIiwgYzIsIGEyLCBsMiAtIDEpIDogc2UoeSh6MiwgXCIgXCIsIFwiXCIpICsgXCI7XCIsIGMyLCBhMiwgbDIgLSAyKSwgaTIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIHoyICs9IFwiO1wiO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBPKGoyID0gbmUoejIsIHIyLCBhMiwgZjIsIG8yLCBuMiwgdTIsIG0yLCBnMiA9IFtdLCB4MiA9IFtdLCBsMiksIHQyKTtcbiAgICAgICAgICAgIGlmIChrMiA9PT0gMTIzKVxuICAgICAgICAgICAgICBpZiAobzIgPT09IDApXG4gICAgICAgICAgICAgICAgY2UoejIsIHIyLCBqMiwgajIsIGcyLCB0MiwgbDIsIHUyLCB4Mik7XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHYyKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgIGNlKGUyLCBqMiwgajIsIGMyICYmIE8obmUoZTIsIGoyLCBqMiwgMCwgMCwgbjIsIHUyLCBtMiwgbjIsIGcyID0gW10sIGwyKSwgeDIpLCBuMiwgeDIsIGwyLCB1MiwgYzIgPyBnMiA6IHgyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjZSh6MiwgajIsIGoyLCBqMiwgW1wiXCJdLCB4MiwgbDIsIHUyLCB4Mik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGYyID0gbzIgPSBoMiA9IDAsIGIyID0gJDIgPSAxLCBtMiA9IHoyID0gXCJcIiwgbDIgPSBzMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU4OlxuICAgICAgICBsMiA9IDEgKyBBKHoyKSwgaDIgPSBwMjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChiMiA8IDEpIHtcbiAgICAgICAgICBpZiAoazIgPT0gMTIzKVxuICAgICAgICAgICAgLS1iMjtcbiAgICAgICAgICBlbHNlIGlmIChrMiA9PSAxMjUgJiYgYjIrKyA9PSAwICYmIEsoKSA9PSAxMjUpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHoyICs9IGQoazIpLCBrMiAqIGIyKSB7XG4gICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICQyID0gbzIgPiAwID8gMSA6ICh6MiArPSBcIlxcZlwiLCAtMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgdTJbZjIrK10gPSAoQSh6MikgLSAxKSAqICQyLCAkMiA9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgaWYgKE4oKSA9PT0gNDUpXG4gICAgICAgICAgICAgIHoyICs9IFYoTCgpKTtcbiAgICAgICAgICAgIHYyID0gTigpLCBvMiA9IEEobTIgPSB6MiArPSByZShQKCkpKSwgazIrKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICBpZiAocDIgPT09IDQ1ICYmIEEoejIpID09IDIpXG4gICAgICAgICAgICAgIGIyID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgcmV0dXJuIHQyO1xufVxuZnVuY3Rpb24gbmUoZTIsIHIyLCBhMiwgYzIsIHQyLCBzMiwgdTIsIGkyLCBmMiwgbzIsIGwyKSB7XG4gIHZhciB2MiA9IHQyIC0gMTtcbiAgdmFyIGgyID0gdDIgPT09IDAgPyBzMiA6IFtcIlwiXTtcbiAgdmFyIHAyID0gTShoMik7XG4gIGZvciAodmFyIGIyID0gMCwgdzIgPSAwLCAkMiA9IDA7IGIyIDwgYzI7ICsrYjIpXG4gICAgZm9yICh2YXIgZDIgPSAwLCBtMiA9IEMoZTIsIHYyICsgMSwgdjIgPSBrKHcyID0gdTJbYjJdKSksIHgyID0gZTI7IGQyIDwgcDI7ICsrZDIpXG4gICAgICBpZiAoeDIgPSBnKHcyID4gMCA/IGgyW2QyXSArIFwiIFwiICsgbTIgOiB5KG0yLCAvJlxcZi9nLCBoMltkMl0pKSlcbiAgICAgICAgZjJbJDIrK10gPSB4MjtcbiAgcmV0dXJuIEgoZTIsIHIyLCBhMiwgdDIgPT09IDAgPyBuIDogaTIsIGYyLCBvMiwgbDIpO1xufVxuZnVuY3Rpb24gdGUoZTIsIHIyLCBhMikge1xuICByZXR1cm4gSChlMiwgcjIsIGEyLCBjLCBkKEooKSksIEMoZTIsIDIsIC0yKSwgMCk7XG59XG5mdW5jdGlvbiBzZShlMiwgcjIsIGEyLCBjMikge1xuICByZXR1cm4gSChlMiwgcjIsIGEyLCB0LCBDKGUyLCAwLCBjMiksIEMoZTIsIGMyICsgMSwgLTEpLCBjMik7XG59XG5mdW5jdGlvbiB1ZShjMiwgbjIpIHtcbiAgc3dpdGNoIChtKGMyLCBuMikpIHtcbiAgICBjYXNlIDUxMDM6XG4gICAgICByZXR1cm4gYSArIFwicHJpbnQtXCIgKyBjMiArIGMyO1xuICAgIGNhc2UgNTczNzpcbiAgICBjYXNlIDQyMDE6XG4gICAgY2FzZSAzMTc3OlxuICAgIGNhc2UgMzQzMzpcbiAgICBjYXNlIDE2NDE6XG4gICAgY2FzZSA0NDU3OlxuICAgIGNhc2UgMjkyMTpcbiAgICBjYXNlIDU1NzI6XG4gICAgY2FzZSA2MzU2OlxuICAgIGNhc2UgNTg0NDpcbiAgICBjYXNlIDMxOTE6XG4gICAgY2FzZSA2NjQ1OlxuICAgIGNhc2UgMzAwNTpcbiAgICBjYXNlIDYzOTE6XG4gICAgY2FzZSA1ODc5OlxuICAgIGNhc2UgNTYyMzpcbiAgICBjYXNlIDYxMzU6XG4gICAgY2FzZSA0NTk5OlxuICAgIGNhc2UgNDg1NTpcbiAgICBjYXNlIDQyMTU6XG4gICAgY2FzZSA2Mzg5OlxuICAgIGNhc2UgNTEwOTpcbiAgICBjYXNlIDUzNjU6XG4gICAgY2FzZSA1NjIxOlxuICAgIGNhc2UgMzgyOTpcbiAgICAgIHJldHVybiBhICsgYzIgKyBjMjtcbiAgICBjYXNlIDUzNDk6XG4gICAgY2FzZSA0MjQ2OlxuICAgIGNhc2UgNDgxMDpcbiAgICBjYXNlIDY5Njg6XG4gICAgY2FzZSAyNzU2OlxuICAgICAgcmV0dXJuIGEgKyBjMiArIHIgKyBjMiArIGUgKyBjMiArIGMyO1xuICAgIGNhc2UgNjgyODpcbiAgICBjYXNlIDQyNjg6XG4gICAgICByZXR1cm4gYSArIGMyICsgZSArIGMyICsgYzI7XG4gICAgY2FzZSA2MTY1OlxuICAgICAgcmV0dXJuIGEgKyBjMiArIGUgKyBcImZsZXgtXCIgKyBjMiArIGMyO1xuICAgIGNhc2UgNTE4NzpcbiAgICAgIHJldHVybiBhICsgYzIgKyB5KGMyLCAvKFxcdyspLisoOlteXSspLywgYSArIFwiYm94LSQxJDJcIiArIGUgKyBcImZsZXgtJDEkMlwiKSArIGMyO1xuICAgIGNhc2UgNTQ0MzpcbiAgICAgIHJldHVybiBhICsgYzIgKyBlICsgXCJmbGV4LWl0ZW0tXCIgKyB5KGMyLCAvZmxleC18LXNlbGYvLCBcIlwiKSArIGMyO1xuICAgIGNhc2UgNDY3NTpcbiAgICAgIHJldHVybiBhICsgYzIgKyBlICsgXCJmbGV4LWxpbmUtcGFja1wiICsgeShjMiwgL2FsaWduLWNvbnRlbnR8ZmxleC18LXNlbGYvLCBcIlwiKSArIGMyO1xuICAgIGNhc2UgNTU0ODpcbiAgICAgIHJldHVybiBhICsgYzIgKyBlICsgeShjMiwgXCJzaHJpbmtcIiwgXCJuZWdhdGl2ZVwiKSArIGMyO1xuICAgIGNhc2UgNTI5MjpcbiAgICAgIHJldHVybiBhICsgYzIgKyBlICsgeShjMiwgXCJiYXNpc1wiLCBcInByZWZlcnJlZC1zaXplXCIpICsgYzI7XG4gICAgY2FzZSA2MDYwOlxuICAgICAgcmV0dXJuIGEgKyBcImJveC1cIiArIHkoYzIsIFwiLWdyb3dcIiwgXCJcIikgKyBhICsgYzIgKyBlICsgeShjMiwgXCJncm93XCIsIFwicG9zaXRpdmVcIikgKyBjMjtcbiAgICBjYXNlIDQ1NTQ6XG4gICAgICByZXR1cm4gYSArIHkoYzIsIC8oW14tXSkodHJhbnNmb3JtKS9nLCBcIiQxXCIgKyBhICsgXCIkMlwiKSArIGMyO1xuICAgIGNhc2UgNjE4NzpcbiAgICAgIHJldHVybiB5KHkoeShjMiwgLyh6b29tLXxncmFiKS8sIGEgKyBcIiQxXCIpLCAvKGltYWdlLXNldCkvLCBhICsgXCIkMVwiKSwgYzIsIFwiXCIpICsgYzI7XG4gICAgY2FzZSA1NDk1OlxuICAgIGNhc2UgMzk1OTpcbiAgICAgIHJldHVybiB5KGMyLCAvKGltYWdlLXNldFxcKFteXSopLywgYSArIFwiJDEkYCQxXCIpO1xuICAgIGNhc2UgNDk2ODpcbiAgICAgIHJldHVybiB5KHkoYzIsIC8oLis6KShmbGV4LSk/KC4qKS8sIGEgKyBcImJveC1wYWNrOiQzXCIgKyBlICsgXCJmbGV4LXBhY2s6JDNcIiksIC9zListYlteO10rLywgXCJqdXN0aWZ5XCIpICsgYSArIGMyICsgYzI7XG4gICAgY2FzZSA0MDk1OlxuICAgIGNhc2UgMzU4MzpcbiAgICBjYXNlIDQwNjg6XG4gICAgY2FzZSAyNTMyOlxuICAgICAgcmV0dXJuIHkoYzIsIC8oLispLWlubGluZSguKykvLCBhICsgXCIkMSQyXCIpICsgYzI7XG4gICAgY2FzZSA4MTE2OlxuICAgIGNhc2UgNzA1OTpcbiAgICBjYXNlIDU3NTM6XG4gICAgY2FzZSA1NTM1OlxuICAgIGNhc2UgNTQ0NTpcbiAgICBjYXNlIDU3MDE6XG4gICAgY2FzZSA0OTMzOlxuICAgIGNhc2UgNDY3NzpcbiAgICBjYXNlIDU1MzM6XG4gICAgY2FzZSA1Nzg5OlxuICAgIGNhc2UgNTAyMTpcbiAgICBjYXNlIDQ3NjU6XG4gICAgICBpZiAoQShjMikgLSAxIC0gbjIgPiA2KVxuICAgICAgICBzd2l0Y2ggKHooYzIsIG4yICsgMSkpIHtcbiAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgIGlmICh6KGMyLCBuMiArIDQpICE9PSA0NSlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICByZXR1cm4geShjMiwgLyguKzopKC4rKS0oW15dKykvLCBcIiQxXCIgKyBhICsgXCIkMi0kMyQxXCIgKyByICsgKHooYzIsIG4yICsgMykgPT0gMTA4ID8gXCIkM1wiIDogXCIkMi0kM1wiKSkgKyBjMjtcbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiB+aihjMiwgXCJzdHJldGNoXCIpID8gdWUoeShjMiwgXCJzdHJldGNoXCIsIFwiZmlsbC1hdmFpbGFibGVcIiksIG4yKSArIGMyIDogYzI7XG4gICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDk0OTpcbiAgICAgIGlmICh6KGMyLCBuMiArIDEpICE9PSAxMTUpXG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjQ0NDpcbiAgICAgIHN3aXRjaCAoeihjMiwgQShjMikgLSAzIC0gKH5qKGMyLCBcIiFpbXBvcnRhbnRcIikgJiYgMTApKSkge1xuICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICByZXR1cm4geShjMiwgXCI6XCIsIFwiOlwiICsgYSkgKyBjMjtcbiAgICAgICAgY2FzZSAxMDE6XG4gICAgICAgICAgcmV0dXJuIHkoYzIsIC8oLis6KShbXjshXSspKDt8IS4rKT8vLCBcIiQxXCIgKyBhICsgKHooYzIsIDE0KSA9PT0gNDUgPyBcImlubGluZS1cIiA6IFwiXCIpICsgXCJib3gkMyQxXCIgKyBhICsgXCIkMiQzJDFcIiArIGUgKyBcIiQyYm94JDNcIikgKyBjMjtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTkzNjpcbiAgICAgIHN3aXRjaCAoeihjMiwgbjIgKyAxMSkpIHtcbiAgICAgICAgY2FzZSAxMTQ6XG4gICAgICAgICAgcmV0dXJuIGEgKyBjMiArIGUgKyB5KGMyLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sIFwidGJcIikgKyBjMjtcbiAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgcmV0dXJuIGEgKyBjMiArIGUgKyB5KGMyLCAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sIFwidGItcmxcIikgKyBjMjtcbiAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICByZXR1cm4gYSArIGMyICsgZSArIHkoYzIsIC9bc3ZoXVxcdystW3RibHJdezJ9LywgXCJsclwiKSArIGMyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGEgKyBjMiArIGUgKyBjMiArIGMyO1xuICB9XG4gIHJldHVybiBjMjtcbn1cbmZ1bmN0aW9uIGllKGUyLCByMikge1xuICB2YXIgYTIgPSBcIlwiO1xuICB2YXIgYzIgPSBNKGUyKTtcbiAgZm9yICh2YXIgbjIgPSAwOyBuMiA8IGMyOyBuMisrKVxuICAgIGEyICs9IHIyKGUyW24yXSwgbjIsIGUyLCByMikgfHwgXCJcIjtcbiAgcmV0dXJuIGEyO1xufVxuZnVuY3Rpb24gZmUoZTIsIHIyLCBhMiwgczIpIHtcbiAgc3dpdGNoIChlMi50eXBlKSB7XG4gICAgY2FzZSBpOlxuICAgIGNhc2UgdDpcbiAgICAgIHJldHVybiBlMi5yZXR1cm4gPSBlMi5yZXR1cm4gfHwgZTIudmFsdWU7XG4gICAgY2FzZSBjOlxuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgY2FzZSBuOlxuICAgICAgZTIudmFsdWUgPSBlMi5wcm9wcy5qb2luKFwiLFwiKTtcbiAgfVxuICByZXR1cm4gQShhMiA9IGllKGUyLmNoaWxkcmVuLCBzMikpID8gZTIucmV0dXJuID0gZTIudmFsdWUgKyBcIntcIiArIGEyICsgXCJ9XCIgOiBcIlwiO1xufVxuZnVuY3Rpb24gb2UoZTIpIHtcbiAgdmFyIHIyID0gTShlMik7XG4gIHJldHVybiBmdW5jdGlvbihhMiwgYzIsIG4yLCB0Mikge1xuICAgIHZhciBzMiA9IFwiXCI7XG4gICAgZm9yICh2YXIgdTIgPSAwOyB1MiA8IHIyOyB1MisrKVxuICAgICAgczIgKz0gZTJbdTJdKGEyLCBjMiwgbjIsIHQyKSB8fCBcIlwiO1xuICAgIHJldHVybiBzMjtcbiAgfTtcbn1cbmZ1bmN0aW9uIGxlKGUyKSB7XG4gIHJldHVybiBmdW5jdGlvbihyMikge1xuICAgIGlmICghcjIucm9vdCkge1xuICAgICAgaWYgKHIyID0gcjIucmV0dXJuKVxuICAgICAgICBlMihyMik7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gdmUoYzIsIHMyLCB1MiwgaTIpIHtcbiAgaWYgKCFjMi5yZXR1cm4pXG4gICAgc3dpdGNoIChjMi50eXBlKSB7XG4gICAgICBjYXNlIHQ6XG4gICAgICAgIGMyLnJldHVybiA9IHVlKGMyLnZhbHVlLCBjMi5sZW5ndGgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgcDpcbiAgICAgICAgcmV0dXJuIGllKFtJKHkoYzIudmFsdWUsIFwiQFwiLCBcIkBcIiArIGEpLCBjMiwgXCJcIildLCBpMik7XG4gICAgICBjYXNlIG46XG4gICAgICAgIGlmIChjMi5sZW5ndGgpXG4gICAgICAgICAgcmV0dXJuIFMoYzIucHJvcHMsIGZ1bmN0aW9uKG4yKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHgobjIsIC8oOjpwbGFjXFx3K3w6cmVhZC1cXHcrKS8pKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCI6cmVhZC1vbmx5XCI6XG4gICAgICAgICAgICAgIGNhc2UgXCI6cmVhZC13cml0ZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBpZShbSSh5KG4yLCAvOihyZWFkLVxcdyspLywgXCI6XCIgKyByICsgXCIkMVwiKSwgYzIsIFwiXCIpXSwgaTIpO1xuICAgICAgICAgICAgICBjYXNlIFwiOjpwbGFjZWhvbGRlclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBpZShbSSh5KG4yLCAvOihwbGFjXFx3KykvLCBcIjpcIiArIGEgKyBcImlucHV0LSQxXCIpLCBjMiwgXCJcIiksIEkoeShuMiwgLzoocGxhY1xcdyspLywgXCI6XCIgKyByICsgXCIkMVwiKSwgYzIsIFwiXCIpLCBJKHkobjIsIC86KHBsYWNcXHcrKS8sIGUgKyBcImlucHV0LSQxXCIpLCBjMiwgXCJcIildLCBpMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICB9KTtcbiAgICB9XG59XG5mdW5jdGlvbiBoZShlMikge1xuICBzd2l0Y2ggKGUyLnR5cGUpIHtcbiAgICBjYXNlIG46XG4gICAgICBlMi5wcm9wcyA9IGUyLnByb3BzLm1hcChmdW5jdGlvbihyMikge1xuICAgICAgICByZXR1cm4gUyhXKHIyKSwgZnVuY3Rpb24ocjMsIGEyLCBjMikge1xuICAgICAgICAgIHN3aXRjaCAoeihyMywgMCkpIHtcbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIHJldHVybiBDKHIzLCAxLCBBKHIzKSk7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgY2FzZSA0MzpcbiAgICAgICAgICAgIGNhc2UgNjI6XG4gICAgICAgICAgICBjYXNlIDEyNjpcbiAgICAgICAgICAgICAgcmV0dXJuIHIzO1xuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgaWYgKGMyWysrYTJdID09PSBcImdsb2JhbFwiKVxuICAgICAgICAgICAgICAgIGMyW2EyXSA9IFwiXCIsIGMyWysrYTJdID0gXCJcXGZcIiArIEMoYzJbYTJdLCBhMiA9IDEsIC0xKTtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIHJldHVybiBhMiA9PT0gMSA/IFwiXCIgOiByMztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHN3aXRjaCAoYTIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBlMiA9IHIzO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIE0oYzIpID4gMSA/IFwiXCIgOiByMztcbiAgICAgICAgICAgICAgICBjYXNlIChhMiA9IE0oYzIpIC0gMSk6XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGEyID09PSAyID8gcjMgKyBlMiArIGUyIDogcjMgKyBlMjtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHIzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG5leHBvcnQge2YgYXMgQ0hBUlNFVCwgYyBhcyBDT01NRU5ULCB3IGFzIENPVU5URVJfU1RZTEUsIHQgYXMgREVDTEFSQVRJT04sIHYgYXMgRE9DVU1FTlQsIGIgYXMgRk9OVF9GQUNFLCAkIGFzIEZPTlRfRkVBVFVSRV9WQUxVRVMsIGkgYXMgSU1QT1JULCBwIGFzIEtFWUZSQU1FUywgdSBhcyBNRURJQSwgciBhcyBNT1osIGUgYXMgTVMsIGggYXMgTkFNRVNQQUNFLCBzIGFzIFBBR0UsIG4gYXMgUlVMRVNFVCwgbCBhcyBTVVBQT1JUUywgbyBhcyBWSUVXUE9SVCwgYSBhcyBXRUJLSVQsIGsgYXMgYWJzLCBUIGFzIGFsbG9jLCBPIGFzIGFwcGVuZCwgUCBhcyBjYXJldCwgSiBhcyBjaGFyLCBGIGFzIGNoYXJhY3RlciwgRyBhcyBjaGFyYWN0ZXJzLCB6IGFzIGNoYXJhdCwgQiBhcyBjb2x1bW4sIFMgYXMgY29tYmluZSwgdGUgYXMgY29tbWVudCwgZWUgYXMgY29tbWVudGVyLCBhZSBhcyBjb21waWxlLCBJIGFzIGNvcHksIFUgYXMgZGVhbGxvYywgc2UgYXMgZGVjbGFyYXRpb24sIFYgYXMgZGVsaW1pdCwgXyBhcyBkZWxpbWl0ZXIsIFogYXMgZXNjYXBpbmcsIGQgYXMgZnJvbSwgbSBhcyBoYXNoLCByZSBhcyBpZGVudGlmaWVyLCBqIGFzIGluZGV4b2YsIEQgYXMgbGVuZ3RoLCBxIGFzIGxpbmUsIHggYXMgbWF0Y2gsIG9lIGFzIG1pZGRsZXdhcmUsIGhlIGFzIG5hbWVzcGFjZSwgTCBhcyBuZXh0LCBIIGFzIG5vZGUsIGNlIGFzIHBhcnNlLCBOIGFzIHBlZWssIEUgYXMgcG9zaXRpb24sIHVlIGFzIHByZWZpeCwgdmUgYXMgcHJlZml4ZXIsIEsgYXMgcHJldiwgeSBhcyByZXBsYWNlLCBuZSBhcyBydWxlc2V0LCBsZSBhcyBydWxlc2hlZXQsIGllIGFzIHNlcmlhbGl6ZSwgTSBhcyBzaXplb2YsIFEgYXMgc2xpY2UsIGZlIGFzIHN0cmluZ2lmeSwgQSBhcyBzdHJsZW4sIEMgYXMgc3Vic3RyLCBSIGFzIHRva2VuLCBXIGFzIHRva2VuaXplLCBZIGFzIHRva2VuaXplciwgZyBhcyB0cmltLCBYIGFzIHdoaXRlc3BhY2V9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxld29nSUNKMlpYSnphVzl1SWpvZ015d0tJQ0FpYzI5MWNtTmxjeUk2SUZzaUwxVnpaWEp6TDJGdWFIUnlZVzVrWVdNdlVISnZhbVZqZEhNdlpuSmxaRjlqYjNWdWRISnBaWE5mY0dGblpTOXViMlJsWDIxdlpIVnNaWE12YzNSNWJHbHpMMlJwYzNRdmMzUjViR2x6TG0xcWN5SmRMQW9nSUNKdFlYQndhVzVuY3lJNklDSkJRVUZCTEVsQlFVa3NTVUZCUlR0QlFVRlBMRWxCUVVrc1NVRkJSVHRCUVVGUkxFbEJRVWtzU1VGQlJUdEJRVUZYTEVsQlFVa3NTVUZCUlR0QlFVRlBMRWxCUVVrc1NVRkJSVHRCUVVGUExFbEJRVWtzU1VGQlJUdEJRVUZQTEVsQlFVa3NTVUZCUlR0QlFVRlJMRWxCUVVrc1NVRkJSVHRCUVVGVExFbEJRVWtzU1VGQlJUdEJRVUZWTEVsQlFVa3NTVUZCUlR0QlFVRlhMRWxCUVVrc1NVRkJSVHRCUVVGWkxFbEJRVWtzU1VGQlJUdEJRVUZaTEVsQlFVa3NTVUZCUlR0QlFVRlpMRWxCUVVrc1NVRkJSVHRCUVVGaExFbEJRVWtzU1VGQlJUdEJRVUZoTEVsQlFVa3NTVUZCUlR0QlFVRmhMRWxCUVVrc1NVRkJSVHRCUVVGcFFpeEpRVUZKTEVsQlFVVTdRVUZCZFVJc1NVRkJTU3hKUVVGRkxFdEJRVXM3UVVGQlNTeEpRVUZKTEVsQlFVVXNUMEZCVHp0QlFVRmhMRmRCUVZjc1NVRkJSU3hKUVVGRk8wRkJRVU1zVTBGQlV5eFRRVUZITEVsQlFVVXNSVUZCUlN4SlFVRkZMRTlCUVVzc1NVRkJSU3hGUVVGRkxFbEJRVVVzVDBGQlN5eEpRVUZGTEVWQlFVVXNTVUZCUlN4UFFVRkxMRWxCUVVVc1JVRkJSU3hKUVVGRk8wRkJRVUU3UVVGQlJ5eFhRVUZYTEVsQlFVVTdRVUZCUXl4VFFVRlBMRWRCUVVVN1FVRkJRVHRCUVVGUExGZEJRVmNzU1VGQlJTeEpRVUZGTzBGQlFVTXNVMEZCVHl4TlFVRkZMRWRCUVVVc1MwRkJTeXhQUVVGSkxFZEJRVVVzUzBGQlJ6dEJRVUZCTzBGQlFVVXNWMEZCVnl4SlFVRkZMRWxCUVVVc1NVRkJSVHRCUVVGRExGTkJRVThzUjBGQlJTeFJRVUZSTEVsQlFVVTdRVUZCUVR0QlFVRkhMRmRCUVZjc1NVRkJSU3hKUVVGRk8wRkJRVU1zVTBGQlR5eEhRVUZGTEZGQlFWRTdRVUZCUVR0QlFVRkhMRmRCUVZjc1NVRkJSU3hKUVVGRk8wRkJRVU1zVTBGQlR5eEhRVUZGTEZkQlFWY3NUVUZCUnp0QlFVRkJPMEZCUVVVc1YwRkJWeXhKUVVGRkxFbEJRVVVzU1VGQlJUdEJRVUZETEZOQlFVOHNSMEZCUlN4TlFVRk5MRWxCUVVVN1FVRkJRVHRCUVVGSExGZEJRVmNzU1VGQlJUdEJRVUZETEZOQlFVOHNSMEZCUlR0QlFVRkJPMEZCUVU4c1YwRkJWeXhKUVVGRk8wRkJRVU1zVTBGQlR5eEhRVUZGTzBGQlFVRTdRVUZCVHl4WFFVRlhMRWxCUVVVc1NVRkJSVHRCUVVGRExGTkJRVThzUjBGQlJTeExRVUZMTEV0QlFVYzdRVUZCUVR0QlFVRkZMRmRCUVZjc1NVRkJSU3hKUVVGRk8wRkJRVU1zVTBGQlR5eEhRVUZGTEVsQlFVa3NTVUZCUnl4TFFVRkxPMEZCUVVFN1FVRkJTU3hKUVVGSkxFbEJRVVU3UVVGQlJTeEpRVUZKTEVsQlFVVTdRVUZCUlN4SlFVRkpMRWxCUVVVN1FVRkJSU3hKUVVGSkxFbEJRVVU3UVVGQlJTeEpRVUZKTEVsQlFVVTdRVUZCUlN4SlFVRkpMRWxCUVVVN1FVRkJSeXhYUVVGWExFbEJRVVVzU1VGQlJTeEpRVUZGTEVsQlFVVXNTVUZCUlN4SlFVRkZMRWxCUVVVN1FVRkJReXhUUVVGTkxFTkJRVU1zVDBGQlRTeEpRVUZGTEUxQlFVc3NTVUZCUlN4UlFVRlBMRWxCUVVVc1RVRkJTeXhKUVVGRkxFOUJRVTBzU1VGQlJTeFZRVUZUTEVsQlFVVXNUVUZCU3l4SFFVRkZMRkZCUVU4c1IwRkJSU3hSUVVGUExFbEJRVVVzVVVGQlR6dEJRVUZCTzBGQlFVa3NWMEZCVnl4SlFVRkZMRWxCUVVVc1NVRkJSVHRCUVVGRExGTkJRVThzUlVGQlJTeEpRVUZGTEVkQlFVVXNUVUZCU3l4SFFVRkZMRkZCUVU4c1NVRkJSU3hIUVVGRkxFOUJRVTBzUjBGQlJTeFZRVUZUTzBGQlFVRTdRVUZCUnl4aFFVRlpPMEZCUVVNc1UwRkJUenRCUVVGQk8wRkJRVVVzWVVGQldUdEJRVUZETEUxQlFVVXNTVUZCUlN4SlFVRkZMRVZCUVVVc1IwRkJSU3hGUVVGRkxFdEJRVWM3UVVGQlJTeE5RVUZITEV0QlFVa3NUVUZCU1R0QlFVRkhMRkZCUVVVc1IwRkJSVHRCUVVGSkxGTkJRVTg3UVVGQlFUdEJRVUZGTEdGQlFWazdRVUZCUXl4TlFVRkZMRWxCUVVVc1NVRkJSU3hGUVVGRkxFZEJRVVVzVDBGQlN6dEJRVUZGTEUxQlFVY3NTMEZCU1N4TlFVRkpPMEZCUVVjc1VVRkJSU3hIUVVGRk8wRkJRVWtzVTBGQlR6dEJRVUZCTzBGQlFVVXNZVUZCV1R0QlFVRkRMRk5CUVU4c1JVRkJSU3hIUVVGRk8wRkJRVUU3UVVGQlJ5eGhRVUZaTzBGQlFVTXNVMEZCVHp0QlFVRkJPMEZCUVVVc1YwRkJWeXhKUVVGRkxFbEJRVVU3UVVGQlF5eFRRVUZQTEVWQlFVVXNSMEZCUlN4SlFVRkZPMEZCUVVFN1FVRkJSeXhYUVVGWExFbEJRVVU3UVVGQlF5eFZRVUZQTzBGQlFVRXNVMEZCVVR0QlFVRkJMRk5CUVU4N1FVRkJRU3hUUVVGUE8wRkJRVUVzVTBGQlVUdEJRVUZCTEZOQlFWRTdRVUZCUnl4aFFVRlBPMEZCUVVFc1UwRkJUenRCUVVGQkxGTkJRVkU3UVVGQlFTeFRRVUZSTzBGQlFVRXNVMEZCVVR0QlFVRkJMRk5CUVZFN1FVRkJRU3hUUVVGUk8wRkJRVUVzVTBGQlVUdEJRVUZCTEZOQlFWTTdRVUZCUVN4VFFVRlJPMEZCUVVFc1UwRkJVenRCUVVGSkxHRkJRVTg3UVVGQlFTeFRRVUZQTzBGQlFVY3NZVUZCVHp0QlFVRkJMRk5CUVU4N1FVRkJRU3hUUVVGUk8wRkJRVUVzVTBGQlVUdEJRVUZCTEZOQlFWRTdRVUZCUnl4aFFVRlBPMEZCUVVFc1UwRkJUenRCUVVGQkxGTkJRVkU3UVVGQlJ5eGhRVUZQTzBGQlFVRTdRVUZCUlN4VFFVRlBPMEZCUVVFN1FVRkJSU3hYUVVGWExFbEJRVVU3UVVGQlF5eFRRVUZQTEVsQlFVVXNTVUZCUlN4SFFVRkZMRWxCUVVVc1JVRkJSU3hKUVVGRkxFdEJRVWNzU1VGQlJTeEhRVUZGTzBGQlFVRTdRVUZCUnl4WFFVRlhMRWxCUVVVN1FVRkJReXhUUVVGUExFbEJRVVVzU1VGQlJ6dEJRVUZCTzBGQlFVVXNWMEZCVnl4SlFVRkZPMEZCUVVNc1UwRkJUeXhGUVVGRkxFVkJRVVVzU1VGQlJTeEhRVUZGTEVWQlFVVXNUMEZCU1N4TFFVRkhMRXRCUVVVc1NVRkJSU3hQUVVGSkxFdEJRVWNzUzBGQlJTeEpRVUZGTzBGQlFVRTdRVUZCU3l4WFFVRlhMRWxCUVVVN1FVRkJReXhUUVVGUExFVkJRVVVzUlVGQlJTeEZRVUZGTzBGQlFVRTdRVUZCU3l4WFFVRlhMRWxCUVVVN1FVRkJReXhUUVVGTkxFbEJRVVU3UVVGQlNTeFJRVUZITEVsQlFVVTdRVUZCUnp0QlFVRkJPMEZCUVZNN1FVRkJUU3hUUVVGUExFVkJRVVVzVFVGQlJ5eExRVUZITEVWQlFVVXNTMEZCUnl4SlFVRkZMRXRCUVVjN1FVRkJRVHRCUVVGSkxGZEJRVmNzU1VGQlJUdEJRVUZETEZOQlFVMDdRVUZCU1N4WlFVRlBMRVZCUVVVN1FVRkJRU3hYUVVGVE8wRkJRVVVzVlVGQlJTeEhRVUZITEVsQlFVVXNTVUZCUnp0QlFVRkhPMEZCUVVFc1YwRkJWenRCUVVGRkxGVkJRVVVzUlVGQlJTeEpRVUZITzBGQlFVYzdRVUZCUVR0QlFVRmpMRlZCUVVVc1JVRkJSU3hKUVVGSE8wRkJRVUU3UVVGQlJ5eFRRVUZQTzBGQlFVRTdRVUZCUlN4WFFVRlhMRWxCUVVVc1NVRkJSVHRCUVVGRExGTkJRVTBzUlVGQlJTeE5RVUZITzBGQlFVa3NVVUZCUnl4SlFVRkZMRTFCUVVrc1NVRkJSU3hQUVVGTExFbEJRVVVzVFVGQlNTeEpRVUZGTEUxQlFVa3NTVUZCUlN4TlFVRkpMRWxCUVVVN1FVRkJSenRCUVVGTkxGTkJRVThzUlVGQlJTeEpRVUZGTEUxQlFVc3NUVUZCUlN4TFFVRkhMRTlCUVVzc1RVRkJTU3hQUVVGTE8wRkJRVUU3UVVGQlN5eFhRVUZYTEVsQlFVVTdRVUZCUXl4VFFVRk5PMEZCUVVrc1dVRkJUenRCUVVGQkxGZEJRVkU3UVVGQlJTeGxRVUZQTzBGQlFVRXNWMEZCVHp0QlFVRkJMRmRCUVZFN1FVRkJSeXhsUVVGUExFVkJRVVVzVDBGQlNTeE5RVUZKTEU5QlFVa3NTMEZCUnl4TFFVRkZPMEZCUVVFc1YwRkJVVHRCUVVGSExGbEJRVWNzVDBGQlNUdEJRVUZITEZsQlFVVTdRVUZCUnp0QlFVRkJMRmRCUVZjN1FVRkJSenRCUVVGSk8wRkJRVUU3UVVGQlRTeFRRVUZQTzBGQlFVRTdRVUZCUlN4WlFVRlpMRWxCUVVVc1NVRkJSVHRCUVVGRExGTkJRVTA3UVVGQlNTeFJRVUZITEV0QlFVVXNUVUZCU1N4TFFVRkhPMEZCUVVjN1FVRkJRU3hoUVVGakxFdEJRVVVzVFVGQlNTeExRVUZITEUxQlFVa3NVVUZCVFR0QlFVRkhPMEZCUVUwc1UwRkJUU3hQUVVGTExFVkJRVVVzU1VGQlJTeEpRVUZGTEV0QlFVY3NUVUZCU1N4RlFVRkZMRTlCUVVrc1MwRkJSeXhMUVVGRk8wRkJRVUU3UVVGQlN5eFpRVUZaTEVsQlFVVTdRVUZCUXl4VFFVRk5MRU5CUVVNc1JVRkJSVHRCUVVGTE8wRkJRVWtzVTBGQlR5eEZRVUZGTEVsQlFVVTdRVUZCUVR0QlFVRkhMRmxCUVZrc1NVRkJSVHRCUVVGRExGTkJRVThzUlVGQlJTeEhRVUZITEVsQlFVY3NUVUZCU3l4TlFVRkxMRTFCUVVzc1EwRkJReXhMUVVGSkxFdEJRVVVzUlVGQlJTeExRVUZITEVkQlFVVXNRMEZCUXl4SlFVRkhPMEZCUVVFN1FVRkJTU3haUVVGWkxFbEJRVVVzU1VGQlJTeEpRVUZGTEVsQlFVVXNTVUZCUlN4SlFVRkZMRWxCUVVVc1NVRkJSU3hKUVVGRk8wRkJRVU1zVFVGQlNTeExRVUZGTzBGQlFVVXNUVUZCU1N4TFFVRkZPMEZCUVVVc1RVRkJTU3hMUVVGRk8wRkJRVVVzVFVGQlNTeExRVUZGTzBGQlFVVXNUVUZCU1N4TFFVRkZPMEZCUVVVc1RVRkJTU3hMUVVGRk8wRkJRVVVzVFVGQlNTeExRVUZGTzBGQlFVVXNUVUZCU1N4TFFVRkZPMEZCUVVVc1RVRkJTU3hMUVVGRk8wRkJRVVVzVFVGQlNTeExRVUZGTzBGQlFVVXNUVUZCU1N4TFFVRkZPMEZCUVVjc1RVRkJTU3hMUVVGRk8wRkJRVVVzVFVGQlNTeExRVUZGTzBGQlFVVXNUVUZCU1N4TFFVRkZPMEZCUVVVc1RVRkJTU3hMUVVGRk8wRkJRVVVzVTBGQlRUdEJRVUZGTEZsQlFVOHNTMEZCUlN4SlFVRkZMRXRCUVVVN1FVRkJRU3hYUVVGVk8wRkJRVUVzVjBGQlVUdEJRVUZCTEZkQlFWRTdRVUZCUVN4WFFVRlJPMEZCUVVjc1kwRkJSeXhGUVVGRk8wRkJRVWM3UVVGQlFTeFhRVUZYTzBGQlFVRXNWMEZCVHp0QlFVRkJMRmRCUVZFN1FVRkJRU3hYUVVGUk8wRkJRVWNzWTBGQlJ5eEZRVUZGTzBGQlFVYzdRVUZCUVN4WFFVRlhPMEZCUVVjc1kwRkJSeXhGUVVGRkxFMUJRVWtzUjBGQlJUdEJRVUZITzBGQlFVRXNWMEZCWXp0QlFVRkhMR2RDUVVGUE8wRkJRVUVzWlVGQlZUdEJRVUZCTEdWQlFWRTdRVUZCUnl4alFVRkZMRWRCUVVjc1IwRkJSeXhMUVVGSkxFMUJRVXNzU1VGQlJTeExRVUZITzBGQlFVYzdRVUZCUVR0QlFVRmpMR3RDUVVGSE8wRkJRVUU3UVVGQlNUdEJRVUZCTEZkQlFWY3NUVUZCU1R0QlFVRkZMRmRCUVVVc1VVRkJTeXhGUVVGRkxFMUJRVWM3UVVGQlFTeFhRVUZQTEUxQlFVazdRVUZCUVN4WFFVRlBPMEZCUVVFc1YwRkJVVHRCUVVGRkxHZENRVUZQTzBGQlFVRXNaVUZCVVR0QlFVRkJMR1ZCUVU4N1FVRkJTU3hwUWtGQlJUdEJRVUZCTEdWQlFVOHNTMEZCUnp0QlFVRkZMR2RDUVVGSExFdEJRVVVzUzBGQlJ5eEZRVUZGTEUxQlFVYzdRVUZCUlN4blFrRkJSU3hMUVVGRkxFdEJRVWNzUjBGQlJ5eExRVUZGTEV0QlFVa3NTVUZCUlN4SlFVRkZMRXRCUVVVc1MwRkJSeXhIUVVGSExFVkJRVVVzU1VGQlJTeExRVUZKTEUxQlFVa3NTMEZCU1N4SlFVRkZMRWxCUVVVc1MwRkJSU3hKUVVGSE8wRkJRVWM3UVVGQlFTeGxRVUZYTzBGQlFVY3NhMEpCUVVjN1FVRkJRVHRCUVVGWkxHTkJRVVVzUzBGQlJTeEhRVUZITEVsQlFVVXNTVUZCUlN4SlFVRkZMRWxCUVVVc1NVRkJSU3hKUVVGRkxFbEJRVVVzU1VGQlJTeExRVUZGTEVsQlFVY3NTMEZCUlN4SlFVRkhMRXRCUVVjN1FVRkJSeXhuUWtGQlJ5eFBRVUZKTzBGQlFVa3NhMEpCUVVjc1QwRkJTVHRCUVVGRkxHMUNRVUZITEVsQlFVVXNTVUZCUlN4SlFVRkZMRWxCUVVVc1NVRkJSU3hKUVVGRkxFbEJRVVVzU1VGQlJUdEJRVUZCTzBGQlFWRXNkMEpCUVU4N1FVRkJRU3gxUWtGQlVUdEJRVUZCTEhWQ1FVRlRPMEZCUVVFc2RVSkJRVk03UVVGQlNTeDFRa0ZCUnl4SlFVRkZMRWxCUVVVc1NVRkJSU3hOUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZGTEVsQlFVVXNTVUZCUlN4SFFVRkZMRWRCUVVVc1NVRkJSU3hKUVVGRkxFbEJRVVVzU1VGQlJTeExRVUZGTEVsQlFVY3NTMEZCUnl4TFFVRkhMRWxCUVVVc1NVRkJSU3hKUVVGRkxFbEJRVVVzUzBGQlJTeExRVUZGTzBGQlFVYzdRVUZCUVR0QlFVRmpMSFZDUVVGSExFbEJRVVVzU1VGQlJTeEpRVUZGTEVsQlFVVXNRMEZCUXl4TFFVRkpMRWxCUVVVc1NVRkJSU3hKUVVGRk8wRkJRVUU3UVVGQlFUdEJRVUZKTEdGQlFVVXNTMEZCUlN4TFFVRkZMRWRCUVVVc1MwRkJSU3hMUVVGRkxFZEJRVVVzUzBGQlJTeExRVUZGTEVsQlFVY3NTMEZCUlR0QlFVRkZPMEZCUVVFc1YwRkJWenRCUVVGSExHRkJRVVVzU1VGQlJTeEZRVUZGTEV0QlFVY3NTMEZCUlR0QlFVRkJPMEZCUVZVc1dVRkJSeXhMUVVGRk8wRkJRVVVzWTBGQlJ5eE5RVUZITzBGQlFVa3NZMEZCUlR0QlFVRkJMRzFDUVVGVkxFMUJRVWNzVDBGQlN5eFJRVUZMTEV0QlFVY3NUMEZCU3p0QlFVRkpPMEZCUVVFN1FVRkJVeXhuUWtGQlR5eE5RVUZITEVWQlFVVXNTMEZCUnl4TFFVRkZPMEZCUVVFc1pVRkJVVHRCUVVGSExHbENRVUZGTEV0QlFVVXNTVUZCUlN4SlFVRkhMRTlCUVVjc1RVRkJTenRCUVVGSk8wRkJRVUVzWlVGQlZ6dEJRVUZITEdWQlFVVXNVVUZCVFN4SFFVRkZMRTFCUVVjc1MwRkJSeXhKUVVGRkxFdEJRVVU3UVVGQlJUdEJRVUZCTEdWQlFWYzdRVUZCUnl4blFrRkJSeXhSUVVGTk8wRkJRVWNzYjBKQlFVY3NSVUZCUlR0QlFVRkxMR2xDUVVGRkxFdEJRVWtzUzBGQlJTeEZRVUZGTEV0QlFVVXNUVUZCUnl4SFFVRkhMRTlCUVUwN1FVRkJTVHRCUVVGQkxHVkJRVmM3UVVGQlJ5eG5Ra0ZCUnl4UFFVRkpMRTFCUVVrc1JVRkJSU3hQUVVGSk8wRkJRVVVzYlVKQlFVVTdRVUZCUVR0QlFVRkJPMEZCUVVjc1UwRkJUenRCUVVGQk8wRkJRVVVzV1VGQldTeEpRVUZGTEVsQlFVVXNTVUZCUlN4SlFVRkZMRWxCUVVVc1NVRkJSU3hKUVVGRkxFbEJRVVVzU1VGQlJTeEpRVUZGTEVsQlFVVTdRVUZCUXl4TlFVRkpMRXRCUVVVc1MwRkJSVHRCUVVGRkxFMUJRVWtzUzBGQlJTeFBRVUZKTEVsQlFVVXNTMEZCUlN4RFFVRkRPMEZCUVVrc1RVRkJTU3hMUVVGRkxFVkJRVVU3UVVGQlJ5eFhRVUZSTEV0QlFVVXNSMEZCUlN4TFFVRkZMRWRCUVVVc1MwRkJSU3hIUVVGRkxFdEJRVVVzU1VGQlJTeEZRVUZGTzBGQlFVVXNZVUZCVVN4TFFVRkZMRWRCUVVVc1MwRkJSU3hGUVVGRkxFbEJRVVVzUzBGQlJTeEhRVUZGTEV0QlFVVXNSVUZCUlN4TFFVRkZMRWRCUVVVc1QwRkJTeXhMUVVGRkxFbEJRVVVzUzBGQlJTeEpRVUZGTEVWQlFVVTdRVUZCUlN4VlFVRkhMRXRCUVVVc1JVRkJSU3hMUVVGRkxFbEJRVVVzUjBGQlJTeE5RVUZITEUxQlFVa3NTMEZCUlN4RlFVRkZMRWxCUVVVc1VVRkJUeXhIUVVGRk8wRkJRVXNzVjBGQlJTeFJRVUZMTzBGQlFVVXNVMEZCVHl4RlFVRkZMRWxCUVVVc1NVRkJSU3hKUVVGRkxFOUJRVWtzU1VGQlJTeEpRVUZGTEVsQlFVVXNTVUZCUlN4SlFVRkZPMEZCUVVFN1FVRkJSeXhaUVVGWkxFbEJRVVVzU1VGQlJTeEpRVUZGTzBGQlFVTXNVMEZCVHl4RlFVRkZMRWxCUVVVc1NVRkJSU3hKUVVGRkxFZEJRVVVzUlVGQlJTeE5RVUZMTEVWQlFVVXNTVUZCUlN4SFFVRkZMRXRCUVVrN1FVRkJRVHRCUVVGSExGbEJRVmtzU1VGQlJTeEpRVUZGTEVsQlFVVXNTVUZCUlR0QlFVRkRMRk5CUVU4c1JVRkJSU3hKUVVGRkxFbEJRVVVzU1VGQlJTeEhRVUZGTEVWQlFVVXNTVUZCUlN4SFFVRkZMRXRCUVVjc1JVRkJSU3hKUVVGRkxFdEJRVVVzUjBGQlJTeExRVUZKTzBGQlFVRTdRVUZCUnl4WlFVRlpMRWxCUVVVc1NVRkJSVHRCUVVGRExGVkJRVThzUlVGQlJTeEpRVUZGTzBGQlFVRXNVMEZCVXp0QlFVRkxMR0ZCUVU4c1NVRkJSU3hYUVVGVExFdEJRVVU3UVVGQlFTeFRRVUZQTzBGQlFVRXNVMEZCVlR0QlFVRkJMRk5CUVZVN1FVRkJRU3hUUVVGVk8wRkJRVUVzVTBGQlZUdEJRVUZCTEZOQlFWVTdRVUZCUVN4VFFVRlZPMEZCUVVFc1UwRkJWVHRCUVVGQkxGTkJRVlU3UVVGQlFTeFRRVUZWTzBGQlFVRXNVMEZCVlR0QlFVRkJMRk5CUVZVN1FVRkJRU3hUUVVGVk8wRkJRVUVzVTBGQlZUdEJRVUZCTEZOQlFWVTdRVUZCUVN4VFFVRlZPMEZCUVVFc1UwRkJWVHRCUVVGQkxGTkJRVlU3UVVGQlFTeFRRVUZWTzBGQlFVRXNVMEZCVlR0QlFVRkJMRk5CUVZVN1FVRkJRU3hUUVVGVk8wRkJRVUVzVTBGQlZUdEJRVUZCTEZOQlFWVTdRVUZCUVN4VFFVRlZPMEZCUVVzc1lVRkJUeXhKUVVGRkxFdEJRVVU3UVVGQlFTeFRRVUZQTzBGQlFVRXNVMEZCVlR0QlFVRkJMRk5CUVZVN1FVRkJRU3hUUVVGVk8wRkJRVUVzVTBGQlZUdEJRVUZMTEdGQlFVOHNTVUZCUlN4TFFVRkZMRWxCUVVVc1MwRkJSU3hKUVVGRkxFdEJRVVU3UVVGQlFTeFRRVUZQTzBGQlFVRXNVMEZCVlR0QlFVRkxMR0ZCUVU4c1NVRkJSU3hMUVVGRkxFbEJRVVVzUzBGQlJUdEJRVUZCTEZOQlFVODdRVUZCU3l4aFFVRlBMRWxCUVVVc1MwRkJSU3hKUVVGRkxGVkJRVkVzUzBGQlJUdEJRVUZCTEZOQlFVODdRVUZCU3l4aFFVRlBMRWxCUVVVc1MwRkJSU3hGUVVGRkxFbEJRVVVzYTBKQlFXbENMRWxCUVVVc1lVRkJWeXhKUVVGRkxHVkJRV0U3UVVGQlFTeFRRVUZQTzBGQlFVc3NZVUZCVHl4SlFVRkZMRXRCUVVVc1NVRkJSU3hsUVVGaExFVkJRVVVzU1VGQlJTeGxRVUZqTEUxQlFVazdRVUZCUVN4VFFVRlBPMEZCUVVzc1lVRkJUeXhKUVVGRkxFdEJRVVVzU1VGQlJTeHRRa0ZCYVVJc1JVRkJSU3hKUVVGRkxEWkNRVUUwUWl4TlFVRkpPMEZCUVVFc1UwRkJUenRCUVVGTExHRkJRVThzU1VGQlJTeExRVUZGTEVsQlFVVXNSVUZCUlN4SlFVRkZMRlZCUVZNc1kwRkJXVHRCUVVGQkxGTkJRVTg3UVVGQlN5eGhRVUZQTEVsQlFVVXNTMEZCUlN4SlFVRkZMRVZCUVVVc1NVRkJSU3hUUVVGUkxHOUNRVUZyUWp0QlFVRkJMRk5CUVU4N1FVRkJTeXhoUVVGUExFbEJRVVVzVTBGQlR5eEZRVUZGTEVsQlFVVXNVMEZCVVN4TlFVRkpMRWxCUVVVc1MwRkJSU3hKUVVGRkxFVkJRVVVzU1VGQlJTeFJRVUZQTEdOQlFWazdRVUZCUVN4VFFVRlBPMEZCUVVzc1lVRkJUeXhKUVVGRkxFVkJRVVVzU1VGQlJTeHpRa0ZCY1VJc1QwRkJTeXhKUVVGRkxGRkJRVTA3UVVGQlFTeFRRVUZQTzBGQlFVc3NZVUZCVHl4RlFVRkZMRVZCUVVVc1JVRkJSU3hKUVVGRkxHZENRVUZsTEVsQlFVVXNUMEZCVFN4bFFVRmpMRWxCUVVVc1QwRkJUU3hKUVVGRkxFMUJRVWs3UVVGQlFTeFRRVUZQTzBGQlFVRXNVMEZCVlR0QlFVRkxMR0ZCUVU4c1JVRkJSU3hKUVVGRkxIRkNRVUZ2UWl4SlFVRkZPMEZCUVVFc1UwRkJhMEk3UVVGQlN5eGhRVUZQTEVWQlFVVXNSVUZCUlN4SlFVRkZMSEZDUVVGdlFpeEpRVUZGTEdkQ1FVRmpMRWxCUVVVc2FVSkJRV2RDTEdOQlFXRXNZVUZCVnl4SlFVRkZMRXRCUVVVN1FVRkJRU3hUUVVGUE8wRkJRVUVzVTBGQlZUdEJRVUZCTEZOQlFWVTdRVUZCUVN4VFFVRlZPMEZCUVVzc1lVRkJUeXhGUVVGRkxFbEJRVVVzYlVKQlFXdENMRWxCUVVVc1ZVRkJVVHRCUVVGQkxGTkJRVTg3UVVGQlFTeFRRVUZWTzBGQlFVRXNVMEZCVlR0QlFVRkJMRk5CUVZVN1FVRkJRU3hUUVVGVk8wRkJRVUVzVTBGQlZUdEJRVUZCTEZOQlFWVTdRVUZCUVN4VFFVRlZPMEZCUVVFc1UwRkJWVHRCUVVGQkxGTkJRVlU3UVVGQlFTeFRRVUZWTzBGQlFVRXNVMEZCVlR0QlFVRkxMRlZCUVVjc1JVRkJSU3hOUVVGSExFbEJRVVVzUzBGQlJUdEJRVUZGTEdkQ1FVRlBMRVZCUVVVc1NVRkJSU3hMUVVGRk8wRkJRVUVzWlVGQlV6dEJRVUZKTEdkQ1FVRkhMRVZCUVVVc1NVRkJSU3hMUVVGRkxFOUJRVXM3UVVGQlJ6dEJRVUZCTEdWQlFWYzdRVUZCU1N4dFFrRkJUeXhGUVVGRkxFbEJRVVVzYjBKQlFXMUNMRTlCUVVzc1NVRkJSU3haUVVGaExFbEJRVWNzUjBGQlJTeEpRVUZGTEV0QlFVVXNUVUZCU1N4TlFVRkpMRTlCUVVzc1dVRkJWVHRCUVVGQkxHVkJRVTg3UVVGQlNTeHRRa0ZCVFN4RFFVRkRMRVZCUVVVc1NVRkJSU3hoUVVGWExFZEJRVWNzUlVGQlJTeEpRVUZGTEZkQlFWVXNiVUpCUVd0Q0xFMUJRVWNzUzBGQlJUdEJRVUZCTzBGQlFVVTdRVUZCUVN4VFFVRlhPMEZCUVVzc1ZVRkJSeXhGUVVGRkxFbEJRVVVzUzBGQlJTeFBRVUZMTzBGQlFVazdRVUZCUVN4VFFVRlhPMEZCUVVzc1kwRkJUeXhGUVVGRkxFbEJRVVVzUlVGQlJTeE5RVUZITEVsQlFVY3NSVUZCUXl4RlFVRkZMRWxCUVVVc2FVSkJRV1U3UVVGQlFTeGhRVUZYTzBGQlFVa3NhVUpCUVU4c1JVRkJSU3hKUVVGRkxFdEJRVWtzVFVGQlNTeExRVUZITzBGQlFVRXNZVUZCVHp0QlFVRkpMR2xDUVVGUExFVkJRVVVzU1VGQlJTeDVRa0ZCZDBJc1QwRkJTeXhKUVVGSExFZEJRVVVzU1VGQlJTeFJRVUZOTEV0QlFVY3NXVUZCVlN4TlFVRkpMRmxCUVdFc1NVRkJSU3hYUVVGWkxFbEJRVVVzWVVGQlZ6dEJRVUZCTzBGQlFVVTdRVUZCUVN4VFFVRlhPMEZCUVVzc1kwRkJUeXhGUVVGRkxFbEJRVVVzUzBGQlJUdEJRVUZCTEdGQlFWVTdRVUZCU1N4cFFrRkJUeXhKUVVGRkxFdEJRVVVzU1VGQlJTeEZRVUZGTEVsQlFVVXNjMEpCUVhGQ0xGRkJRVTA3UVVGQlFTeGhRVUZQTzBGQlFVa3NhVUpCUVU4c1NVRkJSU3hMUVVGRkxFbEJRVVVzUlVGQlJTeEpRVUZGTEhOQ1FVRnhRaXhYUVVGVE8wRkJRVUVzWVVGQlR6dEJRVUZITEdsQ1FVRlBMRWxCUVVVc1MwRkJSU3hKUVVGRkxFVkJRVVVzU1VGQlJTeHpRa0ZCY1VJc1VVRkJUVHRCUVVGQk8wRkJRVVVzWVVGQlR5eEpRVUZGTEV0QlFVVXNTVUZCUlN4TFFVRkZPMEZCUVVFN1FVRkJSU3hUUVVGUE8wRkJRVUU3UVVGQlJTeFpRVUZaTEVsQlFVVXNTVUZCUlR0QlFVRkRMRTFCUVVrc1MwRkJSVHRCUVVGSExFMUJRVWtzUzBGQlJTeEZRVUZGTzBGQlFVY3NWMEZCVVN4TFFVRkZMRWRCUVVVc1MwRkJSU3hKUVVGRk8wRkJRVWtzVlVGQlJ5eEhRVUZGTEVkQlFVVXNTMEZCUnl4SlFVRkZMRWxCUVVVc1QwRkJTVHRCUVVGSExGTkJRVTg3UVVGQlFUdEJRVUZGTEZsQlFWa3NTVUZCUlN4SlFVRkZMRWxCUVVVc1NVRkJSVHRCUVVGRExGVkJRVThzUjBGQlJUdEJRVUZCTEZOQlFWYzdRVUZCUVN4VFFVRlBPMEZCUVVVc1lVRkJUeXhIUVVGRkxGTkJRVThzUjBGQlJTeFZRVUZSTEVkQlFVVTdRVUZCUVN4VFFVRlhPMEZCUVVVc1lVRkJUVHRCUVVGQkxGTkJRVkU3UVVGQlJTeFRRVUZGTEZGQlFVMHNSMEZCUlN4TlFVRk5MRXRCUVVzN1FVRkJRVHRCUVVGTExGTkJRVThzUlVGQlJTeExRVUZGTEVkQlFVY3NSMEZCUlN4VlFVRlRMRTlCUVVrc1IwRkJSU3hUUVVGUExFZEJRVVVzVVVGQlRTeE5RVUZKTEV0QlFVVXNUVUZCU1R0QlFVRkJPMEZCUVVjc1dVRkJXU3hKUVVGRk8wRkJRVU1zVFVGQlNTeExRVUZGTEVWQlFVVTdRVUZCUnl4VFFVRlBMRk5CUVZNc1NVRkJSU3hKUVVGRkxFbEJRVVVzU1VGQlJUdEJRVUZETEZGQlFVa3NTMEZCUlR0QlFVRkhMR0ZCUVZFc1MwRkJSU3hIUVVGRkxFdEJRVVVzU1VGQlJUdEJRVUZKTEZsQlFVY3NSMEZCUlN4SlFVRkhMRWxCUVVVc1NVRkJSU3hKUVVGRkxFOUJRVWs3UVVGQlJ5eFhRVUZQTzBGQlFVRTdRVUZCUVR0QlFVRkhMRmxCUVZrc1NVRkJSVHRCUVVGRExGTkJRVThzVTBGQlV5eEpRVUZGTzBGQlFVTXNVVUZCUnl4RFFVRkRMRWRCUVVVN1FVRkJTeXhWUVVGSExFdEJRVVVzUjBGQlJUdEJRVUZQTEZkQlFVVTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJTU3haUVVGWkxFbEJRVVVzU1VGQlJTeEpRVUZGTEVsQlFVVTdRVUZCUXl4TlFVRkhMRU5CUVVNc1IwRkJSVHRCUVVGUExGbEJRVThzUjBGQlJUdEJRVUZCTEZkQlFWYzdRVUZCUlN4WFFVRkZMRk5CUVU4c1IwRkJSeXhIUVVGRkxFOUJRVTBzUjBGQlJUdEJRVUZSTzBGQlFVRXNWMEZCVnp0QlFVRkZMR1ZCUVU4c1IwRkJSeXhEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZGTEU5QlFVMHNTMEZCU1N4TlFVRkpMRWxCUVVjc1NVRkJSU3hOUVVGTE8wRkJRVUVzVjBGQlVUdEJRVUZGTEZsQlFVY3NSMEZCUlR0QlFVRlBMR2xDUVVGUExFVkJRVVVzUjBGQlJTeFBRVUZQTEZOQlFWTXNTVUZCUlR0QlFVRkRMRzlDUVVGUExFVkJRVVVzU1VGQlJUdEJRVUZCTEcxQ1FVRTRRanRCUVVGQkxHMUNRVUZwUWp0QlFVRmpMSFZDUVVGUExFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCUlN4bFFVRmpMRTFCUVVrc1NVRkJSU3hQUVVGTkxFbEJRVVVzVFVGQlN6dEJRVUZCTEcxQ1FVRlBPMEZCUVdkQ0xIVkNRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZMRVZCUVVVc1NVRkJSU3hqUVVGaExFMUJRVWtzU1VGQlJTeGhRVUZaTEVsQlFVVXNTMEZCU1N4RlFVRkZMRVZCUVVVc1NVRkJSU3hqUVVGaExFMUJRVWtzU1VGQlJTeFBRVUZOTEVsQlFVVXNTMEZCU1N4RlFVRkZMRVZCUVVVc1NVRkJSU3hqUVVGaExFbEJRVVVzWVVGQldTeEpRVUZGTEUxQlFVczdRVUZCUVR0QlFVRkhMRzFDUVVGTk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVOHNXVUZCV1N4SlFVRkZPMEZCUVVNc1ZVRkJUeXhIUVVGRk8wRkJRVUVzVTBGQlZ6dEJRVUZGTEZOQlFVVXNVVUZCVFN4SFFVRkZMRTFCUVUwc1NVRkJTeXhUUVVGVExFbEJRVVU3UVVGQlF5eGxRVUZQTEVWQlFVVXNSVUZCUlN4TFFVRkpMRk5CUVZNc1NVRkJSU3hKUVVGRkxFbEJRVVU3UVVGQlF5eHJRa0ZCVHl4RlFVRkZMRWxCUVVVN1FVRkJRU3hwUWtGQlV6dEJRVUZITEhGQ1FVRlBMRVZCUVVVc1NVRkJSU3hIUVVGRkxFVkJRVVU3UVVGQlFTeHBRa0ZCVXp0QlFVRkJMR2xDUVVGUE8wRkJRVUVzYVVKQlFWRTdRVUZCUVN4cFFrRkJVVHRCUVVGQkxHbENRVUZSTzBGQlFVa3NjVUpCUVU4N1FVRkJRU3hwUWtGQlR6dEJRVUZITEd0Q1FVRkhMRWRCUVVVc1JVRkJSU3hSUVVGTE8wRkJRVk1zYlVKQlFVVXNUVUZCUnl4SlFVRkhMRWRCUVVVc1JVRkJSU3hOUVVGSExFOUJRVXNzUlVGQlJTeEhRVUZGTEV0QlFVY3NTMEZCUlN4SFFVRkZPMEZCUVVFc2FVSkJRVk03UVVGQlJ5eHhRa0ZCVHl4UFFVRkpMRWxCUVVVc1MwRkJSenRCUVVGQk8wRkJRVlVzYzBKQlFVODdRVUZCUVN4eFFrRkJVVHRCUVVGRkxIVkNRVUZGTzBGQlFVVXNlVUpCUVU4c1JVRkJSU3hOUVVGSExFbEJRVVVzUzBGQlJ6dEJRVUZCTEhGQ1FVRlBMRTFCUVVVc1JVRkJSU3hOUVVGSE8wRkJRVUVzY1VKQlFVODdRVUZCUlN4NVFrRkJUeXhQUVVGSkxFbEJRVVVzUzBGQlJTeExRVUZGTEV0QlFVVXNTMEZCUlR0QlFVRkJPMEZCUVZVc2VVSkJRVTg3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJWenNpTEFvZ0lDSnVZVzFsY3lJNklGdGRDbjBLXG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnQGVtb3Rpb24vc2hlZXQnO1xuaW1wb3J0IHsgZGVhbGxvYywgYWxsb2MsIG5leHQsIHRva2VuLCBmcm9tLCBwZWVrLCBkZWxpbWl0LCBpZGVudGlmaWVyLCBwb3NpdGlvbiwgc3RyaW5naWZ5LCBDT01NRU5ULCBydWxlc2hlZXQsIG1pZGRsZXdhcmUsIHByZWZpeGVyLCBzZXJpYWxpemUsIGNvbXBpbGUgfSBmcm9tICdzdHlsaXMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIGxhc3QgPSBmdW5jdGlvbiBsYXN0KGFycikge1xuICByZXR1cm4gYXJyLmxlbmd0aCA/IGFyclthcnIubGVuZ3RoIC0gMV0gOiBudWxsO1xufTtcblxudmFyIHRvUnVsZXMgPSBmdW5jdGlvbiB0b1J1bGVzKHBhcnNlZCwgcG9pbnRzKSB7XG4gIC8vIHByZXRlbmQgd2UndmUgc3RhcnRlZCB3aXRoIGEgY29tbWFcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBjaGFyYWN0ZXIgPSA0NDtcblxuICBkbyB7XG4gICAgc3dpdGNoICh0b2tlbihjaGFyYWN0ZXIpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIC8vICZcXGZcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gMzggJiYgcGVlaygpID09PSAxMikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgbm90IDEwMCUgY29ycmVjdCwgd2UgZG9uJ3QgYWNjb3VudCBmb3IgbGl0ZXJhbCBzZXF1ZW5jZXMgaGVyZSAtIGxpa2UgZm9yIGV4YW1wbGUgcXVvdGVkIHN0cmluZ3NcbiAgICAgICAgICAvLyBzdHlsaXMgaW5zZXJ0cyBcXGYgYWZ0ZXIgJiB0byBrbm93IHdoZW4gJiB3aGVyZSBpdCBzaG91bGQgcmVwbGFjZSB0aGlzIHNlcXVlbmNlIHdpdGggdGhlIGNvbnRleHQgc2VsZWN0b3JcbiAgICAgICAgICAvLyBhbmQgd2hlbiBpdCBzaG91bGQganVzdCBjb25jYXRlbmF0ZSB0aGUgb3V0ZXIgYW5kIGlubmVyIHNlbGVjdG9yc1xuICAgICAgICAgIC8vIGl0J3MgdmVyeSB1bmxpa2VseSBmb3IgdGhpcyBzZXF1ZW5jZSB0byBhY3R1YWxseSBhcHBlYXIgaW4gYSBkaWZmZXJlbnQgY29udGV4dCwgc28gd2UganVzdCBsZXZlcmFnZSB0aGlzIGZhY3QgaGVyZVxuICAgICAgICAgIHBvaW50c1tpbmRleF0gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyc2VkW2luZGV4XSArPSBpZGVudGlmaWVyKHBvc2l0aW9uIC0gMSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHBhcnNlZFtpbmRleF0gKz0gZGVsaW1pdChjaGFyYWN0ZXIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0OlxuICAgICAgICAvLyBjb21tYVxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSA0NCkge1xuICAgICAgICAgIC8vIGNvbG9uXG4gICAgICAgICAgcGFyc2VkWysraW5kZXhdID0gcGVlaygpID09PSA1OCA/ICcmXFxmJyA6ICcnO1xuICAgICAgICAgIHBvaW50c1tpbmRleF0gPSBwYXJzZWRbaW5kZXhdLmxlbmd0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAvLyBmYWxsdGhyb3VnaFxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwYXJzZWRbaW5kZXhdICs9IGZyb20oY2hhcmFjdGVyKTtcbiAgICB9XG4gIH0gd2hpbGUgKGNoYXJhY3RlciA9IG5leHQoKSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cbnZhciBnZXRSdWxlcyA9IGZ1bmN0aW9uIGdldFJ1bGVzKHZhbHVlLCBwb2ludHMpIHtcbiAgcmV0dXJuIGRlYWxsb2ModG9SdWxlcyhhbGxvYyh2YWx1ZSksIHBvaW50cykpO1xufTsgLy8gV2Vha1NldCB3b3VsZCBiZSBtb3JlIGFwcHJvcHJpYXRlLCBidXQgb25seSBXZWFrTWFwIGlzIHN1cHBvcnRlZCBpbiBJRTExXG5cblxudmFyIGZpeGVkRWxlbWVudHMgPSAvKiAjX19QVVJFX18gKi9uZXcgV2Vha01hcCgpO1xudmFyIGNvbXBhdCA9IGZ1bmN0aW9uIGNvbXBhdChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJyB8fCAhZWxlbWVudC5wYXJlbnQgfHwgLy8gLmxlbmd0aCBpbmRpY2F0ZXMgaWYgdGhpcyBydWxlIGNvbnRhaW5zIHBzZXVkbyBvciBub3RcbiAgIWVsZW1lbnQubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZWxlbWVudC52YWx1ZSxcbiAgICAgIHBhcmVudCA9IGVsZW1lbnQucGFyZW50O1xuICB2YXIgaXNJbXBsaWNpdFJ1bGUgPSBlbGVtZW50LmNvbHVtbiA9PT0gcGFyZW50LmNvbHVtbiAmJiBlbGVtZW50LmxpbmUgPT09IHBhcmVudC5saW5lO1xuXG4gIHdoaWxlIChwYXJlbnQudHlwZSAhPT0gJ3J1bGUnKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuO1xuICB9IC8vIHNob3J0LWNpcmN1aXQgZm9yIHRoZSBzaW1wbGVzdCBjYXNlXG5cblxuICBpZiAoZWxlbWVudC5wcm9wcy5sZW5ndGggPT09IDEgJiYgdmFsdWUuY2hhckNvZGVBdCgwKSAhPT0gNThcbiAgLyogY29sb24gKi9cbiAgJiYgIWZpeGVkRWxlbWVudHMuZ2V0KHBhcmVudCkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgdGhpcyBpcyBhbiBpbXBsaWNpdGx5IGluc2VydGVkIHJ1bGUgKHRoZSBvbmUgZWFnZXJseSBpbnNlcnRlZCBhdCB0aGUgZWFjaCBuZXcgbmVzdGVkIGxldmVsKVxuICAvLyB0aGVuIHRoZSBwcm9wcyBoYXMgYWxyZWFkeSBiZWVuIG1hbmlwdWxhdGVkIGJlZm9yZWhhbmQgYXMgdGhleSB0aGF0IGFycmF5IGlzIHNoYXJlZCBiZXR3ZWVuIGl0IGFuZCBpdHMgXCJydWxlIHBhcmVudFwiXG5cblxuICBpZiAoaXNJbXBsaWNpdFJ1bGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmaXhlZEVsZW1lbnRzLnNldChlbGVtZW50LCB0cnVlKTtcbiAgdmFyIHBvaW50cyA9IFtdO1xuICB2YXIgcnVsZXMgPSBnZXRSdWxlcyh2YWx1ZSwgcG9pbnRzKTtcbiAgdmFyIHBhcmVudFJ1bGVzID0gcGFyZW50LnByb3BzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBrID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXJlbnRSdWxlcy5sZW5ndGg7IGorKywgaysrKSB7XG4gICAgICBlbGVtZW50LnByb3BzW2tdID0gcG9pbnRzW2ldID8gcnVsZXNbaV0ucmVwbGFjZSgvJlxcZi9nLCBwYXJlbnRSdWxlc1tqXSkgOiBwYXJlbnRSdWxlc1tqXSArIFwiIFwiICsgcnVsZXNbaV07XG4gICAgfVxuICB9XG59O1xudmFyIHJlbW92ZUxhYmVsID0gZnVuY3Rpb24gcmVtb3ZlTGFiZWwoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC50eXBlID09PSAnZGVjbCcpIHtcbiAgICB2YXIgdmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuXG4gICAgaWYgKCAvLyBjaGFyY29kZSBmb3IgbFxuICAgIHZhbHVlLmNoYXJDb2RlQXQoMCkgPT09IDEwOCAmJiAvLyBjaGFyY29kZSBmb3IgYlxuICAgIHZhbHVlLmNoYXJDb2RlQXQoMikgPT09IDk4KSB7XG4gICAgICAvLyB0aGlzIGlnbm9yZXMgbGFiZWxcbiAgICAgIGVsZW1lbnRbXCJyZXR1cm5cIl0gPSAnJztcbiAgICAgIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cbn07XG52YXIgaWdub3JlRmxhZyA9ICdlbW90aW9uLWRpc2FibGUtc2VydmVyLXJlbmRlcmluZy11bnNhZmUtc2VsZWN0b3Itd2FybmluZy1wbGVhc2UtZG8tbm90LXVzZS10aGlzLXRoZS13YXJuaW5nLWV4aXN0cy1mb3ItYS1yZWFzb24nO1xuXG52YXIgaXNJZ25vcmluZ0NvbW1lbnQgPSBmdW5jdGlvbiBpc0lnbm9yaW5nQ29tbWVudChlbGVtZW50KSB7XG4gIHJldHVybiAhIWVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAnY29tbScgJiYgZWxlbWVudC5jaGlsZHJlbi5pbmRleE9mKGlnbm9yZUZsYWcpID4gLTE7XG59O1xuXG52YXIgY3JlYXRlVW5zYWZlU2VsZWN0b3JzQWxhcm0gPSBmdW5jdGlvbiBjcmVhdGVVbnNhZmVTZWxlY3RvcnNBbGFybShjYWNoZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbikge1xuICAgIGlmIChlbGVtZW50LnR5cGUgIT09ICdydWxlJykgcmV0dXJuO1xuICAgIHZhciB1bnNhZmVQc2V1ZG9DbGFzc2VzID0gZWxlbWVudC52YWx1ZS5tYXRjaCgvKDpmaXJzdHw6bnRofDpudGgtbGFzdCktY2hpbGQvZyk7XG5cbiAgICBpZiAodW5zYWZlUHNldWRvQ2xhc3NlcyAmJiBjYWNoZS5jb21wYXQgIT09IHRydWUpIHtcbiAgICAgIHZhciBwcmV2RWxlbWVudCA9IGluZGV4ID4gMCA/IGNoaWxkcmVuW2luZGV4IC0gMV0gOiBudWxsO1xuXG4gICAgICBpZiAocHJldkVsZW1lbnQgJiYgaXNJZ25vcmluZ0NvbW1lbnQobGFzdChwcmV2RWxlbWVudC5jaGlsZHJlbikpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdW5zYWZlUHNldWRvQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uICh1bnNhZmVQc2V1ZG9DbGFzcykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIHBzZXVkbyBjbGFzcyBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcyArIFwiXFxcIiBpcyBwb3RlbnRpYWxseSB1bnNhZmUgd2hlbiBkb2luZyBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIFRyeSBjaGFuZ2luZyBpdCB0byBcXFwiXCIgKyB1bnNhZmVQc2V1ZG9DbGFzcy5zcGxpdCgnLWNoaWxkJylbMF0gKyBcIi1vZi10eXBlXFxcIi5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59O1xuXG52YXIgaXNJbXBvcnRSdWxlID0gZnVuY3Rpb24gaXNJbXBvcnRSdWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQudHlwZS5jaGFyQ29kZUF0KDEpID09PSAxMDUgJiYgZWxlbWVudC50eXBlLmNoYXJDb2RlQXQoMCkgPT09IDY0O1xufTtcblxudmFyIGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyA9IGZ1bmN0aW9uIGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyhpbmRleCwgY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IGluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoIWlzSW1wb3J0UnVsZShjaGlsZHJlbltpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07IC8vIHVzZSB0aGlzIHRvIHJlbW92ZSBpbmNvcnJlY3QgZWxlbWVudHMgZnJvbSBmdXJ0aGVyIHByb2Nlc3Npbmdcbi8vIHNvIHRoZXkgZG9uJ3QgZ2V0IGhhbmRlZCB0byB0aGUgYHNoZWV0YCAob3IgYW55dGhpbmcgZWxzZSlcbi8vIGFzIHRoYXQgY291bGQgcG90ZW50aWFsbHkgbGVhZCB0byBhZGRpdGlvbmFsIGxvZ3Mgd2hpY2ggaW4gdHVybiBjb3VsZCBiZSBvdmVyaGVsbWluZyB0byB0aGUgdXNlclxuXG5cbnZhciBudWxsaWZ5RWxlbWVudCA9IGZ1bmN0aW9uIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpIHtcbiAgZWxlbWVudC50eXBlID0gJyc7XG4gIGVsZW1lbnQudmFsdWUgPSAnJztcbiAgZWxlbWVudFtcInJldHVyblwiXSA9ICcnO1xuICBlbGVtZW50LmNoaWxkcmVuID0gJyc7XG4gIGVsZW1lbnQucHJvcHMgPSAnJztcbn07XG5cbnZhciBpbmNvcnJlY3RJbXBvcnRBbGFybSA9IGZ1bmN0aW9uIGluY29ycmVjdEltcG9ydEFsYXJtKGVsZW1lbnQsIGluZGV4LCBjaGlsZHJlbikge1xuICBpZiAoIWlzSW1wb3J0UnVsZShlbGVtZW50KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbGVtZW50LnBhcmVudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJgQGltcG9ydGAgcnVsZXMgY2FuJ3QgYmUgbmVzdGVkIGluc2lkZSBvdGhlciBydWxlcy4gUGxlYXNlIG1vdmUgaXQgdG8gdGhlIHRvcCBsZXZlbCBhbmQgcHV0IGl0IGJlZm9yZSByZWd1bGFyIHJ1bGVzLiBLZWVwIGluIG1pbmQgdGhhdCB0aGV5IGNhbiBvbmx5IGJlIHVzZWQgd2l0aGluIGdsb2JhbCBzdHlsZXMuXCIpO1xuICAgIG51bGxpZnlFbGVtZW50KGVsZW1lbnQpO1xuICB9IGVsc2UgaWYgKGlzUHJlcGVuZGVkV2l0aFJlZ3VsYXJSdWxlcyhpbmRleCwgY2hpbGRyZW4pKSB7XG4gICAgY29uc29sZS5lcnJvcihcImBAaW1wb3J0YCBydWxlcyBjYW4ndCBiZSBhZnRlciBvdGhlciBydWxlcy4gUGxlYXNlIHB1dCB5b3VyIGBAaW1wb3J0YCBydWxlcyBiZWZvcmUgeW91ciBvdGhlciBydWxlcy5cIik7XG4gICAgbnVsbGlmeUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0U3R5bGlzUGx1Z2lucyA9IFtwcmVmaXhlcl07XG5cbnZhciBjcmVhdGVDYWNoZSA9IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKG9wdGlvbnMpIHtcbiAgdmFyIGtleSA9IG9wdGlvbnMua2V5O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFrZXkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgaGF2ZSB0byBjb25maWd1cmUgYGtleWAgZm9yIHlvdXIgY2FjaGUuIFBsZWFzZSBtYWtlIHN1cmUgaXQncyB1bmlxdWUgKGFuZCBub3QgZXF1YWwgdG8gJ2NzcycpIGFzIGl0J3MgdXNlZCBmb3IgbGlua2luZyBzdHlsZXMgdG8geW91ciBjYWNoZS5cXG5cIiArIFwiSWYgbXVsdGlwbGUgY2FjaGVzIHNoYXJlIHRoZSBzYW1lIGtleSB0aGV5IG1pZ2h0IFxcXCJmaWdodFxcXCIgZm9yIGVhY2ggb3RoZXIncyBzdHlsZSBlbGVtZW50cy5cIik7XG4gIH1cblxuICBpZiAoIGtleSA9PT0gJ2NzcycpIHtcbiAgICB2YXIgc3NyU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN0eWxlW2RhdGEtZW1vdGlvbl06bm90KFtkYXRhLXNdKVwiKTsgLy8gZ2V0IFNTUmVkIHN0eWxlcyBvdXQgb2YgdGhlIHdheSBvZiBSZWFjdCdzIGh5ZHJhdGlvblxuICAgIC8vIGRvY3VtZW50LmhlYWQgaXMgYSBzYWZlIHBsYWNlIHRvIG1vdmUgdGhlbSB0byh0aG91Z2ggbm90ZSBkb2N1bWVudC5oZWFkIGlzIG5vdCBuZWNlc3NhcmlseSB0aGUgbGFzdCBwbGFjZSB0aGV5IHdpbGwgYmUpXG4gICAgLy8gbm90ZSB0aGlzIHZlcnkgdmVyeSBpbnRlbnRpb25hbGx5IHRhcmdldHMgYWxsIHN0eWxlIGVsZW1lbnRzIHJlZ2FyZGxlc3Mgb2YgdGhlIGtleSB0byBlbnN1cmVcbiAgICAvLyB0aGF0IGNyZWF0aW5nIGEgY2FjaGUgd29ya3MgaW5zaWRlIG9mIHJlbmRlciBvZiBhIFJlYWN0IGNvbXBvbmVudFxuXG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzc3JTdHlsZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAvLyB3ZSB3YW50IHRvIG9ubHkgbW92ZSBlbGVtZW50cyB3aGljaCBoYXZlIGEgc3BhY2UgaW4gdGhlIGRhdGEtZW1vdGlvbiBhdHRyaWJ1dGUgdmFsdWVcbiAgICAgIC8vIGJlY2F1c2UgdGhhdCBpbmRpY2F0ZXMgdGhhdCBpdCBpcyBhbiBFbW90aW9uIDExIHNlcnZlci1zaWRlIHJlbmRlcmVkIHN0eWxlIGVsZW1lbnRzXG4gICAgICAvLyB3aGlsZSB3ZSB3aWxsIGFscmVhZHkgaWdub3JlIEVtb3Rpb24gMTEgY2xpZW50LXNpZGUgaW5zZXJ0ZWQgc3R5bGVzIGJlY2F1c2Ugb2YgdGhlIDpub3QoW2RhdGEtc10pIHBhcnQgaW4gdGhlIHNlbGVjdG9yXG4gICAgICAvLyBFbW90aW9uIDEwIGNsaWVudC1zaWRlIGluc2VydGVkIHN0eWxlcyBkaWQgbm90IGhhdmUgZGF0YS1zIChidXQgaW1wb3J0YW50bHkgZGlkIG5vdCBoYXZlIGEgc3BhY2UgaW4gdGhlaXIgZGF0YS1lbW90aW9uIGF0dHJpYnV0ZXMpXG4gICAgICAvLyBzbyBjaGVja2luZyBmb3IgdGhlIHNwYWNlIGVuc3VyZXMgdGhhdCBsb2FkaW5nIEVtb3Rpb24gMTEgYWZ0ZXIgRW1vdGlvbiAxMCBoYXMgaW5zZXJ0ZWQgc29tZSBzdHlsZXNcbiAgICAgIC8vIHdpbGwgbm90IHJlc3VsdCBpbiB0aGUgRW1vdGlvbiAxMCBzdHlsZXMgYmVpbmcgZGVzdHJveWVkXG4gICAgICB2YXIgZGF0YUVtb3Rpb25BdHRyaWJ1dGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJyk7XG5cbiAgICAgIGlmIChkYXRhRW1vdGlvbkF0dHJpYnV0ZS5pbmRleE9mKCcgJykgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zJywgJycpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHN0eWxpc1BsdWdpbnMgPSBvcHRpb25zLnN0eWxpc1BsdWdpbnMgfHwgZGVmYXVsdFN0eWxpc1BsdWdpbnM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgaWYgKC9bXmEtei1dLy50ZXN0KGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVtb3Rpb24ga2V5IG11c3Qgb25seSBjb250YWluIGxvd2VyIGNhc2UgYWxwaGFiZXRpY2FsIGNoYXJhY3RlcnMgYW5kIC0gYnV0IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgcGFzc2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpbnNlcnRlZCA9IHt9OyAvLyAkRmxvd0ZpeE1lXG5cbiAgdmFyIGNvbnRhaW5lcjtcbiAgdmFyIG5vZGVzVG9IeWRyYXRlID0gW107XG5cbiAge1xuICAgIGNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmhlYWQ7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbCggLy8gdGhpcyBtZWFucyB3ZSB3aWxsIGlnbm9yZSBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGEgc3BhY2UgaW4gdGhlbSB3aGljaFxuICAgIC8vIG1lYW5zIHRoYXQgdGhlIHN0eWxlIGVsZW1lbnRzIHdlJ3JlIGxvb2tpbmcgYXQgYXJlIG9ubHkgRW1vdGlvbiAxMSBzZXJ2ZXItcmVuZGVyZWQgc3R5bGUgZWxlbWVudHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbZGF0YS1lbW90aW9uXj1cXFwiXCIgKyBrZXkgKyBcIiBcXFwiXVwiKSwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBhdHRyaWIgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtZW1vdGlvblwiKS5zcGxpdCgnICcpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXR0cmliLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGluc2VydGVkW2F0dHJpYltpXV0gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2Rlc1RvSHlkcmF0ZS5wdXNoKG5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9pbnNlcnQ7XG5cbiAgdmFyIG9tbmlwcmVzZW50UGx1Z2lucyA9IFtjb21wYXQsIHJlbW92ZUxhYmVsXTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIG9tbmlwcmVzZW50UGx1Z2lucy5wdXNoKGNyZWF0ZVVuc2FmZVNlbGVjdG9yc0FsYXJtKHtcbiAgICAgIGdldCBjb21wYXQoKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5jb21wYXQ7XG4gICAgICB9XG5cbiAgICB9KSwgaW5jb3JyZWN0SW1wb3J0QWxhcm0pO1xuICB9XG5cbiAge1xuICAgIHZhciBjdXJyZW50U2hlZXQ7XG4gICAgdmFyIGZpbmFsaXppbmdQbHVnaW5zID0gW3N0cmluZ2lmeSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBpZiAoIWVsZW1lbnQucm9vdCkge1xuICAgICAgICBpZiAoZWxlbWVudFtcInJldHVyblwiXSkge1xuICAgICAgICAgIGN1cnJlbnRTaGVldC5pbnNlcnQoZWxlbWVudFtcInJldHVyblwiXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC52YWx1ZSAmJiBlbGVtZW50LnR5cGUgIT09IENPTU1FTlQpIHtcbiAgICAgICAgICAvLyBpbnNlcnQgZW1wdHkgcnVsZSBpbiBub24tcHJvZHVjdGlvbiBlbnZpcm9ubWVudHNcbiAgICAgICAgICAvLyBzbyBAZW1vdGlvbi9qZXN0IGNhbiBncmFiIGBrZXlgIGZyb20gdGhlIChKUylET00gZm9yIGNhY2hlcyB3aXRob3V0IGFueSBydWxlcyBpbnNlcnRlZCB5ZXRcbiAgICAgICAgICBjdXJyZW50U2hlZXQuaW5zZXJ0KGVsZW1lbnQudmFsdWUgKyBcInt9XCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSA6IHJ1bGVzaGVldChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgY3VycmVudFNoZWV0Lmluc2VydChydWxlKTtcbiAgICB9KV07XG4gICAgdmFyIHNlcmlhbGl6ZXIgPSBtaWRkbGV3YXJlKG9tbmlwcmVzZW50UGx1Z2lucy5jb25jYXQoc3R5bGlzUGx1Z2lucywgZmluYWxpemluZ1BsdWdpbnMpKTtcblxuICAgIHZhciBzdHlsaXMgPSBmdW5jdGlvbiBzdHlsaXMoc3R5bGVzKSB7XG4gICAgICByZXR1cm4gc2VyaWFsaXplKGNvbXBpbGUoc3R5bGVzKSwgc2VyaWFsaXplcik7XG4gICAgfTtcblxuICAgIF9pbnNlcnQgPSBmdW5jdGlvbiBpbnNlcnQoc2VsZWN0b3IsIHNlcmlhbGl6ZWQsIHNoZWV0LCBzaG91bGRDYWNoZSkge1xuICAgICAgY3VycmVudFNoZWV0ID0gc2hlZXQ7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHNlcmlhbGl6ZWQubWFwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3VycmVudFNoZWV0ID0ge1xuICAgICAgICAgIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KHJ1bGUpIHtcbiAgICAgICAgICAgIHNoZWV0Lmluc2VydChydWxlICsgc2VyaWFsaXplZC5tYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3R5bGlzKHNlbGVjdG9yID8gc2VsZWN0b3IgKyBcIntcIiArIHNlcmlhbGl6ZWQuc3R5bGVzICsgXCJ9XCIgOiBzZXJpYWxpemVkLnN0eWxlcyk7XG5cbiAgICAgIGlmIChzaG91bGRDYWNoZSkge1xuICAgICAgICBjYWNoZS5pbnNlcnRlZFtzZXJpYWxpemVkLm5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0ge1xuICAgIGtleToga2V5LFxuICAgIHNoZWV0OiBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgICBzcGVlZHk6IG9wdGlvbnMuc3BlZWR5LFxuICAgICAgcHJlcGVuZDogb3B0aW9ucy5wcmVwZW5kXG4gICAgfSksXG4gICAgbm9uY2U6IG9wdGlvbnMubm9uY2UsXG4gICAgaW5zZXJ0ZWQ6IGluc2VydGVkLFxuICAgIHJlZ2lzdGVyZWQ6IHt9LFxuICAgIGluc2VydDogX2luc2VydFxuICB9O1xuICBjYWNoZS5zaGVldC5oeWRyYXRlKG5vZGVzVG9IeWRyYXRlKTtcbiAgcmV0dXJuIGNhY2hlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2FjaGU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2dhcnljb3VydC9tdXJtdXJoYXNoLWpzXG4vLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWFwcGxlYnkvc21oYXNoZXIvYmxvYi82MWEwNTMwZjI4Mjc3ZjJlODUwYmZjMzk2MDBjZTYxZDAyYjUxOGRlL3NyYy9NdXJtdXJIYXNoMi5jcHAjTDM3LUw4NlxuZnVuY3Rpb24gbXVybXVyMihzdHIpIHtcbiAgLy8gJ20nIGFuZCAncicgYXJlIG1peGluZyBjb25zdGFudHMgZ2VuZXJhdGVkIG9mZmxpbmUuXG4gIC8vIFRoZXkncmUgbm90IHJlYWxseSAnbWFnaWMnLCB0aGV5IGp1c3QgaGFwcGVuIHRvIHdvcmsgd2VsbC5cbiAgLy8gY29uc3QgbSA9IDB4NWJkMWU5OTU7XG4gIC8vIGNvbnN0IHIgPSAyNDtcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgaGFzaFxuICB2YXIgaCA9IDA7IC8vIE1peCA0IGJ5dGVzIGF0IGEgdGltZSBpbnRvIHRoZSBoYXNoXG5cbiAgdmFyIGssXG4gICAgICBpID0gMCxcbiAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG5cbiAgZm9yICg7IGxlbiA+PSA0OyArK2ksIGxlbiAtPSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpO1xuICAgIGsgXj1cbiAgICAvKiBrID4+PiByOiAqL1xuICAgIGsgPj4+IDI0O1xuICAgIGggPVxuICAgIC8qIE1hdGguaW11bChrLCBtKTogKi9cbiAgICAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKChrID4+PiAxNikgKiAweGU5OTUgPDwgMTYpIF5cbiAgICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBIYW5kbGUgdGhlIGxhc3QgZmV3IGJ5dGVzIG9mIHRoZSBpbnB1dCBhcnJheVxuXG5cbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPVxuICAgICAgLyogTWF0aC5pbXVsKGgsIG0pOiAqL1xuICAgICAgKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoaCA+Pj4gMTYpICogMHhlOTk1IDw8IDE2KTtcbiAgfSAvLyBEbyBhIGZldyBmaW5hbCBtaXhlcyBvZiB0aGUgaGFzaCB0byBlbnN1cmUgdGhlIGxhc3QgZmV3XG4gIC8vIGJ5dGVzIGFyZSB3ZWxsLWluY29ycG9yYXRlZC5cblxuXG4gIGggXj0gaCA+Pj4gMTM7XG4gIGggPVxuICAvKiBNYXRoLmltdWwoaCwgbSk6ICovXG4gIChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKGggPj4+IDE2KSAqIDB4ZTk5NSA8PCAxNik7XG4gIHJldHVybiAoKGggXiBoID4+PiAxNSkgPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbXVybXVyMjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCJpbXBvcnQgaGFzaFN0cmluZyBmcm9tICdAZW1vdGlvbi9oYXNoJztcbmltcG9ydCB1bml0bGVzcyBmcm9tICdAZW1vdGlvbi91bml0bGVzcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SID0gXCJZb3UgaGF2ZSBpbGxlZ2FsIGVzY2FwZSBzZXF1ZW5jZSBpbiB5b3VyIHRlbXBsYXRlIGxpdGVyYWwsIG1vc3QgbGlrZWx5IGluc2lkZSBjb250ZW50J3MgcHJvcGVydHkgdmFsdWUuXFxuQmVjYXVzZSB5b3Ugd3JpdGUgeW91ciBDU1MgaW5zaWRlIGEgSmF2YVNjcmlwdCBzdHJpbmcgeW91IGFjdHVhbGx5IGhhdmUgdG8gZG8gZG91YmxlIGVzY2FwaW5nLCBzbyBmb3IgZXhhbXBsZSBcXFwiY29udGVudDogJ1xcXFwwMGQ3JztcXFwiIHNob3VsZCBiZWNvbWUgXFxcImNvbnRlbnQ6ICdcXFxcXFxcXDAwZDcnO1xcXCIuXFxuWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgdGhpcyBoZXJlOlxcbmh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1RlbXBsYXRlX2xpdGVyYWxzI0VTMjAxOF9yZXZpc2lvbl9vZl9pbGxlZ2FsX2VzY2FwZV9zZXF1ZW5jZXNcIjtcbnZhciBVTkRFRklORURfQVNfT0JKRUNUX0tFWV9FUlJPUiA9IFwiWW91IGhhdmUgcGFzc2VkIGluIGZhbHN5IHZhbHVlIGFzIHN0eWxlIG9iamVjdCdzIGtleSAoY2FuIGhhcHBlbiB3aGVuIGluIGV4YW1wbGUgeW91IHBhc3MgdW5leHBvcnRlZCBjb21wb25lbnQgYXMgY29tcHV0ZWQga2V5KS5cIjtcbnZhciBoeXBoZW5hdGVSZWdleCA9IC9bQS1aXXxebXMvZztcbnZhciBhbmltYXRpb25SZWdleCA9IC9fRU1PXyhbXl9dKz8pXyhbXl0qPylfRU1PXy9nO1xuXG52YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgcmV0dXJuIHByb3BlcnR5LmNoYXJDb2RlQXQoMSkgPT09IDQ1O1xufTtcblxudmFyIGlzUHJvY2Vzc2FibGVWYWx1ZSA9IGZ1bmN0aW9uIGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJztcbn07XG5cbnZhciBwcm9jZXNzU3R5bGVOYW1lID0gLyogI19fUFVSRV9fICovbWVtb2l6ZShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBpc0N1c3RvbVByb3BlcnR5KHN0eWxlTmFtZSkgPyBzdHlsZU5hbWUgOiBzdHlsZU5hbWUucmVwbGFjZShoeXBoZW5hdGVSZWdleCwgJy0kJicpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIHByb2Nlc3NTdHlsZVZhbHVlID0gZnVuY3Rpb24gcHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSkge1xuICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgY2FzZSAnYW5pbWF0aW9uTmFtZSc6XG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IHAxLFxuICAgICAgICAgICAgICBzdHlsZXM6IHAyLFxuICAgICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIGlmICh1bml0bGVzc1trZXldICE9PSAxICYmICFpc0N1c3RvbVByb3BlcnR5KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgY29udGVudFZhbHVlUGF0dGVybiA9IC8oYXR0cnxjb3VudGVycz98dXJsfCgoKHJlcGVhdGluZy0pPyhsaW5lYXJ8cmFkaWFsKSl8Y29uaWMpLWdyYWRpZW50KVxcKHwobm8tKT8ob3BlbnxjbG9zZSktcXVvdGUvO1xuICB2YXIgY29udGVudFZhbHVlcyA9IFsnbm9ybWFsJywgJ25vbmUnLCAnaW5pdGlhbCcsICdpbmhlcml0JywgJ3Vuc2V0J107XG4gIHZhciBvbGRQcm9jZXNzU3R5bGVWYWx1ZSA9IHByb2Nlc3NTdHlsZVZhbHVlO1xuICB2YXIgbXNQYXR0ZXJuID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nO1xuICB2YXIgaHlwaGVuYXRlZENhY2hlID0ge307XG5cbiAgcHJvY2Vzc1N0eWxlVmFsdWUgPSBmdW5jdGlvbiBwcm9jZXNzU3R5bGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCBjb250ZW50VmFsdWVzLmluZGV4T2YodmFsdWUpID09PSAtMSAmJiAhY29udGVudFZhbHVlUGF0dGVybi50ZXN0KHZhbHVlKSAmJiAodmFsdWUuY2hhckF0KDApICE9PSB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgfHwgdmFsdWUuY2hhckF0KDApICE9PSAnXCInICYmIHZhbHVlLmNoYXJBdCgwKSAhPT0gXCInXCIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBzZWVtIHRvIGJlIHVzaW5nIGEgdmFsdWUgZm9yICdjb250ZW50JyB3aXRob3V0IHF1b3RlcywgdHJ5IHJlcGxhY2luZyBpdCB3aXRoIGBjb250ZW50OiAnXFxcIlwiICsgdmFsdWUgKyBcIlxcXCInYFwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJvY2Vzc2VkID0gb2xkUHJvY2Vzc1N0eWxlVmFsdWUoa2V5LCB2YWx1ZSk7XG5cbiAgICBpZiAocHJvY2Vzc2VkICE9PSAnJyAmJiAhaXNDdXN0b21Qcm9wZXJ0eShrZXkpICYmIGtleS5pbmRleE9mKCctJykgIT09IC0xICYmIGh5cGhlbmF0ZWRDYWNoZVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGh5cGhlbmF0ZWRDYWNoZVtrZXldID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2luZyBrZWJhYi1jYXNlIGZvciBjc3MgcHJvcGVydGllcyBpbiBvYmplY3RzIGlzIG5vdCBzdXBwb3J0ZWQuIERpZCB5b3UgbWVhbiBcIiArIGtleS5yZXBsYWNlKG1zUGF0dGVybiwgJ21zLScpLnJlcGxhY2UoaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKHN0ciwgX2NoYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jaGFyLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KSArIFwiP1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2Vzc2VkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKSB7XG4gIGlmIChpbnRlcnBvbGF0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoaW50ZXJwb2xhdGlvbi5fX2Vtb3Rpb25fc3R5bGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLnRvU3RyaW5nKCkgPT09ICdOT19DT01QT05FTlRfU0VMRUNUT1InKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCBzZWxlY3RvcnMgY2FuIG9ubHkgYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIEBlbW90aW9uL2JhYmVsLXBsdWdpbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW50ZXJwb2xhdGlvbjtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZW9mIGludGVycG9sYXRpb24pIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIHtcbiAgICAgICAgaWYgKGludGVycG9sYXRpb24uYW5pbSA9PT0gMSkge1xuICAgICAgICAgIGN1cnNvciA9IHtcbiAgICAgICAgICAgIG5hbWU6IGludGVycG9sYXRpb24ubmFtZSxcbiAgICAgICAgICAgIHN0eWxlczogaW50ZXJwb2xhdGlvbi5zdHlsZXMsXG4gICAgICAgICAgICBuZXh0OiBjdXJzb3JcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBpbnRlcnBvbGF0aW9uLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW50ZXJwb2xhdGlvbi5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBuZXh0ID0gaW50ZXJwb2xhdGlvbi5uZXh0O1xuXG4gICAgICAgICAgaWYgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gbm90IHRoZSBtb3N0IGVmZmljaWVudCB0aGluZyBldmVyIGJ1dCB0aGlzIGlzIGEgcHJldHR5IHJhcmUgY2FzZVxuICAgICAgICAgICAgLy8gYW5kIHRoZXJlIHdpbGwgYmUgdmVyeSBmZXcgaXRlcmF0aW9ucyBvZiB0aGlzIGdlbmVyYWxseVxuICAgICAgICAgICAgd2hpbGUgKG5leHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBjdXJzb3IgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmV4dC5uYW1lLFxuICAgICAgICAgICAgICAgIHN0eWxlczogbmV4dC5zdHlsZXMsXG4gICAgICAgICAgICAgICAgbmV4dDogY3Vyc29yXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIG5leHQgPSBuZXh0Lm5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHN0eWxlcyA9IGludGVycG9sYXRpb24uc3R5bGVzICsgXCI7XCI7XG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbnRlcnBvbGF0aW9uLm1hcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdHlsZXMgKz0gaW50ZXJwb2xhdGlvbi5tYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjcmVhdGVTdHJpbmdGcm9tT2JqZWN0KG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBpbnRlcnBvbGF0aW9uKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKG1lcmdlZFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXNDdXJzb3IgPSBjdXJzb3I7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGludGVycG9sYXRpb24obWVyZ2VkUHJvcHMpO1xuICAgICAgICAgIGN1cnNvciA9IHByZXZpb3VzQ3Vyc29yO1xuICAgICAgICAgIHJldHVybiBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGdW5jdGlvbnMgdGhhdCBhcmUgaW50ZXJwb2xhdGVkIGluIGNzcyBjYWxscyB3aWxsIGJlIHN0cmluZ2lmaWVkLlxcbicgKyAnSWYgeW91IHdhbnQgdG8gaGF2ZSBhIGNzcyBjYWxsIGJhc2VkIG9uIHByb3BzLCBjcmVhdGUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBjc3MgY2FsbCBsaWtlIHRoaXNcXG4nICsgJ2xldCBkeW5hbWljU3R5bGUgPSAocHJvcHMpID0+IGNzc2Bjb2xvcjogJHtwcm9wcy5jb2xvcn1gXFxuJyArICdJdCBjYW4gYmUgY2FsbGVkIGRpcmVjdGx5IHdpdGggcHJvcHMgb3IgaW50ZXJwb2xhdGVkIGluIGEgc3R5bGVkIGNhbGwgbGlrZSB0aGlzXFxuJyArIFwibGV0IFNvbWVDb21wb25lbnQgPSBzdHlsZWQoJ2RpdicpYCR7ZHluYW1pY1N0eWxlfWBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IFtdO1xuICAgICAgICB2YXIgcmVwbGFjZWQgPSBpbnRlcnBvbGF0aW9uLnJlcGxhY2UoYW5pbWF0aW9uUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCwgcDEsIHAyKSB7XG4gICAgICAgICAgdmFyIGZha2VWYXJOYW1lID0gXCJhbmltYXRpb25cIiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICAgIG1hdGNoZWQucHVzaChcImNvbnN0IFwiICsgZmFrZVZhck5hbWUgKyBcIiA9IGtleWZyYW1lc2BcIiArIHAyLnJlcGxhY2UoL15Aa2V5ZnJhbWVzIGFuaW1hdGlvbi1cXHcrLywgJycpICsgXCJgXCIpO1xuICAgICAgICAgIHJldHVybiBcIiR7XCIgKyBmYWtlVmFyTmFtZSArIFwifVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlZC5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdga2V5ZnJhbWVzYCBvdXRwdXQgZ290IGludGVycG9sYXRlZCBpbnRvIHBsYWluIHN0cmluZywgcGxlYXNlIHdyYXAgaXQgd2l0aCBgY3NzYC5cXG5cXG4nICsgJ0luc3RlYWQgb2YgZG9pbmcgdGhpczpcXG5cXG4nICsgW10uY29uY2F0KG1hdGNoZWQsIFtcImBcIiArIHJlcGxhY2VkICsgXCJgXCJdKS5qb2luKCdcXG4nKSArICdcXG5cXG5Zb3Ugc2hvdWxkIHdyYXAgaXQgd2l0aCBgY3NzYCBsaWtlIHRoaXM6XFxuXFxuJyArIChcImNzc2BcIiArIHJlcGxhY2VkICsgXCJgXCIpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgfSAvLyBmaW5hbGl6ZSBzdHJpbmcgdmFsdWVzIChyZWd1bGFyIHN0cmluZ3MgYW5kIGZ1bmN0aW9ucyBpbnRlcnBvbGF0ZWQgaW50byBjc3MgY2FsbHMpXG5cblxuICBpZiAocmVnaXN0ZXJlZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGludGVycG9sYXRpb247XG4gIH1cblxuICB2YXIgY2FjaGVkID0gcmVnaXN0ZXJlZFtpbnRlcnBvbGF0aW9uXTtcbiAgcmV0dXJuIGNhY2hlZCAhPT0gdW5kZWZpbmVkID8gY2FjaGVkIDogaW50ZXJwb2xhdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RyaW5nRnJvbU9iamVjdChtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgb2JqKSB7XG4gIHZhciBzdHJpbmcgPSAnJztcblxuICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0cmluZyArPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCBvYmpbaV0pICsgXCI7XCI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgICB2YXIgdmFsdWUgPSBvYmpbX2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkICE9IG51bGwgJiYgcmVnaXN0ZXJlZFt2YWx1ZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyByZWdpc3RlcmVkW3ZhbHVlXSArIFwifVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgICBzdHJpbmcgKz0gcHJvY2Vzc1N0eWxlTmFtZShfa2V5KSArIFwiOlwiICsgcHJvY2Vzc1N0eWxlVmFsdWUoX2tleSwgdmFsdWUpICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfa2V5ID09PSAnTk9fQ09NUE9ORU5UX1NFTEVDVE9SJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgc2VsZWN0b3JzIGNhbiBvbmx5IGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBAZW1vdGlvbi9iYWJlbC1wbHVnaW4uJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnc3RyaW5nJyAmJiAocmVnaXN0ZXJlZCA9PSBudWxsIHx8IHJlZ2lzdGVyZWRbdmFsdWVbMF1dID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHZhbHVlLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaWYgKGlzUHJvY2Vzc2FibGVWYWx1ZSh2YWx1ZVtfaV0pKSB7XG4gICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBwcm9jZXNzU3R5bGVWYWx1ZShfa2V5LCB2YWx1ZVtfaV0pICsgXCI7XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbnRlcnBvbGF0ZWQgPSBoYW5kbGVJbnRlcnBvbGF0aW9uKG1lcmdlZFByb3BzLCByZWdpc3RlcmVkLCB2YWx1ZSk7XG5cbiAgICAgICAgICBzd2l0Y2ggKF9rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgICAgICBjYXNlICdhbmltYXRpb25OYW1lJzpcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBwcm9jZXNzU3R5bGVOYW1lKF9rZXkpICsgXCI6XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgX2tleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoVU5ERUZJTkVEX0FTX09CSkVDVF9LRVlfRVJST1IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBfa2V5ICsgXCJ7XCIgKyBpbnRlcnBvbGF0ZWQgKyBcIn1cIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbnZhciBsYWJlbFBhdHRlcm4gPSAvbGFiZWw6XFxzKihbXlxccztcXG57XSspXFxzKig7fCQpL2c7XG52YXIgc291cmNlTWFwUGF0dGVybjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc291cmNlTWFwUGF0dGVybiA9IC9cXC9cXCojXFxzc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uXFwvanNvbjtcXFMrXFxzK1xcKlxcLy9nO1xufSAvLyB0aGlzIGlzIHRoZSBjdXJzb3IgZm9yIGtleWZyYW1lc1xuLy8ga2V5ZnJhbWVzIGFyZSBzdG9yZWQgb24gdGhlIFNlcmlhbGl6ZWRTdHlsZXMgb2JqZWN0IGFzIGEgbGlua2VkIGxpc3RcblxuXG52YXIgY3Vyc29yO1xudmFyIHNlcmlhbGl6ZVN0eWxlcyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCByZWdpc3RlcmVkLCBtZXJnZWRQcm9wcykge1xuICBpZiAoYXJncy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3NbMF0gPT09ICdvYmplY3QnICYmIGFyZ3NbMF0gIT09IG51bGwgJiYgYXJnc1swXS5zdHlsZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhcmdzWzBdO1xuICB9XG5cbiAgdmFyIHN0cmluZ01vZGUgPSB0cnVlO1xuICB2YXIgc3R5bGVzID0gJyc7XG4gIGN1cnNvciA9IHVuZGVmaW5lZDtcbiAgdmFyIHN0cmluZ3MgPSBhcmdzWzBdO1xuXG4gIGlmIChzdHJpbmdzID09IG51bGwgfHwgc3RyaW5ncy5yYXcgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0cmluZ01vZGUgPSBmYWxzZTtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgc3RyaW5ncyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmVycm9yKElMTEVHQUxfRVNDQVBFX1NFUVVFTkNFX0VSUk9SKTtcbiAgICB9XG5cbiAgICBzdHlsZXMgKz0gc3RyaW5nc1swXTtcbiAgfSAvLyB3ZSBzdGFydCBhdCAxIHNpbmNlIHdlJ3ZlIGFscmVhZHkgaGFuZGxlZCB0aGUgZmlyc3QgYXJnXG5cblxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBzdHlsZXMgKz0gaGFuZGxlSW50ZXJwb2xhdGlvbihtZXJnZWRQcm9wcywgcmVnaXN0ZXJlZCwgYXJnc1tpXSk7XG5cbiAgICBpZiAoc3RyaW5nTW9kZSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgc3RyaW5nc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoSUxMRUdBTF9FU0NBUEVfU0VRVUVOQ0VfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXMgKz0gc3RyaW5nc1tpXTtcbiAgICB9XG4gIH1cblxuICB2YXIgc291cmNlTWFwO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgc3R5bGVzID0gc3R5bGVzLnJlcGxhY2Uoc291cmNlTWFwUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICBzb3VyY2VNYXAgPSBtYXRjaDtcbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgfSAvLyB1c2luZyBhIGdsb2JhbCByZWdleCB3aXRoIC5leGVjIGlzIHN0YXRlZnVsIHNvIGxhc3RJbmRleCBoYXMgdG8gYmUgcmVzZXQgZWFjaCB0aW1lXG5cblxuICBsYWJlbFBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgdmFyIGlkZW50aWZpZXJOYW1lID0gJyc7XG4gIHZhciBtYXRjaDsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YjgwOWMyY2YyOTQ5ODAwYTBmNjFmYjVcblxuICB3aGlsZSAoKG1hdGNoID0gbGFiZWxQYXR0ZXJuLmV4ZWMoc3R5bGVzKSkgIT09IG51bGwpIHtcbiAgICBpZGVudGlmaWVyTmFtZSArPSAnLScgKyAvLyAkRmxvd0ZpeE1lIHdlIGtub3cgaXQncyBub3QgbnVsbFxuICAgIG1hdGNoWzFdO1xuICB9XG5cbiAgdmFyIG5hbWUgPSBoYXNoU3RyaW5nKHN0eWxlcykgKyBpZGVudGlmaWVyTmFtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vICRGbG93Rml4TWUgU2VyaWFsaXplZFN0eWxlcyB0eXBlIGRvZXNuJ3QgaGF2ZSB0b1N0cmluZyBwcm9wZXJ0eSAoYW5kIHdlIGRvbid0IHdhbnQgdG8gYWRkIGl0KVxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICBtYXA6IHNvdXJjZU1hcCxcbiAgICAgIG5leHQ6IGN1cnNvcixcbiAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiWW91IGhhdmUgdHJpZWQgdG8gc3RyaW5naWZ5IG9iamVjdCByZXR1cm5lZCBmcm9tIGBjc3NgIGZ1bmN0aW9uLiBJdCBpc24ndCBzdXBwb3NlZCB0byBiZSB1c2VkIGRpcmVjdGx5IChlLmcuIGFzIHZhbHVlIG9mIHRoZSBgY2xhc3NOYW1lYCBwcm9wKSwgYnV0IHJhdGhlciBoYW5kZWQgdG8gZW1vdGlvbiBzbyBpdCBjYW4gaGFuZGxlIGl0IChlLmcuIGFzIHZhbHVlIG9mIGBjc3NgIHByb3ApLlwiO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgbmV4dDogY3Vyc29yXG4gIH07XG59O1xuXG5leHBvcnQgeyBzZXJpYWxpemVTdHlsZXMgfTtcbiIsInZhciBpc0Jyb3dzZXIgPSBcIm9iamVjdFwiICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lcykge1xuICB2YXIgcmF3Q2xhc3NOYW1lID0gJyc7XG4gIGNsYXNzTmFtZXMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAocmVnaXN0ZXJlZFtjbGFzc05hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlZ2lzdGVyZWRTdHlsZXMucHVzaChyZWdpc3RlcmVkW2NsYXNzTmFtZV0gKyBcIjtcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhd0NsYXNzTmFtZSArPSBjbGFzc05hbWUgKyBcIiBcIjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmF3Q2xhc3NOYW1lO1xufVxudmFyIGluc2VydFN0eWxlcyA9IGZ1bmN0aW9uIGluc2VydFN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgaXNTdHJpbmdUYWcpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IGNhY2hlLmtleSArIFwiLVwiICsgc2VyaWFsaXplZC5uYW1lO1xuXG4gIGlmICggLy8gd2Ugb25seSBuZWVkIHRvIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSByZWdpc3RlcmVkIGNhY2hlIGlmIHRoZVxuICAvLyBjbGFzcyBuYW1lIGNvdWxkIGJlIHVzZWQgZnVydGhlciBkb3duXG4gIC8vIHRoZSB0cmVlIGJ1dCBpZiBpdCdzIGEgc3RyaW5nIHRhZywgd2Uga25vdyBpdCB3b24ndFxuICAvLyBzbyB3ZSBkb24ndCBoYXZlIHRvIGFkZCBpdCB0byByZWdpc3RlcmVkIGNhY2hlLlxuICAvLyB0aGlzIGltcHJvdmVzIG1lbW9yeSB1c2FnZSBzaW5jZSB3ZSBjYW4gYXZvaWQgc3RvcmluZyB0aGUgd2hvbGUgc3R5bGUgc3RyaW5nXG4gIChpc1N0cmluZ1RhZyA9PT0gZmFsc2UgfHwgLy8gd2UgbmVlZCB0byBhbHdheXMgc3RvcmUgaXQgaWYgd2UncmUgaW4gY29tcGF0IG1vZGUgYW5kXG4gIC8vIGluIG5vZGUgc2luY2UgZW1vdGlvbi1zZXJ2ZXIgcmVsaWVzIG9uIHdoZXRoZXIgYSBzdHlsZSBpcyBpblxuICAvLyB0aGUgcmVnaXN0ZXJlZCBjYWNoZSB0byBrbm93IHdoZXRoZXIgYSBzdHlsZSBpcyBnbG9iYWwgb3Igbm90XG4gIC8vIGFsc28sIG5vdGUgdGhhdCB0aGlzIGNoZWNrIHdpbGwgYmUgZGVhZCBjb2RlIGVsaW1pbmF0ZWQgaW4gdGhlIGJyb3dzZXJcbiAgaXNCcm93c2VyID09PSBmYWxzZSApICYmIGNhY2hlLnJlZ2lzdGVyZWRbY2xhc3NOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2FjaGUucmVnaXN0ZXJlZFtjbGFzc05hbWVdID0gc2VyaWFsaXplZC5zdHlsZXM7XG4gIH1cblxuICBpZiAoY2FjaGUuaW5zZXJ0ZWRbc2VyaWFsaXplZC5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBzZXJpYWxpemVkO1xuXG4gICAgZG8ge1xuICAgICAgdmFyIG1heWJlU3R5bGVzID0gY2FjaGUuaW5zZXJ0KHNlcmlhbGl6ZWQgPT09IGN1cnJlbnQgPyBcIi5cIiArIGNsYXNzTmFtZSA6ICcnLCBjdXJyZW50LCBjYWNoZS5zaGVldCwgdHJ1ZSk7XG5cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfSB3aGlsZSAoY3VycmVudCAhPT0gdW5kZWZpbmVkKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgZ2V0UmVnaXN0ZXJlZFN0eWxlcywgaW5zZXJ0U3R5bGVzIH07XG4iXSwibmFtZXMiOlsidG9rZW4iLCJwZWVrIiwiaWRlbnRpZmllciIsInBvc2l0aW9uIiwiZGVsaW1pdCIsImZyb20iLCJuZXh0IiwiZGVhbGxvYyIsImFsbG9jIiwicHJlZml4ZXIiLCJzdHJpbmdpZnkiLCJydWxlc2hlZXQiLCJtaWRkbGV3YXJlIiwi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RSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxSCxDQUFDO0FBQ0QsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDdkIsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUNELFNBQVMsQ0FBQyxHQUFHO0FBQ2IsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFDRCxTQUFTLENBQUMsR0FBRztBQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUU7QUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ2YsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFDRCxTQUFTLENBQUMsR0FBRztBQUNiLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUU7QUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ2YsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFDRCxTQUFTLENBQUMsR0FBRztBQUNiLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxD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SUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2IsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDYixFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNiLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDZCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNkLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ2QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDZCxFQUFFLE9BQU8sRUFBRTtBQUNYLElBQUksUUFBUSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDN0IsTUFBTSxLQUFLLEVBQUUsQ0FBQztBQUNkLE1BQU0sS0FBSyxFQUFFLENBQUM7QUFDZCxNQUFNLEtBQUssRUFBRSxDQUFDO0FBQ2QsTUFBTSxLQUFLLEVBQUU7QUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEIsUUFBUSxNQUFNO0FBQ2QsTUFBTSxLQUFLLENBQUMsQ0FBQztBQUNiLE1BQU0sS0FBSyxFQUFFLENBQUM7QUFDZCxNQUFNLEtBQUssRUFBRSxDQUFDO0FBQ2QsTUFBTSxLQUFLLEVBQUU7QUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEIsUUFBUSxNQUFNO0FBQ2QsTUFBTSxLQUFLLEVBQUU7QUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVCLFFBQVEsU0FBUztBQUNqQixNQUFNLEtBQUssRUFBRTtBQUNiLFFBQVEsUUFBUSxDQUFDLEVBQUU7QUFDbkIsVUFBVSxLQUFLLEVBQUUsQ0FBQztBQUNsQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLFlBQVksTUFBTTtBQUNsQixVQUFVO0FBQ1YsWUFBWSxFQUFFLElBQUksR0FBRyxDQUFDO0FBQ3RCLFNBQVM7QUFDVCxRQUFRLE1BQU07QUFDZCxNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7QUFDbkIsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzlCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLE1BQU0sS0FBSyxFQUFFLENBQUM7QUFDZCxNQUFNLEtBQUssQ0FBQztBQUNaLFFBQVEsUUFBUSxFQUFFO0FBQ2xCLFVBQVUsS0FBSyxDQUFDLENBQUM7QUFDakIsVUFBVSxLQUFLLEdBQUc7QUFDbEIsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLFVBQVUsS0FBSyxFQUFFLEdBQUcsRUFBRTtBQUN0QixZQUFZLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtBQUNwQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkcsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksRUFBRSxJQUFJLEdBQUcsQ0FBQztBQUN0QixVQUFVO0FBQ1YsWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNqRixZQUFZLElBQUksRUFBRSxLQUFLLEdBQUc7QUFDMUIsY0FBYyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQzFCLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN2RDtBQUNBLGdCQUFnQixRQUFRLEVBQUU7QUFDMUIsa0JBQWtCLEtBQUssR0FBRyxDQUFDO0FBQzNCLGtCQUFrQixLQUFLLEdBQUcsQ0FBQztBQUMzQixrQkFBa0IsS0FBSyxHQUFHO0FBQzFCLG9CQUFvQixFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNqSSxvQkFBb0IsTUFBTTtBQUMxQixrQkFBa0I7QUFDbEIsb0JBQW9CLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3RCxpQkFBaUI7QUFDakIsU0FBUztBQUNULFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDN0QsUUFBUSxNQUFNO0FBQ2QsTUFBTSxLQUFLLEVBQUU7QUFDYixRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDaEMsTUFBTTtBQUNOLFFBQVEsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQ3BCLFVBQVUsSUFBSSxFQUFFLElBQUksR0FBRztBQUN2QixZQUFZLEVBQUUsRUFBRSxDQUFDO0FBQ2pCLGVBQWUsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxHQUFHO0FBQ3ZELFlBQVksU0FBUztBQUNyQixTQUFTO0FBQ1QsUUFBUSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7QUFDcEMsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLFlBQVksTUFBTTtBQUNsQixVQUFVLEtBQUssRUFBRTtBQUNqQixZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRCxZQUFZLE1BQU07QUFDbEIsVUFBVSxLQUFLLEVBQUU7QUFDakIsWUFBWSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUU7QUFDMUIsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0IsWUFBWSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7QUFDdkQsWUFBWSxNQUFNO0FBQ2xCLFVBQVUsS0FBSyxFQUFFO0FBQ2pCLFlBQVksSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQ3ZDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNyQixTQUFTO0FBQ1QsS0FBSztBQUNMLEVBQUUsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBQ0QsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUN4RCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbEIsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pCLEVBQUUsS0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ2hELElBQUksS0FBSyxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDcEYsTUFBTSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0QixFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUN4QixFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFDRCxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDNUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUNELFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDcEIsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQ25CLElBQUksS0FBSyxJQUFJO0FBQ2IsTUFBTSxPQUFPLENBQUMsR0FBRyxRQUFRLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNwQyxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZCxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZCxJQUFJLEtBQUssSUFBSTtBQUNiLE1BQU0sT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUN6QixJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2QsSUFBSSxLQUFLLElBQUksQ0FBQztBQUNkLElBQUksS0FBSyxJQUFJLENBQUM7QUFDZCxJQUFJ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
