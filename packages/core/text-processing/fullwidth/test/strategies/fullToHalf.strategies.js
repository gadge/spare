import { strategies } from '@valjoux/strategies'
import { decoCrostab, decoSamples } from '@spare/logger'
import { says } from '@palett/says'
import { CrosTab } from '@analys/crostab'
import { SP } from '@spare/enum-chars'
import { FWSP } from '../../src/enums/constants'
import { fullToHalf } from '../../src/fullToHalf'

const toHalfSimpleReg = function (text) {
  return text?.replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
}

const toHalfComplexReg = function (text) {
  return text
    ?.replace(/[\uff01-\uff5e]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0xfee0))
    ?.replace(/\u3000/g, '\u0020')
}

/**
 * Full-angle string -> Half-angle string
 * 全角转换为半角
 * @param {string} text
 * @returns {string}
 * @constructor
 */
export const fullToHalfClassic = (text) => {
  let l = text?.length, i = 0, t = '', n
  while (i < l && (n = text.charCodeAt(i++))) {
    if (n === FWSP) { t += SP }
    else if (0xff00 < n && n < 0xff5e) { t += String.fromCharCode(0xFF & (n + 0x20)) }
    else { t += String.fromCharCode(n) }
  }
  return t
}

const { lapse, result } = strategies({
  repeat: 3E+5,
  candidates: {
    eng: ['() awaits cyberPunk_2077![中]'],
    chs: ['（）　赛博朋克２０７７！［ｅｎｇ］'],
    ch1: ['赛'],
    en1: ['aB'],
    aeu: []
  },
  methods: {
    bench: x => x,
    toHalfClassic: fullToHalfClassic,
    toHalfEdge: fullToHalf,
    toHalfSimpleReg: toHalfSimpleReg,
    toHalfComplexReg: toHalfComplexReg,
  }
})
lapse |> decoCrostab |> says['lapse']
CrosTab.from(result).transpose().rowwiseSamples(['chs'], true, 'fn')
  |> decoSamples
  |> says['result']

