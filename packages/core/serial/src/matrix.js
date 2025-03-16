import { COLUMNWISE, POINTWISE, ROWWISE } from '@vect/enum-matrix-directions'
import { height, width }                  from '@vect/matrix-index'
import { init, iso }                      from '@vect/vector-init'
import { Grad }                           from './Grad.js'
import { rend }                           from './core.js'

export function matrix(mat, direct) {
  if (direct === POINTWISE) return points.call(this, mat)
  if (direct === ROWWISE) return rows.call(this, mat)
  if (direct === COLUMNWISE) return columns.call(this, mat)
  return points.call(this, mat)
}

export function points(mat) {
  const presm = this
  const ht = height(mat), wd = width(mat), cn = ht * wd
  const series = Array(cn), values = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0)
  const grad = new Grad(presm.dim)
  let wp = 0
  for (let i = 0, p = 0; i < ht; i++) {
    for (let j = 0, r = mat[i], w; j < wd; j++) {
      w = grad.rec(series, values, r[j], p++)
      if (w > xs[i]) xs[i] = w
      if (w > ys[j]) ys[j] = w
      if (w > wp) wp = w
    }
  }
  grad.lever(presm, wp) // console.log('series', series, 'values', values, 'rowwise widths', xs, 'columnwise widths', ys)
  for (let i = 0, p = 0; i < ht; i++)
    for (let j = 0; j < wd; j++, p++)
      series[p] = rend.call(presm, grad, series[p], values[p], ys[j])
  return series
}

export function rows(mat) {
  const presm = this
  const ht = height(mat), wd = width(mat), cn = ht * wd
  const series = Array(cn), values = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0)
  const grads = init(ht, () => new Grad(presm.dim))
  for (let i = 0, p = 0; i < ht; i++) {
    for (let j = 0, r = mat[i], w; j < wd; j++) {
      w = grads[i].rec(series, values, r[j], p++)
      if (w > xs[i]) xs[i] = w
      if (w > ys[j]) ys[j] = w
    }
  }
  for (let i = 0, p = 0; i < ht; i++) {
    grads[i].lever(presm, xs[i])
    for (let j = 0; j < wd; j++, p++)
      series[p] = rend.call(presm, grads[i], series[p], values[p], ys[j])
  }
  return series
}

export function columns(mat) {
  const presm = this
  const ht = height(mat), wd = width(mat), cn = ht * wd
  const series = Array(cn), values = Array(cn), xs = iso(ht, 0), ys = iso(wd, 0)
  const grads = init(wd, () => new Grad(presm.dim))
  for (let i = 0, p = 0; i < ht; i++) {
    for (let j = 0, r = mat[i], w; j < wd; j++) {
      w = grads[j].rec(series, values, r[j], p++)
      if (w > xs[i]) xs[i] = w
      if (w > ys[j]) ys[j] = w
    }
  }
  for (let j = 0; j < wd; j++) grads[j].lever(presm, ys[j])
  for (let i = 0, p = 0; i < ht; i++)
    for (let j = 0; j < wd; j++, p++)
      series[p] = rend.call(presm, grads[j], series[p], values[p], ys[j])
  return series
}