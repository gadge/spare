import { presetFlopper } from '@palett/flopper'
import { decoString }    from '@spare/deco-string'
import { hasAnsi }       from '@texting/charset-ansi'

export class Roster {
  /** @type {Object<string,string>} */ #roll = {}
  /** @type {Generator<Preset>}     */ #pool = presetFlopper(false)
  /** @type {?string[]}             */ effects = null

  constructor(effects) {
    if (effects) this.effects = effects
  }

  static build(...effects) { return new Roster(effects) }

  list() { return this.#roll }

  aboard(name, pres) {
    return this.#roll[name] = decoString(String(name), { pres: pres ?? this.#pool.next().value })
  }

  get(name) {
    if (!name?.length) return null
    if (hasAnsi(name)) return name
    return this.#roll[name] ?? this.aboard(name)
  }
}

// if (!name?.length) return console.log('>> [roster].get', parenth(name), '(null)', parenth(null)), null
// if (hasAnsi(name)) return console.log('>> [roster].get', parenth(name), '(ansi)', parenth(name)), name
// let result = this.#roll[name] ?? this.aboard(name)
// return console.log('>> [roster].get', parenth(name), '(roll)', parenth(result)), result

