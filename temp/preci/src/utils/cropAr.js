/**
 *
 * @param {*[]} ar
 * @param {number} hd - head(left) length
 * @param {number} ts - tail(right) start index
 * @param {number} l - array length
 * @returns {*[]}
 */
export const cropAr = (ar, hd, ts, l) => {
  const _r = Array(l)
  for (--l; l >= ts; l--) _r[l] = ar[l]
  for (--hd; hd >= 0; hd--) _r[hd] = ar[hd]
  return _r
}

/**
 *
 * @param {*[]} ar
 * @param {function(*)|function(*,number)} fn
 * @param {number} hd - head(left) length
 * @param {number} ts - tail(right) start index, ts=l-right
 * @param {number} l - array length
 * @returns {*[]}
 */
export const cropMapAr = (ar, fn, hd, ts, l) => {
  const _r = Array(l)
  for (--l; l >= ts; l--) _r[l] = fn(ar[l], l)
  for (--hd; hd >= 0; hd--) _r[hd] = fn(ar[hd], hd)
  return _r
}

