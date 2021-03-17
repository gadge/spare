import { says }              from '@palett/says'
import { LF }                from '@spare/enum-chars'
import { logger, xr }        from '@spare/logger'
import { range }             from '@vect/vector-init'
import { codeToHex, toChar } from '../utils/toChar'

// range.dec: [0, 127]
// range.hex: [0x0000,  0x007F]
// des: C0 Control and Basic Latin (C0控制符及基本拉丁文)
// sum: 128

let list
for (let n of list = range(0x20, 0x7f)) {
  xr()
    [n|> codeToHex](n)
    ['char'](n|> toChar)
    .p(' -> ')
    [(n + 65248).toString(16)](n + 0xfee0)
    ['full.char']((n + 0xfee0) |> toChar)
    |> says[n]
}

xr(LF).total(list.length) |> logger