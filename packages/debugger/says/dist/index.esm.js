import { ITALIC } from '@palett/enum-font-effects';
import { presetFlopper } from '@palett/flopper';
import { deco } from '@spare/deco-string';
import { STR, FUN } from '@typen/enum-data-types';
import { mapper } from '@vect/object-mapper';
import { parenth, bracket } from '@spare/bracket';
import { LF, SP } from '@spare/enum-chars';

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

class Callable extends Function {
  constructor(f) {
    super();
    Reflect.setPrototypeOf(f, new.target.prototype);
    return f;
  }

}

const tab = ind => SP.repeat(ind << 1);
const logBy = (text, config) => {
  let {
    name,
    des,
    ind,
    log,
    att
  } = config;
  let signature = `${tab(ind)}[${name}]`;
  if (att) signature += SP + att();
  if (des != null && des.length) signature += des, config.des = '';
  if (typeof text !== STR) text += '';
  return void log(signature, text.includes(LF) ? (LF + text).replace(/\n/g, LF + tab(++ind)) : text);
};

const NAME = 'name'; // const WRITABLE = { writable: true }

/** @type {function} */

class Pal extends Callable {
  // /** @type {string}   */ name

  /** @type {string}   */

  /** @type {number}   */

  /** @type {Function} */

  /** @type {Function} */
  constructor(name, {
    indent = 0,
    logger,
    attach
  } = {}) {
    // const f = text => logBy(text, this)
    // Object.defineProperty(f, NAME, WRITABLE)
    // super(f)
    super(text => logBy(text, this));
    this.des = '';
    this.ind = 0;
    this.log = console.log;
    this.att = void 0;
    Object.defineProperty(this, NAME, {
      value: name ?? '',
      writable: true
    }); // if (name) this.name = name

    if (indent) this.ind = indent;
    if (logger) this.log = logger;
    if (attach) this.attach(attach);
  }

  p(words) {
    return this.des += SP + words, this;
  }

  br(words) {
    return this.des += SP + parenth(words), this;
  }

  to(someone) {
    if (someone instanceof Pal) someone = someone.name;
    this.des += ' -> ' + bracket(someone);
    return this;
  }

  attach(func) {
    if (typeof func === FUN) {
      this.att = func;
    }

    return this;
  }

  detach() {
    return this.att = null, this;
  }

  level(logger) {
    if (typeof logger === STR && logger in console) {
      return this.log = console[logger], this;
    }

    if (typeof logger === FUN) {
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

var _roster = _classPrivateFieldLooseKey("roster");

var _pool = _classPrivateFieldLooseKey("pool");

var _effects = _classPrivateFieldLooseKey("effects");

class Says {
  /** @type {Object<string,Pal|function>} */

  /** @type {Generator<{max:*,min:*,na:*}>} */

  /** @type {string[]!} */
  constructor(roster, effects) {
    Object.defineProperty(this, _roster, {
      writable: true,
      value: {}
    });
    Object.defineProperty(this, _pool, {
      writable: true,
      value: presetFlopper({
        exhausted: false
      })
    });
    Object.defineProperty(this, _effects, {
      writable: true,
      value: undefined
    });
    if (roster) _classPrivateFieldLooseBase(this, _roster)[_roster] = roster;
    _classPrivateFieldLooseBase(this, _effects)[_effects] = effects;
    return new Proxy(this, {
      /** @returns {Pal|function} */
      get(t, p) {
        if (p in t) return typeof (p = t[p]) === FUN ? p.bind(t) : p;
        if (p in _classPrivateFieldLooseBase(t, _roster)[_roster]) return _classPrivateFieldLooseBase(t, _roster)[_roster][p];
        return t.aboard(p, _classPrivateFieldLooseBase(t, _pool)[_pool].next().value);
      }

    });
  }

  aboard(name, presets) {
    var _deco;

    return _classPrivateFieldLooseBase(this, _roster)[_roster][name] = (_deco = deco(String(name), {
      presets: presets ?? _classPrivateFieldLooseBase(this, _pool)[_pool].next().value,
      effects: _classPrivateFieldLooseBase(this, _effects)[_effects]
    }), Pal.build(_deco));
  }

  roster(name) {
    if (name) return (_classPrivateFieldLooseBase(this, _roster)[_roster][name] ?? this.aboard(name)).name;
    return mapper(_classPrivateFieldLooseBase(this, _roster)[_roster], ({
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
    effects = [ITALIC]
  } = {}) {
    return new Says(roster, effects);
  }

}

/** @type {Function|Says} */

const says = new Says();
/** @type {Function} */
// const ros = says.roster.bind(says)

const ros = name => says.roster(name);

export { Says, ros, says };
