import { makeEmbedded }                                   from '@foba/util'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { Padder }                                         from '@texting/padder'
import { strategies }                                     from '@valjoux/strategies'
import { length }                                         from '@texting/lange'
import { maxBy }                                          from '@vect/vector-indicator'

const Strangers = {
  empty: [],
  arithmetic: NumberVectorCollection.fibonacci(12),
  stringed: StringVectorCollection.megaCities.slice(0, 7),
  textNum: NumberVectorCollection.primes(7).map(String),
  nums: [ 1, 2, 3, 0, -1, -2, -3 ],
  alpha: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
  misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ],
  combo: [ 'kfc', 'starbucks', 'pepsi', '', '1', -12, '-36', 0, 500 ]
}

const ENCODER = new TextEncoder()

const { lapse, result } = strategies({
  repeat: 1E+5,
  candidates: {
    food: [ 'kfc', 'starbucks', 'pepsi' ],
  } |> makeEmbedded,
  methods: {
    ben: x => {
      const size = 255
      const vec = Array(size)
      for (let i = 0; i < size; i++) {
        vec[i] = i
      }
      return vec
    },
    // cla: x => {
    //   const size = 255
    //   const vec = new Uint8Array(size)
    //   for (let i = 0; i < size; i++) {
    //     vec[i] |= i
    //   }
    //   return vec
    // },
    // lpad: vec => {
    //   const width = maxBy(vec, length)
    //   const padder = new Padder(width)
    //   return vec.map(x => padder.lpad(x))
    //   // return vec.map(x => x.padStart(width))
    // },
    // byte: vec => {
    //   const width = maxBy(vec, Buffer.byteLength)
    //   return vec.map(x => {
    //     const store = new Uint8Array(width)
    //     ENCODER.encodeInto(x, store)
    //     return store
    //     // const view = ENCODER.encode(x)
    //     // return view
    //   })
    // },
    mat0: () => {
      const h = 16, w = 12
      const n = h * w
      const vec = Array(n)
      for (let i = 0; i < n; i++) { vec[i] = i }
      return vec
    },
    mat1: () => {
      const h = 16, w = 12
      const vec = Array(h)
      for (let i = 0, r; i < h; i++) {
        vec[i] = r = Array(w)
        for (let j = 0; j < w; j++) {
          r[j] = j
        }
      }
      return vec
    }

  },
  showPretty: false,
})


for (let side of result.side)
  result.cell(side, 'byte') |> console.log

lapse |> console.log