import { ITALIC }      from '@palett/enum-font-effects'
import { presFlopper } from '@palett/flopper'
import { decoString }  from '@spare/deco-string'
import { FUN }         from '@typen/enum-data-types'
import { mapper }      from '@vect/object-mapper'
import { Pal }         from './Pal.js'

/* @typedef {{max:string,min:string,na:string}} Preset */

/* @typedef {function(string):string} Pal */

export class Says {
  /** @type {Object<string,Pal>} */ #roster = {}
  /** @type {Generator<Preset>}  */ #pool = presFlopper(false)
  /** @type {string[]}           */ #effects = undefined

  constructor(roster, effects) {
    if (roster) this.#roster = roster
    this.#effects = effects
    return new Proxy(this, {
      /** @returns {Pal|function} */
      get(says, key) {
        let item
        if (key in says && (item = says[key])) return typeof item === FUN ? item.bind(says) : item
        if (key in says.#roster) return says.#roster[key]
        return says.aboard(key, says.#pool.next().value)
      }
    })
  }

  static build({ roster, effects = [ ITALIC ] } = {}) { return new Says(roster, effects) }

  aboard(name, pres) {
    const decoName = decoString(String(name), { pres: pres ||= this.#pool.next().value })
    return this.#roster[name] = Pal.build(decoName, pres)
  }

  roster(name) { return name?.length ? (this.#roster[name] ?? this.aboard(name)).name : null }
  rosters() { return mapper(this.#roster, ({ name }) => name) }
}
