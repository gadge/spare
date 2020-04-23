import { CAPWORD, INILOW } from '../resources/regexes'

/**
 * Camel/pascal case phrase -> split vector
 * Snake: fox_jumps_over_dog
 * Kebab: fox-jumps-over-dog
 * @param {string} phrase camel/pascal-case phrase
 * @returns {string[]}
 */
export function camelToVector (phrase) {
  let ms, wd, ve = []
  if ((ms = INILOW.exec(phrase)) && ([wd] = ms)) ve.push(wd)
  while ((ms = CAPWORD.exec(phrase)) && ([wd] = ms)) ve.push(wd)
  return ve
}

/**
 * snake or kebab phrase -> split vector
 * @param {string} phrase - dashed phrase
 * @returns {string[]}
 */
export const snakeToVector = (phrase) => phrase.split(/\W/g)

export const stringToVector = (tx, reg) => {
  let ms, l = 0, r = 0, sp, ph
  const vec = []
  while ((ms = reg.exec(tx)) && ([ph] = ms)) {
    r = ms.index
    if ((sp = tx.slice(l, r))) vec.push(sp)
    vec.push(ph)
    l = reg.lastIndex
  }
  if (l < tx.length) vec.push(tx.slice(l))
  return vec
}
