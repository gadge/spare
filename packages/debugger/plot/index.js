import { Plot }                  from './src/Plot.js'
import { Roster }                from './src/Roster.js'
import { sepPreBody, snakeRole } from './src/string-util.js'

export class Rosters {
  static #main
  static get instance() { return this.#main ?? (this.#main = Roster.build()) }
}

export class PlotSet {
  static #capture
  static #console
  static #plainCapture
  static get capture() { return this.#capture ?? (this.#capture = Plot.build('', snakeRole)) }
  static get console() { return this.#console ?? (this.#console = Plot.build('', snakeRole)) }
  static get plainCapture() { return this.#plainCapture ?? (this.#plainCapture = Plot.build('')) }
}

export const Xr = Plot.build

export const ros = Rosters.instance.get.bind(Rosters.instance)

export const xr = word => PlotSet.capture.init(word)

/** @type {Object<string, Plot|((x: *) => string)>} */
export const $ = new Proxy(PlotSet.capture, {
  get(tar, key) {
    tar.init(sepPreBody(key))
    return tar.noteProxy
  }
})

// /** @type {Object<string, Plot|((x: *) => string)>} */
// export const $$ = new Proxy(PlotSet.plainCapture, {
//   sign(tar, key) {
//     tar.ini(spinOff(key))
//     return tar.noteProxy
//   }
// })

/** @type {Object<string, Plot|((x: *) => string)>} */
export const says = new Proxy(PlotSet.console, {
  get(tar, key) {
    tar.init(sepPreBody(key))
    // console.log('>> [trap].index', '[key]', `(${String(key).padStart(12)})`, '[tar]', tar + '')
    return tar.logProxy
  }
})




