import { isNumeric }          from '@typen/num-strict'
import { fixpad, lpad, rpad } from './helpers'

export const Pad = ({ dock, ansi = true, fill } = {}) => {
  if (!dock) {
    return ansi
      ? (tx, pd, v) => (isNumeric(v) ? lpad : rpad).call(tx, fixpad(tx, pd), fill)
      : (tx, pd, v) => (isNumeric(v) ? lpad : rpad).call(tx, pd, fill)
  }
  let padder = dock < 0 ? lpad : rpad
  return ansi
    ? (tx, pd) => padder.call(tx, fixpad(tx, pd), fill)
    : (tx, pd) => padder.call(tx, pd, fill)
}
