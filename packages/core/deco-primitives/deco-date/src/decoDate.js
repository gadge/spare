import { METRO, SUBTLE } from '@palett/presets'
import { Colorant }      from '@palett/projector'
import { DASH, RT }      from '@spare/enum-chars'

const dyeY = Colorant({ min: 1990, max: 2030 }, METRO)
const dyeM = Colorant({ min: 1, max: 12 }, METRO)
const dyeD = Colorant({ min: 1, max: 31 }, METRO)
const dyeh = Colorant({ min: 1, max: 24 }, SUBTLE)
const dyes = Colorant({ min: 1, max: 60 }, SUBTLE)

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
