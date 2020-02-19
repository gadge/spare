import { FobaNum, FobaStr } from '@foba/object'
import { FobaNum as VecFobaNum, FobaStr as VecFobaStr } from '@foba/vector'
import { randMatrix, simpleObjects } from '@foba/foo'
import { flop, rand } from '@aryth/rand'

const randNumMatrix = randMatrix({ h: 3, w: 8 })

export const Basics = {
  null: null,
  undefined: undefined,
  boolean: Boolean(rand(2)),
  string: VecFobaStr.flop() |> flop,
  number: VecFobaNum.flop() |> flop,
}

export const Vectors = {
  void_vec: [],
  str_vec: VecFobaStr.flop(),
  num_vec: VecFobaNum.flop(),
  inno_set: new Set(VecFobaNum.flop()),
}

export const Matrices = {
  inno_row: [randNumMatrix[0]],
  inno_column: randNumMatrix.map(([x]) => [x]),
  inno_matrix: randNumMatrix,
  void_matrix: [[]],
  nest_matrix: [[[[[[[[[]]]]]]]]],
  inno_entries: (Object.entries(FobaStr.flop())),
}

export const Misc = {
  inno_map: new Map(Object.entries(FobaNum.flop())),
  inno_lambda: x => `${x}`,
}

export const Objects = {
  inno_object: FobaStr.flop(),
  nest_object: {
    aA: '123',
    bB: { cD: '456', dD: { eE: '789', fF: { gG: '135', hH: { iI: '246', jJ: { kK: '357', lL: '...' } } } } }
  },
  json: {
    foo: VecFobaNum.flop(),
    bar: simpleObjects(),
    shake: [[VecFobaNum.flop(), VecFobaNum.flop(), VecFobaNum.flop()]],
  }
}

