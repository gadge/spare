import { lange, hasAnsi } from '@spare/lange'
import { isNumeric } from '../src/isNumeric'

const noop = () => {}

/**
 *
 * @param {*} x
 * @return {string}
 */
const totx = x => `${x}`

const lpad = (tx, pd, ansi = false, fill) => ansi && hasAnsi(tx)
  ? tx.padStart(tx.length + pd - lange(tx), fill)
  : tx.padStart(pd, fill)
const rpad = (tx, pd, ansi = false, fill) => ansi && hasAnsi(tx)
  ? tx.padEnd(tx.length + pd - lange(tx), fill)
  : tx.padEnd(pd, fill)
const numPad = (tx, ref, pd, ansi = false, fill) => isNumeric(ref)
  ? lpad(tx, pd, ansi, fill)
  : rpad(tx, pd, ansi, fill)

const isTab = (c) => c === '\t' || c === ' '
const tabify = (tx) => {
  const i = tx |> deNaTab
  return endsBracs(tx) ? tx : `${tx.substring(0, i)}[${tx.substring(i)}]`
}
const deNaTab = (tx) => {
  let i = 0
  for (let { length } = tx; i < length; i++) if (!isTab(tx.charAt(i))) return i
  return i
}
const beforeNaTab = (tx) => tx.substring(0, deNaTab(tx))
const afterNaTab = (tx) => tx.substring(deNaTab(tx))

const pr = (tx) => '(' + tx + ')'
const br = (tx) => '[' + tx + ']'
const bc = (tx) => '{' + tx + '}'
const endsBracs = (tx) => tx.endsWith(')') || tx.endsWith(']')

export {
  noop, totx,
  lpad, rpad, numPad,
  isTab, tabify, deNaTab, beforeNaTab, afterNaTab,
  pr, br, bc, endsBracs,
}
