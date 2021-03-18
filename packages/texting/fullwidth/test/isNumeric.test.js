import { logger, xr }   from '@spare/logger'
import { REG_NUM_FULL } from '../assets/regex'
import { halfToFull }   from '../dist/index.esm'

const REGEX_NUMERIC_HALF = /^-?\d*\.?\d+$/
const REGEX_NUMERIC_THOUSAND_SEPARATOR_HALF = /^\d{1,3}(,\d{3})*(\.\d+)?$/
const REGEX_NUMERIC_FULL_LOOSE = /^[-+]?[\d,]*\.?\d+$/
const REGEX_NUMERIC_THOUSAND_SEPARATOR_LOOSE_FULL = /^\s*[－＋]?(?:，*[０-９]+)*．?[０-９]+\s*$/

const candidates = [
  // true
  '0',
  '0.0',
  '.123',
  '-1,234,567.890',
  '-,567.890',
  '-,0.890',
  '+000.890',
  // false
  '',
  '.123 ',
  '1,2,3',
  '-,.890',
]


for (let tx of candidates) {
  let full = tx |> halfToFull
  xr()
    [tx](REGEX_NUMERIC_FULL_LOOSE.test(tx))
    [full](REG_NUM_FULL.test(full))
    |> logger
}