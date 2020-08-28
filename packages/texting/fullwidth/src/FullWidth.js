import { clearAnsi, hasAnsi } from '@spare/charset'
import { halfToFull }         from './halfToFull'

export const fullWidth = (text, { ansi = true, lean = true } = {}) => fw.call({ ansi, lean }, text)

export const FullWidth = ({ ansi = true, lean = true } = {}) => fw.bind({ ansi, lean })

const LEAN_REG = /(\W)\s+/g

export const fw = function (tx) {
  const { ansi, lean } = this
  if (ansi && hasAnsi(tx)) tx = clearAnsi(tx)
  if (lean) tx = tx.replace(LEAN_REG, (_, x) => x)
  return halfToFull(tx)
}
