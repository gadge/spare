import { Chrono }          from 'elprimero'
import { CrosTabX }        from 'xbrief'
import { VectorMargin }        from '../../../src/VectorMargin'
import { VectorMarginClassic } from '../VectorMarginClassic'

export class VectorMarginStrategies {
  static test () {
    const funcList = {
      dev: (ar, head, tail) => VectorMarginClassic.fromArr(ar, head, tail).toList('..'),
      fut: (ar, head, tail) => VectorMargin.build(ar, head, tail).toVector('..'),
    }
    const { lapse, result } = Chrono.strategies({
      repeat: 1E+6,
      paramsList: {
        simple1: [[1, 2, 3, 4, 5, 6], 0, 0],
        simple2: [[1, 2, 3, 4, 5, 6], 3, 0],
        simple3: [[1, 2, 3, 4, 5, 6], 0, 2],
        simple4: [[1, 2, 3, 4, 5, 6], 3, 2],
        simple5: [[1, 2, 3, 4, 5, 6], 6, 0],
        simple6: [[1, 2, 3, 4, 5, 6], 5, 3],
        simple7: [[1, 2, 3, 4, 5, 6], 5, 7],
        simple8: [[1, 2, 3, 4, 5, 6], 5, undefined],
        simple9: [[1, 2, 3, 4, 5, 6], undefined, undefined],
        // utils: [],
      },
      funcList
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result |> CrosTabX.brief |> console.log
  }
}

VectorMarginStrategies.test()

// describe('Preci Strategies', function () {
//   this.timeout(1000 * 60)
//   it('Preci Strategies: test ', () => {
//     PreciStrategies.test()
//   })
// })
