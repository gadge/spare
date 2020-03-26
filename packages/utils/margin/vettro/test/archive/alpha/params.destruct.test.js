import { deca, decoLog } from '@spare/deco'
import { totx } from '@spare/util'
import { logger } from '@spare/logger'

const noopEntry = []

const visualConfig = visual => {
  if (!visual) return false
  const df = { max: 'A', min: 'B', na: 'C' }
  if (typeof visual === 'object') {
    for (let k in df)
      if (!(k in visual)) visual[k] = df[k]
  } else { visual = df }
  return visual
}

export const paramsDestructTest = (arr, {
  hMargin: [top, bottom] = noopEntry,
  vMargin: [left, right] = noopEntry,
  area: [height, width] = noopEntry,
  read,
  visual
} = {}) => {
  ({
    arr,
    top, bottom, left, right,
    height, width,
    read, visual: visual |> visualConfig
  }) |> deca({ vu: 1 }) |> logger
}

paramsDestructTest([1, 2, 3], {
  read: totx,
  visual: false
})


