import { clearAnsi, hasAnsi } from '@spare/charset'
import { halfToFull }         from '@spare/fullwidth'

/**
 *
 * @param tx
 * @return {string}
 * @deprecated
 */
export const toFullAngleWoAnsi = function (tx) {
  if (hasAnsi(tx)) tx = clearAnsi(tx)
  return halfToFull(tx)
}
