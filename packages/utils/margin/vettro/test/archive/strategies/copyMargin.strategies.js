import { Chrono }     from 'elprimero'
import { CrosTabX }   from 'xbrief'
import { copyMargin } from '../../utils/copyMargin'

export class CopyMarginStrategies {

  static test () {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const { lapse, result } = Chrono.strategies({
      repeat: 2E+6,
      paramsList: {
        simple: [arr, 4, 3],
        headOnly: [arr, 2],
        tailOnly: [arr, , 5],
      },
      funcList: {
        bench: x => x,
        stable: copyMargin,
        classic: (ar, l, r) => {
          return ar.slice(0, l).concat(ar.slice(-r))
        },
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result |> CrosTabX.brief |> console.log
  }
}

CopyMarginStrategies.test()
