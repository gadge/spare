import { deco } from '..'

const candidates = {
  boolean: true,
  string: 'Shakespeare',
  number: 128,
  null: null,
  undefined: undefined,
  simple_array: [1, 2, 3, 4, 5],
  empty_matrix: [[]],
  one_row_matrix: [[1, 2, 3, 4, 5]],
  simple_set: new Set([1, 1, 1, 2, 2, 3, 3, 3]),
  // simple_matrix: Mx.ini(3, 12, (x, y) => x + y + 1),
  simple_map: new Map([['Lagos', 861], ['Dhaka', 8906], ['Lima', 9174], ['Ankara', 5271], ['Nagpur', 2405]]),
  // superlativeTrees_map: superlativeTrees,
  simple_lambda: (x) => `${x}`,
  json: {
    foo: [1, 2, 3],
    bar: {
      kha: [1, 2, 3],
      mia: [[1, 2, 3]]
    },
    shake: [[[0, 1], [1, 0]]]
  }
}

for (let [key, target] of Object.entries(candidates)) {
  `${key}: ${target|> deco}`  |> console.log
}
