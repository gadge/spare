export { decoKey }          from './src/decoKey'
import { Qt, quote }        from '@spare/quote'
import { FUN }              from '@typen/enum-data-types'
import { decoPale as deco } from './src/decoPale'

const parseQuote = q => typeof q === FUN ? q : Qt(q) ?? quote

const presetConfig = p => {
  p.loose = p.loose ?? true
  p.quote = parseQuote(p.quote)
  return p
}
/**
 *
 * @param x
 * @param {Object} p
 * @param {boolean} [p.loose]
 * @param {Function|string|number} [p.quote]
 * @return {string|*}
 */
export const decoPale = (x, p = {}) => deco.call(presetConfig(p), x)

/**
 *
 * @param {Object} p
 * @param {boolean} [p.loose]
 * @param {Function|string|number} [p.quote]
 */
export const DecoPale = (p = {}) => deco.bind(presetConfig(p))
