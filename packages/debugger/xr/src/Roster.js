import { presetFlopper } from '@palett/flopper'
import { decoString }    from '@spare/deco-string'
import { hasAnsi }       from '@texting/charset-ansi'

export class Roster {
  /** @type {Object<string,string>} */ #cast = {}
  /** @type {Generator<Preset>}     */ #pool = presetFlopper(false)

  constructor() {}

  static build() { return new Roster() }

  list() { return this.#cast }

  aboard(name) {
    // console.log('>> [roster] aboard', decoString(String(name), { pres: value }))
    return this.#cast[name] = decoString(String(name), { pres: this.#pool.next().value })
  }

  get(name) {
    if (!name?.length) return null
    if (hasAnsi(name)) return name
    return this.#cast[name] ?? this.aboard(name)
  }
}

// if (!name?.length) return console.log('>> [roster].get', parenth(name), '(null)', parenth(null)), null
// if (hasAnsi(name)) return console.log('>> [roster].get', parenth(name), '(ansi)', parenth(name)), name
// let result = this.#roll[name] ?? this.aboard(name)
// return console.log('>> [roster].get', parenth(name), '(roll)', parenth(result)), result

