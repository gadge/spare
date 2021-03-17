import { range }                     from '@vect/vector-init'
import { says }                      from '@palett/says'
import { Xr }                        from '@spare/logger'
import { codeToHex, toChar, toCode } from '../utils/toChar'

const special = [
  ['　', ' ',],
  ['、', ',',],
  ['。', '.',],
  ['【', '[',],
  ['】', ']',],

  ['——', '-',],
  ['‘', '\'',],
  ['’', '\'',],
  ['“', '\"',],
  ['”', '\"',],

  ['，', ',',],
  ['；', ';',],
  ['！', '!',],
  ['？', '?',],
  ['－', '-',],
  ['＿', '_',],
  ['＼', '\\',],
  ['／', '/',],
  ['（', '(',],
  ['）', ')',],
  ['｛', '{',],
  ['｝', '}',],
  ['＜', '<',],
  ['＞', '>',],
  ['', '',],
]

for (let [full, half] of special) {
  const codes = {
    full: full |> toCode,
    half: half |> toCode,
  }
  Xr()
    [codes.full + ':' + (codes.full|> codeToHex)](full)
    .p(' -> ')
    [codes.half + ':' + (codes.half|> codeToHex)](half)
    |> says[codes.full - codes.half]
}

export class FullToHalf {
  static punc(x) {

  }
  static num(x) {

  }
}

for (let n of range(8200, 8300)) {
  // Xr()[n](n |> toChar) |> says[n]
}