import { hasAnsi, lange } from '@spare/lange'
import { isNumeric } from './isNumeric'

export const lpad = (tx, pd, ansi = false, fill) => ansi && hasAnsi(tx)
  ? tx.padStart(tx.length + pd - lange(tx), fill)
  : tx.padStart(pd, fill)

export const rpad = (tx, pd, ansi = false, fill) => ansi && hasAnsi(tx)
  ? tx.padEnd(tx.length + pd - lange(tx), fill)
  : tx.padEnd(pd, fill)

export const npad = (tx, ref, pd, ansi = false, fill) => isNumeric(ref)
  ? lpad(tx, pd, ansi, fill)
  : rpad(tx, pd, ansi, fill)
