import { presFlopper, rhodFlopper } from '@palett/flopper';
import { MIDTONE } from '@palett/nuance-midtone';
import { bracket, parenth } from '@texting/bracket';
import { LF, SP } from '@texting/enum-chars';
import { SYM, STR, NUM, DEF } from '@typen/enum-data-types';
import { inspect } from 'node:util';
import { min } from '@aryth/comparer';
import { clearAnsi, hasAnsi } from '@texting/charset-ansi';
import { snakeToCamel, camelToSnake } from '@texting/phrasing';
import { decoString } from '@spare/deco-string';

const hasBrPr = tx => /^\s*[(\[{].*[)\]}]\s*$/.test(hasAnsi(tx) ? clearAnsi(tx) : tx);

const retBracket = tx => hasBrPr(typeof tx === SYM ? tx.description : tx) ? tx : bracket(tx);

const retParenth = tx => hasBrPr(typeof tx === SYM ? tx.description : tx) ? tx : parenth(tx);

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

function ansiOrSnake(tx) {
  if (hasAnsi(tx)) return tx
  if (/\s/.test(tx)) tx = snakeToCamel(tx);
  return camelToSnake(tx)
}

const altSp = (x) => (x.length === 0 || x.endsWith(SP)) ? '' : SP;

//extends Function
class Plot extends Function {
  /** @type {Proxy}           */ #indexer
  /** @type {string}          */ #intro = ''
  /** @type {Array}           */ #queue = []
  /** @type {(key:*)=>string} */ #key = retBracket
  /** @type {(val:*)=>string} */ #val = retParenth
  /** @type {()=>string}      */ #stamp

  constructor(key, val) {
    super();
    if (key) this.#key = key;
    if (val) this.#val = val;
  }

  static build(key, val) { return new Plot(key, val) }

  get indexer() { return this.#indexer }

  load(indexer) { return this.#indexer = indexer, this }
  get length() { return this.#queue.length }

  flush() {
    this.#intro = '';
    this.#queue.length = 0;
  }

  att(info) { return this.#stamp = info, this.#indexer }
  det() { return this.#stamp = null, this.#indexer }

  log(...args) {
    console.log(this.toString(), ...args.map(this.render, this));
    this.flush();
  }
  ini(k) {
    // this.flush()
    const [ intro, name ] = spinOff(k);
    // console.log(`>> [ini].call [intro] (${intro ?? ''}) [name] (${name})`)
    if (intro?.length) this.#intro = intro;
    if (name) this.#queue.push(this.#key(name));
    return this.#indexer
  }
  reg(k) { return this.#queue.push(this.#key(k)), this.#indexer }
  rec(...vs) { return this.#queue.push(...vs.map(this.#val, this)), this.#indexer }
  p(...x) { return this.#queue.push(...x), this.#indexer }
  br(x) { return this.#queue.push(this.#key(x)), this.#indexer }
  pr(x) { return this.#queue.push(this.#val(x)), this.#indexer }

  render(x) {
    const tx = typeof x === STR ? x : typeof x === SYM ? x.description : x + '';
    return tx.includes(LF)
      ? (LF + tx).replace(/\n/g, LF + carveIndent(this.#intro))
      : tx
  }
  toString() {
    const queue = this.#queue.map(this.render, this);
    let intro = this.#intro ?? '';
    if (this.#stamp) intro += altSp(intro) + this.#stamp();
    return intro + altSp(intro) + queue.join(SP)
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
  [inspect.custom]() {
    const output = this.toString();
    this.flush();
    return output
  }
}

class Roster {
  /** @type {Object<string,string>} */ #cast = {}
  /** @type {Generator<Preset>}     */ #pool

  constructor(presGen) {
    this.#pool = presGen ?? presFlopper(false);
  }

  static build(presGen) { return new Roster(presGen) }

  cast() { return this.#cast }

  reg(name) {
    // console.log('>> [roster] reg', this.#flopper.next().value,decoString.call(this.#flopper.next().value, String(name)))
    return this.#cast[name] = decoString.call(this.#pool.next().value, String(name))
  }

  sign(name) {
    if (!name?.length) return null
    if (hasAnsi(name)) return name
    return this.#cast[name] ?? this.reg(name)
  }
}

// if (!name?.length) return console.log('>> [roster].sign', parenth(name), '(null)', parenth(null)), null
// if (hasAnsi(name)) return console.log('>> [roster].sign', parenth(name), '(ansi)', parenth(name)), name
// let result = this.#roll[name] ?? this.reg(name)
// return console.log('>> [roster].sign', parenth(name), '(roll)', parenth(result)), result

class Ros {
  static #pool
  static #camp
  static get pool() { return Ros.#pool ?? (Ros.#pool = rhodFlopper.call({ density: 0.2, munsell: MIDTONE }, false))}
  static get camp() { return Ros.#camp ?? (Ros.#camp = Roster.build(Ros.pool)) }
  static dispatch(tx) { return hasBrPr(tx) ? tx : bracket(Ros.camp.sign(ansiOrSnake(tx))) }
}

class Plots {
  static #nein
  static #loom
  static #port
  static get nein() { return Plots.#nein ?? (Plots.#nein = Plot.build()) }
  static get loom() { return Plots.#loom ?? (Plots.#loom = Plot.build(Ros.dispatch)) }
  static get port() { return Plots.#port ?? (Plots.#port = Plot.build(Ros.dispatch)) }
}

const ros = name => Ros.camp.sign(name);

const xn = word => Plots.nein.init(word);

const xr = word => Plots.loom.init(word);


/** @type {Object<string, Plot|((x: *) => string)>} */
const $ = new Proxy(Plots.loom, {
  get(plot, key, proxy) {
    if (!plot.indexer) plot.load(proxy);
    // console.log('>> [trap].index', '[key]', `(${symOrStr(key)})`, '[target]', plot, `([${symOrStr(key)}] in plot)`, key in plot)
    if (key in plot) { return plot[key].bind(plot) }
    return plot.length ? plot.reg(key) : plot.ini(key), plot.rec.bind(plot)
  },
  apply(plot, ctx, args) {
    plot.log(...args);
  },
});

/** @type {Object<string, Plot|((x: *) => string)>} */
const says = new Proxy(Plots.port, {
  get(plot, key, proxy) {
    if (!plot.indexer) plot.load(proxy);
    // console.log('>> [trap].index', '[key]', `(${symOrStr(key)})`, '[target]', plot, `([${symOrStr(key)}] in plot)`, key in plot)
    if (key in plot) { return plot[key].bind(plot) }
    plot.length ? plot.reg(key) : plot.ini(key);
    return plot.log.bind(plot)
  },
  apply(plot, ctx, args) {
    // console.log('>> [trap].apply', '[args]', `(${args})`, '[ctx]', ctx, '[tar]', plot + '', plot.name)
    plot.log(...args);
    // if (ctx) { console.log(String(plot), ...args.map(plot.render, plot)) } else { plot.rec(args[0]) }
    // console.log(String(tar), ...args.map(tar.render, tar))
    // return plot.proxy
  },
});

export { $, Plots, Ros, ros, says, xn, xr };
