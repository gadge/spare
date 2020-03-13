import { deNode } from './deNode'

/**
 *
 * @param {*} ob
 * @param {number} [hi] - maximum level of object to show detail
 * @param {number} [va] - maximum level to force vertical for array, root level = 0
 * @param {number} [vo] - maximum level to force vertical for object, root level = 0
 * @param {number} [wa] - maximum string length to hold array contents without wrap
 * @param {number} [wo] - maximum string length to hold object contents without wrap
 * @param {number} [wf] - maximum string length to hold function contents
 * @param {boolean} [color=true]
 * @returns {string|number}
 */
export const deco = (ob, {
  hi = 8,
  va = 0,
  vo = 0,
  wa = 32,
  wo = 64,
  wf = 64,
  color = true
} = {}) => deNode.call({ hi, va, vo, wa, wo, wf, color }, ob)

export const deca = ({
    hi = 8,
    va = 0,
    vo = 0,
    wa = 32,
    wo = 64,
    wf = 64,
    color = true
  } = {}
) => deNode.bind({ hi, va, vo, wa, wo, wf, color })
