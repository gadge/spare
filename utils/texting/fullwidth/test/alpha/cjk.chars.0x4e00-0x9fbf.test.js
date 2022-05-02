import { says }              from '@palett/says'
import { LF }                from '@spare/enum-chars'
import { logNeL, xr }        from '@spare/logger'
import { range }             from '@vect/vector-init'
import { shuffle }           from '@vect/vector-select'
import { codeToHex, toChar } from '../utils/toChar'

// range.dec: [19968, 40895]
// range.hex: [0x4E00, 0x9FBF]
// des: CJK Unified Ideographs (CJK 统一表意符号)
// sum: 20928

export const han = /[\u4E00-\u9FBF]|[\uFF00-\uFFEF]/

let list

for (let n of shuffle(list = range(0x4e00, 0x9fbf), 32)) {
  xr()[n|> codeToHex](n|> toChar)|> says[n]
}

xr(LF).total(list.length) |> logNeL

for (let n of list = range(12288, 12351)) {
  xr()[n|> codeToHex](n|> toChar)|> says[n]
}

xr(LF).total(list.length) |> logNeL