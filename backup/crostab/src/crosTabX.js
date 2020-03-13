import { AEU, lpad, RN, rpad, zhChars, isVisual, readCrop, maxLen } from '@spare/util'
import { Preci, padTable, destructPreX } from '@spare/preci'
import { hasChn, toFullAngle } from '@spare/string'
import { Greys, Palett } from 'palett'
import { Ar, Mx } from 'veho'

export class CrosTabX {
  /**
   *
   * @param {{side:*[],banner:*[],matrix:*[][],[title]:string}} crosTab
   * @param {?function(*):string} [abstract]
   * @param {{[abstract]:?function(*):string,[head]:?number,[tail]:?number}} [_s]
   * @param {{[abstract]:?function(*):string,[head]:?number,[tail]:?number}} [_b]
   * @param {{
   *          [on]:boolean,
   *          [mark]:{
   *            [max]:string|number[],
   *            [min]:string|number[],
   *            [na]:string|number[],
   *          },
   *          [direct]:number
   *         }} [visual]
   * @param {boolean} [ansi=false]
   * @param {boolean} [chinese=false]
   * @return {string}
   */
  static brief (crosTab,
    {
      abstract,
      side: _s = {
        abstract,
        head: 0,
        tail: 0
      },
      banner: _b = {
        abstract,
        head: 0,
        tail: 0
      },
      visual = {
        on: true,
        mark: {
          max: Greys.grey.lighten_5,
          min: Greys.grey.darken_1,
          na: Palett.indigo.lighten_2
        },
        direct: 2
      },
      ansi = false,
      chinese = false
    } = {}) {
    let { side, banner, matrix } = crosTab, title, cue
    const [ht, wd] = Mx.size(matrix)
    if (!ht || !wd) return AEU
    const visualOn = visual |> isVisual
    ansi = visualOn ? true : ansi
    side = Preci.fromArr(side, _s.head, _s.tail).stringify(_s.abstract).toList('..')
    banner = Preci.fromArr(banner, _b.head, _b.tail).stringify(_b.abstract).toList('..')
    const { rawx, palx, wordx } = destructPreX(
      matrix, _s |> readCrop, _b |> readCrop,
      { abstract, visual, ansi }, [ht, wd]);
    ({ title, cue, side } = padSide(side, crosTab.title || '', ansi, chinese))
    const { head, blanc, rows } = padTable(banner, wordx, rawx, palx, ansi, chinese)
    head.unshift(title)
    blanc.unshift(cue)
    Ar.zip(side, rows, (s, row) => row.unshift(s))
    return [head.join(' | '), blanc.join('-+-')].concat(
      rows.map(row => row.join(' | '))
    ).join(RN)
  }
}

const padSide = (side, title, ansi, chinese) => {
  if (chinese) return padSideCn(side, title, ansi)
  const
    ts = [title].concat(side),
    pad = maxLen(ts, ansi),
    cue = '-'.repeat(pad)
  title = rpad(title, pad, ansi)
  side = side.map(x => lpad(x, pad, ansi))
  return { title, cue, side }
}

const padSideCn = (side, title, ansi) => {
  const
    { dash, space } = zhChars,
    ts = [title].concat(side),
    pad = maxLen(ts, ansi),
    cn = ts.some(hasChn)
  if (cn) {
    title = rpad(toFullAngle(title), pad, ansi, space)
    const cue = dash.repeat(pad)
    side = side.map(x => lpad(toFullAngle(x), pad, ansi, space))
    return { title, cue, side }
  } else {
    return padSide(side, title, ansi)
  }
}


