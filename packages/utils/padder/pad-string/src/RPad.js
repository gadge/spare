import { fixpad, rpad } from './helpers'

export const RPad = ({ ansi = true, fill } = {}) =>
  ansi
    ? (tx, pd) => rpad.call(tx, fixpad(tx, pd), fill)
    : (tx, pd) => rpad.call(tx, pd, fill)


