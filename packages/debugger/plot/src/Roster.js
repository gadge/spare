import { presFlopper } from '@palett/flopper'
import { decoString }  from '@spare/deco-string'
import { hasAnsi }     from '@texting/charset-ansi'


export class Roster {
  /** @type {Object<string,string>} */ #cast = {}
  /** @type {Generator<Preset>}     */ #pool

  constructor(presGen) {
    this.#pool = presGen ?? presFlopper(false)
  }

  static build(presGen) { return new Roster(presGen) }

  cast() { return this.#cast }

  reg(name) {
    // console.log('>> [roster] reg', decoString(String(name), { pres: value }))
    return this.#cast[name] = decoString.call(this.#pool.next().value, String(name))
  }

  sign(name) {
    if (!name?.length) return null
    if (hasAnsi(name)) return name
    return this.#cast[name] ?? this.reg(name)
  }
}

