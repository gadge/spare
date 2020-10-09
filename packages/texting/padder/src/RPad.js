import { ansiPadLength } from './ansiPadLength'

export const rpad = Function.prototype.call.bind(String.prototype.padEnd)

export const RPad = ({ ansi = true, fill } = {}) =>
  ansi
    ? (tx, pd) => rpad(tx, ansiPadLength(tx, pd), fill)
    : (tx, pd) => rpad(tx, pd, fill)


