import { FluoNumber } from '@palett/fluo'
import { OCEAN, PLANET } from '@palett/presets'
import { DASH, RT } from '@spare/enum-chars'

const dyeY = FluoNumber({ min: 1990, max: 2030 }, OCEAN)
const dyeM = FluoNumber({ min: 1, max: 12 }, OCEAN)
const dyeD = FluoNumber({ min: 1, max: 31 }, PLANET)
const dyeh = FluoNumber({ min: 1, max: 24 }, PLANET)
const dyes = FluoNumber({ min: 1, max: 60 }, PLANET)

const p4 = x => x >= 1000 ? '' + x : x.padStart(4, '0')
const p2 = x => x >= 10 ? '' + x : '0' + x

export const decoDate = date => {
  const Y = date.getFullYear(), M = date.getMonth() + 1, D = date.getDate()
  return (p4(Y) |> dyeY(Y)) + DASH + (p2(M) |> dyeM(M)) + DASH + (p2(D) |> dyeD(D))
}

export const decoTime = date => {
  const h = date.getHours(), m = date.getMinutes(), s = date.getSeconds()
  return (p2(h) |> dyeh(h)) + RT + (p2(m) |> dyes(m)) + RT + (p2(s) |> dyes(s))
}

export const decoDateTime = date => decoDate(date) + '\'' + decoTime(date)
