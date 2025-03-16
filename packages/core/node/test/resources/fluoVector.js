import { boundaries }       from '@aryth/bound-vector'
import { PresetCollection } from '@palett/fluo'
import { Proj }             from '@palett/projector'
import { _decoEntries }     from '@spare/node-entries'
import { vectorMargin }     from '@spare/vector-margin'
import { valid }            from '@typen/nullish'
import { mapper }           from '@vect/vector-mapper'


export function fluoVector(vec = []) {
  const config = this
  if (config?.indexed) return _decoEntries.call(config, Object.entries(vec))
  vec = vectorMargin(vec, config) // use: head, tail, read, rule
  if (config.presets) vec = prettyVector(vec, config.presets) // use:  presets, effects
  return '[' + vec.join(', ') + ']'
  // return liner(vec, config)
}

export function prettyVector(vec, presets) {
  if (!vec?.length) return []
  if (presets?.length && !presets[0]?.by) PresetCollection.prototype.setBound.call(presets)
  const [ cX, cY ] = presets
  const [ bX, bY ] = boundaries(vec, presets)
  const [ pX, pY ] = [ Proj.from(bX, cX), Proj.from(bY, cY) ]
  const projectors = [ [ bX, pX ], [ bY, pY ] ]
  return mapper(vec, Factory.render(projectors))
}

export class Factory {
  static render([ [ bX, pX ], [ bY, pY ] ]) {
    return (n, i) => {
      let v
      if (valid(v = bX && bX[i])) { return pX.render(v, n) }
      if (valid(v = bY && bY[i])) { return pY.render(v, n) }
      return (pX || pY)?.render(pX.nap, n) ?? n
    }
  }
}