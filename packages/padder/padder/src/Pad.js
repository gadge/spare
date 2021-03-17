import { isNumeric }     from '@typen/num-strict'
import { ansiPadLength } from './ansiPadLength'
import { lpad }          from './LPad'
import { rpad }          from './RPad'


const DIGIT_INITIAL = /^\d/
const COMMA = /,/g
const numericDeterminant = tx => {
  if (!tx || tx.length <= 4) return tx
  if (!DIGIT_INITIAL.test(tx)) return tx
  return tx.replace(COMMA, '')
}

export const pad = function (tx, wd, va) {
  let dock, ansi, fill, thousand
  if (this) ({ dock, ansi, fill, thousand } = this)
  const padder = !dock
    ? (isNumeric(va ?? (thousand ? numericDeterminant(tx) : tx)) ? lpad : rpad)
    : (dock < 0 ? lpad : rpad)
  return ansi
    ? padder(tx, ansiPadLength(tx, wd), fill)
    : padder(tx, wd, fill)
}

export const Pad = ({ dock, ansi = true, fill, thousand } = {}) => pad.bind({ dock, ansi, fill, thousand })
