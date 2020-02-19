import { Chrono } from 'elprimero'
import { CrosTabX } from 'xbrief'
import { tr } from '@spare/util'
import { Ziggurat } from 'roulett'
import { Ar } from 'veho'

const zig = new Ziggurat(12, 6)

const next = tx => tx.repeat(Math.abs(~~zig.next()))

class EntriesMaxLenStrategies {
  static test () {
    const maxLen = ve => Math.max.apply(null, ve.map(it => it.length))
    const { lapse, result } = Chrono.strategies({
      repeat: 1E+6,
      paramsList: {
        simple: [[['f', 'b'], ['foo', 'ba'], ['fo', 'bass'], ['fo', 'ba'], ['f', 'b']]],
        longer: [Ar.ini(64, () => [next('-'), next('+')])]
      },
      funcList: {
        bench: x => x,
        dev: (entries) => {
          let km = 0, vm = 0
          for (let i = 0, l = entries.length, k, v; i < l; i++) {
            [k, v] = entries[i]
            if ((k = k.length) > km) km = k
            if ((v = v.length) > vm) vm = v
          }
          return [km, vm]
        },
        nativeAlpha: entries => tr(entries.map(([k, v]) => [k.length, v.length])).map(ve => Math.max.apply(null, ve)),
        nativeBeta: entries => tr(entries).map(maxLen)
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result |> CrosTabX.brief |> console.log
  }
}

EntriesMaxLenStrategies.test()
