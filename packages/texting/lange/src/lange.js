import { ANSI, ASTRAL } from '../resources/globalRegexes'

/**
 *
 * @param {string} tx
 * @returns {number}
 */
export const lange = tx => tx
  .replace(ANSI, '')
  .replace(ASTRAL, '_')
  .length

export const Lange = ansi => ansi ? lange : x => x.length


