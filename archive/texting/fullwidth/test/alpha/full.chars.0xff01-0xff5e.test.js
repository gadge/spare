import { says }              from '@palett/says'
import { LF }                from '@spare/enum-chars'
import { logger, xr }        from '@spare/logger'
import { range }             from '@vect/vector-init'
import { codeToHex, toChar } from '../utils/toChar'

// range.dec: [65280, 65519]
// range.hex: [0xFF00,  0xFFEF]
// des: Half-width and Full-width Form (半型及全型形式)
// sum: 240

let list
for (let n of list = range(0xff01, 0xff5e)) {
  xr()
    [n|> codeToHex](n)
    ['char'](n|> toChar)
    .p(' -> ')
    [(n - 0xfee0).toString(16).padStart(4, '0')](n - 0xfee0)
    ['half.char']((n - 0xfee0) |> toChar)
    |> says[n]
}

xr(LF).total(list.length) |> logger