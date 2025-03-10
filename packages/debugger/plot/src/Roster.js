import { presFlopper } from '@palett/flopper'
import { decoString }  from '@spare/deco-string'
import { hasAnsi }     from '@texting/charset-ansi'

export class Roster {
  /** @type {Object<string,string>} */ #cast = {}
  /** @type {Generator<Preset>}     */ #pool = presFlopper(false)

  constructor() {}

  static build() { return new Roster() }

  list() { return this.#cast }

  aboard(name) {
    // console.log('>> [roster] aboard', decoString(String(name), { pres: this.#pool.next().value }))
    return this.#cast[name] = decoString(String(name), { pres: this.#pool.next().value })
  }

  get(name) {
    if (!name?.length) return ''
    if (hasAnsi(name)) return name
    return this.#cast[name] ?? this.aboard(name)
  }
}

