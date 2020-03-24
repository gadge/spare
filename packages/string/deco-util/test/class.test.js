//
// 0 - Typeof is STR, quote
// 1 - InferType is NUM, do not quote. InferType is STR, quote.
// 2 - All Number and String, quote
import { APOS } from '@spare/enum-quotes'

export class DecoValue {
  constructor (quote = APOS, numStringLevel = 0) {}
}
