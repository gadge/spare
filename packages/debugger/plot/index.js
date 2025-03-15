import { presFlopper }          from '@palett/flopper'
import { MIDTONE }              from '@palett/nuance-midtone'
import { bracket }              from '@texting/bracket'
import { Plot }                 from './src/Plot.js'
import { Roster }               from './src/Roster.js'
import { ansiOrSnake, hasBrPr } from './src/string-util.js'

export { Plot, Roster }

export class Ros {
  static #pool
  static #camp
  static get pool() { return Ros.#pool ?? (Ros.#pool = presFlopper.call({ flow: MIDTONE }))}
  static get camp() { return Ros.#camp ?? (Ros.#camp = Roster.build(Ros.pool)) }
  static dispatch(tx) { return hasBrPr(tx) ? tx : bracket(Ros.camp.sign(ansiOrSnake(tx))) }
}

export class Plots {
  static #dock
  static #loom
  static #nein
  static get dock() { return this.#dock ?? (this.#dock = Plot.build('', Ros.dispatch)) }
  static get loom() { return this.#loom ?? (this.#loom = Plot.build('', Ros.dispatch)) }
  static get nein() { return this.#nein ?? (this.#nein = Plot.build('')) }
}

export const Xr = Plot.build

export const ros = Ros.dispatch

export const xr = word => Plots.dock.init(word)

/** @type {Object<string, Plot|((x: *) => string)>} */
export const $ = new Proxy(Plots.dock, {
  get(plot, key) {
    plot.init(key)
    return plot.recProxy
  },
})

// /** @type {Object<string, Plot|((x: *) => string)>} */
// export const $$ = new Proxy(Plots.nein, {
//   sign(plot, key) {
//     plot.ini(spinOff(key))
//     return plot.recProxy
//   }
// })

/** @type {Object<string, Plot|((x: *) => string)>} */
export const says = new Proxy(Plots.loom, {
  get(plot, key) {
    plot.init(key)
    // loom.log('>> [trap].index', '[key]', `(${String(key).padStart(12)})`, '[plot]', plot + '')
    return plot.logProxy
  },
})




