import { ansiPadLength } from './ansiPadLength'


export const lpad = Function.prototype.call.bind(String.prototype.padStart)

export const LPad = ({ ansi = true, fill } = {}) =>
  ansi
    ? (tx, pd) => lpad(tx, ansiPadLength(tx, pd), fill)
    : (tx, pd) => lpad(tx, pd, fill)
