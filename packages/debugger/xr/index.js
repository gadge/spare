import { bid }             from './src/ProxyUtil.js'
import { Rosters, Stenos } from './src/singletons.js'
import { Steno }           from './src/Steno.js'

/**
 *
 * @param {string} [word]
 * @returns {Steno}
 * @constructor
 */
export const Xr = Steno.build

export const ros = name => Rosters.main.get(name)

export const xr = word => Stenos.flat.init(word)

export const cr = word => Stenos.camel.init(word)

/** @type {Object<string, Steno|((x: *) => string)>} */
export const x = new Proxy(Stenos.flat, {
  get(steno, key) { return steno.boot()[key] }
})

/** @type {Object<string, Steno|((x: *) => string)>} */
export const $ = new Proxy(Stenos.camel, {
  get(steno, key) { return steno.boot()[key] }
})

/** @type {Object<string, Steno|((x: *) => void)>} */
export const says = new Proxy(Rosters.main, {
  get(roster, key) { return bid.call(Stenos.host, key) ?? Stenos.host.init(key) }
})