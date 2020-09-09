import { XrStream } from './XrStream/XrStream'

/**
 *
 * @param {string} [word]
 * @param {boolean} [color]
 * @returns {(XrStream|object<string,XrStream>)}
 * @constructor
 */
export const Xr = (word, color = true) => new XrStream(word, color)


