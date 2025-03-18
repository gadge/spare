import { rhodFlopper }          from '@palett/flopper'
import { MIDTONE }              from '@palett/nuance-midtone'
import { bracket }              from '@texting/bracket'
import { Plot }                 from './Plot.js'
import { Roster }               from './Roster.js'
import { ansiOrSnake, hasBrPr } from './util/string.js'

export class Ros {
  static #pool
  static #camp
  static get pool() { return Ros.#pool ?? (Ros.#pool = rhodFlopper.call({ density: 0.2, munsell: MIDTONE }, false))}
  static get camp() { return Ros.#camp ?? (Ros.#camp = Roster.build(Ros.pool)) }
  static dispatch(tx) { return hasBrPr(tx) ? tx : bracket(Ros.camp.sign(ansiOrSnake(tx))) }
}

export class Plots {
  static #nein
  static #loom
  static #port
  static get nein() { return Plots.#nein ?? (Plots.#nein = Plot.build()) }
  static get loom() { return Plots.#loom ?? (Plots.#loom = Plot.build(Ros.dispatch)) }
  static get port() { return Plots.#port ?? (Plots.#port = Plot.build(Ros.dispatch)) }
}

export const ros = name => Ros.camp.sign(name)

export const xn = word => Plots.nein.init(word)

export const xr = word => Plots.loom.init(word)


/** @type {Object<string, Plot|((x: *) => string)>} */
export const $ = new Proxy(Plots.loom, {
  get(plot, key, proxy) {
    if (!plot.indexer) plot.load(proxy)
    // console.log('>> [trap].index', '[key]', `(${symOrStr(key)})`, '[target]', plot, `([${symOrStr(key)}] in plot)`, key in plot)
    if (key in plot) { return plot[key].bind(plot) }
    return plot.length ? plot.reg(key) : plot.ini(key), plot.rec.bind(plot)
  },
  apply(plot, ctx, args) {
    plot.log(...args)
  },
})

/** @type {Object<string, Plot|((x: *) => string)>} */
export const says = new Proxy(Plots.port, {
  get(plot, key, proxy) {
    if (!plot.indexer) plot.load(proxy)
    // console.log('>> [trap].index', '[key]', `(${symOrStr(key)})`, '[target]', plot, `([${symOrStr(key)}] in plot)`, key in plot)
    if (key in plot) { return plot[key].bind(plot) }
    plot.length ? plot.reg(key) : plot.ini(key)
    return plot.log.bind(plot)
  },
  apply(plot, ctx, args) {
    // console.log('>> [trap].apply', '[args]', `(${args})`, '[ctx]', ctx, '[tar]', plot + '', plot.name)
    plot.log(...args)
    // if (ctx) { console.log(String(plot), ...args.map(plot.render, plot)) } else { plot.rec(args[0]) }
    // console.log(String(tar), ...args.map(tar.render, tar))
    // return plot.proxy
  },
})





