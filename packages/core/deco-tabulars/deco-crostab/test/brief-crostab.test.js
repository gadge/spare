import { flopValue }         from '@aryth/rand'
import { Mag }               from '@cliche/mag'
import { CrostabCollection } from '@foba/crostab'
import { OCEAN }             from '@palett/presets'
import { delogger }          from '@spare/deco'
import { logger }            from '@spare/logger'
import { isNumeric }         from '@typen/num-strict'
import { POINTWISE }         from '@vect/enum-matrix-directions'
import { Deco }              from '../index'

const mag = new Mag(0)

const crostab = CrostabCollection |> flopValue
crostab |> delogger
crostab.side[0] = '二零七七'
crostab |> Deco({
  direct: POINTWISE,
  labelPreset: OCEAN,
  read: x => isNumeric(x) ? mag.format(+x) : NaN,
  top: 4, bottom: 3, left: 3, right: 2,
  fullAngle: true
}) |> logger


