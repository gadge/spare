import { says }              from '@palett/says'
import { Xr }                from '@spare/logger'
import { range }             from '@vect/vector-init'
import { codeToHex, toChar } from '../utils/toChar'

// range.dec: [12288, 12351]
// range.hex: [0x3000, 0x303F]
// des: CJK Symbols and Punctuation (CJK 符号和标点)
// sum: 64

for (let n of range(0x3000, 0x303F)) {
  Xr()
    [n|> codeToHex](n|> toChar)
    |> says[n]
}

// '+-1234567890'