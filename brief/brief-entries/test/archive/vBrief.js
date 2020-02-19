import { Greys, Palett } from 'palett'
import { AEU, isVisual, lpad, npad, RN, totx } from '@spare/util'
import { lange } from '@spare/lange'
import { Preci } from '@spare/preci'
import { Visual } from 'hatsu-matrix'

/***
 *
 * @param {[*,*][]} entries
 * @param {string} [delimiter=' => ']
 * @param {function(*):string} [keyAbstract]
 * @param {function(*):string} [abstract]
 * @param {number} [head]
 * @param {number} [tail]
 * @param {{ [max]:string|number[],
 *           [min]:string|number[],
 *           [na]: string|number[] }} [visual]
 * @param {boolean} [ansi=false]
 * @returns {string}
 */
export const vBrief = (entries, {
  delimiter = ' -> ',
  keyAbstract,
  abstract,
  head,
  tail,
  visual = {
    max: Palett.lightGreen.accent_3,
    min: Palett.orange.accent_2,
    na: Greys.blueGrey.lighten_3,
  },
  ansi = false
} = {}) => {
  const visualOn = visual |> isVisual
  ansi = visualOn ? true : ansi
  const [brfL, brfR] = [
    keyAbstract ? (_ => String(keyAbstract(_))) : totx,
    abstract ? (_ => String(abstract(_))) : totx
  ]
  let
    len = ansi ? lange : x => x.length,
    pL = 0, pR = 0, vL, vR, wL, wR,
    preci = Preci.fromArr(entries, head, tail),
    raws = preci.toList(['..', '..']),
    vis = visualOn
      ? Visual.column(raws, 1, { mark: visual.mark, retFn: true, mutate: false },)
      : null,
    ents = preci.map(([k, v]) => {
      [vL, vR] = [brfL(k), brfR(v)];
      [wL, wR] = [len(vL), len(vR)];
      [pL, pR] = [wL > pL ? wL : pL, wR > pR ? wR : pR]
      return [vL, vR]
    }).toList(['..', '..']),
    list = visualOn
      ? ents.map(([k, v], i) =>
        lpad(k, pL, ansi) + delimiter +
        npad(v, raws[i][1], pR, ansi) |> vis[i][1])
      : ents.map(([k, v], i) =>
        lpad(k, pL, ansi) + delimiter +
        npad(v, raws[i][1], pR, ansi))
  return list.length ? list.join(RN) : AEU
}
