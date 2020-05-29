import { says }        from '@palett/says'
import { decoCrostab } from '@spare/logger'
import { strategies }  from '@valjoux/strategies'

const encoder = new TextEncoder()

const isUpper = n => n > 64 && n <= 90
const wordToLower = word => {
  const ui8vec = encoder.encode(word)
  for (let i = 0, l = ui8vec.length; i < l; i++)
    if (isUpper(ui8vec[i])) ui8vec[i] += 32
  return String.fromCharCode.apply(null, ui8vec)
}

const iterateClassic = word => {
  let tx = ''
  for (let i = 0, l = word?.length, n; i < l; i++) {
    if (isUpper(n = word.charCodeAt(i))) n += 32
    tx += String.fromCharCode(n)
  }
  return tx
}

const { lapse, result } = strategies({
  repeat: 1E+6,
  candidates: {
    simple: ['123ABC_def'],
    misc: [],
  },
  methods: {
    bench: x => x,
    classic: iterateClassic,
    dev: wordToLower,
    edge: x => x?.toLowerCase(),
  }
})
lapse |> decoCrostab |> says['lapse']
result |> decoCrostab |> says['result']

