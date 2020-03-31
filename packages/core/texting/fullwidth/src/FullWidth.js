import stripAnsi from 'strip-ansi'
import { hasAnsi } from '@spare/lange'
import { halfToFull } from './halfToFull'

export const fullWidth = (text, { ansi = true, lean = true } = {}) => fw.call({ ansi, lean }, text)

export const FullWidth = ({ ansi = true, lean = true } = {}) => fw.bind({ ansi, lean })

export const fw = function (tx) {
  const { ansi, lean } = this
  if (ansi && hasAnsi(tx)) tx = stripAnsi(tx)
  if (lean) tx = tx.replace(/(\W)\s+/g, (_, x) => x)
  return halfToFull(tx)
}
