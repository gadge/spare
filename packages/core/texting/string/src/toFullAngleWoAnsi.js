import stripAnsi from 'strip-ansi'
import { hasAnsi } from '@spare/lange'
import { toFullAngle } from '../src/fullAngle'

/**
 *
 * @param tx
 * @return {string}
 * @deprecated
 */
export const toFullAngleWoAnsi = function (tx) {
  if (hasAnsi(tx)) tx = stripAnsi(tx)
  return toFullAngle(tx)
}
