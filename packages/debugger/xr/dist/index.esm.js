import { bracket as bracket$2, parenth as parenth$2 } from '@spare/bracket';
import { SP, COSP, CO } from '@spare/enum-chars';
import { Cards } from '@palett/cards';
import { hexToRgb } from '@palett/convert';
import { Dye } from '@palett/dye';
import { hasAnsi, clearAnsi } from '@spare/charset';
import { nullish } from '@typen/nullish';
import { deNaTab } from '@spare/util';

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
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");

  return _classApplyDescriptorGet(receiver, descriptor);
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

// from x => typeof x
const NUM = 'number';
const STR = 'string';
const DEF = 'default';

var _Cards$orange$lighten, _Cards$indigo$lighten;
const orange = Dye((_Cards$orange$lighten = Cards.orange.lighten_3, hexToRgb(_Cards$orange$lighten)));
const indigo = Dye((_Cards$indigo$lighten = Cards.indigo.lighten_1, hexToRgb(_Cards$indigo$lighten)));
const bracket$1 = tx => orange('[') + tx + orange(']');
const parenth$1 = tx => indigo('(') + tx + indigo(')');

var _Cards$blueGrey$base, _Cards$grey$darken_;
const blueGrey = Dye((_Cards$blueGrey$base = Cards.blueGrey.base, hexToRgb(_Cards$blueGrey$base)));
const grey = Dye((_Cards$grey$darken_ = Cards.grey.darken_1, hexToRgb(_Cards$grey$darken_)));
const bracket = (tx = '') => blueGrey('[') + grey(tx) + blueGrey(']');
const parenth = (tx = '') => blueGrey('(') + grey(tx) + blueGrey(')');

/**
 *
 * @param {*} [text]
 * @return {string}
 */

function render(text) {
  const queue = this,
        {
    indent
  } = queue;
  if (text !== null && text !== void 0 && text.length) queue.push(text);
  return SP.repeat(indent << 1) + queue.join(SP);
}

const EDGE_BRACKET = /^[(\[{].*[)\]}]$/;
const enqueue = function (key, ...items) {
  const {
    queue,
    conf
  } = this;
  const {
    bracket,
    parenth
  } = conf;

  if (items.every(nullish)) ; else {
    var _String;

    items = items.map(String).join(COSP);
    queue.push((_String = String(key), bracket.major(_String)));
    queue.push(hasAnsi(items) && EDGE_BRACKET.test(clearAnsi(items)) ? items : parenth.major(items));
  }

  return this;
};

const initQueue = t => {
  var _t;

  const queue = [];
  let hi, indent;
  if (t && (hi = (_t = t = String(t)) === null || _t === void 0 ? void 0 : _t.length) && (indent = deNaTab(t)) < hi) queue.push(t.slice(indent));
  queue.indent = indent;
  return {
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

const clearQueue = function (word) {
  return Object.assign(this, initQueue(word)), this;
};
/**
 * @typedef {Array<string>} ArrayWithIndent
 * @typedef {string} ArrayWithIndent.indent
 */

/**
 * @type {Object<string,string>}
 */

var _conf = new WeakMap();

_Symbol$toPrimitive = Symbol.toPrimitive;
class XrStream extends Callable {
  /** @type {ArrayWithIndent} */

  /** @type {number} */

  /** @type {{br:{major:Function,minor:Function},pa:{major:Function,minor:Function}} */
  constructor(word, pretty = true) {
    super(word => render.call(this.queue, word));

    _defineProperty(this, "queue", void 0);

    _defineProperty(this, "indent", void 0);

    _conf.set(this, {
      writable: true,
      value: {}
    });

    Object.assign(this, initQueue(word));
    _classPrivateFieldGet(this, _conf).bracket = pretty ? {
      major: bracket$1,
      minor: bracket
    } : {
      major: bracket$2,
      minor: bracket$2
    };
    _classPrivateFieldGet(this, _conf).parenth = pretty ? {
      major: parenth$1,
      minor: parenth
    } : {
      major: parenth$2,
      minor: parenth$2
    };
    return new Proxy(this, {
      get(target, name, receiver) {
        return name in target ? target[name] // `[proxy.get] (${ String(name) }) (${ target?.name })` |> logger,
        : (...items) => (enqueue.call(target, name, ...items), receiver);
      }

    });
  }

  get conf() {
    return _classPrivateFieldGet(this, _conf);
  }

  asc() {
    return this.queue.indent++, this;
  }

  desc() {
    return this.queue.indent--, this;
  }

  p(...items) {
    return this.queue.push(...items), this;
  }

  br(...items) {
    return this.queue.push(items.map(parenth$2).join(CO)), this;
  }

  toString() {
    return render.call(this.queue);
  }

  [_Symbol$toPrimitive](h) {
    switch (h) {
      case STR:
      case DEF:
        return render.call(this.queue);

      case NUM:
        return this.queue.indent;

      default:
        throw new Error('XrStream Symbol.toPrimitive error');
    }
  }

}

/**
 *
 * @param {string} [word]
 * @param {boolean} [color]
 * @returns {(XrStream|object<string,XrStream>)}
 * @constructor
 */

const Xr = (word, color = true) => new XrStream(word, color);

const xrSingleton = new XrStream();

const xr = word => clearQueue.call(xrSingleton, word);

export { Xr, xr };
