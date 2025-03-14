import { decoSamples, logNeL, says }                 from '@spare/logger'
import { camelToSnake, snakeToCamel, snakeToPascal } from '../src/phrasing'
import { candidates }                                from './candidates'

'below are tests' |> says['loom -> pascal -> loom']
Object.entries(candidates).map(([key, phrase]) => {
  const pascal = snakeToPascal(phrase)
  return { value: phrase, pascal, snake: camelToSnake(pascal) }
})|> decoSamples |> logNeL

'below are tests' |> says['loom -> camel -> loom']
Object.entries(candidates).map(([key, phrase]) => {
  const camel = snakeToCamel(phrase)
  return { value: phrase, camel, snake: camelToSnake(camel) }
})|> decoSamples |> logNeL
