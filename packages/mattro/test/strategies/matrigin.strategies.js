import { Chrono } from 'elprimero'
import { Ar, Mx } from 'veho'
import { CrosTabX } from 'xbrief'
import { CrosTab } from 'crostab'
import { PreADev } from '../../archive/VectoginClassic'
import { MatriginDev } from '../archive/matriginDev'
import { Matrigin as PreXFut } from '../../src/matrigin'

const { ini, zip } = Ar

const copyMargin = (ar, h, ts, l) => {
  const ve = Array(l)
  for (--l; l >= ts; l--) ve[l] = ar[l]
  for (--h; h >= 0; h--) ve[h] = ar[h]
  return ve
}

class PreXStrategies {
  static testPrototype () {
    let funcList
    funcList = {
      stable: (mx, [t, b], [l, r]) => PreADev
        .fromArr(mx, t, b)
        .map(row => PreADev.fromArr(row, l, r))
        .map(preci => preci.toList('.'))
        .toList(ini(l + r + 1, '.')),
      dev: (mx, [t, b], [l, r]) => {
        let [h, w] = Mx.size(mx), ys = w - r
        let x = Array(h)
        for (let i = 0; i < t; i++) x[i] = copyMargin(mx[i], t, ys, w)
        for (let i = h - b; i < h; i++) x[i] = copyMargin(mx[i], t, ys, w)
        const dx = h - t - b, dy = w - l - r
        x = x.map(row => (row.splice(l, dy, '.'), row));
        ([, w] = Mx.size(x))
        return (x.splice(t, dx, ini(w, '.')), x)
      },
      edge: (mx, [t, b], [l, r]) => {
        const [ht, wd] = Mx.size(mx), xi = ht - b, yi = wd - r
        const [nw, ne, sw, se] = [Array(t), Array(t), Array(b), Array(b)]
        let i, j, row, lb, rb
        for (i = 0; i < t; i++) {
          row = mx[i]
          lb = Array(l)
          rb = Array(r)
          for (j = 0; j < l; j++) lb[j] = row[j]
          for (j = yi; j < wd; j++) rb[j - yi] = row[j]
          nw[i] = lb
          ne[i] = rb
        }
        for (i = ht - b; i < ht; i++) {
          row = mx[i]
          lb = Array(l)
          rb = Array(r)
          for (j = 0; j < l; j++) lb[j] = row[j]
          for (j = yi; j < wd; j++) rb[j - yi] = row[j]
          sw[i - xi] = lb
          se[i - xi] = rb
        }
        return [
          ...zip(nw, ne, (l, r) => [...l, '..', ...r]),
          ini(l + r + 1, '.'),
          ...zip(sw, se, (l, r) => [...l, '..', ...r])
        ]
      },
    }
    const { lapse, result } = Chrono.strategies({
      repeat: 3E+5,
      paramsList: {
        simple: [[
          [1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5],
          [1, 2, 3, 4, 5],
        ], [2, 1], [2, 1]],
      },
      funcList
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    for (let key of Object.keys(funcList)) {
      key |> console.log
      result.queryCell('simple', key) |> console.log
      '' |> console.log
    }
  }

  static test () {
    const mx = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
      [26, 27, 28, 29, 30],
    ]
    const prexStable = MatriginDev.fromMx(mx, [3, 1], [2, 2])
    const prexFut = PreXFut.build(mx, { vMargin: [3, 1], hMargin: [2, 2] })
    const { lapse, result } = Chrono.strategies({
      repeat: 4E+5,
      paramsList: {
        simple: [],
        misc: [],
      },
      funcList: {
        bench: x => x,
        stable: () => prexStable.toMx('.'),
        fut: () => prexFut.toMatrix('.'),
      }
    })
    'lapse' |> console.log
    lapse |> CrosTabX.brief |> console.log
    '' |> console.log
    'result' |> console.log
    result.queryCell('simple', 'fut')  |> console.log
  }
}

PreXStrategies.test()

// describe('Preci X Strategies', function () {
//   this.timeout(1000 * 60)
//   it('Preci X Strategies: test ', () => {
//     PreciXStrategies.test()
//   })
// })
