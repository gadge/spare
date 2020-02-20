import { DecoEntries, delogger, logger } from '..'
import { METRO } from '@palett/presets'

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

Object.entries(candidates) |> DecoEntries({ stringPreset: METRO }) |> logger

