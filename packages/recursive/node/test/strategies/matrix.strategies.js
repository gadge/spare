import { makeEmbedded }                                   from '@foba/util'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'
import { BESQUE, METRO, PLANET }                          from '@palett/presets'
import { COSP, LF }                                       from '@texting/enum-chars'
import { strategies }                                     from '@valjoux/strategies'
import { reshape }                                        from '@vect/matrix-init'
import { node }                                           from '../../../deco/target/node.js'
import { Passage }                                        from '../../../deco/test/helpers/Passage.js'
import { fluoMatrix }                                     from '../resources/fluoMatrix.js'
import { node as TypoB }                                  from '../resources/node.js'

const MATRICES = {
  empty: [ [] ],
  arith: reshape(NumberVectorCollection.fibonacci(16), 4, 4),
  mirror: reshape(NumberVectorCollection.absoluteMirror(12, 3), 3, 4),
  // values: [
  //   [ 855252.72, -99.73, -68.269, -31 ],
  //   [ -4.669, -2.718, 2.718, 4.669 ],
  //   [ 31, 68.269, 99.73, -855252.72 ],
  // ],
  cities: reshape(StringVectorCollection.megaCities.slice(0, 12), 4, 3)
  // supers: reshape(StringVectorCollection.powerCars.slice(0, 18), 3, 6)
  // textNum: NumberVectorCollection.primes(7).map(String),
  // nums: [ 1, 2, 3, 0, -1, -2, -3 ],
  // alpha: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n' ],
  // misc: [ null, undefined, NaN, 'Infinity', '+', 1.2E+1, 1.2E+2, 1.2E+3, 1.2E+4 ],
  // combo: [ 'kfc', 'starbucks', 'pepsi', '', '1', -12, '-36', 0, 500 ]
}


const node = new node({ fill: ' ', ansi: true, pres: { pos: BESQUE, neg: PLANET, str: METRO } })
const typoB = new TypoB({ fill: ' ', ansi: true, pres: { pos: BESQUE, neg: PLANET, str: METRO } })
const DECO_CONF = { ansi: true, presets: [ BESQUE, METRO ] }


MATRICES |> console.log

const { lapse, result } = strategies({
  repeat: 2E+4,
  candidates: MATRICES|> makeEmbedded,
  methods: {
    ben: x => x,
    fluo: mat => fluoMatrix.call(DECO_CONF, mat),
    beta: mat => typoB.matrix(mat).map(row => '[ ' + row.join(COSP) + ' ]').join(LF),
    node: mat => {
      if (!mat.length || !mat[0].length) return mat
      return node.matrix(mat, COSP)
      // return Lines.join(iter, LF)
    }
    // amb: mat => {
    //   return Ambit.fromMatrix(genTypo, mat)
    // }
  },
  showPretty: false
})

for (let side of result.side) {
  side |> console.log
  const a = result.cell(side, 'fluo')
  const b = result.cell(side, 'beta')
  const c = result.cell(side, 'node')
  Passage.triMatrix(a, b, c) |> console.log
  // result.cell(side, 'node') |> console.log
}

lapse |> console.log