import { LF }         from '@spare/enum-chars'
import { presetDeco } from '@spare/preset-deco'
import { _deco }      from './src/_deco'

export { _deco }

// const presetDeco = (p) => {
//   if (!p) p = {}
//   p.wf = p.wf ?? 160
//   if (nullish(p.presets)) p.presets = p.pr ?? [AZURE, MOSS]
//   DecoConfig.prototype.assignPresets.call(p, AZURE, MOSS)
//   if (nullish(p.depth)) p.depth = 8 // 展示级别
//   if (nullish(p.vert)) p.vert = 0 // 在此级别以下均设为竖排
//   if (nullish(p.unit)) p.unit = 32 // 若 数组/键值对的值 单个元素长度超过此, 则进行竖排
//   if (nullish(p.width)) p.width = 80 // 字符超过此, 则换行
//   if (nullish(p.string)) p.string = {}
//   const s = p.string
//   // if (nullish(s.presets)) s.presets = [ATLAS, SUBTLE]
//   DecoConfig.prototype.assignPresets.call(s, ATLAS, SUBTLE)
//   // p |> JSON.stringify |> logger
//   return p
// }

/**
 *
 * @typedef {Object} DecoConfig
 * @typedef {Object} [DecoConfig.presets] - if set, prettify the result
 * @typedef {Object} [DecoConfig.depth] - if set, only output levels under it
 * @typedef {Object} [DecoConfig.vert] - if set, all levels under it output elements vertically
 * @typedef {Object} [DecoConfig.unit]  - if set, if array/key-value-pair element length exceeds it, vertically output the array/key-value-pair
 * @typedef {Object} [DecoConfig.width] - if set, wrap lines if string length exceeds it
 *
 * @param {*} ob
 * @param {DecoConfig} [p]
 * @param {DecoConfig} [p.object]
 * @param {DecoConfig} [p.array]
 * @param {DecoConfig} [p.string]
 * @param {number} [p.wf=160] - maximum length of string to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 */
export const deco = (ob, p = {}) => _deco.call(presetDeco(p), ob)

// TODO: fix string.presets default configuration

/**
 *
 * @typedef {Object} DecoConfig
 * @typedef {Object} [DecoConfig.presets] - if set, prettify the result
 * @typedef {Object} [DecoConfig.depth] - if set, only output levels under it
 * @typedef {Object} [DecoConfig.vert] - if set, all levels under it output elements vertically
 * @typedef {Object} [DecoConfig.unit]  - if set, if array/key-value-pair element length exceeds it, vertically output the array/key-value-pair
 * @typedef {Object} [DecoConfig.width] - if set, wrap lines if string length exceeds it
 *
 * @param {DecoConfig} [p]
 * @param {DecoConfig} [p.object]
 * @param {DecoConfig} [p.array]
 * @param {DecoConfig} [p.string]
 * @param {number} [p.wf=160] - maximum length of string to hold function contents
 * @param {?string} [p.qm=null] - quotation mark
 * @returns {string|number}
 */
export const Deco = (p = {}) => _deco.bind(presetDeco(p))

/**
 *
 * @typedef {Object} DecoConfig
 * @typedef {Object} [DecoConfig.presets] - if set, prettify the result
 * @typedef {Object} [DecoConfig.depth] - if set, only output levels under it
 * @typedef {Object} [DecoConfig.vert] - if set, all levels under it output elements vertically
 * @typedef {Object} [DecoConfig.unit]  - if set, if array/key-value-pair element length exceeds it, vertically output the array/key-value-pair
 * @typedef {Object} [DecoConfig.width] - if set, wrap lines if string length exceeds it
 *
 * @param {*} ob
 * @param {DecoConfig} [p]
 * @param {DecoConfig} [p.object]
 * @param {DecoConfig} [p.array]
 * @param {DecoConfig} [p.string]
 * @param {number} [p.wf=160] - maximum length of string to hold function contents
 * @param {?string} [p.quote=null] - quotation mark
 * @returns {string|number}
 */
export const deca = Deco

export const delogger = (x) => void console.log(x |> deco)

export const delogNeL = (x) => void console.log(x |> deco, LF)

// const config = {
//   depth: 5,
//   presets: [AZURE, MOSS],
//   width: 64,
//   vert: 5,
//   method: {
//     width: 64,
//     presets: [AZURE, MOSS],
//   },
//   object: {
//     width: 64,
//     vert: 5,
//     presets: [AZURE, MOSS],
//   },
//   array: {
//     width: 64,
//     vert: 5,
//     presets: [AZURE, MOSS],
//   },
//   string: {
//     width: 64,
//     vert: 5,
//     presets: [AZURE, MOSS],
//   }
// }
