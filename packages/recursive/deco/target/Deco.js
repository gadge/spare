import { mutate }                                 from '@vect/vector-mapper'
import { fluoVector }                             from '@palett/fluo-vector'
import { MUTATE_PIGMENT }                         from '@palett/enum-colorant-modes'
import { renderVector }                           from '../src/infrastructure/renderVector'
import { mutateKeyPad }                           from '../src/infrastructure/mutateKeyPad'
import { mutateValues }                           from '@vect/entries-mapper'
import { fluoEntries }                            from '@palett/fluo-entries'
import { renderEntries }                          from '../src/infrastructure/renderEntries'
import { _deco }                                  from '../src/_deco'
import { BIG, BOO, FUN, NUM, OBJ, STR, SYM, UND } from '@typen/enum-data-types'
import { isNumeric }                              from '@typen/num-loose'
import { renderString }                           from '../src/infrastructure/renderString'
import { decoFunc, funcName }                     from '@spare/deco-func'
import { typ }                                    from '@typen/typ'
import { ARRAY, DATE, MAP, OBJECT, SET }          from '@typen/enum-object-types'
import { BRC, BRK, PAL }                          from '@spare/deco-colors'
import { decoDate, decoDateTime }                 from '@spare/deco-date'
import { _decoString }                            from '@spare/deco-string'
import { splitLiteral }                           from '@spare/splitter'

export class Deco {
  pres
  style
  full
  depth
  vert
  unit
  width
  constructor(config) {
    this.pres = config.pres
    this.style = config.style
    this.full = config.full
    this.depth = config.depth ?? 8  // 级高于此则不展示
    this.vert = config.vert ?? 0    // 级低于则竖排显示
    this.unit = config.unit ?? 32   // 值/键值对的元素宽度大于此, 则进行竖排
    this.width = config.width ?? 80 // 行字符的宽度大于此, 则换行
  }

  render(node, level = 0, indent) {
    const t = typeof node
    if (t === STR) return isNumeric(node) ? node : renderString.call(this, node, level, indent)
    if (t === NUM || t === BIG) return node
    if (t === FUN) return level >= this.depth ? funcName(node) : decoFunc(node, this)
    if (t === OBJ) {
      const { depth } = this, pt = typ(node)
      if (pt === ARRAY) return level >= depth ? '[array]' : this.vector(node.slice(), level) |> BRK[level & 7]
      if (pt === OBJECT) return level >= depth ? '{object}' : this.entries(Object.entries(node), level) |> BRC[level & 7]
      if (pt === DATE) return level >= depth ? decoDate(node) : decoDateTime(node)
      if (pt === MAP) return level >= depth ? '(map)' : this.entries([...node.entries()], level) |> BRK[level & 7]
      if (pt === SET) return level >= depth ? '(set)' : `set:[${this.vector([...node], level)}]`
      return `${node}`
    }
    if (t === BOO) return PAL.BOO(node)
    if (t === UND || t === SYM) return PAL.UDF(node)
    return `${node}`
  }

  string(string, lv, indent) {
    const width = this.string?.width ?? this.width ?? 0, presets = this.string?.presets ?? null
    const ctx = { vectify: splitLiteral, presets, width, indent: level + 1, firstLineIndent: indent, }
    return _decoString.call(ctx, string)
  }
  vector(vector, lv) {
    mutate(vector, v => String(_deco.call(this, v, lv + 1)))
    if (this.pres) fluoVector.call(MUTATE_PIGMENT, vector, this.pres)
    return renderVector.call(this, vector, lv)
  }
  entries(entries, lv) {
    const pad = mutateKeyPad(entries)
    mutateValues(entries, v => String(_deco.call(this, v, lv + 1, pad)))
    if (this.pres) fluoEntries.call(MUTATE_PIGMENT, entries, this.pres)
    return renderEntries.call(this, entries, lv)
  }
}