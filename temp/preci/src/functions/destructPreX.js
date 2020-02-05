import { Visual } from 'hatsu-matrix'
import { isVisual } from '../../isVisual'
import { PreX } from '../PreX'

export const destructPreX = (mx, [top, bottom], [left, right], {
  abstract,
  visual = {},
  ansi = false
}, [height, width]) => {
  const
    prex = PreX.fromMx(mx, [top, bottom], [left, right], [height, width]),
    rawx = prex.toMx('..'),
    palx = (visual |> isVisual) ? Visual.matrix(rawx, { ...visual, retFn: true, mutate: false }) : null,
    wordx = prex.stringify(abstract).toMx('..')
  return { rawx, palx, wordx }
}


