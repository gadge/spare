import { says }               from '@palett/says'
import { LF }                 from '@spare/enum-chars'
import { logger }             from '@spare/logger'
import { decoFunc }           from '../index'
import { FunctionCollection } from './assets/FunctionCollection'

for (const [key, func] of Object.entries(FunctionCollection)) {
  decoFunc(func) |> says[key].br(func.name).p(LF)
  '' |> logger
}

/**
 *
 * @param mx
 * @param direct
 * @param preset
 * @param mutate
 * @param mapper
 * @param string
 * @param number
 * @param misc
 */
const fluoSample = (mx, {
  direct = 'point',
  preset = ({ max: [0, 0, 0], na: 0 }),
  mutate,
  mapper = function (foo = 5) { return { foo, bar: {} } },
  deco: {
    string = 1,
    number = 2,
    misc
  } = {}
} = {}) => {}

decoFunc(fluoSample) |> says[fluoSample.name]
