import { flopValue }          from '@aryth/rand'
import { Mag }                from '@cliche/mag'
import { CrostabCollection }  from '@foba/crostab'
import { FRESH, MOSS, OCEAN } from '@palett/presets'
import { logger }             from '@spare/logger'
import { isNumeric }          from '@typen/num-strict'
import { POINTWISE }          from '@vect/enum-matrix-directions'
import { Deco }               from '../index'

const mag = new Mag(0)

const crostab = CrostabCollection |> flopValue

crostab.side[0] = '二零七七'
crostab |> Deco({
  direct: POINTWISE,
  presets: [OCEAN, FRESH, MOSS],
  read: x => isNumeric(x) ? mag.format(+x) : NaN,
  top: 4, bottom: 3, left: 3, right: 2,
  fullAngle: false,
}) |> logger


