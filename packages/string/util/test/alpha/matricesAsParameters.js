import { mapper } from '@vect/vector'

export const matricesAsParameter = (xa, xb, xc, xd) => {
  const { mapper, zipper } = this
  const xt = mapper(xa, xb, xc, xd, zipper)
  return xt
}

// pipezip
// parazip
// tubezip
// manyzip
// latezip
// tunnelzip
// repzip
// seriesZipper


export const seriesZipper = function (...matrices) {
  let l = matrices.length
  let { zipper } = this
  let [ht, wd] = matrices[0]
  const mx = Array(ht)
  for (let i = 0, j, tr, rs; i < ht; i++) {
    rs = mapper(matrices, mx => mx[i], l)
    for (j = 0, mx[i] = tr = Array(wd); j < wd; j++) {
      tr[j] = zipper(...mapper(rs, r => r[j]))
    }
  }
  return mx
}
