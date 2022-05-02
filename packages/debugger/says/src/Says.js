import { ITALIC }        from '@palett/enum-font-effects'
import { presetFlopper } from '@palett/flopper'
import { deco }          from "@spare/deco-string"
import { FUN }           from '@typen/enum-data-types'
import { mapper }        from '@vect/object-mapper'
import { Pal }           from './Pal'

export class Says {
  /** @type {Object<string,Pal|function>} */ #roster = {}
  /** @type {Generator<{max:*,min:*,na:*}>} */ #pool = presetFlopper({ exhausted: false })
  /** @type {string[]} */ #effects = undefined

  constructor(roster, effects) {
    if (roster) this.#roster = roster
    this.#effects = effects
    return new Proxy(this, {
      /** @returns {Pal|function} */
      get(t, p) {
        if (p in t) return typeof (p = t[p]) === FUN ? p.bind(t) : p
        if (p in t.#roster) return t.#roster[p]
        return t.aboard(p, t.#pool.next().value)
      }
    })
  }

  aboard(name, presets) {
    const preset = presets ?? this.#pool.next().value
    const decoConf = { presets: preset, effects: this.#effects }
    const decoName = deco(String(name), decoConf)
    return this.#roster[name] = Pal.build(decoName, { decoConf })
  }

  roster(name) { return name?.length ? (this.#roster[name] ?? this.aboard(name)).name : null }

  rosters() { return mapper(this.#roster, ({ name }) => name) }

  /**
   *
   * @param roster
   * @param effects
   * @returns {Says|Object<string,function>}
   */
  static build({ roster, effects = [ ITALIC ] } = {}) { return new Says(roster, effects) }
}
