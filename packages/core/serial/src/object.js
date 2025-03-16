import { rend } from './core.js'
import { Grad } from './Grad.js'

export function object(obj) {
  const presm = this
  const series = [], values = [], widths = series.wds = []
  const kgr = new Grad(presm.dim), vgr = new Grad(presm.dim)
  let kw = 0, vw = 0, i = -1, hi
  for (let k in obj) {
    if ((widths[++i] = kgr.rec(series, values, k, i)) > kw) kw = widths[i]
    if ((widths[++i] = vgr.rec(series, values, obj[k], i)) > vw) vw = widths[i]
  }
  if (i <= 0) return series
  kgr.lever(presm, kw)
  vgr.lever(presm, vw)
  for (hi = i, i = -1; i < hi;) {
    series[++i] = rend.call(presm, kgr, series[i], values[i])
    series[++i] = rend.call(presm, vgr, series[i], values[i])
  }
  return series
}