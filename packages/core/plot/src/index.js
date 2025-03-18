import { rhodFlopper }          from '@palett/flopper'
import { Munsell }              from '@palett/munsell'
import { MIDTONE }              from '@palett/nuance-midtone'
import { bracket }              from '@texting/bracket'
import { Plot }                 from './Plot.js'
import { Roster }               from './Roster.js'
import { ansiOrSnake, hasBrPr } from './string-util.js'

export { Plot, Roster }

export class Ros {
  static #midtone
  static #flopper
  static #camp
  static get midtone() { return Ros.#midtone ?? (Ros.#midtone = Munsell.build(MIDTONE)) }
  static get flopper() {return Ros.#flopper ?? (Ros.#flopper = rhodFlopper.call({ petals: 4, density: 0.2, minL: 48, munsell: Ros.midtone }))}
  static get camp() { return Ros.#camp ?? (Ros.#camp = Roster.build(Ros.flopper)) }
  static dispatch(tx) { return hasBrPr(tx) ? tx : bracket(Ros.camp.ac(ansiOrSnake(tx))) }
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




