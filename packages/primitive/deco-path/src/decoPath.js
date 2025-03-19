import { fadeFlopper, shiftFlopper, stageFlopper } from '@palett/flopper'
import { Munsell }                                 from '@palett/munsell'
import { MIDTONE }                                 from '@palett/nuance-midtone'
import { parsePresm }                              from '@spare/node'
import { serialVector }                            from '@spare/serial'
import { splitter }                                from '@texting/splitter'


/** @type {function(string,number,string?):string} */
export const pad = Function.prototype.call.bind(String.prototype.padStart)

export class Index {
  static #midtone
  static get midtone() { return this.#midtone ?? (this.#midtone = Munsell.build(MIDTONE)) }
}

export class Stage {
  static #sm
  static get sm() {return this.#sm ?? (this.#sm = stageFlopper.call(Index.midtone, 30))}
  static next() { return Stage.sm.next().value }
}

export class Shift {
  static #sm
  static get sm() {return this.#sm ?? (this.#sm = shiftFlopper.call(Index.midtone))}
  static next() { return Shift.sm.next().value }
}

export class Local {
  static cast = {}
}

export class Fades {
  flopper
  #curr
  constructor(munsell, count) { this.flopper = fadeFlopper.call(munsell, count) }
  static build(count) { return new Fades(Index.midtone, count) }
  curr() { return this.#curr ?? (this.#curr = this.flopper.next().value) }
  next() { return this.#curr = this.flopper.next().value }
  deco(path) { return decoPath.call(this.#curr = this.flopper.next().value, path) }
}

export function ac(path) { return decoPath.call(Stage.next(), path) }
export function ob(path) { return decoPath.call(Shift.next(), path) }

export function decoPath(path) {
  if (path in Local.cast) return Local.cast[path]
  const pres = this ?? Stage.next()
  const series = splitter.call(/[\\\/]+/g, path)
  const vector = serialVector.call(parsePresm(pres), series)
  return Local.cast[path] = vector.join('')
}

// export function decoPath(path) {
//   const pres = this ?? Local.flopper.next().value
//   const series = splitter.call(/[\\\/]+/g, path)
//   const vector = serialVector.call(parsePresm(pres), series)
//   return vector.join('')
// }





