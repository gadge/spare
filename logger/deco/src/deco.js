import { deNode } from './deNode'
import { TB } from '@spare/util'

/**
 *
 * @param {*} ob
 * @param {number} [hi] - maximum level of object to show detail
 * @param {number} [vo] - maximum level to force vertical for object, root level = 0
 * @param {number} [al] - maximum string length to hold array contents
 * @returns {string|number}
 */
export const deco = (ob, { hi = 8, vo = 0, al = 64 } = {}) =>
  deNode.call({ hi, vo, al, tb: TB }, ob)

export const deca = ({ hi = 8, vo = 0, al = 64 } = {}) => deNode.bind({ hi, vo, al, tb: TB })
