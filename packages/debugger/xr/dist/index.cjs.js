'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bracket$2 = require('@spare/bracket');
var enumChars = require('@spare/enum-chars');
var cards = require('@palett/cards');
var dye = require('@palett/dye');
var charset = require('@spare/charset');
var nullish = require('@typen/nullish');
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

// from x => typeof x
const NUM = 'number';
const STR = 'string';
const DEF = 'default';

const orange = dye.Dye.hex(cards.Cards.orange.lighten_3);
const indigo = dye.Dye.hex(cards.Cards.indigo.lighten_1);
const bracket$1 = tx => orange('[') + tx + orange(']');
const parenth$1 = tx => indigo('(') + tx + indigo(')');

const blueGrey = dye.Dye.hex(cards.Cards.blueGrey.base);
const grey = dye.Dye.hex(cards.Cards.grey.darken_1);
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
  if (text != null && text.length) queue.push(text);
  return enumChars.SP.repeat(indent << 1) + queue.join(enumChars.SP);
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

  if (items.every(nullish.nullish)) ; else {
    var _String;

    items = items.map(String).join(enumChars.COSP);
    queue.push((_String = String(key), bracket.major(_String)));
    queue.push(charset.hasAnsi(items) && EDGE_BRACKET.test(charset.clearAnsi(items)) ? items : parenth.major(items));
  }

  return this;
};

const initQueue = t => {
  var _t;

  const queue = [];
  let hi, indent;
  if (t && (hi = (_t = t = String(t)) == null ? void 0 : _t.length) && (indent = util.deNaTab(t)) < hi) queue.push(t.slice(indent));
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

var _conf = _classPrivateFieldLooseKey("conf");

_Symbol$toPrimitive = Symbol.toPrimitive;
class XrStream extends Callable {
  /** @type {ArrayWithIndent} */

  /** @type {number} */

  /** @type {{br:{major:Function,minor:Function},pa:{major:Function,minor:Function}} */
  constructor(word, pretty = true) {
    super(word => render.call(this.queue, word));
    this.queue = void 0;
    this.indent = void 0;
    Object.defineProperty(this, _conf, {
      writable: true,
      value: {}
    });
    Object.assign(this, initQueue(word));
    _classPrivateFieldLooseBase(this, _conf)[_conf].bracket = pretty ? {
      major: bracket$1,
      minor: bracket
    } : {
      major: bracket$2.bracket,
      minor: bracket$2.bracket
    };
    _classPrivateFieldLooseBase(this, _conf)[_conf].parenth = pretty ? {
      major: parenth$1,
      minor: parenth
    } : {
      major: bracket$2.parenth,
      minor: bracket$2.parenth
    };
    return new Proxy(this, {
      get(target, name, receiver) {
        return name in target ? target[name] // `[proxy.get] (${ String(name) }) (${ target?.name })` |> logger,
        : (...items) => (enqueue.call(target, name, ...items), receiver);
      }

    });
  }

  get conf() {
    return _classPrivateFieldLooseBase(this, _conf)[_conf];
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
    return this.queue.push(items.map(bracket$2.parenth).join(enumChars.CO)), this;
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

exports.Xr = Xr;
exports.xr = xr;
