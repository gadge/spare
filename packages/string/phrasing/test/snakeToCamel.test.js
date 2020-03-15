import { candidates } from './candidates'
import { camelToSnake, snakeToCamel, snakeToPascal } from '../src/phrasing'
import { decoSamples, logNeL, says } from '@spare/logger'

'below are tests' |> says['snake -> pascal -> snake']
Object.entries(candidates).map(([key, phrase]) => {
  const pascal = snakeToPascal(phrase)
  return { value: phrase, pascal, snake: camelToSnake(pascal) }
})|> decoSamples |> logNeL

'below are tests' |> says['snake -> camel -> snake']
Object.entries(candidates).map(([key, phrase]) => {
  const camel = snakeToCamel(phrase)
  return { value: phrase, camel, snake: camelToSnake(camel) }
})|> decoSamples |> logNeL
