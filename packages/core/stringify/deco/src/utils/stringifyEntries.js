import { lange } from '@spare/lange'
import { max } from '@aryth/comparer'
import { LPad } from '@spare/pad-string'
import { joinLines } from '@spare/liner'
import { iterate as iterateVector, mutate as mutateVector } from '@vect/vector-mapper'
import { mutate as mutateColumn } from '@vect/column-mapper'
import { CO, COSP, RTSP } from '@spare/enum-chars'

const lpad = LPad({ ansi: true })

export const stringifyEntries = function (entries, lv) {
  const { vo } = this, { pad, wrap } = wrapInfo.call(this, entries)
  if (wrap || lv < vo) mutateColumn(entries, 0, k => lpad(k, pad))
  mutateVector(entries, ([k, v]) => k + RTSP + v)
  return (wrap || lv < vo) && entries.length > 1 ? joinLines(entries, CO, lv) : entries.join(COSP)
}

export const wrapInfo = function (entries) {
  const { wo } = this
  let w = 0, wrap = false, pad = 0
  iterateVector(entries, ([k, v]) => {
    k = lange(k), v = lange(v), pad = max(k, pad)
    if (!wrap && (w += (k + v)) > wo) wrap = true
  })
  return { pad, wrap }
}
