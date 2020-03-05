'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var cards = require('@palett/cards');
var convert = require('@palett/convert');
var dye = require('@palett/dye');
var util = require('@spare/util');

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

function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = privateMap.get(receiver);

  if (!descriptor) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

function _classPrivateFieldDestructureSet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  var descriptor = privateMap.get(receiver);

  if (descriptor.set) {
    if (!("__destrObj" in descriptor)) {
      descriptor.__destrObj = {
        set value(v) {
          descriptor.set.call(receiver, v);
        }

      };
    }

    return descriptor.__destrObj;
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    return descriptor;
  }
}

var _Cards$blueGrey$base, _Cards$orange$lighten, _Cards$indigo$lighten;
const bm = dye.Dye((_Cards$blueGrey$base = cards.Cards.blueGrey.base, convert.hexToRgb(_Cards$blueGrey$base)));
const br = dye.Dye((_Cards$orange$lighten = cards.Cards.orange.lighten_3, convert.hexToRgb(_Cards$orange$lighten)));
const pr = dye.Dye((_Cards$indigo$lighten = cards.Cards.indigo.lighten_1, convert.hexToRgb(_Cards$indigo$lighten)));
const bracket = tx => br('[') + tx + br(']');
const parenthesis = tx => pr('(') + tx + pr(')');

const bracket$1 = tx => '[' + tx + ']';
const parenthesis$1 = tx => '(' + tx + ')';

/**
 *
 * @param {*} [text]
 * @param {number} indent
 * @param {string[]} queue
 * @returns {string}
 */
const render = (text, {
  indent,
  queue
}) => {
  if (text === null || text === void 0 ? void 0 : text.length) queue.push(text);
  return ' '.repeat(indent << 1) + queue.join(' ');
};

const toQueue = t => {
  let queue = [],
      l,
      d;

  if (t && (t = String(t)) && (l = t.length) && (d = util.deNaTab(t)) < l) {
    queue.push(t.slice(d));
  }

  return {
    indent: d,
    queue
  };
};

let _Symbol$toPrimitive;

class Callable extends Function {
  constructor(f) {
    super();
    Reflect.setPrototypeOf(f, new.target.prototype);
    return f;
  }

}
/**
 * @type {Object<string,string>}
 */


_Symbol$toPrimitive = Symbol.toPrimitive;
class Inka extends Callable {
  /** @type {number} */

  /** @type {string[]} */

  /** @type {Function} */

  /** @type {Function} */
  constructor(word, color = true) {
    var _word;

    super(word => render(word, this));

    _defineProperty(this, "indent", void 0);

    _defineProperty(this, "queue", void 0);

    _brk.set(this, {
      writable: true,
      value: void 0
    });

    _prn.set(this, {
      writable: true,
      value: void 0
    });

    Object.assign(this, (_word = word, toQueue(_word)));
    [_classPrivateFieldDestructureSet(this, _brk).value, _classPrivateFieldDestructureSet(this, _prn).value] = color ? [bracket, parenthesis] : [bracket$1, parenthesis$1];
    return new Proxy(this, {
      get(target, p, receiver) {
        var _String;

        if (p in target) {
          return target[p];
        }

        const {
          queue
        } = target;
        queue.push((_String = String(p), _classPrivateFieldGet(target, _brk)(_String)));
        return (...items) => {
          var _items$map$join;

          return queue.push((_items$map$join = items.map(String).join(', '), _classPrivateFieldGet(target, _prn)(_items$map$join))), receiver;
        };
      }

    });
  }

  cr(word) {
    var _word2;

    return Object.assign(this, (_word2 = word, toQueue(_word2))), this;
  }

  asc() {
    return this.indent++, this;
  }

  desc() {
    return this.indent--, this;
  }

  p(...items) {
    return this.queue.push(...items), this;
  }

  br(...items) {
    return this.queue.push(items.map(parenthesis$1).join(',')), this;
  }

  toString() {
    return render(null, this);
  }

  [_Symbol$toPrimitive](h) {
    switch (h) {
      case 'string':
      case 'default':
        return render(null, this);

      case 'number':
        return this.indent;

      default:
        throw new Error('inka Symbol.toPrimitive error');
    }
  }

}

var _brk = new WeakMap();

var _prn = new WeakMap();

/**
 *
 * @param {string} word
 * @param {boolean} color
 * @returns {(Inka|object<string,Inka>)}
 * @constructor
 */

const Xr = (word, color = true) => new Inka(word, color);

const ink = new Inka();

const xr = word => ink.cr(word);

exports.Xr = Xr;
exports.xr = xr;
