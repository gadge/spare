import { presFlopper, rhodFlopper, presShifter, shiftFlopper, stageFlopper } from '@palett/flopper';
import { Munsell } from '@palett/munsell';
import { MIDTONE } from '@palett/nuance-midtone';
import { bracket, parenth } from '@texting/bracket';
import { COSP, LF, SP } from '@texting/enum-chars';
import { SYM, STR, NUM, DEF } from '@typen/enum-data-types';
import { inspect } from 'node:util';
import { min } from '@aryth/comparer';
import { clearAnsi, hasAnsi } from '@texting/charset-ansi';
import '@texting/phrasing';
import { decoString } from '@spare/deco-string';

class Interceptor {
  static index(func, ctx) {
    return ctx ? {
      get(_, key) {
        // console.log('>> [trap].index', retFn.name, '[key]', `(${String(key).padStart(12)})`, '[ctx]', ctx + '')
        if (key in ctx) { return ctx[key].bind(ctx) }
        ctx.reg(key);
        return func.bind(ctx)
      },
    } : {
      get(plot, key) {
        // console.log('>> [trap].index', retFn.name, '[key]', `(${String(key).padStart(12)})`, '[plot]', plot + '')
        if (key in plot) { return plot[key].bind(plot) }
        plot.reg(key);
        return func.bind(plot)
      },
    }
  }
}

function hasBrPr(tx) { return /^\s*[(\[{].*[)\]}]\s*$/.test(hasAnsi(tx) ? clearAnsi(tx) : tx) }

function retBracket(tx) { return hasBrPr(typeof tx === SYM ? tx.description : tx) ? tx : bracket(tx) }

function retParenth(tx) { return hasBrPr(typeof tx === SYM ? tx.description : tx) ? tx : parenth(tx) }

function carveIndent(tx) {
  let ms, ph;
  if ((ms = tx?.match(/\s+/)) && ([ ph ] = ms)) return ph
  return ''
}

