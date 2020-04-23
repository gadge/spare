import { CAPWORD, INILOW } from '@spare/regex-phrasing'

/**
 * Camel/pascal case phrase -> split vector
 * Snake: fox_jumps_over_dog
 * Kebab: fox-jumps-over-dog
 * @param {string} phrase camel/pascal-case phrase
 * @returns {string[]}
 */
export function splitCamel (phrase) {
  let ms, wd, ve = []
  if ((ms = INILOW.exec(phrase)) && ([wd] = ms)) ve.push(wd)
  while ((ms = CAPWORD.exec(phrase)) && ([wd] = ms)) ve.push(wd)
  return ve
}


