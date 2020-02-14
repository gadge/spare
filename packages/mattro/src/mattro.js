import { isVisual } from '@spare/util'
import { Visual } from 'hatsu-matrix'
import { Matrigin } from './matrigin'

/**
 *
 * @param mx
 * @param [top]
 * @param [bottom]
 * @param [left]
 * @param [right]
 * @param [height]
 * @param [width]
 * @param [abstract]
 * @param [visual]
 * @returns {{text:*[][], raw:*[][], dye:*[][]}}
 */
export const mattro = (mx, {
  top, bottom, left, right, height, width,
  abstract, visual
} = {}) => {
  visual = visual|> isVisual
  const
    mn = Matrigin.build(mx, top, bottom, left, right, height, width),
    raw = mn.toMatrix('..'),
    dye = visual ? Visual.matrix(raw, { ...visual, retFn: true, mutate: false }) : null,
    text = mn.stringify(abstract).toMatrix('..')
  return { text, raw, dye }
}


