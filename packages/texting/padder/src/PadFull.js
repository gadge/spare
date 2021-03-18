import { SP as SP_FULL }                         from '@spare/enum-full-angle-chars'
import { FullWidth, isNumeric as isNumericFull } from '@spare/fullwidth'
import { nullish }                               from '@typen/nullish'
import { isNumeric }      from '@typen/num-strict'
import { ansiPadLength }  from '../utils/ansiPadLength'
import { lpad }           from '../utils/LPad'
import { rpad }           from '../utils/RPad'
import { pad as padHalf } from './Pad'

export const padFull = function (tx, wd, va) {
  const { ansi = true, fill = SP_FULL } = this ?? {}
  const padder = (!nullish(va) ? isNumeric(va) : isNumericFull(tx)) ? lpad : rpad
  return ansi
    ? padder(tx, ansiPadLength(tx, wd), fill)
    : padder(tx, wd, fill)
}

/**
 * @param {object}  [configHalf]
 * @param {boolean} [configHalf.ansi=true]
 * @param {string}  [configHalf.fill=' ']
 * @param {boolean} [configHalf.thousand=true]
 *
 * @param {object}  [configFull]
 * @param {boolean} [configFull.ansi=true]
 * @param {string}  [configFull.fill='　']
 * @param {boolean} [configFull.lean=true]
 *
 * @returns {function(*=, *=, *, *=): *}
 * @constructor
 */
export const PadFull = (configHalf = {}, configFull = {}) => {
  const
    padderHalf = padHalf.bind(configHalf), // use: ansi, fill, thousand
    padderFull = padFull.bind(configFull), // use: ansi, fill
    toFull = FullWidth(configFull) // use: ansi lean
  return (text, width, full) => full
    ? padderFull(toFull(text), width)
    : padderHalf(text, width)
}
