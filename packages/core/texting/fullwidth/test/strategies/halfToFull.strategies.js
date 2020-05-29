import { CrosTab }                  from '@analys/crostab'
import { says }                     from '@palett/says'
import { delogger }                 from '@spare/deco'
import { SP }                       from '@spare/enum-full-angle-chars'
import { decoCrostab, decoSamples } from '@spare/logger'
import { strategies }               from '@valjoux/strategies'
import { FWLEAP, FWSP, HWREG }      from '../../src/enums/constants'
import { halfToFull }               from '../../src/halfToFull'
import { fracture }                 from '../utils/matches'

const toFullComplexReg = function (text) {
  let n
  return text?.replace(/[\u0020-\u007e]/g, s => String.fromCharCode((n = s.charCodeAt(0)) === 0x20 ? FWSP : n + 0xFEE0))
}

const toFullSimpleReg = function (text) {
  return text?.replace(/[A-Za-z0-9]/g, s => String.fromCharCode(s.charCodeAt(0) + 0xFEE0))
}

export const toFullClassic = (text) => {
  let l = text?.length, i = 0, t = '', n
  while (i < l && (n = text.charCodeAt(i++))) {
    if (n === 0x20) { t += SP } else if (n < 0x7f) { t += String.fromCharCode(n + FWLEAP) } else { t += String.fromCharCode(n) }
  }
  return t
}

const toFullTisko = text => {
  let rs = ''
  for (let i = 0, l = text?.length; i < l; i++) {
    if (text[i] >= '!' && text[i] <= '~') { // Check whether character is latin
      rs += String.fromCharCode(text.charCodeAt(i) - 0x20 + 0xff00) // Convert to fullwidth
    } else if (text[i] === ' ') {
      rs += '　'
    } else {
      rs += text[i]
    }
  }
  return rs
}

fracture('() awaits cyberPunk_2077![中]', HWREG) |> delogger

const { lapse, result } = strategies({
  repeat: 3E+5,
  candidates: {
    eng: ['() awaits cyberPunk_2077![中]'],
    chs: ['（）　赛博朋克２０７７！［ｅｎｇ］'],
    mixed: ['(赛博-朋克)'],
    ch1: ['赛'],
    en1: ['aB'],
    empty: [''],
    aeu: []
  },
  methods: {
    toFullClassic: toFullClassic,
    toFullTisko: toFullTisko,
    halfToFull: halfToFull,
    toFullComplexReg: toFullComplexReg,
    toFullSimpleReg: toFullSimpleReg
  },
  showParams: false,
})
lapse |> decoCrostab |> says['lapse']
CrosTab.from(result).transpose().rowwiseSamples(['eng'], true, 'fn')
  |> decoSamples
  |> says['result']

