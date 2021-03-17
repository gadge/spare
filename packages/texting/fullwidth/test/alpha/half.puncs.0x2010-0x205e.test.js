import { says }              from '@palett/says'
import { Xr }                from '@spare/logger'
import { range }             from '@vect/vector-init'
import { codeToHex, toChar } from '../utils/toChar'

// range.dec: [8192, 8303]
// range.hex: [0x2000, 0x206F]
// des: General Punctuation (常用标点)
// sum: 112

for (let n of range(0x2010, 0x205e)) {
  Xr()
    [n|> codeToHex](n|> toChar)
    |> says[n]
}

// '+-1234567890'