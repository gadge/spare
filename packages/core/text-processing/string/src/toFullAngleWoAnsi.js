import stripAnsi from 'strip-ansi'
import { hasAnsi } from '@spare/lange'
import { toFullAngle } from '../src/fullAngle'

export const toFullAngleWoAnsi = tx => {
  if (hasAnsi(tx)) tx = stripAnsi(tx)
  return toFullAngle(tx)
}
