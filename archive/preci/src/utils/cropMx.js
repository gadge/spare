import { cropAr } from './cropAr'

export const cropMx = (mx, [tp, bt], [lf, rt], [ht, wd]) => {
  const _mx = Array(ht), bs = ht - bt, rs = wd - rt
  for (let i = 0; i < tp; i++) _mx[i] = cropAr(mx[i], lf, rs, wd)
  for (let i = bs; i < ht; i++) _mx[i] = cropAr(mx[i], lf, rs, wd)
  return _mx
}

export const cropRow = (row, i, fn, lf, rs, wd) => {
  const _r = Array(wd)
  for (--wd; wd >= rs; wd--) _r[wd] = fn(row[wd], i, wd)
  for (--lf; lf >= 0; lf--) _r[lf] = fn(row[lf], i, lf)
  return _r
}

export const cropMapMx = (mx, fn, [tp, bt], [lf, rt], [ht, wd]) => {
  const _mx = Array(ht), bs = ht - bt, rs = wd - rt
  for (let i = 0; i < tp; i++) _mx[i] = cropRow(mx[i], i, fn, lf, rs, wd)
  for (let i = bs; i < ht; i++) _mx[i] = cropRow(mx[i], i, fn, lf, rs, wd)
  return _mx
}
