import { isNumeric }                 from '@typen/num-strict'
import { ansiPadLength, lpad, rpad } from './helpers'

export const Pad = ({ dock, ansi = true, fill } = {}) => {
  if (!dock) {
    return ansi
      ? (tx, pd, v) => (isNumeric(v) ? lpad : rpad).call(tx, ansiPadLength(tx, pd), fill)
      : (tx, pd, v) => (isNumeric(v) ? lpad : rpad).call(tx, pd, fill)
  }
  let padder = dock < 0 ? lpad : rpad
  return ansi
    ? (tx, pd) => padder.call(tx, ansiPadLength(tx, pd), fill)
    : (tx, pd) => padder.call(tx, pd, fill)
}
