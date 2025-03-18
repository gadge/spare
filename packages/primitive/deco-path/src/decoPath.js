import { fadeFlopper, shiftFlopper } from '@palett/flopper'
import { Munsell }                   from '@palett/munsell'
import { MIDTONE }                   from '@palett/nuance-midtone'
import { parsePresm }                from '@spare/node'
import { serialVector }              from '@spare/serial'
import { splitter }                  from '@texting/splitter'


/** @type {function(string,number,string?):string} */
export const pad = Function.prototype.call.bind(String.prototype.padStart)


export class Cache {
  static #midtone
  static #flopper
  static get midtone() { return this.#midtone ?? (this.#midtone = Munsell.build(MIDTONE)) }
  static get flopper() { return this.#flopper ?? (this.#flopper = shiftFlopper.call(Cache.midtone)) }
}

export class Fades {
  flopper
  constructor(munsell, count) {
    this.flopper = fadeFlopper.call(munsell, count)
  }
  static build(count) { return new Fades(Cache.midtone, count) }
  deco(path) { return decoPath.call(this.flopper.next().value, path) }
}

export function decoPath(path) {
  const pres = this ?? Cache.flopper.next().value
  const series = splitter.call(/[\\\/]+/g, path)
  const vector = serialVector.call(parsePresm(pres), series)
  return vector.join('')
}





