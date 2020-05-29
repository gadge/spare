// import { max } from '../src/vectorStringProperties'
import { simpleVectors } from '@foba/foo'
import { makeEmbedded }  from '@foba/util'
import { lange }         from '@spare/lange'
import { mapper }        from '@vect/object-mapper'
import { Chrono }        from 'elprimero'
import { CrosTabX }      from 'xbrief'

const { max } = Math
const ShortVectors = simpleVectors({ h: 12 })
const LongVectors = simpleVectors({ h: 256 })
const { lapse, result } = Chrono.strategies({
  repeat: 5E+5,
  paramsList: mapper(ShortVectors, v => v.map(String)) |> makeEmbedded,
  funcList: {
    stable: ar => ar.map(x => x.length),
    maxLenEdge: ar => max.apply(null, ar.map(x => x.length)),
    maxLenDev: ar => {
      let wd = 0, l
      ar.map(x => { if ((l = x.length) > wd) wd = l })
      return wd
    },
    // lenMaxSnappy: max,
    maxLenFut: ar => ar.reduce((p, n) => (n = n.length) > p ? n : p, 0),
    maxLenStable: (arr, ansi = false) => ansi
      ? Math.max(...arr.map(x => x ? lange(x) : 0))
      : Math.max(...arr.map(x => x?.length ?? 0)),

  }
})

'lapse' |> console.log
lapse |> CrosTabX.brief |> console.log
'' |> console.log
'result' |> console.log
result |> CrosTabX.brief |> console.log
