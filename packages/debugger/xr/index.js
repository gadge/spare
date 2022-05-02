import { camelToSnake } from '@spare/phrasing'
import { ros }          from '@spare/says'
import { bracket }      from '@texting/bracket'
import { Steno }        from './src/Steno'
import { Keep }         from './src/TextUtil'

/**
 *
 * @param {string} [word]
 * @returns {Steno}
 * @constructor
 */
export const Xr = Steno.build

export class Singletons {
  static flat = new Steno()
  static camel = Steno.build('', Keep.make(x => x|> camelToSnake|> ros |> bracket))
}

export const xr = word => Singletons.flat.rebuild(word)

export const cr = word => Singletons.camel.rebuild(word)

export const x = new Proxy(Singletons.flat, { get(steno, key) { return steno.rebuild()[key] } })

export const $ = new Proxy(Singletons.camel, { get(steno, key) { return steno.rebuild()[key] } })