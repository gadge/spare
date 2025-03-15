import { Chrono }      from 'elprimero'
import { CrosTabX }    from 'xbrief'
import { indexMaxLen } from '../../src/vectorStringProperties'

class VectorStringPropertiesTest {
  static test () {
    const { lapse, result } = Chrono.strategies({
      repeat: 3E+6,
      paramsList: {
        simple: [[]],
        misc: [[1, 2, 3, 4, 5]],
        ordinary: [Array.from({ length: 96 })],
        longer: [Array.from({ length: 1024 })]
      },
      funcList: {
        bench: x => x,
        stable: ar => ~~(Math.log10(ar.length) + 1),
        indexMaxLen,
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result |> CrosTabX.brief |> console.log
  }
}

VectorStringPropertiesTest.test()
