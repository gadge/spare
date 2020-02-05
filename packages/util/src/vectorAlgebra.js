/**
 *
 * @param {*[][]} mx
 * @returns {number[]}
 */
export function coins (mx) {
  if (!mx?.length) return []
  const [row] = mx
  if (!row) return []
  return row.map((_, i) => i)
}

/**
 * Transpose a 2d-array.
 * @param {*[][]} mx
 * @returns {*[][]}
 */
export function transpose (mx) {
  return coins(mx).map(n => mx.map(r => r[n]))
}

/**
 *
 * @param {*[]} a
 * @param {*[]} b
 * @param {function(*,*,?number)} zipper
 * @return {any[]}
 */
export function zip (a, b, zipper) {
  const { length } = a, arr = Array(length)
  for (let i = 0; i < length; i++) arr[i] = zipper(a[i], b[i], i)
  return arr
}
