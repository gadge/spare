import { deNaTab, totx, tabify } from '@spare/util';
import { Cards } from '@palett/cards';
import { hexToRgb } from '@palett/convert';
import { Dye } from '@palett/dye';

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

var _Cards$blueGrey$base, _Cards$orange$lighten, _Cards$indigo$lighten;
const bm = Dye((_Cards$blueGrey$base = Cards.blueGrey.base, hexToRgb(_Cards$blueGrey$base)));
const br = Dye((_Cards$orange$lighten = Cards.orange.lighten_3, hexToRgb(_Cards$orange$lighten)));
const pr = Dye((_Cards$indigo$lighten = Cards.indigo.lighten_1, hexToRgb(_Cards$indigo$lighten)));
const bracketMain = tx => bm('[') + tx + bm(']');
const bracket = tx => br('[') + tx + br(']');
const parenthesis = tx => pr('(') + tx + pr(')');

const render = (tx, {
  indent,
  stream
}) => {
  if (tx === null || tx === void 0 ? void 0 : tx.length) stream.push(tx);
  return ' '.repeat(indent << 1) + stream.join(' ');
};

const preset = (label, ...items) => {
  var _label;

  let stream = [],
      indent,
      len;

  if (label && (label = String(label)) && (len = label.length) && (indent = (_label = label, deNaTab(_label))) < len) {
    var _label$slice;

    stream.push((_label$slice = label.slice(indent), bracketMain(_label$slice)));
  }

  if (items.length) {
    var _items$map$join;

    stream.push((_items$map$join = items.map(totx).join(','), parenthesis(_items$map$join)));
  }

  return {
    indent,
    stream
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
 * @type {object<string,string>}
 */


_Symbol$toPrimitive = Symbol.toPrimitive;
class Ink extends Callable {
  /** @type {number} */

  /** @type {string[]} */
  constructor(label, ...items) {
    super(tx => render(tx, this));

    _defineProperty(this, "indent", void 0);

    _defineProperty(this, "stream", void 0);

    this.cr(label, ...items);
    return new Proxy(this, {
      /** @returns {Ink|function(...string):Ink} */
      get(target, p, receiver) {
        var _String;

        if (p in target) return target[p];
        target.stream.push((_String = String(p), bracket(_String)));
        return (...items) => {
          var _items$map$join;

          target.stream.push((_items$map$join = items.map(totx).join(', '), parenthesis(_items$map$join)));
          return receiver;
        };
      }

    });
  }

  [_Symbol$toPrimitive](h) {
    switch (h) {
      case 'string':
      case 'default':
        return render(null, this);

      case 'number':
        return this.indent;

      default:
        throw new Error('ink Symbol.toPrimitive error');
    }
  }

  cr(label, ...items) {
    const {
      indent,
      stream
    } = preset(label, ...items);
    this.indent = indent;
    this.stream = stream;
    return this;
  }

  asc() {
    this.indent++;
    return this;
  }

  desc() {
    this.indent--;
    return this;
  }

  tag(key, ...items) {
    var _ref, _key, _items$map$join2;

    this.stream.push((_ref = (_key = key, totx(_key)), tabify(_ref)));
    if (items.length) this.stream.push((_items$map$join2 = items.map(totx).join(','), parenthesis(_items$map$join2)));
    return this;
  }

  br(...items) {
    this.stream.push(items.map(parenthesis).join(','));
    return this;
  }

  p(...items) {
    this.stream.push(...items);
    return this;
  }

  get tx() {
    return render(null, this);
  }

  get say() {
    return render(null, this);
  }

  toString() {
    return render(null, this);
  }

}

/**
 *
 * @param label
 * @param items
 * @returns {(Ink|object<string,Ink>)}
 * @constructor
 */

const Xr = (label, ...items) => new Ink(label, ...items);

const ink = new Ink();

const xr = (label, ...items) => ink.cr(label, ...items);

export { Xr, xr };
