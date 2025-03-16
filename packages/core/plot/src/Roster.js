import { presFlopper, presShifter } from '@palett/flopper'
import { decoString }               from '@spare/deco-string'
import { hasAnsi }                  from '@texting/charset-ansi'


export class Roster {
  /** @type {Object<string,string>} */ #cast = {}
  /** @type {Generator<Preset>}     */ #pool

  constructor(presGen) {
    this.#pool = presGen ?? presFlopper(false)
  }

  static build(presGen) { return new Roster(presGen) }
  static from(book, mode) {
    const makeGen = mode === 'flop' ? presFlopper : mode === 'shift' ? presShifter : presFlopper
    return new Roster(makeGen.call({ pres: book }))
  }


  cast() { return this.#cast }

  reg(name) {
    return this.#cast[name] = decoString.call(this.#pool.next().value, String(name))
  }

  ac(name) {
    if (!name?.length) return null
    if (hasAnsi(name)) return name
    return this.#cast[name] ?? this.reg(name)
  }
}

