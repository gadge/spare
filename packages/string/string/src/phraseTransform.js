import { CAMEL, DASHED } from './enums/PhraseReg'

/**
 * Camel case phrase -> Lowercase dashed phrase
 * @example 'TheWallstreetJournal2025WSJ' -> 'the wallstreet journal 2025 wsj'
 * @param {string} camel camel-case phrase
 * @param {string} de
 * @returns {string} lowercase dashed phrase
 */
const camelToLowerDashed = (camel, de = ' ') =>
  camel.replace(CAMEL, it => de + it.toLowerCase()).trim()

/**
 * Dashed phrase -> Camel case phrase
 * @example 'THE_WALLSTREET_JOURNAL-2019.FOR.THE.FANS' -> 'theWallstreetJournal2019ForTheFans'
 * @param {string} dashed dashed phrase
 * @returns {string} camel phrase
 */
const dashedToCamel = (dashed, de = '') => {
  const matches = dashed.match(DASHED)
  return matches
    ? matches[0].toLowerCase() + matches.slice(1)
    .map(wd => wd[0].toUpperCase() + wd.slice(1).toLowerCase()).join(de)
    : dashed
}

export {
  camelToLowerDashed,
  dashedToCamel
}
