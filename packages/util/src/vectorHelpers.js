/**
 *
 * @param {*[]} a
 * @param {*[]} b
 * @param {function(*,*,number?)} zipper
 * @return {*[]}
 */
export function zip (a, b, zipper) {
  const { length } = a, arr = Array(length)
  for (let i = 0; i < length; i++) arr[i] = zipper(a[i], b[i], i)
  return arr
}
