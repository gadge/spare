import { says } from '@spare/logger'
import { MakeReplaceable } from '../src/makeReplaceable'
import { quote } from '@spare/quote'

const dict = [
  [/e/g, 'a'],
  [/l/gi, 'r'],
  [/ /gi, '-']
] |> MakeReplaceable({ sort: true })

'hello'.replace(dict, quote) |> says['hello']
'Los Angeles'.replace(dict, x => x.split('-')) |> says['Los Angeles']
