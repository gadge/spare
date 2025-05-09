import { test } from 'node:test'

const LIST = [
  '@aryth/math',
  '@palett/convert',
  '@palett/enum-ansi-codes',
  '@palett/util-ansi',
  '@texting/enum-chars',
  '@texting/padder',
  '@typen/literal',
  '@typen/num-strict',
  '@spare/deco-colors',
  '@spare/deco-date',
  '@spare/deco-func',
  '@typen/enum-data-types',
  '@typen/enum-object-types',
  '@typen/num-loose',
  '@typen/typ',
  '@vect/enum-matrix-directions',
  '@vect/object-mapper',
  '@vect/vector-index',
  '@texting/string-value',
  '@aryth/comparer',
  '@texting/enum-brackets',
  '@texting/enum-chars',
  '@texting/lange',
  '@palett/presets',
  '@texting/charset-ansi',
  '@texting/enum-brackets',
  '@texting/enum-chars',
  '@texting/lange',
  '@texting/splitter',
  '@texting/string-value',
  '@typen/enum-data-types',
  '@typen/num-strict',
  '@vect/matrix',
  '@vect/matrix-index',
  '@vect/vector-ini'
]

test('imports', () => {
  const SET = new Set(LIST.sort())
  console.log(SET)
})

