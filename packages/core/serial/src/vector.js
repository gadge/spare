import { Presm } from '@palett/pres'
import { rend }  from './core.js'
import { Grad }  from './Grad.js'

export function vector(vec) {
  /** @type {Presm} */
  const presm = this
  const len = vec.length, series = Array(len), widths = series.wds = Array(len)
  if (!len) return series
  const values = Array(len), grad = new Grad(presm.dim)
  let wd = 0, i
  for (i = 0; i < len; i++) if ((widths[i] = grad.rec(series, values, vec[i], i)) > wd) wd = widths[i]
  grad.lever(presm, wd)
  for (i = 0; i < len; i++) series[i] = rend.call(presm, grad, series[i], values[i])
  return series //console.log('tvs', tvs, 'nvs', nvs, 'wds', wds)
}