import { Presm }                from '@palett/pres'
import { METRO, OCEAN, SUBTLE } from '@palett/presets'
import { indexed }              from '@vect/object-mapper'
import { test }                 from 'node:test'
import { Node }                 from '../src/Node.js'

const MATRICES = {
  emptyMatrix: [ [] ],
  oneRow: [ [ 0, 0, 1, 8 ] ],
  oneColumn: [ [ 0 ], [ 9 ], [ 11 ] ],
  oneColumn2: [ [ 'Imperial' ], [ 'Castle' ], [ 'Feudal' ], [ 'Dark' ] ],
  pos: [ [ 0, 0, 1, 8 ], [ 9, 10, 11, 11 ], [ 11, 13, 14, 14 ] ],
  neg: [ [ 0, 0, -1, -8 ], [ -9, -10, -11, -11 ], [ -11, -13, -14, -14 ] ],
  mix: [ [ 0, 0, -1, -8 ], [ 9, 10, 11, 11 ], [ -11, -13, -14, -14 ] ],
}

test('node matrix fuse', () => {
  const node = new Node({ fill: ' ', ansi: true, pres: Presm.build(SUBTLE, OCEAN, METRO) })
  console.log(MATRICES)
  for (let [ key, mat ] of indexed(MATRICES)) {
    try{
      // console.log(Passage.triMatrix(matrices[key], rows[key], columns[key]))
      console.log(key)
      console.log(node.matrix(mat))
    }
    catch (e){
      console.log('error', e);
    }
  }
})

