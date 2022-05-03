import { camelToSnake } from '@texting/phrasing'
import { bracket }      from '@texting/bracket'
import { hasAnsi }      from '@texting/charset-ansi'
import { ProxyUtil }    from './src/ProxyUtil'
import { Roster }       from './src/Roster'
import { Steno }        from './src/Steno'
import { Keep }         from './src/TextUtil'

const ansiOrSnake = tx => hasAnsi(tx) ? tx : camelToSnake(tx)
/**
 *
 * @param {string} [word]
 * @returns {Steno}
 * @constructor
 */
export const Xr = Steno.build

export class Singletons {
  static roster = Roster.build() // ITALIC
  static flat = Steno.build()
  static camel = Steno.build('', Keep.make(x => x|> ansiOrSnake |> Singletons.roster.get |> bracket))
}

export const ros = name => Singletons.roster.get(name)
export const xr = word => Singletons.flat.iso(word)
export const cr = word => Singletons.camel.iso(word)
export const x = new Proxy(Singletons.flat, { get(steno, key) { return steno.iso(key) } })
export const $ = new Proxy(Singletons.camel, { get(steno, key) { return steno.iso(key) } })
export const says = new Proxy(Singletons.roster, {
  get(roster, key) {
    return ProxyUtil.getMethodOrNull(Singletons.camel, key) ?? Singletons.camel.iso(roster.get(key))
  }
})