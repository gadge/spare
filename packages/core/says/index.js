import { ITALIC } from '@palett/enum-font-effects';
import { presFlopper } from '@palett/flopper';
import { decoString } from '@spare/deco-string';
import { FUN, STR } from '@typen/enum-data-types';
import { mapper } from '@vect/object-mapper';
import { Callable } from '@ject/callable';
import { bracket, parenth } from '@texting/bracket';
import { SP, LF } from '@texting/enum-chars';

const NAME = 'name';
// const WRITABLE = { writable: true }

const tab = ind => SP.repeat(ind << 1);


/** @type {function} */
class Pal extends Callable {
  // /** @type {string}   */ name
  /** @type {string}   */ des = ''
  /** @type {string}   */ prefix = ''
  /** @type {Function} */ logger = console.log
  /** @type {Function} */ att = void 0
  /** @type {{max:*,min:*,na:*}} */ pres
  constructor(value = '', { prefix, logger, attach, pres } = {}) {
    super(text => Pal.prototype.sentence.call(this, text));
    Reflect.defineProperty(this, NAME, { value, writable: true });
    if (prefix) this.prefix = prefix;
    if (logger) this.logger = logger;
    if (pres) this.pres = pres;
  }

  /**
   * @param {string} title
   * @param {Object} [options]
   * @returns {Pal|function}
   */
  static build(title, options) { return new Pal(title, options) }
  get asc() { return this.ind++, this }
  get desc() { return (this.ind && this.ind--), this }

  sentence(text) {
    let { name, des, ind, logger, att } = this;
    let signature = `${tab(ind)}[${name}]`;
    if (att) signature += SP + att();
    if (des?.length) signature += des, this.des = '';
    if (typeof text !== STR) text += '';
    return void logger(
      signature,
      text.includes(LF)
        ? (LF + text).replace(/\n/g, LF + tab(++ind))
        : text
    )
  }

  render(message) { return decoString(String(message), { pres: this.pres }) }
  p(words) { return this.des += SP + words, this }
  br(words) { return this.des += SP + bracket(words), this }
  pr(words) { return this.des += SP + parenth(words), this }
  to(tar) {
    if (tar instanceof Pal) tar = tar.name;
    this.des += ' -> ' + bracket(tar);
    return this
  }

  attach(func) {
    if (typeof func === FUN) { this.att = func; }
    return this
  }
  detach() { return this.att = null, this }

  level(logger) {
    if (typeof logger === STR && logger in console) { return this.logger = console[logger], this }
    if (typeof logger === FUN) { return this.logger = logger, this }
    return this
  }
}

/* @typedef {{max:string,min:string,na:string}} Preset */

/* @typedef {function(string):string} Pal */

class Says {
  /** @type {Object<string,Pal>} */ #roster = {}
  /** @type {Generator<Preset>}  */ #pool = presFlopper(false)
  /** @type {string[]}           */ #effects = undefined

  constructor(roster, effects) {
    if (roster) this.#roster = roster;
    this.#effects = effects;
    return new Proxy(this, {
      /** @returns {Pal|function} */
      get(says, key) {
        let item;
        if (key in says && (item = says[key])) return typeof item === FUN ? item.bind(says) : item
        if (key in says.#roster) return says.#roster[key]
        return says.aboard(key, says.#pool.next().value)
      }
    })
  }

  static build({ roster, effects = [ ITALIC ] } = {}) { return new Says(roster, effects) }

  aboard(name, pres) {
    const decoName = decoString(String(name), { pres: pres ||= this.#pool.next().value });
    return this.#roster[name] = Pal.build(decoName, pres)
  }

  roster(name) { return name?.length ? (this.#roster[name] ?? this.aboard(name)).name : null }
  rosters() { return mapper(this.#roster, ({ name }) => name) }
}

/** @type {Object<string,(name: string) => void>|Says} */
const says = new Says();

/** @type {(name: string) => string} */
  // const ros = says.roster.bind(says)
const ros = (name) => says.roster(name);

export { Says, ros, says };
