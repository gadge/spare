import { shiftFlopper, stageFlopper } from '@palett/flopper'
import { Munsell }                    from '@palett/munsell'
import { MIDTONE }                    from '@palett/nuance-midtone'
import { bracket }                    from '@texting/bracket'
import { Plot }                       from './Plot.js'
import { Roster }                     from './Roster.js'
import { hasBrPr }                    from './string-util.js'

export { Plot, Roster }

export class Index {
  static #midtone
  static get midtone() { return this.#midtone ?? (this.#midtone = Munsell.build(MIDTONE)) }
}

export class Stage {
  static #sm
  static #ro
  static #pl
  static get sm() {return this.#sm ?? (this.#sm = stageFlopper.call(Index.midtone, 48))}
  static get ro() { return this.#ro ?? (this.#ro = Roster.build(this.sm)) }
  static get plot() { return this.#pl ?? (this.#pl = Plot.build('', this.br)) }
  static ac(tx) { return Stage.ro.ac(tx) }
  static br(tx) { return hasBrPr(tx) ? tx : bracket(Stage.ac(tx)) }
}

export class Shift {
  static #sm
  static #ro
  static #pl
  static get sm() {return this.#sm ?? (this.#sm = shiftFlopper.call(Index.midtone))}
  static get ro() { return this.#ro ?? (this.#ro = Roster.build(this.sm)) }
  static get plot() { return this.#pl ?? (this.#pl = Plot.build('', Stage.br)) }
  static ac(tx) { return Shift.ro.ac(tx) }
  static br(tx) { return hasBrPr(tx) ? tx : bracket(Shift.ac(tx)) }
}

export const Xr = Plot.build

export const ros = Stage.ac
export const ac = Stage.ac
export const ob = Shift.ac

export const xr = word => Stage.plot.init(word)

/** @type {Object<string, Plot|((x: *) => string)>} */
export const $ = new Proxy(Shift.plot, {
  get(plot, key) {
    plot.init(key)
    return plot.recProxy
  },
})

/** @type {Object<string, Plot|((x: *) => string)>} */
export const says = new Proxy(Stage.plot, {
  get(plot, key) {
    plot.init(key)
    // loom.log('>> [trap].index', '[key]', `(${String(key).padStart(12)})`, '[plot]', plot + '')
    return plot.logProxy
  },
})




