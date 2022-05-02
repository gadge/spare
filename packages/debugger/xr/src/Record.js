import { SP }               from '@spare/enum-chars'
import { bracket, parenth } from '@texting/bracket'
import { tapBy }            from '@texting/tap'

const UND = 'UND'
const NUL = 'NUL'
const OMIT = Symbol('omit')

export class Record {
  key
  val
  constructor(key, val) {
    this.key = key
    this.val = val
  }
  static build(key, val, keyFn, valFn) { return new Record(key, val, keyFn, valFn) }
  static ofKey(key, fn) { return new Record(key, OMIT, fn, null) }
  static ofVal(val, fn) { return new Record(OMIT, val, null, fn) }

  static eval(value) {
    if (value === OMIT) return ''
    if (value === void 0) return UND
    if (value === null) return NUL
    return value
  }
  toObject() { return { key: Record.eval(this.key), val: Record.eval(this.val) } }
  toString() { return tapBy(SP, bracket(Record.eval(this.key)), parenth(Record.eval(this.val))) }
}