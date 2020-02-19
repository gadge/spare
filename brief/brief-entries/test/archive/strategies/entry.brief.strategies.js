import { Chrono } from 'elprimero'
import { CrosTabX } from 'xbrief'
import { vBrief } from '../vBrief'
import { brief } from '../../../src/brief'
import { Megacities, Recessions, SuperCars } from '@spare/foobar'

export class EntryBriefStrategies {
  static test () {
    const { lapse, result } = Chrono.strategies({
      repeat: 1E+5,
      paramsList: {
        megacities: [Object.entries(Megacities)],
        recessions: [[['foo', 'bar']]],
      },
      funcList: {
        stable: x => x,
        vBrief,
        brief,
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result.queryCell('megacities', 'brief') |> console.log
  }
}

EntryBriefStrategies.test()
