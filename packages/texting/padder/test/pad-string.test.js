import { lange }  from '@spare/lange'
import { logger } from '@spare/logger'
import { xr }   from '@spare/xr'
import { RPad } from '../utils/RPad'

const brc = x => `(${x})`
String.prototype.padStart.call('abc', 5) |> brc|> logger

const list = [
  'tora',
  '\u001B[4mcake\u001B[0m',
  '\u001b[38;2;255;255;85mTolstoy\u001b[0m',
  '\u{1F4A9}',
  '𝐀',
  'I \u2661 STEAK',
  '\u001b[3;4;31mhatsu\u001b[0m',
  '\u{1F3C3}2\u{1F525}7',
]

const padOrd = RPad({ ansi: false })
const padAnsi = RPad({ ansi: true })
for (let tx of list) {
  xr(tx).len(tx.length).lange(lange(tx)).ordinary(padOrd(tx, 10)).ansi(padAnsi(tx, 10)) |> logger
}


