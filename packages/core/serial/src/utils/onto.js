export function onto(i, x, y, z) {
  this[i++] = x
  this[i++] = y
  this[i++] = z
  return this
}