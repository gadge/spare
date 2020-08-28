import { Chrono }   from 'elprimero'
import { CrosTabX } from 'xbrief'

function marginStable (ar, h = 0, t = 0) {
  let l
  if (!(l = ar?.length)) [h, t] = [0, 0]
  if (!h || h >= l) [h, t] = [l, 0]
  const vec = Array(l)
  for (let i = 0; i < h; i++) vec[i] = ar[i]
  for (let i = l - t; i < l; i++) vec[i] = ar[i]
  return vec
}

function marginFut (ar, h = 0, t = 0) {
  let l = ar?.length
  if (!l) (ar = [], h = 0, t = 0)
  if ((!h && !t) || h >= l) (h = l, t = 0)
  const vec = Array(l)
  for (let i = 0; i < h; i++) vec[i] = ar[i]
  for (let i = l - t; i < l; i++) vec[i] = ar[i]
  return vec
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const { lapse, result } = Chrono.strategies({
  repeat: 2E+6,
  paramsList: {
    h2t1: [arr, 2, 1],
    h5t5: [arr, 5, 4],
    h3t0: [arr, 3, 0],
    h0t3: [arr, 0, 3],
    h6t6: [arr, 6, 6],
  },
  funcList: {
    bench: x => x,
    stable: marginStable,
    fut: marginFut
  }
})
'lapse' |> console.log
lapse |> CrosTabX.brief |> console.log
'' |> console.log
'result' |> console.log
result |> CrosTabX.brief |> console.log


