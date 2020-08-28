import { ansiPadLength, lpad } from './helpers'

export const LPad = ({ ansi = true, fill } = {}) =>
  ansi
    ? (tx, pd) => lpad.call(tx, ansiPadLength(tx, pd), fill)
    : (tx, pd) => lpad.call(tx, pd, fill)
