import { decoNode } from './src/decoNode'

export { decoNode }

/**
 *
 * @param {*} ob
 * @param {boolean} [pr=true]
 * @param {number} [hi] - maximum level of object to show detail
 * @param {number} [va] - maximum level to force vertical for array, root level = 0
 * @param {number} [vo] - maximum level to force vertical for object, root level = 0
 * @param {number} [wa] - maximum string length to hold array contents without wrap
 * @param {number} [wo] - maximum string length to hold object contents without wrap
 * @param {number} [wf] - maximum string length to hold function contents
 * @param {?string} [qm=null] - quotation mark
 * @returns {string|number}
 */
export const deco = (ob, {
  pr = true,
  hi = 8,
  va = 0,
  vo = 0,
  wa = 32,
  wo = 64,
  wf = 160,
  qm = null
} = {}) => decoNode.call({ pr, hi, va, vo, wa, wo, wf, qm }, ob)

export const deca = ({
  pr = true,
  hi = 8,
  va = 0,
  vo = 0,
  wa = 32,
  wo = 64,
  wf = 160,
  qm = null
} = {}) => decoNode.bind({ pr, hi, va, vo, wa, wo, wf, qm })

export const delogger = (x) => void console.log(x |> deco)

export const delogNeL = (x) => void console.log(x |> deco, '\n')
