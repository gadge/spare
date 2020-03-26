import { logger } from '@spare/logger'
import { decoFlat } from '../index'

decoFlat('shake') |> logger
decoFlat(123) |> logger
decoFlat({ foo: 1, date: new Date(), vec: [1, 2, 3], symbol: Symbol.for('shake') }) |> logger
