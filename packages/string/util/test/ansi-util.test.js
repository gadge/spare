import { len } from '../utils/strlen'
import { astralReg } from '../utils/regs'

const arr = [
  'tora',
  '\u001B[4mcake\u001B[0m',
  '\u001b[38;2;255;255;85mTolstoy\u001b[0m',
  '\u{1F4A9}',
  '𝐀',
  'I \u2661 STEAK',
  '\u001b[31m here \u001b[0m',
  '\u001b[31m\u{1F3C3}2\u{1F525}7\u001b[0m',
  '\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m🦄bar'
]

for (let tx of arr) {
  `[${tx}] [length] (${tx.length}) [len] (${len(tx)}) [match] (${astralReg.exec(tx)})` |> console.log
}
