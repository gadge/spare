import { INSTA, JUNGLE, METRO, SUBTLE } from '@palett/presets'
import { DA, SP }                       from '@spare/enum-chars'
import { camelToVector, snakeToVector } from '@spare/phrasing'
import { cosmetics }                    from './src/cosmetics'

const presetString = p => {
  p.delim = p.delim ?? SP
  p.preset = p.preset ?? INSTA
  p.stringPreset = p.stringPreset ?? METRO
  return p
}

export const WORDS = 'words', CAMEL = 'camel', SNAKE = 'snake'
const DecoModes = {
  words: WORDS,
  camel: CAMEL,
  snake: SNAKE,
}

/**
 * @param {string} text
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {Object} [p.preset]
 * @param {Object} [p.stringPreset]
 * @param {Function} [p.filter]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */
export const deco = (text, p = {}) => cosmetics.call(presetString(p), text)

/**
 *
 * @param {Object} p
 * @param {string} [p.delim]
 * @param {Object} [p.preset]
 * @param {Object} [p.stringPreset]
 * @param {Function} [p.filter]
 * @param {Function} [p.vectify]
 * @param {Function} [p.joiner]
 * @return {string}
 */
export const Deco = (p = {}) => cosmetics.bind(presetString(p))

export const decoCamel = (text, { delim = '', preset = JUNGLE, stringPreset = SUBTLE } = {}) => {
  return cosmetics.call({ delim, preset, stringPreset, vectify: camelToVector }, text)
}

export const decoSnake = (text, { delim = DA, preset = JUNGLE, stringPreset = SUBTLE } = {}) => {
  return cosmetics.call({ delim, preset, stringPreset, vectify: snakeToVector }, text)
}

export const decoPhrase = (text, { delim = SP, preset = JUNGLE, stringPreset = SUBTLE } = {}) => {
  return cosmetics.call({ delim, preset, stringPreset }, text)
}
