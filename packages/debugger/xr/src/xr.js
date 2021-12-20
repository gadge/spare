import { xrSingleton }          from './singleton/xrSingleton.js'
import { clearQueue, XrStream } from './XrStream/XrStream.js'

/**
 *
 * @param {string} [word]
 * @param {boolean} [color]
 * @returns {XrStream}
 * @constructor
 */
export const Xr = (word, color = true) => new XrStream(word, color)


export const xr = word => clearQueue.call(xrSingleton, word)
