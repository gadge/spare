import { SP }               from '@spare/enum-chars'
import { bracket, parenth } from '@texting/bracket'
import { tapBy }            from '@texting/tap'

const UND = 'UND'
const NUL = 'NUL'
const OMIT = Symbol('omit')

export class Record {
  #k
  #v
  constructor(key, val) {
    this.#k = key
    this.#v = val
  }
  static build(key, val) { return new Record(key, val) }
  static ofKey(key) { return new Record(key, OMIT) }
  static ofVal(val) { return new Record(OMIT, val) }

  static eval(value) {
    if (value === OMIT) return null
    if (value === null) return NUL
    if (value === void 0) return UND
    return value
  }

  get key() { return Record.eval(this.#k) }
  get val() { return Record.eval(this.#v) }

  toObject() { return { key: this.key, val: this.val } }
  toString() { return tapBy(SP, bracket(this.key), parenth(this.val)) }
}