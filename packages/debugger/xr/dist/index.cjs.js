'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bracket$1 = require('@spare/bracket');
var enumChars = require('@spare/enum-chars');
var cards = require('@palett/cards');
var convert = require('@palett/convert');
var dye = require('@palett/dye');
var util = require('@spare/util');

var id = 0;

function _classPrivateFieldLooseKey(name) {
  return "__private_" + id++ + "_" + name;
}

function _classPrivateFieldLooseBase(receiver, privateKey) {
  if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
    throw new TypeError("attempted to use private field on non-instance");
  }

  return receiver;
}

/**
 *
 * @param {*} [text]
 * @param {number} indent
 * @param {string[]} queue
 * @return {string}
 */
const render = (text, {
  indent,
  queue
}) => {
  if (text === null || text === void 0 ? void 0 : text.length) queue.push(text);
  return ' '.repeat(indent << 1) + queue.join(' ');
};

var _Cards$blueGrey$base, _Cards$orange$lighten, _Cards$indigo$lighten;
const bm = dye.Dye((_Cards$blueGrey$base = cards.Cards.blueGrey.base, convert.hexToRgb(_Cards$blueGrey$base)));
const br = dye.Dye((_Cards$orange$lighten = cards.Cards.orange.lighten_3, convert.hexToRgb(_Cards$orange$lighten)));
const pr = dye.Dye((_Cards$indigo$lighten = cards.Cards.indigo.lighten_1, convert.hexToRgb(_Cards$indigo$lighten)));
const bracket = tx => br('[') + tx + br(']');
const parenthesis = tx => pr('(') + tx + pr(')');

const toQueue = t => {
  var _t;

  let queue = [],
      l,
      d;
  if ((l = (_t = t = String(t)) === null || _t === void 0 ? void 0 : _t.length) && (d = util.deNaTab(t)) < l) queue.push(t.slice(d));
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

var _br = _classPrivateFieldLooseKey("br");

var _pa = _classPrivateFieldLooseKey("pa");

_Symbol$toPrimitive = Symbol.toPrimitive;
class Inka extends Callable {
  /** @type {number} */

  /** @type {string[]} */

  /** @type {Function} */

  /** @type {Function} */
  constructor(word, pretty = true) {
    var _word;

    super(word => render(word, this));
    this.indent = void 0;
    this.queue = void 0;
    Object.defineProperty(this, _br, {
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, _pa, {
      writable: true,
      value: void 0
    });
    Object.assign(this, (_word = word, toQueue(_word)));
    [_classPrivateFieldLooseBase(this, _br)[_br], _classPrivateFieldLooseBase(this, _pa)[_pa]] = pretty ? [bracket, parenthesis] : [bracket$1.bracket, bracket$1.parenth];
    return new Proxy(this, {
      get(target, p, receiver) {
        var _String;

        if (p in target) {
          return target[p];
        }

        const {
          queue
        } = target;
        queue.push((_String = String(p), _classPrivateFieldLooseBase(target, _br)[_br](_String)));
        return (...items) => {
          var _items$map$join;

          return queue.push((_items$map$join = items.map(String).join(enumChars.COSP), _classPrivateFieldLooseBase(target, _pa)[_pa](_items$map$join))), receiver;
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
    return this.queue.push(items.map(bracket$1.parenth).join(enumChars.CO)), this;
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

/**
 *
 * @param {string} [word]
 * @param {boolean} [color]
 * @returns {(Inka|object<string,Inka>)}
 * @constructor
 */

const Xr = (word, color = true) => new Inka(word, color);

const ink = new Inka();

const xr = word => ink.cr(word);

exports.Xr = Xr;
exports.xr = xr;
