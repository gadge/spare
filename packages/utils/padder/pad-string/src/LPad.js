import { fixpad, lpad } from './helpers'

export const LPad = ({ ansi = true, fill } = {}) =>
  ansi
    ? (tx, pd) => lpad.call(tx, fixpad(tx, pd), fill)
    : (tx, pd) => lpad.call(tx, pd, fill)
