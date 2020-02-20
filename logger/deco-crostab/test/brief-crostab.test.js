import { Foba } from '@foba/crostab'
import { delogger } from '@spare/deco'
import { logger } from '@spare/logger'
import { deco } from '../src/deco'
import { Directs } from '@vect/matrix'
import { ClicheMag } from '@cliche/mag'
import { isNumeric } from '@typen/num-strict'
import { JUNGLE, OCEAN } from '@palett/presets'

const mag = new ClicheMag(0)

const crostab = Foba.flop()
crostab |> delogger

deco(crostab, {
  direct: Directs.pointwise,
  labelPreset: OCEAN,
  abstract: x => isNumeric(x) ? mag.format(x) : NaN,
  top: 4, bottom: 3, left: 3, right: 2
}) |> logger


