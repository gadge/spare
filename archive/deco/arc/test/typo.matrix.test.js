import { FRESH, METRO, OCEAN } from '@palett/presets'
import { COSP, LF }            from '@texting/enum-chars'
import { indexed }             from '@vect/object-mapper'
import { Typo }                from '../src/Typo.js'

const MATRICES = {
  emptyMatrix: [ [] ],
  oneRow: [ [ 0, 0, 1, 8 ] ],
  oneColumn: [ [ 0 ], [ 9 ], [ 11 ] ],
  pos: [ [ 0, 0, 1, 8 ], [ 9, 10, 11, 11 ], [ 11, 13, 14, 14 ] ],
  neg: [ [ 0, 0, -1, -8 ], [ -9, -10, -11, -11 ], [ -11, -13, -14, -14 ] ],
  mix: [ [ 0, 0, -1, -8 ], [ 9, 10, 11, 11 ], [ -11, -13, -14, -14 ] ],
}

MATRICES |> console.log

const typo = new Typo({ fill: ' ', ansi: true, pres: { pos: FRESH, neg: OCEAN, str: METRO } })
// for (let [ key, mat ] of indexed(MATRICES)) {
//   key |> console.log;
//   ('[' + LF + typo.renderMatrix(mat).map(row => '  [ ' + row.join(COSP) + ' ]').join(LF) + LF + ']') |> console.log
// }

for (let [ key, mat ] of indexed(MATRICES)) {
  key |> console.log;
  ('[' + LF + typo.renderColumns(mat).map(row => '  [ ' + row.join(COSP) + ' ]').join(LF) + LF + ']') |> console.log
}

// for (let [ key, mat ] of indexed(MATRICES)) {
//   key |> console.log;
//   ('[' + LF + typo.renderColumns(mat).map(row => '  [ ' + row.join(COSP) + ' ]').join(LF) + LF + ']') |> console.log
// }