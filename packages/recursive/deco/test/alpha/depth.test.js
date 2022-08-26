import { RTSP }     from '@texting/enum-chars'
import { indexed }  from '@vect/object-mapper'
import { isVector } from '@vect/vector-index'

const ARRAYS = {
  null: null,
  empty: [],
  empty2: [ [] ],
  vec: [ 1, 2, 3 ],
  mat: [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ],
  col: [ [ 1 ], [ 1 ], [ 1 ] ],
  row: [ [ 1, 2, 3 ] ],
  cube: [
    [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
    [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ],
    [ [ 1, 4, 9 ], [ 1, 4, 9 ], [ 1, 4, 9 ] ]
  ]
}


export function depth(node) {
  let d = 0
  while (true) {
    if (isVector(node)) { [ node ] = node, d++ }
    else { return d }
  }
}

for (let [ k, x ] of indexed(ARRAYS)) {
  k + RTSP + depth(x) |> console.log
}
