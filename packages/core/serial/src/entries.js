import { rend } from './core.js'
import { Grad } from './Grad.js'

export function entries(ent, pad) {
  const presm = this
  let ht = ent.length, cn = ht << 1, kw = 0, vw = 0, i = -1
  const series = Array(cn), values = Array(cn), widths = series.wds = Array(cn)
  if (!ht) return series
  const kgr = new Grad(presm.dim), vgr = new Grad(presm.dim)
  for (let [ key, val ] of ent) {
    if ((widths[++i] = kgr.rec(series, values, key, i)) > kw) kw = widths[i]
    if ((widths[++i] = vgr.rec(series, values, val, i)) > vw) vw = widths[i]
  }
  kgr.lever(presm, kw)
  vgr.lever(presm, vw)
  for (cn--, i = -1, kw = pad ? kw : 0, vw = pad ? vw : 0; i < cn;) {
    series[++i] = rend.call(presm, kgr, series[i], values[i], kw)
    series[++i] = rend.call(presm, vgr, series[i], values[i], vw)
  }
  return series
}