'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enumFontEffects = require('@palett/enum-font-effects');
var flopper = require('@palett/flopper');
var decoString = require('@spare/deco-string');
var enumDataTypes = require('@typen/enum-data-types');
var objectMapper = require('@vect/object-mapper');
var bracket = require('@spare/bracket');
var enumChars = require('@spare/enum-chars');

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

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");

  _classApplyDescriptorSet(receiver, descriptor, value);

  return value;
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

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

class Callable extends Function {
  constructor(f) {
    super();
    Reflect.setPrototypeOf(f, new.target.prototype);
    return f;
  }

}

const tab = ind => enumChars.SP.repeat(ind << 1);
const narrate = (text, context) => {
  let {
    name,
    des,
    ind,
    log,
    att
  } = context;
  let signature = `${tab(ind)}[${name}]`;
  if (att) signature += enumChars.SP + att();
  if (des !== null && des !== void 0 && des.length) signature += des, context.des = '';
  if (typeof text !== enumDataTypes.STR) text += '';
  return void log(signature, text.includes(enumChars.LF) ? (enumChars.LF + text).replace(/\n/g, enumChars.LF + tab(++ind)) : text);
};

/** @type {function} */

class Pal extends Callable {
  /** @type {string}   */

  /** @type {string}   */

  /** @type {number}   */

  /** @type {Function} */

  /** @type {Function} */
  constructor(name, {
    indent = 0,
    logger,
    attach
  } = {}) {
    super(text => narrate(text, this));

    _defineProperty(this, "name", '');

    _defineProperty(this, "des", '');

    _defineProperty(this, "ind", 0);

    _defineProperty(this, "log", console.log);

    _defineProperty(this, "att", void 0);

    if (name) this.name = name;
    if (indent) this.ind = indent;
    if (logger) this.log = logger;
    if (attach) this.attach(attach);
  }

  p(words) {
    return this.des += enumChars.SP + words, this;
  }

  br(words) {
    return this.des += enumChars.SP + bracket.parenth(words), this;
  }

  to(someone) {
    if (someone instanceof Pal) someone = someone.name;
    this.des += ' -> ' + bracket.bracket(someone);
    return this;
  }

  attach(func) {
    if (typeof func === enumDataTypes.FUN) {
      this.att = func;
    }

    return this;
  }

  detach() {
    return this.att = null, this;
  }

  level(logger) {
    if (typeof logger === enumDataTypes.STR && logger in console) {
      return this.log = console[logger], this;
    }

    if (typeof logger === enumDataTypes.FUN) {
      return this.log = logger, this;
    }

    return this;
  }

  get asc() {
    return this.ind++, this;
  }

  get desc() {
    return this.ind && this.ind--, this;
  }
  /**
   * @param {string} title
   * @param {Object} [options]
   * @returns {Pal|function}
   */


  static build(title, options) {
    return new Pal(title, options);
  }

}

var _roster = new WeakMap();

var _pool = new WeakMap();

var _effects = new WeakMap();

class Says {
  /** @type {Object<string,Pal|function>} */

  /** @type {Generator<{max:*,min:*,na:*}>} */

  /** @type {string[]!} */
  constructor(roster, effects) {
    _roster.set(this, {
      writable: true,
      value: {}
    });

    _pool.set(this, {
      writable: true,
      value: flopper.presetFlopper({
        exhausted: false
      })
    });

    _effects.set(this, {
      writable: true,
      value: undefined
    });

    if (roster) _classPrivateFieldSet(this, _roster, roster);

    _classPrivateFieldSet(this, _effects, effects);

    return new Proxy(this, {
      /** @returns {Pal|function} */
      get(t, p) {
        if (p in t) return typeof (p = t[p]) === enumDataTypes.FUN ? p.bind(t) : p;
        if (p in _classPrivateFieldGet(t, _roster)) return _classPrivateFieldGet(t, _roster)[p];
        return t.aboard(p, _classPrivateFieldGet(t, _pool).next().value);
      }

    });
  }

  aboard(name, presets) {
    const effects = _classPrivateFieldGet(this, _effects);

    if (!presets) ({
      value: presets
    } = _classPrivateFieldGet(this, _pool).next());
    return _classPrivateFieldGet(this, _roster)[name] = Pal.build(decoString.deco(String(name), {
      presets,
      effects
    }));
  }

  roster(name) {
    var _classPrivateFieldGet2;

    if (name) return ((_classPrivateFieldGet2 = _classPrivateFieldGet(this, _roster)[name]) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : this.aboard(name)).name;
    return objectMapper.mapper(_classPrivateFieldGet(this, _roster), ({
      name
    }) => name);
  }
  /**
   *
   * @param roster
   * @param effects
   * @returns {Says|Object<string,function>}
   */


  static build({
    roster,
    effects = [enumFontEffects.ITALIC]
  } = {}) {
    return new Says(roster, effects);
  }

}

/** @type {Function|Says} */

const says = new Says();
/** @type {Function} */
// const ros = says.roster.bind(says)

const ros = name => says.roster(name);

exports.Says = Says;
exports.ros = ros;
exports.says = says;
