import { fadeFlopper, stageFlopper, shiftFlopper } from '@palett/flopper';
import { Munsell } from '@palett/munsell';
import { MIDTONE } from '@palett/nuance-midtone';
import { parsePresm } from '@spare/node';
import { serialVector } from '@spare/serial';
import { hasAnsi } from '@texting/charset-ansi';
import { splitter } from '@texting/splitter';

/** @type {function(string,number,string?):string} */
const pad = Function.prototype.call.bind(String.prototype.padStart);

class Index {
  static #midtone
  static get midtone() { return this.#midtone ?? (this.#midtone = Munsell.build(MIDTONE)) }
}

class Stage {
  static #sm
  static get sm() {return this.#sm ?? (this.#sm = stageFlopper.call(Index.midtone, 30))}
  static next() { return Stage.sm.next().value }
}

class Shift {
  static #sm
  static get sm() {return this.#sm ?? (this.#sm = shiftFlopper.call(Index.midtone))}
  static next() { return Shift.sm.next().value }
}

class Local {
  static cast = {}
}

class Fades {
  flopper
  #curr
  #cast = {}
  #length
  constructor(munsell, count) {
    this.#length = count;
    this.flopper = fadeFlopper.call(munsell, count);
  }
  static from(arrayLike) { return new Fades(Index.midtone, arrayLike.length) }
  static build(count) { return new Fades(Index.midtone, count) }
  get length() { return this.#length }
  curr() { return this.#curr ?? (this.#curr = this.next()) }
  next() { return this.#curr = this.flopper.next().value }
  deco(path) { return this.#cast[path] = decoPath.call(this.next(), path) }
  ac(name) { return !name?.length ? null : hasAnsi(name) ? name : this.#cast[name] ?? this.deco(name) }
}

function ac(path) { return decoPath.call(Stage.next(), path) }
function ob(path) { return decoPath.call(Shift.next(), path) }

function decoPath(path) {
  if (path in Local.cast) return Local.cast[path]
  const pres = this ?? Stage.next();
  const series = splitter.call(/[\\\/]+/g, path);
  const vector = serialVector.call(parsePresm(pres), series);
  return Local.cast[path] = vector.join('')
}

// export function decoPath(path) {
//   const pres = this ?? Local.flopper.next().value
//   const series = splitter.call(/[\\\/]+/g, path)
//   const vector = serialVector.call(parsePresm(pres), series)
//   return vector.join('')
// }

export { Fades, Local, ac, ac as acPath, decoPath, ob, pad };
