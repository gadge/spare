import { says }              from '@palett/says'
import { xr }                from '@spare/logger'
import { range }             from '@vect/vector-init'
import { codeToHex, toChar } from '../utils/toChar'

export const astral = /[\uD800-\uDBFF][\uDC00-\uDFFF]/

for (let n of range(0xD800, 0xDBFF)) xr()[n|> codeToHex](n|> toChar) |> says[n]

for (let n of range(0xDC00, 0xDFFF)) xr()[n|> codeToHex](n|> toChar)|> says[n]