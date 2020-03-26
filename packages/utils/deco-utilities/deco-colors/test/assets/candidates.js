import { NumberObjectCollection, StringObjectCollection } from '@foba/object'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { randMatrix, simpleObjects } from '@foba/foo'
import { flop, rand } from '@aryth/rand'

const randNumMatrix = randMatrix({ h: 3, w: 8 })

export const Basics = {
  null: null,
  undefined: undefined,
  boolean: Boolean(rand(2)),
  string: StringVectorCollection.flopShuffle({}) |> flop,
  number: NumberVectorCollection.flopShuffle({}) |> flop,
  date: new Date()
}

export const Vectors = {
  void_vec: [],
  str_vec: StringVectorCollection.flopShuffle({}),
  num_vec: NumberVectorCollection.flopShuffle({}),
  inno_set: new Set(NumberVectorCollection.flopShuffle({})),
  long_vec: StringVectorCollection.flopShuffle({ size: 32 })
}

export const Matrices = {
  inno_row: [randNumMatrix[0]],
  inno_column: randNumMatrix.map(([x]) => [x]),
  inno_matrix: randNumMatrix,
  void_matrix: [[]],
  nest_matrix: [[[[[[[[[]]]]]]]]],
  inno_entries: (Object.entries(StringObjectCollection.flopShuffle({}))),
}

export const Misc = {
  inno_map: new Map(Object.entries(NumberObjectCollection.flopShuffle({}))),
  inno_lambda: x => `${x}`,
}

export const Objects = {
  inno_object: StringObjectCollection.flopShuffle({}),
  nest_object: {
    aA: '123',
    bB: { cD: '456', dD: { eE: '789', fF: { gG: '135', hH: { iI: '246', jJ: { kK: '357', lL: '...' } } } } }
  },
  json: {
    foo: NumberVectorCollection.flopShuffle({}),
    bar: simpleObjects(),
    kha: [[
      NumberVectorCollection.flopShuffle({}),
      NumberVectorCollection.flopShuffle({}),
      NumberVectorCollection.flopShuffle({})
    ]],
  }
}

