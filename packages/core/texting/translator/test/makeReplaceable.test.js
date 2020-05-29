import { says }            from '@spare/logger'
import { quote }           from '@spare/quote'
import { MakeReplaceable } from '../src/makeReplaceable'

const dict = [
  [/e/g, 'a'],
  [/l/gi, 'r'],
  [/ /gi, '-']
] |> MakeReplaceable({ sort: true })

'hello'.replace(dict, quote) |> says['hello']
'Los Angeles'.replace(dict, x => x.split('-')) |> says['Los Angeles']
