import { says }                       from '@spare/logger'
import { decoCrostab, decoSamples }   from '@spare/logger'
import { strategies }                 from '@valjoux/strategies'
import { CharCodeToHalf, fullToHalf } from '../../src/fullToHalf'

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
    t += 0x3000 < n && n < 0x303f
      ? CharCodeToHalf.cjkPunc(n)
      : 0xff00 < n && n < 0xff5e
        ? String.fromCharCode(0xFF & (n + 0x20))
        : String.fromCharCode(n)
  }
  return t
}

const { lapse, result } = strategies({
  repeat: 3E+5,
  candidates: {
    aeu: [],
    mixed_1: ['（赛博朋克２０７７）'],
    mixed_2: ['"Adam \'Smasher\'"'],
    mixed_3: ['中文：生命．．．梦想．．．希望．．．它们从哪里来？　English:Life...Dreams...Hope...Where\'d they come from? '],
    han_1: ['＂亚当·＇碎骨＇＂'],
    han_2: ['“强尼·‘银手’”'],
    han_3: ['万事皆允。'],
    han_4: ['山'],
    num_full: ['－１，２３４，５６７．８９０'],
    eng_half: ['Shakes'],
    eng_full_1: ['［Ｎｉｇｈｔ　Ｃｉｔｙ］'],
    eng_full_2: ['【ＬＥＡＨ】ＲＵＮ！'],
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
// CrosTab.from(result).transpose().rowwiseSamples(['chs'], true, 'fn')
//   |> decoSamples
//   |> says['result']
result |> decoSamples |> says['result']
