import { says }  from '@palett/says'
import { Xr }    from '@spare/logger'
import { range } from '@vect/vector-init'

const candidates = [
  '＋',
  '－',
  '１',
  '２',
  '３',
  '４',
  '５',
  '６',
  '７',
  '８',
  '９',
  '０',
  '，',
  '．',
]


// /**
//  * 0xfee0 = 65248
//  * @param full
//  * @returns {*}
//  */
// const fullToHalf = full => full
//   .replace(/[\uFF10-\uFF19]/g, m => toChar(m.charCodeAt(0) - 0xfee0))
//
// const halfToFull = full => full
//   .replace(/[\uFF10-\uFF19]/g, m => toChar(m.charCodeAt(0) - 0xfee0))
//
// for (let ch of candidates) {
//   Xr()['full'](ch)['code'](ch.charCodeAt())['half'](fullToHalf(ch)) |> says[ch]
// }

const toChar = String.fromCharCode

for (let n of range(65280, 65375)) {
  Xr()
    [n.toString(16)](n)
    ['char'](n|> toChar)
    .p(' -> ')
    [(n - 0xfee0).toString(16).padStart(4, '0')](n - 0xfee0)
    ['half.char']((n - 0xfee0)|> toChar)
    |> says[n]
}

// '+-1234567890'