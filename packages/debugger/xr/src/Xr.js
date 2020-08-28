import { XrStream } from './XrStream/XrStream'

/**
 *
 * @param {string} [word]
 * @param {boolean} [color]
 * @returns {(Inka|object<string,Inka>)}
 * @constructor
 */
export const Xr = (word, color = true) => new XrStream(word, color)


