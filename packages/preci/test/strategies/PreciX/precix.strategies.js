import { Chrono } from 'elprimero'
import { Ar, Mx } from 'veho'
import { CrosTabX } from 'xbrief'
import { CrosTab } from 'crostab'
import { PreciDev } from '../Preci/src/PreciDev'

const { ini, zip } = Ar

const copyCropArr = (ar, h, ts, l) => {
  const _r = Array(l)
  for (--l; l >= ts; l--) _r[l] = ar[l]
  for (--h; h >= 0; h--) _r[h] = ar[h]
  return _r
}

class PreciXStrategies {
  static test () {
    let funcList
    funcList = {
      stable: (mx, [xh, xt], [yh, yt]) => {
        const preci = PreciDev
          .fromArr(mx, xh, xt)
          .map(row => PreciDev
            .fromArr(row, yh, yt)
          )
        return preci.map(preci => preci.toList('.')).toList(ini(yh + yt + 1, '.'))
      },
      dev: (mx, [xh, xt], [yh, yt]) => {
        const [ht, wd] = Mx.size(mx), ys = wd - yt
        let _mx = Array(ht)
        let i
        for (i = 0; i < xh; i++) _mx[i] = copyCropArr(mx[i], xh, ys, wd)
        for (i = ht - xt; i < ht; i++) _mx[i] = copyCropArr(mx[i], xh, ys, wd)
        // return _mx
        const [dx, dy] = [ht - xh - xt, wd - yh - yt]
        _mx = _mx.map(row => {
          row.splice(yh, dy, '..')
          return row
        })
        const [_ht, _wd] = Mx.size(_mx)
        _mx.splice(xh, dx, ini(_wd, '..'))
        return _mx
      },
      edge: (mx, [xh, xt], [yh, yt]) => {
        const [ht, wd] = Mx.size(mx), xi = ht - xt, yi = wd - yt
        const [nw, ne, sw, se] = [Array(xh), Array(xh), Array(xt), Array(xt)]
        let i, j, r, lb, rb
        for (i = 0; i < xh; i++) {
          r = mx[i]
          lb = Array(yh)
          rb = Array(yt)
          for (j = 0; j < yh; j++) lb[j] = r[j]
          for (j = yi; j < wd; j++) rb[j - yi] = r[j]
          nw[i] = lb
          ne[i] = rb
        }
        for (i = ht - xt; i < ht; i++) {
          r = mx[i]
          lb = Array(yh)
          rb = Array(yt)
          for (j = 0; j < yh; j++) lb[j] = r[j]
          for (j = yi; j < wd; j++) rb[j - yi] = r[j]
          sw[i - xi] = lb
          se[i - xi] = rb
        }
        // return { nw, ne, sw, se }
        return [
          ...zip(nw, ne, (l, r) => [...l, '..', ...r]),
          ini(yh + yt + 1, '.'),
          ...zip(sw, se, (l, r) => [...l, '..', ...r])
        ]
        // return zip(nw, ne, (l, r) => l.concat(['.'], r))
        //   .concat(
        //     [ini(yh + yt + 1, '.')],
        //     zip(sw, se, (l, r) => l.concat(['.'], r))
        //   )
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
}

PreciXStrategies.test()

// describe('Preci X Strategies', function () {
//   this.timeout(1000 * 60)
//   it('Preci X Strategies: test ', () => {
//     PreciXStrategies.test()
//   })
// })
