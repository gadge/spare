import { Chrono } from 'elprimero'
import { Preci as PreciStable } from '../../../src/Preci'
import { PreciDev } from './src/PreciDev'
import { CrosTabX } from 'xbrief'

export class PreciStrategies {
  static test () {
    const funcList = {
      stable: (ar, head, tail) => PreciStable.fromArr(ar, head, tail).toList('..'),
      dev: (ar, head, tail) => PreciDev.fromArr(ar, head, tail).toList('..'),
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

PreciStrategies.test()

// describe('Preci Strategies', function () {
//   this.timeout(1000 * 60)
//   it('Preci Strategies: test ', () => {
//     PreciStrategies.test()
//   })
// })
