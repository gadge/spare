import { bracket as bracket$2, parenth as parenth$2 } from '@spare/bracket';
import { SP, COSP, CO } from '@spare/enum-chars';
import { hasAnsi, clearAnsi } from '@spare/charset';
import { deNaTab } from '@spare/util';
import { nullish } from '@typen/nullish';
import { Cards } from '@palett/cards';
import { hexToRgb } from '@palett/convert';
import { Dye } from '@palett/dye';

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
  return SP.repeat(indent << 1) + queue.join(SP);
};

const initQueue = t => {
  var _t;

  let queue = [],
      hi,
      i;
  if (t && (hi = (_t = t = String(t)) === null || _t === void 0 ? void 0 : _t.length) && (i = deNaTab(t)) < hi) queue.push(t.slice(i));
  return {
    indent: i,
    queue
  };
};
const EDGE_BRACKET = /^[(\[{].*[)\]}]$/;
function enqueue(queue, key, items) {
  var _items;

  const {
    br,
    pa
  } = this,
        hi = (_items = items) === null || _items === void 0 ? void 0 : _items.length;

  if (!hi || hi === 1 && nullish(items[0])) {
    var _String;

    queue.push((_String = String(key), br.minor(_String)));
    queue.push(pa.minor());
  } else {
    var _String2;

    items = items.map(String).join(COSP);
    queue.push((_String2 = String(key), br.major(_String2)));
    queue.push(hasAnsi(items) && EDGE_BRACKET.test(clearAnsi(items)) ? items : pa.major(items));
  }

  return queue;
}

var _Cards$orange$lighten, _Cards$indigo$lighten;
const orange = Dye((_Cards$orange$lighten = Cards.orange.lighten_3, hexToRgb(_Cards$orange$lighten)));
const indigo = Dye((_Cards$indigo$lighten = Cards.indigo.lighten_1, hexToRgb(_Cards$indigo$lighten)));
const bracket = tx => orange('[') + tx + orange(']');
const parenth = tx => indigo('(') + tx + indigo(')');

var _Cards$blueGrey$base, _Cards$grey$darken_;
const blueGrey = Dye((_Cards$blueGrey$base = Cards.blueGrey.base, hexToRgb(_Cards$blueGrey$base)));
const grey = Dye((_Cards$grey$darken_ = Cards.grey.darken_1, hexToRgb(_Cards$grey$darken_)));
const bracket$1 = (tx = '') => blueGrey('[') + grey(tx) + blueGrey(']');
const parenth$1 = (tx = '') => blueGrey('(') + grey(tx) + blueGrey(')');

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


var _set = _classPrivateFieldLooseKey("set");

_Symbol$toPrimitive = Symbol.toPrimitive;
class XrStream extends Callable {
  /** @type {number} */

  /** @type {string[]} */

  /** @type {{br:{major:Function,minor:Function},pa:{major:Function,minor:Function}} */
  constructor(word, pretty = true) {
    var _word;

    super(word => render(word, this));
    this.indent = void 0;
    this.queue = void 0;
    Object.defineProperty(this, _set, {
      writable: true,
      value: {}
    });
    Object.assign(this, (_word = word, initQueue(_word)));
    _classPrivateFieldLooseBase(this, _set)[_set].br = pretty ? {
      major: bracket,
      minor: bracket$1
    } : {
      major: bracket$2,
      minor: bracket$2
    };
    _classPrivateFieldLooseBase(this, _set)[_set].pa = pretty ? {
      major: parenth,
      minor: parenth$1
    } : {
      major: parenth$2,
      minor: parenth$2
    };
    return new Proxy(this, {
      get(t, p, receiver) {
        return p in t ? t[p] : (...items) => (enqueue.call(_classPrivateFieldLooseBase(t, _set)[_set], t.queue, p, items), receiver);
      }

    });
  }

  cr(word) {
    var _word2;

    return Object.assign(this, (_word2 = word, initQueue(_word2))), this;
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
    return this.queue.push(items.map(parenth$2).join(CO)), this;
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

const Xr = (word, color = true) => new XrStream(word, color);

const xrSingleton = new XrStream();

const xr = word => xrSingleton.cr(word);

export { Xr, xr };