function spinOff(tx) {
  if (/^\w.*\w$/.test(tx)) return [ null, tx ]
  const pos = min(//.exec(tx)?.index, /\b\w/.exec(tx)?.index);
  return pos ? [ tx.slice(0, pos), tx.slice(pos) ] : [ null, tx ]
}

class Plot {
  /** @type {Proxy<Object|Plot>}                */ #proxy
  /** @type {Proxy<Object|((xs: *) => string)>} */ #logProxy
  /** @type {Proxy<Object|((xs: *) => string)>} */ #recProxy
  /** @type {string}          */ #intro = ''
  /** @type {Array<string>}   */ #queue = []
  /** @type {(key:*)=>string} */ #keyFn = retBracket
  /** @type {(val:*)=>string} */ #valFn = retParenth
  /** @type {()=>string}  */ #stamp = null

  constructor(title, key, val) {
    this.init(title);
    if (key) this.#keyFn = key;
    if (val) this.#valFn = val;
  }

  static build(text, keyFn, valFn) { return new Plot(text, keyFn, valFn) }

  get proxy() { return this.#proxy ||= new Proxy(this, Interceptor.index(this.rec)) }
  get recProxy() { return this.#recProxy ||= new Proxy(this.rec.bind(this), Interceptor.index(this.rec, this)) }
  get logProxy() { return this.#logProxy ||= new Proxy(this.log.bind(this), Interceptor.index(this.log, this)) }

  init(key) {
    this.flush();
    const [ intro, name ] = spinOff(key); // console.log(`>> [ini].call [intro] (${intro}) [value] (${value})`)
    if (intro) this.#intro = intro;
    if (name) this.reg(name);
    return this.recProxy
  }

  flush() { this.#queue.length = 0; }
  attach(info) { return this.#stamp = info, this.proxy }
  detach() { return this.#stamp = null, this.proxy }

  log(...xs) {
    // console.log('log', 'queue', this.#queue, 'xs', xs)
    if (xs) this.#queue.push(...xs);
    console.log(this.toString());
    return this.#logProxy
  }
  reg(k) { return this.#queue.push(this.#keyFn(k)), this.proxy }
  rec(...xs) { return this.#queue.push(this.#valFn(xs.join(COSP))), this.proxy }
  br(x) { return this.#queue.push(this.#keyFn(x)), this.proxy }
  pr(...xs) { return this.#queue.push(xs.map(this.#valFn, this).join(COSP)), this.proxy }
  p(...xs) { return this.#queue.push(this.#valFn(xs.join(COSP))), this.proxy }

  render(x) {
    const tx = typeof x === STR ? x : typeof x === SYM ? x.description : x + '';
    return tx.includes(LF)
      ? (LF + tx).replace(/\n/g, LF + carveIndent(this.#intro))
      : tx
  }

  toString() {
    // console.log('intro', `(${this.#intro})`, 'queue', `(${this.#queue})`)
    let intro = this.#intro ?? '';
    if (this.#stamp) intro += (/\s$/.test(intro) ? '' : SP) + this.#stamp();
    return intro + this.#queue.map(this.render, this).join(SP) // + (/\s$/.test(intro) ? '' : SP) +
  }

  [Symbol.toPrimitive](type) {
    switch (type) {
      case STR:
      case DEF:
        return this.toString()
      case NUM:
        return this.#queue.length
      default:
        throw new Error('Plot Symbol.toPrimitive error')
    }
  }
  [inspect.custom]() { return this.toString() }
}

class Roster {
  /** @type {Object<string,string>} */ #cast = {}
  /** @type {Generator<Preset>}     */ #pool

  constructor(presGen) {
    this.#pool = presGen ?? presFlopper(false);
  }

  static build(presGen) { return new Roster(presGen) }
  static from(book, mode) {
    const makeGen =
      mode === 'rhod' ? rhodFlopper
        : mode === 'shift' ? presShifter
          : presFlopper;
    return new Roster(makeGen.call(book))
  }


  cast() { return this.#cast }

  reg(name) {
    return this.#cast[name] = decoString.call(this.#pool.next().value, String(name))
  }

  ac(name) {
    if (!name?.length) return null
    if (hasAnsi(name)) return name
    return this.#cast[name] ?? this.reg(name)
  }
}

class Index {
  static #midtone
  static get midtone() { return this.#midtone ?? (this.#midtone = Munsell.build(MIDTONE)) }
}

class Stage {
  static #sm
  static #ro
  static #pl
  static get sm() {return this.#sm ?? (this.#sm = stageFlopper.call(Index.midtone, 48))}
  static get ro() { return this.#ro ?? (this.#ro = Roster.build(this.sm)) }
  static get plot() { return this.#pl ?? (this.#pl = Plot.build('', this.br)) }
  static ac(tx) { return Stage.ro.ac(tx) }
  static br(tx) { return hasBrPr(tx) ? tx : bracket(Stage.ac(tx)) }
}

class Shift {
  static #sm
  static #ro
  static #pl
  static get sm() {return this.#sm ?? (this.#sm = shiftFlopper.call(Index.midtone))}
  static get ro() { return this.#ro ?? (this.#ro = Roster.build(this.sm)) }
  static get plot() { return this.#pl ?? (this.#pl = Plot.build('', Stage.br)) }
  static ac(tx) { return Shift.ro.ac(tx) }
  static br(tx) { return hasBrPr(tx) ? tx : bracket(Shift.ac(tx)) }
}

const Xr = Plot.build;

const ros = Stage.ac;
const ac = Stage.ac;
const ob = Shift.ac;

const xr = word => Stage.plot.init(word);

/** @type {Object<string, Plot|((x: *) => string)>} */
const $ = new Proxy(Shift.plot, {
  get(plot, key) {
    plot.init(key);
    return plot.recProxy
  },
});

/** @type {Object<string, Plot|((x: *) => string)>} */
const says = new Proxy(Stage.plot, {
  get(plot, key) {
    plot.init(key);
    // loom.log('>> [trap].index', '[key]', `(${String(key).padStart(12)})`, '[plot]', plot + '')
    return plot.logProxy
  },
});

export { $, Index, Plot, Roster, Shift, Stage, Xr, ac, ob, ros, says, xr };
