import { fluoEntries }         from '@palett/fluo-entries'
import { fluoVector }          from '@palett/fluo-vector'
import { FRESH, JUNGLE }       from '@palett/presets'
import { brace, bracket }      from '@spare/bracket'
import { decoDateTime }        from '@spare/deco-date'
import { COSP, RT }            from '@spare/enum-chars'
import { logger }              from '@spare/logger'
import { OBJ }                 from '@typen/enum-data-types'
import { ARRAY, DATE, OBJECT } from '@typen/enum-object-types'
import { typ }                 from '@typen/typ'
import { mutate }              from '@vect/column-mapper'

const dve = function (ve) {
  ve = ve.map(decoValue)
  if (this?.pr) fluoVector(ve, this)
  return bracket(ve.join(COSP))
}

const dob = function (ob) {
  const ents = mutate(Object.entries(ob), 1, v => decoValue.call(this, v))
  if (this?.pr) fluoEntries(ents, this)
  return brace(ents.map(([k, v]) => k + RT + v).join(COSP))
}

export function decoFlat (x) {
  let t
  if ((t = typeof x) === OBJ && (t = typ(x))) {
    if (t === ARRAY) return dve.call(this, x)
    if (t === OBJECT) return dob.call(this, x)
    if (t === DATE) return decoDateTime(x)
  }
  return x
}

const decoValue = x => decoFlat.call({ pr: true, preset: FRESH, stringPreset: JUNGLE, mutate: true }, x)

const a = [[1], [2, 3]]
const b = { foo: 1, bar: 2, date: new Date(), kha: [[1], [2, 3]] }
decoValue(a) |> logger
decoValue(b) |> logger
// "@typen/typ": "",
// "@typen/enum-object-types":"",
// "@spare/decoPale-vector":"",
// "@spare/decoPale-object": "",
// "@spare/decoPale-date":"",








