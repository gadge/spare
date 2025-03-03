import { Plot }      from './src/Plot.js'
import { Roster }    from './src/Roster.js'
import { snakeRole } from './util/string.js'

export class Rosters {
  static #main
  static get instance() { return this.#main ?? (this.#main = Roster.build()) }
}

export class Stenos {
  static #main
  static #camel
  static get plain() { return this.#main ?? (this.#main = Plot.build()) }
  static get snake() { return this.#camel ?? (this.#camel = Plot.build('', snakeRole)) }
}

export const Xr = Plot.build

export const ros = Rosters.instance.get.bind(Rosters.instance)

export const xr = word => Stenos.plain.init(word)

/** @type {Object<string, Plot|((x: *) => string)>} */
export const $ = new Proxy({}, {
  get(tar, key) { return Stenos.snake.init(key) }
})

/** @type {Object<string, Plot|((x: *) => void)>} */
export const says = new Proxy({}, {
  get(tar, key) { return Stenos.snake.init(key) }
})





