import { says }       from '@spare/logger'
import { Translator } from '../src/Translator'

const dict = [
  [/e/g, 'a'],
  [/l/gi, 'r']
]

const translator = new Translator(dict)

translator.parse('hello') |> says['hello']

translator.parse('Los Angeles') |> says['Los Angeles']
