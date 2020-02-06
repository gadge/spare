import { Mx } from 'veho'
import { vecPad, vecPalPad } from '@spare/util'

export const padMx = (wordx, rawx, palx, pads, ansi) => {
  const [, wd] = Mx.size(rawx)
  return palx
    ? wordx.map((words, i) => vecPalPad(words, rawx[i], palx[i], pads, ansi, wd))
    : wordx.map((words, i) => vecPad(words, rawx[i], pads, ansi, wd))
}
