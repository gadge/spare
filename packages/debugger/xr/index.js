import { ProxyUtil }       from './src/ProxyUtil'
import { Rosters, Stenos } from './src/singletons'
import { Steno }           from './src/Steno'


/**
 *
 * @param {string} [word]
 * @returns {Steno}
 * @constructor
 */
export const Xr = Steno.build

export const ros = name => Rosters.main.get(name)
export const xr = word => Stenos.flat.iso(word)
export const cr = word => Stenos.camel.iso(word)
/** @type {function} */
export const x = new Proxy(Stenos.flat, { get(steno, key) { return steno.iso(key) } })
/** @type {function} */
export const $ = new Proxy(Stenos.camel, { get(steno, key) { return steno.iso(key) } })
export const says = new Proxy(Rosters.main, {
  get(roster, key) { return ProxyUtil.methodOrNull(Stenos.host, key) ?? Stenos.host.iso(key) }
})