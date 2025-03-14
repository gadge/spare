import { flopValue }          from '@aryth/rand'
import { Mag }                from '@cliche/mag'
import { CrostabCollection }  from '@foba/crostab'
import { FRESH, MOSS, OCEAN } from '@palett/presets'
import { says }               from '@spare/xr'
import { DecoMatrix, logger } from '@spare/logger'
import { isNumeric }          from '@typen/num-strict'
import { POINTWISE, ROWWISE } from '@vect/enum-matrix-directions'
import { COLUMNWISE, size }   from '@vect/matrix'
import { Deco }               from '../index.js'
import { test } from 'node:test'

const mag = new Mag(0)

test('brief crostab', () => {
  const crostab = flopValue(CrostabCollection)
  const rows = crostab.rows
  const [ h, w ] = size(rows)
  rows[h - 2][w - 2] = "星云"
  logger(DecoMatrix({ direct: COLUMNWISE })(crostab.rows))
  crostab.side[0] = '二零七七'
  says['crostab'](Deco({
    direct: POINTWISE,
    presets: [ OCEAN, FRESH, MOSS ],
    read: x => isNumeric(x) ? mag.format(+x) : x,
    top: 4,
    bottom: 3,
    left: 3,
    right: 2,
    fullAngle: true,
  })(crostab))
})



