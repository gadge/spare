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
    // console.log('>> [roster] reg', this.#pool.next().value,decoString.call(this.#pool.next().value, String(name)))
    return this.#cast[name] = decoString.call(this.#pool.next().value, String(name))
  }

  sign(name) {
    if (!name?.length) return null
    if (hasAnsi(name)) return name
    return this.#cast[name] ?? this.reg(name)
  }
}

// if (!name?.length) return console.log('>> [roster].sign', parenth(name), '(null)', parenth(null)), null
// if (hasAnsi(name)) return console.log('>> [roster].sign', parenth(name), '(ansi)', parenth(name)), name
// let result = this.#roll[name] ?? this.reg(name)
// return console.log('>> [roster].sign', parenth(name), '(roll)', parenth(result)), result

