export const comboParam = (
  a = 'z',
  b/* well */ = { f: 1, g: 2 },
  c = [3, 5],
  d = { max: [1, 2, 3], min: {} }
) => {
  return { a, b, c }
}
