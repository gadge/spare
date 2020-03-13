import { Inka } from './Inka/Inka'

/**
 *
 * @param {string} word
 * @param {boolean} color
 * @returns {(Inka|object<string,Inka>)}
 * @constructor
 */
export const Xr = (word, color = true) => new Inka(word, color)
