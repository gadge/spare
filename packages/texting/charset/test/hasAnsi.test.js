import { logger, Xr }  from '@spare/logger'
import { clearAnsi }   from '../src/clearAnsi'
import { clearAstral } from '../src/clearAstral'
import { hasAnsi }     from '../src/hasAnsi'
import { hasAstral }   from '../src/hasAstral'

const arr = [
  'tora',
  '\u001B[4mcake\u001B[0m',
  '\u001b[38;2;255;255;85mTolstoy\u001b[0m',
  '\u{1F4A9}',
  '𝐀',
  'I \u2661 STEAK',
  '\u001b[3;4;31mhatsu\u001b[0m',
  '\u{1F3C3}2\u{1F525}7',
  '\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m🦄bar'
]

for (let tx of arr) {
  Xr(tx).hasAnsi(hasAnsi(tx)).hasAstral(hasAstral(tx)).clearAnsi(clearAnsi(tx)).clearAstral(clearAstral(tx)) |> logger
}