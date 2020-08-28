export const comboParam = (
  a = 'z',
  b/* well */ = { f: 1, g: 2 },
  c = [3, 5],
  d = { max: [1, 2, 3], min: {} }
) => {
  return { a, b, c }
}

/**
 *
 * @param mx
 * @param direct
 * @param preset
 * @param mutate
 * @param mapper
 * @param string
 * @param number
 * @param misc
 */
const fluoSample = (mx, {
  direct = 'point',
  preset = ({ max: [0, 0, 0], na: 0 }),
  mutate,
  mapper = function (foo = 5) { return { foo, bar: {} } },
  deco: {
    string = 1,
    number = 2,
    misc
  } = {}
} = {}) => {
  return mx
}

export const ComplexCollection = {
  comboParam: comboParam,
  fluoSample
}

// decoFunc(fluoSample) |> says[fluoSample.name]
