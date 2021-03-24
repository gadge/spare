import { METRO, SUBTLE }               from '@palett/presets'
import { DecoEntries, delogger, says } from '../index'

const candidates = {
  ob: ({ foo: 'bar', kha: 'mia' }),
  str: 'shakespeare',
  num: 0x200,
  udf: undefined,
  nul: null,
  inf: Number.POSITIVE_INFINITY,
  eps: Number.EPSILON
}

candidates |> delogger

Object.entries(candidates) |> DecoEntries({ presets: [SUBTLE, METRO] }) |> says.logger

