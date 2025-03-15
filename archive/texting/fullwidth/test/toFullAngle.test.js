import { says }      from '@palett/says'
import { xr }        from '@spare/logger'
import { fullWidth } from '../index'

const candidates = [
  '[电子制造, 电子 ][　苹果概念　]',
  '［　电子制造，　电子　］［　苹果概念　］'
]

for (let candidate of candidates) {
  xr().original(candidate).toFullAngle(fullWidth(candidate)) |> says['xform']
}
