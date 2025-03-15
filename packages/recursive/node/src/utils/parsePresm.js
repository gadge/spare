import { Pres, Presm, randPres } from '@palett/pres'
import { OBJ, STR }              from '@typen/enum-data-types'

function parsePres(unit) {
  return unit instanceof Pres ? unit : typeof unit === STR ? randPres(unit) : null
}

// normally pass conf.pres ?? conf
export function parsePresm(o, pres) {
  if (typeof o === STR && o.startsWith('#')) { return Presm.build(o = randPres(o), o) } // string -> make presm
  if (typeof o === OBJ) {
    if (o instanceof Pres) return Presm.build(o, o) // pres -> make presm
    if (o instanceof Presm) return o // presm -> pass presm
    const str = o.str, pos = o.num ?? o.pos, neg = o.neg, nan = o.nan
    if (str || pos || neg) return Presm.build(parsePres(str), parsePres(pos), parsePres(neg), nan) // {str, pos, neg} -> make presm
  }
  if (pres) return parsePresm(pres, null) // if nothing found, use default pres
  return null // if nothing found and default pres not provided, return null
}