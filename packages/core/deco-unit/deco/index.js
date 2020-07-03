import { AZURE, MOSS } from '@palett/presets'
import { LF }          from '@spare/enum-chars'
import { decoNode }    from './src/decoNode'

export { decoNode }

const presetDeco = (p) => {
  p.pr = p.pr ?? [{ preset: AZURE }, { preset: MOSS }]
  p.presets = p.pr
  p.hi = p.hi ?? 8
  p.va = p.va ?? 0
  p.vo = p.vo ?? 0
  p.wa = p.wa ?? 32
  p.wo = p.wo ?? 64
  p.wf = p.wf ?? 160
  return p
}

/**
 *
 * @param {*} ob
 * @param {Object} [p]
 * @param {Object[]} [p.pr=[]]
 * @param {number} [p.hi=8] - maximum level of object to show detail
 * @param {number} [p.va=0] - maximum level to force vertical for array, root level = 0
 * @param {number} [p.vo=0] - maximum level to force vertical for object, root level = 0
 * @param {number} [p.wa=32] - maximum string length to hold array contents without wrap
 * @param {number} [p.wo=64] - maximum string length to hold object contents without wrap
 * @param {number} [p.wf=160] - maximum string length to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 */
export const deco = (ob, p = {}) => decoNode.call(presetDeco(p), ob)

/**
 *
 * @param {Object} [p]
 * @param {Object[]|*} [p.pr=[]]
 * @param {number} [p.hi=8] - maximum level of object to show detail
 * @param {number} [p.va=0] - maximum level to force vertical for array, root level = 0
 * @param {number} [p.vo=0] - maximum level to force vertical for object, root level = 0
 * @param {number} [p.wa=32] - maximum string length to hold array contents without wrap
 * @param {number} [p.wo=64] - maximum string length to hold object contents without wrap
 * @param {number} [p.wf=160] - maximum string length to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 */
export const Deco = (p = {}) => decoNode.bind(presetDeco(p))

/**
 *
 * @param {*} ob
 * @param {Object} [p]
 * @param {Object[]} [p.pr=[]]
 * @param {number} [p.hi=8] - maximum level of object to show detail
 * @param {number} [p.va=0] - maximum level to force vertical for array, root level = 0
 * @param {number} [p.vo=0] - maximum level to force vertical for object, root level = 0
 * @param {number} [p.wa=32] - maximum string length to hold array contents without wrap
 * @param {number} [p.wo=64] - maximum string length to hold object contents without wrap
 * @param {number} [p.wf=160] - maximum string length to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 * @deprecated use Deco instead
 */
export const deca = Deco

export const delogger = (x) => void console.log(x |> deco)

export const delogNeL = (x) => void console.log(x |> deco, LF)
