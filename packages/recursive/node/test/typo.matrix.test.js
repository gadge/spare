import { BESQUE, METRO, OCEAN }           from '@palett/presets'
import { COLUMNWISE, POINTWISE, ROWWISE } from '@vect/matrix'
import { indexed, mapVal }                from '@vect/object-mapper'
import { test }                           from 'node:test'
import { Node }                           from '../src/Node.js'
import { Passage }                        from './helpers/Passage.js'

const MATRICES = {
  emptyMatrix: [ [] ],
  oneRow: [ [ 0, 0, 1, 8 ] ],
  oneColumn: [ [ 0 ], [ 9 ], [ 11 ] ],
  pos: [ [ 0, 0, 1, 8 ], [ 9, 10, 11, 11 ], [ 11, 13, 14, 14 ] ],
  neg: [ [ 0, 0, -1, -8 ], [ -9, -10, -11, -11 ], [ -11, -13, -14, -14 ] ],
  mix: [ [ 0, 0, -1, -8 ], [ 9, 10, 11, 11 ], [ -11, -13, -14, -14 ] ]
}

test('node matrix', () => {
  const node = new Node({ fill: ' ', ansi: true, pres: { pos: BESQUE, neg: OCEAN, str: METRO } })
  const matrices = mapVal(MATRICES, mat => node.matrix(mat, POINTWISE, 2))
  const rows = mapVal(MATRICES, mat => node.matrix(mat, ROWWISE))
  const columns = mapVal(MATRICES, mat => node.matrix(mat, COLUMNWISE))

  console.log(MATRICES)
  for (let [ key, mat ] of indexed(MATRICES)) {
    console.log(`[${key}] (pointwise, rowwise, columnwise)`)
    console.log(Passage.triMatrix(matrices[key], rows[key], columns[key]))
  }
})

